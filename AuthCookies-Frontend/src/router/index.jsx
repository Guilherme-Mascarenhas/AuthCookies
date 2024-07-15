import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { Register } from '../pages/register/Register'
import { AuthProvider } from '../context/AuthContext'
import { PrivateRouter } from './privateRouter'
import { Home } from '../pages/home/Home'

export const AppRouter = () => {
    return(
        <BrowserRouter>
        <AuthProvider>
                <Routes>
                    {/*Rotas Publicas*/}
                    <Route path='/' element=
                        {
                            <Login/>
                        }
                    />
                    <Route path='/register' element=
                        {
                        <Register/>
                        }
                    />

                    {/*Rotas Privadas*/}
                    <Route path='/home' element=
                        {
                            <PrivateRouter>
                                <Home/>
                            </PrivateRouter>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>

    )
}