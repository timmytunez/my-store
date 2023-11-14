import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Forgetpassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <Breadcrumb title="Forgot Password" />
      <div className="container-xxl">
        <div className="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Reset Your Password</h3>
                <p className="text-center mt-2 mb-3">We will send you an email to reset your password</p>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="email" placeholder='Email' name='email' className='form-control' />
                  </div>
                  <div className='mt-1'>
                  </div>
                  <div>
                    <div className=" d-flex flex-column text-center gap-15 align-items-center">
                      <button className='button border-0' type='submit'>Submit</button>
                      <Link to='/login'>Cancel</Link>
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

export default Forgetpassword