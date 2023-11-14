import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';

const TermsAndCondition = () => {
    return (
        <>
            <Meta title={'Terms And Condition'} />
            <Breadcrumb title="Terms And Condition" />
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

export default TermsAndCondition