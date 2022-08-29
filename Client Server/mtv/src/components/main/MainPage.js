import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StreamCard from '../basic/StreamCard';
import Pagination from '@mui/material/Pagination';
import Divider from '@mui/material/Divider';

const cardData = [
    {
        alt : 'stream thumbnail',
        image : 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/pxlBabFi-YIwx6Dz8znfvjVgqV0.jpg',
        title : '방송 제목',
        streamerId : 'Lizards'
    },
    {
        alt : 'stream thumbnail',
        image : 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/pxlBabFi-YIwx6Dz8znfvjVgqV0.jpg',
        title : '방송 제목',
        streamerId : 'Lizards'
    },
    {
        alt : 'stream thumbnail',
        image : 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/pxlBabFi-YIwx6Dz8znfvjVgqV0.jpg',
        title : '방송 제목',
        streamerId : 'Lizards'
    },
    {
        alt : 'stream thumbnail',
        image : 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/pxlBabFi-YIwx6Dz8znfvjVgqV0.jpg',
        title : '방송 제목',
        streamerId : 'Lizards'
    },
    {
        alt : 'stream thumbnail',
        image : 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/pxlBabFi-YIwx6Dz8znfvjVgqV0.jpg',
        title : '방송 제목',
        streamerId : 'Lizards'
    },
    
]

export default function MainPage(){
    return(
        <Box style={{padding:'10px'}}>
            <Box sx={{ width: '100%' }}>
                <Typography variant="h3" gutterBottom style={{margin : 10}}>
                    <b  style={{color:'#1976d2'}} >MTVS </b>실시간 스트리밍 서비스
                </Typography>
                <Divider/>
            </Box>

            <Typography variant="h6" gutterBottom style={{textAlign:'center', marginTop:'20px'}}>
                Recommanded Stream
            </Typography>
            <Box style={{display:'flex', alignContent:'center', justifyContent:'center', margin:'20px'}}>
                <video style={{ width: '40%' }} controls/>
            </Box>
            
            <Typography variant="h6" gutterBottom>
                <b>Live Stream</b>
            </Typography>
            <Box style={{display:'flex', flexFlow:'wrap', justifyContent:'space-between'}}>
                {
                    cardData.map((data, index)=>{
                        return <StreamCard alt={data.alt} image={data.image}
                                    title={data.title} streamerId={data.streamerId} key={index}/>
                    })
                }
            </Box>
            <Box style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                <Pagination count={20} variant="outlined" color='primary' />
            </Box>
        </Box>
    )
}