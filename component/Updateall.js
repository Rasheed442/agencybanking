import React,{useState} from 'react'
import style from "../styles/updateall.module.css"
import {AiFillCaretDown,AiOutlineClose} from "react-icons/ai"
function Setcommission({cancelall}) {
    const [daily_limit, setDaily] = useState()
    const [daily_limit_sending, setDailysending] = useState()
    const [daily_limit_receiving, setDailyreceiving] = useState()
    const [weekly_limit, setWeekly] = useState()
    const [weekly_limit_sending, setWeeklysending] = useState()
    const [weekly_limit_receiving, setWeeklyreceiving] = useState()
    const [monthly_limit, setMonthly] = useState()
    const [monthly_limit_sending, setMonthlysending] = useState()
    const [monthly_limit_receiving, setMonthlyreceiving] = useState()
    const [yearly_limit, setYearly] = useState()
    const [yearly_limit_sending, setYearlysending] = useState()
    const [yearly_limit_receiving, setYearlyreceiving] = useState()

    const limits = {
        daily_limit,daily_limit_sending,daily_limit_receiving,
        weekly_limit, weekly_limit_receiving,weekly_limit_sending,
       monthly_limit,monthly_limit_receiving,monthly_limit_sending,
       yearly_limit,yearly_limit_receiving,yearly_limit_sending
    }

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null


   async function Updateall(e){
      e.preventDefault();
      const response = await fetch (`${process.env.NEXT_PUBLIC_API}settings/transactioncap`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`,
        },
        body: JSON.stringify(limits)
      })
      const server = await response.json()
      console.log(server)
     }  

    
  return (
    
    <div className={style.overlay}>
        <div className={style.white}>
            <div className={style.heading}>
                 <h1>Update Daily Transaction Limit</h1>  
                 <AiOutlineClose size={30} onClick={()=>{
                    cancelall(false)
                 }}/>   
            </div>

           <div className={style.inputs}>   
           <div className={style.billername}>
             <label>Daily Limit <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setDaily(e.target.value)} className={style.percent} placeholder="1,000,000"/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Daily Limit Sending<span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" placeholder="18" onChange={(e)=> setDailysending(e.target.value)}/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Daily Limit Receiving <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setDailyreceiving(e.target.value)} placeholder="28"/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Weekly Limit <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setWeekly(e.target.value)} placeholder="254"/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Weekly Limit Sending <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" placeholder="1,500,000.00" onChange={(e)=> setWeeklysending(e.target.value)}/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Weekly Limit Receiving<span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setWeeklyreceiving(e.target.value)} placeholder="1,500,000.00"/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Monthly Limit <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setMonthly(e.target.value)} placeholder="1,500,000.00"/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Monthly Limit Sending<span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setMonthlysending(e.target.value)} placeholder="1,500,000.00"/>
             </div>
           </div>

           <div className={style.billername}>
             <label>Monthly Limit Receiving <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setMonthlyreceiving(e.target.value)} placeholder="1,500,000.00"/>
             </div>
           </div>
           <div className={style.billername}>
             <label>Yearly Limit <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setYearly(e.target.value)} placeholder="1,500,000.00"/>
             </div>
           </div>
           <div className={style.billername}>
             <label>Yearly Limit Sending<span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setYearlysending(e.target.value)} placeholder="1,500,000.00"/>
             </div>
           </div>
           <div className={style.billername}>
             <label>Yearly Limit Receiving <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" onChange={(e)=> setYearlyreceiving(e.target.value)} placeholder="1,500,000.00"/>
             </div>
           </div>

          <button onClick={Updateall}>Update</button>      
     </div>   

  
    
    </div>
    </div>
  )
}

export default Setcommission