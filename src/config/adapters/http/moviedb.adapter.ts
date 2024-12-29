import {AxiosAdapter} from './axios.adapter';
import {API_BASE_URL, API_KEY_TMBD} from '@env';
// implementacion del axios adapter en un propio adaptador
export const movieDbFetcher = new AxiosAdapter({
  baseUrl: API_BASE_URL ?? 'no-base-url',
  params: {
    // api_key: '24348d5fe53af7619f8a07210e201bed',
    api_key: API_KEY_TMBD ?? 'no-key',
    lang: 'es',
  },
});
