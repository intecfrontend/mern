import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">My Blog</Link>
        <nav>
          <Link to="/login" className="logo">Login</Link>
          <Link to="/register" className="logo">Register</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header