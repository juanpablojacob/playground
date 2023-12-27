import * as React from "react"
import { Form } from "react-router-dom"

import styles from "./login.module.css"

export default function Login() {
  return (
    <div className={styles.page}>
      <Form
        method="POST"
        action="/login"
        autoComplete="off"
        className={styles.form}
      >
        <label className={styles.field}>
          <span>Username</span>
          <input type="text" name="username" />
        </label>
        <label className={styles.field}>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </Form>
    </div>
  )
}
