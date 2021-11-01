const d = document,
c = console;

//DOM vars
const $sectionMovies = d.getElementById("sectionMovies"),
$modalMovie = d.getElementById("modalMovie"),
$modalContent = d.getElementById("modalContent"),
$closeModal = d.querySelector(".closeModal"),
$movieTitle = d.getElementById("movieTitle"),
$cl1 = d.querySelector(".cl1"),
$movieImg = d.getElementById("movieImg"),
$btnWatch =  d.getElementById("btnWatch"),
$sinopsis = d.getElementById("sinopsis"),
$video = d.getElementById("video");

let selectedMovie;

d.addEventListener("DOMContentLoaded",()=>{
  let fragment = d.createDocumentFragment()
  for(let i of movies){
    let movie = d.createElement("div"); 
    movie.innerHTML = `
        <img src="${i.img}" alt="${i.title}">
      `
    movie.classList.add("movie");
    movie.addEventListener("click",()=>{
      selectedMovie = i;
      $movieTitle.innerText = `${i.title}`;
      $movieTitle.classList.remove("d-none");
      $movieImg.setAttribute("src",i.img);
      $cl1.classList.remove("d-none");
      $sinopsis.innerHTML = `<h3>Sinopsis</h3> ${i.sinopsis}`;
      $sinopsis.classList.remove("d-none");
      $modalMovie.classList.remove("d-none");
    })
    fragment.appendChild(movie);
  }
  $sectionMovies.appendChild(fragment);
});

$closeModal.addEventListener("click",()=>{
  $modalMovie.classList.add("d-none");
  $video.classList.add("d-none");
})

$modalMovie.addEventListener("click",(e)=>{
  if(e.target.matches("#modalMovie")) {
    $modalMovie.classList.add("d-none");
    $video.classList.add("d-none");
  }
})

$btnWatch.addEventListener("click",()=>{
  $video.setAttribute("src",selectedMovie.video);
  $movieTitle.classList.add("d-none");
  $cl1.classList.add("d-none");
  $sinopsis.classList.add("d-none");
  $video.classList.remove("d-none");
  console.log(selectedMovie.video);
  selectedMovie = null;
})
