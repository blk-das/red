import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LikedButton from '../../components/LikedButton'

describe('<LikedButton/ >', () => {
  test('Is rendering', () => {
    const data = { likes: ['a'], userId: '1', postId: '1' }
    const view = render(<LikedButton {...data} />)
    expect(view.container).toHaveTextContent(1)
  })
})
