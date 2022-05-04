import { Formik } from 'formik'
import './index.scss'

export default function SearchForm({ handleSearch }) {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values) => {
        await handleSearch(values)
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <form className='Search__form' onSubmit={handleSubmit}>
          <input
            placeholder='Ingresa aquí el nombre de la persona'
            onChange={handleChange}
            name='name'
            required
          />
          <button type='submit'>Buscar</button>
        </form>
      )}
    </Formik>
  )
}
