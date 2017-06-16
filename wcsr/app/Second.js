/**
 * Created by haokai on 2017/5/31.
 */
import React,{PureComponent} from 'react'
import {View, Text, AppRegistry} from 'react-native'

export  default class SecondPage extends  PureComponent{

    render(){
        return(
            <View>
                <Text>SecondPager</Text>
            </View>
        );
    }

}

AppRegistry.registerComponent('second', () => SecondPage);