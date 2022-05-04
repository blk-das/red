import Ellipse from '../../../public/Home/Ellipse1.png'
import Ellipse1 from '../../../public/Desktop/Ellipse1.png'
import Ellipse2 from '../../../public/Desktop/Ellipse2.png'
import Logo from '../Logo'
import './index.scss'

export default function Layout({ children }) {
  return (
    <div className='Layout'>
      <Logo />
      {children}
      <img src={Ellipse} className='Layout__ellipse' />
      <img src={Ellipse1} className='Layout__ellipsed a' />
      <img src={Ellipse2} className='Layout__ellipsed b' />
    </div>
  )
}
