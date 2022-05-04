import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IdeasList from '../../components/IdeasList'

describe('<IdeasList />', () => {
  test('Is rendering with null', () => {
    const view = render(<IdeasList ideas={null} />)
    expect(view.container).toHaveTextContent(
      'Ocurrio un error al traer las publicaciones'
    )
  })

  test('Is rendering with false', () => {
    const view = render(<IdeasList ideas={false} />)
    expect(view.container).toHaveTextContent('No se encontraron publicaciones')
  })

  test('Is rendering with data', () => {
    const list = [
      {
        content: 'test',
        date: 1645636623453,
        imageId: '',
        imageUrl: '',
        likes: [],
        _id: '1',
        user: {
          coverPhotoId: 'test',
          coverPhotoUrl: 'test.png',
          description: 'test',
          followedPeople: [('1', '2')],
          likedPost: [('1', '2', '3', '4', '5')],
          name: 'Test name',
          profilePhotoId: 'test.jpg',
          profilePhotoUrl: 'test.png',
          _id: '1'
        }
      }
    ]
    const view = render(<IdeasList ideas={list} />)

    expect(view.container).toHaveTextContent('test')
  })
})
