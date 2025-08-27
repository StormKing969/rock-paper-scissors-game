import { Client } from "@gradio/client";
import type { AiReturn } from "../../types/ai-return";

export async function gameAI(userSelection: string): Promise<AiReturn> {
  const client = await Client.connect(
    "R3MATCH2025/rock-paper-scissors-ai-move",
  );
  const result = await client.predict("/predict", { user_move: userSelection });

  return (
    Array.isArray(result.data) ? result.data[0] : result.data
  ) as AiReturn;
}

export async function gameResults(userSelection: string, aiSelection: string): Promise<string> {
  if (userSelection === aiSelection) {
    return "It's a Tie 😮‍💨";
  }

  const winningConditions: { [key: string]: string[] } = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  if (winningConditions[userSelection].includes(aiSelection)) {
    return "You Win 🎉";
  } else {
    return "You Lose 😞";
  }
}