import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../../Context/authContext'
import useGetProfile from '../../hooks/useGetProfile'
import ProfileEditForm from '../../components/EditProfileForm'
import Spinner from '../../components/Spinner'
import Menu from '../../components/Menu'
import Logo from '../../components/Logo'
import Head from '../../components/Head'
import Ellipse from '../../../public/EditProfile/Ellipse1.png'
import Ellipse1 from '../../../public/Desktop/Ellipse1.png'
import Ellipse2 from '../../../public/Desktop/Ellipse2.png'
import updateProfile from '../../services/updateProfile'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function EditProfile() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL) //Para que desde el primer render esté el loading
  const { token } = useContext(Context)
  const { profile, handleInputTextChange, handleInputImageChange } =
    useGetProfile({ token })
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setFetchState(FETCH_STATES.LOADING)
      await updateProfile({ profile, event })
      setFetchState(FETCH_STATES.COMPLETE)
      navigate('/profile')
    } catch (error) {
      setFetchState(FETCH_STATES.ERROR)
    }
  }

  return (
    <>
      <Head
        title='Editar perfil'
        desc='Página para editar el perfil del usuario'
      />
      <div className='editProfile'>
        <Logo />
        <ProfileEditForm
          handleSubmit={handleSubmit}
          fetchState={fetchState}
          handleInputTextChange={handleInputTextChange}
          handleInputImageChange={handleInputImageChange}
          profile={profile}
        />
        <Menu />
        <img src={Ellipse} className='ellipse' />
        <img src={Ellipse2} className='editProfile__ellipsed b' />
      </div>
      <img src={Ellipse1} className='editProfile__ellipsed a' />
      {fetchState === FETCH_STATES.LOADING && <Spinner />}
    </>
  )
}
