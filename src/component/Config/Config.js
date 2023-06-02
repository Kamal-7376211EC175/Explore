import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://clean-tweed-jacket-lion.cyclic.app",
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": undefined,
  },
});
