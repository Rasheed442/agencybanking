import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import style from "../styles/reporting.module.css";
import {
  AiTwotoneBell,
  AiOutlineDown,
  AiOutlineArrowRight,
} from "react-icons/ai";
import disputes from "../pages/dispute.json";
import Image from "next/image";
import Transaction from "../component/Transaction";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { BsFilter, BsDownload } from "react-icons/bs";
import Caution from "../component/Caution";
import { TiArrowUnsorted } from "react-icons/ti";
import ProtectedRoute from "../component/ProtectedRoute";

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
    <ProtectedRoute>
      <div className={style.background}>
        {/* Side bar component */}
        <Sidebar />
        <div className={style.container}>
          <div className={style.main}>
            <h2>Reporting</h2>
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
                    {username} &nbsp;
                    <AiOutlineDown size={12} />
                  </p>
                  <span>Agent Manager</span>
                </div>
              </div>
            </Link>
          </div>

          <div className={style.gray}>
            <div className={style.white}>
              <div className={style.header}>
                <p>Reporting</p>
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

              <div className={style.main}>
                <div className={style.zone}>
                  <div className={style.state}>
                    <p>START DATE</p>
                    <input type="date" />
                  </div>
                  <div className={style.state}>
                    <p>END DATE</p>
                    <input type="date" />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#E6EDF",
                      width: "120px",
                      marginTop: "10px",
                    }}
                  >
                    Proceed
                  </button>
                </div>
                <button className={style.downloadbutton}>
                  <BsDownload /> Download Report
                </button>
              </div>

              <div className={style.gridout}>
                <div className={style.profil}>
                  <span>
                    AGENT NAME
                    <TiArrowUnsorted size={12} />
                  </span>
                  <p>James Adekola</p>
                  <p>Shola Adeniyi</p>
                  <p>Shola Adeniyi</p>
                  <p>Tayo Temitope</p>
                  <p>Tayo Temitope</p>
                  <p>Shola Adeniyi</p>
                  <p>Shola Adeniyi</p>
                  <p>James Adekola</p>
                  <p>James Adekola</p>
                  <p>James Adekola</p>
                  <p>Shola Adeniyi</p>
                  <p>Shola Adeniyi</p>
                  <p>Shola Adeniyi</p>
                  <p>Shola Adeniyi</p>
                  <p>Shola Adeniyi</p>
                </div>
                <div className={style.profil}>
                  <span>AGENT ID</span>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                  <p>N1123SB3</p>
                </div>

                <div className={style.profil}>
                  <span>
                    RESPONSE MESSAGE <TiArrowUnsorted size={12} />
                  </span>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                  <p>Transaction Approved</p>
                </div>
                <div className={style.profil}>
                  <span>
                    BUSINESS NAME &nbsp;
                    <TiArrowUnsorted size={12} />
                  </span>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                  <p>TM30 GLOBAL INTERNATIONAL</p>
                </div>
                <div className={style.profil}>
                  <span>
                    RESP.CODE <TiArrowUnsorted size={12} />
                  </span>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                  <p>00</p>
                </div>
                <div className={style.profil}>
                  <span>
                    TRANS.TYPE <TiArrowUnsorted size={12} />
                  </span>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                  <p style={{ color: "green" }}>Withdrawal</p>
                </div>
                <div className={style.profil}>
                  <span>
                    AMOUNT <TiArrowUnsorted size={12} />
                  </span>
                  <p>&#8358;150,000</p>
                  <p>&#8358;250,000</p>
                  <p>&#8358;170,000</p>
                  <p>&#8358;80,000</p>
                  <p>&#8358;96,000</p>
                  <p>&#8358;10,000</p>
                  <p>&#8358;52,000</p>
                  <p>&#8358;80,000</p>
                  <p>&#8358;96,000</p>
                  <p>&#8358;42,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                </div>
                <div className={style.profil}>
                  <span>
                    EARNINGS <TiArrowUnsorted size={12} />
                  </span>
                  <p>&#8358;150,000</p>
                  <p>&#8358;250,000</p>
                  <p>&#8358;170,000</p>
                  <p>&#8358;80,000</p>
                  <p>&#8358;96,000</p>
                  <p>&#8358;10,000</p>
                  <p>&#8358;52,000</p>
                  <p>&#8358;80,000</p>
                  <p>&#8358;96,000</p>
                  <p>&#8358;42,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                  <p>&#8358;40,000</p>
                </div>
                <div className={style.profil}>
                  <span>
                    DATE <TiArrowUnsorted size={12} />
                  </span>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                  <p>14 April 2022</p>
                </div>
                <div className={style.profil}>
                  <span>
                    STATUS <TiArrowUnsorted size={12} />
                  </span>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      borderRadius: "20px",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#FF3A441A",
                      color: "red",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    FAILED
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#FF3A441A",
                      color: "red",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    FAILED
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                  <p
                    style={{
                      backgroundColor: "#00F4001A",
                      color: "#008000",
                      width: "100%",
                    }}
                  >
                    SUCCESSFUL
                  </p>
                </div>
                <div className={style.profil}>
                  <span>
                    TRANSACTION REF <TiArrowUnsorted size={12} />
                  </span>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                  <p>WTH/23434663356866..</p>
                </div>
              </div>

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
