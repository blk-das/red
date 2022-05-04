import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function signUp({ name, email, password }) {
  try {
    await axios.post(`${BACKEND_URI}/user`, {
      name,
      email,
      password
    })
  } catch (error) {
    console.error(error.message)
  }
}
