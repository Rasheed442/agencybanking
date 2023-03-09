import React,{useState,useEffect} from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/commission.module.css"
import {AiOutlineSearch,AiOutlineDown,AiTwotoneBell,AiOutlineMenu} from "react-icons/ai"
import  Image from 'next/image'
import Axios from 'axios'
import Link from 'next/link'
import Setcommission from '../component/Setcommission'
function setting() {

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null


    const config = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
      
      useEffect(() => {
        Axios.get("http://89.38.135.41:9800/provider/airtime/networks", config).then((response)=>{
          console.log(response?.data)
        })
        
      }, [])
    const [airtime, setAirtime] = useState(true)
    const [electricity, setElectricity] = useState(false)
    // modal commission toggle
    const [commission,setCommission] = useState(false)
  return (
    <div className={style.header}>
        {commission ?<Setcommission cancelCommission={setCommission}/>:""}
        <Sidebar/>
<div className={style.main}>
     <div className={style.container}>
            <h1>Settings</h1>
            {/* <div className={style.icon} onClick={()=>{setShow(true)}}>
            <AiOutlineMenu size={25}/>
            </div> */}
        <Link href='setting'>
            <div className={style.profile}>
                <div className={style.reminder}>
                    <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
                    {/* <Image src="/dot.png" width={20} height={20} priority /> */}
                    <div></div>
                </div>
                <div className={style.line}></div>          
                    <Image src="/profile.png" width={40} height={40} priority/>
                <div className={style.name}>
                    <p>rash <AiOutlineDown size={10}/></p>
                    <span>Agent Manager</span>
                </div>
            </div>
        </Link> 
            </div>

            <div className={style.whitesmoke}>
                <div className={style.white}>
                    <div className={style.commission}>
                        <p>Commissions</p>
                        <div className={style.search}>
                            <AiOutlineSearch/>
                            <input type="text" placeholder='Search Agent name, Agent ID, Business name etc.'/>
                        </div>
                        
                    </div>
         
         <div className={style.flexout}>
                    <div className={style.airtime} onClick={()=>{
                        setAirtime(true)
                        setElectricity(false)
                    }} style={{color:airtime ? "blue":""}}>
                        <Image src="/PhoneCall4.png" width={25} height={25} priority/>
                        <p>AIRTIME</p>
                    </div>
                    <div className={style.airtime}>
                        <Image src="/data.png" width={25} height={25} priority/>
                        <p>DATA</p>
                    </div>
                    <div className={style.airtime}>
                        <Image src="/wifi.png" width={25} height={25} priority/>
                        <p>CABLE</p>
                    </div>
                    <div className={style.airtime} onClick={()=>{
                        setElectricity(true)
                        setAirtime(false)
                    }} style={{color:electricity ? "blue":""}}>
                        <Image src="/ecohouse.png" width={25} height={25} priority/>
                        <p>ELECTRICITY</p>
                    </div>
                    <div className={style.airtime}>
                        <Image src="/smarttv.png" width={25} height={25} priority/>
                        <p>INTERNET</p>
                    </div>
                    <div className={style.airtime}>
                        <Image src="/more.png" width={25} height={25} priority/>
                        <p>OTHERS</p>
                    </div>
            </div>
        
        <div className={style.biller}>
            <p>Select Biller:</p>
            <button onClick={()=>{
                setCommission(true)
            }}>Set Commission</button>
        </div>

       { airtime ?<div className={style.network}>
            <Image src="/mtn.png" width={100} height={100} priority/>
            <Image src="/glo.png" width={100} height={100} priority/>
            <Image src="/airtel.png" width={100} height={100} priority/>
            <Image src="/9mobile.png" width={100} height={100} priority/>
        </div>:""}

        {electricity ?<div className={style.electric}>
            <Image src="/ikeja.png" width={150} height={150} priority/>
            <Image src="/ekedc.png" width={150} height={150} priority/>
            <Image src="/eedc.png" width={150} height={150} priority/>
            <Image src="/yedc.png" width={150} height={150} priority/>
            <Image src="/aedc.png" width={150} height={150} priority/>
            <Image src="/kedco.png" width={150} height={150} priority/>
            <Image src="/joe.png" width={150} height={150} priority/>
            <Image src="/kaduna.png" width={150} height={150} priority/>
            <Image src="/ibedc.png" width={150} height={150} priority/>
            <Image src="/bedc.png" width={150} height={150} priority/>
            <Image src="/phcc.png" width={150} height={150} priority/>
        </div>:""}



                </div>
            </div>
  </div> 
    </div>
  )
}

export default setting