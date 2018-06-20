import axios from 'axios';

export function loadUsersAH(payload = null , TYPE) {
    return { type: `LOAD_ALL_USERS_${TYPE}`, payload }
  }

  export function loadUsers(params) {
    return function(dispatch) {
      dispatch(loadUsersAH(null , 'REQUEST'));
      return  axios.get('https://jsonplaceholder.typicode.com/users', {
        params: params
      })
      .then((response) => {
        dispatch(loadUsersAH(response.data , 'SUCCESS'));
      })
      .catch((error) => {
        dispatch(loadUsersAH(error.response, 'FAILURE'));
      });
    }
  }
