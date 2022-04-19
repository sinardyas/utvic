import React from 'react'
import NavigationBar from '../../../components/NavigationBar'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import Button from '../../../components/Button'
import AddFolderIcon from '../../../assets/images/add-folder.png'
import SearchIcon from '../../../assets/images/search-form.png'
import FileInput from '../../../components/FileInput'
import TextInput from '../../../components/TextInput'
import DocumentsView from './partials/DocumentsView'

function Layout () {

  return (
    <section>
      <div className={'container mb-8'}>
        <div className={'flex items-end gap-x-6'}>
          <Button
            className={'flex gap-x-2 !h-[64px] items-center order-2 md:order-1'}
            backgroundCss={'bg-amber-300'}
            colorCss={'text-black'}
          >
            <img
              className={'min-w-[24px] w-[24px] h-[24px] rounded-none'}
              alt={'add-folder'}
              src={AddFolderIcon}
            />
            <span className={'hidden md:block font-semibold text-lg'}>
              Create Folder
            </span>
          </Button>

          <FileInput
            containerClassName={'flex-1 order-1'}
            labelText={'Upload File Dokumen Anda'}
            labelId={'file-document'}
            hideLabelInfo
            placeholder={'Upload file'}
          />

          <button
            className={'block md:hidden rounded-full p-2 !bg-gray-200 mb-3 order-3'}
          >
            <img
              className={'min-w-[24px] w-[24px] h-[24px]'}
              alt={'add-folder'}
              src={SearchIcon}
            />
          </button>

          <TextInput
            containerClassName={'hidden md:block flex-1 order-3'}
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

function MyDocument () {
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

export default MyDocument
