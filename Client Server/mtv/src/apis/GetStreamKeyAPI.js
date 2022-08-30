import axios from 'axios';

export function GetStreamKeyAPI(setKey){
    const requestURL = 'http://192.168.0.36:8001/stream/key';
    axios.post(requestURL,{
        userName : localStorage.getItem('userName')
    })
    .then((res)=>{
        console.log(res.data);
        setKey(res.data.results);
    })
    .catch((err)=>{
        console.log('err! ' , err);
    })
}