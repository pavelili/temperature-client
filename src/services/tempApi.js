export const getLocationById = (id) => {
  return fetch(`https://pavelili-temps-server.herokuapp.com/api/v1/temps/${id}`)
    .then(res => {
      return res.json();
    });
};
