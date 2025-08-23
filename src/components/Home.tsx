import ScoreBoard from "./ScoreBoard.tsx";
import { useState } from "react";
import SelectionBoard from "./SelectionBoard.tsx";
import GameDecision from "./GameDecision.tsx";
import RuleBook from "./RuleBook.tsx";

const Home = () => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [choice, setChoice] = useState<string>("");
  const [openRuleBook, setOpenRuleBook] = useState<boolean>(false);

  return (
    <section
      className={
        "home-style bg-gradient-to-t from-[hsl(237_49%_15%)] to-[hsl(214_47%_23%)] transition-colors relative"
      }
    >
      <ScoreBoard currentScore={currentScore} />

      {openRuleBook ? <RuleBook /> : null}

      <section className={"relative"}>
        <SelectionBoard choice={choice} setChoice={setChoice} />

        <GameDecision choice={choice} setCurrentScore={setCurrentScore} />
      </section>

      <div
        className={"flex flex-col justify-center items-center cursor-pointer"}
        onClick={() => setOpenRuleBook(!openRuleBook)}
      >
        <h1
          className={
            "uppercase border text-white w-fit py-1 px-8 font-light text-2xl rounded-[6px] sm:ml-auto"
          }
        >
          Rules
        </h1>
      </div>
    </section>
  );
};

export default Home;