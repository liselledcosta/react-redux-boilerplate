import React, {Component} from 'react';
import _ from 'lodash';

export default class UsersComponent extends Component{
    constructor(){
        super();
        this.state = {
            users:[],
            loading: false,
            loadingFailed: false,
        }
    }

    componentWillMount(){
        this.loadUsers();
    }

    componentWillReceiveProps(nextProps){
       if(nextProps.loadUsersSuccess && !(_.isEqual(nextProps.loadUsersSuccess, this.props.loadUsersSuccess))){
        this.setState({users: nextProps.loadUsersSuccess, loading: false});
       }

       if(nextProps.loadUsersFailure && !(_.isEqual(nextProps.loadUsersFailure, this.props.loadUsersFailure))){
            this.setState({ loading: false, loadingFailed: true});
        }

    }

    render(){
        return(
            <div>
                {
                    this.state.loading && !this.state.loadingFailed ? <h3>Loading...</h3> : 
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((u,i)=>{
                              return  <tr key={i}>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                    </table>
                }
                {
                    !this.state.loading && this.state.loadingFailed && <h3>Failed to load users.</h3>
                }
            </div>
        )
    }

    loadUsers(){
        console.log("Props",this.props);
        this.props.actions.loadUsers();
        this.setState({loading: true});
    }
}