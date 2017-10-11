import React, { Component } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { message } from 'antd';

class Users extends Component {
    
      constructor() {
        super();
        this.state = {
          users: []
        }
     
        this._removeUser = this._removeUser.bind(this);
        this._addUser = this._addUser.bind(this)
      }
      componentWillMount () {
          this.setState({
              users: JSON.parse(window.localStorage.getItem('users'))
          })
      }
      componentDidUpdate () {
          window.localStorage.setItem('users', JSON.stringify(this.state.users));
      }    
      _removeUser (user_id) {
        if(window.confirm('Are you sure?')){
          let users = this.state.users.filter (
              user => user.id !== user_id    
          );
    
          this.setState({ users });
          this.successMessage('User successfully deleted');
        }
      }

      successMessage = (text) => {
        message.success(text);
      };
    
    
    
      _addUser (e) {
        e.preventDefault();
        let user = {
          key: this.state.users.length + 1,
          id: this.state.users.length + 1,
          name: e.target.name.value,
          email: e.target.email.value
        }
        this.setState({
          users: this.state.users.concat(user)
        })

        this.successMessage(`Great! ${user.name} is a new user now.`);
    
        e.target.name.value = '';
        e.target.email.value = '';
    
      }
    render () {
        return (
            <div>
                <h1>User List</h1>
                <UserForm onAddUser={this._addUser} />
                <UserList users={this.state.users} onDelete={this._removeUser} /> 
            </div>
        )
    }

    
}

export default Users;