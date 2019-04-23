import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';



export default class GroupInfo extends Component {
    render() {
      return (
        <ScrollView style={{backgroundColor: 'white'}}>
        <ImageBackground 
            source={{ uri: 'https://i.imgur.com/UPrs1EWl.jpg' }} 
            style= {{ width: '100%', height: 280}}>
            <View style={{ flexDirection:'row' }}>
            <View style={{  alignItems: 'flex-start', margin: 10 }}>
            <Icon 
                name='lan' 
                type='material-community' 
                color='white'
                containerStyle={{ margin: 10 }}
                />

            <Text 
                style={{  
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 40 }}>PC Building</Text>
            <Text 
                style={{  
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20 }}>Main Building</Text>
            <Text 
                style={{  
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20 }}>Palo Verde</Text> 
            <Text 
                style={{  
                    color: 'white',
                    fontSize: 15, 
                    marginTop: 20}}>Mondays</Text> 
            <Text 
                style={{  
                    color: 'white',
                    fontSize: 15 }}>April 22 - July 22</Text>
            <View style={{ flexDirection:'row'}}>
            <Text 
                style={{ 
                    marginTop: 20, 
                    color: 'white',
                    fontSize: 15 }}>Spots Available: </Text>               
            <Text 
                style={{ 
                    marginTop: 20, 
                    color: 'white',
                    fontSize: 15,
                    fontWeight:'bold' }}>4</Text>  
            </View>

            </View>

            <View style={{  flex: 1, justifyContent: 'center', alignItems: 'flex-end', margin: 10 }}>
                <TouchableOpacity style={{ borderRadius: 30, margin: 10 }}>
                    <ImageBackground 
                    source={{ uri: 'https://via.placeholder.com/250x250' }} 
                    style= {{ width: 65, height: 65}}
                    imageStyle={{ borderRadius:30 }}>
                    </ImageBackground>
                </TouchableOpacity>
                <Text 
                style={{  
                    color: 'white',
                    fontSize: 15 }}>Juan Monge</Text> 
            </View>
            </View>              
        </ImageBackground>
        <View style={{ margin: 10}}>
        {/*<View style={{flexDirection:'row'}}>
        <View style={{ flex:1 }}>
            <Text style={{ 
                color:'black',
                fontSize: 20, 
                fontWeight: 'bold' }}>Study Plan</Text>
            <Text style={{ 
                marginTop: 5,
                color:'grey',
                fontSize: 12 }}>The study plan will provide you with the objectives of this course</Text>
        </View>
        
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{  backgroundColor: 'red', borderColor: 'blue', borderRadius: 5}}>
                <Text>Reserve</Text>
            </TouchableOpacity>
           
        </View> 
            </View>  */} 
        <View style={{flexDirection:'row'}}>
        <View style={{ flex:1 , marginRight: 5, marginBottom:10 }}>
        <Text style={{ 
                color:'black',
                fontSize: 20, 
                fontWeight: 'bold' }}>Study Plan</Text>
            <Text style={{ 
                marginTop: 5,
                marginBottom: 5,
                color:'grey',
                fontSize: 12 }}>The study plan will provide you with the objectives of this course</Text> 
            <TouchableOpacity style={{ marginTop:5, marginBottom:5, justifyContent: 'center', flex: 1, width: '100%', height: 30, borderWidth: 1, borderRadius: 5, borderColor: 'black' }}>
                <Text style={{ textAlign: 'center'}}>View Plan</Text>
            </TouchableOpacity>  
        </View>
        <View style={{  borderRightColor: 'grey', borderRightWidth: 1}}/>
        <View style={{ flex:1 , alignItems:'flex-end', marginLeft: 5, marginBottom: 10}}>
        <Text style={{ 
                color:'black',
                fontSize: 20, 
                fontWeight: 'bold' }}>Agenda</Text>
            <Text style={{ 
                textAlign: 'right',
                marginTop: 5,
                marginBottom: 5,
                color:'grey',
                fontSize: 12 }}>Check out the course agsdfsdfsdfsdfsdfsdfsff sdf sdf ds fenda</Text> 
            <TouchableOpacity style={{ marginTop:5, marginBottom:5, justifyContent: 'center', flex: 1, width:'100%' , height:30, borderWidth: 1, borderRadius: 5, borderColor: 'black' }}>
                <Text style={{ textAlign: 'center'}}>View Agenda</Text>
            </TouchableOpacity>  
        </View> 
            </View>
            <View
                style={{
                    margin: 10,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                }}/>
                <Text style={{ 
                color:'black',
                fontSize: 20, 
                fontWeight: 'bold',
                textAlign: 'center' }}>Pre-requisites</Text>
                <Text style={{ 
                textAlign: 'center',
                marginTop: 5,
                marginBottom: 5,
                color:'grey',
                fontSize: 12 }}>There aren't any requisites to enroll this course.</Text> 

            <TouchableOpacity style={{ marginTop:5, marginBottom:5, justifyContent: 'center', flex: 1, width:'100%' , height:30, borderWidth: 1, borderRadius: 5, borderColor: 'black' }}>
                <Text style={{ textAlign: 'center'}}>View pre-requisites</Text>
            </TouchableOpacity>  
            <View
                style={{
                    margin: 10,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                }}/>
                <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#4CAF50', marginTop:5, marginBottom:5, justifyContent: 'center', flex: 1, width:'50%' , height:40, borderRadius: 5, borderColor: 'black' }}>
                <Text style={{ textAlign: 'center'}}>Enroll Now!</Text>
            </TouchableOpacity> 
            </View>

        </View>

        </ScrollView>
      );
    }
  }