import React, { useState, useEffect } from "react";
import style from "../styles/Setcommission.module.css";
import Axios from "axios";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
function Setcommission({ cancelCommission }) {
  const [server, setServer] = useState();

  const [service_name, setService_name] = useState();
  const [biller_name, setBiller_name] = useState();
  const [payment_mode, setPayment_mode] = useState();
  const [commission, setCommission] = useState();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const details = { service_name, biller_name, payment_mode, commission };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}manager/provider/commission`,
      config
    ).then((response) => {
      // console.log(response.data)
      setServer(response?.data?.data?.providers);
    });
  }, []);
  console.log(server);

  async function submithandler(e) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}manager/provider/commission`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(details),
      }
    );
    const server = await response.json();
    console.log(server);
  }
  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.heading}>
          <h1>Set Commission</h1>
          <AiOutlineClose
            size={30}
            onClick={() => {
              cancelCommission(false);
            }}
          />
        </div>

        <div className={style.inputs}>
          <div className={style.billername}>
            <label>
              Service name<span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.caret}>
              <input
                onChange={(e) => {
                  setService_name(e.target.value);
                }}
                type="text"
                placeholder="airtime"
              />
            </div>
          </div>

          <div className={style.name}>
            <label>
              Biller Name <span>*</span>
            </label>
            <select
              onChange={(e) => {
                setBiller_name(e.target.value);
              }}
            >
              <option>MTN</option>
              <option>GLO</option>
              <option>AIRTEL</option>
              <option>9MOBILE</option>
            </select>
          </div>

          <div className={style.name} style={{ paddingTop: "30px" }}>
            <label>
              Payment mode <span>*</span>
            </label>
            <select
              onChange={(e) => {
                setPayment_mode(e.target.value);
              }}
            >
              <option>CASH</option>
              <option>CARD</option>
            </select>
          </div>
        </div>

        <div className={style.commissionpercentage}>
          <label>
            Commission Percentage <span style={{ color: "red" }}>*</span>
          </label>
          <div className={style.percentage}>
            <input
              className={style.percent}
              type="number"
              placeholder="1.2%"
              onChange={(e) => {
                setCommission(e.target.value);
              }}
            />
            <p style={{ color: "blue" }}>Edit Commission</p>
          </div>
          {/* <h2>Select Provider</h2> */}
        </div>

        {/* <div className={style.inputs}>   
           <div className={style.billername}>
             <label>Primary Provider <span style={{color:"red"}}>*</span></label>
             <div className={style.caret}>
                <input type="text" placeholder="Select your default provider"/>
                <AiFillCaretDown/>
             </div>
           </div>
           <div className={style.billername}>
             <label>Secondary Provider(optional) </label>
             <div className={style.caret}>
                <input type="text" placeholder="Select your Secondary Provider"/>
              <AiFillCaretDown/>
             </div>
           </div>
        </div>    */}

        <div className={style.submit} onClick={submithandler}>
          <button>Set Commission</button>
        </div>
      </div>
    </div>
  );
}

export default Setcommission;
