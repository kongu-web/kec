/**
 * Centralised Faculty API Client
 * Interfaces with backend Linways endpoints (/kec/linways/*)
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
 * Fetch all staff members across all departments
 * Endpoint: GET /kec/linways/staffs (or /api/faculty/staff)
 */
export const fetchStaffMembers = async (options = {}) => {
  try {
    return await apiRequest('/kec/linways/staffs', options);
  } catch {
    return apiRequest('/api/faculty/staff', options);
  }
};

/**
 * Fetch staff members for a specific department
 * Endpoint: GET /kec/linways/departments/:deptSlug
 */
export const fetchStaffByDepartment = async (deptSlug, options = {}) => {
  if (!deptSlug) throw new FacultyApiError('Department is required', 400);
  try {
    return await apiRequest(`/kec/linways/departments/${encodeURIComponent(deptSlug)}`, options);
  } catch {
    return apiRequest(`/api/faculty/staff/${encodeURIComponent(deptSlug)}`, options);
  }
};

/**
 * Fetch complete ExAT Academic Portfolio for a single faculty member
 * Endpoint: GET /kec/linways/staff/:staffId/report
 */
export const fetchFacultyReport = async (staffId, options = {}) => {
  if (!staffId) throw new FacultyApiError('Staff ID is required', 400);
  try {
    return await apiRequest(`/kec/linways/staff/${encodeURIComponent(staffId)}/report`, options);
  } catch {
    return apiRequest(`/api/faculty/report/${encodeURIComponent(staffId)}`, options);
  }
};
