import React, { Fragment } from 'react';
import EmptyHeader from '../components/app/EmptyHeader';
import RegisterForm from '../components/Register/RegisterForm';

const Register = () => {
    return (
        <Fragment>
            <EmptyHeader />
            <RegisterForm />
        </Fragment>
    )
}

export default Register;