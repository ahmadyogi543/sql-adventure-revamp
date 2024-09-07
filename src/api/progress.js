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

export async function getStageData(token, id) {
  const response = await fetch(`${config.API_URL}/users/stages/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  if (result.status === "failed") {
    throw new Error(result.message);
  }
  return result.data.stage_data;
}
