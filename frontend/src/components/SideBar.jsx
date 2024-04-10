import React, { useState } from 'react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import logo from '../assets/images/logo.png'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
  { name: 'Team', href: '#', icon: UsersIcon, current: true },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={classNames(
        isOpen ? 'md:w-48' : 'md:w-16',
        'hidden md:inset-y-0 md:flex md:flex-col duration-300 float-left h-screen relative'
      )}
    >
      <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="mt-3 flex flex-grow flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {isOpen ? item.name : ''}
              </a>
            ))}
            <div
              className="top-10 left-8 text-gray-400 cursor-pointer h-[40px] w-[40px]"
              onClick={toggleSideBar}
            >
              <ChevronLeftIcon
                className={classNames(
                  isOpen ? '' : 'rotate-180',
                  'h-10 w-10 absolute cursor-pointer px-1'
                )}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar
