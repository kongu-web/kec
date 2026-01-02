export const GOOGLE_DRIVE_CONFIG = {
  API_KEY: process.env.REACT_APP_GOOGLE_DRIVE_API_KEY,
  FOLDER_ID: process.env.REACT_APP_GOOGLE_DRIVE_FOLDER_ID,
};

// URL builders
export const driveUrlApi = (id, apiKey) =>
  `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${apiKey}`;
export const driveUrlThumb = (id, size = 1920) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
export const driveUrlView = (id) =>
  `https://drive.google.com/uc?export=view&id=${id}`;
export const driveUrlLh3 = (id) =>
  `https://lh3.googleusercontent.com/d/${id}`;

// Fetch images from Google Drive folder (images only)
export const fetchGoogleDriveImages = async (folderId, apiKey) => {
  if (!apiKey) throw new Error('Google Drive API key is not configured. Add REACT_APP_GOOGLE_DRIVE_API_KEY to .env');
  if (!folderId) throw new Error('Google Drive Folder ID is not configured. Add REACT_APP_GOOGLE_DRIVE_FOLDER_ID to .env');

  const url =
    `https://www.googleapis.com/drive/v3/files` +
    `?q='${folderId}' in parents and mimeType contains 'image/'` +
    `&fields=files(id,name,mimeType,webContentLink,thumbnailLink,webViewLink)` +
    `&key=${apiKey}`;

  const resp = await fetch(url);
  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error?.message || `HTTP error! status: ${resp.status}`);
  }

  const data = await resp.json();
  if (!data.files || data.files.length === 0) return [];

  return data.files.map((file) => ({
    id: file.id,
    name: file.name,
    // Primary + fallbacks
    url: driveUrlApi(file.id, apiKey),
    url2: driveUrlThumb(file.id, 1920),
    url3: driveUrlView(file.id),
    url4: driveUrlLh3(file.id),
    thumbnail: file.thumbnailLink,
    mimeType: file.mimeType,
  }));
};
