import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    "http://www.omdbapi.com/?apikey=f7b09770"
});


const fetchApi = {
  get: (path, params, header, options = {}) => {
    return axiosInstance.get(`${path}`, { params: params, ...options }, header);
  }
};

const apiQuery = async (type, path, query, header) => {
  let data, error;
  try {
    let resp = await fetchApi[type](path, query, header);
    data = resp.data ? resp.data : resp;
  } catch (err) {
    error = err;
  }
  return { data, error };
};

export const getTitle = async (obj) => {
  return await apiQuery('get', '', obj);
};