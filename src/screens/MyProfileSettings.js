import React, { Component } from 'react'
import { 
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native'


import {
  PasswordChange
} from '../components/molecules';

import {
  Button
} from '../components/atoms'

//on 'Change' button pressed, show  PasswordChange slidinguppanel

export class MyProfileSettings extends Component {
  constructor(){
    super()
    this.state = {
      showSlide: false
    }
  }

  handleShowSlide = () =>{
    this.setState({
      ...this.state,
      showSlide: !this.state.showSlide
    })
    console.log('Showing Slide')
    console.log(this.state.showSlide)
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text>MyProfileSettings</Text>
          </View>
          <Button title='Show Slide' type='primary' big={true} submit={this.handleShowSlide} />
        </View>
        <View style={styles.sliderContainer}>
          <PasswordChange title='Password Change' active={this.state.showSlide}/>
        </View>
      </>
    )
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
  },
  headerContainer:{
    width: width
  },
  sliderContainer:{
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
  }
})

export default MyProfileSettings
