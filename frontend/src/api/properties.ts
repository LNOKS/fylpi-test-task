import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Adjust this to match your backend URL

export interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  rooms: number;
  bathrooms: number;
  area: number;
  price: number;
  imageUrl: string;
  views: number;
}

export interface PropertyFilters {
  page?: number;
  limit?: number;
  location?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  minRooms?: number;
  maxRooms?: number;
}

export const fetchProperties = async (filters: PropertyFilters) => {
  const response = await axios.get<{ properties: Property[]; total: number }>(
    `${API_URL}/properties`,
    { params: filters }
  );
  return response.data;
};