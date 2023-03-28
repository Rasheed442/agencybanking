import React, { useState, useEffect } from "react";
import style from "../styles/committransact.module.css";
import Axios from "axios";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

function Commitransact({ canceltransact }) {
  const [commission, setCommission] = useState("");
  const [service_type, setService_type] = useState("withdrawal");
  const [payment_mode, setPayment_mode] = useState("card");

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");
  const details = { commission, service_type, payment_mode };

  async function Handler(e) {
    e.preventDefault();
    setLoading(true);
    console.log(details);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}manager/commission/funds`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(details),
      }
    );
    const server = await response.json();
    console.log(server);
    setLoading(false);
    canceltransact(false);
  }

  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.heading}>
          <h1>Set Commission for cash In Transactions</h1>
          <AiOutlineClose
            size={30}
            onClick={() => {
              canceltransact(false);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={style.flexout}>
          <div className={style.servicetype}>
            <label>
              Service type<span>*</span>
            </label>
            <select
              onChange={(e) => {
                setService_type(e.target.value);
              }}
            >
              <option>withdrawal</option>
              {/* <option>deposit</option> */}
            </select>
          </div>

          <div className={style.servicetype}>
            <label>
              Payment mode<span>*</span>
            </label>
            <select
              onChange={(e) => {
                setPayment_mode(e.target.value);
              }}
            >
              <option>card</option>
              <option>cash</option>
            </select>
          </div>

          <div className={style.input}>
            <label>Commission Percentage</label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="1.5%"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <p>Edit Commission</p>
            </div>
          </div>
          <button onClick={Handler}>
            {loading ? (
              <ClipLoader loading={loading} size={20} color={color} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Commitransact;
