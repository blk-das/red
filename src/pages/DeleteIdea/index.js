import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HiXCircle } from 'react-icons/hi'
import Head from '../../components/Head'
import deleteIdea from '../../services/deleteIdea'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function DeleteIdea() {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)
  const navigate = useNavigate()
  const params = useParams()

  const onClose = () => {
    navigate('/profile')
  }

  const handleDelete = async () => {
    try {
      setFetchState(FETCH_STATES.LOADING)
      const { id } = params
      await deleteIdea({ id })
      setFetchState(FETCH_STATES.COMPLETE)
      onClose()
    } catch (error) {
      setFetchState(FETCH_STATES.ERROR)
    }
  }

  return (
    <>
      <Head
        title='Eliminar publicación'
        desc='Página de confirmación para eliminar una publicación.'
      />
      <div className='Delete'>
        <div className='Delete__content'>
          <h2>¿Estas seguro que quieres eliminar esta publicación?</h2>
          <button className='Delete__content-button' onClick={onClose}>
            Cancelar
          </button>
          <button
            className='Delete__content-button'
            onClick={handleDelete}
            disabled={fetchState === FETCH_STATES.LOADING}
          >
            Eliminar
          </button>
          {fetchState === FETCH_STATES.ERROR && (
            <p className='Delete__error'>Ocurrió un error inesperado</p>
          )}
          <HiXCircle className='Delete__content-close' onClick={onClose} />
        </div>
      </div>
    </>
  )
}
