import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
const ShoppingPolicy = () => {
    return (
        <>
            <Meta title={'Shipping Policy'} />
            <Breadcrumb title="Shipping Policy" />
            <section className="policy-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingPolicy