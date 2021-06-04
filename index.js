const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchCoordsByIP('206.116.128.158', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates);
});