import React, { useState, useEffect } from "react";
import style from "../styles/modal2.module.css";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
function Modal3({ cancelmodal3 }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState();
  // for the input tags
  const [amount, setAmount] = useState();
  const [narration, setNarration] = useState();
  // second modal
  const [saved, setSaved] = useState(false);
  const [multiple, setMultiple] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  function handler() {
    console.log(text, amount, narration);
  }

  return (
    <>
      {saved ? (
        ""
      ) : (
        <div className={style.container}>
          <div className={style.white} data-aos="slide-down">
            <div className={style.header}>
              <h1>Fund Agent&apos;s Account</h1>
              <AiOutlineClose
                size={25}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  cancelmodal3(false);
                }}
              />
            </div>
            <div className={style.payment} onClick={() => setOpen(!open)}>
              <label>Funding Method</label>
              <div className={style.method}>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  placeholder="Select your Funding Method"
                />
                <AiFillCaretDown size={23} />
              </div>
              {open ? (
                <div className={style.btn}>
                  <button
                    onClick={(e) => {
                      setText(e.target.textContent), setMultiple(false);
                    }}
                  >
                    Individual
                  </button>
                  <button
                    onClick={(e) => {
                      setText(e.target.textContent), setMultiple(true);
                    }}
                  >
                    Multiple (All)
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={style.naration}>
              <div className={style.amount}>
                <label>Amount</label>
                <input
                  type="number"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  placeholder="Enter Amount"
                />
              </div>

              <div className={style.amount}>
                <label>Narration</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setNarration(e.target.value);
                  }}
                  placeholder="Enter Description (optional)"
                />
              </div>

              {multiple ? (
                <div className={style.bulk}>
                  <label>Bulk Upload</label>
                  <div className={style.fileinput}>
                    <input type="file" id="file" className={style.file} />
                    <label for="file">
                      <BsUpload /> &nbsp;Upload Multiple Agent File
                    </label>
                  </div>
                </div>
              ) : (
                ""
              )}

              {multiple ? (
                ""
              ) : (
                <div className={style.agentaccount_number}>
                  <label>Agent Account Number</label>
                  <input
                    type="number"
                    placeholder="Enter Agent's Account Number"
                  />
                </div>
              )}
            </div>

            <div
              className={style.proceed}
              onClick={() => {
                setSaved(true);
                setTimeout(() => {
                  cancelmodal3(false);
                }, 2000);
              }}
            >
              <button onClick={handler}>Proceed</button>
            </div>
          </div>
        </div>
      )}

      {saved ? (
        <div className={style.savings}>
          <div className={style.saved}>
            <Image src="/saved.png" width={50} height={50} priority />
            <h1>Transaction Successful</h1>
            <p>Your Agent(s) will be credited shortly.</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal3;
