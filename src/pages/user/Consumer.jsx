import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./consumer.css"

function Consumer() {
  const data = useContext(DataContext);
  // console.log(data);
  return (
    <div className="con">
      <h1>Consumer-Details</h1>
      {
        data && data.map(item =>(
          <div key={item.id}>
              <h3>{item.name}</h3>
              <h5>{item.category}</h5>
              <p>{item.quantity}</p>
            </div>
        ))
      }
    </div>
  );
}

export default Consumer;
