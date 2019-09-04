export const getLocation = () => {
  return fetch(`https://pavelili-temps-server.herokuapp.com/api/v1/temps/${location._id}`)
    .then(res => {
      return res.json();
    });
};
