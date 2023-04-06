import React, { useState, useEffect, use } from "react";
import { AiOutlineSearch, AiTwotoneBell, AiOutlineDown } from "react-icons/ai";
import { MdStackedLineChart } from "react-icons/md";
import { BiLineChartDown } from "react-icons/bi";
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import Image from "next/image";
import Chart from "../component/Chart";
import Link from "next/link";
import Axios from "axios";
import style from "../styles/dashboard.module.css";
import Sidebar from "../component/Sidebar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Main() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [commission, setCommission] = useState([]);
  const [agent, setAgent] = useState([]);
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState();

  const [frame, setFrame] = useState("All-time");
  const [roles, setRoles] = useState("All-time");
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);

  // const username = typeof window !== 'undefined' ? window.localStorage.getItem('userName') : null
  const token =
    typeof window !== "undefined" ? window.localStorage.getItem("token") : null;

  // local storage inputs
  useEffect(() => {
    setUsername(localStorage.getItem("userName"));
  }, [typeof window !== "undefined" ? localStorage.getItem("userName") : null]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token && token}`,
      },
    };
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}dashboard`,
      config,
      setLoading(true)
    ).then((response) => {
      setData(response?.data);
      setLoading(false);
    });
  }, []);
  console.log(data);

  return (
    <>
      <div className={style.topp}>
        <Sidebar />
        <div className={style.header}>
          <div className={style.container}>
            <h1>Dashboard</h1>
            <div
              className={style.icon}
              onClick={() => {
                setShow(true);
              }}
            >
              <AiOutlineMenu size={25} />
            </div>

            <div className={style.search}>
              <AiOutlineSearch size={20} style={{ color: "gray" }} />
              <input
                type="text"
                placeholder="Search Terminals ID, Agent and Agent Managers"
              />
            </div>
            <Link href="setting">
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
                  <div></div>
                </div>
                <div className={style.line}></div>
                <Image src="/profile.png" width={40} height={40} priority />
                <div className={style.name}>
                  <p>
                    {username} <AiOutlineDown size={12} />
                  </p>
                  <span>Agent Manager</span>
                </div>
              </div>
            </Link>
          </div>

          <div className={style.bg}>
            <div className={style.options}>
              <div className={style.timeframe}>
                <select>
                  <option>Timeframe:All-time</option>
                  <option>Timeframe:This Year</option>
                  <option>Timeframe:Last 7 days</option>
                  <option>Timeframe:This month</option>
                  <option>Timeframe:This Year</option>
                  <option>Timeframe:All Time</option>
                </select>
                <div>
                  <AiFillCaretDown />
                </div>
              </div>

              <div className={style.frame}>
                <p
                  onClick={() => {
                    setDrop1(!drop1);
                  }}
                >
                  {" "}
                  User Roles:{roles}{" "}
                  <AiFillCaretDown style={{ color: "black" }} />
                </p>
                <div className={style.cor}>
                  {drop1 ? (
                    <div className={style.searching}>
                      <AiOutlineSearch />
                      <input type="text" placeholder="Search" />
                    </div>
                  ) : (
                    ""
                  )}
                  {drop1 ? <span>GROUPS</span> : ""}
                  {drop1 ? (
                    <span
                      onClick={(e) => {
                        setRoles(e.target.textContent);
                      }}
                    >
                      <input type="checkbox" /> All Users Roles{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  {drop1 ? (
                    <span
                      onClick={(e) => {
                        setRoles(e.target.textContent);
                      }}
                    >
                      <input type="checkbox" /> Agent Managers{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  {drop1 ? (
                    <span
                      onClick={(e) => {
                        setRoles(e.target.textContent);
                      }}
                    >
                      <input type="checkbox" /> Agents{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  {drop1 ? <hr /> : ""}
                  {drop1 ? <span>Agent Managers</span> : ""}
                  {drop1 ? (
                    <span
                      onClick={(e) => {
                        setRoles(e.target.textContent);
                      }}
                    >
                      <input type="checkbox" /> Jame Olayinka
                    </span>
                  ) : (
                    ""
                  )}
                  {drop1 ? (
                    <span
                      onClick={(e) => {
                        setRoles(e.target.textContent)(false);
                      }}
                    >
                      <input type="checkbox" /> Shola Adeniyi{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={style.frame}>
                <p>
                  {" "}
                  Region (location): All
                  <AiFillCaretDown style={{ color: "black" }} />
                </p>
                <div className={style.cor}>
                  {/* {drop1 ?<span onClick={(e)=>{setRoles(e.target.textContent),setDrop1(false)}}> This Year </span>:""}
  {drop1 ?<span onClick={(e)=>{setRoles(e.target.textContent),setDrop1(false)}}> Last 7 Days</span>:""}
  {drop1 ?<span onClick={(e)=>{setRoles(e.target.textContent),setDrop1(false)}}> This Month</span>:""}
  {drop1 ?<span onClick={(e)=>{setRoles(e.target.textContent),setDrop1(false)}}> This Year</span>:""}
  {drop1 ?<span onClick={(e)=>{setRoles(e.target.textContent),setDrop1(false)}}> All Time</span>:""} */}
                </div>
              </div>
            </div>
            {/* flex */}
            {/* <select>
   <option>Timeframe:All-time</option>
   <option>Timeframe:Last 7 Days</option>
   <option>Timeframe:This Month</option>
   <option>Timeframe:This Year</option>
   </select>
   <select><option>UserRoles:All</option></select>
   <select><option>Region(Location):All-time</option></select> */}
            <div className={style.flex}>
              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Transactions</h5>
                  <h4>
                    <span style={{ fontSize: "20px", fontWeight: "800" }}>
                      &#8358;&nbsp;
                    </span>
                    500,000,783
                  </h4>
                  <p>
                    <span style={{ color: "green" }}>
                      <Image src="/Vector.png" width={15} height={10} /> 1.3%
                    </span>{" "}
                    up from last week
                  </p>
                </div>
                <Image
                  className={style.svg}
                  src="/card.svg"
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Earnings/Commission</h5>
                  <h4>
                    <span style={{ fontSize: "20px", fontWeight: "800" }}>
                      &#8358;&nbsp;
                    </span>
                    {loading ? (
                      <Skeleton count={1} width="40px" height="40px" />
                    ) : (
                      <>{data?.data?.balance?.commission}</>
                    )}
                  </h4>
                  <p>
                    <span style={{ color: "red" }}>
                      <Image src="/vecdown.png" width={15} height={10} /> 1.3%
                    </span>{" "}
                    up from last week
                  </p>
                </div>
                <Image
                  src="/card1.svg"
                  className={style.svg}
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Successful Transactions</h5>
                  <h4>16,483</h4>
                  <p>
                    <span style={{ color: "green" }}>
                      <Image src="/Vector.png" width={15} height={10} /> 1.3%
                    </span>{" "}
                    up from last week
                  </p>
                </div>
                <Image
                  src="/card2.svg"
                  className={style.svg}
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Failed Transactions</h5>
                  <h4>1,288</h4>
                  <p>
                    <span style={{ color: "green" }}>
                      <Image src="/Vector.png" width={15} height={10} /> 1.3%
                    </span>{" "}
                    up from last week
                  </p>
                </div>
                <Image
                  className={style.svg}
                  src="/card3.svg"
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Number of Agents</h5>
                  {loading ? (
                    <Skeleton count={1} width="40px" height="40px" />
                  ) : (
                    <>
                      <h4>{data?.data?.total_agent}</h4>
                    </>
                  )}
                  {/* <h4>{data?.data?.total_agent}</h4> */}
                  <p>
                    <span style={{ color: "green" }}>
                      <Image src="/Vector.png" width={15} height={10} /> 1.3%
                    </span>{" "}
                    up from last week
                  </p>
                </div>
                <Image
                  className={style.svg}
                  src="/Frame2.png"
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Number of Transactions</h5>
                  <h4>4,231</h4>
                  <p>
                    <span>
                      <Image src="/Vector.png" width={15} height={10} /> 1.3%
                    </span>{" "}
                    up from last week
                  </p>
                </div>
                <Image
                  className={style.svg}
                  src="/person3.png"
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Number of Terminals</h5>
                  <h4>5,783</h4>
                  <p>
                    <span style={{ color: "green" }}>
                      <Image src="/Vector.png" width={15} height={10} /> 1.3%
                    </span>{" "}
                    up from last week
                  </p>
                </div>
                <Image
                  className={style.svg}
                  src="/person2.png"
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className={style.gridout}>
                <div className={style.transaction}>
                  <h5>Total Referral Bonus</h5>
                  <h4>
                    <span style={{ fontSize: "25px", fontWeight: "800" }}>
                      &#8358;&nbsp;
                    </span>
                    66,503
                  </h4>
                </div>
                <Image
                  className={style.svg}
                  src="/ref.svg"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
