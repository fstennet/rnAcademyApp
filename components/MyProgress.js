
import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import Login from './Login'
import MyProgressContent from './MyProgressContent';




export default class MyProgress extends Component {


  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }
  
    render() {
        if (!this.state.user) {
          return <Login />;
        }
        return (
          <MyProgressContent/>
        );
    }
  }
