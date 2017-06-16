/**
 * Created by haokai on 2017/5/4.
 */
import React,{PureComponent} from 'react'
import {View, Text, TouchableOpacity, TextInput, Image, BackAndroid, ToastAndroid} from 'react-native'
import JPushModule from 'jpush-react-native'
import TableRow from '../../common/TableRow'
import px2dp from '../../tools/px2dp'
import CommonStore from '../../mobx/CommonStore'

import GetAccountPage from '../account/GetAccountPage'
import TestJpushPage from '../TestJpushPage'
import Second from '../../Second'
import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'

var firstClick = 0;
@observer
export default class HomePage extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
          this.cstore=new CommonStore();
        // 初始状态
        this.state = {
        };
      }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onHardwareBackPress);
        JPushModule.addReceiveCustomMsgListener((message) => {
            console.warn("receive custome notification: " + JSON.stringify(message));
        });
        JPushModule.addReceiveNotificationListener((message) => {
            console.warn("receive notification: " +JSON.stringify(message));
            this.setState({pushMsg: message.alertContent});
        });

        JPushModule.addReceiveOpenNotificationListener((map)=>{
            console.warn('打开指定页面');

            this.props.navigator&&this.props.navigator.push({
                component:Second
            });
        })
    }


    onHardwareBackPress = (e)=> {
        var timestamp = parseFloat((new Date()).getTime());
        if (timestamp - firstClick > 2000) {
            firstClick = timestamp;
            ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
            return true;
        } else {
            return false;
        }
    }


    componentWillReact(){

    }

    componentWillUnmount() {
        JPushModule.removeReceiveCustomMsgListener();
        JPushModule.removeReceiveNotificationListener();
        JPushModule.removeReceiveOpenNotificationListener()
        BackAndroid.removeEventListener('hardwareBackPress', this.onHardwareBackPress);
    }
    _onPressItem=()=>{

    };

    _onPressImg=()=>{
        this.cstore.changeSecure1();
    };

    gotoTest=()=>{
        this.props.navigator&&this.props.navigator.push({
            component:GetAccountPage
        });
    };
    render(){
        return(
            <View>
                <Text style={{padding:px2dp(30),marginTop:px2dp(50)}} onPress={this.gotoTest}>
                    这是首页
                </Text>
                <TableRow
                    showLine={true}
                    img={require('../../resource/ic_tab_search.png')}
                    title='账户余额'
                    onPress={this._onPressItem}
                />
                <TableRow
                    showLine={false}
                    img={require('../../resource/ic_tab_search.png')}
                    title='账户余额'
                    onPress={this._onPressItem}
                />
            </View>
        );
    }
}
