import { createSlice } from '@reduxjs/tool kit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    moviesList: [],
    movie: {},
    favourits: [],
    count: 0,
  },
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },

    getMovie(id) {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    getMoviePage(page) {
      return page;
    },
    setMoviePage: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovieLang(lang) {
      return lang;
    },
    setMovieLang: (state, action) => {
      state.moviesList = action.payload;
    },

    addToFavourits: (state, action) => {
      state.favourits = [...state.favourits,action.payload];
      // state.favourits.push(state, action)
      state.count += 1;
    },

    removeFavourit: (state, action) => {
      movie = action.payload;
      newFavourit = state.favourits.filter((data) => data !== movie);
      state.favourits = newFavourit;
      state.count -= 1;
    },
  },
});
export const {
  getMovies,
  setMovies,
  getMovie,
  setMovie,
  getMoviesPage,
  setMoviesPage,
  getMoviesLang,
  setMoviesLang,
  addToFavourits,
  removeFavourit,
} = movieSlice.actions;
export default movieSlice.reducer;
