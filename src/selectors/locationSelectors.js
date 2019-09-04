export const getLocationById = (state, _id) => {
  return state.location.location.filter(l => {
    return l._id === _id;
  });
}; 
