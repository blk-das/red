import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import IdeaMenu from '../../components/IdeaMenu'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('<IdeaMenu />', () => {
  let view
  const mockNavigate = jest.fn()

  beforeEach(() => {
    view = render(
      <BrowserRouter>
        <IdeaMenu handleNavigate={mockNavigate} handleOpenMenu={mockNavigate} />
      </BrowserRouter>
    )
  })

  test('Is rendering', () => {
    expect(view.container).toHaveTextContent('Eliminar')
  })

  test('Is deleting', () => {
    const deleteButton = view.getByText('Eliminar')
    fireEvent.click(deleteButton)

    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })

  test('Is closing menu', () => {
    const closingButton = view.getByText('Cerrar menú')
    fireEvent.click(closingButton)

    expect(mockNavigate).toHaveBeenCalledTimes(2)
  })
})
