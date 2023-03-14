import React,{useState,useEffect} from 'react'
import style from "../styles/allservice.module.css"
import {AiOutlineClose} from "react-icons/ai"
import Service2 from '../component/Service2'
import Link from 'next/link'
import Save from '../component/Save';

function Allservices({handle}) {
      const [add, setAdd] = useState(false)
      const [open,setOpen] = useState(false)
      const [add1, setAdd1] = useState(false)
  return (
    <> 
          {open ?<Save handle={setOpen}/>:""}

   {add1 ?"": <div className={style.background}>

     <div className={style.container}  >
           <div className={style.head}>
           <h2>All Services</h2>
           <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=>{handle(false)}}/>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>DSTV</p>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>Airtime</p>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>GOTV</p>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>Electricity</p>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>FIRS</p>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>FRSC</p>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>DSTV</p>
           </div>
           <div className={style.check}>
              <input className={style.check} type='checkbox' checked/>
              <p>DATA SERVICES</p>
           </div>

  
          
   

           <div className={style.btn}>
               <button className={style.btn1} onClick={()=>{setAdd1(true)}}>Add More Services</button>
               <button className={style.btn2} onClick={()=>{handle(false)}}>Done</button>
           </div>

      </div>
  </div>}

  {add1 ?<div className={style.background}>
    <div className={style.container}  >
             <div className={style.head}>
             <h2>My Services</h2>
             <AiOutlineClose size={25} style={{cursor:"pointer"}}  onClick={()=>{handle(false)}}/>
             </div>
             <div className={style.check}>
                <input className={style.check} type='checkbox' checked/>
                <p>DSTV</p>
             </div>
             <div className={style.check}>
                <input className={style.check} type='checkbox' checked/>
                <p>Airtime</p>
             </div>
             <div className={style.check}>
                <input className={style.check} type='checkbox' checked/>
                <p>GOTV</p>
             </div>
             <div className={style.check}>
                <input className={style.check} type='checkbox' checked/>
                <p>Electricity</p>
             </div>
             <div className={style.check}>
                <input className={style.check} type='checkbox' checked/>
                <p>FIRS</p>
             </div>
             <div className={style.check}>
                <input className={style.check} type='checkbox' checked/>
                <p>FRSC</p>
             </div>

            <div className={style.new}>
                <h2>Add New Services</h2>
                <span>Select from the list of Services provided below</span>
                <p>Select All</p>
            </div>  
            
            <div className={style.check}>
                <input className={style.check} type='checkbox'/>
                <p>NURTW</p>
             </div>
            <div className={style.check}>
                <input className={style.check} type='checkbox'/>
                <p>Startimes</p>
             </div>
            <div className={style.check}>
                <input className={style.check} type='checkbox'/>
                <p>Data Services</p>
             </div>
            <div className={style.check}>
                <input className={style.check} type='checkbox'/>
                <p>Water Services</p>
             </div>
            <div className={style.check}>
                <input className={style.check} type='checkbox'/>
                <p>NURTW</p>
             </div>

             <div className={style.btn}>
                 <button onClick={()=>{ handle(false)}} className={style.btn2}>Proceed</button>
             </div>

        </div>
    </div>:""}
  </>
  )
}

export default Allservices