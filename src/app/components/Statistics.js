import { useState } from "react";

const Statistics = (props) => {
    console.log(props)

  return (
    <>
      <h1>Feedback</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {good+bad+neutral}</p>
      <p>Average: {(good+neutral)/2}</p>
    </>
  );
};

const Button=()=>{
    return(
        <button onClick={onclick}>{label}</button>
    )
}
export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  
    const handleGoodClick = () => {
      setGood(good + 1);
    };
  
    const handleNeutralClick = () => {
      setNeutral(neutral + 1);
    };
  
    const handleBadClick = () => {
      setBad(bad + 1);
    };
  
    return (
      <>
        <h2>Give Feedback</h2>
        <div>
          <button onClick={handleGoodClick}>
            <h3>Good</h3>
          </button>
  
          <button onClick={handleNeutralClick}>
            <h3>Neutral</h3>
          </button>
  
          <button onClick={handleBadClick}>
            <h3>Bad</h3>
          </button>
  
          <br />
          <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
      </>
    );
  }
  