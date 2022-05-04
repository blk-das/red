import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Idea from '../../components/Idea'

describe('<Idea />', () => {
  test('Is rendering', () => {
    const view = render(<Idea user={{ name: 'test' }} date='11111111' />)
    expect(view.container).toHaveTextContent('test')
  })

  test('Is rendering profile photo', () => {
    const ideaEmpty = render(
      <Idea user={{ profilePhotoUrl: '' }} date='11111111' />
    )
    const ideaUndefined = render(
      <Idea user={{ profilePhotoUrl: undefined }} date='11111111' />
    )
    const idea = render(
      <Idea user={{ profilePhotoUrl: 'test.jpg' }} date='11111111' />
    )

    const profileEmpty = ideaEmpty.getByLabelText('profileEmp')
    const profileUndefined = ideaUndefined.getByLabelText('profileUnd')
    const profile = idea.getByLabelText('profile')

    expect(profileEmpty.src).toBe('http://localhost/test-file-stub')
    expect(profileUndefined.src).toBe('')
    expect(profile.src).toBe('http://localhost/test.jpg')
  })
})
