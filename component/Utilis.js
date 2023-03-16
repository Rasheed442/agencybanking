import React,{useState,useEffect} from 'react'
import style from "../styles/sidebar.module.css"
import Link from 'next/link'
import {MdDashboard,MdGroup} from "react-icons/md"
import {AiOutlineStock,AiOutlineRight} from "react-icons/ai"
import {RiFolderKeyholeLine} from "react-icons/ri"
import {BsShieldExclamation} from "react-icons/bs"
import {useRouter} from 'next/router'


   const username = [
      {
          "icon":<MdDashboard/>,
          "name":"Dashboard",
          "path":"/dashboard",
          "background":"ghostwhite",
          "color":"#1B59F8"
          
      },
      {
          "icon":<MdGroup/>,
          "name":"My Account",
          "path":"/account",
          "background":"ghostwhite",
          "color":"#1B59F8"
  
      },
      {
          "icon":<MdGroup/>,
          "name":"Agent Management",
          "path":"/agent",
          "background":"ghostwhite",
          "color":"#1B59F8"
      },
      {
        "icon":<AiOutlineStock/>,
        "name":"Reporting",
        "path":"/reporting",
        "background":"ghostwhite",
        "color":"#1B59F8"

    },
      {
        "icon":<AiOutlineStock/>,
        "name":"Requests",
        "path":"/request",
        "background":"ghostwhite",
        "color":"#1B59F8"

    },
   
      {
          "icon":<RiFolderKeyholeLine/>,
          "name":"Settings",
          "path":"/commission",
          "background":"ghostwhite",
          "color":"#1B59F8",
          "minilinks":[
              {
                  "name":"Commission",
                  "path":"/commission",
                  "background":"ghostwhite",
                  "color":"#1B59F8"
              },
              {
                  "name":"Transaction Limits",
                  "path":"/transactionlimit",
                  "background":"ghostwhite",
                  "color":"#1B59F8"
              },
              {
                  "name":"Profile",
                  "path":"/profile",
                  "background":"ghostwhite",
                  "color":"#1B59F8"
          
              }
          ]
  
      },
    
      {
          "icon":<BsShieldExclamation/>,
          "name":"Disputes",
          "path":"/dispute",
          "background":"ghostwhite",
          "color":"#1B59F8"
  
      }
  ]

  


function utilis() {
   const router = useRouter()
   const [currlocation, setCurrlocation] = useState()

  //  const currlocation = typeof window !== 'undefined' ? localStorage.getItem('currL') : null

  useEffect(()=>{
    setCurrlocation(localStorage.getItem("currL"))
  },[typeof window !== 'undefined' ? localStorage.getItem("currL"): null])
  return (
    <div >
      
    {username.map((s)=>{
      return(
        <>
        <Link href={s.path} >
        <div onClick={() => {
          localStorage.setItem('currL', s.path)
        }} className={router.pathname === s.path ? style.top : style.head}>
          <div>{s.icon}</div>
    <p>{s.name}</p>   
     </div>
     </Link> 


{currlocation === s.path &&( <div style={{marginLeft:"20px", display:"flex", flexDirection:"column"}}>
{s?.minilinks?.map((m)=>{
   return (
     <>
        <Link href={m.path} >
 <div onClick={(e)=>{

 }} className={style.head} >
 <p className={router.pathname === m.path ? style.top2 : ""}><AiOutlineRight size={10}/> &nbsp;{m.name}</p>   
 </div>
</Link> 
     </>
   )
})}
</div> )}
</>
      ) 
    })}
    
 
  </div>
  )
}

export default utilis













//    const username = [
//       {
//           "icon":<MdOutlineSpaceDashboard/>,
//           "name":"Dashboard",
//           "path":"/dashboard",
//           "background":"ghostwhite",
//           "color":"#1B59F8"
          
//       },
//       {
//           "icon":<MdGroup/>,
//           "name":"My Account",
//           "path":"/account",
//           "background":"ghostwhite",
//           "color":"#1B59F8"
  
//       },
//       {
//           "icon":"MdGroup",
//           "name":"Agent Management",
//           "path":"/agent",
//           "background":"ghostwhite",
//           "color":"#1B59F8"
//       },
//       {
//           "icon":<AiOutlineStock/>,
//           "name":"Reporting",
//           "path":"/reporting",
//           "background":"ghostwhite",
//           "color":"#1B59F8"
  
//       },
//       {
//           "icon":<AiOutlineStock/>,
//           "name":"Requests",
//           "path":"/request",
//           "background":"ghostwhite",
//           "color":"#1B59F8"
  
//       },
//       {
//           "icon":<RiFolderKeyholeLine/>,
//           "name":"Settings",
//           "path":"/commission",
//           "background":"ghostwhite",
//           "color":"#1B59F8",
//           "minilinks":[
//               {
//                   "name":"commission",
//                   "path":"/commission",
//                   "background":"ghostwhite",
//                   "color":"#1B59F8"
//               },
//               {
//                   "name":"Transaction Limits",
//                   "path":"/transactionlimit",
//                   "background":"ghostwhite",
//                   "color":"#1B59F8"
//               },
//               {
//                   "name":"Profile",
//                   "path":"/profile",
//                   "background":"ghostwhite",
//                   "color":"#1B59F8"
          
//               }
//           ]
  
//       },
    
//       {
//           "icon":<BsShieldExclamation/>,
//           "name":"Disputes",
//           "path":"/dispute",
//           "background":"ghostwhite",
//           "color":"#1B59F8"
  
//       }
//   ]

// export {username}