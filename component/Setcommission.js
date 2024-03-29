import React, { useState, useEffect } from "react";
import style from "../styles/electricitycommission.module.css";
import Axios from "axios";
import {
  AiOutlineCaretDown,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
function Setcommission({ cancelCommission }) {
  const [server, setServer] = useState();

  const [service_name, setService_name] = useState("airtime");
  const [service_id, setService_id] = useState();
  const [biller_name, setBiller_name] = useState("mtn");
  const [commission, setCommission] = useState();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const details = { service_name, service_id, biller_name, commission };

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  // useEffect(() => {
  //   Axios.get(
  //     `${process.env.NEXT_PUBLIC_API}manager/provider/commission`,
  //     config
  //   ).then((response) => {
  //     setServer(response?.data?.data?.providers);
  //   });
  // }, []);
  // console.log(server);

  async function submithandler(e) {
    e.preventDefault();
    console.log(details);
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
          <AiOutlineCloseCircle
            size={40}
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
            <div className={style.caret}>
              <select>
                <option>airtime</option>
              </select>
              <AiOutlineCaretDown />
            </div>
          </div>
          <div className={style.textinput}>
            <label>
              Service ID <span>*</span>
            </label>
            <input
              type="number"
              placeholder="26382921"
              onChange={(e) => {
                setService_id(e.target.value);
              }}
            />
          </div>
          <div className={style.biller}>
            <label>
              Biller Name <span>*</span>
            </label>
            <div className={style.caret}>
              <select>
                <option>airtel</option>
                <option>glo</option>
                <option>9mobile</option>
                <option>mtn</option>
              </select>
              <AiOutlineCaretDown />
            </div>
          </div>
          <div className={style.textinput}>
            <label>
              Commission Percentage <span>*</span>
            </label>
            <input
              type="number"
              placeholder="1.2"
              onChange={(e) => {
                setCommission(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={style.submit} onClick={submithandler}>
          <button>Set Commission</button>
        </div>
      </div>
    </div>
  );
}

export default Setcommission;
