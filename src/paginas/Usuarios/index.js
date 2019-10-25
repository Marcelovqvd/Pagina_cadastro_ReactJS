import React, { Component } from 'react';
import api from '../../services/api';

export default class Usuarios extends Component {
  state = {
    users: [],
  }
  async componentDidMount() {
    const response = await api.get('/users');
    console.log(response.data);
    this.setState({ users: response.data })
  }


  render() {
    const { users } = this.state;
    return (
      <>
        <h1>Usuários</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  };
}