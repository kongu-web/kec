/**
 * Centralised Faculty API Client
 * Interfaces with backend Linways endpoints (/kec/linways/*)
 * KEC Backend (https://api.kongu.edu / http://localhost:8000)
 */

const getApiBaseUrl = () => {
  return process.env.REACT_APP_API_BASE_URL || process.env.REACT_APP_API_URL || '';
};

const DEFAULT_TIMEOUT_MS = 12000;

export class FacultyApiError extends Error {
  constructor(message, status = 0, code = 'API_ERROR', details = null) {
    super(message);
    this.name = 'FacultyApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

const apiRequest = async (endpoint, options = {}) => {
  const { timeout = DEFAULT_TIMEOUT_MS, signal: externalSignal, ...fetchOptions } = options;
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${endpoint}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  if (externalSignal) {
    if (externalSignal.aborted) {
      clearTimeout(timeoutId);
      throw new FacultyApiError('Request aborted', 0, 'ABORTED');
    }
    externalSignal.addEventListener('abort', () => controller.abort());
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        ...(fetchOptions.headers || {})
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorBody = null;
      try {
        errorBody = await response.json();
      } catch {}

      throw new FacultyApiError(
        (errorBody && errorBody.message) || `Request failed with status ${response.status}`,
        response.status,
        'HTTP_ERROR',
        errorBody
      );
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new FacultyApiError('Request timed out or was aborted', 0, 'TIMEOUT');
    }
    if (error instanceof FacultyApiError) throw error;
    throw new FacultyApiError(error.message || 'Network request failed', 0, 'NETWORK_ERROR');
  }
};

/**
 * 1. Fetch staff members for a specific department
 * Endpoint: GET /kec/linways/departments/{dept_slug}
 */
export const fetchStaffByDepartment = async (deptSlug, options = {}) => {
  if (!deptSlug) throw new FacultyApiError('Department is required', 400);
  return apiRequest(`/kec/linways/departments/${encodeURIComponent(deptSlug)}`, options);
};

/**
 * 2. Fetch complete ExAT Academic Portfolio for a single faculty member
 * Endpoint: GET /kec/linways/staff/{staff_id}/report
 */
export const fetchFacultyReport = async (staffId, options = {}) => {
  if (!staffId) throw new FacultyApiError('Staff ID is required', 400);
  return apiRequest(`/kec/linways/staff/${encodeURIComponent(staffId)}/report`, options);
};

/**
 * 3. Fetch all staff members across all departments
 * Endpoint: GET /kec/linways/staffs
 */
export const fetchStaffMembers = async (options = {}) => {
  return apiRequest('/kec/linways/staffs', options);
};

/**
 * 4. Fetch all ExAT report categories
 * Endpoint: GET /kec/linways/exat2/reports
 */
export const fetchExatReportsCategories = async (options = {}) => {
  return apiRequest('/kec/linways/exat2/reports', options);
};

/**
 * 5. Fetch all Linways Forms
 * Endpoint: GET /kec/linways/exat2/forms
 */
export const fetchExatForms = async (options = {}) => {
  return apiRequest('/kec/linways/exat2/forms', options);
};

/**
 * 6. Fetch Linways Form Report by form_id and target_id
 * Endpoint: GET /kec/linways/exat2/forms/reports/{form_id}/{target_id}
 */
export const fetchExatFormReport = async (formId, targetId, options = {}) => {
  return apiRequest(`/kec/linways/exat2/forms/reports/${encodeURIComponent(formId)}/${encodeURIComponent(targetId)}`, options);
};
