function handleSearchSubmit(event){
    event.preventDefualt();
    let searchInput = document.querySelector("#showing");
}

let searchFormElement = document.querySelector("#searching");
searchFormElement.addEventListener("submit", handleSearchSubmit);