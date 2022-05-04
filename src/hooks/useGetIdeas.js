import { useState, useEffect } from 'react'
import getFollowedIdeas from '../services/getFollowedIdeas'
import getIdeas from '../services/getIdeas'
import getLikedIdeas from '../services/getLikedIdeas'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function useGetIdeas({ id, user, liked }) {
  const [fetchState, setFetchState] = useState(FETCH_STATES.LOADING)
  const [ideas, setIdeas] = useState([])

  useEffect(async () => {
    if (id || user || liked) {
      try {
        if (user) {
          //Para conseguir las ideas de un usuario, dar valor a user
          setFetchState(FETCH_STATES.LOADING)
          const ideas = await getIdeas({ id: user })
          if (ideas.length === 0) {
            setIdeas(false)
          } else {
            setIdeas(ideas)
          }
          setFetchState(FETCH_STATES.COMPLETE)
        } else if (liked) {
          //Para conseguir las ideas con like, dar valor a liked
          setFetchState(FETCH_STATES.LOADING)
          const ideas = await getLikedIdeas({ id: liked })
          if (ideas.length === 0) {
            setIdeas(false)
          } else {
            setIdeas(ideas)
          }
          setFetchState(FETCH_STATES.COMPLETE)
        } else {
          //Sí se desea obtener las ideas de usuarios seguidos, dar valor a id
          setFetchState(FETCH_STATES.LOADING)
          const ideas = await getFollowedIdeas({ id })

          console.log(ideas.length)

          if (ideas.length === 0) {
            setIdeas(false)
          } else {
            setIdeas(ideas)
          }
          setFetchState(FETCH_STATES.COMPLETE)
        }
      } catch (error) {
        setIdeas(null)
        setFetchState(FETCH_STATES.ERROR)
      }
    }
  }, [id, liked, user])

  return {
    fetchState,
    ideas
  }
}
