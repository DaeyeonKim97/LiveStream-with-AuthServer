import axios from 'axios';


export function SearchStreamKeyAPI(userName, setStreamkey){
    const requestURL = 'http://192.168.0.36:8001/stream/key'
    axios.post(requestURL,{
        userName : userName
    })
    .then((res)=>{
        setStreamkey(res.data.results);
    })
    .catch((err)=>{
        console.log('err! ' , err)
    })
}