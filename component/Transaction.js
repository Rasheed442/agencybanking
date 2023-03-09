import React,{useState} from 'react'
import Link from "next/link"
import {AiOutlineDown,AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import {TiArrowUnsorted} from "react-icons/ti"
import style from "../styles/transaction.module.css"
import styles from "../styles/dispute.module.css"
import disputes from "../pages/dispute.json"
function Transaction() {
  const [counter, setCounter] = useState(1)
  return (
  <div className={style.container}>
     <div className={style.background}>
        <div className={style.transact}>
            <h3>Recent Transactions</h3>
            <Link href='/'><p>View All Transactions <MdOutlineArrowForwardIos size={13}/></p></Link>
        </div> 

<div className={style.gridout}>

        <div className={style.profile}>
            <span>AGENT NAME<TiArrowUnsorted size={12}/></span>
            <p>James Adekola</p>
            <p>Shola Adeniyi</p>
            <p>Shola Adeniyi</p>
            <p>Tayo Temitope</p>
            <p>Tayo Temitope</p>
            <p>Shola Adeniyi</p>
            <p>Shola Adeniyi</p>
            <p>James Adekola</p>
            <p>James Adekola</p>
            <p>James Adekola</p>
            <p>Shola Adeniyi</p>   
            <p>Shola Adeniyi</p>   
            <p>Shola Adeniyi</p>   
            <p>Shola Adeniyi</p>   
            <p>Shola Adeniyi</p>   
        </div>
        <div className={style.profile}>
            <span>AGENT ID</span>
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
        </div>
        <div className={style.profile}>
            <span>RES MESSAGE <TiArrowUnsorted size={12}/></span>
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Insufficient Fund</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
        </div>
        <div className={style.profile}>
            <span>RESP CODE <TiArrowUnsorted size={12}/></span>
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
        </div>
        <div className={style.profile}>
            <span>TRANS.TYPE &nbsp;<TiArrowUnsorted size={12}/></span>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"red"}}>Deposit</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"red"}}>Deposit</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"red"}}>Deposit</p>
            <p style={{color:"red"}}>Deposit</p>
            <p style={{color:"red"}}>Deposit</p>
            <p style={{color:"red"}}>Deposit</p>

        </div>
        <div className={style.profile}>
            <span>AMOUNT <TiArrowUnsorted size={12}/></span>
            <p>&#8358;150,000</p>
            <p>&#8358;250,000</p>
            <p>&#8358;170,000</p>
            <p>&#8358;80,000</p>
            <p>&#8358;96,000</p>
            <p>&#8358;10,000</p>
            <p>&#8358;52,000</p>
            <p>&#8358;80,000</p>
            <p>&#8358;96,000</p>
            <p>&#8358;42,000</p>
            <p>&#8358;40,000</p>
            <p>&#8358;40,000</p>
            <p>&#8358;40,000</p>
            <p>&#8358;40,000</p>
            <p>&#8358;40,000</p>
        </div>
        <div className={style.profile}>
            <span>EARNING <TiArrowUnsorted size={12}/></span>
            <p>&#8358;150,000</p>
            <p>&#8358;250,000</p>
            <p>&#8358;170,000</p>
            <p>&#8358;80,000</p>
            <p>&#8358;96,000</p>
            <p>&#8358;10,000</p>
            <p>&#8358;52,000</p>
            <p>&#8358;80,000</p>
            <p>&#8358;96,000</p>
            <p>&#8358;42,000</p>
            <p>&#8358;40,000</p> 
            <p>&#8358;40,000</p> 
            <p>&#8358;40,000</p> 
            <p>&#8358;40,000</p> 
            <p>&#8358;40,000</p> 
        </div>
        <div className={style.profile}>
            <span>DATE <TiArrowUnsorted size={12}/></span>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
        </div>
        <div className={style.profile}>
            <span>STATUS <  TiArrowUnsorted size={12}/></span>
             <p style={{backgroundColor:"#00F4001A",color:"#008000",borderRadius:"20px"}}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#FF3A441A",color:"red",width:"100%",textAlign:"center"}}>FAILED</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#FF3A441A",color:"red",width:"100%", textAlign:"center"}}>FAILED</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000",width:"100%", }}>SUCCESSFUL</p> 
        </div>
        <div className={style.profile}>
            <span>TRANS REF. <TiArrowUnsorted size={12}/></span>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
            <p>WTH/2021052980205747R...</p>
        </div>

</div>


{/* <table className={styles.table}>
                      <thead>
                            <tr>
                               <th>AGENT NAME</th>
                               <th>AGENT ID</th>
                               <th>PHONE NUMBER</th>
                               <th>AGENT BUSINESS NAME</th>
                               <th>AGENT EMAIL ADDRESS</th>
                               <th>TRANSACTION DISPUTES CONTENT</th>
                               <th>ACTION</th>
                               <th>RESOLVED STATUS</th>
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
                    </table> */}


      <div className={style.footer}>
        <span>Showing 1 to 5 of 100 entries</span>
        <div className={style.btn}>
          <button style={{border:"1px solid red", color:"red"}} onClick={()=>{
            setCounter(counter-1)
            if(counter === 1){
              setCounter(1)
              alert("it started from one")
            }
          }}><AiOutlineArrowLeft/>&nbsp;Previous</button>
          <div className={style.btn1}>
            <button>{counter}</button>
            {/* <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
            <button>10</button> */}
          </div>
          <button  style={{border:"1px solid #1B59F8", color:"#1B59F8"}} onClick={()=>{
            setCounter(counter+1)
          }}>Next&nbsp;<AiOutlineArrowRight/></button>
        </div>
      </div>

    </div>
  </div>  
   
  )
}

export default Transaction