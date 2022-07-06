import axios, { AxiosError } from "axios";

export const isAxiosError = (error: AxiosError | any): error is AxiosError => {
  return error && error.isAxiosError;
};

const client = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_BASE_URL,
  timeout: 500000000,
});

export default client;
