import type { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

function camelizeKeys(response: AxiosResponse) {
  response.data = camelcaseKeys(response.data || {}, {
    deep: true,
  });

  return response;
}

function normalizeResponse(response: AxiosResponse) {
  response.data = response.data?.data || {};

  return response;
}

export { camelizeKeys, normalizeResponse };
