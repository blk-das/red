import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function followUser({ userId, toFollow }) {
  await axios.patch(`${BACKEND_URI}/user`, { userId, toFollow })
}
