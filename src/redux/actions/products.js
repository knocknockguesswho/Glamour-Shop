import axios from 'axios';
import {config} from '../../config/baseUrl';

export const getAllProducts = (token, search, sort, order, page) => {
  return {
    type: 'GET_ALL_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `${config.url}/api/products/`,
      params: {
        search: search,
        sort: sort || 'created_at',
        order: order || 'DESC',
        page: page || 1,
      },
      headers: {
        Authorization: token,
      },
    }),
  };
};
