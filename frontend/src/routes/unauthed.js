import { paths } from 'src/constants/paths';

import UnAuthed from 'src/layouts/UnAuthed';
import Home from 'src/pages/home';
import Login from 'src/pages/login';
import SignUp from 'src/pages/signup';

const routes = {
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
    ],
};

export default routes;
