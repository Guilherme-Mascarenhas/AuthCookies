import {
    Button,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Input,
    useToast 
} from '@chakra-ui/react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../services/api';

export const Register = () => {

    const toast = useToast();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = {
            'name': name,
            'email': email,
            'category' : 'user',
            'pass' : pass
        }
        const response = await Api.post('user/newUser',data);
        if (response.data.error){
            toast({
                title: 'Erro !',
                description: response.data.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
        }else{
            toast({
                title: 'Sucesso !',
                description: response.data.message,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
            setTimeout(() => {
                navigate('/');
            }, 1000);
            
        }
    }
    return(
        <>
        <div className = 'flex items-center justify-center h-screen size-full bg-gray-200'>
            <Card className='w-96 '>
                <CardHeader> 
                    <p className='font-black text-center text-2xl'>Registrar</p>
                </CardHeader>
                <CardBody className='bg-white rounded-xl mt-4'>
                    <form onSubmit={handleRegister}>
                        <Input variant='outline' placeholder='Nome' className='mb-6' required value={name} onChange={(e)=>{setName(e.target.value)}} />
                        <Input variant='outline' placeholder='E-mail' type='email' className='mb-6' required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <Input variant='outline' placeholder='Senha' type='password' required value={pass} onChange={(e)=>{setPass(e.target.value)}} />
                        <div className='flex justify-end mt-6 mr-4'>
                            <Button colorScheme='teal' variant='solid' className='justify-end items-end' type='submit' >
                                Registrar
                            </Button>
                        </div>
                    </form>
                </CardBody>
                <CardFooter className='flex justify-start items-center'>
                    <Link to={'/'}>
                        <Button colorScheme='teal' variant='link'>
                            Entrar
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
        </>
    );
}