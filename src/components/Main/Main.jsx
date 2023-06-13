// @ts-nocheck
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import MainPage from '../MainPage/MainPage'

const Main = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="menu" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Main
