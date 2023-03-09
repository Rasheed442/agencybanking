import React,{useState, useEffect} from 'react'
import style from "../styles/modal2.module.css"
import styles from "../styles/modal1.module.css"
import Image from "next/image"
import {AiOutlineClose,AiFillCaretDown,AiOutlineDown} from "react-icons/ai"
import Aos from "aos";
import "aos/dist/aos.css";
import Modal1sample from "../component/Modal1sample"
function Modal2({cancelmodal2}) {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState()
    const [fund, setFund] = useState(false)

    const [saved, setSaved] = useState(false)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 500 });
      }, []);
  return (
    <>
     {/* {modalsample ?<Modal1sample closemodalsample={setModalsample}/>:""} */}
   {fund ?"":<div className={style.container} >
       <div className={style.white} data-aos="slide-down">
       
        <div className={style.header}>
            <h1>FUND WALLET</h1>
            <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=> {cancelmodal2(false)}} />
        </div>

        <div className={style.payment} onClick={()=> setOpen(!open)}>
            <label>Payment Method</label>
          <div className={style.method}>
            <input type='text' value={text}  placeholder='select your payment method' />
            <AiFillCaretDown size={23}/>
           </div>
          {open ?<div className={style.btn}>
            <button  onClick={(e)=> setText(e.target.textContent)}>Credit Card</button>
            <button onClick={(e)=> setText(e.target.textContent)}>Bank Transfer</button>
           </div>:""}
        </div>

  <div className={style.naration}>
        <div className={style.amount}>
            <label>Amount</label>
            <input type='number' placeholder='Enter Amount'/>
        </div>

        <div className={style.amount}>
            <label>Narration</label>
            <input type='text' placeholder='Enter Description (optional)'/>
        </div>
</div>
 
   <div className={style.proceed} onClick={()=>{
    // cancelmodal2(false)
     setFund(true)
   }}>
       <button>Proceed</button>
   </div>
</div>
    </div>}



    {/* ACCOUNT FUNDING */}


  {fund ?  <div className={styles.modal} >
           {status ?"":<div className={styles.modal_content} data-aos='slide-down'>
              
                   <div className={styles.main}>
                       <div className={styles.btn} onClick={()=>{
                    cancelmodal2(false)
                       }}>
                                               <button>Close</button>
                       </div>

                          <div className={styles.card}>
                               <label>Card number</label>
                               <div className={styles.number}>
                                  <input type='number' placeholder='1234 1234 1234 1234'/>
                                  <Image src='/card.png' width={40} height={25} priority/>
                               </div>
                           </div>

                   <div className={styles.flexout}>
                          <div className={styles.expiry}>
                               <label>Expiration</label>
                               <input type='number' placeholder='MM / YY'/>
                           </div>
                          <div className={styles.expiry}>
                               <label>CVC</label>
                               <input type='number' placeholder='MM / YY'/>
                           </div>
                    </div>

                    <div className={styles.card}>
                               <label>Country</label>
                               <div className={styles.number}>
                                  <input type='text' placeholder='Nigeria'/>
                                  <AiOutlineDown size={20}/>
                               </div>
                           </div>

                     <div className={styles.end}>
                        <p>By Providing Your Card Information, you allow<br/>agency banking to charge your card for future<br/>
                        payments in accordance with their terms.
                        </p>
                        <button onClick={()=>{
                           setStatus(true)
                           setTimeout(() => {
                            cancelmodal2(false)
                           }, 3000);
                        }}>Fund Account</button>
                        </div>      

    </div>

    

 </div>}
 
   {status ?<div className={style.saved}>
      <Image src='/saved.png' width={50} height={50} priority/>
      <h1>Transaction Successful</h1>
      <p>Your Account will be credited shortly</p>
    </div>:""}

 </div>:""}


    </>
  )
    
   
}

export default Modal2