import React,{useState,useEffect} from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/agent.module.css"
import {AiOutlineDown,AiTwotoneBell,AiOutlineSearch,AiOutlinePlus,AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import {BsToggleOn} from "react-icons/bs"
import Image from 'next/image'
import Term from '../component/Term'
import New from '../component/New'
import Terminal from '../component/Terminal'
import Link from 'next/link'
import Assignterminal from '../component/Assignterminal'
import Axios from 'axios'
import Term2 from '../component/Term2'
function agent() {
  
   const [counter, setCounter] = useState(1)
   const [username, setUsername] = useState()
  // counter
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  useEffect(()=>{
      setUsername(localStorage.getItem("userName"))
    },[typeof window !== 'undefined' ? localStorage.getItem("userName"): null])
  
// local storage
  
    const [color, setColor] = useState(false)
    const [color2, setColor2] = useState(true)
    const [open, setOpen] = useState(false)
    const [terminal, setTerminal] = useState(false)
    const [assignterminal, setAssignterminal] = useState(false)
    const [allagents, setAllagents] = useState([])
    const [value, setValue] = useState("Agents")
    const [search, setSearch] = useState()

    const config = {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
    useEffect(() => {
      Axios.get("https://agencyuser.tm-dev.xyz/manager/agents/all", config).then((response)=>{
        console.log(response?.data)
        setAllagents(response?.data?.data?.getallagents)
      })
      
    }, [])

    
  return (
    
    <div className={style.background}> 
    {assignterminal ?<Assignterminal submit={setAssignterminal}/>:""}
      {terminal ?<Terminal back={setTerminal} />:""}
    {open ?<New handle={setOpen}/>:""}
       {terminal ? "" : <Sidebar/> }
       
     {!terminal && <>
      <div className={style.main}>   
        <div className={style.container}>
        <h2>Agent Management</h2>

          <div className={style.profile}>
          <div className={style.reminder}>
         <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
          <div></div>
       </div>
             <div className={style.line}></div>          
                   <Link href='setting'><Image src="/profile.png" width={40} height={40} priority/></Link>
             <div className={style.name}>
                <p style={{textTransform:"capitalize"}}>{username} <AiOutlineDown size={12}/></p>
                <span>Agent Manager</span>
             </div>
          </div>     
      </div> 
      <div className={style.bg}>  
      <div className={style.white}> 
      <div className={style.contain}>
        <p style={{fontSize:"15px"}}>{value}</p>
        <div className={style.corner}>
        <div className={style.search}>
             <AiOutlineSearch size={20} style={{ color:"gray"}}/>
             <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
        </div>
          {color?"":<div className={style.agent} onClick={()=> {setOpen(true)}}>
               <p ><AiOutlinePlus/> Add New Agent</p>
          </div>}       
          {color ?<div className={style.agent} onClick={()=> {setAssignterminal(true)}}>
               <p><AiOutlinePlus/> Assign New Terminal</p>
          </div>:""}
           </div>      
      </div>
      <div className={style.head}>
         <p onClick={(e)=>{setColor(false),setColor2(true), setValue(e.target.textContent)}} style={{backgroundColor: color ? "transparent":"#1B59F8", color:color ? "gray":""}}>Agents </p>
         <span onClick={(e)=>{setColor(true),setColor2(false),setValue(e.target.textContent)}} style={{backgroundColor: color ?"#1B59F8":"", color:color ?"white":""}}>Terminals</span>
    </div>
    {color2 ?<Term2 data={allagents} check={setTerminal} />:""} 
       {color ?<Term check={setTerminal}/>:""}
       </div>
       </div>
       </div>

     </>}
      
 
    

    
  

  </div>
   
  )
}
export default agent 

// {/* <div className={style.footer}>
//         <span>Showing 1 to 5 of 100 entries</span>
//         <div className={style.btn}>
//           <button style={{border:"1px solid red", color:"red"}} onClick={()=>{
//             setCounter(counter-1)
//           }}><AiOutlineArrowLeft/>&nbsp;Previous</button>
//           <div className={style.btn1}>
//             {/* <button style={{backgroundColor:"#1B59F8", color:"white"}}>1</button>
//             <button>2</button>
//             <button>3</button>
//             <button>4</button>
//             <button>...</button>
//             <button>10</button> */}
//             <button>{counter}</button>
//           </div>
//           <button  style={{border:"1px solid #1B59F8", color:"#1B59F8"}} onClick={()=>{
//             setCounter(counter+1)
//           }}>Next&nbsp;<AiOutlineArrowRight/></button>
//         </div>
// //       </div> */}{/* {color2 ?<div className={style.gridout}>
//        <div className={style.status} onClick={()=> {setTerminal(true)}}>
//         <main>AGENT NAME <AiOutlineDown/></main>
//         <p>James Adekola</p>
//         <p>Shola Adeniyi</p>
//         <p>Shola Adeniyi</p>
//         <p>Tayo Temitope</p>
//         <p>Tayo Temitope</p>
//         <p>Shola Adeniyi</p>
//         <p>Shola Adeniyi</p>
//         <p>Shola Adeniyi</p>
//         <p>James Adekola</p>
//         <p>James Adekola</p>
//         <p>James Adekola</p>
//        </div>
//        <div className={style.status}>
//         <main>AGENT ID <AiOutlineDown/></main>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//         <p>N1123SB3</p>
//        </div>
//        <div className={style.status}>
//         <main>PHONE NUMBER <AiOutlineDown/></main>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//          <p>+23481 3226 5445</p>
//        </div>
//        <div className={style.status}>
//         <main>BUSINESS NAME <AiOutlineDown/></main>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//           <p>TM30 GLOBAL INTERNATIONAL</p>
//        </div>
//        <div className={style.status}>
//         <main>EMAIL ADDRESS <AiOutlineDown/></main>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//          <p>CUSTOMER@TM30.COM.NG</p>
//        </div>
//        <div className={style.status}>
//         <main>ADDRESS <AiOutlineDown/></main>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//            <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
//        </div>
//        <div className={style.statu}>
//         <main>STATUS <AiOutlineDown/></main>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//           <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
//        </div>
       
//    </div>:""} */}
//    {/* {color ?<Term check={setTerminal}/>:""} */}
