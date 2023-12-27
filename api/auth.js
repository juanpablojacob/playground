import db from "../lib/db.js"
import { hashPassword } from "../lib/utils.js"

async function authenticateUser(req, res) {
  const credentials = req.body
  credentials.password = await hashPassword(credentials.password)
  console.log(credentials)
  const user = await db
    .collection("users")
    .findOne(credentials, { projection: { password: 0 } })
  if (!user) {
    return res.status(401).send("User not found")
  }
  return res.json(user)
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await authenticateUser(req, res)
  }
  return res.status(405).send("Action not allowed")
}
