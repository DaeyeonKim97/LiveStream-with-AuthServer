import axios from 'axios';

export function GetLivesAPI(setLives){
    const requestURL = 'http://localhost:8001/stream/live'
    axios.get(requestURL)
    .then((res)=>{
        console.log(res.data.results)
        setLives(res.data.results)
    })
    .catch((err)=>{
        console.log('err! ' , err)
    })
}