export async function authRegister(name, email, institution, password) {
  const response = await fetch("http://localhost:5000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      institution,
      password,
    }),
  });

  const result = await response.json();
  if (result.status === "failed") {
    throw new Error(result.message);
  }
}

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

  const result = await response.json();
  if (result.status === "failed") {
    throw new Error(result.message);
  }
  return result.data.token;
}

export async function authLogout(token) {
  const response = await fetch("http://localhost:5000/auth/logout", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 204) {
    throw new Error("auth: logout failed");
  }
}
