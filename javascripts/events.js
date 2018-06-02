const openWeatherMap = require('./openWeatherMap');

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

const initializer = () => {
  clickEvents();
  fiveDayClickEvent();
};

module.exports = {
  initializer,
};
