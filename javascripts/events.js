const openWeatherMap = require('./openWeatherMap');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

let chosenZip = -1;

const myPages = () => {
  $(document).click((e) => {
    if (e.target.id === 'authentication') {
      $('#my-weather-page').addClass('hide');
      $('#search-page').addClass('hide');
      $('#authentication-page').removeClass('hide');
    } else if (e.target.id === 'my-saved') {
      $('#my-weather-page').removeClass('hide');
      $('#search-page').addClass('hide');
      $('#authentication-page').addClass('hide');
      getWeatherForecast();
    } else if (e.target.id === 'search-weather') {
      $('#my-weather-page').addClass('hide');
      $('#search-page').removeClass('hide');
      $('#authentication-page').addClass('hide');
    }
  });
};

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
      dayAndTime: weatherCardToAdd.find('.five-weather-date').text(),
      temp: weatherCardToAdd.find('.five-weather-temp').text(),
      icon: weatherCardToAdd.find('.five-weather-icon').data(),
      conditions: weatherCardToAdd.find('.five-weather-condition').text(),
      airPressure: weatherCardToAdd.find('.five-weather-pressure').text(),
      windSpeed: weatherCardToAdd.find('.five-weather-speed').text(),
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

const deleteForecastFromCollection = () => {
  $(document).on('click', '.deleteForecastFromCollection', (e) => {
    const forecastToDelete = $(e.target).closest('.five-day-cards').data()
  })
}

const initializer = () => {
  myPages();
  clickEvents();
  fiveDayClickEvent();
  saveWeatherForecast();
  getWeatherForecast();
};

module.exports = {
  initializer,
};
