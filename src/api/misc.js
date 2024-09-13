import config from "../config";

export async function getLeaderboardData() {
  const response = await fetch(`${config.API_URL}/leaderboard`);

  const result = await response.json();
  if (result.status === "failed") {
    throw new Error(result.message);
  }
  return result.data.leaderboard_data;
}
