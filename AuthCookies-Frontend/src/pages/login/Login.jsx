import { useState, useContext, useEffect } from 'react'
import React from 'react';
import {
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Input
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { AuhtContext } from '../../context/AuthContext';

export const Login = () => {

    const navigate = useNavigate();
    const auth = useContext(AuhtContext);
    const [email, setEmail] = useState('');
    const [pass,setPass] = useState('');

    useEffect(()=>{

        if(auth.email){
            navigate('/home');
        }
    },[]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const login = await auth.signIn(email,pass);
        if(login){
            return setTimeout(() => {
                navigate('/home');
            }, 500);
        }

    }
  
  return (
    <div className = 'flex items-center justify-center h-screen size-full bg-gray-300'>
        
        <Card className='w-96 '>
            <CardHeader> 
                <p className='font-black text-center text-2xl'>Login</p>
            </CardHeader>
            <CardBody className='bg-white rounded-xl mt-4'>
                <form onSubmit={handleLogin}>
                    <Input variant='outline' placeholder='E-mail' type='email' className='mb-6' required value={email} onChange={(e)=>{setEmail(e.target.value)}} ></Input>
                    <Input variant='outline' placeholder='Senha' required type='password' value={pass} onChange={(e)=>{setPass(e.target.value)}} ></Input>
                    <div className='flex justify-end mt-6 mr-4'>
                        <Button colorScheme='teal' variant='solid' className='justify-end items-end' type='submit'>
                            Entrar
                        </Button>
                    </div>
                </form>
            </CardBody>
            <CardFooter className='flex justify-between items-center'>
                <Button colorScheme='teal' variant='link'>
                    Esqueceu a senha
                </Button>
                <Link to={'/Register'}>
                    <Button colorScheme='teal' variant='link'>
                        Registrar
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    </div>
  )
}

