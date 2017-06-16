/**
 * Created by haokai on 2017/5/4.
 */
import React,{PureComponent} from 'react'
import {View} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from '../common/TabBar'
import HomePager from './home/HomePage'
import MyLoanPager from './myloan/MyLoanPage'
import AccountPager from './account/AccountPage'
import post from '../common/NetUtils'


const tabTitles = ['首页', '我的借款', '账户'];
const tabIcons = [
    require('../resource/ic_tab_search.png'),
    require('../resource/ic_tab_homepage.png'),
    require('../resource/ic_tab_my.png')
];
const tabSelectedIcon = [
    require('../resource/ic_tab_search_select.png'),
    require('../resource/ic_tab_homepage_select.png'),
    require('../resource/ic_tab_my_select.png')
];

export  default class TabBarView extends PureComponent{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    /**
     * 测试超时
     */
     async componentDidMount() {

        try{
            const data=await post({
                requestType: "5002",
                arguments: {
                    osType: 'ios',
                    appName: 'client',
                    areaCode: '',
                    cityName: '合肥市',
                    recommendType: '1',
                    pageNo: '1'
                }
            });
            console.log(data);
            console.log(data.test.isOk)

        }catch(error) {
            console.log(error)
        }
    }


    render(){
        return(
            <ScrollableTabView
                renderTabBar={() =>
                    <TabBar
                        tabNames={tabTitles}
                        tabIconNames={tabIcons}
                        selectedTabIconNames={tabSelectedIcon}
                    />
                }
                tabBarPosition='bottom'
                locked
                scrollWithoutAnimation
            >
                <HomePager tabLabel="home" navigator={this.props.navigator}/>
                <MyLoanPager tabLabel="myloan" navigator={this.props.navigator}/>
                <AccountPager tabLabel="account" navigator={this.props.navigator}/>
            </ScrollableTabView>

        );
    }

}
