// form testing
// http://localhost:3000/login

import * as React from 'react'
import {getByLabelText, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  let submittedData;
  const username = 'Chuck Norris'
  const password =  'ineednopassword'
  const handleSubmit = (data) => { submittedData = data }
  render(<Login onSubmit={handleSubmit} />)
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', /submit/i))
  expect(submittedData).toEqual({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
