import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/commons/Layout';
import ChangeInfoPage from '../components/info/ChangeInfoPage';
import ChangePassword from '../components/info/ChangePassword';
import GetStreamKey from '../components/info/GetStreamKey';
import SignUp from '../components/info/SignUp';
import MainPage from '../components/main/MainPage';
import StreamPage from '../components/stream/StreamPage';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element ={<MainPage/>}/>
                    <Route path="streams">
                        <Route path=":streamerId" element={<StreamPage/>}/>
                    </Route>
                    <Route path='signup' element={<SignUp/>}/>
                    <Route path='info' element={<ChangeInfoPage/>}/>
                    <Route path='password' element={<ChangePassword/>}/>
                    <Route path='key' element={<GetStreamKey/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}