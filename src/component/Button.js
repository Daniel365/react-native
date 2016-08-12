/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default class Button extends Component {
  render() {
    const {text,bg} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button,{backgroundColor:bg}]}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    borderRadius:10,
    backgroundColor:'#FF5357',
  },
  buttonText:{
    fontSize:16,
    textAlign:'center',
    color:'#fff',
    marginTop:4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
