import React from "react";
import style from "../styles/test.module.css";
import { transaction } from "../component/Dashboardtable";
import Locate_terminal from "../component/Locate_terminal";
function testing() {
  console.log(transaction);
  return (
    <div>
      <Locate_terminal />
    </div>
  );
}

export default testing;
