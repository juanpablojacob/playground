export default async function ping() {
  const res = await fetch("/api/ping")
  if (res.ok) {
    const content = await res.text()
    console.log("Response:", content)
  }
}
