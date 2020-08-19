import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './img/allocine.png'


function Nav(){
    const [show, handleShow]= useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        };
    }, []);

    return(
        <div className="nav">
            <img 
            className="nav_logo"
            src={logo}
            alt="logo_allociné"
            />



        </div>
    )
};

export default Nav;