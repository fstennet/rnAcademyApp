import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './components/Main'
import MyCourses from './components/MyCourses'
import MyProgress from './components/MyProgress'

import WhatsNew from './components/CarouselCards/WhatsNew'
import Groups from './components/CarouselCards/Groups'
import GroupInfo from './components/CarouselCards/GroupInfo'

import MyCourse from './components/MyCourses/MyCourse';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

//El stacknavigator es el componente para poner titulo en un screen

const MainStackNavigator = createStackNavigator({
  Main:{
    screen: Main,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'Sykes Technical Academy'
      }
    }
  },
  WhatsNew:{
    screen: WhatsNew,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'What\'s new'
      }
    }
  },
  Groups:{
    screen: Groups,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'Groups'
      }
    }
  },
  GroupInfo:{
    screen: GroupInfo,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'Group Information'
      }
    }
  }
})

const MyCoursesStackNavigator = createStackNavigator({
  MyCourses:{
    screen: MyCourses,
    navigationOptions: ({ navigation })=> {
      return {
        header: null
      }
    }
  },
  MyCourse:{
    screen: MyCourse,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'My Course'
      }
    }
  },
})

//Aqui se ponen los tabs de abajo

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: MainStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type='material-community' name='home' />
      )
    } 
  },
  'My Courses':{ 
    screen : MyCoursesStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type='material-community' name='book-open-page-variant' />
      )
    } 
  },
  'My Progress': {
    screen: MyProgress,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type='material-community' name='chart-line' />
      )
    } 
  }, 
  },{
  navigationOptions:({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]
    return{
      header: null,
      headerTitle: routeName
    }
  },     
    tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  },

});

const StackNavigator = createStackNavigator({
  TabNavigator: TabNavigator

});



const AppContainer = createAppContainer(StackNavigator);