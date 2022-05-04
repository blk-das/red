import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import sendIdea from '../../services/sendIdea'
import useDrag from '../../hooks/useDrag'
import useIdeaContent from '../../hooks/useIdeaContent'
import './index.scss'

const FETCH_STATES = {
  ERROR: -1,
  INITIAL: 0,
  LOADING: 1,
  COMPLETE: 2
}

export default function NewIdeaForm({ id }) {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)
  const navigate = useNavigate()
  const { ideaContent, handleFileChange, handleContentChange } =
    useIdeaContent()
  const { drag, handleDragEnter, handleDragLeave, handleDrop } = useDrag({
    action: handleFileChange
  })

  const handleSumbitItea = async (e) => {
    //Enviar Idea
    e.preventDefault()
    setFetchState(FETCH_STATES.LOADING)
    try {
      await sendIdea({
        id,
        content: ideaContent.content,
        file: ideaContent.fileContent ? ideaContent.fileContent : ''
      })
      setFetchState(FETCH_STATES.COMPLETE)
      navigate('/profile')
    } catch (error) {
      setFetchState(FETCH_STATES.ERROR)
    }
  }

  return (
    <form onSubmit={handleSumbitItea} className='newIdeaForm'>
      <textarea
        placeholder='Escribe aquí lo que quieras o arrastra una imagen...'
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onChange={handleContentChange}
        name='content'
        className={`${drag === 1 && 'dragging'}`}
        value={ideaContent.content}
        required
      ></textarea>
      {ideaContent.file && (
        <figure className='newIdeaForm__image'>
          <img src={ideaContent.file} />
          <div
            className='newIdeaForm__image-cover'
            onClick={() => handleFileChange(null)}
          >
            <HiX />
          </div>
        </figure>
      )}
      <input
        type='file'
        className='newIdeaForm__imageInput'
        accept='.png, .jpeg, .jpg'
        onChange={(event) => handleFileChange(event)}
        name='file'
      />
      <button disabled={fetchState === FETCH_STATES.LOADING}>Publicar</button>
      {fetchState === FETCH_STATES.ERROR && (
        <p className='newIdeaForm__error'>Ocurrio un error inesperado</p>
      )}
    </form>
  )
}
