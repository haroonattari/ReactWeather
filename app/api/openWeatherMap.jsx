var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a47ad6a9fe4a72959f314497431ca013&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        if(res.data.cod && res.data.message) {
          console.log('first error case');
          throw new Error(res.response.statusText);
        } else {
          console.log(res);
          return res.data.main.temp;
        }
    }, function (res) {
      console.log('second error case');
      if(typeof res.response.statusText != 'undefined') {
        throw new Error(res.response.statusText);
      } else {
        throw new Error('Unknown error occured.');
      }

    });
  }
}
