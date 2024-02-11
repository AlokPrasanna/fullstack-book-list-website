"use client";
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Head = () => {
    const [IsRegisterFormOpen, setRegisterFormOpen] = useState(false);
    const [IsLoginFormOpen,setLoginFormOpen] = useState(false);
    const PopupRegisterForm = useRef(null);

    const HandelRegisterForm = () => {
        setRegisterFormOpen(true);
        setLoginFormOpen(false);
    }

    const HandelLoginForm = () => {
        setRegisterFormOpen(false);
        setLoginFormOpen(true);
    }

    const HandelClickOutside = (event) => {
        if(PopupRegisterForm.current && !PopupRegisterForm.current.contains(event.target) && !IsLoginFormOpen){
            setRegisterFormOpen(false);
        }

        if(PopupRegisterForm.current && !PopupRegisterForm.current.contains(event.target) && IsLoginFormOpen){
            setLoginFormOpen(false);
        }
        
    }

    useEffect(() => {
        if(IsRegisterFormOpen || IsLoginFormOpen){
            document.addEventListener('mousedown' , HandelClickOutside);
        }else{
            document.removeEventListener('mousedown', HandelClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', HandelClickOutside);
        };
    },[IsRegisterFormOpen, IsLoginFormOpen]);
    
  return (
    <div>
        <section className='lg:py-16' >
        <div>
        <h1 className='mb-4 text-4xl font-extrabold text-[#1F2544] sm:text-5xl lg:text-7xl lg:leading-normal'>
            <TypeAnimation
                sequence={[
                    'Are you a book lover?',
                    1000, 
                    'Then this is for you!',
                    1000,
                ]}
                wrapper="span"
                speed={50} 
                repeat={Infinity} 
            />
        </h1>
        <div>
            <p className='mb-6 text-base text-black sm:text-lg lg:text-xl'>
            Welcome to our website, where you can preserve your cherished reading moments effortlessly. 
            Our platform empowers you to capture the essence of your favorite books by saving images, summaries, and descriptions. But it doesn't end there sharing these treasures with fellow book enthusiasts is a breeze. 
            Join us in creating a vibrant community where every page turned becomes a shared experience.
            </p>
        </div>
        <div>
            <button onClick={HandelRegisterForm} className='w-full px-6 py-3 mr-4 text-white bg-orange-500 rounded-full sm:w-fit hover:bg-orange-200'>
                Get Start
            </button>
        </div>
        <div >
            {
                IsRegisterFormOpen && (
                    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75'>
                            <div ref={PopupRegisterForm} className='p-8 bg-white rounded-lg'>
                                <h2 className='mb-4 text-2xl font-bold text-black'>Register Form</h2>
                                <form>
                                    <div className='mb-4'>
                                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Your Email</label>
                                        <input type='email' id='email' name='email' placeholder='Enter your email' className='w-full p-2 mt-1 border border-gray-300 rounded-md' required />
                                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Password</label>
                                        <input type='password' id='password' name='password' className='w-full p-2 mt-1 text-black border border-gray-300 rounded-md' required />
                                    </div>
                                    <button type='submit' className='w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-400'>Submit</button>
                                </form>
                                <p className="mt-2 text-gray-700">Already have an account? <button className="text-orange-500 hover:text-orange-700" onClick={HandelLoginForm}>Login</button></p>
                            </div>
                        </div>     
                )
            }
        </div>
        <div>
           {
            IsLoginFormOpen && (
                <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75'>
                        <div ref={PopupRegisterForm} className='p-8 bg-white rounded-lg'>
                            <h2 className='mb-4 text-2xl font-bold text-black'>Login Form</h2>
                            <form>
                                <div className='mb-4'>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Your Email</label>
                                    <input type='email' id='email' name='email' placeholder='Enter your email' className='w-full p-2 mt-1 text-black border border-gray-300 rounded-md ' required />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                                    <input type='password' id='password' name='password' className='w-full p-2 mt-1 text-black border border-gray-300 rounded-md' required />
                                </div>
                                <button type='submit' className='w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-400'>Login</button>
                            </form>
                            <p className="mt-2 text-gray-700">Don't have an account? <button className="text-orange-500 hover:text-orange-700" onClick={HandelRegisterForm}>Register</button></p>
                        </div>
                    </div>     
                )
            }
        </div>
        </div>   
    </section>
    </div>
    
  )
}

export default Head
