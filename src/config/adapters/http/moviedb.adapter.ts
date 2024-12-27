import {AxiosAdapter} from './axios.adapter';

// implementacion del axios adapter en un propio adaptador
export const movieDbFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '24348d5fe53af7619f8a07210e201bed',
    lang: 'es',
  },
});
