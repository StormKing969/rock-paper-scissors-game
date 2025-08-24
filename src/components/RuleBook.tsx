import React, { type SetStateAction } from "react";

const RuleBook = ({
  setOpenRuleBook,
}: {
  setOpenRuleBook: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section
      className={
        "h-screen sm:h-full sm:max-h-[500px] absolute z-10 top-0 left-0 bg-white py-5 px-8 sm:rounded-[8px] sm:top-1/5 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:min-w-[400px] sm:w-fit"
      }
    >
      <div
        className={
          "relative flex flex-col justify-center items-center h-full"
        }
      >
        <h1
          className={
            "uppercase font-semibold text-[hsl(229_25%_31%)] text-4xl absolute top-15 sm:left-0 sm:top-5"
          }
        >
          Rules
        </h1>

        <img src={"/image-rules.svg"} alt={"Rules"} className={"sm:mt-20"} />

        <img
          src={"/icon-close.svg"}
          alt={"Close Button"}
          className={"cursor-pointer absolute bottom-15 sm:right-0 sm:top-7"}
          onClick={() => setOpenRuleBook(false)}
        />
      </div>
    </section>
  );
};

export default RuleBook;