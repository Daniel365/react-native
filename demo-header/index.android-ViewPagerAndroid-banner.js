'use strict';
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 ViewPagerAndroid,
} from 'react-native';

class demo extends Component{
  render(){
    return(
      <ViewPagerAndroid style={styles.container}
        initialPage={0}>
        <View style={styles.center}><Text>第一张</Text></View>
        <View style={styles.center}><Text>第二张</Text></View>
        <View style={styles.center}><Text>第三张</Text></View>
      </ViewPagerAndroid>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    height:200,
  },
  center:{
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#000',
    justifyContent:'center',
    alignItems:'center',
  },
});

AppRegistry.registerComponent('demo', () => demo);
