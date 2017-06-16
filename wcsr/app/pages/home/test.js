/**
 * Created by haokai on 2017/5/12.
 */

import React,{PureComponent} from 'react'
import {View, WebView, Dimensions} from 'react-native'


export  default class Test extends  PureComponent{
        // 构造
          constructor(props) {
            super(props);
            // 初始状态
            this.state = {};
          }

    render(){
        return(
            <View style={{flex: 1}}>

                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={{height:Dimensions.get('window').height}}
                    source={{uri: 'http://192.168.0.141:8080/#/'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                />

            </View>

        );
    }

}