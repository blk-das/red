import { createPortal } from 'react-dom'
import './index.scss'

export default function ModalPortal({ children, openModal }) {
  return createPortal(
    <section>
      {openModal && <section className='enterModal'>{children}</section>}
    </section>,
    document.getElementById('modal-root')
  )
}
