import React from 'react';
import LogoImg from '../../asset/logo.png';


export default function Header(){

    return(<div className='header'>
        <div className='logo-container'><img alt="" className="logo" src={LogoImg}/></div>
        <nav>
        <a href="/">Stay</a> 
        <a href="/">Car Rental</a> 
        <a href="/">Travel Planning</a> 
        <a href="/">Blog</a>
</nav>
    </div>)
}