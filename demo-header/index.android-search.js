'use strict';
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 TextInput,
 View,
 ScrollView,
 PixelRatio,
} from 'react-native';

var onePT = 1/PixelRatio.get();
class demo extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Search></Search>
      </View>
    );
  }
}
class Search extends Component{
    constructor(props){
      super(props);
      this.state={
        show:false,
        value:null,
      }
    }
    hide(val){
      this.setState({
        show:false,
        value:val,
      });
    }
    getValue(text){
      this.setState({
        show:true,
        value:text,
      });
    }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.container}>
            <TextInput returnKeyType="web-search"
              placeholder="请输入关键词"
              value="{this.state.value}"
              onChangeText={this.getValue.bind(this)}/>
          </View>
          <View style={styles.btn}>
            <Text onPress={this.hide.bind(this,this.state.value)}>
              搜索
            </Text>
          </View>
        {this.state.show?
          <View style={styles.container}>
            <Text onPress={this.hide.bind(this,this.state.value + '1')}
              numberOfLines={1}>{this.state.value}1
            </Text>
            <Text onPress={this.hide.bind(this,this.state.value + '2')}
              numberOfLines={1}>{this.state.value}2
            </Text>
            <Text onPress={this.hide.bind(this,this.state.value + '3')}
              numberOfLines={1}>{this.state.value}3
            </Text>
          </View>
        :null}
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
