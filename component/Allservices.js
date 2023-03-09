import React,{useState,useEffect} from 'react'
import style from "../styles/allservice.module.css"
import {AiOutlineClose} from "react-icons/ai"
import Service from '../component/Service'
import Link from 'next/link'
function Allservices({handle}) {
      const [add, setAdd] = useState(false)
      const [add1, setAdd1] = useState(false)
  return (
    <> 
     {add ?<Service/>:""}
   {add1 ?"": <div className={style.background}>
      

     <div className={style.container}  data-aos="slide-down">
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
               <button className={style.btn1} onClick={()=>{setAdd1(true),setAdd(true)}}>Add More Services</button>
               <button className={style.btn2} onClick={()=>{setAdd1(true)}}>Done</button>
           </div>

      </div>
  </div>}
  </>
  )
}

export default Allservices