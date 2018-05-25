
const domStrang = (weatherArray) => {
  let strang = '';
  weatherArray.forEach((weather) => {
    strang += `<div class="col-sm-6 col-md-4">`;
    strang +=   `<div class="thumbnail">`;
    strang +=   `<img src="..." alt="...">`;
    strang +=     `<div class="caption">`;
    strang +=     `<h3>${weather.city.name}</h3>`;
    strang +=     `<h5><strong>Temperature: </strong>${weather.list.main.temp}</h5>`;
    strang +=     `<h5><strong>Conditions: </strong>${weather.list.weather.description}</h5>`;
    strang +=     `<h5><strong>Air Pressure: </strong>${weather.list.main.pressure}</h5>`;
    strang +=     `<h5><strong>Wind Speed: </strong>${weather.list.wind.speed}</h5>`;
    strang +=     `<p>`;
    strang +=     `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  printToDom(strang);
};

const printToDom = (string) => {
  $('#weather-cards').html(string);
};

module.exports = {
  domStrang,
};
