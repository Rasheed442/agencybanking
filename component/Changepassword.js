import React, { useState, useEffect } from "react";
import style from "../styles/changepassword.module.css";
import {
  AiOutlineCloseCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

function Changepassword({ Close }) {
  const [oldPassword, setOldpassword] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [cover, setCover] = useState();
  const [cover1, setCover1] = useState();
  const [cover2, setCover2] = useState();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");

  const details = { oldPassword, password, confirmpassword };
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  async function Submithandler(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(details),
      }
    );
    const server = await response.json();
    setLoading(false);
    if (server?.message) {
      toast.success(server?.message);
      Close(false);
    } else {
      toast.error(server?.errors[0]?.msg);
    }
  }

  return (
    <div className={style.overlay}>
      <div className={style.white}>
        <div className={style.top}>
          <div className={style.header}>
            <h1>Change Password</h1>
            <AiOutlineCloseCircle
              size={40}
              style={{ cursor: "pointer" }}
              onClick={() => {
                Close(false);
              }}
            />
          </div>

          <div className={style.name}>
            <label>
              Existing Password <span>*</span>
            </label>
            <div className={style.eye}>
              <input
                type={cover2 ? "text" : "password"}
                onChange={(e) => {
                  setOldpassword(e.target.value);
                }}
              />
              <div onClick={() => setCover2(!cover2)}>
                {cover2 ? (
                  <AiFillEye size={25} />
                ) : (
                  <AiFillEyeInvisible size={25} />
                )}
              </div>
            </div>
          </div>

          <div className={style.name}>
            <label>
              New Password <span>*</span>
            </label>
            <div className={style.eye}>
              <input
                type={cover1 ? "text" : "password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div onClick={() => setCover1(!cover1)}>
                {cover1 ? (
                  <AiFillEye size={25} />
                ) : (
                  <AiFillEyeInvisible size={25} />
                )}
              </div>
            </div>
          </div>

          <div className={style.name}>
            <label>
              Confirm New Password <span>*</span>
            </label>
            <div className={style.eye}>
              <input
                type={cover ? "text" : "password"}
                onChange={(e) => {
                  setConfirmpassword(e.target.value);
                }}
              />
              <div onClick={() => setCover(!cover)}>
                {cover ? (
                  <AiFillEye size={25} />
                ) : (
                  <AiFillEyeInvisible size={25} />
                )}
              </div>
            </div>
          </div>
          <button onClick={Submithandler}>
            {loading ? (
              <BeatLoader loading={loading} size={20} color={color} />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
