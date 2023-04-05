import React from "react";
import style from "../styles/locateterminal.module.css";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
function Locate_terminal({ closeterminal }) {
  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div
          className={style.close}
          onClick={() => {
            closeterminal(false);
          }}
        >
          <AiOutlineClose size={35} />
        </div>

        <div className={style.top}>
          <div className={style.agent}>
            <label>
              Agent/Terminal ID <span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.terminal}>
              <input placeholder="223456776544" />
            </div>
          </div>
          <div className={style.agent}>
            <label>
              Terminal Location Status <span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.terminal}>
              <select>
                <option>Active</option>
              </select>
              <AiFillCaretDown />
            </div>
          </div>
          <div className={style.agent}>
            <label>
              Set Location Range Limit <span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.terminal}>
              <input placeholder="223456776544" />
              <AiFillCaretDown />
            </div>
          </div>
          <div
            className={style.submit}
            onClick={() => {
              closeterminal(false);
            }}
          >
            <button>Search Terminal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locate_terminal;
