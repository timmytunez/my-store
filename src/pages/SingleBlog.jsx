import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
import {HiOutlineArrowLeft} from 'react-icons/hi'

const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <Breadcrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs' className='d-flex align-content-center gap-10'>
                  <HiOutlineArrowLeft className='fs-4'/>
                  Go back to blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="/images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit atque dolorum omnis possimus ea expedita architecto blanditiis esse autem nemo necessitatibus eaque perferendis dolorem, debitis fugiat maxime nobis reiciendis molestiae aliquid, itaque explicabo commodi delectus! Ut, asperiores. A, illum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleBlog