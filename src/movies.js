// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map(movie => movie.director)
  return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let director = moviesArray.filter(movie => movie.director === 'Steven Spielberg')
  let genAndDirector = director.filter(movie => movie.genre.filter(gen => gen === 'Drama').length !== 0)
  return genAndDirector.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScore = moviesArray.reduce(function (sum, movie) {
    if (movie.score === undefined) movie.score = 0
    return sum + movie.score / moviesArray.length
  }, 0)
  return Math.round(avgScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let filterDrama = moviesArray.filter(movie => movie.genre.filter(gen => gen === 'Drama').length !== 0)
  let avgScoreDrama = filterDrama.reduce(function (sum, movie) {
    if (movie.score === undefined) movie.score = 0
    return sum + movie.score / filterDrama.length
  }, 0)
  return Math.round(avgScoreDrama * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderMovies = moviesArray.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year
    if (a.year === b.year) return a.title.localeCompare(b.title)
  })
  let newArr = [...orderMovies]
  return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArr = [...moviesArray]
  let orderByTitle = newArr.sort((a, b) => {
    return a.title.localeCompare(b.title)
  }).map(movie => movie.title)
  return orderByTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArr = JSON.parse(JSON.stringify(moviesArray))
  for (let i = 0; i < newArr.length; i++){
    let splitDuration = newArr[i].duration.split(' ')
    splitDuration[0] = parseInt(splitDuration[0].replace(/[^0-9]/g, ''), 10)
    if (splitDuration[1]){
      splitDuration[1] = parseInt(splitDuration[1].replace(/[^0-9]/g, ''), 10)
      newArr[i].duration = (splitDuration[0] * 60) + splitDuration[1]
    }
    else {newArr[i].duration = (splitDuration[0] * 60)}
  }
  return newArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
