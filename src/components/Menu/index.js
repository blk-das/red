import { HiHome, HiHeart, HiPlus, HiSearch, HiUser } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

export default function Menu() {
  const location = useLocation()
  return (
    <ul className='menu'>
      <li className='menu__item'>
        <Link
          to='/home'
          className={
            location.pathname.includes('/home') || location.pathname === '/'
              ? 'actual__visited'
              : ''
          }
        >
          <HiHome />
          <p>Inicio</p>
        </Link>
      </li>
      <li className='menu__item'>
        <Link
          to='/liked'
          className={
            location.pathname.includes('/liked') ? 'actual__visited' : ''
          }
        >
          <HiHeart />
          <p>Favoritas</p>
        </Link>
      </li>
      <li
        className={`menu__item plus ${
          location.pathname.includes('/newIdea') ? 'visited' : ''
        }`}
      >
        <Link
          to='/newIdea'
          className={
            location.pathname.includes('/newIdea') ? 'actual__visited' : ''
          }
        >
          <HiPlus />
        </Link>
      </li>
      <li className='menu__item'>
        <Link
          to='/search'
          className={
            location.pathname.includes('/search') ? 'actual__visited' : ''
          }
        >
          <HiSearch />
          <p>Buscar</p>
        </Link>
      </li>
      <li className='menu__item'>
        <Link
          to='/profile'
          className={
            location.pathname.includes('/profile') ? 'actual__visited' : ''
          }
        >
          <HiUser />
          <p>Perfil</p>
        </Link>
      </li>
      <li className='menu__item menu__newIdea-desktop'>
        <Link to='/newIdea'>Nueva idea</Link>
      </li>
    </ul>
  )
}
