import React from 'react'

import Header from '../../components/Header'

const AuthLayout = ({children}) => (
    <>
        <Header/>
        {children}
    </>
)

export default AuthLayout