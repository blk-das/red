import { useState, useEffect } from 'react'
import getProfile from '../services/getProfile'
import followUser from '../services/followUser'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

function useFollow({ profileId, userId, token }) {
  const [followed, setFollowed] = useState(null)

  useEffect(async () => {
    //Saber sí seguimos al usuario de quien vemos el perfil
    if (profileId && token) {
      const profileResponse = await getProfile({ token })
      if (profileResponse.followedPeople.includes(profileId)) {
        setFollowed(true)
      } else {
        setFollowed(false)
      }
    }
  }, [profileId, token])

  const handleFollow = async () => {
    //Seguir a un usuario
    setFollowed(FETCH_STATES.LOADING)
    try {
      await followUser({ userId: userId, toFollow: profileId })
      setFollowed(!followed)
    } catch (error) {
      console.error(error.message)
    }
  }

  return { followed, handleFollow }
}

export default useFollow
