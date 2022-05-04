import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function getFollowedIdeas({ id }) {
  const response = await axios.get(`${BACKEND_URI}/post?userId=${id}`)

  return response.data.body
}
