import React, {Component} from 'react';
import UsersTableContainer from '../../containers/users/UsersTableContainer';

export default class UsersComponent extends Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <div>
                <h1>Users list </h1>
                <div>
                    <UsersTableContainer/>
                </div>    
            </div>
        )
    }

}