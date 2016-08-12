/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    WebView,
    ListView,
    } from 'react-native';

    var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
class HomeUI extends Component{
  goBack(){
    const { navigator } = this.props;
    if(navigator) {
        //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:了
        navigator.pop();
    }
  }
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded:false,
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
              loaded: true,
          });
      })
      .done();
  }
  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return (
      <ListView dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}/>
    );
  }
  renderLoadingView(){
    return(
      <View style={styles.container}>
        <Text>
          正在加载...
        </Text>
      </View>
    );
  }
  renderMovie(movie){
    return(
      <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});
module.exports = HomeUI;
