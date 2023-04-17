import React, { useState, useEffect } from "react";
import style from "../styles/agent.module.css";
import {
  AiOutlineDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { myterminals } from "./Terminaldashboard";
function Term({ check, search }) {
  console.log(search);
  console.log(myterminals);
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th style={{ display: "flex" }}>
              ASSIGNED AGENT NAME <TiArrowUnsorted />
            </th>
            <th>
              AGENT ID
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL ID
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL LOCATION
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL SERIAL NUMBER
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL MANUFACTURER
              <TiArrowUnsorted />
            </th>
            <th>
              TRANSACTION LIMIT
              <TiArrowUnsorted />
            </th>
            <th>
              PROFILE
              <TiArrowUnsorted />
            </th>
            <th>
              STATUS
              <TiArrowUnsorted />
            </th>
          </tr>
        </thead>
        {myterminals &&
          myterminals
            ?.filter((m) => {
              if (!search?.length) return m;
              else if (
                Object.values(m).some((value) =>
                  value?.toString()?.toLowerCase()?.includes(search)
                )
              ) {
                return m;
              }
            })
            .map((m) => {
              return (
                <>
                  <tr key={m?.id}>
                    <td>{m?.assigned_agent_name}</td>
                    <td>{m?.Agent_id}</td>
                    <td>{m?.Terminal_id}</td>
                    <td>{m?.Terminal_location}</td>
                    <td>{m?.Terminal_serial_number}</td>
                    <td>{m?.Terminal_manufacturer}</td>
                    <td>{m?.Transaction_limit}</td>
                    <td>{m?.Profile}</td>
                    <td>{m?.status}</td>
                  </tr>
                </>
              );
            })}
      </table>
      <div className={style.footer}>
        <span>Showing 1 to 5 of 100 entries</span>
        <div className={style.btn}>
          <button
            style={{ border: "1px solid red", color: "red" }}
            onClick={() => {
              if (counter === 1) {
                setCounter(1);
              }
              setCounter(1);
            }}
          >
            <AiOutlineArrowLeft />
            &nbsp;Previous
          </button>
          <div className={style.btn1}>
            <button>{counter}</button>
          </div>
          <button
            style={{ border: "1px solid #1B59F8", color: "#1B59F8" }}
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Next&nbsp;
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Term;
