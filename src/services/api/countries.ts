import { useQuery } from'@apollo/client';
import { COUNTRIES } from '../queries';
import { Countries } from '../../interfaces'


export const useCountriesQuery = () => {
  return  useQuery<Countries>(COUNTRIES, { variables: { continent: "", currency: "" } });
}