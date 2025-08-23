const ScoreBoard = ({ currentScore }: { currentScore: number }) => {
  return (
    <section className={"flex justify-center"}>
      <div
        className={
          "border-3 border-[hsl(217_16%_45%)] rounded-[6px] p-3 flex flex-row items-center justify-between w-full max-w-[600px]"
        }
      >
        <img src={"/logo.svg"} alt={"ScoreBoard Title"} className={"ml-3"} />

        <div
          className={
            "flex flex-col items-center justify-between bg-white py-2 px-6 rounded-[4px] border-none font-bold"
          }
        >
          <h3 className={"text-[hsl(229_64%_46%)] uppercase"}>Score</h3>
          <span className={"text-[hsl(229_25%_31%)] font-bold text-4xl"}>
            {currentScore}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ScoreBoard;