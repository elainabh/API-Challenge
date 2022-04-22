let baseURL = "https://ghibliapi.herokuapp.com/films";
 console.log(baseURL);
let button = document.querySelector("button"); //need this to add event listener
// let movieName = document.getElementsByClassName("movieName");
let movieInfo = document.querySelector(".info-container");
//let ghibliImage = document.querySelector(".ghibliImage");
//ghibliImage.style.display = 'none';
let imageContainer = document.querySelector(".image-container");
let buttonContainer = document.querySelector(".button-container");

//  function fetchGhibliCharacters() {
//      fetch(baseURL)
//      .then(result => {
//         return result.json();
//  })
//     .then(json => {
//         console.log(json);
//         displayCharacters(json);
//     })
// }
// document.querySelector("h2").innerText = "hi friend";

button.addEventListener('click', fetchGhibliMovies);


function fetchGhibliMovies() {
    fetch(baseURL)
    .then(result => {
       return result.json();
})
   .then(json => {
       console.log(json);
       displayMovies(json);
   })
   .catch (err => {
       console.log(err);
   })
}


function displayMovies(data) {
    console.log(data);

    buttonContainer.firstElementChild != null ? buttonContainer.removeChild(button) : null;
    
    let movieName = document.createElement("h2");
    let ghibliDescription = document.createElement("h3");  
    let ghibliImage = document.createElement('img'); 
    let secondButton = document.createElement('button');     
    let randomNumber = Math.floor(Math.random() * 22);
    console.log(randomNumber);
    let releaseDate = document.createElement('h4');
    
    releaseDate.style = "display: flex; justify-content: center; font-family: Comic Sans MS, serif; font-size: 15px; -webkit-text-stroke: 1px black;";
    ghibliImage.style = "display: flex; justify-content: center;";
    movieName.style = "display: flex; justify-content: center; font-family: Comic Sans MS, serif; font-size: 30px;  -webkit-text-stroke: 1px black;";
    ghibliDescription.style = "display: flex; justify-content: right; font-family: Comic Sans MS, serif; font-size: 25px;  -webkit-text-stroke: 1px black;";
    
    movieName.className = "movieName";
    console.log(data[randomNumber].image);
    // console.log(`${data[0].title} ` + `${data[1].title}`);
    
    ghibliImage.src = data[randomNumber].image;
    ghibliImage.setAttribute('class', 'ghibli-image')
    movieName.innerText = `${data[randomNumber].title}`;
    ghibliDescription.innerText = `${data[randomNumber].description}`;
    secondButton.innerText = "Find a movie to watch!"
    releaseDate.innerText = data[randomNumber].release_date;
     
    movieInfo.appendChild(secondButton);
    movieInfo.appendChild(ghibliImage);
    movieInfo.appendChild(movieName);
    movieInfo.appendChild(ghibliDescription);
    movieInfo.appendChild(releaseDate);

    secondButton.addEventListener('click', () => {
        movieInfo.removeChild(ghibliImage);
        movieInfo.removeChild(movieName);
        movieInfo.removeChild(ghibliDescription);
        movieInfo.removeChild(secondButton);
        movieInfo.removeChild(releaseDate);
        fetchGhibliMovies();
    })}


// function displayGhibliImage(img) {
//     displayGhibliDescription(img);
//     button.addEventListener('click', () => {
//     })}


// function displayGhibliDescription(text) {
//     console.log(text);
//     console.log(text[randomNumber].description);       

//     button.addEventListener('click', () => {
//     } ) }

