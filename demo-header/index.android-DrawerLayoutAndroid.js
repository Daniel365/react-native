'use strict';
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 DrawerLayoutAndroid,
} from 'react-native';

class demo extends Component{
  render(){
    var navigationView = (
      <View style={styles.container}>
        <Text>
          我是抽屉！
        </Text>
      </View>
    );
    return(
      <DrawerLayoutAndroid drawerWidth={100} drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={()=>navigationView}>
        <View style={styles.container}>
          <Text>Hello Word!
          </Text>
        </View>
      </DrawerLayoutAndroid>
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
