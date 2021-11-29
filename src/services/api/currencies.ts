import { useQuery, useLazyQuery, OperationVariables } from'@apollo/client';
import { CURRENCIES } from '../queries';
import { Currencies, ResponseLazyService, ResponseService } from '../../interfaces'


export const useCurrenciesQuery = () => {
  return  useQuery<Currencies>(CURRENCIES);
}