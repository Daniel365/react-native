/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Header from './Header';
import MainScreen from './MainScreen';
import TabNavigator from 'react-native-tab-navigator';

const HOME = 'home';
const HOME_NORMAL = require('./images/tabs/home_normal.png');
const HOME_FOCUS = require('./images/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./images/tabs/category_normal.png');
const CATEGORY_FOCUS = require('./images/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('./images/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('./images/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('./images/tabs/cart_normal.png');
const CART_FOCUS = require('./images/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./images/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('./images/tabs/personal_focus.png');

class demo extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedTab: HOME}
  }

  _renderTabItem(img, selectedImg, tag, childView) {
      return (
          <TabNavigator.Item
              selected={this.state.selectedTab === tag}
              renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
              renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
              onPress={() => this.setState({ selectedTab: tag })}>
              {childView}
          </TabNavigator.Item>
      );
  }

  static _createChildView(tag) {
      return (
          <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:22}}>{tag}</Text>
          </View>
      )
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <Header />
          <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
              {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <MainScreen/>)}
              {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, <MainScreen/>)}
              {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, <MainScreen/>)}
              {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, <MainScreen/>)}
              {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, <MainScreen/>)}
          </TabNavigator>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 52,
    backgroundColor: '#333333',
    alignItems: 'center'
  },
  tabIcon: {
      width: 30,
      height: 35,
      resizeMode: 'stretch',
      marginTop: 12.5
  },
});

AppRegistry.registerComponent('demo', () => demo);
