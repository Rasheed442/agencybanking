import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import style from "../styles/reporting.module.css";
import {
  AiTwotoneBell,
  AiOutlineDown,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { TiArrowUnsorted } from "react-icons/ti";
import Image from "next/image";
import Axios from "axios";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { BsFilter, BsDownload } from "react-icons/bs";
import Table from "../component/Table";
import ProtectedRoute from "../component/ProtectedRoute";

// import disputes from "./dispute.json"

function dispute() {
  const [username, setUsername] = useState();
  const [counter, setCounter] = useState(1);
  const [server, setServer] = useState();

  useEffect(() => {
    setUsername(localStorage.getItem("userName"));
  }, [typeof window !== "undefined" ? localStorage.getItem("userName") : null]);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    Axios.get(`${process.env.NEXT_PUBLIC_API}request`, config).then(
      (response) => {
        console.log(response?.data);
        setServer(response?.data?.data?.requests);
      }
    );
  }, []);
  console.log(server);

  return (
    <ProtectedRoute>
      <div className={style.background}>
        <Sidebar />
        <div className={style.container}>
          <div className={style.main}>
            <h2>Request</h2>

            <Link
              href="/profile"
              onClick={() => {
                localStorage.setItem("currL", "/commission");
              }}
            >
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
                <Image src="/profile.png" width={40} height={40} priority />
                <div className={style.name}>
                  <p style={{ textTransform: "capitalize", color: "black" }}>
                    {username} <AiOutlineDown size={12} />
                  </p>
                  <span>Agent Manager</span>
                </div>
              </div>
            </Link>
          </div>

          <div className={style.gray}>
            <div className={style.white}>
              <div className={style.header}>
                <p>Request</p>
                <div className={style.search}>
                  <MdSearch size={20} style={{ color: "gray" }} />
                  <input placeholder="Search Agent name, Agent ID, Business name e.tc" />
                </div>
                <div className={style.filter}>
                  <button>
                    Filter <BsFilter size={20} style={{ color: "#1B59F8" }} />
                  </button>
                </div>
              </div>
              <div className={style.accountfunding}>
                <button style={{ backgroundColor: "#1B59F8", color: "white" }}>
                  FUND ACCOUNT
                </button>
                <button>TRANSACTION LIMIT</button>
                <button>COMMISSION</button>
              </div>
              <div className={style.main}>
                <div className={style.zone}>
                  <div className={style.state}>
                    <p>STATE DATE</p>
                    <input type="date" />
                  </div>
                  <div className={style.state}>
                    <p>END DATE</p>
                    <input type="date" />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#1B59F8",
                      width: "120px",
                      // opacity: "0.2",
                      marginTop: "15px",
                    }}
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>
                      AGENT NAME <TiArrowUnsorted size={11} />
                    </th>
                    <th>AGENT ID </th>
                    <th>
                      REQUEST MESSAGE
                      <TiArrowUnsorted size={11} />
                    </th>
                    <th>
                      REQUEST TYPE <TiArrowUnsorted size={11} />
                    </th>
                    <th>
                      DURATION <TiArrowUnsorted size={11} />
                    </th>
                    <th>
                      DATE <TiArrowUnsorted size={11} />
                    </th>
                    <th>STATUS </th>
                    <th>
                      REQUEST REF.CODE <TiArrowUnsorted size={11} />
                    </th>
                  </tr>
                </thead>

                {server?.map((d) => {
                  return (
                    <tr>
                      <td
                        style={{
                          textTransform: "capitalize",
                          cursor: "pointer",
                        }}
                      >
                        {d?.name}
                      </td>
                      <td>{d?.user_id}</td>
                      <td style={{ textTransform: "capitalize" }}>
                        {d?.message}
                      </td>
                      <td style={{ textTransform: "uppercase" }}>{d?.type}</td>
                      <td style={{ textTransform: "uppercase" }}>
                        {d?.duration}
                      </td>
                      <td style={{ textTransform: "uppercase" }}>
                        {d?.createdAt}
                      </td>

                      <td
                        style={{
                          margin: "5px",
                          paddling: "0",
                          lineHeight: "10px",
                          display: "inline-flex",
                          borderRadius: "5px",
                          textTransform: "uppercase",
                          backgroundColor: `${
                            d.status === "RESOLVED"
                              ? "#00F4001A"
                              : d?.status === "PENDING"
                              ? "#E0191933"
                              : ""
                          }`,
                          color: `${
                            d?.status === "RESOLVED"
                              ? "green"
                              : d.status === "PENDING"
                              ? "RED"
                              : ""
                          }`,
                        }}
                      >
                        {d?.status}
                      </td>

                      <td style={{ textTransform: "uppercase" }}>
                        {d.reference}
                      </td>
                    </tr>
                  );
                })}
              </table>
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
                    }}
                  >
                    Previous
                  </button>
                  <button style={{ border: "1px solid gray" }}>
                    {counter}
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid blue",
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
    </ProtectedRoute>
  );
}

export default dispute;
