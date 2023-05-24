'use client'

import { useState } from "react";

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
        <h2>Stats</h2>
        <h3>Good: {good}</h3>
        <h3>Neutral: {neutral}</h3>
        <h3>Bad: {bad}</h3>
      </div>

      <h3>total:{good+bad+neutral}</h3>
      <h3>avg: {(good+neutral)/2}</h3>
    </>
  );
}
