import React from "react";
import style from "../styles/changepassword.module.css";
import { AiOutlineClose } from "react-icons/ai";
function Changepassword({ Close }) {
  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.top}>
          <div className={style.header}>
            <h1>Change Password</h1>
            <AiOutlineClose
              size={25}
              style={{ cursor: "pointer" }}
              onClick={() => {
                Close(false);
              }}
            />
          </div>

          <div className={style.name}>
            <label>
              Existing Password <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={style.name}>
            <label>
              New Password <span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={style.name}>
            <label>
              Repeat New Password <span>*</span>
            </label>
            <input type="text" />
          </div>
          <button
            onClick={() => {
              Close(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
