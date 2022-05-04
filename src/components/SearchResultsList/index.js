import SearchResult from '../SearchResult'
import './index.scss'

export default function SearchResultsList({ results, id }) {
  return (
    <section className='results'>
      <ul>
        {results !== null && results.length === 0 && (
          <h2>No se encontraron personas con ese nombre.</h2>
        )}
        {results && results.length > 0 && (
          <>
            <h4>Resultados</h4>
            {results.map((person) => (
              <SearchResult
                key={person._id}
                userId={id}
                personId={person._id}
                profilePhotoUrl={person.profilePhotoUrl}
                name={person.name}
              />
            ))}
          </>
        )}
      </ul>
    </section>
  )
}
