import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { ProgressCircle } from 'react-native-svg-charts'



export default class MyCourse extends Component {
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
            <View style={{ flexDirection: 'row' }}>    
                <View style={{flex:1, flexDirection:'column' }}>
                <Text style={{ 
                color:'black',
                fontSize: 20, 
                fontWeight: 'bold',
                textAlign: 'center',
                margin:5 }}>Completion</Text>
                    <View>
                        <ProgressCircle
                            style={ { height: 100 } }
                            progress={ 0.57 }
                            progressColor={'rgb(134, 65, 244)'}/>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>57%</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, flexDirection:'column' }}>
                <Text style={{ 
                color:'black',
                fontSize: 20, 
                fontWeight: 'bold',
                textAlign: 'center',
                margin:5  }}>Attendance</Text>
                    <View>
                        <ProgressCircle
                            style={ { height: 100 } }
                            progress={ 1 }
                            progressColor={'rgb(134, 65, 244)'}/>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>100%</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={{
                    margin: 10,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1 }}/>

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


        </View>

        </ScrollView>
      );
    }
  }