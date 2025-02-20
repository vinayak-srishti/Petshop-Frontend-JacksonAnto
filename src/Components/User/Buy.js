import React, { useState } from "react";
import "../../Components/User/Buy.css";

function Buy() {
    // const userId=localStorage.getItem("userId")
    // console.log(userId);
    
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
// 
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="buynow">
      <div class="buynowcard">
        <img src="..." class="buynowcard-img-top" alt="..." />
        <div class="buynowcard-body">
          <h5 class="buynowcard-title">Card title</h5>
          <div className="buynow-quantitys">
            <h3>Quantity</h3>
            <button onClick={decrement}>-</button>
            <input type="text" value={count} />
            <button onClick={increment}>+</button>
          </div>
          <a href="#" class="btn btn-primary">
            Order Conformed
          </a>
        </div>
      </div>
    </div>
  );
}

export default Buy;
