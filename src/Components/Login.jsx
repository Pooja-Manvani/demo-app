import React from 'react'

export default function Login() {
  
  return (
    <form className='p-4' >
 <h2 className="card-title text-center">Login Page</h2>
    <div className="mb-3">
      <label className='fw-bold align-items-start' >Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>

    <div className="mb-3">
      <label className='fw-bold align-items-start' >Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>

    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input "
          id="customCheckbox"
        />
        <label className="custom-control-label" htmlFor="customCheckbox">
           Remember me
        </label>
      </div>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-custom">
        Submit
      </button>
    </div>
    <p className="forgot-password text-right text-primary mb-3 text-decoration-underline">
      Forgot password?
    </p>
    
  </form>
  )
}
