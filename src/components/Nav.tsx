import React from 'react'
import clsx from 'clsx'
function Nav({
  handleNavClick,
  navToggle,
}: {
  handleNavClick: React.MouseEventHandler
  navToggle: boolean
}) {
  return (
    <nav className="bg-white">
      <div className="relative  lg:flex gap-10 max-w-1110 mx-auto lg:py-12 py-10 items-center lg:justify-start justify-between px-6 lg:px-0">
        <div className="flex justify-between">
          <a href="#">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <button
            className={clsx('lg:hidden w-[24px] h-[24px]')}
            onClick={handleNavClick}
          >
            <img
              src={clsx(
                navToggle ? '/images/menu-x.svg' : '/images/menu-ham.svg'
              )}
              alt="menu button"
            />
          </button>
        </div>
        <div
          className={clsx(
            navToggle ? 'flex' : 'hidden',
            'absolute left-6 right-6 mt-10 lg:mt-0 flex-1 items-center lg:flex lg:flex-row flex-col lg:py-0 lg:bg-transparent bg-dark-violet lg:static py-10 px-6 rounded-lg lg:justify-between lg:px-0 z-50'
          )}
        >
          <ul className="pb-6 lg:pb-0 lg:py-0 flex flex-col gap-10 text-gray-50 lg:text-grayish-violet lg:border-none font-bold items-center w-full lg:w-auto border-b-2 border-grayish-violet lg:flex-row">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <ul className="pt-6 lg:pt-0 flex gap-10 lg:py-0 lg:text-grayish-violet font-bold w-full lg:w-auto lg:flex-row flex-col items-center text-gray-50">
            <li className="flex lg:block">
              <a href="#">Login</a>
            </li>
            <li className="w-full lg:w-auto">
              <a
                href="#"
                className="py-3 px-6 bg-cyan rounded-full block text-center text-gray-50"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav
