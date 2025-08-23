import ScoreBoard from "./ScoreBoard.tsx";
import { useState } from "react";

const Home = () => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [choice, setChoice] = useState<string>("");

  return (
    <section
      className={
        "home-style bg-gradient-to-t from-[hsl(237_49%_15%)] to-[hsl(214_47%_23%)] transition-colors"
      }
    >
      <ScoreBoard currentScore={currentScore} />

      <div
        className={
          "relative my-25 flex flex-col items-center justify-center h-[400px] mx-5"
        }
      >
        <div className={"absolute"}>
          <img
            src={"/bg-pentagon.svg"}
            alt={"Pentagon Img"}
            className={"size-full"}
          />

          <div
            className={
              "absolute -top-8 left-1/2 -translate-x-1/2 p-3 scissors-gradient rounded-full shadow-[0_5px_0px_0px_hsl(39_89%_29%)] cursor-pointer"
            }
            onClick={() => setChoice("scissors")}
          >
            <div
              className={
                "bg-white rounded-full p-4 shadow-[0_-2px_5px_hsl(40_84%_33%)]"
              }
            >
              <img
                src={"/icon-scissors.svg"}
                alt={"Scissors Img"}
                className={
                  "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width,height] duration-300 ease-in-out"
                }
              />
            </div>
          </div>

          <div
            className={
              "absolute top-2/5 -translate-y-1/2 -right-8 p-3 paper-gradient rounded-full shadow-[0_5px_0px_0px_hsl(230_89%_42%)] cursor-pointer"
            }
            onClick={() => setChoice("paper")}
          >
            <div
              className={
                "bg-white rounded-full p-4 shadow-[0_-2px_5px_hsl(230_89%_45%)]"
              }
            >
              <img
                src={"/icon-paper.svg"}
                alt={"Paper Img"}
                className={
                  "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width,height] duration-300 ease-in-out"
                }
              />
            </div>
          </div>

          <div
            className={
              "absolute top-2/5 -translate-y-1/2 -left-8 p-3 spock-gradient rounded-full shadow-[0_5px_0px_0px_hsl(189_59%_33%)] cursor-pointer"
            }
            onClick={() => setChoice("spock")}
          >
            <div
              className={
                "bg-white rounded-full p-4 shadow-[0_-2px_5px_hsl(189_58%_37%)]"
              }
            >
              <img
                src={"/icon-spock.svg"}
                alt={"Spock Img"}
                className={
                  "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width,height] duration-300 ease-in-out"
                }
              />
            </div>
          </div>

          <div
            className={
              "absolute -bottom-5 right-8 p-3 rock-gradient rounded-full shadow-[0_5px_0px_0px_hsl(349_71%_32%)] cursor-pointer"
            }
            onClick={() => setChoice("rock")}
          >
            <div
              className={
                "bg-white rounded-full p-4 shadow-[0_-2px_5px_hsl(349_70%_36%)]"
              }
            >
              <img
                src={"/icon-rock.svg"}
                alt={"Rock Img"}
                className={
                  "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width,height] duration-300 ease-in-out"
                }
              />
            </div>
          </div>

          <div
            className={
              "absolute -bottom-5 left-8 p-3 lizard-gradient rounded-full shadow-[0_5px_0px_0px_hsl(261_73%_40%)] cursor-pointer"
            }
            onClick={() => setChoice("lizard")}
          >
            <div
              className={
                "bg-white rounded-full p-4 shadow-[0_-2px_5px_hsl(261_72%_43%)]"
              }
            >
              <img
                src={"/icon-lizard.svg"}
                alt={"Lizard Img"}
                className={
                  "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] object-contain transition-[width,height] duration-300 ease-in-out"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={"flex flex-col items-center justify-center cursor-pointer"}
      >
        <h1
          className={
            "uppercase border text-white w-fit py-1 px-8 font-light text-2xl rounded-[6px]"
          }
        >
          Rules
        </h1>
      </div>
    </section>
  );
};

export default Home;