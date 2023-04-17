import React, { useState, useEffect } from "react";
import style from "../styles/modal2.module.css";
import styles from "../styles/modal1.module.css";
import Image from "next/image";
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiOutlineDown,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal1sample from "../component/Modal1sample";
import { NumericFormat } from "react-number-format";
function Modal2({ cancelmodal2 }) {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState();
  const [fund, setFund] = useState(false);

  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      {/* {modalsample ?<Modal1sample closemodalsample={setModalsample}/>:""} */}
      {fund ? (
        ""
      ) : (
        <div className={style.container}>
          <div className={style.white} data-aos="slide-down">
            <div className={style.header}>
              <h1>FUND WALLET</h1>
              <AiOutlineCloseCircle
                size={40}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  cancelmodal2(false);
                }}
              />
            </div>

            <div className={style.payment} onClick={() => setOpen(!open)}>
              <label>Payment Method</label>
              <div className={style.method}>
                <input
                  type="text"
                  value={text}
                  placeholder="select your payment method"
                />
                <AiFillCaretDown size={23} />
              </div>
              {open ? (
                <div className={style.btn}>
                  <button onClick={(e) => setText(e.target.textContent)}>
                    Credit Card
                  </button>
                  <button onClick={(e) => setText(e.target.textContent)}>
                    Bank Transfer
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={style.naration}>
              <div className={style.amount}>
                <label>Amount</label>
                <NumericFormat
                  prefix={"₦"}
                  thousandSeparator=","
                  placeholder="Enter Amount"
                />
              </div>

              <div className={style.amount}>
                <label>Narration</label>
                <input type="text" placeholder="Enter Description (optional)" />
              </div>
            </div>

            <div
              className={style.proceed}
              onClick={() => {
                // cancelmodal2(false)
                setFund(true);
                setTimeout(() => {
                  cancelmodal2(false);
                }, 2000);
              }}
            >
              <button>Proceed</button>
            </div>
          </div>
        </div>
      )}

      {/* ACCOUNT FUNDING */}

      {fund ? (
        <div className={styles.modal}>
          <div className={style.saved}>
            <Image src="/saved.png" width={50} height={50} priority />
            <h1>Transaction Successful</h1>
            <p>Your Account will be credited shortly</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal2;
