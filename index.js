function bringTemp (response){
let temperatureElement = document.querySelector("#degree");
let degree = response.data
}



function searchPlace (place){
let apiKey = "94a4oafdtf0d380ca243ac81b53c4ce3";
  
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${place}&key=${apiKey}
console.log(apiUrl)`;
axios.get(apiUrl).then(bringTemp);
}
function showingName (event){
  event.preventDefault();
  let searchBox = document.querySelector("#search-box");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchBox.value;
  searchPlace(searchBox.value);
}

let searchFormElement = document.querySelector("#searching");
searchFormElement.addEventListener("submit", showingName);
