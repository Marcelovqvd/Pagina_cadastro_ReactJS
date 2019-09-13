import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, List, Paragrafos } from './styles';

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
      <Container>
        {
          this.state.users.map((user) => (
            <List>
              <li key={user}><Link to="/edicao">{user.name}</Link>
                <Paragrafos>
                  <p>email: {user.email}</p>
                  <p>website: {user.website}</p>
                </Paragrafos>
              </li>
            </List>
          ))
        }
      </Container >
    );
  };
}