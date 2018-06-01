const openWeatherMap = require('./openWeatherMap');

const clickEvents = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      validZip();
    }
  });
  $('#current-day-button').click(validZip);
};

const fiveDayData = () => {
  openWeatherMap.showFiveDayData();
};

const fiveDayClickEvent = () => {
  $('#five-day-button').click(fiveDayData);
};

const validZip = () => {
  const searchZips = $('#search-bar').val();
  if (searchZips.length === 5 && $.isNumeric(searchZips)) {
    openWeatherMap.showCurrentDayData(searchZips);
    console.error('stuff', fiveDayData(searchZips));
    // fiveDayClickEvent(searchZips);
  } else {
    alert('Zip code not valid. Please enter valid zip code.');
  }
};

const initializer = () => {
  clickEvents();
  fiveDayClickEvent();
};

module.exports = {
  initializer,
};
