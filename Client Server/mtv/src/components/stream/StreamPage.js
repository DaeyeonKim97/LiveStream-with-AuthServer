import * as React from 'react';
import ChatShow from './ChatShow';
import StreamShow from './StreamShow';

export default function StreamPage(props){
    return(
        <div style={{display:'flex'}}>
            <StreamShow/>
            <ChatShow/>
        </div>
    )
}