/**
 * Created by haokai on 2017/5/4.
 */
import React,{PureComponent} from 'react'
import {View, Text,Alert} from 'react-native'
import DropdownMenu from 'react-native-dropdown-menu'


export default class HomePage extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render(){
        var data = [["全部类型", "Java", "JavaScript"], ["默认排序", "Ruby"], ["筛选", "Objective-C"]];
        return (
            <View style={{flex: 1}} >
                <DropdownMenu style={{flex: 1}}
                              bgColor={"red"}                            //the background color of the head, default is grey
                              tintColor={"white"}                        //the text color of the head, default is white
                              selectItemColor={"red"}                    //the text color of the selected item, default is red
                              data={data}
                              maxHeight={410}                            // the max height of the menu
                              handler={(selection, row) => Alert.alert(data[selection][row])} >

                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                        <Text>
                            Your own view Here
                        </Text>
                    </View>

                </DropdownMenu>
            </View>
        );
    }
}
