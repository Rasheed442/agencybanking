import React, { useState, useEffect } from "react";
import style from "../styles/committransact.module.css";
import Axios from "axios";
import {
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlinePlus,
  AiFillDelete,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";

function Commitransact({ canceltransact2 }) {
  const [commission, setCommission] = useState("");
  const [service_type, setService_type] = useState("withdrawal");
  const [payment_mode, setPayment_mode] = useState("card");
  const [deposit, setDeposit] = useState();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");
  const details = { commission, service_type, payment_mode };

  const [formList, setFormList] = useState([
    { range1: "yyuue", range2: "gjdjs", charges: 3333, button: false },
  ]);

  const addList = () => {
    setFormList([
      ...formList,
      { range1: "yyuue", range2: "gjdjs", charges: 3333, button: true },
    ]);
  };

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API_COMMISSION}commission/manager`,
      config
    ).then((response) => {
      // console.log(response?.data);
      setFormList(response?.data.data.allServiceCommissions);
      console.log(formList);
    });
  }, []);
  async function Handler(e) {
    e.preventDefault();
    setLoading(true);
    canceltransact2(false);
  }

  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.heading}>
          <h1>Set commission for withdrawals</h1>
          <AiOutlineCloseCircle
            size={40}
            onClick={() => {
              canceltransact2(false);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>

        {formList?.map((item, index) => {
          return (
            <div className={style.flexout}>
              <div className={style.input}>
                <label>
                  Minimum Range<span style={{ color: "red" }}>*</span>
                </label>
                <div className={style.percentage}>
                  <input
                    type="number"
                    placeholder="1000"
                    onChange={(e) => {
                      setCommission(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={style.input}>
                <label>
                  Maximum range<span style={{ color: "red" }}>*</span>
                </label>
                <div className={style.percentage}>
                  <input
                    type="number"
                    placeholder="50"
                    onChange={(e) => {
                      setCommission(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={style.input}>
                <label>
                  Set Charges<span style={{ color: "red" }}>*</span>
                </label>
                <div className={style.percentage}>
                  <input
                    type="number"
                    placeholder="5,000"
                    onChange={(e) => {
                      setCommission(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={style.input}>
                <label>
                  Commission Percentage<span style={{ color: "red" }}>*</span>
                </label>
                <div className={style.percentage}>
                  <input
                    type="number"
                    placeholder="1.7"
                    onChange={(e) => {
                      setCommission(e.target.value);
                    }}
                  />
                </div>
                {item?.button && (
                  <div
                    className={style.delete}
                    onClick={() => {
                      setFormList([
                        ...formList.slice(0, index),
                        ...formList.slice(index + 1),
                      ]);
                    }}
                  >
                    <button>
                      <AiFillDelete />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className={style.flexout}>
          <div className={style.addnew}>
            <button
              onClick={() => {
                addList();
              }}
            >
              Add New <AiOutlinePlus />
            </button>
          </div>
        </div>

        <div className={style.submit}>
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
