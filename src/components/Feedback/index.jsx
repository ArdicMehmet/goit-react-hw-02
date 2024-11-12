import React from "react";
import styles from "./feedback.module.css";
const Feedback = ({ votes: { good, neutral, bad }, totalVotes }) => {
  return (
    <>
      {totalVotes > 0 ? (
        <ul className={styles.container}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalVotes} </li>
          <li>
            Positive: {Math.round(((good + neutral) / totalVotes) * 100)}%
          </li>
        </ul>
      ) : (
        <p>No feedback Yet</p>
      )}
    </>
  );
};

export default Feedback;
