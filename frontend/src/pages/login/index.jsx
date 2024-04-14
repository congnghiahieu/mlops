import { message } from 'antd'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Cookies from 'universal-cookie'
import * as auth from '../../api/auth'
import logo from '../../assets/images/logo.png'
import useAuth from '../../hooks/useAuth'
import { validateEmail, validatePassword } from '../../utils/validate'

const Login = () => {
    const cookies = new Cookies()
    const navigate = useNavigate()
    const { login } = useAuth()
    const { state } = useLocation();

    const onLogin = async (credential) => {
        try {
            const response = await auth.login(credential)
            const { access_token: accessToken, refresh_token: refreshToken } = response.data;
            login({ accessToken, refreshToken }).then(() => {
                navigate(state?.path || '/app/projects', { replace: true })
            });
        } catch (error) {
            console.error(error)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')
        const credential = {
            email,
            password,
        }
        // validate user info
        if (!validateEmail(credential.email)) {
            return message.error('Email is invalid.')
        }

        if (!validatePassword(credential.password)) {
            return message.error('Password is invalid.')
        }
        onLogin(credential)
    }

    return (
        <>
            <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
                <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                    <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                        <div className="text-center">
                            <img src={logo} width={150} className="mx-auto" alt="logo" />
                            <div className="mt-5 space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Login</h3>
                            </div>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div>
                                <label className="font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150">
                                Login{' '}
                            </button>
                        </form>
                        <p className="mt-4">
                            Don't have an account?{' '}
                            <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login
