import React from "react";
import { useParams, useNavigate } from "react-router";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import "./Payments.scss";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

function Payments() {
  const navigate = useNavigate();
  const params = useParams();
  const status = params.status;
  const dispatch = useDispatch();

  const infoData = {
    success: {
      message: "Your order has been placed",
      cta: "Shop More",
      icon: <BsFillCartCheckFill />,
    },
    failed: {
      message: "Payment Failed",
      cta: "Try Again",
      icon: <BiErrorCircle />,
    },
  };

  const navigateback = () => {
    navigate("/");
  };

  if (status === "success") {
    dispatch(resetCart());
  }

  return (
    <div className="Payments">
      <div className="icon">{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <button className="btn-primary" onClick={navigateback}>
        {infoData[status].cta}
      </button>
    </div>
  );
}

export default Payments;
