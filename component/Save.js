import React,{useState, useEffect} from 'react'
import style from "../styles/save.module.css"
import Image from 'next/image'
import {AiOutlineClose} from "react-icons/ai"
function Save({handle, handled}) {
    const [confirm, setConfirm] = useState(false)
  return (
 <div className={style.background}>
     {confirm ?"":<div className={style.container}>
        <div className={style.head}>
        <Image src='/save.png' width={60} height={60} priority/>
          <AiOutlineClose size={25} onClick={()=>{handle(false)}}/> 
        </div>
        <div className={style.save}>
            <h4>Confirm Changes</h4>
            <span>Are you sure you want to save changes?</span>
        </div>

        <div className={style.btn}>
           <button onClick={()=>{handle(false)}}>Cancel</button>
           <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>{setConfirm(true),  setTimeout(()=>{
            alert("It was successful")
            window.location='/agent'
    },2000)}}>Confirm</button>
        </div>
     </div>}

    {confirm ?<div className={style.container}>
        <Image src='/saved.png' width={60} height={60} priority/>
        <h4>Changes Saved</h4>
        <span>Changes has been successfully saved</span>
     </div>:""}
</div>
  )
}

export default Save