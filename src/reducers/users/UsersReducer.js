const UsersReducer = (state = {}, action) => {
      switch (action.type) {
        case "LOAD_ALL_USERS_REQUEST":
          return { ...state, loadUsersSuccess: null, loadUsersFailure: null};
        case "LOAD_ALL_USERS_SUCCESS":
          return { ...state, loadUsersSuccess: action.payload, loadUsersFailure: null};
        case "LOAD_ALL_USERS_FAILURE":
          return { ...state, loadUsersSuccess: null, loadUsersFailure: action.payload};
        default:  
          return state;
      }
    }
    
export default UsersReducer;