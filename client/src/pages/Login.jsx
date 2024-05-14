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

  return <div>Hello</div>
}
