import axios from "axios";
import { Path } from "../config";

const signup = async (payLoad) => {
  const {data}  = await axios.post(`${Path.SIGNUP}`, payLoad);
  return data;
};

const signin = async (payLoad) => {
  const { data } = await axios.post(`${Path.SIGNIN}`, payLoad);
  return data;
};

const addProfile = async (payLoad,config) => {
  const { data } = await axios.post(`${Path.ADD_PROFILE}`, payLoad,config);
  return data;
};

const getAllSkills = async () => {
  const { data } = await axios.get(`${Path.GET_ALL_SKILLS}`);
  return data;
};

const addSkills = async (payLoad,config) => {
  const { data } = await axios.post(`${Path.ADD_SKILLS}`, payLoad,config);
  return data;
};


const getProfile = async (config) => {
  const { data } = await axios.get(`${Path.GET_PROFILE}`,config);
  return data;
};


export default {
  signup,
  signin,
  addProfile,
  getAllSkills,
  addSkills,
  getProfile
};
