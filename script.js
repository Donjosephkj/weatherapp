function searchcity() {
  let cityname = input.value;
  console.log(cityname);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e `
  ).then((result) => result.json().then((obj) => displayData(obj)));
}
function displayData(arr) {
  let country = arr.sys.country;
  let city = arr.name;
  let hum = arr.main.humidity;
  let winds = arr.wind.speed;
  let pres = arr.main.pressure;
  let temperature = Math.trunc((arr.main.temp - 273.15) * 10);
  let temp1 = temperature / 10;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(winds);
  temp.innerHTML = temp1;
  place.innerHTML = city;
  celciussymbol.innerHTML = "o";
  date.innerHTML = `${dd} ${mL[mm - 1]} ${yyyy}`;
  countryname.innerHTML = country;
  humidity.innerHTML = hum;
  windspeed.innerHTML = winds;
  pressure.innerHTML = pres;
}
