import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import LinearGradient from 'react-native-linear-gradient';
import SliderEntry from './SliderEntry';
import styles, { colors } from './index.style';
import { ENTRIES1 } from './entries';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


const SLIDER_1_FIRST_ITEM = 0;


export default class Main extends Component {

  constructor (props) {
    super(props);   
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
}

  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
          navigation={this.props.navigation}
        />
    );
  }

  _renderLightItem ({item, index}) {
    return <SliderEntry data={item} even={false} />;
  }

  _renderDarkItem ({item, index}) {
    return <SliderEntry data={item} even={true} />;
  }

  mainExample () {
    const { slider1ActiveSlide } = this.state;


    return (
        <View style={styles.exampleContainer}>
            <Text 
            style={{fontSize: 20, 
                    textAlign: 'left', 
                    fontWeight: 'bold', 
                    marginRight: 50, 
                    marginLeft: 50}}>LATEST NEWS</Text>
            <Carousel
              ref={c => this._slider1Ref = c}
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax.bind(this)}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
              // Modificar para abrir una pagina nueva!
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
            <Pagination
              dotsLength={ENTRIES1.length}
              activeDotIndex={slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor={'rgba(255, 255, 255, 0.92)'}
              dotStyle={styles.paginationDot}
              inactiveDotColor={colors.black}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this._slider1Ref}
              tappableDots={!!this._slider1Ref}
            />
        </View>
    );
}

get gradient () {
    return (
        <LinearGradient
          colors={[colors.background1, colors.background2]}
          startPoint={{ x: 1, y: 0 }}
          endPoint={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
    );
}

  render () {
    const example1 = this.mainExample();
    

    return (
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
          contentContainerStyle={{backgroundColor: 'white'}}>
              <View style={styles.container}>
                  <StatusBar
                    translucent={true}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                    barStyle={'light-content'}
                  />
                  <ScrollView
                    style={styles.scrollview}
                    scrollEventThrottle={200}
                    directionalLockEnabled={true}
                  >
                      { example1 }
                  </ScrollView>
              </View>
                <View
                  style={{
                    borderBottomColor: '#959595',
                    borderBottomWidth: 1,
                  }}
                />
        <View style={{flex: 1, flexDirection:'row'}}>
        <View style={{ flex:1 , margin: 10 }}>
        <Text style={{ 
                color:'black',
                fontSize: 20, 
                fontWeight: 'bold' }}>Apertura de Cursos</Text>
            <Text style={{ 
                marginTop: 5,
                marginBottom: 5,
                color:'grey',
                fontSize: 12 }}>Estos son los nuevos cursos para este periodo</Text> 
        </View>
        <View style={{ flex:1 , margin: 10 , alignItems:'flex-end', justifyContent: 'center'}}>
        <Animatable.View animation='pulse' easing="ease-out" iterationCount="infinite">
            <TouchableOpacity style={{  justifyContent: 'center', borderWidth: 1, borderRadius: 20, borderColor: 'black' }}>
                <Text style={{ textAlign: 'center', paddingRight: 30, paddingLeft: 30, paddingTop: 10, paddingBottom:10}}>Ver</Text>
            </TouchableOpacity>  
        </Animatable.View>
        </View> 
            </View>
                <View
                  style={{
                    borderBottomColor: '#959595',
                    borderBottomWidth: 1,
                  }}
                />
          </ScrollView>
        </SafeAreaView>
    );
  }
  }
