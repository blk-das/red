import { Link } from 'react-router-dom'
import defaultProfilePhoto from '../../../public/defaultProfilePhoto.jpg'
import './index.scss'

function SearchResult({ userId, personId, profilePhotoUrl, name }) {
  return (
    <li className='result'>
      <Link to={personId === userId ? '/profile' : `/search/${personId}`}>
        {profilePhotoUrl === undefined && <img src={null} />}
        {profilePhotoUrl === '' && <img src={defaultProfilePhoto} alt={name} />}
        {profilePhotoUrl && profilePhotoUrl.length > 0 && (
          <img src={profilePhotoUrl} alt={name} />
        )}

        <h3>{name}</h3>
      </Link>
    </li>
  )
}

export default SearchResult
