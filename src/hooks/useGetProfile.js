import { useState, useEffect } from 'react'
import getProfile from '../services/getProfile'
import getUser from '../services/getUser'

export default function useGetProfile({ token, id }) {
  const [profile, setProfile] = useState({
    name: '',
    description: '',
    profilePhotoUrl: '',
    coverPhotoUrl: ''
  })

  useEffect(async () => {
    if (token) {
      const profile = await getProfile({ token: token })
      setProfile(profile)
    }
    if (id) {
      const profile = await getUser({ id })
      setProfile(profile)
    }
  }, [token, id])

  const handleInputTextChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value })
  }

  const handleInputImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      var reader = new FileReader()
      reader.onload = function () {
        setProfile({ ...profile, [event.target.name]: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return { profile, handleInputTextChange, handleInputImageChange }
}
