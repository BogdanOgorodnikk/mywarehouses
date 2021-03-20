import React, { Fragment } from 'react'
import Header from '../components/app/Header'
import Nav from '../components/app/Nav'
import AccountForm from '../components/myaccount/AccountForm'

const MyAccount = () => {
    return (
        <Fragment>
            <Header />
            <Nav />
            <AccountForm />
        </Fragment>
    )
}

export default MyAccount;