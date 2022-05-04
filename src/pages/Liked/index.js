import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Context from '../../Context/authContext'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import useGetIdeas from '../../hooks/useGetIdeas'
import useGetProfile from '../../hooks/useGetProfile'
import ProfilePhoto from '../../components/ProfilePhoto'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Liked() {
  const { token, _id } = useContext(Context)
  const { profile } = useGetProfile({ token })
  const { ideas, fetchState } = useGetIdeas({ liked: _id })
  const location = useLocation()

  return (
    <>
      <Head
        title='Publicaciones que te gustaron'
        desc='Página que muestra las publicaciones que le han gustado al usuario.'
      />
      <Layout>
        <div className='Liked'>
          <h2>Publicaciones que te gustaron</h2>
          <ProfilePhoto
            profilePhotoUrl={profile.profilePhotoUrl}
            name={profile.name}
          />
          <IdeasList ideas={ideas} location={location} userId={_id} />
          <Menu />
        </div>
      </Layout>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
