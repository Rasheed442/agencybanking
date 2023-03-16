import React,{useState,useEffect} from 'react' 
import style from "../styles/chart.module.css"
import Image from 'next/image';
import Chartjs from 'chart.js/auto';
import Bar from "../component/Bar"
import {Pie, Line,Doughnut} from "react-chartjs-2"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import {TiArrowUnsorted } from "react-icons/ti"
import Transaction from './Transaction';
import Radar from "../component/Radar"
import Link from 'next/link';
function Chart() {  
    const [counter, setCounter] = useState(1)

    const data = {
        labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
            label:'Sales for 2020 (M)',
            data: [ 2.5,2,5,1,4,3,5,4,2,1,5,3],
            borderRadius: 10,
            width:10,
            borderSkipped: false,
            backgroundColor: [
                "#FF993ACC"
                // "#FD8A8A",
                // "#7286D3",
                // "lightblue"        
            ]
        }],
        options:{
            responsive:true
        }
    }
    // console.log(data.labels)
    const pie = {
        labels:["20%","80%"],
        datasets:[{
            label:'Sales for 2020 (M)',
            data: [20,80],
           
        
            backgroundColor: [
                "#42CC7E",
                "#FF993ACC",
                // "green",
                // "blue"
                // "#FD8A8A",
                // "#7286D3",
                // "lightblue"
            ],
           
        }]
    }
    const doughnut = {
        labels:["37%","20%","43%","36%"],
        datasets:[{
            label:'Sales for 2020 (M)',
            data: [ 2,2,5,4],
            backgroundColor: [
                // "orange",
                // "green",
                // "blue",
                // "gray"
                "#7397F5",
                "#FF993A",
                "#42CC7E",
                "#D1D2D2"         
       ]
        }]
    }
    

  return (
    <div  className={style.top}>
      <div className={style.main}>

     <div className={style.chart}>
        <div className={style.statistic}>
            <p>Transactional Activities</p>
            <select>
                <option>JAN</option>
                <option>FEB</option>
                <option>MAR</option>
                <option>APR</option>
                <option>MAY</option>
                <option>JUN</option>
                <option>JUL</option>
                <option>AUG</option>
                <option>SEP</option>
                <option>OCT</option>
                <option>NOV</option>
                <option>DEC</option>
            </select>
        </div><br/><br/>
               <Bar/>
         
    </div>

<div className={style.gridout}>
        <div className={style.terminal}>
                <span>Terminals</span>
                <p>64%</p>
                <Image  src='/Graph.svg' width={120} height={50} priority/>
            </div>
        <div className={style.terminal}>
                <span>Agents</span>
                <p>86%</p>
                <Image  src='/Graph.svg' width={120} height={50} priority/>

            </div>
        <div className={style.terminal}>
                <span>Agent Managers</span>
                <p>2734<span>/5,783</span></p>
            </div>
        <div className={style.terminal}>
                <span>Active Terminals</span>
                <p>2,734<span>/1,324</span></p>
            </div>
        <div className={style.terminal}>
                <span>Active Agents</span>
                <p>501<span>/Min</span></p>
            </div>
        <div className={style.terminal}>
                <span>Acive Managers</span>
                <p>90<span>/150</span></p>
            </div>
      
       
</div>
  </div>

<div className={style.divert}>

<div className={style.flexout}>

      <div className={style.statistic}>
    <p>Statistics</p>
    <select><option>Lastweek</option></select>
  </div>

<div className={style.chart1}>
        <Pie data={pie}/>
    
    <div className={style.navigate}>
         <div className={style.manager}>
           <div className={style.blue}></div>
           <p>AGENTS</p>
        </div>

        <div className={style.manager}>
           <div className={style.orange}></div>
           <p>TERMINALS</p>
        </div>
    </div>
       

</div>
<p style={{textAlign:"end", color:"blue", cursor:"pointer"}}>View All</p>
</div>

<div className={style.flexout}>

      <div className={style.statistic}>
    <p>Agent Leaderboard</p>
    <select><option>Lastweek</option></select>
  </div>

<div className={style.Radar}>
        <Radar/>
    
    <div className={style.navigate}>
         <div className={style.manager}>
           <div className={style.blue}></div>
           <p>Jaytech Ventures</p>
        </div>

        <div className={style.manager}>
           <div className={style.orange}></div>
           <p>ABC Limited</p>
        </div>
        <div className={style.manager}>
           <div className={style.gra}></div>
           <p>TM30 Global</p>
        </div>
        <div className={style.manager}>
           <div className={style.gray}></div>
           <p>Glamtom International</p>
        </div>
    </div>
       

    </div>
    <p style={{textAlign:"end", color:"blue", cursor:"pointer"}}>View Full Report <AiOutlineArrowRight size={13}/></p>
    </div>

</div>


<div className={style.background}>
<div className={style.transact}>
            <h3>Transactions</h3>
            <Link href="/">View All Transaction</Link>
        </div> 
 <div className={style.gridoutside}>
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

export default Chart





// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'react-apexcharts'
// import dynamic from "next/dynamic"
// const chart = dynamic(() => import("react-apexcharts"),{ssr:false});