import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import UserContext from '../components/UserContext';

export default class MyApp extends App {
  state = {
    user: null
  };

  componentDidMount = () => {
    const user = localStorage.getItem('coolapp-user');
    if (user) {
      this.setState({
        user
      });
    } else {
      Router.push('/signin');
    }
  };

  signIn = (username, password) => {
    localStorage.setItem('coolapp-user', username);

    this.setState(
      {
        user: username
      },
      () => {
        Router.push('/');
      }
    );
  };

  signOut = () => {
    localStorage.removeItem('coolapp-user');
    this.setState({
      user: null
    });
    Router.push('/signin');
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider value={{ user: this.state.user, signIn: this.signIn, signOut: this.signOut }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}
