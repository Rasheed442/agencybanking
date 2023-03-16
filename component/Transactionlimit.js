import React from 'react'
import style from "../styles/Setcommission.module.css"
import {AiFillCaretDown,AiOutlineClose} from "react-icons/ai"
function Transactionlimit({cancelUpdate,Cancelcash}) {
  return (
    <div className={style.overlay}>
        <div className={style.white}>
            <div className={style.heading}>
                 <h1>Update Transaction Limit</h1>  
                 <AiOutlineClose size={30} onClick={()=>{
                    // cancelUpdate(false)
                    Cancelcash(false)
                 }} style={{cursor:"pointer"}}/>   
            </div>
     

        <div className={style.commissionpercentage}>
             <label>Select Transaction Limit Type <span style={{color:"red"}}>*</span></label>
             <div className={style.percentage}>
                <input type="text" placeholder="Weekly Transaction Limit"/>
                <AiFillCaretDown size={20}/>
             </div>
             <h2>Select Provider</h2>
           </div>

           <div className={style.inputs}>   
           <div className={style.billername}>
             <label>Presentation Transaction Limit <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="number" className={style.percent} placeholder="1,000,000"/>
                
             </div>
           </div>
           <div className={style.billername}>
             <label>Set New Transaction Limit <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="text" placeholder="1,500,000.00"/>
                <p>Set New Limit</p>
             </div>
           </div>
              

        </div>   

        <div className={style.submit} onClick={()=>{
          Cancelcash(false)
        }}>
              <button>Update</button>   
        </div>
    

    
        </div>
    </div>
  )
}

export default Transactionlimit