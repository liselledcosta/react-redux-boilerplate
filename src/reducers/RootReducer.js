import { combineReducers } from 'redux';
import UsersReducer from './users/UsersReducer';

const RootReducer = combineReducers({
    UsersReducer
})
export default RootReducer;