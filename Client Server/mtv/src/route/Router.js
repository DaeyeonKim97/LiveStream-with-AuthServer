import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/commons/Layout';
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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}