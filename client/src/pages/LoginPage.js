import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
// import './App.css';
// import {UserContext} from "../UserContext";

export default function LoginPage() {
  return (
    <div>
      <form  className="login" action="#" >
        <input type="text"
          placeholder={'Title'} />
        <input type="password"
          placeholder={'Summary'} />
        <button style={{ marginTop: '5px' }}>Login</button>
      </form>
    </div>
  )
}