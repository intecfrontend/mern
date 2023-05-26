import React from 'react'

function RegisterPage() {
  return (
    <div>RegisterPage

    <form className="register" >
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             />
      <input type="password"
             placeholder="password"
            />
      <button>Register</button>
    </form>
    </div>
  )
}

export default RegisterPage