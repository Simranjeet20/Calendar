import React, { useState } from 'react'
import Navbar from '../SharedComp/NavbarShared'
import style from '../CSS/Index.module.css'
import img from '../assets/image/h1.png'
import img1 from '../assets/image/h2.png'
import { Button } from 'react-bootstrap'

export default function Index() {
 const press=()=>{
   window.location.href="/home"
 }

  return (
    <>
    <div  className={style.body}>      
    <Navbar   />

    <div>
        <img src={img}  className={style.title} alt="" />
        <img src={img1}  className={style.title1} alt="" />
        
    </div>
           <Button className={style.button} onClick={press} style={{background:'none', border:'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-forward-fill" viewBox="0 0 16 16">
         <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557"/>
       </svg>
        </Button>
    </div>

    </>
  )
}
