let firebaseConfig = {};
const uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const savedWeather = (saveWeather) => {
  saveWeather.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(saveWeather),
    })
      .done((specifickey) => {
        resolve(specifickey);
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

module.exports = {
  setConfig,
  savedWeather,
  getSavedWeather,
};
