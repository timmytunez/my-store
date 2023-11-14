import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
const Signup = () => {
  return (
    <>
      <Meta title={'Sign Up'} />
      <Breadcrumb title="Sign Up" />
      <div className="container-xxl">
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Sign Up</h3>
              <form action="" className='d-flex flex-column gap-15'>
              <div>
                  <input type="text" placeholder='Name' name='name' className='form-control' />
                </div>
                <div>
                  <input type="email" placeholder='Email' name='email' className='form-control' />
                </div>
                <div>
                  <input type="tel" placeholder='Mobile Number' name='mobile' className='form-control' />
                </div>
                <div className='mt-1'>
                  <input type="password" name='password' className='form-control' placeholder='Password' />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className='button border-0'>Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Signup