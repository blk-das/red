import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function getUsers({ name }) {
  const response = await axios.get(`${BACKEND_URI}/user?name=${name}`)

  return response.data.body
}
