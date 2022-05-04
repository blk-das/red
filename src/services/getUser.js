import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function getUsers({ id }) {
  const response = await axios.get(`${BACKEND_URI}/user/${id}`)

  return response.data.body
}
