import axios from 'axios';

export function GetLivesAPI(setLives){
    const requestURL = 'http://192.168.0.36:8001/stream/live'
    axios.get(requestURL)
    .then((res)=>{
        console.log(res.data.results)
        setLives(res.data.results)
    })
    .catch((err)=>{
        console.log('err! ' , err)
    })
}