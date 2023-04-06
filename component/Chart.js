import React, { useState, useEffect } from "react";
import style from "../styles/chart.module.css";
import Image from "next/image";
import Chartjs from "chart.js/auto";
import { transaction } from "../component/Dashboardtable";
import Bar from "../component/Bar";
import { Pie, Line, Doughnut } from "react-chartjs-2";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { TiArrowUnsorted } from "react-icons/ti";
import Transaction from "./Transaction";
import Radar from "../component/Radar";
import Link from "next/link";
function Chart() {
  const [counter, setCounter] = useState(1);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [2.5, 2, 5, 1, 4, 3, 5, 4, 2, 1, 5, 3],
        borderRadius: 10,
        width: 10,
        borderSkipped: false,
        backgroundColor: [
          "#FF993ACC",
          // "#FD8A8A",
          // "#7286D3",
          // "lightblue"
        ],
      },
    ],
    options: {
      responsive: true,
    },
  };
  const pie = {
    labels: ["20%", "80%"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [20, 80],

        backgroundColor: ["#42CC7E", "#FF993ACC"],
      },
    ],
  };
  const doughnut = {
    labels: ["37%", "20%", "43%", "36%"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [2, 2, 5, 4],
        backgroundColor: ["#7397F5", "#FF993A", "#42CC7E", "#D1D2D2"],
      },
    ],
  };

  return (
    <div className={style.top}>
      <div className={style.main}>
        <div className={style.chart}>
          <div className={style.statistic}>
            <p>Transactional Activities</p>
            <select>
              <option>JAN</option>
              <option>FEB</option>
              <option>MAR</option>
              <option>APR</option>
              <option>MAY</option>
              <option>JUN</option>
              <option>JUL</option>
              <option>AUG</option>
              <option>SEP</option>
              <option>OCT</option>
              <option>NOV</option>
              <option>DEC</option>
            </select>
          </div>
          <br />
          <br />
          <Bar />
        </div>

        <div className={style.gridout}>
          <div className={style.terminal}>
            <span>Terminals</span>
            <p>64%</p>
            <img src="/Graph.svg" />
          </div>
          <div className={style.terminal}>
            <span>Agents</span>
            <p>86%</p>
            <img src="/Graph.svg" />
          </div>
          <div className={style.terminal}>
            <span>Agent Managers</span>
            <p>
              2734<span>/5,783</span>
            </p>
          </div>
          <div className={style.terminal}>
            <span>Active Terminals</span>
            <p>
              2,734<span>/1,324</span>
            </p>
          </div>
          <div className={style.terminal}>
            <span>Active Agents</span>
            <p>
              501<span>/Min</span>
            </p>
          </div>
          <div className={style.terminal}>
            <span>Acive Managers</span>
            <p>
              90<span>/150</span>
            </p>
          </div>
        </div>
      </div>

      <div className={style.divert}>
        <div className={style.flexout}>
          <div className={style.statistic}>
            <p>Statistics</p>
            <select>
              <option>Lastweek</option>
            </select>
          </div>

          <div className={style.chart1}>
            <Pie data={pie} />

            <div className={style.navigate}>
              <div className={style.manager}>
                <div className={style.blue}></div>
                <p>AGENTS</p>
              </div>

              <div className={style.manager}>
                <div className={style.orange}></div>
                <p>TERMINALS</p>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "end", color: "blue", cursor: "pointer" }}>
            View All
          </p>
        </div>

        <div className={style.flexout}>
          <div className={style.statistic}>
            <p>Agent Leaderboard</p>
            <select>
              <option>Lastweek</option>
            </select>
          </div>

          <div className={style.Radar}>
            <Radar />

            <div className={style.navigate}>
              <div className={style.manager}>
                <div className={style.blue}></div>
                <p>Jaytech Ventures</p>
              </div>

              <div className={style.manager}>
                <div className={style.orange}></div>
                <p>ABC Limited</p>
              </div>
              <div className={style.manager}>
                <div className={style.gra}></div>
                <p>TM30 Global</p>
              </div>
              <div className={style.manager}>
                <div className={style.gray}></div>
                <p>Glamtom International</p>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "end", color: "blue", cursor: "pointer" }}>
            View Full Report <AiOutlineArrowRight size={13} />
          </p>
        </div>
      </div>

      <div className={style.over}>
        <div className={style.background}>
          <div className={style.transact}>
            <h3>Transactions</h3>
            <Link
              href="/reporting"
              onClick={() => {
                localStorage.setItem("currL", "/reporting");
              }}
            >
              <p>
                View All Transaction <AiOutlineRight size={11} />
              </p>
            </Link>
          </div>
          <div className={style.gridoutside}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>
                    AGENT NAME <TiArrowUnsorted />
                  </th>
                  <th>
                    AGENT ID <TiArrowUnsorted />
                  </th>
                  <th>
                    RES MESSAGE <TiArrowUnsorted />
                  </th>
                  <th>
                    RES CODE <TiArrowUnsorted />
                  </th>
                  <th>
                    TRANS.TYPE <TiArrowUnsorted />
                  </th>
                  <th>
                    AMOUNT <TiArrowUnsorted />
                  </th>
                  <th>
                    EARNING <TiArrowUnsorted />
                  </th>
                  <th>
                    DATE <TiArrowUnsorted />
                  </th>
                  <th>
                    STATUS <TiArrowUnsorted />
                  </th>
                  <th>
                    TRANS REF. <TiArrowUnsorted />
                  </th>
                </tr>
              </thead>
              <tbody>
                {transaction.map((t) => {
                  return (
                    <tr>
                      <td>{t.name}</td>
                      <td>{t.id}</td>
                      <td>{t.res_mesg}</td>
                      <td>{t.res_code}</td>
                      <td
                        style={{
                          color:
                            t.trans_type === "withdrawal"
                              ? "#01B001"
                              : "#E01919",
                        }}
                      >
                        {t.trans_type}
                      </td>
                      <td>{t.amount}</td>
                      <td>{t.earning}</td>
                      <td>{t.date}</td>
                      <td
                        style={{
                          width: "80%",
                          margin: "10px",
                          display: "inline-flex",
                          borderRadius: "5px",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor:
                            t.status === "SUCCESSFUL"
                              ? "#00F4001A"
                              : "#FF3A441A",

                          color:
                            t.status === "SUCCESSFUL" ? "#008000" : "#FF3A44",
                        }}
                      >
                        {t.status}
                      </td>
                      <td>{t.trans_ref}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={style.footer}>
            <span>Showing 1 to 5 of 100 entries</span>
            <div className={style.btn}>
              <button
                style={{ border: "1px solid red", color: "red" }}
                onClick={() => {
                  setCounter(counter - 1);
                  if (counter === 1) {
                    setCounter(1);
                  }
                }}
              >
                <AiOutlineArrowLeft />
                &nbsp;Previous
              </button>
              <div className={style.btn1}>
                <button>{counter}</button>
                {/* <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
            <button>10</button> */}
              </div>
              <button
                style={{ border: "1px solid #1B59F8", color: "#1B59F8" }}
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                Next&nbsp;
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'react-apexcharts'
// import dynamic from "next/dynamic"
// const chart = dynamic(() => import("react-apexcharts"),{ssr:false});
