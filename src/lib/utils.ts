import {Client} from "@gradio/client";

export async function gameAI(userSelection: string): Promise<string> {
  const client = await Client.connect(
    "R3MATCH2025/rock-paper-scissors-ai-move",
  );
  const result = await client.predict("/predict", { user_move: userSelection });

  return (Array.isArray(result.data) ? result.data[0] : result.data) as string;
}

function gameRules(userSelection: string, aiSelection: string): boolean | null {
  if (aiSelection.startsWith(userSelection)) {
    return null;
  }

  switch (userSelection) {
    case "scissors":
      return aiSelection === "lizard" || aiSelection === "paper";
    case "paper":
      return aiSelection === "rock" || aiSelection === "spock";
    case "rock":
      return aiSelection === "lizard" || aiSelection === "scissors";
    case "lizard":
      return aiSelection === "spock" || aiSelection === "paper";
    case "spock":
      return aiSelection === "scissors" || aiSelection === "rock";
    default:
      return null;
  }
}