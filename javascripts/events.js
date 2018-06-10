const openWeatherMap = require('./openWeatherMap');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

let chosenZip = -1;

const clickEvents = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      validZip();
    }
  });
  $('#current-day-button').click(validZip);
};

const fiveDayData = () => {
  const finalZip = getZip();
  openWeatherMap.showFiveDayData(finalZip);
};

const fiveDayClickEvent = () => {
  $(document).on('click', '#five-day-button', fiveDayData);
};

const setZip = (zip) => {
  chosenZip = zip;
};

const getZip = () => {
  return chosenZip;
};

const validZip = () => {
  const searchZips = $('#search-bar').val();
  if (searchZips.length === 5 && $.isNumeric(searchZips)) {
    openWeatherMap.showCurrentDayData(searchZips);
    fiveDayClickEvent();
    setZip(searchZips);
  } else {
    alert('Zip code not valid. Please enter valid zip code.');
  }
};

const saveWeatherForecast = () => {
  $(document).on('click', '.starred', (e) => {
    const weatherCardToAdd = $(e.target).closest('.five-day-cards');
    const weatherToAdd = {
      isSaved: false,
      dayAndTime: weatherCardToAdd.find('.five-day-date').text(),
      temp: weatherCardToAdd.find('.five-day-temp').text(),
      icon: weatherCardToAdd.find('.five-day-icon').text(),
      conditions: weatherCardToAdd.find('.five-day-condition').text(),
      airPressure: weatherCardToAdd.find('.five-day-pressure').text(),
      windSpeed: weatherCardToAdd.find('.five-day-speed').text(),
    };
    firebaseApi.savedWeather(weatherToAdd)
      .then(() => {
        weatherCardToAdd.remove();
      })
      .catch((error) => {
        console.error('error in saving weather', error);
      });
  });
};

const getWeatherForecast = () => {
  firebaseApi.getSavedWeather()
    .then((weatherArray) => {
      dom.domStrangTwo(weatherArray, 'saved-weather', true);
    })
    .catch((error) => {
      console.error('error showing cards', error);
    });
};

const initializer = () => {
  clickEvents();
  fiveDayClickEvent();
  saveWeatherForecast();
  getWeatherForecast();
};

module.exports = {
  initializer,
};
