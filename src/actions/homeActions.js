import { getAllLocations } from '../services/tempApi';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';

export const fetchLocations = () => ({
  type: FETCH_LOCATIONS,
  payload: getAllLocations()
});
