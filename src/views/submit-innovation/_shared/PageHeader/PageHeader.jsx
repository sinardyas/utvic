import React from 'react'
import NavigationBar from '../NavigationBar'

function PageHeader () {
  return (
    <NavigationBar
      ariaLabel={'Submit Innovation'}
      navigations={
        [
          {
            title: 'Profil Inovasi',
            url: '/submit-innovation/innovation-profile',
          },
          {
            title: 'Analisis',
            url: '/submit-innovation/analysis',
          },
          {
            title: 'Ide',
            url: '/submit-innovation/idea',
          },
          {
            title: 'Result',
            url: '/submit-innovation/result',
          },
          {
            title: 'Dokumen',
            url: '/submit-innovation/document',
          },
        ]
      }
    />
  )
}

export default PageHeader
