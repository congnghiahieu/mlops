import { paths } from '../assets/data/routes'
import UnAuthed from "../components/layouts/UnAuthed"
import DefaultLayout from '../components/layouts/DefaultLayout'

import Home from '../pages/home'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import Projects from '../pages/projects'
import Upload from '../pages/upload'
import Preview from '../pages/preview'
import NewProject from '../pages/new-project'
import SignUp from '../pages/signup'
import Profile from '../pages/profile'
import Settings from '../pages/settings'
import ModelList from '../pages/models/list'
import Predict from '../pages/predict'

const routes = [
    {
        element: <UnAuthed />, children: [
            {
                path: paths.ROOT,
                element: <Login />,
            },
            {
                path: paths.LOGIN,
                element: <Login />,
            },
            {
                path: paths.SIGNUP,
                element: <SignUp />,
            },
        ]
    },
    {
        element: <DefaultLayout />, children: [
            {
                path: paths.PROFILE,
                element: <Profile />,
            },
            {
                path: paths.SETTINGS,
                element: <Settings />,
            },
        ]
    },
    {
        path: paths.DEFAULT,
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                path: paths.DASHBOARD,
                element: <Dashboard />,
            },
            {
                path: paths.PROJECTS,
                element: <Projects />,
            },

            {
                path: '/app/upload',
                element: <Upload />,
            },
            {
                path: '/app/preview',
                element: <Preview />,
            },
            {
                path: '/app/new-project',
                element: <NewProject />,
            },
            {
                path: '/app/models',
                element: <ModelList />,
            },
            {
                path: '/app/predict',
                element: <Predict />,
            },
        ],
    },
]

export default routes
