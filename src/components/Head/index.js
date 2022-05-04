import { Helmet } from 'react-helmet'

export default function Head({ title, desc }) {
  return (
    <Helmet>
      <title>Miriio - {title}</title>
      <meta name='description' content={desc} />
    </Helmet>
  )
}
