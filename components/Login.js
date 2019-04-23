import React, { Component } from 'react';
import { Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native';


export default class Login extends Component {
    render() {
      return (
        <KeyboardAvoidingView behavior='padding' style={ styles.container }>
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
                        returnKeyType='Next'
                        keyboardType='email-address'
                        autoCapitilize='none'
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordInput.focus()}/>
              <TextInput style= { styles.input }
                        placeholder = 'E-mail'
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        returnKeyType='Login'
                        ref={ (input) => this.passwordInput=input }/>
            />

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
        paddingVertical: '15'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }

})