
import React, { Component } from 'react';
import { View, Text, ScrollView , TouchableOpacity, Image, ImageBackground, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'

const finishedCourses = [

  {
    name: 'PC Building',
    date: 'Feb 2015',
    grade: '90',
  },
  {
    name: 'CCNA R&S I',
    date: 'Dec 2015',
    grade: '80',
  },
  {
    name: 'CCNE R&S II',
    date: 'Mar 2016',
    grade: '79',
  },
  {
    name: 'Python II',
    date: 'Feb 2017',
    grade: '100',
  },
]



export default class MyProgressContent extends Component {

  renderRow(item, index) {
    return (
        <View key={index} style={ styles.tableMainView }>
            <View style={ styles.tableLeftRowView}>
              <Text>{item.name}</Text>
            </View> 
            <View style={ styles.tableCenterRowView }> 
              <Text>{item.date}</Text>
            </View>
            <View style={ styles.tableRightRowView }>
              <Text>{item.grade}</Text>
            </View> 
        </View>
    );
  }
    render() {

      const data = [ 90,80,79,100]
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
          <View style={{flexDirection: 'row', marginBottom: 30}}>
            <Image
                style={ styles.avatarImage }
                source={{ uri: 'https://via.placeholder.com/50x50?text=F' }}
              />
            <Text style={ styles.nameText }>Franklin Stennett</Text>
          </View>
          <View style={ styles.separatorView }/>
          <View> 
            <Text style={ styles.titleText }>Calificaciones finales</Text>
            <View>
              <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                  <YAxis
                      data={data}
                      style={{ marginBottom: xAxisHeight }}
                      contentInset={verticalContentInset}
                      svg={axesSvg}
                  />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                      <LineChart
                          style={{ flex: 1 }}
                          data={data}
                          contentInset={verticalContentInset}
                          svg={{ stroke: 'rgb(134, 65, 244)' }}>
                          <Grid/>
                      </LineChart>
                      <XAxis
                          style={{ marginHorizontal: -10, height: xAxisHeight }}
                          data={data}
                          formatLabel={(value, index) => finishedCourses[index].name}
                          contentInset={{ left: 10, right: 10 }}
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
                <View style={ styles.tableMainView }>
                  <View style={ styles.tableLeftRowView }>
                    <Text>Course</Text>
                  </View> 
                  <View style={ styles.tableCenterRowView }> 
                    <Text>Date</Text>
                  </View> 
                  <View style={ styles.tableRightRowView }>
                    <Text>Grade</Text>
                  </View> 
                </View>
                {
                    finishedCourses.map((item, index) => { 
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
      borderTopWidth: 1, 
      borderRightWidth: 1, 
      borderLeftWidth: 1
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

  
  })