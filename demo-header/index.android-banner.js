'use strict';
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Image,
 PixelRatio,
 TouchableOpacity,
} from 'react-native';

var imgs = [
  'https://dn-res-zuanbank-com.qbox.me/public/uploads/ads/ad-20160524161930.jpg',
  'https://dn-res-zuanbank-com.qbox.me/public/uploads/ads/ad-20160524161841.jpg',
  'https://dn-res-zuanbank-com.qbox.me/public/uploads/ads/ad-20160524161744.jpg'
]
class demo extends Component{
  render(){
    return(
      <View style={[styles.container,{marginTop:45}]}>
        <MyImage imgs={imgs}></MyImage>
      </View>
    );
  }
}
class MyImage extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:0,
      imgs:this.props.imgs,
    };
  }
  render(){
    return(
      <View style={styles.container,{alignItems:'center'}}>
        <View style={styles.image}>
          <Image style={styles.img}
                resizeMode="contain"
                source={{uri:this.state.imgs[this.state.count]}}
            />
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview.bind(this)}>
            <View>
              <Text>
                上一张
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goNext.bind(this)}>
            <View>
              <Text>
                下一张
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  goPreview(){
    var count = this.state.count;
    count --;
    if(count>=0){
      this.setState({
        count:count,
      })
    }
  }
  goNext(){
    var count = this.state.count;
    count ++;
    if(count<this.state.imgs.length){
      this.setState({
        count:count,
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img:{
    height:150,
    width:200,
  },
  image:{
    height:150,
    width:200,
  },
});

AppRegistry.registerComponent('demo', () => demo);
