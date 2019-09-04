import { FETCH_LOCATION } from '../actions/locationActions';

const initialState = {
  location: { name: '', temps: [] }
};

export default function locationReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
}
