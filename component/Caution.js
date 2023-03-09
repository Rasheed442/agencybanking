import React from 'react'
import style from "../styles/caution.module.css"
import Image from 'next/image'
import {AiOutlineClose} from "react-icons/ai"
function Caution({data,check}) {
  return (
    <div className={style.container}>
    <div className={style.bg}>
        <div className={style.close}>
           <Image src="/caution.png" width={100} height={100} priority/>
        <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=>{
            check(false)
        }}/> 
        </div>
        <p>Account 1234567890 {data.name} was Debited</p>
        <span>Good morning, My account 1234567890 {data?.name} Tope Alao<br/> was debited with #2000 on a POS machine on
             4/08/2021<br/> for a declined transaction. And up till this moment, I am yet<br/> on get a reversal. 
             Kindly help log the complaint.   My details<br/> First 6 digits of my ATM card: 506102, Last 4 
             digits of my ATM card:<br/> 1234. Thanks</span>
    </div>
    </div>
  )
}

export default Caution