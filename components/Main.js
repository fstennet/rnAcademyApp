import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import LinearGradient from 'react-native-linear-gradient';
import SliderEntry from './SliderEntry';
import styles, { colors } from './index.style';
import { ENTRIES1 } from './entries';
import {  ListItem  } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale


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
                <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: {x: 1.0, y:0.0},
                    end: {x: 0.2, y:0.0},
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  leftAvatar={{ rounded: true, source: { uri: 'https://via.placeholder.com/128' } }}
                  title="Nuevos Cursos 2019"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  chevronColor="white"
                  chevron
                  onPress={()=>this.props.navigation.navigate('WhatsNew')}
                />
          </ScrollView>
        </SafeAreaView>
    );
  }
  }
