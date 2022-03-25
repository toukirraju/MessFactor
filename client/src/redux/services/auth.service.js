import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:4000/api/";

const managerRegister = (user) => {
  return axios.post(API_URL + "manager_register", user);
};

const userRegister = (user) => {
  return axios.post(API_URL + "user_register", user);
};

// const login = (user) => {
//   return axios.post(API_URL + "login", user).then((response) => {
//     if (response.data.accessToken) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }

//     return response.data;
//   });
// };

/////////////
const login = (user) => {
  return axios.post(API_URL + "login", user).then((response) => {
    if (response.data.token) {
      localStorage.setItem("auth_token", JSON.stringify(response.data));
      // const decode = jwtDecode(response.data.token);
      // return decode;
    }
    return response.data;
  });
};
/////////////

/////////////
const setUserData = () => {
  const token = JSON.parse(localStorage.getItem("auth_token"));

  if (token) {
    const decode = jwtDecode(token.token);
    return decode;
  }
};
/////////////

const logout = () => {
  localStorage.removeItem("auth_token");
};

const authService = {
  managerRegister,
  userRegister,
  login,
  logout,
  setUserData,
};

export default authService;
