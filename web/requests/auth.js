export default async function auth(credentials) {
  const res = await fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: [["Content-Type", "application/json"]],
  })
  if (res.ok) {
    const user = await res.json()
    console.log("Response:", user)
  }
}
