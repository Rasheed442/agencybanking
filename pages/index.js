import React,{useState, useEffect} from 'react'
import style from "../styles/login.module.css"
import Image from 'next/image'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import ClipLoader from "react-spinners/ClipLoader";
import Link from 'next/link'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function login() {
    const [see, setSee] = useState(true)
    const [see1, setSee1] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading , setLoading] = useState(false)
    const [color, setColor]=useState("white")
    const [datamessage, setdataMessage] = useState()
    const auth = {email, password}
    // ${process.env.BASEURL}
 
      async function submithandler(e){
        e.preventDefault();
        setLoading(true)
        const response = await fetch('https://agencyuser.tm-dev.xyz/auth/login',{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(auth)
        })
        const server = await response.json();

        console.log(server)
        setdataMessage(server.message)
        console.log(server.message)

         typeof window !== 'undefined' ? localStorage.setItem('userName', server?.data?.name) : null
         typeof window !== 'undefined' ? localStorage.setItem('transactioncap', server?.data?.allow_set_transactioncap) : null
         typeof window !== 'undefined' ? localStorage.setItem('token', server?.token) : null
         typeof window !== 'undefined' ? localStorage.setItem('logo', server?.data?.logo) : null
         typeof window !== 'undefined' ? localStorage.setItem('referralcode', server?.data?.my_referral_code) : null

        if(server.status){
          toast.success(`Welcome! ${server?.data?.name}`)
          setLoading(false)
          setTimeout(() => {
            window.location="/dashboard"
          }, 1000);
        }else{
          toast.error("Wrong Email or Password!")
          toast.error(server.message)
          setLoading(false)
        }
       
        if(email === undefined || null && password === undefined || null){
          toast.warn("Invalid input")
        } 
  
      }
  
    

  
      
  return (
    <div className={style.background}>
        <Image src='/eclipse.png'alt='' width={700} height={200} priority/>

        <div className={style.container}>
          <img src="/Frame.png" alt='' width={600} height={400} priority/>
           <div className={style.main}>
              <div>
                <h2>Login</h2><br/>
               <p>name of company.logo</p>
              </div>
               <div className={style.user}>
                  <label>Username or Email</label>
                  <input type="email"placeholder='Enter your username or Email' onChange={(e)=> setEmail(e.target.value)}/>
               </div>
           
               <div className={style.pass}>
                  <label> Password</label>
                  <div className={style.password}> 
                     <input type={see1 ? "password":"text"}placeholder='Enter your username or Email' onChange={(e)=> setPassword(e.target.value)}/>
                     <div onClick={()=>{setSee1(!see1)}} style={{cursor:"pointer"}}>
                       {see1 ?<AiFillEyeInvisible size={20} onClick={()=>{setSee(!see1)}}/>:
                     <AiFillEye size={20}/>}
                     </div>                  
                     </div>
               </div>
               
                <div className={style.content}>
                    <div className={style.remember}>
                      <input type="checkbox"/>
                      <label>Remember me?</label>
                    </div>
                  <Link href="/"><p>Forgot Password</p></Link>
                </div>
                 
                 <div className={style.btn} onClick={submithandler}>
                      <button> {loading ?<ClipLoader loading={loading} size={20} color={color}/>:"Login"}</button>
                      {/* {datamessage} */}
                 </div>

           </div>
        </div>

        {/* end */}
          <div className={style.secimg}>
              <Image src='/eclipse1.png'alt='eclip' width={500} height={600} priority/>
          </div>
    </div>
  )
}

export default login
// export async function getServerSideProps() {
//   const response = await fetch({
//       method: 'put',
//       url: process.env.BASEURL,
//       header: {  
//             Authorization: `${process.env.API_KEY} `
//       },
//       data: {
//           id: 12
//       }
//   });
// }