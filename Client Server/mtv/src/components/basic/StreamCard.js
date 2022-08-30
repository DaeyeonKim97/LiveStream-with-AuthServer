import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { SearchStreamKeyAPI } from '../../apis/SearchStreamKeyAPI';

export default function StreamCard(props) {

  const [streamKey, setStreamKey] = React.useState('');
  const [image, setImage] = React.useState('');

  React.useEffect(()=>{
    if(props.title === undefined){
      SearchStreamKeyAPI(props.streamerId, setStreamKey);
    }
  },[])

  

  return (
    <Card sx={{ width: 250 }} style={{margin : '10px'}}>
      {streamKey===''?
      <CardMedia
        component="img"
        alt={props.alt}
        height="180"
        image={props.image}
      />
      :
      <CardMedia
        component="img"
        alt={props.alt}
        height="180"
        image={'http://localhost:8001/thumbnails/'+streamKey+'.png'}
      />
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'BMDOHYEON', display : 'flex'}}>
          <Avatar src={props.profile}/>
          <div style={{display:'flex', alignItems:'bottom', marginLeft:'10px'}}>{props.streamerId}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          🔴 Live ON! click watch👇
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">share</Button>
        <Link to={`/streams/${props.streamerId}`} style={{textDecorationLine:'none'}}>
            <Button size="small">watch</Button>
        </Link>
      </CardActions>
    </Card>
  );
}