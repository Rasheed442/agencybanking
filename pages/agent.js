import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import style from "../styles/agent.module.css";
import {
  AiOutlineDown,
  AiTwotoneBell,
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";
import Term from "../component/Term";
import New from "../component/New";
import Terminal from "../component/Terminal";
import Link from "next/link";
import Assignterminal from "../component/Assignterminal";
import Axios from "axios";
import Term2 from "../component/Term2";
import Term3 from "../component/Term3";
import Locate_terminal from "../component/Locate_terminal";
import Editterminal from "../component/Editterminal";
function agent() {
  const [counter, setCounter] = useState(1);
  const [username, setUsername] = useState();
  // counter
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  useEffect(() => {
    setUsername(localStorage.getItem("userName"));
  }, [typeof window !== "undefined" ? localStorage.getItem("userName") : null]);
  // local storage

  const [color, setColor] = useState(true);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [open, setOpen] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [assignterminal, setAssignterminal] = useState(false);
  const [allagents, setAllagents] = useState([]);
  const [pagination, setPagination] = useState();
  const [value, setValue] = useState("Agents");
  const [loading, setLoading] = useState(true);
  const [locateterminal, setLocateterminal] = useState(false);
  const [editterminal, setEditterminal] = useState(false);
  const [search, setSearch] = useState();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}manager/agents/all/?page=${pagination}`,
      config,
      setLoading(true)
    ).then((response) => {
      console.log(response?.data);
      setAllagents(response?.data?.data?.getallagents);
      setLoading(false);
    });
  }, [pagination]);

  return (
    <div className={style.background}>
      {assignterminal ? (
        <Assignterminal submit={setAssignterminal} data={allagents} />
      ) : (
        ""
      )}
      {terminal ? <Terminal back={setTerminal} /> : ""}
      {open ? <New handle={setOpen} /> : ""}
      {terminal ? "" : <Sidebar />}
      {locateterminal ? (
        <Locate_terminal closeterminal={setLocateterminal} />
      ) : null}
      {editterminal && <Editterminal closeEdit={setEditterminal} />}
      {!terminal && (
        <>
          <div className={style.main}>
            <div className={style.container}>
              <h2>Agent Management</h2>
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
                    <div></div>
                  </div>
                  <div className={style.line}></div>

                  <Image src="/profile.png" width={40} height={40} priority />

                  <div className={style.name}>
                    <p style={{ textTransform: "capitalize", color: "black" }}>
                      {username} <AiOutlineDown size={12} />
                    </p>
                    <span>Agent Manager</span>
                  </div>
                </div>{" "}
              </Link>
            </div>
            <div className={style.bg}>
              <div className={style.white}>
                <div className={style.contain}>
                  <p style={{ fontSize: "15px" }}>{value}</p>
                  <div className={style.corner}>
                    <div className={style.search}>
                      <AiOutlineSearch size={20} style={{ color: "gray" }} />
                      <input
                        type="text"
                        placeholder="Search for Agent and Terminals ID "
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                    </div>
                    {color ? (
                      <div
                        className={style.agent}
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        <p>
                          <AiOutlinePlus /> Add New Agent
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {color2 ? (
                      <div
                        className={style.agent}
                        onClick={() => {
                          setAssignterminal(true);
                        }}
                      >
                        <p>
                          <AiOutlinePlus /> Assign New Terminal
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {color3 ? (
                      <>
                        <div
                          className={style.agent}
                          onClick={() => {
                            setLocateterminal(true);
                          }}
                        >
                          <p>
                            <MdOutlineShareLocation size={15} /> Locate Terminal
                          </p>
                        </div>
                        <div
                          className={style.agent}
                          onClick={() => {
                            setEditterminal(true);
                          }}
                        >
                          <p>
                            <FaUserCheck size={15} /> Edit Terminal Address
                          </p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className={style.head}>
                  <p
                    onClick={(e) => {
                      setColor(true);
                      setColor2(false);
                      setColor3(false);
                      setValue(e.target.textContent);
                    }}
                    style={{
                      backgroundColor: color ? "#1B59F8" : "white",
                      color: color ? "" : "gray",
                    }}
                  >
                    Agents{" "}
                  </p>
                  <span
                    onClick={(e) => {
                      setColor2(true);
                      setColor(false);
                      setColor3(false);
                      setValue(e.target.textContent);
                    }}
                    style={{
                      backgroundColor: color2 ? "#1B59F8" : "",
                      color: color2 ? "white" : "",
                    }}
                  >
                    Terminals
                  </span>
                  <span
                    onClick={(e) => {
                      setColor3(true);
                      setColor(false);
                      setColor2(false);
                      setValue(e.target.textContent);
                    }}
                    style={{
                      backgroundColor: color3 ? "#1B59F8" : "",
                      color: color3 ? "white" : "gray",
                    }}
                  >
                    Agent/Terminal Location
                  </span>
                </div>
                {color ? (
                  <Term2
                    data={allagents}
                    check={setTerminal}
                    number={setPagination}
                    loading={loading}
                    search={search}
                  />
                ) : (
                  ""
                )}
                {color2 ? <Term check={setTerminal} /> : ""}
                {color3 ? <Term3 /> : ""}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default agent;
