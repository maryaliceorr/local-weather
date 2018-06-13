const events = require('./events');
const firebaseApi = require('./firebaseApi');

const checkLogin = () => {
  firebase.auth().onAuthStateChange((user) => {
    if (user) {
      firebaseApi.setUID(user.uid);
      $('#my-weather-page').removeClass('hide');
      $('#search-page').addClass('hide');
      $('#authentication-page').addClass('hide');
      $('#my-saved, #search-weather, #logout').removeClass('hide');
      $('#authentication').addClass('hide');
      events.getWeatherForecast();
    } else {
      $('#my-weather-page').addClass('hide');
      $('#search-page').addClass('hide');
      $('#authentication-page').removeClass('hide');
      $('#my-saved, #search-weather, #logout').addClass('hide');
      $('#authentication').removeClass('hide');
    }
  });
};

module.exports = {
  checkLogin,
};
