import { FETCH_LOCATIONS } from '../actions/homeActions';

const initialState = {
  locations: []
};

export default function homeReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOCATIONS:
      return { ...state, locations: action.payload };
    default:
      return state;
  }
}
