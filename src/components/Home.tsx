import ScoreBoard from "./ScoreBoard.tsx";
import { useState } from "react";
import SelectionBoard from "./SelectionBoard.tsx";
import GameDecision from "./GameDecision.tsx";
import RuleBook from "./RuleBook.tsx";

const Home = () => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [choice, setChoice] = useState<string>("");
  const [houseChoice, setHouseChoice] = useState<string>("");
  const [openRuleBook, setOpenRuleBook] = useState<boolean>(false);

  return (
    <div
      className={
        "w-full h-screen min-w-[375px] max-w-[1366px] p-8 bg-gradient-to-t from-[hsl(237_49%_15%)] to-[hsl(214_47%_23%)] transition-colors relative"
      }
    >
      <ScoreBoard currentScore={currentScore} />

      {openRuleBook ? <RuleBook setOpenRuleBook={setOpenRuleBook} /> : null}

      <main className={"relative"}>
        <SelectionBoard
          choice={choice}
          setChoice={setChoice}
          setHouseChoice={setHouseChoice}
        />

        <GameDecision
          choice={choice}
          houseChoice={houseChoice}
          setChoice={setChoice}
          setCurrentScore={setCurrentScore}
          setHouseChoice={setHouseChoice}
        />
      </main>

      <footer
        className={
          "absolute cursor-pointer bottom-10 left-1/2 -translate-x-1/2 sm:left-[85%] sm:transition-[translate, width] duration-500 ease-in-out"
        }
        onClick={() => setOpenRuleBook(!openRuleBook)}
      >
        <h1
          className={
            "uppercase border text-white w-fit py-1 px-8 font-light text-2xl rounded-[6px]"
          }
        >
          Rules
        </h1>
      </footer>
    </div>
  );
};

export default Home;