const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// }); 

// fetchCoordsByIP('206.116.128.158', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 49.1963, longitude: -122.8106 }, (error, output) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   } 
//   console.log("It worked! Returned ISS pass times: ", output);
// });