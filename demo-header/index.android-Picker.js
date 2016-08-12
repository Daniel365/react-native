'use strict';
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Picker,
} from 'react-native';

class demo extends Component{
  constructor(props){
    super(props);
    this.state = {
      language:null,
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Picker组件</Text>
        <Picker selectedValue={this.state.language}
          onValueChange={lang=>this.setState({language:lang})} mode="dialog" style={{color:'#f00'}}>
          <Picker.Item label="Java" value="java"></Picker.Item>
          <Picker.Item label="Javascript" value="js"></Picker.Item>
          <Picker.Item label="C语言" value="c++"></Picker.Item>
          <Picker.Item label="PHP开发" value="php"></Picker.Item>
        </Picker>
        <Text>{this.state.language}</Text>
      </View>
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
