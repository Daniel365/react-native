/**
 * Created by StevenJiang on 2016/4/4.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
    } from 'react-native';

class Header extends Component{
    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>

                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度"</Text>
                </Text>

            </View>

        );
    }
}



const styles = StyleSheet.create({
    flex:{
        marginTop:25,
        height:50,
        borderBottomWidth:3/PixelRatio.get(),
        borderBottomColor:'#EF2D36',
        alignItems:'center',
    },
    font:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
    font_1:{
        color:'#CD1D1C',
    },
    font_2:{
        color:'#FFF',
        backgroundColor:'#CD1D1C',
    },
});

module.exports=Header;
