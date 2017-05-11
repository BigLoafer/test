/**
 * Created by haokai on 2017/5/9.
 */
import {observable, computed, action, runInAction} from 'mobx'
export default class  CommonStore {
    @observable isSecure =true;
    constructor() {
    }
    @action
    changeSecure=()=>{
        this.isSecure=!this.isSecure;
    }
}

