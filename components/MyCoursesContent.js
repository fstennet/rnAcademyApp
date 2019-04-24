import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';



const list_courses = [
  {
      id: 'some ID generated by Firebase',
      name: 'Python II',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Spaces Available',
      building: 'Main Building',
      room: 'Turrialba',
      day: 'Monday',
      start_date: 'April 22',
      end_date: 'July 22',
      instructor: 'Juan Monge',
      reason:  '',
      screen: 'BarraHonda'
    },
    {
      id: 'some ID generated by Firebase',
      name: 'AWS',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Full',
      building: 'Annex Building',
      room: 'Barra Honda',
      day: 'Friday',
      start_date: 'April 22',
      end_date: 'July 22',
      instructor: 'Allan Valverde',
      reason:  '',
      screen: 'BarraHonda'
    },
]



export default class MyCoursesContent extends Component {
    render() {
        return (
<ScrollView
contentContainerStyle={{backgroundColor: 'white'}}>
  <ImageBackground 
      source={{ uri: 'https://i.imgur.com/UPrs1EWl.jpg' }} 
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
  <View style={styles.separatorView}/>
  <View>
      {  
      list_courses.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: l.avatar_url } }}
          title={l.name}
          rightIcon={<Icon name='keyboard-arrow-right' color='grey' />}
          onPress={()=>this.props.navigation.navigate('MyCourse')}
        />
      ))
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
}

})