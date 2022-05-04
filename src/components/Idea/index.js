import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import useTimeAgo from '../../hooks/useTimeAgo'
import LikedButton from '../LikedButton'
import IdeaMenu from '../IdeaMenu'
import useOpenMenu from '../../hooks/useOpenMenu'
import './index.scss'

export default function Idea({
  content,
  date,
  likes,
  user,
  imageUrl,
  userId, //user that gives like if it does
  _id: postId,
  location,
  handleNavigate
}) {
  const newDate = useTimeAgo(date)
  const { openMenu, handleOpenMenu } = useOpenMenu()

  return (
    <li className='idea'>
      <div className='idea__header'>
        <figure className='idea__header-image'>
          {user.profilePhotoUrl === undefined && (
            <img src={null} aria-label='profileUnd' />
          )}
          {user.profilePhotoUrl === '' && (
            <img
              src={defaultProfilePhoto}
              alt={user?.name}
              aria-label='profileEmp'
            />
          )}
          {user.profilePhotoUrl && user?.profilePhotoUrl.length > 0 && (
            <img
              src={user?.profilePhotoUrl}
              alt={user?.name}
              aria-label='profile'
            />
          )}
        </figure>
        <h3>{user?.name}</h3>
        {location?.pathname.includes('/profile') && (
          <div className='idea__header-options' onClick={handleOpenMenu}>
            <HiOutlineDotsHorizontal />
          </div>
        )}
      </div>
      <p className='idea__content'>{content}</p>
      {imageUrl && (
        <div className='idea__image'>
          <img src={imageUrl} />
        </div>
      )}
      <div className='idea__footer'>
        <p className='idea__footer-date'>{newDate}</p>
        <LikedButton likes={likes || 0} userId={userId} postId={postId} />
      </div>
      {location?.pathname.includes('/profile') && (
        <IdeaMenu
          postId={postId}
          openMenu={openMenu}
          handleOpenMenu={handleOpenMenu}
          handleNavigate={handleNavigate}
        />
      )}
    </li>
  )
}
