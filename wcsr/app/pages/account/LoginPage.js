/**
 * Created by haokai on 2017/5/10.
 */
import React,{PureComponent} from 'react'
import {View, Text, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity,Keyboard} from 'react-native'
import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../common/ViewUtils'
import px2dp from '../../tools/px2dp'
import ChangeTouchableButton from '../../common/ChangeTouchableButton'
import BaseCommon from '../../common/BaseCommon'

export  default class LoginPage extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
          this.baseCommon = new BaseCommon({...props, backPress: (e)=>this.onBackPress(e)});
        // 初始状态
          this.state = {};
          this.title='登录';
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

    render(){
        return(
            <Image
                source={require('../../resource/login_background.png')}
                style={{flex: 1}}
                resizeMode='cover'
            >
                <View style={styles.titleBar}>
                    <TouchableOpacity onPress={()=>{this.onBack()}}>
                        <Image source={require('../../resource/ic_arrow_back_white_36pt.png')}
                                style={{width:26,height: 26,marginHorizontal:px2dp(15)}}
                        />
                    </TouchableOpacity>
                        <Text style={{color: "#fff",fontSize:18,marginLeft:Dimensions.get('window').width/2-56}}>{this.title}</Text>
                </View>


                <View style={{flex:1,justifyContent:'center'}}>

                    <View style={styles.inputCon}>

                        <Image  style={styles.img} source={require('../../resource/ic_tab_search.png')}/>
                        <TextInput
                            style={{flex: 1,height:px2dp(130)}}
                            placeholder="手机号"
                            underlineColorAndroid="transparent"
                        >
                        </TextInput>
                    </View>
                    <View style={[styles.inputCon,{marginTop:px2dp(60)}]}>

                        <Image  style={styles.img} source={require('../../resource/ic_tab_search.png')}/>
                        <TextInput
                            style={{flex: 1,height:px2dp(130)}}
                            placeholder="登录密码"
                            underlineColorAndroid="transparent"
                        >
                        </TextInput>
                    </View>
                    <ChangeTouchableButton
                        style={styles.btn}
                        disabled={false}
                        text="登录">
                    </ChangeTouchableButton>
                    <View style={styles.text}>
                        <TouchableOpacity style={{flex: 1}}>
                            <Text style={{color: '#fff'}}>快速注册</Text>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Text style={{color: "#fff"}}>忘记密码?</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Image>

        );
    }

}

const styles=StyleSheet.create({
    titleBar: {
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection:'row',
        alignItems:'center',
        height:50
    },
    img:{
        width:px2dp(80),
        height:px2dp(80),
        marginRight:px2dp(30)
    },
    inputCon:{
        flexDirection:"row",
        height:px2dp(130),
        padding:px2dp(30),
        alignItems:'center',
        marginHorizontal:px2dp(50),
        borderRadius:px2dp(12),
        backgroundColor:'white',
        borderWidth:px2dp(1),
        width:Dimensions.get('window').width-px2dp(100)
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
    text:{
        width:Dimensions.get('window').width-px2dp(80)-px2dp(80),
        height: px2dp(90),
        flexDirection:'row',
        alignItems:'center',
        marginLeft:px2dp(80)
    }

});
