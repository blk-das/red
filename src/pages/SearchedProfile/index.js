import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import IdeasList from '../../components/IdeasList'
import Menu from '../../components/Menu'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import Context from '../../Context/authContext'
import Ellipse1 from '../../../public/Desktop/Ellipse1.png'
import Ellipse2 from '../../../public/Desktop/Ellipse2.png'
import useGetIdeas from '../../hooks/useGetIdeas'
import useGetProfile from '../../hooks/useGetProfile'
import useFollow from '../../hooks/useFollow'
import useOpenMenu from '../../hooks/useOpenMenu'
import '../../styles/profiles.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function SearchedProfile() {
  const { id } = useParams()
  const { token, _id } = useContext(Context)
  const { fetchState, ideas } = useGetIdeas({ user: id })
  const { profile } = useGetProfile({ id })
  const { followed, handleFollow } = useFollow({
    userId: _id,
    profileId: id,
    token
  })
  const { openMenu, handleOpenMenu } = useOpenMenu()

  return (
    <>
      <Head title='Perfil' desc='Perfil del usuario.' />
      <div className='profile'>
        <Hero
          profilePicture={profile.profilePhotoUrl}
          backgroundPicture={profile.coverPhotoUrl}
          name={profile.name}
          description={profile.description}
          id={id}
          openMenu={openMenu}
          handleOpenMenu={handleOpenMenu}
        />
        <button
          className={`profile__follow-button ${
            followed === true ? 'followed' : ''
          }`}
          onClick={handleFollow}
          disabled={followed === FETCH_STATES.LOADING}
        >
          {followed && followed !== FETCH_STATES.LOADING && 'Dejar de seguir'}
          {followed === FETCH_STATES.LOADING && 'Cargando...'}
          {!followed && 'Seguir'}
        </button>
        <IdeasList ideas={ideas} />
        <Menu />
        <img src={Ellipse1} className='profile__ellipsed a' />
        <img src={Ellipse2} className='profile__ellipsed b' />
      </div>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
