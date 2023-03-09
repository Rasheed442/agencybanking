import React,{useState,useEffect} from 'react'
import Image from "next/image"
import style from "../styles/modal1.module.css"
import {AiOutlineDown} from "react-icons/ai"
import Aos from "aos";
import "aos/dist/aos.css";
function Modal1({handle}) {
  const [saved, setSaved] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 500 });
      }, []);
  return (
    <div className={style.modal} >
            {saved ?"":<div className={style.modal_content} data-aos='slide-down'>
              
                   <div className={style.main}>
                       <div className={style.btn} onClick={()=>handle(false)}>
                                               <button>Close</button>
                       </div>

                          <div className={style.card}>
                               <label>Card number</label>
                               <div className={style.number}>
                                  <input type='number' placeholder='1234 1234 1234 1234'/>
                                  <Image src='/card.png' width={40} height={25} priority/>
                               </div>
                           </div>

                   <div className={style.flexout}>
                          <div className={style.expiry}>
                               <label>Expiration</label>
                               <input type='number' placeholder='MM / YY'/>
                           </div>
                          <div className={style.expiry}>
                               <label>CVC</label>
                               <input type='number' placeholder='MM / YY'/>
                           </div>
                    </div>

                    <div className={style.card}>
                               <label>Country</label>
                               <div className={style.number}>
                                  <input type='text' placeholder='Nigeria'/>
                                  <AiOutlineDown size={20}/>
                               </div>
                           </div>

                     <div className={style.end}>
                        <p>By Providing Your Card Information, you allow<br/>agency banking to charge your card for future<br/>
                        payments in accordance with their terms.
                        </p>
                        <button onClick={()=>{setSaved(true), setTimeout(()=>{
                           handle(false)
                        },3000)}}>Add Card</button>
                        </div>      

    </div>

    

 </div>}
 {saved ? <div className={style.saved}>
      <Image src='/saved.png' width={50} height={50} priority/>
      <h1>Card Added</h1>
      <p>Your Card detail has been successfully Added</p>
    </div>:""}
</div>
  )
}

export default Modal1