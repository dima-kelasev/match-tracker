import { useQuery } from '@tanstack/react-query';
import { TApiResponse } from '../types';
import { fetchMatches } from '../api';

export const useMatches = () => {
  return useQuery<TApiResponse>({
    queryKey: ['matches'],
    queryFn: fetchMatches,
  });
};
