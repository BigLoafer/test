/**
 * Created by haokai on 2017/5/4.
 */

import React,{Component,PureComponent} from 'react'
import {Navigator} from 'react-native'
import WelcomePage from './pages/WelcomePage'
import TabBarView from './pages/TabBarView'
import Constants from './common/constants'
global.Common = Constants;

export  default class Root extends PureComponent{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }

    _configureScene=(route,routeStack)=>{

        switch (route.type){
            case 'noScroll':
                configure = Navigator.SceneConfigs.FloatFromBottom;
            default:
                configure =  Navigator.SceneConfigs.PushFromRight;
        };
        if (route.type === 'noScroll') {
            return {
                ...configure,
                gestures: {}
            }
        }
        return Navigator.SceneConfigs.PushFromRight;
    };

   render(){
    return(
        <Navigator
            initialRoute={{
                        name: 'TabBarView',
                        component:TabBarView
                    }}
            renderScene={(e, i)=>this._renderScene(e, i)}
            configureScene={this._configureScene}
        />
    );
   }
};
    

