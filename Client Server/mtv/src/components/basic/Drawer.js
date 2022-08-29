import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DrawerTemplate(props) {

  const isLogged = useSelector(state=>state.authReducer);

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <h1 align="center">MTVS 메뉴</h1>
        <Divider />
        <List>
            <Link to='/'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='메인페이지' />
                </ListItemButton>
            </ListItem>
            </Link>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='전체 방송' />
                </ListItemButton>
            </ListItem>
            { !isLogged ?
            <Link to='/signup'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='회원 가입' />
                </ListItemButton>
            </ListItem>
            </Link> : null
            }
        </List>
        <Divider />
        { isLogged ?
        <List>
            <Link to='/info'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='회원 정보 수정' />
                </ListItemButton>
            </ListItem>
            </Link>

            <Link to ='password'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary='비밀번호 변경' />
                </ListItemButton>
            </ListItem>
            </Link>

            <Link to ='key'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='Stream key 발급' />
                </ListItemButton>
            </ListItem>
            </Link>
        </List> : null
        }
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <div onClick={toggleDrawer('left', true)}>{props.children}</div>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}