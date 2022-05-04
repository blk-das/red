import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function likePost({ postId, userId }) {
  await axios.patch(`${BACKEND_URI}/post/${postId}?user=${userId}`)
}
