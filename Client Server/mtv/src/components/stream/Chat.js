import * as React from 'react';
import { ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Chat(props){

    return(
        <ListItem alignItems="flex-start">
            <ListItemText
            primary={props.name}
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {props.username}
                </Typography>
                    {props.message}
                </React.Fragment>
            }
            />
      </ListItem>
    )
}