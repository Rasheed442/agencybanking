import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import style from "../styles/profile.module.css";
import { toast } from "react-hot-toast";
import { RiFileCopyFill } from "react-icons/ri";
import {
  AiOutlineSearch,
  AiTwotoneBell,
  AiOutlineDown,
  AiTwotoneLock,
} from "react-icons/ai";
import Image from "next/image";
import Changepassword from "../component/Changepassword";

function setting() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [business_name, setBusiness_name] = useState();
  const [address, setAddress] = useState();
  const [state, setState] = useState();
  const [agent, setAgent] = useState();
  const [changepassword, setChangepassword] = useState(false);

  // GETTING DATA FROM LOCAL STORAGE SET IN THE INDEX.JS FILE & DASHBOARD
  useEffect(() => {
    setUsername(localStorage.getItem("userName"));
  }, [typeof window !== "undefined" ? localStorage.getItem("userName") : null]);

  useEffect(() => {
    setAgent(localStorage.getItem("number_of_agent"));
  }, [
    typeof window !== "undefined"
      ? localStorage.getItem("number_of_agent")
      : null,
  ]);
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, [typeof window !== "undefined" ? localStorage.getItem("email") : null]);
  useEffect(() => {
    setAddress(localStorage.getItem("address"));
  }, [typeof window !== "undefined" ? localStorage.getItem("email") : null]);
  useEffect(() => {
    setState(localStorage.getItem("state"));
  }, [typeof window !== "undefined" ? localStorage.getItem("email") : null]);
  useEffect(() => {
    setBusiness_name(localStorage.getItem("business_name"));
  }, [
    typeof window !== "undefined"
      ? localStorage.getItem("business_name")
      : null,
  ]);

  return (
    <div className={style.background}>
      <Sidebar />
      {/* CHANGE PASSWORD COMPONENTS */}
      {changepassword ? <Changepassword Close={setChangepassword} /> : ""}
      {/* CHANGE PASSWORD COMPONENTS */}

      <div className={style.header}>
        <div className={style.container}>
          <h2>Profile Management</h2>

          <div className={style.search}>
            <AiOutlineSearch
              size={20}
              style={{ marginBottom: "-6px", color: "gray" }}
            />
            <input
              type="text"
              placeholder="Search Terminals ID, Agent and Agent Managers"
            />
          </div>

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
              {/* <Image src="/dot.png" width={20} height={20} priority /> */}
              <div></div>
            </div>
            <div className={style.line}></div>
            <Image src="/profile.png" width={40} height={40} priority />
            <div className={style.name}>
              <p style={{ textTransform: "capitalize" }}>
                {username} <AiOutlineDown size={12} />
              </p>
              <span>Agent Manager</span>
            </div>
          </div>
        </div>

        <div className={style.bg}>
          <div className={style.bg1}>
            <div className={style.prof}>
              <p>My Profile</p>
              <span
                onClick={() => {
                  setChangepassword(true);
                }}
              >
                <AiTwotoneLock size={15} /> Change Password
              </span>
            </div>

            <div className={style.person}>
              <div className={style.person1}>
                <Image src="/profile.png" width={60} height={60} priority />
                <div className={style.accountdetails}>
                  <span>{username}</span>
                  <p>
                    Account Number: <span>9127805458 </span>
                    <RiFileCopyFill
                      size={20}
                      style={{ color: "#1B59F8", cursor: "pointer" }}
                      onClick={() => {
                        navigator.clipboard.writeText("9127805458"),
                          toast.success("copied");
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className={style.top}>
              <div className={style.name}>
                <label>First Name</label>
                <input type="text" placeholder={`${username}`} />
              </div>
              <div className={style.email}>
                <label>Email Address</label>
                <input type="email" placeholder={`${email}`} />
              </div>
            </div>

            <div className={style.middle}>
              <div className={style.name}>
                <label>Business Name</label>
                <input type="text" placeholder={`${business_name}`} />
              </div>
              <div className={style.agent}>
                <label>Number of terminal</label>
                <input type="email" placeholder="243" />
              </div>
              <div className={style.agent}>
                <label>Number of agent</label>
                <input type="email" placeholder={`${agent}`} />
              </div>
            </div>

            <div className={style.add}>
              <label>Business Address</label>
              <input type="text" placeholder={`${address}`} />
            </div>

            <div className={style.middle}>
              <div className={style.name}>
                <input type="text" placeholder="City" />
              </div>
              <div className={style.agent}>
                <input type="email" placeholder={`${state}`} />
              </div>
              <div className={style.agent}>
                <input type="email" placeholder="Zip Code" />
              </div>
            </div>

            {/* ending */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default setting;
