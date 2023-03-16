import React,{useState} from 'react'
import styles from "../styles/transactionlimit.module.css"
import Image from 'next/image'
import Cashtransaction from "./Transactionlimit"
function Fundtransaction() {
    const [show, setShow] = useState(false)
  return (
    <>

    <div className={style.gridout}>  

    <div className={style.limits}>
    <div className={style.timer}>
        <Image src="/timer.png" height={50} width={50} priority/>
        <div>
            <p>Cash -in Transaction</p>
        </div>
    </div>
  <div className={style.flexout} >
    <div className={style.transaction}>
    <span>card payment (Per Transaction)</span>
        <span>cash payment(Per Transaction)</span>
        <span>others (Per Transaction)</span>
    </div>
    <div className={style.transaction}>
        <p>1.5%</p>
        <p>1.5%</p>
        <p>1.5%</p>
    </div>
</div> 

<button onClick={()=>{
    // setShow(true)
}}>Set Commission</button>
</div>

    <div className={style.limits}>
    <div className={style.timer}>
        <Image src="/timer.png" height={50} width={50} priority/>
        <div>
        <p>Cash -out Transaction</p>
        </div>
    </div>
  <div className={style.flexout} >
    <div className={style.transaction}>
        <span>card payment (Per Transaction)</span>
        <span>cash payment(Per Transaction)</span>
        <span>others (Per Transaction)</span>
    </div>
    <div className={style.transaction}>
        <p>2.5%</p>
        <p>2.5%</p>
        <p>2.5%</p>
    </div>
</div> 

<button onClick={()=>{
    setUpdate(true)
}}>Set Commission</button>
</div>
</div></>
  )
}

export default Fundtransaction
