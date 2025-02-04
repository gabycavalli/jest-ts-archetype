// src/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Ejemplo de API pública

export async function fetchUser(userId: number) {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching user: ${error.message}`);
    } else {
      throw new Error('Error fetching user: An unknown error occurred');
    }
  }
}

// POST: Crear un nuevo usuario
export async function createUser(userData: { name: string; email: string }) {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error creating user: ${error.message}`);
    } else {
      throw new Error('Error creating user: An unknown error occurred');
    }
  }
}

// PUT: Actualizar un usuario existente
export async function updateUser(
  userId: number,
  userData: { name: string; email: string }
) {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching user: ${error.message}`);
    } else {
      throw new Error('Error fetching user: An unknown error occurred');
    }
  }
}
