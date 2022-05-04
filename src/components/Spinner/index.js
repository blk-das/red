import './index.scss'

export default function Spinner() {
  return (
    <div className='Spinner'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
