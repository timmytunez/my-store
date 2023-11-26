import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom'
import Dolors from '../components/Dolors';
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'

const SingleProduct = () => {
    const props = { width: 600, height: 600, zommWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    const [orderedProduct, setorderProduct] = useState(true);

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
    return (
        <>
            <Meta title={'Product Name'} />
            <Breadcrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img src="/images/watches.jpeg" className='img-fluid' alt="" />
                                </div>
                                <div>
                                    <img src="/images/watches.jpeg" className='img-fluid' alt="" />
                                </div>
                                <div>
                                    <img src="/images/watches.jpeg" className='img-fluid' alt="" />
                                </div>
                                <div>
                                    <img src="/images/watches.jpeg" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className='title'>
                                        Watches Bulk 10 Pack Multi Colored For Men
                                    </h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>$ 100.00</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            exit={false}
                                            activeColor='#ffd700'
                                        />
                                        <p className='mb-0 t-review'>(2 Reviews)</p>
                                    </div>
                                    <a className='review-btn' href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Type :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>Havels</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Category :</h3>
                                        <p className='product-data'>GFd</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Avaliability :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>
                                                S
                                            </span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>
                                                M
                                            </span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>
                                                XL
                                            </span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>
                                                XXL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className='product-heading'>Colors :</h3>
                                        <Dolors />
                                    </div>
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                        <h3 className='product-heading'>Quatity :</h3>
                                        <div>
                                            <input
                                                type="number"
                                                name=''
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{ width: "70px" }}
                                                id=''
                                            />
                                        </div>
                                        <div className='d-flex align-items-center gap-15 ms-5'>
                                            <button className='button border-0' type='submit'>
                                                Add to Cart
                                            </button>
                                            <button className='button signup'>
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href="/">
                                                <TbGitCompare className='fs-5 me-2  ' /> Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/"> <AiOutlineHeart className='fs-5 me-2  ' /> Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column my-3">
                                        <h3 className='product-heading'>Shipping & Return :</h3>
                                        <p className='product-data'>
                                            Free shipping and returns avalable on all orders! <br />
                                            We ship all all US domestic order within <b>5-10 business days</b>
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className='product-heading'>Product Link :</h3>
                                        <a href="javascript:void(0);" onClick={() => {
                                            copyToClipboard(
                                                'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                            )
                                        }}>Copy Product Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Perspiciatis, odit officia corrupti porro blanditiis maxime
                                    eveniet eum quis dolores molestias et pariatur?
                                    Praesentium natus repellat ducimus ipsa error non,
                                    animi quam ad. Eveniet quia magnam possimus fuga.
                                    Impedit optio qui blanditiis, commodi voluptatibus
                                    facilis nulla natus mollitia labore rerum officiis!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="reviews-wrapper home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <h3 id='review'>Reviews</h3>
                                <div className="reviews-inner-wrapper">
                                    <div className="reviews-head d-flex justify-content-between align-items-end">
                                        <div>
                                            <h4 className='mb-2'>Customer Reviews</h4>
                                            <div className='d-flex align-items-center gap-10'>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    exit={false}
                                                    activeColor='#ffd700'
                                                />
                                                <p className='mb-0'>Based on 2 Reviews</p>
                                            </div>
                                        </div>
                                        {orderedProduct && (
                                            <div>
                                                <a className='text-dark text-decoration-underline'
                                                    href="/">
                                                    Write a Review
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <div id='review' className="review-form py-4">
                                        <h4>Write a Review</h4>
                                        <form action="" className='d-flex flex-column gap-15'>
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    exit={true}
                                                    activeColor='#ffd700'
                                                />
                                            </div>
                                            <div>
                                                <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='button border-0'>Submit Review</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="reviews mt-3">
                                        <div className="review">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className='mb-0'>Navdeep</h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    exit={false}
                                                    activeColor='#ffd700'
                                                />
                                            </div >
                                            <div className='mt-3'>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laudantium nobis cupiditate doloribus qui esse nostrum culpa sapiente repellendus, ex nulla! At dignissimos cum nesciunt asperiores sunt accusantium quo veniam, dolorum reprehenderit inventore, temporibus sint!</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='popular-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className='row'>
                        <div className="col-12">
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                        <div>
                            <div className="row">
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SingleProduct