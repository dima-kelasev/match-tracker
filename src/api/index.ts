import axios from 'axios';
import { TApiResponse } from '../types';

const API_BASE_URL = 'https://app.ftoyd.com/fronttemp-service';

export const fetchMatches = async (): Promise<TApiResponse> => {
  const response = await axios.get(`${API_BASE_URL}/fronttemp`);
  return response.data;
};
