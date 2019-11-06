import axios from 'axios';

// const djangoIP = 'http://13.125.155.180:8000/api/';
const nodeLocalIP = 'https://localhost:3000';
const nodeIP = 'http://52.78.25.102';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

axios.defaults.baseURL = nodeLocalIP;

const releaseApi = {
	login: 'rest-auth/login/',
	logout: 'rest-auth/logout/',
	registration: 'rest-auth/registration/',
	user: 'user/',
	profile: 'profiles/',
	surveys: 'surveys/',
	profileupdate: 'profileupdate/',
	stomach: 'surveys/stomach/',
};

const nodeAPI = {
	login: '/users/login',
	logout: '/users/logout',
	registration: '/users',
	user: '/users',
	profile: '/profile',
	surveys: '/surveys/stomach',
	profileupdate: '/profile',
	stomach: '/surveys/stomach',
};

const Login = loginObj => axios.post(nodeAPI.login, loginObj);

const Logout = empty => axios.post(nodeAPI.logout, empty);

const Signup = signupObj => axios.post(nodeAPI.registration, signupObj);

const getMemberInfo = () => axios.get(nodeAPI.user);

const getProfileInfo = () => axios.get(nodeAPI.profile);

const getStomachInfo = stomachId => {
	const getStomachUrl = `${nodeAPI.stomach}/${stomachId}`;
	return axios.get(getStomachUrl);
};

const getSurveyHistory = () => axios.get(nodeAPI.surveys);

const updateProfileInfo = update => axios.patch(nodeAPI.profileupdate, update);

const shootSurveyData = stomachData => axios.post(nodeAPI.stomach, stomachData);

export {
	Login,
	Logout,
	Signup,
	getMemberInfo,
	getProfileInfo,
	getStomachInfo,
	getSurveyHistory,
	updateProfileInfo,
	shootSurveyData,
};
