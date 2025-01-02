import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} action="" className="flex flex-col items-center w-[90%] sm:max-w-96  m-auto mt-14 text-gray-800 gap-4">
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p>{currentState}</p>
          <hr />
        </div>
         {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='User' type="text" required /> } 
        <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='email' type="email"  required />
        <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' type="password" required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password?</p>
          {
            currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer
            '>Create Account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer
            '>Login Here</p>
          }
        </div>
        <button className='bg-black text-white font-light px-2 py-2 '>{currentState === 'Login' ? 'Sign In ' : 'Sign Up'}</button>
      </form>

    </div>
  )
}

export default Login