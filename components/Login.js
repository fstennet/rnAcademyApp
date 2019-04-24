import React, { Component } from 'react';
import { Text, View, Image, TextInput, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  _onPressButtonLogin = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      Alert.alert(errorCode, errorMessage)
    });
  }
    render() {
      return (
        <KeyboardAvoidingView behavior='padding' style={ styles.container } >
          <View style={ styles.logoContainer }>
            <Image style={ styles.logo }
                source={ require('./images/logo.png') } 
            />
            <Text style={ styles.title }> Welcome to the Sykes Technical Academy App</Text>
          </View>
          <View>
              <TextInput style= { styles.input }
                        placeholder = 'E-mail'
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType='next'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({username: text})}
                        onSubmitEditing={() => this.passwordInput.focus()}/>
              <TextInput style= { styles.input }
                        placeholder = 'Password'
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        returnKeyType='go'
                        onChangeText={(text) => this.setState({password: text})}
                        ref={ (input) => this.passwordInput=input }
                        />
              <TouchableOpacity style={ styles.buttonContainer }
              onPress={ this._onPressButtonLogin }>
                <Text style={ styles.buttonText }>Login</Text>
              
              </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'grey'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: 'white',
        marginTop: 10,
        width: 160,
        textAlign: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: 'black',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }

})