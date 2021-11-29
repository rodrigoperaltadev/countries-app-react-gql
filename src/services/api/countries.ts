import { useQuery } from'@apollo/client';
import { COUNTRIES, COUNTRY } from '../queries';
import { Countries, Country } from '../../interfaces'


export const useCountriesQuery = () => {
  return  useQuery<Countries>(COUNTRIES, { variables: { continent: "", currency: "" } });
}

export const useCountryQuery = (code: string = "") => {
  return useQuery<{country: Country}>(COUNTRY, { variables: { code } });
}