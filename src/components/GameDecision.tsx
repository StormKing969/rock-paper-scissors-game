import React, { type SetStateAction } from "react";

const GameDecision = ({
  choice,
  houseChoice,
  setCurrentScore,
}: {
  choice: string;
  houseChoice: string;
  setCurrentScore: React.Dispatch<SetStateAction<number>>;
}) => {
  console.log(
    "Rendering GameDecision with choice:",
    choice,
    "and houseChoice:",
    houseChoice,
  );
  return (
    <div
      className={`${choice.length === 0 ? "hidden" : "visible"} text-white my-18`}
    >
      <div className={"flex flex-row items-center justify-evenly"}>
        <div className={"flex flex-col items-center justify-center"}>
          <h1 className={"uppercase font-semibold mb-10"}>You picked</h1>
          <div
            className={
              "p-4 scissors-gradient rounded-full shadow-[0_5px_0px_0px_hsl(39_89%_29%)] cursor-pointer w-fit"
            }
          >
            <div
              className={
                "bg-white rounded-full p-8 shadow-[0_-2px_5px_hsl(40_84%_33%)]"
              }
            >
              <img
                src={`/icon-${choice}.svg`}
                alt={"Scissors Img"}
                className={
                  "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain transition-[width, height] duration-300 ease-in-out"
                }
              />
            </div>
          </div>
        </div>

        <div className={"flex flex-col items-center justify-center"}>
          <h1 className={"uppercase font-semibold mb-10"}>The House Picked</h1>
          <div
            className={
              "p-4 scissors-gradient rounded-full shadow-[0_5px_0px_0px_hsl(39_89%_29%)] cursor-pointer w-fit"
            }
          >
            <div
              className={
                "bg-white rounded-full p-8 shadow-[0_-2px_5px_hsl(40_84%_33%)]"
              }
            >
              <img
                src={`/icon-${houseChoice}.svg`}
                alt={"Scissors Img"}
                className={
                  "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain transition-[width, height] duration-300 ease-in-out"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDecision;