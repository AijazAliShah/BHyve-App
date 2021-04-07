import axios from "axios";
import { Path } from "../config";

const signup = async (payLoad) => {
  const { data } = await axios.post(`${Path.SIGNUP}`, payLoad);
  return data;
};

const login = async (payLoad) => {
  const { data } = await axios.post(`${Path.LOGIN}`, payLoad);
  return data;
};

const directAccess = async (payLoad) => {
  const { data } = await axios.post(`${Path.DIRECT_ACCESS}`, payLoad);
  return data;
};

const editUser = async (id, payLoad) => {
  const { data } = await axios.put(`${Path.EDIT_USER}/` + id, payLoad);
  return data;
};

const setPlayerID = async (id, payLoad) => {
  const { data } = await axios.put(`${Path.SET_PLAYERID}/` + id, payLoad);
  return data;
};


const changePassword = async (id, payLoad) => {
  const { data } = await axios.put(`${Path.CHANGE_PASSWORD}/` + id, payLoad);
  return data;
};


const getUser = async (id) => {
  const { data } = await axios.get(`${Path.GET_USER}/` + id);
  return data;
};

const getPromotedSP = async () => {
  const { data } = await axios.get(`${Path.GET_ALL_PROMOTED_SERVICE_PROVIDERS}`);
  return data;
};

const getAllServiceProviders = async () => {
  const { data } = await axios.get(`${Path.GET_ALL_SERVICE_PROVIDERS}`);
  return data;
};

const getAllServiceProvidersTypes = async () => {
  const { data } = await axios.get(`${Path.GET_ALL_SERVICE_PROVIDERS_TYPES}`);
  return data;
};
const addProject = async (payLoad) => {
  const { data } = await axios.post(`${Path.ADDPROJECT}`, payLoad);
  return data;
};

const getProjectByID = async (id) => {
  const { data } = await axios.get(`${Path.GET_PROJECT_BY_PROJECT_ID}/` + id);
  return data;
};

const editProjectByID = async (id, payLoad) => {
  const { data } = await axios.put(
    `${Path.EDIT_PROJECT_BY_PROJECT_ID}/` + id,
    payLoad
  );
  return data;
};
const assignServiceProvider = async (id, payLoad) => {
  const { data } = await axios.put(`${Path.ACCEPT_BID}/` + id, payLoad);
  return data;
};

const getAllPublishedProjects = async (body) => {
  console.log(
    "${Path.GET_ALL_PUBLISHED_PROJECTS}/${id}",
    `${Path.GET_ALL_PUBLISHED_PROJECTS}`,
    body
  );
  const { data } = await axios.post(`${Path.GET_ALL_PUBLISHED_PROJECTS}`, body);
  return data;
};

const getAllDraftProjectsUser = async (id) => {
  const { data } = await axios.get(`${Path.GET_ALL_DRAFT_PROJETS_USER}/` + id);
  return data;
};

const getAllCompletedProjectsUser = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_COMPLETED_PROJETS_USER}/` + id
  );
  return data;
};

const getAllOngoingProjectsUser = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_ONGOING_PROJETS_USER}/` + id
  );
  return data;
};

const getAllOngoingCustomerProjects = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_ONGOING_CUSTOMER_PROJECTS}/` + id
  );
  return data;
};

const getAllOngoingServiceProviderProjects = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_ONGOING_SERVICE_PROVIDER_PROJECTS}/` + id
  );
  return data;
};

const addBid = async (payLoad) => {
  const { data } = await axios.post(`${Path.ADD_BID}`, payLoad);
  return data;
};

const getBidByCustomerIDallPending = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_BID_OF_CUSTOMER_PENDING}/${id}`
  );
  return data;
};

const getBidByuserIDallPending = async (id) => {
  const { data } = await axios.get(`${Path.GET_ALL_BID_PENDING}`);
  return data;
};

const getBidByuserIDPending = async (id) => {
  const { data } = await axios.get(`${Path.GET_ALL_BID_OF_USER_PENDING}/` + id);
  return data;
};

const getBidByuserIDAccpeted = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_BID_OF_USER_ACCEPTED}/` + id
  );
  return data;
};

const getBidByuserIDRejected = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_BID_OF_USER_REJECTED}/` + id
  );
  return data;
};

const getBidByuserIDSuspended = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_ALL_BID_OF_USER_SUSPENDED}/` + id
  );
  return data;
};

const getBidByownerID = async (id) => {
  const { data } = await axios.get(`${Path.GET_ALL_BID_OF_OWNER}/` + id);
  return data;
};

const editBidByID = async (id, payLoad) => {
  const { data } = await axios.put(`${Path.EDIT_BID}/` + id, payLoad);
  return data;
};

const updateStatus = async (id, payLoad) => {
  const { data } = await axios.put(`${Path.UPDATE_STATUS}/` + id, payLoad);
  return data;
};

const getChatUserCustomer = async (id) => {
  const { data } = await axios.get(`${Path.GET_CHAT_USER_CUSTOMER}/` + id);
  return data;
};

const getChatUserSP = async (id) => {
  const { data } = await axios.get(
    `${Path.GET_CHAT_USER_SERVICE_PROVIDER}/` + id
  );
  return data;
};

const editChat = async (id, payLoad) => {
  const { data } = await axios.put(`${Path.EDIT_CHAT}/` + id, payLoad);
  return data;
};

const deleteChat = async (sId, tId) => {
  const { data } = await axios.put(`${Path.DELETE_CHAT}/` + sId + "/" + tId);
  return data;
};

const addChat = async (payLoad) => {
  const { data } = await axios.post(`${Path.ADD_CHAT}`, payLoad);
  return data;
};

const getLanguage = async () => {
  const { data } = await axios.get(`${Path.GET_LANGUAGE}`);
  return data;
};
const getAllEvaluation = async () => {
  const { data } = await axios.get(`${Path.GET_ALL_EVALUATION}`);
  return data;
};

const getAllMilestone = async (pid) => {
  const { data } = await axios.get(`${Path.GET_ALL_MILESTONE}/` + pid);
  return data;
};

const addMilestone = async (payLoad) => {
  const { data } = await axios.post(`${Path.ADD_ALL_MILESTONE}`, payLoad);
  return data;
};

const editMilestone = async (id,payLoad) => {
  const { data } = await axios.put(`${Path.EDIT_ALL_MILESTONE}/`+id, payLoad);
  return data;
};

const getAllReport = async (pid) => {
  const { data } = await axios.get(`${Path.GET_ALL_REPORT}/` + pid);
  return data;
};

const addReport = async (payLoad) => {
  const { data } = await axios.post(`${Path.ADD_ALL_REPORT}`, payLoad);
  return data;
};

const editReport = async (id,payLoad) => {
  const { data } = await axios.put(`${Path.EDIT_ALL_REPORT}/`+id, payLoad);
  return data;
};


const getAllRating = async (pid) => {
  const { data } = await axios.get(`${Path.GET_ALL_RATING}/` + pid);
  return data;
};

const addRating = async (payLoad) => {
  const { data } = await axios.post(`${Path.ADD_ALL_RATING}`, payLoad);
  return data;
};

const editRating = async (id,payLoad) => {
  const { data } = await axios.put(`${Path.EDIT_ALL_RATING}/`+id, payLoad);
  return data;
};

const completeProject = async (id) => {
  const { data } = await axios.put(`${Path.COMPLETE_PROJECT}/`+id, {});
  return data;
};

const getUserStats = async (id) => {
  const { data } = await axios.get(`${Path.GET_USER_STATS}/`+id, {});
  return data;
};

const getAllServiceTypes = async () => {
  const { data } = await axios.get(`${Path.GET_ALL_SERVICE_TYPES}`);
  return data;
};

const getTurnkey = async (id) => {
  const { data } = await axios.get(`${Path.GET_TURNKEY}/`+id);
  return data;
};

const getMaterialType = async (id) => {
  const { data } = await axios.get(`${Path.GET_MATERIAL_TYPE}/`+id);
  return data;
};

const getStandingStructure = async (id) => {
  const { data } = await axios.get(`${Path.GET_STANDING_STRUCTURE}/`+id);
  return data;
};

const getReconstruction= async (id) => {
  const { data } = await axios.get(`${Path.GET_RECONSTRUCTION}/`+id);
  return data;
};

const getConstructionalServices= async (id) => {
  const { data } = await axios.get(`${Path.GET_CONSTRUCTIONAL_SERVICE}/`+id);
  return data;
};

const getEngineeringOffice= async (id) => {
  const { data } = await axios.get(`${Path.GET_ENGINNERING_OFFICE}/`+id);
  return data;
};


const getDesigningOffice= async (id) => {
  const { data } = await axios.get(`${Path.GET_DESIGNING_OFFICE}/`+id);
  return data;
};


const postNotification = async (payLoad) => {
  const { data } = await axios.post(`${Path.POST_NOTIFICATION}`, payLoad);
  return data;
};

export default {
  setPlayerID,
  getMaterialType,
  postNotification,
  getTurnkey,
  getStandingStructure,
  getReconstruction,
  getConstructionalServices,
  getEngineeringOffice,
  getDesigningOffice,
  completeProject,
  getAllMilestone,
  addMilestone,
  editMilestone,
  getAllReport,
  addReport,
  editReport,
  getAllRating,
  addRating,
  editRating,
  signup,
  login,
  editUser,
  changePassword,
  getUser,
  getPromotedSP,
  getAllServiceProviders,
  addProject,
  getProjectByID,
  editProjectByID,
  getAllPublishedProjects,
  getAllDraftProjectsUser,
  getAllCompletedProjectsUser,
  getAllOngoingProjectsUser,
  addBid,
  editBidByID,
  getBidByuserIDallPending,
  getBidByuserIDPending,
  getBidByuserIDRejected,
  getBidByuserIDAccpeted,
  getBidByownerID,
  updateStatus,
  getChatUserCustomer,
  getAllServiceProvidersTypes,
  getChatUserSP,
  editChat,
  addChat,
  getBidByCustomerIDallPending,
  getBidByuserIDSuspended,
  deleteChat,
  directAccess,
  getLanguage,
  getAllEvaluation,
  assignServiceProvider,
  getAllOngoingCustomerProjects,
  getAllOngoingServiceProviderProjects,
  getUserStats,
  getAllServiceTypes
};
