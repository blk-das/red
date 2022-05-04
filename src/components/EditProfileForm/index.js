import { FaCamera } from 'react-icons/fa'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function editProfileForm({
  handleSubmit,
  fetchState,
  handleInputTextChange,
  handleInputImageChange,
  profile
}) {
  return (
    <>
      <form
        className='editProfileForm'
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <div className='editProfileForm-item'>
          <img src={profile?.profilePhotoUrl || null} />
          <div className='editProfileForm-item-camera'>
            <p>Cambiar</p>
            <FaCamera />
          </div>
          <input
            type='file'
            onChange={handleInputImageChange}
            className='editProfileForm__file-input'
            accept='.jpg,.png,.jpeg'
            name='profilePhotoUrl'
            aria-label='profilePhotoUrl'
          />
        </div>
        <div className='editProfileForm-item cover'>
          <img src={profile?.coverPhotoUrl || null} />
          <div className='editProfileForm-item-camera cover'>
            <p>Cambiar</p>
            <FaCamera />
          </div>
          <input
            type='file'
            onChange={handleInputImageChange}
            className='editProfileForm__file-input cover'
            accept='.jpg,.png,.jpeg'
            name='coverPhotoUrl'
            aria-label='coverPhotoUrl'
          />
        </div>
        <input
          type='text'
          placeholder='Nombre'
          value={profile.name}
          name='name'
          onChange={(e) => handleInputTextChange(e)}
        />
        <input
          type='text'
          placeholder='Descripción'
          value={profile.description}
          name='description'
          onChange={(e) => handleInputTextChange(e)}
        />
        <button>Actualizar</button>
        {fetchState === FETCH_STATES.ERROR && (
          <p className='editProfileForm__error'>Ocurrio un error inesperado</p>
        )}
      </form>
    </>
  )
}
