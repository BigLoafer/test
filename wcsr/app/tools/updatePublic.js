/**
 * Created by dchlove on 2016/12/23.
 */
'use strict';
import {
    Alert,
    Linking,
    Platform,
    NativeModules
} from 'react-native'
import deviceInfo from './deviceInfo'
import HTTPClient from '../api/HTTPClient'
function download(data) {
    //console.log(data);
    Linking.canOpenURL(data.url).then(supported => {
        if (!supported) {
            //console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(data.url);
        }
    }).catch(err => console.error('An error occurred', err));
    // Linking.openURL(data.url).catch(err => console.error('An error occurred', err));
}
function forceUpdate(data) {
    Alert.alert("提示", data.message, [
        {text: '确定', onPress: () => {download(data);forceUpdate(data)}},
    ]);
}
function noForceUpdate(data) {
    Alert.alert("提示", data.message, [
        {text: '确定', onPress: () => {download(data);}},
        {text: '取消', onPress: () => {}},
    ]);
}


//version: deviceInfo.AppVersion,
export default function updatePublic() {
    HTTPClient.post("", {
        requestType: "9001", arguments: {
            version: deviceInfo.AppVersion,
            zipVersion: deviceInfo.ZipVersion,
            osType: deviceInfo.OsType,
            appName: deviceInfo.AppName
        }
    }, function (error, response) {
        //console.log(error, response);
        // if (response && !response.fault) {
        //     if (response.fault || response.result.updateType === 'NO') {
        //     } else if (response.result.updateType === 'ZIP') {
        //     } else if (response.result.updateType === '-1') {
        //     } else if (response.result.forceUpdateStatus) {
        //        if(Platform.OS=="ios")
        //             forceUpdate(response.result);
        //         else
        //            NativeModules.dialog.show({data:JSON.stringify(response.result),flag:"1"}).then((res)=>{});
        //
        //     } else if (!response.result.forceUpdateStatus) {
        //         if(Platform.OS=="ios")
        //             noForceUpdate(response.result);
        //         else
        //             NativeModules.dialog.show({data:JSON.stringify(response.result),flag:"0"}).then((res)=>{});
        //     }
        // }
    }.bind(this));
}