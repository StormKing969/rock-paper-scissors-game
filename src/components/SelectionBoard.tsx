import React, { type SetStateAction } from "react";
import { gameAI } from "../lib/utils.ts";

const SelectionBoard = ({
  choice,
  setChoice,
  setHouseChoice,
}: {
  choice: string;
  setChoice: React.Dispatch<SetStateAction<string>>;
  setHouseChoice: React.Dispatch<SetStateAction<string>>;
}) => {
  const handleOnClick = (userChoice: string) => {
    setChoice(userChoice);
    gameAI(userChoice).then((aiSelection) => {
      setHouseChoice(aiSelection.ai_move);
    });
  };

  return (
    <div
      className={`${choice.length !== 0 ? "hidden" : "visible"} my-18 flex flex-col items-center justify-center h-[400px] mx-5`}
    >
      <div className={"absolute"}>
        <img
          src={"/bg-pentagon.svg"}
          alt={"Pentagon Img"}
          className={"size-full"}
        />

        <div
          className={
            "absolute -top-8 left-1/2 -translate-x-1/2 p-3 scissors-gradient rounded-full cursor-pointer"
          }
          onClick={() => handleOnClick("scissors")}
        >
          <div className={"bg-white rounded-full p-4 scissors-inner-gradient"}>
            <img
              src={"/icon-scissors.svg"}
              alt={"Scissors Img"}
              className={
                "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width, height] duration-300 ease-in-out"
              }
            />
          </div>
        </div>

        <div
          className={
            "absolute top-2/5 -translate-y-1/2 -right-8 p-3 paper-gradient rounded-full cursor-pointer"
          }
          onClick={() => handleOnClick("paper")}
        >
          <div className={"bg-white rounded-full p-4 paper-inner-gradient"}>
            <img
              src={"/icon-paper.svg"}
              alt={"Paper Img"}
              className={
                "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width, height] duration-300 ease-in-out"
              }
            />
          </div>
        </div>

        <div
          className={
            "absolute top-2/5 -translate-y-1/2 -left-8 p-3 spock-gradient rounded-full  cursor-pointer"
          }
          onClick={() => handleOnClick("spock")}
        >
          <div className={"bg-white rounded-full p-4 spock-inner-gradient"}>
            <img
              src={"/icon-spock.svg"}
              alt={"Spock Img"}
              className={
                "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width, height] duration-300 ease-in-out"
              }
            />
          </div>
        </div>

        <div
          className={
            "absolute -bottom-5 right-8 p-3 rock-gradient rounded-full  cursor-pointer"
          }
          onClick={() => handleOnClick("rock")}
        >
          <div className={"bg-white rounded-full p-4 rock-inner-gradient"}>
            <img
              src={"/icon-rock.svg"}
              alt={"Rock Img"}
              className={
                "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width, height] duration-300 ease-in-out"
              }
            />
          </div>
        </div>

        <div
          className={
            "absolute -bottom-5 left-8 p-3 lizard-gradient rounded-full  cursor-pointer"
          }
          onClick={() => handleOnClick("lizard")}
        >
          <div className={"bg-white rounded-full p-4 lizard-inner-gradient"}>
            <img
              src={"/icon-lizard.svg"}
              alt={"Lizard Img"}
              className={
                "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width, height] duration-300 ease-in-out"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionBoard;