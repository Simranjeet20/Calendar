import React from 'react'
import Navbar from '../SharedComp/NavbarShared'
import style from '../CSS/Home.module.css'

export default function Aboutus() {
  return (
    <>
    <Navbar />
    
    <h2 style={{marginLeft:'30vh', marginTop:'60vh'}}>About Us</h2>
   
   
    <div style={{textAlign:'right', marginTop:'-40vh'}}>
      <p style={{textAlign:'center', marginLeft:'65vh',fontSize:'18px'}}>Welcome to our Wildlife Wonders Calendar application!</p>
      <p style={{textAlign:'center', marginLeft:'75vh', width:'120vh'}}>Our mission is to provide you a Wildlife Wonders Calender website where you can see any date and day  by selecting that date and day from the calender.</p>
      <p style={{textAlign:'center',fontSize:'18px', marginLeft:'65vh'}}>Feel free to explore our application and reach out to us if you have any questions, feedback, or suggestions.</p>
      <ul style={{textAlign:'center',  listStyleType: 'none', marginLeft:'65vh'}}>
        <li><span style={{fontSize:'20px'}}>Email:</span> Simranjeetkaur7902@gmail.com</li>
        <li><span style={{fontSize:'20px', marginLeft:'-14vh'}}>Phone: </span> +91-7508022907</li>
      </ul>
      <p style={{textAlign:'center',fontSize:'25px', marginLeft:'65vh'}}>Thank you for choosing our calendar app!</p>    
    </div>
    </>
  )
}
