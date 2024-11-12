import React, { useState } from "react";
import WidgetButton from "../WidgetButton";

const Options = ({ votes, handleVote, totalVotes }) => {
  return (
    <div>
      <WidgetButton name="good" handleClick={handleVote} />
      <WidgetButton name="neutral" handleClick={handleVote} />
      <WidgetButton name="bad" handleClick={handleVote} />
      {totalVotes > 0 ? (
        <WidgetButton name="reset" handleClick={handleVote} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
