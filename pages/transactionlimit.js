import React,{useState,useEffect} from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/transactionlimit.module.css"
import {AiOutlineSearch,AiOutlineDown,AiTwotoneBell,AiOutlineMenu} from "react-icons/ai"
import  Image from 'next/image'
import  Axios  from 'axios'
import Link from 'next/link'
import Updatetransactionlimit from '../component/Updatetransactionlimit'
import Updateall from '../component/Updateall'
function transactionlimit() {
     const [update, setUpdate] = useState(false)
     const [updateall, setUpdateall] = useState(false)
     const [data, setData] = useState([])
     const [daily, setDaily] = useState()

     const username = typeof window !== 'undefined' ? localStorage.getItem("userName") : ""
     const token = typeof window !== 'undefined' ? localStorage.getItem('token') : ""
     const transactioncap = typeof window !== 'undefined' ? localStorage.getItem("allow_set_transactioncap") : ""

     const config = {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
      useEffect(() => {
        Axios.get("http://89.38.135.41:9800/settings/transactioncap", config).then((response)=>{
          setData(response?.data)
        })
      }, [])
    //   console.log(data)



  return (
    <div className={style.header}>
        {updateall ?<Updateall cancelall={setUpdateall}/>:""}
        {update ?<Updatetransactionlimit cancelUpdate={setUpdate}/>:""}
        <Sidebar/>
<div className={style.main}>
     <div className={style.container}>
            <h1>Settings</h1>
        <Link href='setting'>
            <div className={style.profile}>
                <div className={style.reminder}>
                    <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
                    <div></div>
                </div>
                <div className={style.line}></div>          
                    <Image src="/profile.png" width={40} height={40} priority/>
                <div className={style.name}>
                    <p>{username} <AiOutlineDown size={10}/></p>
                    <span>Agent Manager</span>
                </div>
            </div>
        </Link> 
            </div>

            <div className={style.whitesmoke}>
                <div className={style.white}>
                    <div className={style.commission}>
                        <p>Default Transaction Limit</p>  
                        <button onClick={()=>{
                            setUpdateall(true)
                        }}>Update All</button>                      
                    </div>
       
       <div className={style.gridout}>
                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Daily Limit</p>
                                <span>Increase or reduce your daily tranfer limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Daily Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.daily_limit_sending}</p>
                            <p>{data?.data?.currencies?.symbol}  {data?.data?.transactionCap?.daily_limit_receiving}</p>
                            <p>{data?.data?.currencies?.symbol}  {data?.data?.transactionCap?.daily_limit} per day</p>
                        </div>
                    </div> 

                    
                    <button onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    
                    
                    </div>

                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Weekly Limit</p>
                                <span>Increase or reduce your Weekly transaction limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Weekly Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.weekly_limit_sending}</p>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.weekly_limit_receiving}</p>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.weekly_limit} per week</p>
                        </div>
                    </div> 
                    <button
                    onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    </div>

                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Monthly Limit</p>
                                <span>Increase or reduce your monthly transaction limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Monthly Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                          <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.monthly_limit_sending}</p>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.monthly_limit_receiving}</p>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.monthly_limit} per Month</p>
                        </div>
                    </div> 
                    <button
                    onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    </div>

                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Yearly Limit</p>
                                <span>Increase or reduce your yearly transaction limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Monthly Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                        <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.yearly_limit_sending}</p>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.yearly_limit_receiving}</p>
                            <p>{data?.data?.currencies?.symbol} {data?.data?.transactionCap?.yearly_limit} per Year</p>
                        </div>
                    </div> 
                    <button onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    </div>
</div>



                </div>
            </div>
  </div> 
    </div>
  )
}

export default transactionlimit