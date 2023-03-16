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
            <h3>Agents</h3>
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
            <span>AGENT ACCOUNT NO <TiArrowUnsorted size={12}/></span>
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
            <p>7383939939800</p> 
         
        </div>
        <div className={style.profile}>
            <span>BUSINESS NAME &nbsp;<TiArrowUnsorted size={12}/></span>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        <p>TM30 GLOBAL INTERNATIONAL</p>
        </div>
        <div className={style.profile}>
            <span>EMAIL ADDRESS <TiArrowUnsorted size={12}/></span>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            <p>CUSTOMER@TM30.NG</p>
            
        </div>
        <div className={style.profile}>
            <span>STATE <TiArrowUnsorted size={12}/></span>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
           <p>LAGOS STATE</p>
        </div>
        <div className={style.profile}>
            <span>AMOUNT FUNDED<TiArrowUnsorted size={12}/></span>
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
</div>



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