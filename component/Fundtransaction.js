import React from 'react'
import style from "../styles/transactionlimit.module.css"
import Image from 'next/image'
function Fundtransaction() {
  return (
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
}}>Update Transaction Limit</button>
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
}}>Update Transaction Limit</button>
</div>
</div>
  )
}

export default Fundtransaction
