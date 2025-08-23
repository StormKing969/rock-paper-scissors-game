import React, { type SetStateAction } from "react";

const GameDecision = ({
  choice,
  setCurrentScore,
}: {
  choice: string;
  setCurrentScore: React.Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className={`${choice.length === 0 ? "hidden" : "visible"}`}>
      GameDecision
    </div>
  );
};

export default GameDecision;