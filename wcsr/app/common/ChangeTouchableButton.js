/**
 * Created by Administrator on 2016/12/17.
 * 可改变可使用状态的按钮
 * style={按钮样式}(null)
 * textStyle={文字样式}(null)
 * disabled={是否隐藏}
 * onPress={点击事件}
 * text="按钮文字"
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import px2dp from '../tools/px2dp';

export default class ChangeTouchableButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={this.props.style ? this.props.style : styles.loginBtn}
                onPress={this.props.onPress}
                activeOpacity={0.3}
                disabled={this.props.disabled}>
                <Text
                    style={[this.props.textStyle ? this.props.textStyle : styles.loginBtnText,
                        {opacity: this.props.disabled ? 0.5 : 1}]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    loginBtnText: {
        color: '#ffffff',
        fontSize: 20,
    },
    loginBtn: {
        borderRadius: px2dp(10),
        backgroundColor: 'green',
        width: px2dp(800),
        height: px2dp(112),
        marginTop: px2dp(60),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:px2dp(80)
    },
})