import React, { useState, useEffect } from "react";
import style from "../styles/electricitycommission.module.css";
import Axios from "axios";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
function Setcommission({ cancelCommission }) {
  const [server, setServer] = useState();

  const [service_name, setService_name] = useState();
  const [biller_name, setBiller_name] = useState("mtn");
  const [payment_mode, setPayment_mode] = useState("cash");
  const [commission, setCommission] = useState();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("whit9e");

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
  // console.log(server);

  async function submithandler(e) {
    e.preventDefault();
    setLoading(true);
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
    setLoading(false);
    // alert(errors?.[0].message);
  }
  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.header}>
          <h1>Set airtime commission</h1>
          <AiOutlineClose
            size={25}
            onClick={() => {
              cancelCommission(false);
            }}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
        <div className={style.gridout}>
          <div className={style.biller}>
            <label>
              Service Name <span>*</span>
            </label>
            <select>
              <option>airtime</option>
            </select>
          </div>
          <div className={style.textinput}>
            <label>
              Service ID <span>*</span>
            </label>
            <input type="number" placeholder="26382921" />
          </div>
          <div className={style.biller}>
            <label>
              Biller Name <span>*</span>
            </label>
            <select>
              <option>airtel</option>
              <option>glo</option>
              <option>9mobile</option>
              <option>mtn</option>
            </select>
          </div>
          <div className={style.textinput}>
            <label>
              Commission Percentage <span>*</span>
            </label>
            <input type="number" placeholder="1.2" />
          </div>
        </div>

        <div className={style.submit}>
          <button>Set Commission</button>
        </div>
      </div>
    </div>
  );
}

export default Setcommission;
