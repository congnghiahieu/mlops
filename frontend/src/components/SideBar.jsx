import React, { useState } from 'react';
import {
	BuildIcon,
	SettingIcon,
	ModelIcon,
	DeployIcon,
	TasksIcon,
} from 'src/components/icons';
import clsx from 'clsx';

const navigation = [
	{ name: 'Build', href: '#', icon: BuildIcon, current: true },
	{ name: 'Model', href: '#', icon: ModelIcon, current: false },
	{ name: 'Deploy', href: '#', icon: DeployIcon, current: false },
	{ name: 'Tasks', href: '#', icon: TasksIcon, current: false },
];

const SideBar = ({ className }) => {
	const [isOpen, setIsOpen] = useState(true);
	const toggleSideBar = () => {
		setIsOpen(!isOpen);
	};

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
									{isOpen && item.name}
								</span>
							</a>
						))}

						{/*<div
                            className="top-10 left-8 text-gray-400 cursor-pointer h-[40px] w-[40px]"
                            onClick={toggleSideBar}
                        >
                            <ChevronLeftIcon
                                className={clsx(
                                    isOpen && 'rotate-180',
                                    'h-10 w-10 absolute cursor-pointer px-1'
                                )}
                            />
                        </div>*/}
					</nav>
					<a
						href="#"
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

export default SideBar;
