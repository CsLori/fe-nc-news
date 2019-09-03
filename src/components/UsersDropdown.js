import React, { Component } from 'react';
import { getAllUsers } from './Api';
import Loading from './Loading';
import Error from './Error';
import './Users.css';

class UsersDropdown extends Component {
  state = {
    users: [],
    isLoading: true,
    error: null,
    user: ''
  };
  render() {
    const { users, isLoading, error } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (users) {
      return (
        <div className="usersList">
          <select name="usersList" id="usersList" onChange={this.handleChange}>
            {users.map(user => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
          <br />
          <button className="usersButton" onClick={this.handleClick}>
            Select user
          </button>
        </div>
      );
    }
  }

  componentDidMount() {
    this.selectAllUsers();
  }

  selectAllUsers = () => {
    getAllUsers().then(users => {
      this.setState({ users, isLoading: false, error: null });
    });
  };
  handleChange = e => {
    this.setState({ user: e.target.value });
  };
  handleClick = () => {
    const { updateUser } = this.props;
    const { user } = this.state;
    updateUser(user);
  };
}

export default UsersDropdown;
