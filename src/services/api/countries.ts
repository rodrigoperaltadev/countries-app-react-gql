import { useQuery } from'@apollo/client';
import { COUNTRIES } from '../queries';
import { Countries, ResponseService } from '../../interfaces'


export const useCountries = (): ResponseService<Countries> => {
  const { data, loading, error } = useQuery<Countries>(COUNTRIES);

  return {
    data,
    loading,
    error
  }
 
}