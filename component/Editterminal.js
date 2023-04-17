import React from "react";
import style from "../styles/locateterminal.module.css";
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiOutlineCloseCircle,
} from "react-icons/ai";
function Editterminal({ closeEdit }) {
  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div
          className={style.close}
          onClick={() => {
            closeEdit(false);
          }}
          style={{ cursor: "pointer", color: "#1B59F8" }}
        >
          <AiOutlineCloseCircle size={45} />
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
              Terminal&apos;s Location <span style={{ color: "red" }}>*</span>
            </label>
            <div className={style.terminal}>
              <input placeholder="33 Marina Rd, Lagos Island 1012334, Lagos" />
              <AiFillCaretDown />
            </div>
          </div>
          <div
            className={style.submit}
            onClick={() => {
              closeEdit(false);
            }}
          >
            <button>Search Terminal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editterminal;
