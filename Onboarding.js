import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPress = text => {
    Alert.alert(text);
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={require('./assets/images/bgd1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./assets/images/bgd2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./assets/images/bgd3.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>YOUR MUSIC.</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subtitle}>Tuned to you.</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this._onPress('Tapped Sign up')}>
            <View style={styles.signupContainer}>
              <Text style={styles.signup}>Sign up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPress('Tapped Log in')}>
            <View style={styles.loginContainer}>
              <Text style={styles.login}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width,
    height: height
  },
  textContainer: {
    position: 'absolute',
    bottom: 200,
    marginLeft: 20,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  titleContainer: {
    width: 300,
    height: 70,
    backgroundColor: '#3B55E6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    color: '#FFFFFF'
  },
  subTitleContainer: {
    width: 200,
    height: 50,
    backgroundColor: '#3B55E6',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    color: '#FFFFFF'
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signup: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6'
  },
  loginContainer: {
    width: 180,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 2
  },
  login: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6'
  }
});
