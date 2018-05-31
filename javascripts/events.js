const openWeatherMap = require('./openWeatherMap');

const clickEvents = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      validZip();
    }
  });
  $('#current-day-button').click(validZip);
};

const validZip = () => {
  const searchZips = $('#search-bar').val();
  if (searchZips.length === 5 && $.isNumeric(searchZips)) {
    openWeatherMap.showWeatherData(searchZips);
  } else {
    alert('Zip code not valid. Please enter valid zip code.');
  }
};

const initializer = () => {
  clickEvents();
};

module.exports = {
  initializer,
};
