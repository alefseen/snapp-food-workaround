import type { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

function camelizeKeys(response: AxiosResponse) {
  response.data = camelcaseKeys(response.data || {}, {
    deep: true,
  });

  return response;
}

export { camelizeKeys };
