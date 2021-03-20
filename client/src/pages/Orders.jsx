import React, { Fragment } from 'react'
import Header from '../components/app/Header'
import Nav from '../components/app/Nav'
import OrdersList from '../components/orders/OrdersList'

const Orders = () => {
    return (
        <Fragment>
            <Header />
            <Nav />
            <OrdersList />
        </Fragment>
    )
}

export default Orders