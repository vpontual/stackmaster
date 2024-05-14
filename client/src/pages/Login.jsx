import { useState } from 'react'
// import { Link } from 'react-router-dom';

// import useMatation from apollo here
// import mutuation from utils here

// import authentication here

export default function Login(props) {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  // use mutation here to add user

  const handleChange = event => {
    const { name, value } = event.target

    setFormState({ ...formState, [name]: value })

    // reset error when user types
    setErrors({ ...errors, [name]: '' })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(formState)
    let valid = true

    // validate username field
    if (!formState.username.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        username: 'Username is required',
      }))
      valid = false
    }

    // validate password format
    if (!formState.password.trim()) {
      // validate password field
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Password is required',
      }))
      valid = false
    }

    // add try catch error for add user and authenticate login

    // valid form
    if (valid) {
      console.log('Form submitted:', formState)

      // reset form after login
      setFormState({
        username: '',
        password: '',
      })
    }
  }

  return <div>Hello</div>
}
