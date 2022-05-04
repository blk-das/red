import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Hero from '../../components/Hero'
import { prettyDOM } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

describe('<Hero />', () => {
  const mockFn = jest.fn()

  test('Is rendering with no id', () => {})

  test('Is navigating and closing session', () => {
    let view = render(
      <Hero
        profilePicture='test'
        backgroundPicture='test.png'
        name='TestName'
        description='TestDesc'
        handleNavigate={mockFn}
      />
    )
    const editProfile = view.getByText('Editar perfil')
    const closeSession = view.getByText('Cerrar sesión')
    fireEvent.click(editProfile)
    fireEvent.click(closeSession)

    expect(view.container).toHaveTextContent('TestName')
    expect(view.container).toHaveTextContent('TestDesc')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  test('Is rendering with id', () => {
    const noPropsView = render(<Hero id='test' />)
    expect(noPropsView.container).not.toHaveTextContent('Cerrar sesión')
  })

  test('Is rendering background', () => {
    const heroEmpty = render(<Hero backgroundPicture='' />)
    const heroUndefined = render(<Hero backgroundPicture={undefined} />)
    const hero = render(<Hero backgroundPicture='test.jpg' />)

    const backgroundEmpty = heroEmpty.getByLabelText('backgroundImageEmp')
    const backgroundUndefined =
      heroUndefined.getByLabelText('backgroundImageUnd')
    const background = hero.getByLabelText('backgroundImage')

    expect(backgroundEmpty.src).toBe('http://localhost/test-file-stub')
    expect(backgroundUndefined.src).toBe('')
    expect(background.src).toBe('http://localhost/test.jpg')
  })

  test('Is rendering ProfileImage', () => {
    const heroEmpty = render(<Hero profilePicture='' />)
    const heroUndefined = render(<Hero profilePicture={undefined} />)
    const hero = render(<Hero profilePicture='test.jpg' />)

    const profileEmpty = heroEmpty.getByLabelText('profileImageEmp')
    const profileUndefined = heroUndefined.getByLabelText('profileImageUnd')
    const profile = hero.getByLabelText('profileImage')

    expect(profileEmpty.src).toBe('http://localhost/test-file-stub')
    expect(profileUndefined.src).toBe('')
    expect(profile.src).toBe('http://localhost/test.jpg')
  })

  test('openMenu', () => {
    const view = render(<Hero openMenu={true} />)
    const openMenu = view.getByLabelText('hero__menu')
    expect(openMenu).toHaveClass('show-menu')
  })
})
