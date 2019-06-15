
import React, { Component } from 'react';
import { View, Text, ScrollView , TouchableOpacity, Image, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'

import firebase from 'react-native-firebase';


export default class MyProgressContent extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: {
          name: '',
          gender: '',
          email: '',
          role: '',
          age: '',
          address: '',
          company: '',
          badge: '',
          nationalID: '',
          phone: '',
          nationality: '',
          sykesAccount: '',
          courses: [],
          certification:[]
        },
        data: [],
        courses: [],
        finishedCourses: [],
        activityIndicator: false
    };
  }

  componentDidMount() {
    this.setState({ activityIndicator: true })

    return firebase.database().ref('users/' + this.props.user.uid).once('value', (snapshot) => {
      

      // TODO: add some logic to add past courses
      this.setState({ userInfo: snapshot.val() })
      /*for (a in this.state.userInfo.courses){
        if (this.state.userInfo.courses[a].status != 'active'){
          this.setState(prevState => ({
            finishedCourses: [...prevState.finishedCourses, this.state.userInfo.courses[a]]
          }) )
          console.warn(this.state.finishedCourses)
          //this.setState(prevState => ({
           // data: [...prevState.data, this.state.finishedCourses[a].grade]
          //}) )    
        }
      }*/
      
      this.setState({ finishedCourses:  Object.values(this.state.userInfo.courses)})
      //console.warn(this.state.finishedCourses)
      //console.warn(this.state.finishedCourses)
      for (b in this.state.finishedCourses){
        if (b > -1){
          console.warn(b)
          if (this.state.finishedCourses[b].status != 'active'){
            console.warn(this.state.finishedCourses[b])
            //this.state.finishedCourses.splice(b, 1)
            /*this.setState(prevState => ({
              data: [...prevState.data, this.state.finishedCourses[a].grade]
            }) )*/
          }
        }

      }
      console.warn(this.getSnapshotBeforeUpdate.finishedCourses)




      /*this.setState({ userInfo: snapshot.val() })
      for ( a in this.state.userInfo.courses ){
        for ( b in this.state.userInfo.courses[a]) {
          for ( c in this.state.userInfo.courses[a][b]){
            this.setState(prevState => ({
              finishedCourses: [...prevState.finishedCourses, this.state.userInfo.courses[a][b][c]]
            }) )
            this.setState(prevState => ({
              data: [...prevState.data, this.state.userInfo.courses[a][b][c]['grade']]
            }) )
            this.setState(prevState => ({
              courses: [...prevState.courses, this.state.userInfo.courses[a][b][c]['name']]
            }) )
          }
        }
      }*/
      this.setState({ activityIndicator: false})

  });
  
  }

  renderRow(item, index) {
    return (
        <View key={index} style={ styles.tableMainView }>
            <View style={ styles.tableLeftRowView}>
              <Text>{item.name}</Text>
            </View> 
            <View style={ styles.tableCenterRowView }> 
              <Text>{item.status}</Text>
            </View>
            <View style={ styles.tableRightRowView }>
              <Text>{item.grade}</Text>
            </View> 
        </View>
    );
  }
    render() {

      const axesSvg = { fontSize: 10, fill: 'grey' };
      const verticalContentInset = { top: 10, bottom: 10 }
      const xAxisHeight = 30

      return (
        <ScrollView style={{ backgroundColor: 'black' }}>
        <ImageBackground 
            source={{ uri: 'https://i.imgur.com/UPrs1EWl.jpg' }} 
            style= {{ width: '100%', height: 280}}>
            <View style={{ flexDirection:'row' }}>
              <View style={{  alignItems: 'flex-start', margin: 10 }}>
                <Icon 
                    name='chart-line' 
                    type='material-community' 
                    color='white'
                    containerStyle={{ margin: 10, marginTop: 50 }}
                    />
                <Text 
                    style={ styles.textTitle }>My Progress</Text>
                <Text 
                    style={ styles.textSubTitle }>Student since 2014</Text>
              </View>
            </View>              
        </ImageBackground>

        <View style={ styles.mycareerBackground }>
          {this.state.activityIndicator &&
            <View style={styles.loading}>
              <ActivityIndicator size='large' />
            </View>
          }
          <View style={{flexDirection: 'row', marginBottom: 30}}>
            <Image
                style={ styles.avatarImage }
                source={{ uri: 'https://via.placeholder.com/50x50?text=F' }}
              />
            <Text style={ styles.nameText }>{ this.state.userInfo.name }</Text>
          </View>
          <View style={ styles.separatorView }/>
          <View> 
            <Text style={ styles.titleText }>Calificaciones finales</Text>
            <View>
              <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                  <YAxis
                      data={this.state.data}
                      style={{ marginBottom: xAxisHeight }}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                  />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                      <LineChart
                          style={{ flex: 1 }}
                          data={this.state.data}
                          contentInset={verticalContentInset}
                          svg={{ stroke: 'rgb(134, 65, 244)' }}>
                          <Grid/>
                      </LineChart>
                      <XAxis
                          style={{ marginHorizontal: -10, height: xAxisHeight }}
                          data={this.state.data}
                          formatLabel={(value, index) => this.state.finishedCourses[index].name}
                          contentInset={{ left: 25, right: 25 }}
                          svg={axesSvg}
                      />
                  </View>
                  <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20, height: 40, width: 40}}>
                    <Icon 
                      name='share-variant' 
                      type='material-community' 
                      color='black'
                    />
                  </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1, }}>
              <View style={ styles.separatorView }/>
              <Text style={ styles.titleText }>Cursos Finalizados</Text>  
              <View style={{flex:1, margin: 20 }}>
                {/*<View style={ styles.tableMainView }>
                  <View style={ styles.tableLeftRowView }>
                    <Text>Course</Text>
                  </View> 
                  <View style={ styles.tableCenterRowView }> 
                    <Text>Date</Text>
                  </View> 
                  <View style={ styles.tableRightRowView }>
                    <Text>Grade</Text>
                  </View> 
      </View>*/}
                {
                    this.state.finishedCourses.map((item, index) => { 
                        return this.renderRow(item, index);
                    })
                }
            </View>   
          </View>          
          <View style={ styles.separatorView }/>
            <Text style={ styles.titleText }>Certificaciones</Text>
              <View 
                style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image 
                  source={{ uri: 'https://3.imimg.com/data3/OT/CD/MY-10431781/ccna-routing-switching-500x500.jpg' }}
                  style= {{ width: 100, height: 100}}/>
                <Image 
                  source={{ uri: 'https://cdn-images-1.medium.com/max/578/1*Kj2hYz9-o0nKbP9aSCdd4A.png' }}
                  style= {{ width: 100, height: 100}}/>
                <Image 
                  source={{ uri: 'https://pythoninstitute.org/wp-content/uploads/2018/03/PCAP_badge_silver.png' }}
                  style= {{ width: 100, height: 100}}/>            
              </View>
          </View>
        </View>
        </ScrollView>

      );
    }
  }
  const styles = StyleSheet.create({
    tableMainView: {
      flex: 1, 
      alignSelf: 'stretch', 
      flexDirection: 'row', 
    },
    tableLeftRowView: {
      flex: 1, 
      alignSelf: 'stretch', 
      alignItems: 'flex-start', 
      margin: 2
    },
    tableCenterRowView: {
      flex: 1, 
      alignSelf: 'stretch' , 
      alignItems:'center', 
      margin: 2
    },
    tableRightRowView: {
      flex: 1, 
      alignSelf: 'stretch' ,  
      alignItems: 'flex-end', 
      margin: 2
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
    mycareerBackground: {
      backgroundColor: 'white', 
      marginTop: -40, 
      marginRight: 20, 
      marginLeft: 20 
    },
    avatarImage: {
      width: 50, 
      height: 50,           
      marginTop: 25, 
      marginLeft:10 , 
      marginRight:10
    },
    nameText: {
      fontSize: 20, 
      textAlign: 'left', 
      fontWeight: 'bold',
      marginTop: 40,
      marginRight: 40,
      marginLeft:40
    },
    separatorView: {
      margin: 40,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
    },
    titleText: {
      fontSize: 20, 
      textAlign: 'center', 
      fontWeight: 'bold', 
      marginTop: 40, 
      marginBottom: 40, 
    },
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.5,
      backgroundColor: 'black'
    }

  
  })