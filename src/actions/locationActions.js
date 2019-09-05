import { getLocationById } from '../services/tempApi';

export const FETCH_LOCATION = 'FETCH_LOCATION';

export const fetchLocation = (id) => ({
  type: FETCH_LOCATION,
  payload: getLocationById(id)
});
