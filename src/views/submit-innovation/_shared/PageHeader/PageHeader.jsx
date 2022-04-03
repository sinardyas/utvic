import React from 'react';
import { Link as RouterLink } from 'react-router-dom'

function PageHeader(props) {
    return (
      <section className="md:flex md:my-12 my-6">
        <nav className={'container'} aria-label={'Submit Innovation'}>
          <ul className={'flex space-x-8 overflow-x-auto'}>
            {
              [
                {
                  title: 'Profil Inovasi',
                  url: '/submit-innovation/innovation-profile',
                },
                {
                  title: 'Analisis',
                  url: '/submit-innovation/analysis-profile',
                },
                {
                  title: 'Ide',
                  url: '/submit-innovation/idea-profile',
                },
                {
                  title: 'Result',
                  url: '/submit-innovation/result-profile',
                },
                {
                  title: 'Dokumen',
                  url: '/submit-innovation/document-profile',
                },
              ].map(({ title, url }) => {
                const isActive = document.location.pathname === url
                const activeStyle = isActive
                  ? 'bg-amber-300 font-bold rounded-lg'
                  : ''

                return (
                  <li
                    className={`p-5 first:ml-auto last:!mr-auto whitespace-nowrap ${activeStyle}`}
                    key={url}
                  >
                    <RouterLink
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

export default PageHeader;
