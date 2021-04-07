// const BASE_URL = 'http://localhost:3000'
const BASE_URL = "https://shs-server.herokuapp.com";

const Path = {
  //USERS
  SIGNUP: `${BASE_URL}/user/signup`,
  LOGIN: `${BASE_URL}/user/login`,
  DIRECT_ACCESS: `${BASE_URL}/user/directAccess`,
  EDIT_USER: `${BASE_URL}/user`,
  SET_PLAYERID: `${BASE_URL}/user/set/playerID`,
  GET_USER: `${BASE_URL}/user`,
  CHANGE_PASSWORD: `${BASE_URL}/user/changePassword`,
  GET_ALL_SERVICE_PROVIDERS: `${BASE_URL}/user`,
  GET_ALL_PROMOTED_SERVICE_PROVIDERS: `${BASE_URL}/user/promoted/sp`,
  ADDPROJECT: `${BASE_URL}/project/`,

  GET_PROJECT_BY_PROJECT_ID: `${BASE_URL}/project/`,

  EDIT_PROJECT_BY_PROJECT_ID: `${BASE_URL}/project/`,
  GET_ALL_PUBLISHED_PROJECTS: `${BASE_URL}/project/published`,
  GET_ALL_DRAFT_PROJETS_USER: `${BASE_URL}/project/user/draft`,
  GET_ALL_COMPLETED_PROJETS_USER: `${BASE_URL}/project/user/completed`,
  GET_ALL_ONGOING_PROJETS_USER: `${BASE_URL}/project/user/ongoing`,

  GET_ALL_ONGOING_CUSTOMER_PROJECTS: `${BASE_URL}/project/customer/ongoing`,
  GET_ALL_ONGOING_SERVICE_PROVIDER_PROJECTS: `${BASE_URL}/project/sp/ongoing`,
  GET_ALL_SERVICE_PROVIDERS_TYPES: `${BASE_URL}/serviceProviderType/get`,
  GET_ALL_MILESTONE: `${BASE_URL}/milestone/get`,
  ADD_ALL_MILESTONE: `${BASE_URL}/milestone/add`,
  EDIT_ALL_MILESTONE: `${BASE_URL}/milestone/edit`,

  GET_ALL_REPORT: `${BASE_URL}/report/get`,
  ADD_ALL_REPORT: `${BASE_URL}/report/add`,
  EDIT_ALL_REPORT: `${BASE_URL}/report/edit`,

  GET_ALL_RATING: `${BASE_URL}/rating/get`,
  ADD_ALL_RATING: `${BASE_URL}/rating/add`,
  EDIT_ALL_RATING: `${BASE_URL}/rating/edit`,
  
  ACCEPT_BID: `${BASE_URL}/project/assignsp`,
  COMPLETE_PROJECT: `${BASE_URL}/project/complete`,
  ADD_BID: `${BASE_URL}/bid`,
  EDIT_BID: `${BASE_URL}/bid`,
  GET_ALL_BID_PENDING: `${BASE_URL}/bid/all/pending`,
  GET_ALL_BID_OF_USER_PENDING: `${BASE_URL}/bid/user/pending`,
  GET_ALL_BID_OF_CUSTOMER_PENDING: `${BASE_URL}/bid/customer/pending`,
  GET_ALL_BID_OF_USER_ACCEPTED: `${BASE_URL}/bid/user/accepted`,
  GET_ALL_BID_OF_USER_REJECTED: `${BASE_URL}/bid/user/rejected`,
  GET_ALL_BID_OF_USER_SUSPENDED: `${BASE_URL}/bid/user/suspended`,
  GET_ALL_BID_OF_OWNER: `${BASE_URL}/bid/owner`,
  UPDATE_STATUS: `${BASE_URL}/bid/changeStatus`,
  GET_CHAT_USER_CUSTOMER: `${BASE_URL}/bid/get/chat/users/customer`,
  GET_CHAT_USER_SERVICE_PROVIDER: `${BASE_URL}/bid/get/chat/users/serviceProvider`,
  ADD_CHAT: `${BASE_URL}/chat/add/chat`,
  EDIT_CHAT: `${BASE_URL}/chat/edit/chat`,
  DELETE_CHAT: `${BASE_URL}/chat/delete`,
  GET_LANGUAGE: `${BASE_URL}/language/get`,
  GET_ALL_EVALUATION: `${BASE_URL}/evaluation/get`,
  GET_USER_STATS: `${BASE_URL}/user/stats`,
  GET_ALL_SERVICE_TYPES: `${BASE_URL}/serviceTypes/get`,
  GET_TURNKEY: `${BASE_URL}/turnkey`,
  GET_MATERIAL_TYPE: `${BASE_URL}/materialTypes`,
  GET_STANDING_STRUCTURE: `${BASE_URL}/standingStructure`,
  GET_RECONSTRUCTION: `${BASE_URL}/reconstruction`,
  GET_CONSTRUCTIONAL_SERVICE: `${BASE_URL}/constructionalServices`,
  GET_ENGINNERING_OFFICE: `${BASE_URL}/engineeringOffice`,
  GET_DESIGNING_OFFICE: `${BASE_URL}/designingOffice`,
  POST_NOTIFICATION: `${BASE_URL}/send/notication/specific`,
  
};

export { Path };
