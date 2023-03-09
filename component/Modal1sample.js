import React,{useState,useEffect} from 'react'
import Image from "next/image"
import styles from "../styles/modal1.module.css"
import {AiOutlineDown} from "react-icons/ai"
import Aos from "aos";
import "aos/dist/aos.css";
function Modal1({closemodalsample, cancelmodal2}) {
  const [saved, setSaved] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div className={styles.modal} >
            {saved ?"":<div className={styles.modal_content} data-aos='slide-down'>
              
                   <div className={styles.main}>
                       <div className={styles.btn} onClick={()=>{
                        closemodalsample(false)
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
                               <div className={style.number}>
                                  <input type='text' placeholder='Nigeria'/>
                                  <AiOutlineDown size={20}/>
                               </div>
                           </div>

                     <div className={styles.end}>
                        <p>By Providing Your Card Information, you allow<br/>agency banking to charge your card for future<br/>
                        payments in accordance with their terms.
                        </p>
                        <button>Fund Account</button>
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