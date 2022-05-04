import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { HiXCircle } from 'react-icons/hi'
import signIn from '../../services/sign-in'
import { setStorage } from '../../utils/storage'
import Context from '../../Context/authContext'
import '../../styles/signForms.scss'

export default function SignInForm({ onClose, onOpenOtherModal }) {
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { setJwt } = useContext(Context)

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        try {
          const { email, password } = values
          const response = await signIn({ email, password }) // MAKE SIGNin
          setStorage({ name: 'token', value: response }) // SAVE TOKEN ON LOCAL STORAGE
          setJwt(response) // SET TOKEN ON CONTEXT
          navigate('/home')
          // location.replace('/home')
        } catch (error) {
          console.log(error.message)
          setError('Usuario o contraseña incorrecto')
        }
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} className='signForm'>
            <h2>Iniciar sesión</h2>
            <input
              type='email'
              placeholder='Correo electronico'
              required
              onChange={handleChange}
              name='email'
            />
            <input
              type='password'
              placeholder='Contraseña'
              required
              onChange={handleChange}
              name='password'
            />
            <button className='signForm__button' disabled={isSubmitting}>
              Ingresar
            </button>
            {error && <p className='signForm__error'>{error}</p>}
            <p className='signForm__cta'>
              ¿No tienes una cuenta?
              <button
                className='signForm__cta-link'
                type='button'
                onClick={onOpenOtherModal}
              >
                Registrate
              </button>
            </p>
            <HiXCircle className='signForm__close' onClick={onClose} />
          </form>
        )
      }}
    </Formik>
  )
}
