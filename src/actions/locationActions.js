import { getLocation } from '../services/tempApi';

export const FETCH_LOCATION = 'FETCH_LOCATION';

export const fetchLocation = () => ({
  type: FETCH_LOCATION,
  payload: getLocation()
});
