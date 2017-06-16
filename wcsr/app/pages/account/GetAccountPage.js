/**
 * Created by haokai on 2017/5/12.
 */

import  React,{PureComponent} from 'react'
import {View, Text, StyleSheet, TextInput, Dimensions,Keyboard} from 'react-native'
import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../common/ViewUtils'
import px2dp from '../../tools/px2dp'
import ChangeTouchableButton from '../../common/ChangeTouchableButton'
import BaseCommon from '../../common/BaseCommon'
import RadioModal from 'react-native-radio-master';

export default class  GetAccountPage extends PureComponent{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.baseCommon = new BaseCommon({...props, backPress: (e)=>this.onBackPress(e)});
        this.state = {};
          this.title='开户'
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

    onNext=()=>{

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
                    <Text style={{marginLeft:px2dp(20),marginRight:px2dp(100)}}>开户类型</Text>
                    <RadioModal
                        selectedValue={0}
                        onValueChange={(id,item) =>{console.warn(id+'---'+item)}}
                        style={{ flexDirection:'row',
					  flexWrap:'nowrap',
					  flex:1,
					  backgroundColor:'#ffffff',padding:5,
					  alignItems:'center'
					  }}
                    >
                        <Text value="0">个人</Text>
                        <Text value="1">企业</Text>
                    </RadioModal>
                </View>
                <View style={styles.inputCon}>
                    <Text style={{marginLeft:px2dp(20),marginRight:px2dp(180)}}>姓名</Text>
                    <TextInput
                        style={{flex: 1,height:px2dp(150)}}
                        placeholder="请与身份证姓名保持一致"
                        underlineColorAndroid="transparent"
                    />

                </View>
                <View style={styles.inputCon}>
                    <Text style={{marginLeft:px2dp(20),marginRight:px2dp(100)}}>身份证号</Text>
                    <TextInput
                        style={{flex: 1,height:px2dp(150)}}
                        placeholder="仅支持二代身份证"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputCon}>
                    <Text style={{marginLeft:px2dp(20),marginRight:px2dp(100)}}>银行卡号</Text>
                    <TextInput
                        style={{flex: 1,height:px2dp(150)}}
                        placeholder="请确保卡号对应身份证号"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputCon}>
                    <Text style={{marginLeft:px2dp(20),marginRight:px2dp(100)}}>手机号</Text>
                    <TextInput
                        style={{flex: 1,height:px2dp(150)}}
                        value="18627801539"
                        underlineColorAndroid="transparent"
                        editable={false}
                    />
                </View>

                <ChangeTouchableButton
                    style={styles.btn}
                    disabled={false}
                    onPress={this.onNext}
                    text="下一步">
                </ChangeTouchableButton>

            </View>

        );
    }

}

const styles=StyleSheet.create({
    con:{
        flex:1,
        backgroundColor:'#fff'
    },
    inputCon:{
        height:px2dp(150),
        marginHorizontal:px2dp(30),
        alignItems:'center',
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1
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
