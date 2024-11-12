import { useEffect, useState } from "react";
import "./App.css";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Description from "./components/Description";

function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [totalVotes, setTotalVotes] = useState(0);
  useEffect((_) => {
    let voteLocal = localStorage.getItem("votes");
    voteLocal ? setVotes(JSON.parse(voteLocal)) : "";
  }, []);
  useEffect(() => {
    setTotalVotes(votes.good + votes.bad + votes.neutral);
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (type) => {
    type == "reset"
      ? setVotes({ good: 0, neutral: 0, bad: 0 })
      : setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };
  return (
    <div className="lato container">
      <Description
        title="Sip Happens Café"
        desc="Please leave your feedback about our service by selecting one of the options below"
      />
      <Options handleVote={handleVote} totalVotes={totalVotes} />
      <Feedback votes={votes} totalVotes={totalVotes} />
    </div>
  );
}

export default App;
