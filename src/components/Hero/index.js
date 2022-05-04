import { HiMenu } from 'react-icons/hi'
import Ellipse1 from '../../../public/Profile/Ellipse1.png'
import Ellipse2 from '../../../public/Profile/Ellipse2.png'
import DefaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import DefaultCoverPhoto from '../../../public/defaultCoverPhoto.jpg'
import './index.scss'

export default function Hero({
  profilePicture,
  backgroundPicture,
  name,
  description,
  handleNavigate,
  id,
  openMenu,
  handleOpenMenu
}) {
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <div className='hero__background-picture'>
          {backgroundPicture === undefined && (
            <img src={null} aria-label='backgroundImageUnd' />
          )}
          {backgroundPicture === '' && (
            <img
              src={DefaultCoverPhoto}
              alt={`${name} cover picture`}
              aria-label='backgroundImageEmp'
            />
          )}
          {backgroundPicture && backgroundPicture.length > 0 && (
            <img
              src={backgroundPicture}
              alt={name}
              aria-label='backgroundImage'
            />
          )}
        </div>
        <div className='hero__information'>
          <figure className='hero__information-picture'>
            {profilePicture === undefined && (
              <img src={null} aria-label='profileImageUnd' />
            )}
            {profilePicture === '' && (
              <img
                src={DefaultProfilePhoto}
                alt={name}
                aria-label='profileImageEmp'
              />
            )}
            {profilePicture && profilePicture.length > 0 && (
              <img src={profilePicture} alt={name} aria-label='profileImage' />
            )}
          </figure>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        {!id && (
          <>
            <div className='hero__menu-activator' onClick={handleOpenMenu}>
              <HiMenu />
            </div>
            <section
              className={`hero__menu ${openMenu && 'show-menu'}`}
              aria-label='hero__menu'
            >
              <section>
                <button onClick={handleNavigate}>Editar perfil</button>
                <button onClick={handleNavigate}>Cerrar sesión</button>
              </section>
              <button onClick={handleOpenMenu}>Cerrar menú</button>
            </section>
          </>
        )}
      </div>
      <img src={Ellipse1} className='ellipse a' />
      <img src={Ellipse2} className='ellipse b' />
    </div>
  )
}
