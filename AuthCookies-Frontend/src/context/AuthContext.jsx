import {
    useToast 
} from '@chakra-ui/react'
import { useState, useEffect, createContext } from "react";
import { Api } from "../services/api";
import axios from "axios";
import Cookies from 'js-cookie'
import { NotFound } from '../pages/notFound/NotFound';


export const AuhtContext = createContext();

export const AuthProvider = ({ children }) =>{
    
    const toast = useToast();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const token = Cookies.get('uT');
        if (token){
            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const dataUser = JSON.parse(Cookies.get('uD'));
            setUser(dataUser);
        }
        setLoading(false);
    }, []);

    const signIn = async(email, pass) => {
        const data ={
            'email' : email,
            'pass' : pass
        }
        const response = await Api.post('user/authUser',data);
        
        if(response.data.error){
            toast({
                title: 'Erro !',
                description: response.data.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
            return false
        }else{
            const token = response.data.data[0].token;
            const name = response.data.data[0].name;
            const email = response.data.data[0].email;
            const picture = response.data.data[0].picture;
            const payload = {name, picture,email};
            setUser(payload);

            Cookies.set('uT', token);
            Cookies.set('uD', JSON.stringify(payload));
            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return true;
        }
    }

    const logout = () =>{
        setUser(null);
        Cookies.remove('uT');
        Cookies.remove('uD');
        Api.defaults.headers.common['Authorization'] = undefined;
    }

    return loading ? <NotFound/> : (
        <AuhtContext.Provider value={{...user,signIn,logout}}>
            { children }
        </AuhtContext.Provider>
    )
}


