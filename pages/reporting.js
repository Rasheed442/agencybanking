import React,{useState,useEffect} from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/reporting.module.css"
import {AiTwotoneBell,AiOutlineDown,AiOutlineArrowRight} from "react-icons/ai"
import disputes from "../pages/dispute.json"
import Image from 'next/image'
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
import { BsFilter,BsDownload } from 'react-icons/bs'
import Caution from '../component/Caution'
import {TiArrowUnsorted} from "react-icons/ti"


function dispute() {
   const [counter, setCounter] = useState(1)
   const [oneData, setOneData] = useState([])
   const [username, setUsername] = useState()
   const [show, setShow] = useState(false)
   console.log(oneData)
   console.log(show)
   
   useEffect(()=>{
    setUsername(localStorage.getItem("userName"))
  },[typeof window !== 'undefined' ? localStorage.getItem("userName"): null])

  return (
    <div className={style.background}> 
      {show ? <Caution data={oneData} check={setShow}/>:""}
        <Sidebar/>
        <div className={style.container}>
          <div className={style.main}>
        <h2>Reporting</h2>

          <div className={style.profile}>
              <div className={style.reminder}>
                <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
                 <Image src="/dot.png" width={20} height={20} priority />
              </div>
             <div className={style.line}></div>          
                   <Link href='setting'><Image src="/profile.png" width={40} height={40} priority/></Link>
             <div className={style.name}>
                <p style={{textTransform:"capitalize"}}>{username} &nbsp;<AiOutlineDown size={12}/></p>
                <span>Agent Manager</span>
             </div>
          </div>     
      </div>

      <div className={style.gray}>
          <div className={style.white}>
             <div className={style.header}>
              <p>Reporting</p>
               <div className={style.search}>
                  <MdSearch size={20} style={{color:"gray"}}/>
                  <input placeholder='Search Agent name, Agent ID, Business name e.tc'/>
               </div>
               <div className={style.filter}>
               <button>Filter <BsFilter size={20} style={{color:"#1B59F8"}}/></button>
               </div>
             </div>

            <div className={style.main}>
             <div className={style.zone}>
                <div className={style.state}>
                  <p>START DATE</p>
                  <input type="date"/>
                </div>
                <div className={style.state}>
                  <p>END DATE</p>
                  <input type="date"/>
                </div>
            </div>
             <button><BsDownload/> Download Report</button>
          </div>


    {/* <Table 
    /> */}


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
                                <tbody>
                                     <tr>
                                    <td>{d.name}</td>
                                    <td>{d.id}</td>
                                    <td>{d.number}</td>
                                    <td>{d.business_name}</td>
                                    <td>{d.agent_email}</td>
                                    <td>{d.transaction_dispute}</td>
                                    <td style={{color:"blue",cursor:"pointer"}}>{d.action}</td>

                                    <td style={{width:"100%",margin:"5px",display:"inline-flex",borderRadius:"5px",
                                    justifyContent:"center",alignItems:"center",backgroundColor:`${d.Resolved_Status === "RESOLVED" ? 
                                    "#00F4001A" : (d.Resolved_Status === "OPENED") ? "#E0191933" : (d.Resolved_Status === "ESCALATED") 
                                    ?  "orange" : 'green' }`, color: `${d.Resolved_Status === "RESOLVED"?"GREEN":
                                     (d.Resolved_Status === "OPENED")?"RED":(d.Resolved_Status === "ESCALATED")?"white":""}`}}>{d.Resolved_Status}</td>

                                </tr>
                                </tbody>
                               
                             )
                          })
                         }
                    </table>


        
        <div className={style.entries}>
          <p>Showing 1 to 50 of 100 entries</p>
          <div className={style.btn}>
            <button style={{backgroundColor:"transparent",border:"1px solid red",color:"red"}}onClick={()=>{
              setCounter(counter-1)
            }}>Previous</button>
            <button style={{border:"1px solid gray"}}>{counter}</button>
            <button style={{backgroundColor:"transparent",border:"1px solid blue",color:"blue", width:"5em"}} onClick={()=>{
              setCounter(counter+1)
            }}>Next <AiOutlineArrowRight/></button>
          </div>
        </div>

          </div>
      </div>
      </div>
    </div>
  )
}

export default dispute