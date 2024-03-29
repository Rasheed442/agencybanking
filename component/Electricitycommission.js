import React, { useState } from "react";
import style from "../styles/electricitycommission.module.css";
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";
function Electricitycommission({ cancelelectricity }) {
  const [service_name, setService_name] = useState();
  const [biller_name, setBiller_name] = useState("mtn");
  const [payment_mode, setPayment_mode] = useState("cash");
  const [commission, setCommission] = useState();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");
  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.header}>
          <h1>Set electricity commission</h1>
          <AiOutlineClose
            size={35}
            onClick={() => {
              cancelelectricity(false);
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
                <option>Ikeja Electric</option>
              </select>
              <AiOutlineCaretDown />
            </div>
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
            <div className={style.caret}>
              <select>
                <option>Prepaid</option>
              </select>
              <AiOutlineCaretDown />
            </div>
          </div>
          <div className={style.textinput}>
            <label>
              Commision <span>*</span>
            </label>
            <input type="number" placeholder="1.2%" />
          </div>
        </div>

        <div className={style.submit}>
          <button>Set Commission</button>
        </div>
      </div>
    </div>
  );
}

export default Electricitycommission;
