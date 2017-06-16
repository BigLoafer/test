/**
 * Created by haokai on 2017/5/12.
 */
import React,{PureComponent} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput,Keyboard, Modal, TouchableOpacity, Image} from 'react-native'
import px2dp from '../tools/px2dp'
import PassInput from '../common/Pass2'
import {observer} from 'mobx-react/native'

@observer
export default class SMSModal extends  PureComponent{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          
        this.state = {};
      }
    
    render(){
        return(
            <Modal
                animationType={"none"}
                transparent={true}
                visible={this.props.isOpen}
                onRequestClose={() => {
                }}
            >
                <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)',flex:1,justifyContent:'center',alignItems:'center'}}
                >

                    <View style={styles.con}>
                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end',alignSelf:'flex-end'}}
                                          onPress={this.props.close}
                        >
                            <Image style={{width:px2dp(70),height: px2dp(70)}} source={require('../resource/ic_tab_search.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.t1}>短信验证码</Text>
                        <Text style={[styles.t1,{fontSize:10,color: '#888'}]}>我们已经发送验证码到186****1539</Text>
                        
                        <View style={styles.passCon}>
                            <PassInput maxLength={6} style={styles.passWord}
                                       onEnd={(text)=>{this.props.onend(text)}}
                                       onChange={(text)=>{this.props.onChange(text)}}
                            />
                        </View>
                        <Text>重新发送({this.props.time}秒)</Text>
                        
                    </View>

                </View>
            </Modal>

        );
    }
}

const styles=StyleSheet.create({
    con:{
        backgroundColor:"#fff",
        width:px2dp(700),
        height:px2dp(430),
        borderRadius:px2dp(18),
        alignItems:'center',
        padding:px2dp(20)
    },
    t1:{
        color:'black',
        fontSize:18,
        marginTop:px2dp(5)
    },
    passCon:{
        height:px2dp(130),
        justifyContent:'center',
        alignItems:'center',
        width:px2dp(500),
        borderRadius:px2dp(15)
    }
});