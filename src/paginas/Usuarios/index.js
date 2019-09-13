import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default class Usuarios extends Component {
  state = {
    users: []
  };
  componentDidMount() {

    api.get("/users").then(response => response.data)
      .then((data) => {
        this.setState({ users: data })
        console.log(this.state.users)
      })
  }

  render() {
    return (
      <>
        {this.state.users.map((user) => (
          <ul>
            <li key={user}><Link to="/edicao">{user.name}</Link>, email: {user.email}, website: {user.website}</li>
          </ul>
        ))}
        <Link to="/users/post">Incluir</Link>

      </>

    );
  };
}