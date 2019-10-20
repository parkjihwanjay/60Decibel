import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

axios.defaults.baseURL = 'http://13.125.155.180:8000/api/';

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

const Login = loginObj => axios.post(releaseApi.login, loginObj);

const Logout = userInfo => axios.post(releaseApi.logout, userInfo);

const Signup = signupObj => axios.post(releaseApi.registration, signupObj);

const getMemberInfo = config => axios.get(releaseApi.user, config);

const getProfileInfo = config => axios.get(releaseApi.profile, config);

const getStomachInfo = (stomachId, config) => {
	const getStomachUrl = `${releaseApi.stomach}${stomachId}`;
	return axios.get(getStomachUrl, config);
};

const getSurveyHistory = config => axios.get(releaseApi.surveys, config);

const updateProfileInfo = (config, update) => axios.put(releaseApi.profileupdate, update, config);

const shootSurveyData = (stomachData, config) =>
	axios.post(releaseApi.stomach, stomachData, config);

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
