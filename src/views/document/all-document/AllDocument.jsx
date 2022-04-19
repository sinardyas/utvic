import React from 'react'
import NavigationBar from '../../../components/NavigationBar'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import SearchIcon from '../../../assets/images/search-form.png'
import TextInput from '../../../components/TextInput'
import DocumentsView from './partials/DocumentsView'

function Layout () {

  return (
    <section>
      <div className={'container mb-8'}>
        <div className={'flex justify-end md:justify-start'}>
          <button
            className={'block md:hidden rounded-full p-2 !bg-gray-200 mb-3'}
          >
            <img
              className={'min-w-[24px] w-[24px] h-[24px]'}
              alt={'add-folder'}
              src={SearchIcon}
            />
          </button>

          <TextInput
            containerClassName={'hidden md:block'}
            labelText={'Search'}
            labelId={'search'}
            placeholder={'Ketik yang ingin dicari'}
            startAdornment={(
              <img
                className={'min-w-[24px] w-[24px] h-[24px]'}
                alt={'add-folder'}
                src={SearchIcon}
              />
            )}
          />
        </div>

        <DocumentsView />
      </div>
    </section>
  )
}

function AllDocument () {
  return (
    <React.Fragment>
      <Header/>
      <DrawerNav/>

      <BreadcrumbsSection
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Document',
            // href: '/document'
          },
        ]}
      />

      <NavigationBar
        ariaLabel={'Dokumen'}
        navigations={[
          {
            title: 'Dokumen Ku',
            url: '/document/my-document',
          },
          {
            title: 'Semua Dokumen',
            url: '/document/all-document',
          },
        ]}
      />

      <Layout/>
    </React.Fragment>
  )
}

export default AllDocument
