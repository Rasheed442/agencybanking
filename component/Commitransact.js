import React,{useState,useEffect} from 'react'
import style from "../styles/Setcommission.module.css"
import Axios from 'axios'
import {AiFillCaretDown,AiOutlineClose} from "react-icons/ai"


const token = typeof window !== 'undefined' ? localStorage.getItem('token')  : null

const config = {
  headers:{
    Authorization: `Bearer ${token}`
  }
}


function Commitransact({canceltransact}) {
  return (
    <div className={style.overlay}>
    <div className={style.white}>
        <div className={style.heading}>
             <h1>Set Commission</h1>  
             <AiOutlineClose size={30} onClick={()=>{
          canceltransact(false)
             }} style={{cursor:"pointer"}}/>   
        </div>
 


    <div className={style.commissionpercentage}>
         <label>Commission Percentage <span style={{color:"red"}}>*</span></label>
         <div className={style.percentage}>
            <input className={style.percent} type="number" placeholder="1.5%"/>
            <p style={{color:"blue"}}>Edit Commission</p>
         </div>
       </div>

      

<div className={style.submit}>
      <button>Set Commission</button>      

</div>

    </div>
</div>
  )
}

export default Commitransact
