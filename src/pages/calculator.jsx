import React, { useState } from "react";
import "./calculator.css";

function SipCalculator() {
  const [investments, setInvestments] = useState(5000);
  const [times, setTimes] = useState(10);
  const [returnRate, setReturnRate] = useState(15);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const handleInvestmentsChange = (e) => {
    setInvestments(parseInt(e.target.value));
  };

  const handleTimesChange = (e) => {
    setTimes(parseInt(e.target.value));
  };

  const handleReturnRateChange = (e) => {
    setReturnRate(parseFloat(e.target.value));
  };

  const calculateSip = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = times * 12;
    let futureValue = 0;
    let wealth = 0;
    const total = investments * times * 12;
    const mplush = 1 + monthlyRate;
    const mathpow = Math.pow(mplush, months);

    futureValue = (investments * ((mathpow - 1) * mplush)) / monthlyRate;
    wealth = Math.round(futureValue - total);
    const totalInvestmentCalc = Math.round(total);
    const totalValuesCalc = Math.round(futureValue);

    setTotalInvestment(totalInvestmentCalc);
    setEstimatedReturns(wealth);
    setTotalValue(totalValuesCalc);
  };

  return (
    <div className="sip-calculator">
      <h3 id="heading" style={{ marginBottom: "1.5em", textAlign: "center" }}>
        Sip Calculator
      </h3>
      <div className="sip-calculator-amount">
        <p style={{ marginTop: "1.8em" }}>
          <label id="amountLabel">Monthly Investment</label>
          <input
            name="Amount"
            id="inputAmount"
            type="number"
            step="500"
            value={investments}
            min="500"
            max="100000"
            onChange={handleInvestmentsChange}
          />
          <span id="amount"></span> Rs.
        </p>
        <input
          className="amount-slider"
          name="realAmount"
          id="myAmount"
          type="range"
          step="500"
          min="500"
          max="1000000"
          value={investments}
          onChange={handleInvestmentsChange}
        />
      </div>
      <div className="sip-calculator-year">
        <p style={{ marginTop: "1.8em" }}>
          Time Period
          <input
            name="Years"
            id="inputYears"
            type="number"
            step="1"
            value={times}
            min="1"
            max="30"
            onChange={handleTimesChange}
          />
          <span id="years"></span> years
        </p>
        <input
          className="year-slider"
          name="realYears"
          id="myYears"
          type="range"
          step="1"
          min="1"
          max="30"
          value={times}
          onChange={handleTimesChange}
        />
      </div>
      <div className="sip-calculator-interest">
        <p style={{ marginTop: "1.8em" }}>
          Return Rate
          <input
            name="Interest"
            id="inputInterest"
            type="number"
            step="0.01"
            value={returnRate}
            min="0"
            max="100"
            onChange={handleReturnRateChange}
          />
          <span id="interest"></span> %
        </p>
        <input
          className="interest-slider"
          name="realInterest"
          id="myInterest"
          type="range"
          step="0.01"
          min="0"
          max="100"
          value={returnRate}
          onChange={handleReturnRateChange}
        />
      </div>
      <div className="sip-calculator-buttons">
        <button onClick={calculateSip}>Calculate</button>
        <button onClick={() => window.location.reload()}>Reset</button>
      </div>
      <div className="sip-calculator-result">
        <table>
          <thead>
            <tr>
              <th>Total Investment</th>
              <th>Estimated Returns</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalInvestment} Rs.</td>
              <td>{estimatedReturns} Rs.</td>
              <td>{totalValue} Rs.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SipCalculator;
