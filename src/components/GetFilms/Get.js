import axios from 'axios';

export const getFilms = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=fed317ab3be0f2b7619ff5ef4eb716b2`
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getSingleFilm = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fed317ab3be0f2b7619ff5ef4eb716b2`
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCast = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/670292/credits?api_key=fed317ab3be0f2b7619ff5ef4eb716b2`
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
getCast();

export const getReviews = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/670292/reviews?api_key=fed317ab3be0f2b7619ff5ef4eb716b2`
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMoviesSearch = async query => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=fed317ab3be0f2b7619ff5ef4eb716b2`,
      { params: { query: query } }
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
