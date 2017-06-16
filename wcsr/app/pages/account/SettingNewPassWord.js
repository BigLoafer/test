/**
 * Created by haokai on 2017/5/12.
 */
import React,{PureComponent} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput,Keyboard, TouchableOpacity, Image} from 'react-native'

import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../common/ViewUtils'
import px2dp from '../../tools/px2dp'
import ChangeTouchableButton from '../../common/ChangeTouchableButton'
import BaseCommon from '../../common/BaseCommon'
import CommonStore from '../../mobx/CommonStore'


import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'

@observer
export  default class SettingNewPassWord extends PureComponent{
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

    };

    _onPressImg1=()=>{
        this.cstore.changeSecure1();
    };
    _onPressImg2=()=>{
        this.cstore.changeSecure2();
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
                        placeholder="设置新的登录密码"
                        underlineColorAndroid="transparent"
                        secureTextEntry={this.cstore.isSecure1}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={this._onPressImg1}>
                        <Image style={{width:px2dp(50),height:px2dp(50)}} source={require('../../resource/ic_tab_search.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputCon}>
                    <TextInput
                        style={{flex: 1,height:px2dp(130)}}
                        placeholder="请再次输入登录密码"
                        underlineColorAndroid="transparent"
                        secureTextEntry={this.cstore.isSecure2}
                    >
                    </TextInput>
                    <TouchableOpacity onPress={this._onPressImg2}>
                        <Image style={{width:px2dp(50),height:px2dp(50)}} source={require('../../resource/ic_tab_search.png')}/>
                    </TouchableOpacity>
                </View>

                <ChangeTouchableButton
                    style={styles.btn}
                    disabled={false}
                    onPress={this.showSmsCodeModal}
                    text="确定">
                </ChangeTouchableButton>

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


