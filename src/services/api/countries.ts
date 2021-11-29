import { useQuery, useLazyQuery, OperationVariables } from'@apollo/client';
import { COUNTRIES } from '../queries';
import { Countries, ResponseLazyService, ResponseService } from '../../interfaces'


export const useCountriesQuery = () => {
  return  useQuery<Countries>(COUNTRIES, { variables: { continent: "", currency: "" } });
}