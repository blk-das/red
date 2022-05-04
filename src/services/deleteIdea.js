import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function deleteIdea({ id }) {
  await axios.delete(`${BACKEND_URI}/post/${id}`)
}
