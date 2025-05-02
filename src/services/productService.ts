// bikeventures-frontend/src/services/api.ts
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json();
};