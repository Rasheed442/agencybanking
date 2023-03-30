import React, { useState, useEffect } from "react";
import style from "../styles/sidebar.module.css";
import { RxDashboard } from "react-icons/rx";
import {
  MdSupervisorAccount,
  MdOutlineExitToApp,
  MdMiscellaneousServices,
  MdContentCopy,
  MdReportGmailerrorred,
} from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { toast } from "react-hot-toast";
import Utilis from "../component/Utilis";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();
function Sidebar({ change }) {
  const [referralcode, setReferral] = useState();

  useEffect(() => {
    setReferral(localStorage.getItem("referralcode"));
  }, [
    typeof window !== "undefined" ? localStorage.getItem("referralcode") : null,
  ]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Utilis />
      </div>

      <div
        className={style.exit1}
        onClick={() => {
          navigator.clipboard.writeText(referralcode), toast.success("copied");
        }}
      >
        <div className={style.profile}>
          <h4>My Referral Code</h4>
          <span>{referralcode}</span>
        </div>
        <MdContentCopy
          size={30}
          style={{ color: "#084074", cursor: "pointer" }}
        />
      </div>

      <div
        className={style.exit}
        onClick={() => {
          localStorage.clear();
          window.location = "/";
        }}
      >
        <div className={style.profile}>
          <h4>Logout</h4>
          <span>Agent Manager</span>
        </div>
        <MdOutlineExitToApp
          size={30}
          style={{ color: "#FF3A3A", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
