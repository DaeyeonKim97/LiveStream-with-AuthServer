import * as React from 'react';
import { Box } from '@mui/system';
import { Button, List, TextField } from '@mui/material';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

const data = [
    {
        message : '채팅방에 입장하셨습니다.',
    },
]


const socket = io.connect('localhost:3334');

export default function ChatShow(props){

    const isLogged = useSelector(state=>state.authReducer);

    let name = 'test';

    if(isLogged){
        name = localStorage.getItem('name');
    }
    
    const [message, setMessage] = React.useState('');
    const [chat, setChat] = React.useState([]);
    
    socket.emit('joinRoom',props.streamerId, name);

    socket.on('chat message',(name,message)=>{
        setChat([...chat, {name, message}])
    })

    const onTextChange = e => {
        setMessage(e.target.value);
    }

    const onMessageSubmit = e => {
        if(message !== ''){
            e.preventDefault();
            socket.emit('chat message', props.streamerId, name, message);
            setMessage('');
        }
    }

    const onPressEnter = e =>{
        console.log(e)
        if(e.keyCode === 13){
            if(message !== ''){
                e.preventDefault();
                socket.emit('chat message', props.streamerId, name, message);
                setMessage('');
            }
        }
    }

    const renderChat = () => {
        return chat.map(({name, message},index)=>(
            <Chat name={name} message={message}/>
        ))
    }

    return(
        <Box sx={{ height: '100%' }}>
            <div style={{height:"100%"}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} 
                    style={{height:"500px",overflow:'scroll'}}>
                    {
                        data.map((item, index)=>{
                            
                            return <Chat name={item.name} message={item.message}/>
                        })
                    }
                    {renderChat()}
                </List>
                <div style={{height:'10%',position:'sticky',bottom:'0px'}}>
                    <TextField size="small" value={message} onChange={onTextChange} style={{width:'75%'}} onKeyDown={onPressEnter}/>
                    <Button variant="contained" onClick={onMessageSubmit} style={{width:'5%'}}>전송</Button>
                </div>
            </div>
        </Box>
    )
}