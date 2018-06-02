const dom = require('./dom');

let openWeatherMapKey = '';

const setKeys = (key) => {
  openWeatherMapKey = key;
};

const getCurrentDayData = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${openWeatherMapKey}&units=imperial`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getFiveDayData = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${openWeatherMapKey}&units=imperial`)
      .done((result) => {
        resolve(result.list);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showCurrentDayData = (searchText) => {
  getCurrentDayData(searchText)
    .then((result) => {
      dom.domStrang(result);
    })
    .catch((err) => {
      console.error('nope, no data for you', err);
    });
};

const showFiveDayData = (searchText) => {
  getFiveDayData(searchText)
    .then((result) => {
      dom.domStrangTwo(result.list);
    })
    .catch((err) => {
      console.error('nope, no data for you', err);
    });
};

module.exports = {
  setKeys,
  showCurrentDayData,
  showFiveDayData,
};
