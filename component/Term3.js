import React from "react";
import style from "../styles/agent.module.css";
import { AiOutlineCaretDown } from "react-icons/ai";
function Term3() {
  return (
    <div>
      <div className={style.fram}>
        <div className={style.select}>
          <select>
            <option>Region(Location):All</option>
          </select>
          <AiOutlineCaretDown size={12} />
        </div>
        <div className={style.select}>
          <select>
            <option>Region(Location):All</option>
          </select>
          <AiOutlineCaretDown size={12} />
        </div>
        <button>Apply</button>
      </div>
    </div>
  );
}

export default Term3;
