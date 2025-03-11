import React, { useEffect, useState } from "react";
import "../../Components/User/Buy.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Buy() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [finprice, setFinprice] = useState();
  const { id } = useParams();
  console.log({ id } + "productid");

  const userid = localStorage.getItem("userid");
  console.log(userid);

  const [count, setCount] = useState(1);
  const increment = () => {
    if (count >= 5) {
      alert("Limited  reached");
      return;
    }
    setCount(count + 1);
    setBuy({ ...buy, count: count + 1 });
  };

  const decrement = () => {
    if (count <= 1) {
      alert("Minimum Quantity is 1");
      return;
    }
    setCount(count - 1);
    setBuy({ ...buy, count: count - 1 });
  };

  useEffect(() => {
    axios
      .post(`http://localhost:4000/findid/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (count >= 1) {
      setFinprice(parseInt(data.price) * parseInt(count));
      setBuy({ ...buy, finprice: parseInt(data.price) * parseInt(count) });
    } else if (count == 1) {
      setFinprice(parseInt(data.price));
      setBuy({ ...buy, finprice: parseInt(data.price) });
    } else {
      setFinprice(parseInt(data.price));
      setBuy({ ...buy, finprice: parseInt(data.price) });
    }
  }, [data.price, count]);

  // console.log(count);
  // console.log(finprice);
  // console.log(finprice);

  const [buy, setBuy] = useState({
    productId: id,
    quantity: count,
    price: finprice,
    userId: userid,
  });
  console.log(buy);

  const FinalOrder = () => {
    console.log("sdubmitted");

    axios
      .post("http://localhost:4000/purchase", buy)
      .then((res) => {
        console.log(res);
        navigate("/order");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="buynow">
      <div class="buynowcard">
        <img
          src={`http://localhost:4000/${data?.image?.filename}`}
          class="buynowcard-img-top"
          alt="..."
        />
        <div class="buynowcard-body">
          <h5 class="buynowcard-title">Name;{data?.Productname}</h5>
          <h5 class="buynowcard-title">Price:{data?.price}</h5>
          <h5 class="buynowcard-title">Final Price:{finprice}</h5>
          <div className="buynow-quantitys">
            <h3>Quantity</h3>
            <button onClick={decrement}>-</button>
            <input type="text" value={count} />
            <button onClick={increment}>+</button>
          </div>
          <button type="button" class="btn btn-primary" onClick={FinalOrder}>
            Checkout Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
