import React from 'react'
import style from "../styles/dispute.module.css"
import disputes from "../pages/dispute.json"
import {TiArrowUnsorted} from "react-icons/ti"
// import Caution from '../component/Caution'
function Table({handleOne,isClick}) {
  return (
    <div>
        <table className={style.table}>
                      <thead>
                            <tr>
                               <th>AGENT NAME <TiArrowUnsorted size={12}/></th>
                               <th>AGENT ID  <TiArrowUnsorted size={12}/></th>
                               <th>PHONE NUMBER  <TiArrowUnsorted size={12}/></th>
                               <th>AGENT BUSINESS NAME  <TiArrowUnsorted size={12}/></th>
                               <th>AGENT EMAIL ADDRESS  <TiArrowUnsorted size={12}/></th>
                               <th>TRANSACTION DISPUTES CONTENT  <TiArrowUnsorted size={12}/></th>
                               <th>ACTION  <TiArrowUnsorted size={12}/></th>
                               <th>RESOLVED STATUS  <TiArrowUnsorted size={12}/></th>
                         </tr>   
                        </thead>
                      
                         {
                          disputes.map((d)=>{
                             return(
                                     <tr>
                                    <td>{d.name}</td>
                                    <td>{d.id}</td>
                                    <td>{d.number}</td>
                                    <td>{d.business_name}</td>
                                    <td>{d.agent_email}</td>
                                    <td>{d.transaction_dispute}</td>
                                    <td style={{color:"blue",cursor:"pointer"}} onClick={()=>{
                                        handleOne(d.id)
                                        isClick()
                                    }}>{d.action}</td>

                                    <td style={{width:"100%",margin:"5px",display:"inline-flex",borderRadius:"5px",
                                    justifyContent:"center",alignItems:"center",backgroundColor:`${d.Resolved_Status === "RESOLVED" ? 
                                    "#00F4001A" : (d.Resolved_Status === "OPENED") ? "#E0191933" : (d.Resolved_Status === "ESCALATED") 
                                    ?  "orange" : 'green' }`, color: `${d.Resolved_Status === "RESOLVED"?"GREEN":
                                     (d.Resolved_Status === "OPENED")?"RED":(d.Resolved_Status === "ESCALATED")?"white":""}`}}>{d.Resolved_Status}</td>

                                </tr>
                               
                             )
                          })
                         }
                    </table>
          
    </div>
  )
}

export default Table