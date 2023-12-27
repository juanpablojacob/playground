export default function handler(req, res) {
  if (req.method === "GET") {
    return res.send("PONG")
  }
  return res.status(405).send("Action not allowed")
}
