const openWeatherMap = require('./openWeatherMap');

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
    })
    .catch((err) => {
      console.error('nope, no keys today', err);
    });
};

module.exports = {
  getThemKeys,
};
