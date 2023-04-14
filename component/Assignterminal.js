import React, { useEffect, useState } from "react";
import style from "../styles/assignterminal.module.css";
import {
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";

function Assignterminal({ submit, data }) {
  // const filteredData = data.filter(item => item.fullname.toLowerCase().includes(search.toLowerCase()));

  const [show, setShow] = useState(false);
  const [assignedagent, setAssignedagent] = useState();
  const [search, setSearch] = useState();
  const [agents, setAgents] = useState(data);

  function filterAgentsByInput(array, input) {
    // Convert user input to lowercase for case-insensitive filtering
    const searchTerm = input?.toLowerCase();

    // Filter the array of objects
    const filteredArray = array?.filter((obj) => {
      // Check if any of the object's values contain the search term
      return Object?.values(obj)?.some((value) => {
        if (typeof value === "string") {
          return value?.toLowerCase()?.includes(searchTerm);
        }
        return false;
      });
    });

    console.log(filteredArray);
    setAgents(filteredArray);
    return filteredArray;
  }

  console.log(data);
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.close}>
          <h1>Assign New Terminal</h1>
          <AiOutlineClose
            size={30}
            style={{ cursor: "pointer" }}
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
            <div className={style.terminal}>
              <input
                type="text"
                placeholder="Select from available terminals"
              />
              <AiFillCaretDown />
            </div>
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
                // onChange={(e) => setAssignedagent(e.target.value)}
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
                      filterAgentsByInput(data, search);
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
                    {agents?.map((d) => {
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
        <div
          className={style.btn}
          onClick={() => {
            submit(false);
          }}
        >
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Assignterminal;
