import React,{useState,useEffect} from 'react'
import { AiOutlineClose, AiOutlineDown } from 'react-icons/ai'
import style from "../styles/service.module.css"
import Aos from "aos";
import "aos/dist/aos.css";
import Save from './Save';

function Service({cancelall}) {
   const [open,setOpen] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 500 });
      }, []);
  return (
    <div className={style.background}>
      {open ?<Save handle={setOpen}/>:""}
        {open ?"":<div className={style.container}  data-aos="slide-down">
             <div className={style.head}>
             <h2>My Services</h2>
             <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=>{cancelall(false)}}/>
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
                 <button onClick={()=>{setOpen(true)}} className={style.btn2}>Proceed</button>
             </div>

        </div>}
    </div>
  )
}

export default Service