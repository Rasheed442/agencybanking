import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import style from "../styles/dispute.module.css";
import {
  AiTwotoneBell,
  AiOutlineDown,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import Table from "../component/Table";
import Caution from "../component/Caution";
import disputes from "../pages/dispute.json";
function dispute() {
  const [counter, setCounter] = useState(1);
  const [oneData, setOneData] = useState([]);
  const [username, setUsername] = useState();

  const [show, setShow] = useState(false);
  console.log(oneData);
  console.log(show);

  useEffect(() => {
    setUsername(localStorage.getItem("userName"));
  }, [typeof window !== "undefined" ? localStorage.getItem("userName") : null]);

  return (
    <div className={style.background}>
      {show ? <Caution data={oneData} check={setShow} /> : ""}
      <Sidebar />
      <div className={style.container}>
        <div className={style.main}>
          <h2>Dispute</h2>

          <div className={style.profile}>
            <div className={style.reminder}>
              <AiTwotoneBell
                size={27}
                style={{
                  backgroundColor: "gainsboro",
                  color: "gray",
                  borderRadius: "10px",
                }}
              />
              <Image src="/dot.png" width={20} height={20} priority />
            </div>
            <div className={style.line}></div>
            <Link href="setting">
              <Image src="/profile.png" width={40} height={40} priority />
            </Link>
            <div className={style.name}>
              <p style={{ textTransform: "capitalize" }}>
                {username} <AiOutlineDown size={12} />
              </p>
              <span>Agent Manager</span>
            </div>
          </div>
        </div>

        <div className={style.gray}>
          <div className={style.white}>
            <div className={style.header}>
              <p>Agent Transaction Dispute</p>
              <div className={style.search}>
                <MdSearch size={20} style={{ color: "#lightgray" }} />
                <input placeholder="Search Agent name, Agent ID, Business name e.tc" />
              </div>
            </div>

            <Table
              isClick={() => setShow(true)}
              handleOne={(id) => {
                setOneData(disputes?.find((d) => d.id === id));
              }}
            />

            <div className={style.entries}>
              <p>Showing 1 to 50 of 100 entries</p>
              <div className={style.btn}>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid red",
                    color: "red",
                  }}
                  onClick={() => {
                    setCounter(counter - 1);
                    if (counter === 0) {
                      setCounter(0);
                    }
                  }}
                >
                  Previous
                </button>
                <button style={{ border: "1px solid blue" }}>{counter}</button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid gray",
                    color: "blue",
                    width: "5em",
                  }}
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  Next <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dispute;
