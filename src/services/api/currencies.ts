import { useQuery } from'@apollo/client';
import { CURRENCIES } from '../queries';
import { Currencies } from '../../interfaces'


export const useCurrenciesQuery = () => {
  return  useQuery<Currencies>(CURRENCIES);
}