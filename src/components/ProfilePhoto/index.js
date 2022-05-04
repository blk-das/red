import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import './index.scss'

export default function ProfilePhoto({ profilePhotoUrl, name }) {
  return (
    <figure className='profilePhoto'>
      {profilePhotoUrl === undefined && <img src={null} />}
      {profilePhotoUrl === '' && <img src={defaultProfilePhoto} alt={name} />}
      {profilePhotoUrl && profilePhotoUrl.length > 0 && (
        <img src={profilePhotoUrl} alt={name} />
      )}
    </figure>
  )
}
