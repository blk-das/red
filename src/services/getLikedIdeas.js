import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function getLikedIdeas({ id }) {
  const response = await axios.get(`${BACKEND_URI}/post/${id}?getLiked=true`)
  return response.data.body
}
