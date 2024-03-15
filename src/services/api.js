import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.tech/api/'
});

export const fetchMovies = async () => {
  const response = await api.get('films/');
  
  return response.data.result;
};
