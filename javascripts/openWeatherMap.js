const dom = require('./dom');

let openWeatherMapKey = '';

const setKeys = (key) => {
  openWeatherMapKey = key;
};

const getCurrentDayData = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${openWeatherMapKey}`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showWeatherData = (searchText) => {
  getCurrentDayData(searchText)
    .then((result) => {
      dom.domStrang(result);
    })
    .catch((err) => {
      console.error('nope, no data for you', err);
    });
};

module.exports = {
  setKeys,
  showWeatherData,
};
