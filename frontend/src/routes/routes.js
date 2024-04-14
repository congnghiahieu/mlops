import { paths } from 'src/assets/data/routes'
import UnAuthed from "src/layouts/UnAuthed"
import DefaultLayout from 'src/layouts/DefaultLayout'

import Home from 'src/pages/home'
import Login from 'src/pages/login'
import Dashboard from 'src/pages/dashboard'
import Projects from 'src/pages/projects'
import Upload from 'src/pages/upload'
import Preview from 'src/pages/preview'
import NewProject from 'src/pages/new-project'
import SignUp from 'src/pages/signup'
import Profile from 'src/pages/profile'
import Settings from 'src/pages/settings'
import ModelList from 'src/pages/models/list'
import Predict from 'src/pages/predict'
import RequireAuth from 'src/layouts/RequireAuth'

const routes = [
    {
        element: <UnAuthed />,
        children: [
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
            {
                path: paths.DEFAULT,
                element: <RequireAuth />,
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
    },
]

export default routes
