import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
import Dolors from '../components/Dolors';
const CompareProduct = () => {
  return (
    <>
      <Meta title={'Our Contacts'} />
      <Breadcrumb title="Contact Us" />
      <div className="compare-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor TI 7.0 1 GB ROM 8 GB ROM Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>

                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colors:</h5>
                    <Dolors />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor TI 7.0 1 GB ROM 8 GB ROM Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>

                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colors:</h5>
                    <Dolors />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareProduct