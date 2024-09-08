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

export async function attemptStage(token, id, stageId, noOfMissions, score) {
  const response = await fetch(
    `${config.API_URL}/users/progress/${id}/stages/attempt`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stage_id: stageId,
        no_of_missions: noOfMissions,
        score: score,
      }),
    }
  );

  if (response.status !== 204) {
    const result = await response.json();
    throw new Error(result.message);
  }
}

export async function attemptMission(
  token,
  id,
  stageId,
  missionId,
  missionName
) {
  const response = await fetch(
    `${config.API_URL}/users/progress/${id}/missions/attempt`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stage_id: stageId,
        mission_id: missionId,
        mission_name: missionName,
      }),
    }
  );

  if (response.status !== 204) {
    const result = await response.json();
    throw new Error(result.message);
  }
}
