import axios from 'axios';

function fetchProfileList() {
    return axios.get(`http://127.0.0.1:8000/api/profiles/ant/`)
}

export {
    fetchProfileList
}
