import crypto from "node:crypto"

const SALT = process.env.SALT

export function generateId() {
  return crypto.randomBytes(8).toString("hex")
}

export function hashPassword(password) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, SALT, 32, (err, derived) => {
      if (err) {
        reject(err)
      } else {
        resolve(derived.toString("hex"))
      }
    })
  })
}
