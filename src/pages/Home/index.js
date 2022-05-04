import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Menu from '../../components/Menu'
import IdeasList from '../../components/IdeasList'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Head from '../../components/Head'
import Context from '../../Context/authContext'
import useGetProfile from '../../hooks/useGetProfile'
import useGetIdeas from '../../hooks/useGetIdeas'
import ProfilePhoto from '../../components/ProfilePhoto'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function Home() {
  const { token, _id } = useContext(Context)
  const { profile } = useGetProfile({ token })
  const { fetchState, ideas } = useGetIdeas({ id: _id })
  const location = useLocation()

  return (
    <>
      <Head
        title='Pagína principal'
        desc='Página que se mostrará cuando la persona haya completado el ingreso.'
      />
      <Layout>
        <div className='Home'>
          <ProfilePhoto
            profilePhotoUrl={profile.profilePhotoUrl}
            name={profile.name}
          />
          <IdeasList ideas={ideas} userId={_id} location={location} />
          <Menu />
        </div>
      </Layout>
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
