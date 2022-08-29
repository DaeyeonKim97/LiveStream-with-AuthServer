import * as React from 'react';
import ChatShow from './ChatShow';
import StreamShow from './StreamShow';
import { Grid } from '@mui/material';
import { useParams } from "react-router-dom";
import { SearchStreamKeyAPI } from '../../apis/SearchStreamKeyAPI';

export default function StreamPage(props){

    const [streamerId, setStreamerId] = React.useState(null);
    const [streamKey, setStreamKey] = React.useState(null);
    const param = useParams();

    React.useEffect(
        ()=>{
            setStreamerId(param.streamerId);
        },
        []
    )
    React.useEffect(
        ()=>{
            SearchStreamKeyAPI(streamerId,setStreamKey);
        },
        [streamerId]
    )
    React.useEffect(
        ()=>{
            console.log(streamKey);
        },
        [streamKey]
    )

    return(

        <Grid container spacing={1}>
            <Grid item xs={12} sm={9}>
                {streamKey?<StreamShow streamKey={streamKey}/>:null}
            </Grid>
            <Grid item xs={12} sm={3}>
                <ChatShow/>
            </Grid>
        </Grid>
    )
}