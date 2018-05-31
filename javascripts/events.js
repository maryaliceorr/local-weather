const openWeatherMap = require('./openWeatherMap');

const enterKeypress = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchZips = $('#search-bar').val();
      openWeatherMap.showWeatherData(searchZips);
    }
  });
};

const initializer = () => {
  enterKeypress();
};

module.exports = {
  initializer,
};
