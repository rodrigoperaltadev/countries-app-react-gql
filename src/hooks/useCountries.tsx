import { useCallback, useEffect, useState } from "react";
import { Country } from "../interfaces";
import { useCountriesQuery } from '../services/api'
import { Filters } from "../views/Home";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const { refetch, loading, data } = useCountriesQuery();

  setCountries(data?.countries || []);

  const fetchCountries = async (filters: Filters = { continent: "", currency: "" }) => {
      await refetch({variables: filters});
  }

  return {
    loading, countries, filteredCountries, setFilteredCountries, currencies, fetchCountries
  }

}
