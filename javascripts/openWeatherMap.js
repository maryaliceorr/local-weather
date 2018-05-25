const dom = require('./dom');

let openWeatherMapKey = '';

const setKeys = (key) => {
  openWeatherMapKey = key;
};

const getOpenWeatherMapData = (text) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${text},us&appid=${openWeatherMapKey}&units=imperial`)
      .done((result) => {
        resolve(result.results);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showWeatherData = (searchText) => {
  getOpenWeatherMapData(searchText)
    .then((result) => {
      dom.domString(result);
    })
    .catch((err) => {
      console.error('nope, no data for you', err);
    });
};

module.exports = {
  setKeys,
  showWeatherData,
};
