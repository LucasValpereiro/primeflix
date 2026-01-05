import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=228812bb251e0fa1dcd821e1c6ccb2db&language=pt-BR

const api = axios.create(
    {
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
