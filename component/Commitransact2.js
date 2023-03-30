import React, { useState, useEffect } from "react";
import style from "../styles/committransact.module.css";
import Axios from "axios";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";

function Commitransact({ canceltransact2 }) {
  const [commission, setCommission] = useState("");
  const [service_type, setService_type] = useState("withdrawal");
  const [payment_mode, setPayment_mode] = useState("card");
  const [deposit, setDeposit] = useState();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");
  const details = { commission, service_type, payment_mode };

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  // useEffect(() => {
  //   Axios.get(
  //     `${process.env.NEXT_PUBLIC_API}manager/commission/funds/?type=deposit`,
  //     config
  //   ).then((response) => {
  //     // console.log(response?.data)
  //     setDeposit(response?.data);
  //   });
  // }, []);
  // console.log(deposit);

  async function Handler(e) {
    e.preventDefault();
    setLoading(true);
    canceltransact2(false);
    // console.log(details);
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API}manager/commission/funds`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(details),
    //   }
    // );
    // const server = await response.json();
    // // console.log(server);
    // setLoading(false);
    // canceltransact2(false);
    // window.location = "/commission";
  }

  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.heading}>
          <h1>Amount Range</h1>
          <AiOutlineClose
            size={30}
            onClick={() => {
              canceltransact2(false);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={style.flexout}>
          <div className={style.input}>
            <label>
              Amount Range<span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="1000-5000"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>

          <div className={style.input}>
            <label>Set Charges</label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="50"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>
              Amount Range<span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="5,0001-10,000"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>Set Charges</label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="100"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>
              Amount Range<span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="10,001 - 20,000"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>Set Charges</label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="200"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>
              Amount Range<span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="20,001 - 50,000"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>Set Charges</label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="300"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>
              Amount Range<span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="50,001 - 500,000"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
          </div>
          <div className={style.input}>
            <label>Set Charges</label>
            <div className={style.percentage}>
              <input
                type="number"
                placeholder="500"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
              <AiFillCaretDown size={20} />
            </div>
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

          {/* <div className={style.input}>
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
          </div> */}
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
