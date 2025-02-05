import React, { useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'


const Login = ({setToken}) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const onsubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post( backendUrl + '/api/user/admin', {email, password} )
            if(response.data.success){
                setToken(response.data.token)
                toast.success('Bienvenido')
            }else{
                toast.error(response.data.message)  
            }
            
        } catch (error) {
            console.log(error)
            toast.error('Algo salio mal')
        }

    }



  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
            <form onSubmit={onsubmitHandler}>
                <div className='mb-4 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'  placeholder='Ingrese su email' required/>
                </div>
                <div className='mb-4 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'  placeholder='Ingrese su password' required/>
                </div>
                <button className='mt-2 w-full py-2 rounded-sm bg-black text-white ' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login