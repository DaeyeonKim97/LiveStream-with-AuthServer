import * as React from 'react';
import { Box } from '@mui/system';
import { Button, List, TextField } from '@mui/material';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { useRef } from 'react';

const data = [
    {
        message : '채팅방에 입장하셨습니다.',
    },
]


const socket = io.connect('192.168.0.36:3334');

export default function ChatShow(props){

    const isLogged = useSelector(state=>state.authReducer);
    const isLoggedLocal = localStorage.getItem('isLogged');

    let name = 'test';

    if(isLoggedLocal){
        name = localStorage.getItem('name');
    }
    
    socket.emit('joinRoom',props.streamerId, name);

    
    const [message, setMessage] = React.useState('');
    const [chat, setChat] = React.useState([]);


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

    const messageEndRef = useRef(null);
    const scrollToBottom = () =>{
        messageEndRef.current.scrollIntoView({behavior:"smooth"})
    }
    React.useEffect(scrollToBottom,[chat])

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
                    <div ref={messageEndRef}/>
                </List>
                <div style={{height:'10%',position:'sticky',bottom:'0px'}}>
                    { localStorage.getItem('isLogged')?
                    <>
                    <TextField size="small" value={message} onChange={onTextChange} style={{width:'75%'}} onKeyDown={onPressEnter}/>
                    <Button variant="contained" onClick={onMessageSubmit} style={{width:'5%'}}>전송</Button>
                    </>
                    :
                    <TextField
                        disabled
                        label="채팅은 로그인 후 이용해주세요!"
                        style={{width:'100%'}} 
                    />
                    }
                </div>
            </div>
        </Box>
    )
}