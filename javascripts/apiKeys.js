const openWeatherMap = require('./openWeatherMap');
const firebaseApi = require('./firebaseApi');
const auth = require('./auth');

const apiKeys = () => {
  return new Promise ((resolve,reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getThemKeys = () => {
  apiKeys()
    .then((results) => {
      openWeatherMap.setKeys(results.weather.apiKey);
      firebaseApi.setConfig(results.firebaseKeys);
      firebase.initializeApp(results.firebaseKeys);
      firebase
        .auth()
        .signInWithEmailandPassword
        .catch((error) => {
          $('#login-error-message').text(error.message);
          $('#login-error').removeClass('hide');
          console.error(error.message);
        });
      auth.checkLogin();
    }).catch((err) => {
      console.error('nope, no keys today', err);
    });
};

module.exports = {
  getThemKeys,
};
