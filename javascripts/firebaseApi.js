const openWeatherMap = require('./openWeatherMap');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

let firebaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const setUID = (newId) => {
  uid = newId;
};

const savedWeather = (saveWeather) => {
  saveWeather.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(saveWeather),
    })
      .done((specificWeatherKey) => {
        resolve(specificWeatherKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getSavedWeather = (saveWeather) => {
  const savedWeatherArray = [];
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/weather.json`,
    })
      .done((savedWeatherObject) => {
        if (savedWeatherObject !== null) {
          Object.keys(savedWeatherObject).forEach((fbKey) => {
            savedWeatherObject[fbKey].id = fbKey;
            savedWeatherArray.push(savedWeatherObject[fbKey]);
          });
        }
        resolve(savedWeatherArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteForecast = (weatherCardId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/weather/${weatherCardId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setUID,
  setConfig,
  savedWeather,
  getSavedWeather,
  deleteForecast,
};
