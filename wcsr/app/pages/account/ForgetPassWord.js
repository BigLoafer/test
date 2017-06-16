/**
 * Created by haokai on 2017/5/12.
 */
import React,{PureComponent} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput,Keyboard} from 'react-native'

import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../common/ViewUtils'
import px2dp from '../../tools/px2dp'
import ChangeTouchableButton from '../../common/ChangeTouchableButton'
import BaseCommon from '../../common/BaseCommon'
import SmsModal from '../../modal/SMSModal'
import CommonStore from '../../mobx/CommonStore'
import SettingNewPassWord from './SettingNewPassWord'


import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'

@observer
export  default class ForgetPassWord extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
          this.baseCommon = new BaseCommon({...props, backPress: (e)=>this.onBackPress(e)});
          this.cstore=new CommonStore();
        // 初始状态
          this.state = {};
          this.title='找回登录密码'
      }

    componentDidMount() {
        this.baseCommon.componentDidMount();
    }

    componentWillUnmount() {
        this.baseCommon.componentWillUnmount();
    }

    onBackPress(e) {
        this.onBack();
        return true;
    }

    onBack() {
        Keyboard.dismiss();
        this.props.navigator.pop();
    }
    
    showSmsCodeModal=()=>{
        this.cstore.openModal();
    };

    endCode=(text)=>{
        console.log(text);
        this.cstore.closeModal();
        this.props.navigator&&this.props.navigator.push({
            component:SettingNewPassWord
        });
    };

    onChangeCode=(text)=>{
        console.log(text)
    };

    render(){
        return(
            <View style={styles.con}>
                <NavigationBar
                    navigator={this.props.navigator}
                    leftButton={ViewUtils.getBlackLeftButton(() => this.onBack())}
                    popEnabled={false}
                    style={{backgroundColor:'#fff'}}
                    title={this.title}
                    titleView={<Text style={{color:"#000",fontSize: 18,}} ellipsizeMode="head" numberOfLines={1} >{this.title}</Text>}
                />
                <View style={styles.inputCon}>
                    <TextInput
                        style={{flex: 1,height:px2dp(130)}}
                        placeholder="手机号"
                        underlineColorAndroid="transparent"
                    >
                    </TextInput>
                </View>

                <ChangeTouchableButton
                    style={styles.btn}
                    disabled={false}
                    onPress={this.showSmsCodeModal}
                    text="下一步">
                </ChangeTouchableButton>
                <SmsModal onend={(text)=>{this.endCode(text)}} onChange={(text)=>{this.onChangeCode(text)}} isOpen={this.cstore.isOpen}
                    close={()=>{this.cstore.closeModal()}} time={this.cstore.time}
                />

            </View>

        );
    }
}

const  styles=StyleSheet.create({
    con:{
        flex:1,
        backgroundColor:'#fff'
    },
    inputCon:{
        flexDirection:"row",
        height:px2dp(130),
        padding:px2dp(30),
        alignItems:'center',
        marginHorizontal:px2dp(50),
        backgroundColor:'white',
        width:Dimensions.get('window').width-px2dp(100),
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    btn:{
        borderRadius: px2dp(10),
        backgroundColor: 'green',
        width:Dimensions.get('window').width-px2dp(80)-px2dp(80),
        height: px2dp(112),
        marginTop: px2dp(60),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:px2dp(80)
    },
});


