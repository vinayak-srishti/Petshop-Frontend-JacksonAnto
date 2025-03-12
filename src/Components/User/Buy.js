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

  const [Quantity, setQuantity] = useState(1);
  const increment = () => {
    if (Quantity >= 5) {
      alert("Limited  reached");
      return;
    }
    setQuantity(Quantity + 1);
    setBuy({ ...buy, quantity: Quantity + 1 });
  };

  const decrement = () => {
    if (Quantity <= 1) {
      alert("Minimum Quantity is 1");
      return;
    }
    setQuantity(Quantity - 1);
    setBuy({ ...buy, quantity: Quantity - 1 });
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
    if (Quantity >= 1) {
      setFinprice(parseInt(data.price) * parseInt(Quantity));
      setBuy({ ...buy, finprice: parseInt(data.price) * parseInt(Quantity) });
    } else if (Quantity == 1) {
      setFinprice(parseInt(data.price));
      setBuy({ ...buy, finprice: parseInt(data.price) });
    } else {
      setFinprice(parseInt(data.price));
      setBuy({ ...buy, finprice: parseInt(data.price) });
    }
  }, [data.price, Quantity]);

  console.log(Quantity);
  console.log(finprice);
  console.log(finprice);

  const [buy, setBuy] = useState({
    productId: id,
    quantity: Quantity,
    finprice: finprice,
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
            <input type="text" value={Quantity} />
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
