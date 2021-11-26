import { useQuery } from'@apollo/client';
import { COUNTINENTS } from '../queries';
import { Countinents, ResponseService } from '../../interfaces'


export const useContinents = (): ResponseService<Countinents> => {
  const { data, loading, error } = useQuery<Countinents>(COUNTINENTS);

  return {
    data,
    loading,
    error
  }
 
}