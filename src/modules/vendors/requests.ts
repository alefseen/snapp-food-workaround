import axios from 'utils/http';
import { Vendor } from './models';

interface VendorsListParams {
  page: number;
  pageSize?: number;
  lat?: number;
  long?: number;
}

interface VendorListCommonItem {
  type: 'VENDOR';
  data: Vendor;
}

interface VendorListTextItem {
  type: 'TEXT';
  data: string;
}

interface VendorsListResponse {
  count: number;
  finalResult: (VendorListCommonItem | VendorListTextItem)[];
}

function getVendorsList({
  page,
  pageSize = 10,
  lat = 35.754,
  long = 51.328,
}: VendorsListParams) {
  return axios.get<VendorsListResponse>('/mobile/v3/restaurant/vendors-list', {
    params: {
      page,
      page_size: pageSize,
      lat,
      long,
    },
  });
}

export { getVendorsList };
