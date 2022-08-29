import * as React from 'react';
import { Box } from '@mui/system';
import { Button, List, TextField } from '@mui/material';
import Chat from './Chat';


const data = [
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
    {
        name : '이순신',
        username : 'leesunsin01',
        message : '와 방송이 너무 재밌어요!!',
    },
]



export default function ChatShow(props){


    return(
        <Box style={{height:"100%"}}>
            <div style={{height:"70%", overflow:'scroll'}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        data.map((item, index)=>{
                            
                            return <Chat name={item.name} username={item.username} message={item.message}/>
                        })
                    }
                </List>
            </div>
            <div style={{height:'40px',display:'space-between'}}>
                <TextField size="small"/>
                <Button variant="contained">전송</Button>
            </div>
        </Box>
    )
}