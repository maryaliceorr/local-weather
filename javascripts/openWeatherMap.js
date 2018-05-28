const dom = require('./dom');

let openWeatherMapKey = '';

const setKeys = (key) => {
  openWeatherMapKey = key;
};

// const getFiveDay = (zip) => {
//   return new Promise((resolve, reject) => {
//     $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${openWeatherMapKey}&units=imperial`)
//       .done((result) => {
//         resolve(result);
//       })
//       .fail((err) => {
//         reject(err);
//       });
//   });
// };

const getOneDay = (zip) => {
  return new Promise ((resolve, reject) => {
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
  getOneDay(searchText)
    .then((result) => {
      dom.domStrang(result);
    })
    .catch((err) => {
      console.error('nope, no data for you', err);
    });
};

// const showWeatherData = (searchText) => {
//   getFiveDay(searchText)
//     .then((result) => {
//       dom.domStrang(result.list);
//     })
//     .catch((err) => {
//       console.error('nope, no data for you', err);
//     });
// };

module.exports = {
  setKeys,
  showWeatherData,
};
