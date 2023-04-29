import React, { useEffect, useState } from "react";
import style from "../styles/assignterminal.module.css";
import {
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import Axios from "axios";

function Assignterminal({ submit, data }) {
  const [show, setShow] = useState(false);
  const [server, setServer] = useState();
  const [show1, setShow1] = useState(false);
  const [assignedagent, setAssignedagent] = useState();
  const [assignedterminal, setAssignedterminal] = useState();
  const [search, setSearch] = useState();
  const [agents, setAgents] = useState(data);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}terminal/unassigned/manager`,
      config
    ).then((response) => {
      setServer(response.data);
    });
  }, []);
  console.log(server);

  const details = { assignedagent, assignedterminal };

  async function Submithandler(e) {
    // e.preventDefault();
    // submit(false);
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API}terminal/assign/user/manager`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(details),
    //   }
    // );
    // const server = await response.json();
    // alert(server);
    // alert(details);
    submit(false);
  }

  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.close}>
          <h1>Assign New Terminal</h1>
          <AiOutlineCloseCircle
            size={45}
            style={{ cursor: "pointer", color: "#1B59F8" }}
            onClick={() => {
              submit(false);
            }}
          />
        </div>
        <div className={style.main}>
          <div className={style.agents}>
            <label>
              Terminal ID <span>*</span>
            </label>
            <div
              className={style.terminal}
              onClick={() => {
                setShow1(!show1);
              }}
            >
              <input
                type="text"
                placeholder="Select from available terminals"
                disabled
                value={assignedterminal}
              />
              <AiFillCaretDown />
            </div>
            {show1 && (
              <div className={style.dropdown}>
                <div className={style.drop}>
                  <AiOutlineSearch size={23} style={{ color: "gray" }} />
                  <input
                    type="text"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    placeholder="Search By Terminal"
                  />
                </div>
                <div className={style.agentnames}>
                  {server?.data?.terminals
                    ?.filter((s) => {
                      if (!search?.length) return s;
                      else if (
                        Object.values(s).some((value) =>
                          value?.toString()?.toLowerCase()?.includes(search)
                        )
                      ) {
                        return s;
                      }
                    })
                    .map((s) => {
                      return (
                        <div className={style.full}>
                          <p
                            onClick={(e) => {
                              setAssignedterminal(e.target.textContent);
                              setShow1(false);
                            }}
                          >
                            {s.terminal_id}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>

          <div className={style.agents}>
            <label>Assign Agent</label>
            <div
              className={style.terminal}
              onClick={() => {
                setShow(!show);
              }}
            >
              <input
                disabled
                type="text"
                value={assignedagent}
                placeholder="select an existing agent to terminal"
              />
              <AiFillCaretDown />
            </div>
            {show && (
              <div className={style.dropdown}>
                <div className={style.drop}>
                  <AiOutlineSearch size={23} style={{ color: "gray" }} />
                  <input
                    type="text"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    placeholder="Search By Agent Name"
                  />
                </div>
                <div className={style.agentnames}>
                  <p
                    onClick={(e) => {
                      setAssignedagent(e.target.textContent);
                      setShow(false);
                    }}
                  >
                    {agents
                      ?.filter((d) => {
                        if (!search?.length) return d;
                        else if (
                          Object.values(d).some((value) =>
                            value?.toString()?.toLowerCase()?.includes(search)
                          )
                        ) {
                          return d;
                        }
                      })
                      .map((d) => {
                        return (
                          <div className={style.full}>
                            <p>{d?.fullname}</p>
                          </div>
                        );
                      })}
                  </p>{" "}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={style.btn} onClick={Submithandler}>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Assignterminal;
