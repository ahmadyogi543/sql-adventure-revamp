import config from "../config";

export async function getAllUsersProgress(token) {
  const response = await fetch(`${config.API_URL}/users/progress`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  if (result.status === "failed") {
    throw new Error(result.message);
  }
  return result.data;
}
