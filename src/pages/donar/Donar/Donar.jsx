import React, { useState } from "react";
import DonarRegister from "../DonarReg/DonarRegister";
import DonarLogin from "../DonarLogin/DonarLogin";
import "./don.css"

function Donar() {
  const [switchBtn, setSwitchBtn] = useState(true);

  return (
    
    <div className="don">
    
      <div className="main-div"> 
        <button onClick={e => setSwitchBtn(true)}>Login</button>
        <button onClick={e => setSwitchBtn(false)}>Register</button>
        {switchBtn ? <DonarLogin /> : <DonarRegister />}
      </div>
    </div>
  );
}

export default Donar;
