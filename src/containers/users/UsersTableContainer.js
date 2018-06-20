import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UserActions from '../../actions/users/UserActions';
import UsersTableComponent from '../../components/users/UsersTableComponent';

const mapStateToProps = (state) => {
  return {
    loadUsersSuccess: state.UsersReducer.loadUsersSuccess,
    loadUsersFailure: state.UsersReducer.loadUsersFailure
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersTableComponent)
