export async function authLogin(email, password) {
  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error("auth: login failed");
  }
  const data = await response.json();
  return data.token;
}

export async function authLogout(token) {
  const response = await fetch("http://localhost:5000/auth/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 204) {
    throw new Error("auth: logout failed");
  }
}
