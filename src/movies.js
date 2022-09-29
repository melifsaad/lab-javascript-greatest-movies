// const movies = require("./data")

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map(function (movie) {
    return movie.director;
  });
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const filterSteven = moviesArray.filter(
    (moviesSteven) => moviesSteven.director === "Steven Spielberg"
  );

  const filterDrama = filterSteven.filter((moviesDrama) =>
    moviesDrama.genre.includes("Drama")
  );
  return filterDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) return 0;

  let scoreResult = moviesArray.reduce((a, b) => {
    if (b.score == '') return 0;
    return a + b.score;
  },0);

  let media = scoreResult / moviesArray.length;
  return parseFloat(media.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies == '') return 0;
  const scoreDrama = dramaMovies.map((pelicula) => {
  if (!pelicula.score) pelicula.score = 0;
  return pelicula.score
  })
  let totScore = scoreDrama.reduce((a, b) => a + b)
  let mediaScore = totScore / dramaMovies.length;
  return parseFloat(mediaScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let dupMoviesArray = moviesArray.slice();
  dupMoviesArray.sort ((a,b) =>{
    if(a.year !== b.year){
        dupMoviesArray.sort(moviesArray.year)
    }
    else {
        dupMoviesArray.sort(moviesArray.title)
    }

    })

    return dupMoviesArray
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
