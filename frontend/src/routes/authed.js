import { paths } from 'src/constants/paths';

import Dashboard from 'src/pages/dashboard';
import Projects from 'src/pages/projects';
import Upload from 'src/pages/upload';
import Preview from 'src/pages/preview';
import Profile from 'src/pages/profile';
import Settings from 'src/pages/settings';
import RequireAuth from 'src/layouts/RequireAuth';
import DefaultLayout from 'src/layouts/DefaultLayout';
import ProjectLayout from 'src/layouts/ProjectLayout';
import ProjectTasks from 'src/pages/project/tasks';
import { ProjectDeploy } from 'src/pages/project/deploy';
import ProjectModels from 'src/pages/project/models';
import ProjectBuild from 'src/pages/project/build';
import ProjectSettings from 'src/pages/project/settings';
import ProjectPredict from 'src/pages/project/predict';

const routes = {
    element: <DefaultLayout />,
    children: [
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
                    path: '/app/',
                    children: [
                        {
                            path: 'upload',
                            element: <Upload />,
                        },
                        {
                            path: 'preview',
                            element: <Preview />,
                        },
                        {
                            path: 'project/:id',
                            element: <ProjectLayout />,
                            children: [
                                {
                                    path: 'build',
                                    element: <ProjectBuild />,
                                },
                                {
                                    path: 'model',
                                    element: <ProjectModels />,
                                },
                                {
                                    path: 'deploy',
                                    element: <ProjectDeploy />,
                                },
                                {
                                    path: 'predict',
                                    element: <ProjectPredict />,
                                },
                                {
                                    path: 'tasks',
                                    element: <ProjectTasks />,
                                },
                                {
                                    path: 'settings',
                                    element: <ProjectSettings />,
                                },
                            ]
                        }
                    ]
                },
            ],
        },
    ],
};

export default routes;
