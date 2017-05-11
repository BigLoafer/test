/**
 *
 * Created by haokai on 2017/5/9.
 */

import React,{PureComponent} from 'react'
import {TouchableOpacity, View, StyleSheet, Image, Text, Dimensions} from 'react-native'
import px2dp from '../tools/px2dp'

export default class TableRow extends PureComponent{



    render(){
        return(
            <View>
                <TouchableOpacity
                    style={styles.con}
                    onPress={this.props.onPress}
                >
                    <View style={{flex: 1,flexDirection:'row',alignItems:'center'}}>
                        <Image style={styles.img} source={this.props.img}/>
                        <Text>{this.props.title}</Text>
                    </View>
                    <Image  style={styles.arrow} source={require('../resource/arrow.png')}/>
                </TouchableOpacity>
                    {this.props.showLine?<View style={styles.line}/>:null}
            </View>
        );
    }
}
const styles=StyleSheet.create({
    con:{
        width:Dimensions.get('window').width,
        height:px2dp(100),
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        width:px2dp(90),
        height:px2dp(90),
        borderRadius:px2dp(10),
        marginHorizontal:px2dp(20)
    },
    arrow:{
        width:px2dp(60),
        height:px2dp(60),
        marginRight:px2dp(20)
    },
    line:{
        backgroundColor:'#666',
        height:1,
        opacity:0.5
    }
}

);