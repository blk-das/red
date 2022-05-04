import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function getProfile({ token }) {
  const response = await axios.get(`${BACKEND_URI}/user?getProfile=true`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data.body
}
