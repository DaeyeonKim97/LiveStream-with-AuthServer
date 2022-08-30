import axios from 'axios';

export function GenerateStreamKeyAPI(setKey){
    const requestURL = 'http://localhost:8001/stream/keygen';
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