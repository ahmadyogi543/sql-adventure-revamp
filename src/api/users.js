export async function getAllUsers(token) {
  const response = await fetch("http://localhost:5000/users", {
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
