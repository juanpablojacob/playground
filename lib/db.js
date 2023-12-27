import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI

export default new MongoClient(uri).db("xpnz")
