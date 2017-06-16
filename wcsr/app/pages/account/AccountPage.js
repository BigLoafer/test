/**
 * Created by haokai on 2017/5/4.
 */
import React,{PureComponent} from 'react'
import {View, Text} from 'react-native'
import LoginPage from './LoginPage'

import Test from '../home/test'

export default class HomePage extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    gotoLoginPage=()=>{
        this.props.navigator&&this.props.navigator.push({
            component:LoginPage
        })

    };

    render(){
        return(
            <View>
                <Text  style={{marginTop:100}} onPress={this.gotoLoginPage}>
                    AccountPage
                </Text>
                
            </View>
        );
    }
}
