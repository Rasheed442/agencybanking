import React,{useState, useEffect} from 'react'
import style from "../styles/new.module.css"
import {AiFillCaretDown, AiOutlineClose} from "react-icons/ai"
import Axios from "axios"
import Sidebar from './Sidebar'
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import "aos/dist/aos.css";
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function New({handle}) {
      const [fullname, setFullname] = useState()
      const [phonenumber, setNumber] = useState()
      const [business_name, setBusinessname] = useState()
      const [address, setBusinessaddress] = useState()
      const [localgovt, setLocalgovt] = useState()
      const [state, setState] = useState('')
      const [allstates, setAllstate] = useState()
      const [region, setRegion] = useState()
      const [email, setEmail] = useState()
      const [loading , setLoading] = useState(false)
      const [color, setColor]=useState("white")
            
    const token = typeof window !== 'undefined' ? localStorage.getItem('token')  : null

      const details = {fullname,phonenumber,address,business_name,localgovt,state,region,email}
  

   useEffect(() => {
      Axios.get("http://agencyuser.tm-dev.xyz/auth/states").then((response)=>{
        setAllstate(response?.data) 
      })

    }, [])

 console.log(allstates)
const sortState = allstates?.data?.statelcd?.map(d => {
    const state = Object.keys(d)
    return state
})

const getLcg = allstates?.data?.statelcd?.map(d => d[state] )


    async function submithandler(e){
      e.preventDefault();
      setLoading(true)
        const response = await fetch ("https://agencyuser.tm-dev.xyz/manager/create/agent",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
          },
          body: JSON.stringify(details)
        })
        const server = await response.json();
        console.log(server)
        setLoading(false)
        handle(false)
        toast(server?.errors)
        window.location="/agent"
     }
  
     useEffect(() => {
      Aos.init({ duration: 500 });
    }, []);

  
      
  return (
    <div className={style.overlay}>
    <div className={style.header} data-aos="slide-down">
      <div className={style.container}>
        <div className={style.top}>
                <h3>Add New Agent</h3>
              <AiOutlineClose size={30} style={{cursor:"pointer"}} onClick={()=> {handle(false)}}/>
        </div>
        <div className={style.background}>
                <div className={style.name}>
                  <label>Agent&apos;s Full name <span>*</span></label>
                  <input type='text' placeholder='Enter your Agent name' onChange={(e) => setFullname(e.target.value)}/>
                </div>
                <div className={style.name}>
                  <label>Phone Number (<span>*</span>Must be attached to your BVN)</label>
                  <input type='number' placeholder='Enter your Phone Number linked to your BVN' onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <div className={style.name}>
                  <label>Business Name <span>*</span></label>
                  <input type='text' placeholder='Enter your Business name' onChange={(e) => setBusinessname(e.target.value)}/>
                </div>
                <div className={style.name}>
                  <label>Email <span>*</span></label>
                  <input type='email' placeholder='Enter your Government Issued ID' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={style.name}>
                  <label>Business Address <span>*</span></label>
                  <input type='text' placeholder='Enter your Business Address' onChange={(e) => setBusinessaddress(e.target.value)}/>
                </div>

                <div className={style.name}>
                <label>State <span>*</span></label>
                  <select onChange={(e) => setState(e?.target?.value)}>
                      {sortState && sortState[0]?.map((d)=>{
                          return (
                            <option>{d}</option>
                          )
                        })}
                    </select>
                </div>

                <div className={style.name}>
                  <label>Region <span>*</span></label>
                  <input type='text' placeholder='Enter your Local Government Area' onChange={(e) => setRegion(e.target.value)}/>
                </div>

                <div className={style.name}>
                  <label>Local Government Area <span>*</span></label>
                  <select onChange={(e) => setLocalgovt(e?.target?.value)}>
                  {getLcg && getLcg[0]?.map((d)=>{
                        return (
                        <option>{d}</option>
                        )
                      })}
                </select>
                </div>
                
                <div className={style.btn}>
              <button onClick={submithandler}> {loading ?<ClipLoader loading={loading} size={20} color={color}/>:"Submit"}</button>
                </div>
            </div>

      </div>
      
  </div>
         </div>
  )
}

export default New