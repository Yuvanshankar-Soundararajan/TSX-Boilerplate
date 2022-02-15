import Axios from "axios";
const API = Axios.create({});

API.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    const { status } = error.response;
    if (status === 401) {
      localStorage.clear();
      // if (!window.location.href.includes('signin')) {
      //   window.location.replace(SIGNIN_ROUTE)
      // }
    }
    return Promise.reject(error);
  }
);
export default API;
