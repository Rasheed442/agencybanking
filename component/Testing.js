import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dash from "../pages/dash"
import style from "../styles/sidebar.module.css"
import {useRouter} from 'next/router'
import {AiOutlineRight} from "react-icons/ai"
function testing() {
     const [color, setColor] = useState(false)
     const router = useRouter()
      
     return (
       <div className={style.container}>
      {/* {typeof window !== 'undefined' && } */}
      
      {Dash.map((dash)=>{
        return(    
      <>
             <Link href={dash.path} className={router.pathname === dash.path ? style.top : ''}>
              <div className={style.head}>
          <img src={`/${dash.icon}`} width={15} height={15}/>
          <p>{dash.name}</p>   
           </div>
           </Link> 

        {router.pathname === dash.path && <div style={{marginLeft:"20px", display:"flex", flexDirection:"column"}}>
             {dash?.minilinks?.map((m)=>{
                return (
                  <>
                     <Link href={m.path} >
              <div className={style.head} >
              <p><AiOutlineRight size={10}/> &nbsp;{m.name}</p>   
              </div>
             </Link> 
                  </>
                )
             })}
           </div> }
          </>
          // style={{color:router.pathname === dash.path ? "blue":""}}
          
     
         
        ) 
      })}
    </div>
  )
}

export default testing