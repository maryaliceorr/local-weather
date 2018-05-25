const openWeatherMap = require('./openWeatherMap');

const apiKeys = () => {
  return new Promise ((resolve,reject) => {
    $.ajax('./db/apiKeys')
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
      openWeatherMap.setKeys(results.openWeatherMap.apiKeys);
    })
    .catch((err) => {
      console.error('nope, no keys today', err);
    });
};

module.exports = {
  getThemKeys,
};
