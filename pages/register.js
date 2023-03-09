import React from 'react'
import style from "../styles/register.module.css"
import Image from "next/image"
function register() {
  return (
    <div className={style.background}>
      
  <div className={style.container}>
      <h1>Register your Business</h1>    
    <div className={style.grid}>
       <div className={style.name}>
        <label>Business Name</label>
        <input type='text' placeholder="Enter Your Business Name"/>
       </div>

       <div className={style.name}>
        <label>Email Address (optional)</label>
        <input type='email' placeholder="Enter Your Business Email Address"/>
       </div>

       <div className={style.name}>
        <label>Business Address</label>
        <input type='text' placeholder="Enter Your Business Address"/>
       </div>

       <div className={style.name}>
        <label>Phone Number</label>
        <input type='text' placeholder="Enter Your Phone number"/>
       </div>

       <div className={style.name}>
        <label>Local Government Area</label>
        <input type='text' placeholder="Enter Your Local government area"/>
       </div>

       <div className={style.name}>
        <label>State</label>
        <input type='text' placeholder="Enter Your State"/>
       </div>

       <div className={style.name}>
        <label>Government Issued ID(BVN, NIN)</label>
        <input type='text' placeholder="Enter Your Government Issued ID"/>
       </div>

       <div className={style.name}>
        <label>Enter Business Registration Details</label>
        <input type='text' placeholder="Enter Business Reg Details"/>
       </div>
       <div></div>
       <button>Next</button>
     </div>
</div>

   {/* <div className={style.eclipse}>
    <Image src="/eclipse1.png" width={700} height={700} priority/>
   </div> */}

    </div>
  )
}

export default register