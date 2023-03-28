import React, { useState, useEffect } from "react";
import style from "../styles/committransact.module.css";
import Axios from "axios";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

function Commitransact({ canceltransact2 }) {
  const [percentage, setPercentage] = useState("");
  const [commission, setCommission] = useState("");
  const [service_type, setService_type] = useState("withdrawal");
  const [payment_mode, setPayment_mode] = useState("card");

  const details = { percentage, commission, service_type, payment_mode };
  async function Handler(e) {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}manager/commission/funds`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ details }),
      }
    );
    const server = await response.json();
    console.log(server);
  }

  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.heading}>
          <h1>Set Commission for cash out Transactions</h1>
          <AiOutlineClose
            size={30}
            onClick={() => {
              canceltransact2(false);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={style.flexout}>
          <div className={style.servicetype}>
            <label>
              Service type<span>*</span>
            </label>
            <select>
              <option>Withdrawal</option>
              <option>Deposit</option>
            </select>
          </div>

          <div className={style.servicetype}>
            <label>
              Payment mode<span>*</span>
            </label>
            <select>
              <option>Card</option>
              <option>Cash</option>
            </select>
          </div>

          <div className={style.input}>
            <label>Commission Percentage</label>
            <div className={style.percentage}>
              <input type="number" placeholder="1.5%" />
              <p>Edit Commission</p>
            </div>
          </div>
          <button onClick={Handler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Commitransact;
