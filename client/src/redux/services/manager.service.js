import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:4000/api/";

/////////////
const createMess = (messInfo) => {
  return axios
    .post(API_URL + "mess/create", messInfo, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const getMessInfo = () => {
  return axios
    .get(API_URL + `mess`, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const updateMessInfo = (updatedData) => {
  return axios
    .put(API_URL + "mess/update", updatedData, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

/////////////

const createExpense = (expenseInfo) => {
  console.log(expenseInfo);
  return axios
    .post(API_URL + "expense/createExp", expenseInfo, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const getMonthlyExpense = ({ month, year }) => {
  return axios
    .get(API_URL + `expense/${month}/${year}`, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

/////////////
const addApartment = (apartData) => {
  return axios
    .post(API_URL + "addApartment", apartData, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
/////////////

/////////////
const updateApartment = (updatedData) => {
  return axios
    .post(API_URL + "updateApartment", updatedData, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
/////////////

/////////////
const removeApartment = (apartmentId) => {
  return axios.delete(API_URL + `${apartmentId}`, { headers: authHeader() });
};
/////////////

const managerService = {
  createMess,
  createExpense,
  addApartment,
  getMessInfo,
  getMonthlyExpense,
  updateMessInfo,
  removeApartment,
};

export default managerService;
