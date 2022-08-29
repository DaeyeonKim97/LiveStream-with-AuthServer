import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchForm from '../basic/SearchForm';
import DrawerTemplate from '../basic/Drawer';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import LoginModal from '../basic/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../../modules/AuthModule';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const isLogged = useSelector(state=>state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
        dispatch({
            type: LOGOUT
        })
        alert('로그아웃 되었습니다.');

        localStorage.clear();
        navigate('/');
    }

    return (
        <Box sx={{ flexGrow: 1 }} style={{position: 'sticky', top: 0, zIndex: 999}}>
            <AppBar position="static">
                <Toolbar>
                    <DrawerTemplate>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        <MenuIcon />
                        </IconButton>
                    </DrawerTemplate>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{display:'flex', alignContent:'bottom'}}>
                        MTVS
                        <PodcastsIcon/>
                    </Typography>
                    <SearchForm/>
                    {isLogged===false ?
                        <LoginModal>
                            <Button color="inherit">
                                Login
                            </Button>
                        </LoginModal>
                     :
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    }               
                </Toolbar>
            </AppBar>
        </Box>
    );
}