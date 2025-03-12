import React, { useEffect, useState } from "react";
import "./Order.css";
import axios from "axios";
import Buy from "./User/Buy";
import { useNavigate } from "react-router-dom";

function Order() {
  const [showCardInputs, setShowCardInputs] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const userid = localStorage.getItem("userid");

  const conformOrder = () => {
    alert(
      "thanks for placing your order with us. Your package is being processed and will be on its way soon."
    );
       navigate("/petshophomepage");
  };
  useEffect(() => {
    axios
      .post(`http://localhost:4000/findorder/${userid}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePaymentOption = (e) => {
    const selectedOption = e.target.value;
    setShowCardInputs(selectedOption === "Cards");
  };

  return (
    <div className="order">
      <div className="order-container">
        <h4 className="order-detail text-center">Payment Details</h4>
        <div className="order-row order-g-3">
          <div className="order-col">
            <input
              type="text"
              className="order-form-control"
              placeholder="First name"
              aria-label="First name"
              defaultValue={data?.firstname}
            />
          </div>
          <div className="order-col">
            <input
              type="text"
              className="order-form-control"
              placeholder="Last name"
              aria-label="Last name"
              defaultValue={data?.lastname}
            />
          </div>
        </div>

        <div className="order-col-md-6">
          <label htmlFor="order-inputEmail" className="order-form-label">
            Email
          </label>
          <input
            type="email"
            className="order-form-control"
            id="order-inputEmail"
            defaultValue={data?.email}
          />
        </div>

        <div className="order-col-md-6">
          <label htmlFor="order-inputMobile" className="order-form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="order-form-control"
            id="order-inputMobile"
            defaultValue={data?.contact}
          />
        </div>

        <div className="order-col-12">
          <label htmlFor="order-inputAddress" className="order-form-label">
            Address
          </label>
          <input
            type="text"
            className="order-form-control"
            id="order-inputAddress"
            defaultValue={data?.address}
          />
        </div>

        <div className="order-col-md-4">
          <label htmlFor="order-inputState" className="order-form-label">
            State
          </label>
          <input
            type="text"
            className="order-form-control"
            id="order-inputZip"
            defaultValue={data?.city}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="order-col-md-2">
                <label htmlFor="order-inputZip" className="order-form-label">
                  Pin Code
                </label>
                <input
                  type="text"
                  className="order-form-control"
                  id="order-inputZip"
                  defaultValue={data?.pincode}
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="order-inputZip" className="order-form-label">
                Payment
              </label>
              <select
                className="form-select"
                onChange={handlePaymentOption}
                aria-label="Default select example"
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Cards">Cards</option>
              </select>
            </div>
          </div>
        </div>
        <form
          class="row g-3 needs-validation"
          onSubmit={conformOrder}
          novalidate
        >
          {showCardInputs && (
            <div class="order-container">
              <div class="row">
                <div class="col">
                  <label for="validationCustom03" class="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    placeholder="Card Number"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid card number.
                  </div>
                </div>
                <div class="col">
                  <label for="validationCustom03" class="form-label">
                    CVV
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="validationCustom03"
                    placeholder="CVV"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid cvv.
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label for="validationCustom03" class="form-label">
                    Expire Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Expire date"
                    id="validationCustom03"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid Valid Date.
                  </div>
                </div>
                <div class="col">
                  <label for="validationCustom03" class="form-label">
                    Account Holder
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Account holder"
                    id="validationCustom03"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid Accont holder.
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="order-btn order-btn-success"
             
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Order;
