import React, { useState } from 'react';
import {
    BuildIcon,
    SettingIcon,
    ModelIcon,
    DeployIcon,
    TasksIcon,
} from 'src/components/icons';
import clsx from 'clsx';

const ProjectSidebar = ({ projectID, className }) => {
    const navigation = [
        { name: 'Build', href: `/app/project/${projectID}/build`, icon: BuildIcon, current: false },
        { name: 'Model', href: `/app/project/${projectID}/model`, icon: ModelIcon, current: false },
        { name: 'Deploy', href: `/app/project/${projectID}/deploy`, icon: DeployIcon, current: false },
        { name: 'Tasks', href: `/app/project/${projectID}/tasks`, icon: TasksIcon, current: false },
    ];

    return (
        <div className={clsx('w-[80px]', 'duration-300 relative', className)}>
            <div className="fixed h-[calc(100vh-60px)] w-[80px] flex flex-grow flex-col overflow-y-auto bg-blue-50">
                <div className="py-3 flex flex-grow flex-col justify-between">
                    <nav className="flex flex-col gap-4 px-2 pb-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    item.current
                                        ? 'text-blue-900'
                                        : 'text-center text-gray-600 hover:text-blue-900',
                                    'transition group flex flex-col items-center justify-center text-sm font-medium'
                                )}
                            >
                                <item.icon
                                    className={clsx(
                                        item.current
                                            ? 'bg-blue-200 text-blue-900'
                                            : 'text-gray-400 group-hover:bg-blue-200 group-hover:text-blue-900',
                                        'mx-auto flex-shrink-0 rounded-xl w-11 h-11',
                                        'p-2'
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="text-xs font-semibold">
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </nav>
                    <a
                        href={`/app/project/${projectID}/settings`}
                        className={clsx(
                            'text-center text-gray-600 hover:text-blue-900',
                            'transition group flex flex-col items-center text-sm font-medium'
                        )}
                    >
                        <SettingIcon
                            className={clsx(
                                'text-gray-400 group-hover:bg-blue-200 group-hover:text-blue-900',
                                'flex-shrink-0 rounded-xl w-11 h-11',
                                'px-2 py-2'
                            )}
                        />

                        <span className="text-xs font-semibold">Settings</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectSidebar;
