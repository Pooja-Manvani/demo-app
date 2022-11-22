import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import '../assets/login.css'
import Card from '../core/Card'
import Login from './Login'
import SignUp from './SignUp'

export default function MainLayout() {
  const LoginPage = "Login page"
 
  return (
    <>
    <div className='wrapper' >
      <div className='container-layout'>
        <figure className='bg-figure'>
          <div className='overlay-image' >
            {/* Login card */}
            <Card LoginPage={LoginPage} />
          </div>
        </figure>
      </div>
    </div>
    <Routes>
      <Route path="login" element={<Login/>} ></Route>
      <Route path="signUp" element={<SignUp/>} ></Route>

      {/* 👇️ redirect to /dashboard when user goes to / */}
      <Route path="/" element={<Navigate to="/login" />} />

        {/* 👇️ only match this when no other routes match */}
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
        />
    </Routes>
  </>
  )
}
