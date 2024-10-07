function bringTemp (response){
let temperatureElement = document.querySelector("#degree");
let degree = response.data.temperature.current;
let cityElement = document.querySelector("#city");
let conditionElement = document.querySelector("#condition");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector ("#wind");


cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(degree);
conditionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML  = `${response.data.wind.speed}Km/h`;


}



function searchPlace (city){
let apiKey = "94a4oafdtf0d380ca243ac81b53c4ce3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
axios.get(apiUrl).then(bringTemp);
}


function showingName (event){
  event.preventDefault();
  let searchBox = document.querySelector("#search-box");
  searchPlace(searchBox.value);
}



let searchFormElement = document.querySelector("#searching");
searchFormElement.addEventListener("submit", showingName);


searchPlace("Tehran");