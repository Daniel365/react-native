/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
import React, { Component , PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TextInput,
  ScrollView,
  Navigator,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
} from 'react-native';
// Navigator
class demo extends Component{
  render(){
      let defaultName='List';
      let defaultComponent=List;
    return(
        <Navigator
          initialRoute={{name:defaultName,component:defaultComponent}}
          // 配置场景
          configureScene={(route)=>{
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route,navigator)=>{
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
          }}
        />
    );
  }
}
class List extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  _pressButton(){
    const {navigator} = this.props;
    if(navigator){
      navigator.push({
        name:'Detail',
        component:Detail,
      })
    }
  }
  render(){
    return(
      <ScrollView style={styles.flex}>
        <Text onPress={this._pressButton.bind(this)}>123456789</Text>
        <Text onPress={this._pressButton.bind(this)}>123456789</Text>
        <Text onPress={this._pressButton.bind(this)}>123456789</Text>
      </ScrollView>
    )
  }
}
class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  _pressButton(){
    const {navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }
  render(){
    return(
      <ScrollView>
        <Text onPress={this._pressButton.bind(this)}>
          点我回去
        </Text>
      </ScrollView>
    )
  }
}
// var MOCKED_MOVIES_DATA = [
//   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// ];
// props
/*class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class demo extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}*/
// state
/*class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
    alert(JSON.stringify(super(props)));

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class demo extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}*/
// TextInput
/*class demo extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '123').join(' ')}
        </Text>
      </View>
    );
  }
};*/
//ScrollView ListView
/*class demo extends Component {
  // 初始化伪数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}*/
// 跳转 Navigator
/*export default class demo extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}*/
// 点击 长按
/*class demo extends Component {
  _onPressButton() {
    alert("You tapped the button!");
  }

  render() {
    return (
      <TouchableHighlight onLongPress={this._onPressButton}>
        <Text>Button</Text>
      </TouchableHighlight>
    );
  }
}*/
//动画
/*class demo extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render(): ReactElement {
    return (
      <Animated.Image                         // 可选的基本组件类型: Image, Text, View
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
          ]
        }}
      />
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
    Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
      this.state.bounceValue,                 // 将`bounceValue`值动画化
      {
        toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // 开始执行动画
  }
}*/

// 调取页面组件
// import Button from './src/component/Button';
// class demo extends Component {
//   render() {
//     // var movie = MOCKED_MOVIES_DATA[0];
//     return (
//       <View style={styles.container}>
//         <Button text="确定" bg="#FF5357"/>
//         <Button text="取消" bg="gray"/>
//         {/* <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
//         <View style={styles.movieRight}>
//             <Text style={styles.title}>{movie.title}</Text>
//             <Text style={styles.year}>{movie.year}</Text>
//         </View> */}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  flex:{
    flex:1,

  },
  list_item:{
      height:40,
      marginLeft:10,
      marginRight:10,
      fontSize:20,
      borderBottomWidth:1,
      borderBottomColor:'#ddd',
      justifyContent:'center',
  },
  container: {
    flex: 1,
    // flexDirection:'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // movieRight:{
  //   flex:1,
  // },
  // thumbnail:{
  //   width:53,
  //   height:81,
  // },
  // title:{
  //   fontSize:20,
  //   marginBottom:8,
  //   textAlign:'center',
  // },
  // year:{
  //   textAlign:'center',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('demo', () => demo);
