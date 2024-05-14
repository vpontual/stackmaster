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

  return (
    <main className="flex justify-center mb-4">
      <div className="w-full lg:w-10/12">
        <div className="bg-white shadow-md">
          <h4 className="bg-dark text-white py-2 px-4">Login</h4>
          <div className="p-4">
            {/* add ternary operator here with data and then load choices with Link */}
            <form onSubmit={handleFormSubmit}>
              <input
                className="w-full py-2 px-4 mt-4 border rounded-lg"
                id="nameInput"
                placeholder="Enter username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              {errors.username && <div className="text-red-500">{errors.username}</div>}
              <input
                className="w-full py-2 px-4 mt-4 border rounded-lg"
                id="passwordInput"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              {errors.password && <div className="text-red-500">{errors.password}</div>}
              <button className="w-full py-2 bg-blue-500 text-white rounded-lg cursor-pointer mt-4" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
