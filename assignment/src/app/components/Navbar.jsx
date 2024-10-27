import React from 'react'
import './navbarStyles.css';
import logo from '../assets/logo.jpg' ;
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-part'>
            <Image src={logo} width={30} height={30} className="logo-image"  alt='logo'/>
            WhatBytes
        </div>
        <div className='right-part'>
             UserName
        </div>
    </div>
  )
}
