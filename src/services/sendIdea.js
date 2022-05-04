import axios from 'axios'
import { BACKEND_URI } from '../config'

export default async function sendIdea({ id, content, file }) {
  const fd = new FormData()
  fd.append('content', content)
  if (file) {
    fd.append('postImage', file)
  }
  await axios.post(`${BACKEND_URI}/post/${id}`, fd)
}
