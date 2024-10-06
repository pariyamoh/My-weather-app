
function showingName (event){
  event.preventDefault();
  let searchBox = document.querySelector("#search-box");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchBox.value;
}

let searchFormElement = document.querySelector("#searching");
searchFormElement.addEventListener("submit", showingName);
