import React from 'react'
import style from "../styles/assignterminal.module.css"
import {AiFillCaretDown,AiOutlineClose} from "react-icons/ai"
function Assignterminal({submit}) {
  return (
    <div className={style.background}>
        <div className={style.container}>
          <div className={style.close}>
                      <h1>Assign New Terminal</h1>
               <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=>{submit(false)}}/>
          </div>
             <div className={style.main}>
                <div className={style.agents}>
                    <label>Terminal ID <span>*</span></label>
                    <div className={style.terminal}>
                       <input type='text' placeholder='Select from available terminals'/>
                       <AiFillCaretDown/>
                    </div>
                </div>
                <div className={style.agents}>
                    <label>Assign Agent</label>
                    <div className={style.terminal}>
                       <input type='text' placeholder='select an existing agent to terminal'/>
                       <AiFillCaretDown/>
                    </div>         
               </div>
            </div>
            <div className={style.btn}>
                <button >Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Assignterminal