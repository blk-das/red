import Logo from '../../components/Logo'
import Head from '../../components/Head'
import NotFoundImage from '../../../public/NotFoundImage.png'
import Ellipse1 from '../../../public/Main/Ellipse1.png'
import Ellipse2 from '../../../public/Main/Ellipse2.png'
import Ellipse3 from '../../../public/Main/Ellipse3.png'
import './index.scss'

export default function Home() {
  return (
    <>
      <Head
        title='404 Página no encontrada'
        desc='Página indicando que no se encontró la página buscada'
      />
      <div className='NotFound'>
        <Logo big={true} />
        <section className='NotFound__content'>
          <img src={NotFoundImage} alt='404: Not Found' />
          <h2>No pudimos encontrar la página que estás buscando.</h2>
        </section>
        <img src={Ellipse1} className='elipse a' />
        <img src={Ellipse2} className='elipse b' />
        <img src={Ellipse3} className='elipse c' />
      </div>
    </>
  )
}
