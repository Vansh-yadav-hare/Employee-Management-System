import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
   

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        console.log("Email is ",email);
        console.log("pasword is :",password);

        setEmail("");
        setPassword("");
       
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={submitHandler}
            className='flex flex-col items-center justify-center' >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);

                }}

                required className='   outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400' type='email' placeholder='Enter your email'></input>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                 required className='   outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-grey-400' type='password' placeholder='Enter the password '></input>
                <button className=' text-white mt-5  border-none outline-none  bg-emerald-600  border-2  text-xl py-3 px-5 rounded-full placeholder:text-white'>login</button>
            </form>

        </div>
    </div>

  )
}

export default Login;