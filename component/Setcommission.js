import React,{useState,useEffect} from 'react'
import style from "../styles/Setcommission.module.css"
import Axios from 'axios'
import {AiFillCaretDown,AiOutlineClose} from "react-icons/ai"
function Setcommission({cancelCommission}) {

 const [server, setServer] = useState()

  const token = typeof window !== 'undefined' ? localStorage.getItem('token')  : null

  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    Axios.get("https://agencyuser.tm-dev.xyz/manager/provider/commission",config).then((response)=>{
      // console.log(response.data)
      setServer(response?.data?.data?.providers)
    })

  }, [])
  console.log(server)
  return (
    <div className={style.overlay}>
        <div className={style.white}>
            <div className={style.heading}>
                 <h1>Set Commission</h1>  
                 <AiOutlineClose size={30} onClick={()=>{
                    cancelCommission(false)
                 }}/>   
            </div>
     
        <div className={style.inputs}>   

        <div className={style.name}>
                <label>Service Name <span>*</span></label>
                  <select>
                   <option>MTN</option>
                    </select>
            </div>

           <div className={style.billername}>
             <label>Biller name<span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="text" placeholder="32426272881"/>
                
             </div>
           </div>
                 
           <div style={{paddingTop:"20px"}} className={style.billername}>
             <label>Payment mode<span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="text" placeholder="32426272881"/>
                
             </div>
           </div>

        </div>

        <div className={style.commissionpercentage}>
             <label>Commission Percentage <span style={{color:"red"}}>*</span></label>
             <div className={style.percentage}>
                <input className={style.percent} type="number" placeholder="1.5%"/>
                <p style={{color:"blue"}}>Edit Commission</p>
             </div>
             <h2>Select Provider</h2>
           </div>

           <div className={style.inputs}>   
           <div className={style.billername}>
             <label>Primary Provider <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="text" placeholder="Select your default provider"/>
                <AiFillCaretDown/>
             </div>
           </div>
           <div className={style.billername}>
             <label>Secondary Provider(optional) </label>
             <div className={style.caret}>
                <input type="text" placeholder="Select your Secondary Provider"/>
              <AiFillCaretDown/>
             </div>
           </div>
        </div>   

    <div className={style.submit}>
          <button>Set Commission</button>      

    </div>
    
        </div>
    </div>
  )
}

export default Setcommission