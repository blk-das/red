import { useContext, useState } from 'react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { HiXCircle } from 'react-icons/hi'
import { setStorage } from '../../utils/storage'
import Context from '../../Context/authContext'
import signUp from '../../services/sign-up'
import signIn from '../../services/sign-in'
import '../../styles/signForms.scss'

export default function SignUpForm({ onClose, onOpenOtherModal }) {
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { setJwt } = useContext(Context)

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={async (values) => {
        const { name, email, password } = values
        try {
          await signUp({ name, email, password }) // MAKE SIGNUP
          const jwt = await signIn({ email, password }) // MAKE SIGNIN, TO STAY LOGGED ONCE YOU SIGNED UP
          setStorage({ name: 'token', value: jwt }) // SAVE TOKEN ON LOCAL STORAGE
          setJwt(jwt) //SET TOKEN ON CONTEXT
          navigate('/home')
        } catch (error) {
          console.log(error.message)
          setError('Error al crear el usuario')
        }
      }}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} className='signForm'>
            <h2>Registro</h2>
            <input
              type='text'
              name='name'
              placeholder='Nombre completo'
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Correo electronico'
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Contraseña'
              onChange={handleChange}
            />
            <button className='signForm__button' disabled={isSubmitting}>
              Registrarse
            </button>
            {error && <p className='signForm__error'>{error}</p>}
            <p className='signForm__cta'>
              ¿Ya tienes una cuenta?
              <button
                className='signForm__cta-link'
                type='button'
                onClick={onOpenOtherModal}
              >
                Inicia sesión
              </button>
            </p>
            <HiXCircle className='signForm__close' onClick={onClose} />
          </form>
        )
      }}
    </Formik>
  )
}
