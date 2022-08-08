import { takeLatest, put, fork, call } from 'redux-saga/effects';
import {
  fetchMovies,
  fetchMovie,
  fetchMoviesLang,
  fetchMoviesPage,
} from './axiosConfig.js';
import { getMovies, setMovies, getMovie, setMovie } from './Movies.js ';
import {
  getMoviesLang,
  getMoviesPage,
  setMoviesLang,
  setMoviesPage,
} from './movieSlice.js';
//////////////////////////    movieName    //////////////////////////////
function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data.results }));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

////////////////////////////////    movieId   ////////////////////////

function* onLoadMovieAsync({ payload }) {
  try {
    const movieId = payload;
    const response = yield call(fetchMovie, movieId);
    if (response.status === 200) {
      yield put(setMovie({ ...response.data.results }));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

////////////////////////////////    page   ////////////////////////
function* onLoadMoviesPageAsync({ payload }) {
  try {
    const moviePage = payload;
    const response = yield call(fetchMoviesPage, moviePage);
    if (response.status === 200) {
      yield put(setMoviesPage({ ...response.data.results }));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onLoadMoviesPage() {
  yield takeLatest(getMoviesPage.type, onLoadMoviesPageAsync);
}

////////////////////////////////     lang    ////////////////////////
function* onLoadMoviesLangAsync({ payload }) {
  try {
    const moviesLang = payload;
    const response = yield call(fetchMoviesLang, moviesLang);
    if (response.status === 200) {
      yield put(setMoviesLang({ ...response.data.results }));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onLoadMoviesLang() {
  yield takeLatest(getMoviesLang.type, onLoadMoviesLangAsync);
}



export const moviesSagas = [
  fork(onLoadMovies),
  fork(onLoadMovie),
  fork(onLoadMoviesPage),
  fork(onLoadMoviesLang),
];
