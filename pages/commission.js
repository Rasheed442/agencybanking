import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import style from "../styles/commission.module.css";
import styles from "../styles/transactionlimit.module.css";
import Electricitycommission from "../component/Electricitycommission";
import {
  AiOutlineSearch,
  AiOutlineDown,
  AiTwotoneBell,
  AiOutlineMenu,
} from "react-icons/ai";
import Image from "next/image";
import Axios from "axios";
import Link from "next/link";
import Setcommission from "../component/Setcommission";
import Commitransact from "../component/Commitransact";
import Commitransact2 from "../component/Commitransact2";

function setting() {
  const [username, setUsername] = useState();
  const [transactiontype, setTransactiontype] = useState();
  const [transactiontype1, setTransactiontype1] = useState();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    setUsername(localStorage.getItem("userName"));
  }, [typeof window !== "undefined" ? localStorage.getItem("userName") : null]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}provider/airtime/networks`,
      config
    ).then((response) => {
      // console.log(response?.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}manager/commission/funds/?type=withdrawal`,
      config
    ).then((response) => {
      // console.log(response?.data);
      setTransactiontype(response?.data);
    });
  }, []);
  console.log(transactiontype);

  useEffect(() => {
    Axios.get(
      `${process.env.NEXT_PUBLIC_API}manager/commission/funds/?type=deposit`,
      config
    ).then((response) => {
      setTransactiontype1(response?.data);
    });
  }, []);
  // console.log(transactiontype1);

  const [airtime, setAirtime] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [fundtransaction, setFundtransaction] = useState(true);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  // modal commission toggle
  const [servicecommission, setServicecommission] = useState(false);
  const [electricitycommission, setElectricitycommission] = useState();
  return (
    <div className={style.header}>
      {servicecommission ? (
        <Setcommission cancelCommission={setServicecommission} />
      ) : (
        ""
      )}
      {electricitycommission ? (
        <Electricitycommission cancelelectricity={setElectricitycommission} />
      ) : (
        ""
      )}
      {show ? <Commitransact canceltransact={setShow} /> : ""}
      {show2 ? <Commitransact2 canceltransact2={setShow2} /> : ""}
      <Sidebar />
      <div className={style.main}>
        <div className={style.container}>
          <h1>Settings</h1>

          <Link href="profile">
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
                  {username} <AiOutlineDown size={10} />
                </p>
                <span>Agent Manager</span>
              </div>
            </div>
          </Link>
        </div>

        <div className={style.whitesmoke}>
          <div className={style.white}>
            <div className={style.commission}>
              <p>Commissions</p>
              <div className={style.search}>
                <AiOutlineSearch />
                <input
                  type="text"
                  placeholder="Search Agent name, Agent ID, Business name etc."
                />
              </div>
            </div>

            <div className={style.flexout}>
              <div
                className={style.airtime}
                onClick={() => {
                  setFundtransaction(true);
                  setAirtime(false);
                  setElectricity(false);
                }}
                style={{ color: fundtransaction ? "blue" : "" }}
              >
                <Image src="/data.png" width={25} height={25} priority />
                <p>FUNDS TRANSACTION</p>
              </div>
              <div
                className={style.airtime}
                onClick={() => {
                  setFundtransaction(false);
                  setAirtime(true);
                  setElectricity(false);
                }}
                style={{ color: airtime ? "blue" : "" }}
              >
                <Image src="/PhoneCall4.png" width={25} height={25} priority />
                <p>AIRTIME</p>
              </div>
              <div className={style.airtime}>
                <Image src="/data.png" width={25} height={25} priority />
                <p>DATA</p>
              </div>
              <div className={style.airtime}>
                <Image src="/wifi.png" width={25} height={25} priority />
                <p>CABLE</p>
              </div>
              <div
                className={style.airtime}
                onClick={() => {
                  setElectricity(true);
                  setAirtime(false);
                  setFundtransaction(false);
                }}
                style={{ color: electricity ? "blue" : "" }}
              >
                <Image src="/ecohouse.png" width={25} height={25} priority />
                <p>ELECTRICITY</p>
              </div>
              <div className={style.airtime}>
                <Image src="/Smarttv.png" width={25} height={25} priority />
                <p>INTERNET</p>
              </div>
              <div className={style.airtime}>
                <Image src="/more.png" width={25} height={25} priority />
                <p>OTHERS</p>
              </div>
            </div>

            {/* {fundtransaction?<Fundtransaction/>:""} */}

            {fundtransaction ? (
              <div className={styles.gridout}>
                <div className={styles.limits}>
                  <div className={styles.timer}>
                    <Image src="/timer.png" height={50} width={50} priority />
                    <div>
                      <p>Cash -in Transaction</p>
                    </div>
                  </div>
                  <div className={styles.flexout}>
                    <div className={styles.transaction}>
                      <span>card payment (Per Transaction)</span>
                      <span>cash payment(Per Transaction)</span>
                      <span>others (Per Transaction)</span>
                    </div>
                    <div className={styles.transaction}>
                      <p>
                        {/* {transactiontype?.data?.funcommission?.[0].commission}% */}
                      </p>
                      <p>
                        {/* {transactiontype?.data?.funcommission?.[0].commission}% */}
                      </p>
                      <p>0%</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Set Commission
                  </button>
                </div>

                <div className={styles.limits}>
                  <div className={styles.timer}>
                    <Image src="/timer.png" height={50} width={50} priority />
                    <div>
                      <p>Cash -out Transaction</p>
                    </div>
                  </div>
                  <div className={styles.flexout}>
                    <div className={styles.transaction}>
                      <span>card payment (Per Transaction)</span>
                      <span>cash payment(Per Transaction)</span>
                      <span>others (Per Transaction)</span>
                    </div>
                    <div className={styles.transaction}>
                      <p>
                        {transactiontype?.data?.funcommission?.[0].commission}%
                      </p>
                      <p>
                        {transactiontype?.data?.funcommission?.[0].commission}%
                      </p>
                      <p>0%</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShow2(true);
                    }}
                  >
                    Set Commission
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            {airtime ? (
              <div>
                <div className={style.biller}>
                  <p>Select Biller:</p>
                  <button
                    onClick={() => {
                      setServicecommission(true);
                    }}
                  >
                    Set Commission
                  </button>
                </div>
                <div className={style.network}>
                  <Image src="/mtn.png" width={100} height={100} priority />
                  <Image src="/glo.png" width={100} height={100} priority />
                  <Image src="/airtel.png" width={100} height={100} priority />
                  <Image src="/9mobile.png" width={100} height={100} priority />
                </div>
              </div>
            ) : (
              ""
            )}

            {electricity ? (
              <div>
                <div className={style.biller}>
                  <p>Select Biller:</p>
                  <button
                    onClick={() => {
                      setElectricitycommission(true);
                    }}
                  >
                    Set Commission
                  </button>
                </div>
                <div className={style.electric}>
                  <Image src="/ikeja.png" width={150} height={150} priority />
                  <Image src="/ekedc.png" width={150} height={150} priority />
                  <Image src="/eedc.png" width={150} height={150} priority />
                  <Image src="/yedc.png" width={150} height={150} priority />
                  <Image src="/aedc.png" width={150} height={150} priority />
                  <Image src="/kedco.png" width={150} height={150} priority />
                  <Image src="/joe.png" width={150} height={150} priority />
                  <Image src="/kaduna.png" width={150} height={150} priority />
                  <Image src="/ibedc.png" width={150} height={150} priority />
                  <Image src="/bedc.png" width={150} height={150} priority />
                  <Image src="/phcc.png" width={150} height={150} priority />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default setting;
