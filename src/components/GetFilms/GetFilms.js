import axios from 'axios';

export const getFilms = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=fed317ab3be0f2b7619ff5ef4eb716b2`
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
