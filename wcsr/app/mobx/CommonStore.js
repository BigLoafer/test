/**
 * Created by haokai on 2017/5/9.
 */
import {observable, computed, action, runInAction} from 'mobx'
export default class  CommonStore {
    @observable isSecure1 =true;
    @observable isSecure2=true;
    @observable isOpen=false;
    @observable time=60;
    constructor() {
    }
    @action
    changeSecure1=()=>{
        this.isSecure1=!this.isSecure1;
    };
    
    @action
    changeSecure2=()=>{
        this.isSecure2=!this.isSecure2;
    };

    @action
    openModal=()=>{
        this.time=60;
        this.isOpen=true;
        this.timer=setInterval(()=>{
            if (this.time>0)
            this.time=this.time-1;
            else{
                this.isOpen=false;
                this.timer&&clearInterval(this.timer)
            }
        },1000);
    };

    @computed
    get isTimeOk(){
        return this.time>0;
    }

    @action
    closeModal=()=>{
        this.isOpen=false;
        this.timer&&clearInterval(this.timer)
    };


}

