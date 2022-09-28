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
    a + b;
  });

  let average = scoreResult / moviesArray.length;
  return parseFloat(average.toFixed(2))

}
scoresAverage


// const scoreResult = moviesArray.reduce((accumulator, currentValue) => {
//     return (currentValue.score + accumulator.score);
// });
// return scoreResult ;

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  Math.round();

  return dramaMoviesScore(dramaMovies);
}

//   const dramaMovies = moviesArray.filter(function (movie) {
//     if (movie.genre.includes('Drama')) return true;
//     return false;
//   });

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let du;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
