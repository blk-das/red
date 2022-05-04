import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function signIn({ email, password }) {
  const response = await axios.post(`${BACKEND_URI}/auth/sign-in`, {
    email,
    password
  })

  return response.data.body.jwt
}
