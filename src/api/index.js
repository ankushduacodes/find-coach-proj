import axios from 'axios';

const baseURL = 'http://localhost:8080/api/v1';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// eslint-disable-next-line import/prefer-default-export
export const api = axios.create({
  baseURL,
  headers,
});
