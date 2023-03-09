import React,{useState,useEffect} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import style from "../styles/concession.module.css"
import Aos from "aos";
import Image from 'next/image';
import "aos/dist/aos.css";
function Concession({handle}) {
    const [proceed, setProceed] = useState(false)
    const [grant, setGrant] = useState(true)
    const [confirm,setConfirm] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div className={style.background} >
        {grant ?<div className={style.container} data-aos='slide-down'>
             <div className={style.header}>
                   <h2>Grant Concession</h2>
                   <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=> handle(false)}/>
             </div>
             <div className={style.form}>
                <label>Enter new Amount (Concession)</label>
                <input type='text' placeholder='Enter Amount'/>
             </div>

             <div className={style.btn}>
                <button className={style.btn1} onClick={()=> handle(false)}>Cancel</button>
                <button className={style.btn2} onClick={()=>{setProceed(true),setGrant(false)}}>Proceed</button>
             </div>
       </div>:""}
       {proceed ?<div className={style.container}>
          <div className={style.save}>
                      <Image src='/save.png' width={60} height={60} priority/>
                      <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=> handle(false)}/>
          </div>
          <div className={style.changes}>
            <h2>Confirm Changes</h2>
            <p>Are you sure you want to save this changes?</p>
            <div className={style.btn}>
                <button className={style.btn1}  onClick={()=> handle(false)}>Cancel</button>
                <button className={style.btn2} onClick={()=> {setConfirm(true),setProceed(false), window.location="rental"}}>Confirm</button>
            </div>
          </div>
       </div>:""}
      {confirm ?<div className={style.container}>
          <Image width={60} height={60} priority src='/saved.png'/>
          <h2>Changes Saved</h2>
          <p>Changes has been successfully saved</p>
       </div>:""}

    </div>
  )
}

export default Concession