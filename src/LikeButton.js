'use strict';
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
} from 'react-native';

class demo extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('demo', () => demo);
