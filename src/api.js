const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => fetch(`${API_URL}/users`).then(res => res.json());
export const fetchUserById = (id) => fetch(`${API_URL}/users/${id}`).then(res => res.json());
export const fetchAlbumsByUserId = (userId) => fetch(`${API_URL}/users/${userId}/albums`).then(res => res.json());
export const fetchAlbumById = (id) => fetch(`${API_URL}/albums/${id}`).then(res => res.json());
export const fetchPhotosByAlbumId = (albumId) => fetch(`${API_URL}/albums/${albumId}/photos`).then(res => res.json());