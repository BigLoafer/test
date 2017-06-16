/**
 * Created by haokai on 2017/3/29.
 */

function timeout() {
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('网络请求超时');
        }, 3000);
    });
    return p;
}

function getData(body) {

    return fetch('http://192.168.0.102:8000/home/test/',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        })
}

export  default function post(body) {
    return new Promise((resolve,reject)=>{
        Promise.race([getData(body),timeout()])
            .then((res)=>res.json())
            .then((jsondata)=>{
                if(jsondata) resolve(jsondata);
                else reject('加载失败')
            })
            .catch((error)=>{
                reject(error)
            })
    });
}