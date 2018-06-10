
const domStrang = (weather) => {
  let strang = '';
  strang += `<div id="current-day-card" class="col-md-4 col-md-offset-4">`;
  strang +=   `<div class="thumbnail current-day-card">`;
  strang +=     `<div class="caption">`;
  strang +=     `<h1>Today's Weather</h1>`;
  strang +=     `<h2>${weather.name}</h2>`;
  strang +=     `<img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png">`;
  strang +=     `<h3><strong>Temperature: </strong>${weather.main.temp} &#8457;</h3>`;
  strang +=     `<h3><strong>Conditions: </strong>${weather.weather[0].description}</h3>`;
  strang +=     `<h3><strong>Air Pressure: </strong>${weather.main.pressure}</h3>`;
  strang +=     `<h3><strong>Wind Speed: </strong>${weather.wind.speed}</h3>`;
  strang +=     `</div>`;
  strang +=     `<div class="row center">`;
  strang +=       `<button type="button" id="five-day-button" class="btn btn-info btn-lg">5 Day Forecast</button>`;
  strang +=     `</div>`;
  strang +=   `</div>`;
  strang += `</div>`;
  printToDom('#current-day-holder', strang);
};

const domStrangTwo = (weatherArray) => {
  let strang = '';
  weatherArray.forEach((weather, i) => {
    if (i % 8 === 0) {
      strang += `<div class="col-sm-2 center">`;
      strang +=   `<div class="thumbnail five-day-cards">`;
      strang +=     `<div class="caption">`;
      strang +=     `<span class="glyphicon glyphicon-star starred"></span>`;
      strang +=     `<h3 id="${weather.dt_txt}" class="five-weather-date"><strong>Date and Time: </strong>${weather.dt_txt}</h3>`;

      strang +=     `<img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png" class="five-weather-icon">`;
      strang +=     `<h3 class="five-weather-temp"><strong>Temperature: </strong>${weather.main.temp} &#8457;</h3>`;
      strang +=     `<h3 class="five-weather-condition"><strong>Conditions: </strong>${weather.weather[0].description}</h5>`;
      strang +=     `<h3 class="five-weather-pressure"><strong>Air Pressure: </strong>${weather.main.pressure}</h3>`;
      strang +=     `<h3 class="five-weather-speed"><strong>Wind Speed: </strong>${weather.wind.speed}</h3>`;
      strang +=     `<p>`;
      strang +=     `</div>`;
      strang +=   `</div>`;
      strang += `</div>`;
    }
  });
  printToDom('#5-day-holder', strang);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  domStrang,
  domStrangTwo,
};
