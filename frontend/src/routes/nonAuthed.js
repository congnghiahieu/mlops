import { paths } from 'src/constants/paths';

import NonAuthed from 'src/layouts/nonAuthed';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import SignUp from 'src/pages/signup';

const routes = {
    element: <NonAuthed />,
    children: [
        {
            path: paths.ROOT,
            element: <Home />,
        },
        {
            path: paths.LOGIN,
            element: <Login />,
        },
        {
            path: paths.SIGNUP,
            element: <SignUp />,
        },
    ],
};

export default routes;
