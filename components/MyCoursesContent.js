import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

import firebase from 'react-native-firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


export default class MyCoursesContent extends Component {

  constructor() {
    super();
    this.state = {
      courses: [],
      activityIndicator: false,
      coursesDetailed: [],
      todayCourseInfo: {},
      todayCourseStatus: '',
      todayCourseCardVisible: false
    };
  }

  todayCourse(coursesDetailed) {
    var time = new Date()
    time = time.getHours()
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
    for (var a in coursesDetailed){
      //console.warn(a, coursesDetailed[a])
      //console.warn(today, coursesDetailed[a]['day'])
      if (coursesDetailed[a]['day'] == day){
        this.setState({ todayCourseInfo: coursesDetailed[a], todayCourseCardVisible: true })
        //console.warn(this.state.todayCourseInfo)
        //console.warn(time)
        if (time >= 16 && time <= 20){
          
          this.setState({ todayCourseStatus: 'In Progress' })
        } else if (time >= 15 && time < 16) {
          this.setState({ todayCourseStatus: 'Starting Soon' })
        } else if (time >= 21){
          this.setState({ todayCourseStatus: 'Class Finished' })
        } else {
          this.setState({ todayCourseStatus: 'Class Today' })
        }

      }
    }
  };

  componentDidMount() {
     firebase.database().ref('users/' + this.props.user.uid + '/courses').once('value', (snapshot) => {
      this.setState({ courses: Object.values(snapshot.val()) })
      for (var a in this.state.courses){
        //console.warn(a, this.state.courses[a])
        firebase.database().ref('groups/' + this.state.courses[a]['year'] + '/' + this.state.courses[a]['quarter'] + '/' + this.state.courses[a]['group']).on('value', (snapshot) => {
          if (snapshot.val()){
            this.setState(prevState => ({
              coursesDetailed: [...prevState.coursesDetailed, snapshot.val()]
            }) )
            //console.warn(this.state.coursesDetailed)
            this.todayCourse(this.state.coursesDetailed)
          }
        })
      } 
  });
  
  
  }

   courseStatus(){
    if (this.state.todayCourseStatus == 'Class Today' ){
    return (<View style={{ flex: 1, alignSelf:'flex-start', marginLeft:-10, marginTop: 2, marginBottom: 5, padding: 4, backgroundColor: '#38C91B', borderRadius: 5 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>{ this.state.todayCourseStatus }</Text>
              </View>)
  } else if (this.state.todayCourseStatus == 'Starting Soon'){
    return (
              <Text style={{ color: 'yellow', fontWeight: 'bold', fontSize: 10 }}>{ this.state.todayCourseStatus }</Text>
            )       
  } else if (this.state.todayCourseStatus == 'In Progress'){
    return (
              <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 10 }}>{ this.state.todayCourseStatus }</Text>
              )
  }
}
    render() {
        return (
<ScrollView style={{backgroundColor: 'white'}}>
  <ImageBackground 
      source={ require('../assets/mycourses.jpg')} 
      style= {{ width: '100%', height: 280}}>
      <View style={{ flexDirection:'row' }}>
        <View style={{ alignItems: 'flex-start', margin: 10 }}>
        <Icon 
            name='book-open-page-variant' 
            type='material-community' 
            color='white'
            containerStyle={{ margin: 10, marginTop: 50 }}
            />
        <Text style={ styles.textTitle }>My Courses</Text>
        <Text style={ styles.textSubTitle }>Franklin Stennett</Text>
        </View>
      </View>              
  </ImageBackground>
  <View style={{      marginTop: -60, marginRight: 20, marginLeft: 20, marginBottom: 20 }}>

  { this.state.todayCourseCardVisible &&
    <View style={{backgroundColor: 'rgb(245,245,245)', borderRadius: 3, borderWidth: 0.5, borderColor: 'rgba(186, 186, 186, 0.42)'}}>
      {
               this.courseStatus()
             }
    
    {/*<Text style={ styles.titleText }>Today</Text>*/}
    <TouchableOpacity style={{ marginRight:10, marginLeft:10, justifyContent: 'center', borderRadius: 10, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row', margin: 5}}>
              <View style={{  flex: 1, alignItems: 'flex-start'}}>

                <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{ this.state.todayCourseInfo.name }</Text>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                <Icon name='account-outline' 
                      type='material-community'
                      color='grey'
                      size={20}
                      />
                <Text style={{ fontSize: 10, marginTop:7 }}>{ this.state.todayCourseInfo.instructor }</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                <Icon name='domain' 
                      type='material-community'
                      color='grey'
                      size= {20}  />
                <Text style={{ fontSize: 10, marginTop:7  }}>{ this.state.todayCourseInfo.building }</Text>
                </View>
              </View>
              <View style={{  borderRightColor: 'rgba(186, 186, 186, 0.42)', borderRightWidth: 1}}/>
              <View style={{  flex: 1, alignItems: 'flex-end', borderWidth: 1,  alignContent: 'center', justifyContent: 'center'}}>
                <View style={{flex:1,}}>
                <Animatable.View style={{ flex: 1, justifyContent:'center'}} animation='pulse' easing="ease-out" iterationCount="infinite">
                <LinearGradient style={{ borderRadius: 3, margin: 5 }} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']}>
                <Icon
                    type='material-community'
                    name='qrcode-scan'
                    size={40}
                    color='white'
                    containerStyle={{padding: 5, borderRadius: 3}}/>
                    </LinearGradient>
                  </Animatable.View>
                  </View>
                </View>
            </View>

    </TouchableOpacity>
    </View>
  }
    { !this.state.todayCourseCardVisible &&
    <View>
    <Text style={ styles.titleText }>Today</Text>
    <TouchableOpacity style={{ marginRight:40, marginLeft:40, justifyContent: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'black' }}>
            <View style={{ flexDirection: 'row'}}>
              <View style={{  flex: 1, alignItems: 'center', margin: 20}}>
                <Text style={{ }}>You have no classes today</Text>
              </View>
            </View>

    </TouchableOpacity>
    </View>
  }
  </View>
  {/*<View style={styles.separatorView}/>*/}
  <View>
  <Text style={ styles.titleText }>My Active Courses</Text>
      {  
      this.state.courses.map((l, i) => {
        if (l.year == '2019'){
        return <ListItem
          key={i}
          leftAvatar={{ source: { uri: l.avatar_url } }}
          title={l.name}
          rightIcon={<Icon name='keyboard-arrow-right' color='grey' />}
          onPress={()=>this.props.navigation.navigate('MyCourse')}
        />
      }})
      } 
      <View style={styles.separatorView}/>
  </View>
</ScrollView>
);
}
}

const styles = StyleSheet.create({
separatorView: {
  margin: 40,
  borderBottomColor: 'grey',
  borderBottomWidth: 1
},
textTitle: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 40 
},
textSubTitle:{
  color: 'white',
  fontSize: 20
},
titleText: {
  fontSize: 20, 
  textAlign: 'center', 
  fontWeight: 'bold', 
  marginTop: 10, 
  marginBottom: 10, 
},

})