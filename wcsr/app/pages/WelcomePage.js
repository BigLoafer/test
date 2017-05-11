/**
 * Created by haokai on 2017/5/4.
 */
import React,{PureComponent,Component} from 'react';
import {View, Text} from 'react-native'
import {observer} from 'mobx-react/native'

@observer
export default class WelcomePage extends PureComponent{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render(){
        return(
            <View>
                <Text>
                    welcomePage
                </Text>

            </View>
        );
    }
}
