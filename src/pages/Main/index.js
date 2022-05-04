import { useState } from 'react'
import Logo from '../../components/Logo'
import Modal from '../../components/Modal'
import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'
import Head from '../../components/Head'
import Ellipse1 from '../../../public/Main/Ellipse1.png'
import Ellipse2 from '../../../public/Main/Ellipse2.png'
import Ellipse3 from '../../../public/Main/Ellipse3.png'
import './index.scss'

const TO_RENDER_MODAL = {
  SignUp: 1,
  SignIn: 2,
  Closed: 0
}

export default function Main() {
  const [modalContent, setModalContent] = useState(TO_RENDER_MODAL.Closed)

  const onOpenSignUpModal = (e) => {
    //OPEN SIGNUP MODAL
    setModalContent(TO_RENDER_MODAL.SignUp)
  }

  const onOpenSignInModal = (e) => {
    //OPEN SIGNIN MODAL
    setModalContent(TO_RENDER_MODAL.SignIn)
  }

  const onCloseModal = (e) => {
    //CLOSE MODAL
    setModalContent(TO_RENDER_MODAL.Closed)
  }

  return (
    <>
      <Head
        title='Ingreso'
        desc='Página de ingresó a la aplicación, para iniciar sesión o registrarse.'
      />
      <div className='main'>
        <header>
          <Logo big={true} />
          <h1>Un lugar para expressar tus ideas</h1>
        </header>
        <section className='main__buttons'>
          <button onClick={onOpenSignUpModal}>Registrarme</button>
          <button onClick={onOpenSignInModal}>Iniciar sesión</button>
        </section>
        <img src={Ellipse1} className='elipse a' />
        <img src={Ellipse2} className='elipse b' />
        <img src={Ellipse3} className='elipse c' />
        <Modal openModal={modalContent}>
          {/* DEFINE IF SEND TO MODAL THE SIGNUP OR SIGNIN MODAL */}
          {modalContent === TO_RENDER_MODAL.SignUp ? (
            <SignUpForm
              onClose={onCloseModal}
              onOpenOtherModal={onOpenSignInModal}
            />
          ) : (
            <SignInForm
              onClose={onCloseModal}
              onOpenOtherModal={onOpenSignUpModal}
            />
          )}
        </Modal>
      </div>
    </>
  )
}
