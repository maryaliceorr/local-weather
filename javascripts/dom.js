
// const domStrang = (weatherArray) => {
//   let strang = '';
//   weatherArray.forEach((weather, index) => {
//     if (index % 3 === 0) {
//       strang += `<div class="row">`;
//     }
//     strang += `<div class="col-sm-6 col-md-4">`;
//     strang +=   `<div class="thumbnail">`;
//     strang +=   `<img src="..." alt="...">`;
//     strang +=     `<div class="caption">`;
//     // strang +=     `<h3>${weather.city.name}</h3>`;
//     strang +=     `<h5><strong>Temperature: </strong>${weather.main.temp}</h5>`;
//     strang +=     `<h5><strong>Conditions: </strong>${weather.weather.description}</h5>`;
//     strang +=     `<h5><strong>Air Pressure: </strong>${weather.main.pressure}</h5>`;
//     strang +=     `<h5><strong>Wind Speed: </strong>${weather.wind.speed}</h5>`;
//     strang +=     `<p>`;
//     strang +=     `</div>`;
//     strang +=   `</div>`;
//     strang += `</div>`;

//     if (index % 3 === 2) {
//       strang += `</div>`;
//     }
//   });
//   printToDom(strang);
// };

const domStrang = (weatherArray) => {
  let strang = '';
  strang += `<div class="col-sm-6 col-md-4">`;
  strang +=   `<div class="thumbnail">`;
  strang +=   `<img src="..." alt="...">`;
  strang +=     `<div class="caption">`;
  strang +=     `<h3>${weatherArray.name}</h3>`;
  strang +=     `<h5><strong>Temperature: </strong>${weatherArray.main.temp}</h5>`;
  strang +=     `<h5><strong>Conditions: </strong>${weatherArray.weather[0].description}</h5>`;
  strang +=     `<h5><strong>Air Pressure: </strong>${weatherArray.main.pressure}</h5>`;
  strang +=     `<h5><strong>Wind Speed: </strong>${weatherArray.wind.speed}</h5>`;
  strang +=     `<p>`;
  strang +=     `</div>`;
  strang +=   `</div>`;
  strang += `</div>`;
  printToDom(strang);
};

const printToDom = (stringer) => {
  $('#weather-cards').html(stringer);
};

module.exports = {
  domStrang,
};
