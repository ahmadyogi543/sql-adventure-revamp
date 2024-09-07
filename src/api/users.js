import config from "../config";

export async function getAllUsers(token) {
  const response = await fetch(`https:/${config.API_URL}/users`, {
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

export async function deleteOneUser(token, id) {
  const response = await fetch(`https:/${config.API_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 204) {
    throw new Error(result.message);
  }
}
