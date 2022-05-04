import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import EditProfileForm from '../../components/EditProfileForm'
import '@testing-library/jest-dom/extend-expect'

describe('<EditProfileForm />', () => {
  let view
  let mockEvent = jest.fn()
  beforeEach(() => {
    view = render(
      <EditProfileForm
        handleSubmit={mockEvent}
        profile={{ name: 'test', description: 'test' }}
        handleInputTextChange={mockEvent}
        handleInputImageChange={mockEvent}
      />
    )
  })

  test('Is rendering', () => {
    expect(view.container).toHaveTextContent('Cambiar')
  })

  test('Form is sending', () => {
    const button = view.getByText('Actualizar')
    fireEvent.submit(button.parentNode)
    expect(mockEvent).toHaveBeenCalledTimes(1)
  })

  test('Inputs are changing', () => {
    const fileInputA = view.getByLabelText('profilePhotoUrl')
    const fileInputB = view.getByLabelText('coverPhotoUrl')
    const nameInputA = view.getByPlaceholderText('Nombre')
    const nameInputB = view.getByPlaceholderText('Descripción')

    fireEvent.change(fileInputA, {
      target: {
        files: [new File(['testing'], 'testing.png', { type: 'image/png' })]
      }
    })
    fireEvent.change(fileInputB, {
      target: {
        files: [new File(['testing'], 'testing.png', { type: 'image/png' })]
      }
    })
    fireEvent.change(nameInputA, { target: { value: 'testing' } })
    fireEvent.change(nameInputB, { target: { value: 'testing' } })

    expect(mockEvent).toHaveBeenCalledTimes(5) //El valor esta cambiando
    expect(nameInputA.value).toBe('test') //El value sigue siendo test, porque en este caso, el valor se define en la prop profile
    expect(nameInputB.value).toBe('test') //El value sigue siendo test, porque en este caso, el valor se define en la prop profile
  })
})
