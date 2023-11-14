import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] = useState(true);
    return (
        <>
            <Meta title={'Product Name'} />
            <Breadcrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <section className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <p className="bg-white p-3">
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
                <section className="reviews-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
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