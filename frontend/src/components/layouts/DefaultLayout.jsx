import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import RequireAuth from './RequireAuth'

const DefaultLayout = () => {
    return (
        <RequireAuth>
            <NavBar />
            <Outlet className="outlet" />
        </RequireAuth>
    )
}

export default DefaultLayout
