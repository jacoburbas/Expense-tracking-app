import React from "react";
import "../../style/balance/balance.css";

const DebitCard = ({ currentBalance }) => {
  return (
    <div className="card-box">
      <div className="card-box-1">
        <div id="chip"></div>

        <div id="current-balance">
          <div id="label">Balance:</div>
          <div id="amount-box">
            {currentBalance}
            <div id="currency">Pln</div>
          </div>
        </div>
      </div>
      <div className="card-box-2">
        **** **** **** <span>1234</span>
      </div>
    </div>
  );
};

export default DebitCard;
