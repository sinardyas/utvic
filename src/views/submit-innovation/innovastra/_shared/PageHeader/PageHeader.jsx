import React from 'react'
import NavigationBar from '../../../_shared/NavigationBar'

function PageHeader () {
  return (
    <NavigationBar
      ariaLabel={'Submit Innovation'}
      navigations={
        [
          {
            title: 'Profil Inovasi',
            url: '/submit-innovation/innovastra/innovation-profile',
          },
          {
            title: 'Dokumen',
            url: '/submit-innovation/innovastra/document',
          },
          {
            title: 'Prestasi',
            url: '/submit-innovation/innovastra/achievement',
          },
        ]
      }
    />
  )
}

export default PageHeader
