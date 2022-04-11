import React, { useContext, useEffect, useState } from 'react'
import NavigationBar from '../../../components/NavigationBar'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import SearchIcon from '../../../assets/images/search-form.png'
import FolderIcon from '../../../assets/images/folder.png'
import TextInput from '../../../components/TextInput'
import DocumentItem from '../_shared/DocumentItem'
import { GlobalContext } from '../../../store/global/Provider'
import PageSpinner from '../../../components/Spinner-1'
import DocumentIcon from '../../../assets/images/document.png'

function Layout () {
  const globalContext = useContext(GlobalContext)
  const [responses, setResponses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const {
      api: {
        getDocument: getDocumentApi,
      },
    } = window.processEnv
    const { FetchGet } = globalContext

    FetchGet({
      url: getDocumentApi,
      errorText: 'Error while fetch Master Area',
    }).then(getDocumentRes => {
      setResponses([getDocumentRes])
      setIsLoading(false)
    })
  }, [globalContext])

  const [getDocumentRes] = responses

  function createDropdownMenus () {
    const closeModal = (key, close) => close()

    return [
      {
        key: 'download',
        children: 'Download',
        onItemClick: closeModal,
      },
      {
        key: 'share',
        children: 'Share',
        onItemClick: closeModal,
      },
    ]
  }

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

        {
          isLoading ?
            <PageSpinner/> :
            (
              <div
                className="bg-white shadow border-2 overflow-hidden rounded-lg mt-8 divide-y"
              >
                {
                  getDocumentRes.map(({ Children, ...document }) => {
                    return (
                      <React.Fragment>
                        <DocumentItem
                          key={document.DocumentId}
                          background={'bg-gray-100 md:bg-white'}
                          leftIcon={FolderIcon}
                          more
                          dropdownMenus={createDropdownMenus()}
                          fontWeight={'font-medium'}
                        >
                          {document.name}
                        </DocumentItem>
                        {
                          Children.map((document) => {
                            const dropdownMenus = createDropdownMenus(document)

                            return (
                              <DocumentItem
                                key={document.DocumentId}
                                leftIcon={DocumentIcon}
                                more
                                dropdownMenus={dropdownMenus}
                              >
                                {document.name}
                              </DocumentItem>
                            )
                          })
                        }
                      </React.Fragment>
                    )
                  })
                }
              </div>
            )
        }
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
