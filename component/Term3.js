import React, { useState } from "react";
import style from "../styles/agent.module.css";
import { AiOutlineCaretDown } from "react-icons/ai";
import Map from "../component/Map";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Term3() {
  const [loading, setLoading] = useState(false);
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
      <div>
        <Map />
      </div>
    </div>
  );
}

export default Term3;
