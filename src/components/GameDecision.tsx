import React, { type SetStateAction, useEffect, useState } from "react";
import { gameResults } from "../lib/utils.ts";

const GameDecision = ({
  choice,
  houseChoice,
  setChoice,
  setCurrentScore,
  setHouseChoice,
}: {
  choice: "rock" | "paper" | "scissors" | "lizard" | "spock";
  houseChoice: "rock" | "paper" | "scissors" | "lizard" | "spock";
  setChoice: React.Dispatch<SetStateAction<string>>;
  setCurrentScore: React.Dispatch<SetStateAction<number>>;
  setHouseChoice: React.Dispatch<SetStateAction<string>>;
}) => {
  const [result, setResult] = useState<string>("");
  const [playerWon, setPlayerWon] = useState<boolean | null>(null);

  const handleGameResult = (gameLogicReturn: string) => {
    setResult(gameLogicReturn);

    if (gameLogicReturn.toLowerCase().includes("you win")) {
      setCurrentScore((prev) => prev + 1);
      setPlayerWon(true);
    } else if (gameLogicReturn.toLowerCase().includes("you lose")) {
      setCurrentScore((prev) => (prev > 0 ? prev - 1 : 0));
      setPlayerWon(false);
    }

    console.log("Game result determined:", {
      gameLogicReturn,
      playerWon,
    });
  };

  const handleReset = () => {
    setChoice("");
    setPlayerWon(null);
    setResult("");
    setHouseChoice("");
  };

  useEffect(() => {
    console.log("Generating game result...", { choice, houseChoice });
    if (choice && houseChoice) {
      gameResults(choice, houseChoice).then((res) => {
        handleGameResult(res);
      });
    }
  }, [houseChoice]);

  return (
    <div
      className={`${choice.length === 0 ? "hidden" : "visible"} text-white my-18`}
    >
      <div className={"flex flex-row items-center justify-evenly"}>
        <div
          className={
            "flex flex-col-reverse sm:flex-col items-center justify-center"
          }
        >
          <h1 className={"uppercase font-semibold sm:mb-10 mt-10"}>
            You picked
          </h1>

          <div className={`${playerWon ? "glow-wrapper" : null}`}>
            <div
              className={`p-4 ${choice}-gradient rounded-full cursor-pointer w-fit ${playerWon ? "wonGame" : null}`}
            >
              <div
                className={`bg-white rounded-full p-6 sm:p-8 ${choice}-inner-gradient`}
              >
                <img
                  src={`/icon-${choice}.svg`}
                  alt={"Scissors Img"}
                  className={
                    "w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] object-contain transition-[width, height] duration-300 ease-in-out"
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {!houseChoice ? null : (
          <div
            className={
              "hidden sm:visible mt-15 mx-10 lg:mx-0 sm:flex sm:flex-col items-center justify-center"
            }
          >
            <h1
              className={
                "text-white text-4xl text-center uppercase font-bold mb-5"
              }
            >
              {result}
            </h1>

            <button
              onClick={handleReset}
              className={
                "font-semibold uppercase bg-white text-black px-8 py-2 rounded-[6px] cursor-pointer"
              }
            >
              Play Again
            </button>
          </div>
        )}

        <div
          className={
            "flex flex-col-reverse sm:flex-col items-center justify-center"
          }
        >
          <h1 className={"uppercase font-semibold mt-10 sm:mb-10"}>
            The House Picked
          </h1>

          <div
            className={`${!playerWon && playerWon !== null ? "glow-wrapper" : null}`}
          >
            <div
              className={`p-4 ${houseChoice}-gradient rounded-full cursor-pointer w-fit ${!playerWon && playerWon !== null ? "wonGame" : null}`}
            >
              <div
                className={`bg-white rounded-full p-6 sm:p-8 ${houseChoice ? houseChoice : "blank"}-inner-gradient`}
              >
                {!houseChoice ? (
                  <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <img
                    src={`/icon-${houseChoice}.svg`}
                    alt={`${houseChoice}`}
                    className={
                      "w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] object-contain transition-[width, height] duration-300 ease-in-out"
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {result.length < 0 && houseChoice.length < 0 ? null : (
        <div
          className={
            "flex flex-col items-center justify-center mt-20 sm:hidden"
          }
        >
          <h1
            className={
              "text-white text-6xl text-center uppercase font-bold mb-6"
            }
          >
            {result}
          </h1>

          <button
            onClick={handleReset}
            className={
              "font-semibold uppercase bg-white text-black text-xl px-15 py-3 rounded-[6px] cursor-pointer"
            }
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GameDecision;