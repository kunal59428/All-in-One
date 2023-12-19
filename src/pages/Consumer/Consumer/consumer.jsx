import React, { useState } from "react";
import ConsumerLogin from "../Cosumerlogin/ConsumerLogin";
import ConsumerRegister from "../ConsumerReg/Consumerreg";
import "./consum.css"

function ConsumerSwt() {
  const [switchBtn, setSwitchBtn] = useState(true);

  return (
    
    <div className="con">
    
      <div>
        <button onClick={e => setSwitchBtn(true)}>Login</button>
        <button className="reg" onClick={e => setSwitchBtn(false)}>Register</button>
      </div>
      {switchBtn ? <ConsumerLogin /> : <ConsumerRegister />}
    </div>
  );
}

export default ConsumerSwt;
