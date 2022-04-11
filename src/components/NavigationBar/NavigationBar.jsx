import React from 'react';
import { Link as RouterLink } from 'react-router-dom'

function NavigationBar({ ariaLabel, navigations }) {
    return (
      <section className="md:flex md:my-12 my-6">
        <nav className={'container'} aria-label={ariaLabel}>
          <ul className={'flex space-x-8 overflow-x-auto'}>
            {
              navigations.map(({ title, url }) => {
                const isActive = document.location.pathname === url
                const activeStyle = isActive
                  ? 'bg-amber-300 font-bold rounded-lg'
                  : ''

                return (
                  <li
                    className={`first:ml-auto last:!mr-auto`}
                    key={url}
                  >
                    <RouterLink
                      className={`block p-5 whitespace-nowrap ${activeStyle}`}
                      to={url}
                    >
                      {title}
                    </RouterLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </section>
    );
}

export default NavigationBar;
