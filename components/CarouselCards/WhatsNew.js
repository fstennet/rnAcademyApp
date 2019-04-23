import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';


const list_annex = [
  {
    name: 'PC Building',
    avatar_url: 'https://via.placeholder.com/128',
    subCourses: 'PC Building, SOHO...',

  },
  {
    name: 'Computer Networks',
    avatar_url: 'https://via.placeholder.com/128',
    subCourses: 'CCNA R&S I, CCNA R&S II'

  },
  {
    name: 'Virtualization',
    avatar_url: 'https://via.placeholder.com/128',
    subCourses: 'VMware VCA-DBT, VMware VCP-DCV'

  },
  {
    name: 'Cloud',
    avatar_url: 'https://via.placeholder.com/128',
    subCourses: 'AWS, GCP'

  },
  {
    name: 'Operating Systems',
    avatar_url: 'https://via.placeholder.com/128',
    subCourses: 'Linux Essentials, LPIC-1'

  },
  {
    name: 'Computer Programming',
    avatar_url: 'https://via.placeholder.com/128',
    subCourses: 'Python I, Python II, C#, PEGA'

  },
  {
    name: 'Management',
    avatar_url: 'https://via.placeholder.com/128',
    subCourses: 'ITIL, SixSigma'

  },


   // more items
]

export default class WhatsNew extends Component {
    render() {
      return (
        <View style={{ flex: 1,backgroundColor: 'white'}}>
          {/*<TouchableOpacity style={{ margin:10, borderRadius:5}}>
            <ImageBackground 
              source={{ uri: 'https://via.placeholder.com/250x250' }} 
              style= {{ width: '100%', height: 60}}
              imageStyle={{ borderRadius:5 }}>
              <Text style={{ marginTop: 5 , textAlign:'center' }}> AAAAAA </Text>
            </ImageBackground>
      </TouchableOpacity>*/}

          {
                      
            list_annex.map((l, i) => (
              //console.warn(l.status + ' - ' + l.user + ': ' + l.reason),
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url }}}
                title={l.name}
                subtitle={l.subCourses}
                subtitleStyle={{ fontSize: 10, color: 'grey'}}
                rightIcon={<Icon name='keyboard-arrow-right' color='grey' />}
                onPress={()=>this.props.navigation.navigate('Groups')}
              />
            ))
          } 

          
        </View>
      );
    }
  }