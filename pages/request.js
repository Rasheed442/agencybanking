import React,{useState,useEffect} from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/reporting.module.css"
import {AiTwotoneBell,AiOutlineDown,AiOutlineArrowRight} from "react-icons/ai"
import Image from 'next/image'
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
import { BsFilter,BsDownload } from 'react-icons/bs'
import Table from "../component/Table"
// import disputes from "./dispute.json"


function dispute() {
  
  const [username, setUsername] = useState()
   const [counter, setCounter] = useState(1)
  



   useEffect(()=>{
    setUsername(localStorage.getItem("userName"))
  },[typeof window !== 'undefined' ? localStorage.getItem("userName"): null])
  
  return (
    <div className={style.background}> 
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
                <p style={{textTransform:"capitalize"}}>{username} <AiOutlineDown size={12}/></p>
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
                  <p>STATE DATE</p>
                  <input type="date"/>
                </div>
                <div className={style.state}>
                  <p>END DATE</p>
                  <input type="date"/>
                </div>
            </div>
             {/* <button><BsDownload/> Download Report</button> */}
          </div>


    <Table/>
        
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