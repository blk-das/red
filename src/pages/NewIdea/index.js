import { useContext } from 'react'
import NewIdeaForm from '../../components/NewIdeaForm'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import Head from '../../components/Head'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import Ellipse1 from '../../../public/NewIdea/Ellipse1.png'
import Ellipse2 from '../../../public/NewIdea/Ellipse2.png'
import Context from '../../Context/authContext'
import useGetProfile from '../../hooks/useGetProfile'
import './index.scss'

export default function NewIdea() {
  const { _id, token } = useContext(Context)
  const { profile } = useGetProfile({ token })

  return (
    <>
      <Head
        title='Nueva publicación'
        desc='Página para crear una nueva publicación.'
      />
      <div className='newIdea'>
        <Logo />
        <div className='newIdea__wrapper'>
          <figure className='newIdea__profilePhoto'>
            {profile.profilePhotoUrl === undefined && <img src={null} />}
            {profile.profilePhotoUrl === '' && (
              <img src={defaultProfilePhoto} alt={profile.name} />
            )}
            {profile.profilePhotoUrl && profile.profilePhotoUrl.length > 0 && (
              <img src={profile.profilePhotoUrl} alt={profile.name} />
            )}
          </figure>
          <NewIdeaForm id={_id} />
        </div>
        <Menu />
        <img src={Ellipse1} className='ellipse a' />
        <img src={Ellipse2} className='ellipse b' />
      </div>
    </>
  )
}
