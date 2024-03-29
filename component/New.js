import React, { useState, useEffect } from "react";
import style from "../styles/new.module.css";
import {
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import Axios from "axios";
import Sidebar from "./Sidebar";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import "aos/dist/aos.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { BsUpload } from "react-icons/bs";
import { toast } from "react-hot-toast";
// toast.configure();

function New({ handle }) {
  const [fullname, setFullname] = useState();
  const [phonenumber, setNumber] = useState();
  const [business_name, setBusinessname] = useState();
  const [address, setBusinessaddress] = useState();
  const [localgovt, setLocalgovt] = useState();
  const [govtid, setGovtid] = useState("NIN");
  const [govidcredent, setGovtidcredent] = useState();
  const [state, setState] = useState("");
  const [allstates, setAllstate] = useState();
  const [region, setRegion] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("white");
  const [id, setId] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const details = {
    fullname,
    phonenumber,
    address,
    business_name,
    localgovt,
    govtid,
    govidcredent,
    state,
    region,
    email,
  };

  useEffect(() => {
    Axios.get(`${process.env.NEXT_PUBLIC_API}auth/states`).then((response) => {
      setAllstate(response?.data);
    });
  }, []);

  console.log(allstates);
  const sortState = allstates?.data?.statelcd?.map((d) => {
    const state = Object.keys(d);
    return state;
  });

  const getLcg = allstates?.data?.statelcd?.map((d) => d[state]);

  async function submithandler(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}manager/create/agent`,
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
    console.log(server);
    setLoading(false);
    handle(false);
    toast.success("Agent Created Successfully");
    toast(server?.errors);
    setTimeout(() => {
      window.location = "/agent";
    }, 1000);
  }

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={style.overlay}>
      <div className={style.header} data-aos="slide-down">
        <div className={style.container}>
          <div className={style.up}>
            <div className={style.top}>
              <h3>Add New Agent</h3>
              <AiOutlineCloseCircle
                size={45}
                style={{ cursor: "pointer", color: "#1B59F8" }}
                onClick={() => {
                  handle(false);
                }}
              />
            </div>
            <div className={style.fileinput}>
              <input type="file" id="file" className={style.file} />
              <label for="file">
                <BsUpload /> &nbsp;Upload File
              </label>
            </div>
          </div>

          <div className={style.background}>
            <div className={style.name}>
              <label>
                Agent&apos;s Full name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Agent name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className={style.name}>
              <label>
                Phone Number (<span>*</span>Must be attached to your BVN)
              </label>
              <input
                type="number"
                placeholder="Enter your Phone Number linked to your BVN"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className={style.name}>
              <label>
                Business Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Business name"
                onChange={(e) => setBusinessname(e.target.value)}
              />
            </div>
            <div className={style.name}>
              <label>
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Government Issued ID"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={style.name}>
              <label>
                Business Address <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Business Address"
                onChange={(e) => setBusinessaddress(e.target.value)}
              />
            </div>

            <div className={style.name}>
              <label>
                State <span>*</span>
              </label>
              <select onChange={(e) => setState(e?.target?.value)}>
                {sortState &&
                  sortState[0]?.map((d) => {
                    return <option>{d}</option>;
                  })}
              </select>
            </div>

            <div className={style.name}>
              <label>
                Region <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Local Government Area"
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>

            <div className={style.name}>
              <label>
                Local Government Area <span>*</span>
              </label>
              <select onChange={(e) => setLocalgovt(e?.target?.value)}>
                {getLcg &&
                  getLcg[0]?.map((d) => {
                    return <option>{d}</option>;
                  })}
              </select>
            </div>

            <div className={style.name}>
              <label>
                Government Issued ID <span>*</span>
              </label>
              <select
                onChange={(e) => {
                  setGovtid(e?.target?.value);
                  e.target.value === "PASSPORT" || "NIN" || "Driver's License";
                }}
              >
                {["NIN", "PASSPORT ID", "Driver's License"].map((x, idx) => {
                  return <option>{x}</option>;
                })}
              </select>
            </div>

            <div className={style.name}>
              <label>
                {govtid} <span>*</span>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setGovtidcredent(e.target.value);
                  if (e.target.value.length === 11) {
                    toast.error("ID must be less than 10");
                    setGovtidcredent(e.target.value.length === "10");
                  }
                }}
                placeholder={`Enter Your ${govtid} number`}
              />
            </div>

            <div className={style.btn}>
              <button onClick={submithandler}>
                {" "}
                {loading ? (
                  <ClipLoader loading={loading} size={20} color={color} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
