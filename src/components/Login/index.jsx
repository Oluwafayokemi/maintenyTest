import React, { useState } from 'react'
import { postData } from '../../apiRequest'

const url = 'https://www.hgjyuk.com/server/api/auth/login'

export const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' })

  const handleSumbit = async (event) => {
    event.preventDefault()
    const getUser = await postData(url, user)
  }

  const handlechange = (event) => {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value
    });
  }
  console.log(user, '########')
  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleSumbit}>
        <label>username:
        <input type="text" name="username" onChange={handlechange} value={user.username} />
        </label>
        <label>password:
        <input type="password" name="password" onChange={handlechange} value={user.password} />
        </label>
        <div><input type="submit" /></div>
      </form>

    </div>
  )
}