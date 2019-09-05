export const getLocationById = (id) => {
  return fetch(`https://pavelili-temps-server.herokuapp.com/api/v1/temps/${id}`)
    .then(res => {
      return res.json();
    });
};

export const getAllLocations = () => {
  return fetch('https://pavelili-temps-server.herokuapp.com/api/v1/temps')
    .then(res => {
      return res.json();
    });
};
