import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '801e8bbfcf73f4e6bd852bc32bd613a6',
  },
});

export const fetchMovies = async (movieName) => {
  axiosInstance.get('/search/movie', {
    params: {
      query: movieName,
    },
  });
}; //

export const fetchMovie = async (id) => {
  axiosInstance.get(`/movie/${id}`);
}; //

export const fetchMoviesPage = async (page) => {
  axiosInstance.get('/movie/popular', {
    params: {
      page: page,
    },
  });
};

export const fetchMoviesLang = async (lang) => {
  return axiosInstance.get('/movie/popular', {
    params: {
      language: lang,
    },
  });
};
