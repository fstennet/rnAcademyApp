import React, { Component } from 'react';
import firebase from 'react-native-firebase';


import Login from './Login'
import MyCoursesContent from './MyCoursesContent'


export default class MyCourses extends Component {

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
          <MyCoursesContent navigation={ this.props.navigation }
          user={ this.state.user }/>
        );
    }
  }
