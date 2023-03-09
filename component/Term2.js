import React,{useState,useEffect} from 'react'
import styles from "../styles/agent.module.css"
import {AiOutlineDown,AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {BsToggleOn,BsToggleOff} from "react-icons/bs"
import {MdToggleOn,MdToggleOff} from "react-icons/md"
import Terminal from './Terminal'
import {TiArrowUnsorted} from "react-icons/ti"
import { icons } from 'react-icons/lib'
function Term2({check, data}) {
  console.log(data)
    const [counter, setCounter] = useState(1)
    const [isAgent, setisAgent] = useState()
    const [toggle , setToggle] = useState(true)
    const [clientId, setClientId] = useState()



  return (
    <div>
          <table className={styles.table}>
          <thead>
                <tr>
                   <th>AGENT NAME <TiArrowUnsorted size={12}/></th>
                   <th>AGENT ID </th>
                   <th>PHONE NUMBER <TiArrowUnsorted size={12}/></th>
                   <th>AGENT BUSINESS NAME <TiArrowUnsorted size={12}/></th>
                   <th>EMAIL ADDRESS <TiArrowUnsorted size={12}/></th>
                   <th>ADDRESS <TiArrowUnsorted size={12}/></th>
                   <th>STATUS </th>
             </tr>   
            </thead>
          
             {
              data && data?.map((d)=>{
                 return(
                   
                         <tr>
                         <td onClick={()=>{
                           setClientId(d?._id);
                           localStorage.setItem('d.id',d?._id)
                           check(true)
                         }} style={{textTransform:"capitalize", cursor:"pointer"}}>{d?.fullname}</td>
                        <td>{d?._id}</td>
                        <td>{d?.phonenumber}</td>
                        <td style={{textTransform:"uppercase"}}>{d?.business_name}</td>
                        <td>{d?.email}</td>
                        <td style={{textTransform:"uppercase"}}>{d?.address}</td>
                        <td>
                          <div>
                            {toggle ?<MdToggleOff  size={25} onClick={()=> setToggle(false)}/> :
                            <MdToggleOn style={{color:"green"}} size={25} onClick={()=> setToggle(true)}/>}
                          </div>
                          </td>
                    </tr>
                   
                 )
              })
             }
        </table>
    
        <div className={styles.footer}>
                 <span>Showing 1 to 5 of 100 entries</span>
             <div className={styles.btn}>
                 <button style={{border:"1px solid red", color:"red"}} onClick={()=>{
                  if(counter === 1){
                    setCounter(1)
                  }
                setCounter(counter-1)
              }}><AiOutlineArrowLeft/>&nbsp;Previous</button>
              <div className={styles.btn1}>
                <button>{counter}</button>
              </div>
              <button  style={{border:"1px solid #1B59F8", color:"#1B59F8"}} onClick={()=>{
                setCounter(counter+1)
              }}>Next&nbsp;<AiOutlineArrowRight/></button>
            </div>
          </div> 
    
    </div>

  )
}

export default Term2