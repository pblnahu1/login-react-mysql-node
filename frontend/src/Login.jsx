import { useState } from 'react'
import axios from 'axios'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:8081/login', { email, password })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className='form-control' placeholder='Email ...' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className='form-control' placeholder='Password ...' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className='btn btn-primary'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login