import React, { useState } from 'react'
import NavigationBar from '../../../components/NavigationBar'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import Button from '../../../components/Button'
import AddFolderIcon from '../../../assets/images/add-folder.png'
import SearchIcon from '../../../assets/images/search-form.png'
import FolderIcon from '../../../assets/images/folder.png'
import DocumentIcon from '../../../assets/images/document.png'
import FileInput from '../../../components/FileInput'
import TextInput from '../../../components/TextInput'
import AlertModal from '../../../components/AlertModal/AlertModal'
import DocumentItem from '../_shared/DocumentItem'
import { api } from '../../../boot/axios'

function Layout () {
  const [modalData, setModalData] = useState()
  const isModalOpen = !!modalData

  const {
    api: {
      permissionDocument: permissionDocumentApi,
      deleteDocument: deleteDocumentApi
    },
  } = window.processEnv

  function createDropdownMenus (document = true) {
    const closeModal = (key, close) => close()

    return [
      {
        key: 'beri-akses',
        children: 'Beri Akses',
        onItemClick: (key, close) => {
          close()
          setModalData(document)
        },
      },
      {
        key: 'delete',
        children: 'Delete',
        onItemClick: () => {
          api.post(deleteDocumentApi, {
            DocumentId: modalData?.DocumentId,
          }).then(response => {
            alert(`${deleteDocumentApi} ${JSON.stringify(response?.data)}`)
          }).catch(error => {
            alert(error?.message || 'network error')
          }).finally(() => {
            setModalData(false)
          })
        },
      },
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

        <div
          className="bg-white shadow border-2 overflow-hidden rounded-lg mt-8"
        >
          <DocumentItem
            background={'bg-gray-100'}
            leftIcon={FolderIcon}
            more
            dropdownMenus={createDropdownMenus({
              // any Document Id
              DocumentId: 99,
              name: 'Folder Makalah',
            })}
            fontWeight={'font-medium'}
          >
            Folder Makalah
          </DocumentItem>

          <div className={'md:ml-8 divide-y'}>
            {
              [
                {
                  DocumentId: 1,
                  name: 'Folder Makalah.docs',
                },
                {
                  DocumentId: 2,
                  name: 'Data Perhitungan.docs',
                },
                {
                  DocumentId: 3,
                  name: 'Inovasi AI.pdf',
                },
                {
                  DocumentId: 4,
                  name: 'Data AI.pdf',
                },
                {
                  DocumentId: 5,
                  name: 'Inovasi AI2.pdf',
                },
              ].map((document) => {
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

          </div>
        </div>
      </div>


      <AlertModal open={isModalOpen} onClose={() => { setModalData(false) }}>
        <AlertModal.Title>
          Alert
        </AlertModal.Title>

        <AlertModal.Body className={'max-w-[340px]'}>
          Apakah anda yakin untuk membuat dokumen dilihat oleh semua user
        </AlertModal.Body>

        <AlertModal.Footer>
          <Button onClick={() => { setModalData(false) }}>
            Cancel
          </Button>

          <Button
            backgroundCss={'bg-amber-300'}
            colorCss={'text-black'}
            onClick={() => {
              api.post(permissionDocumentApi, {
                DocumentId: modalData?.DocumentId,
              }).then(response => {
                alert(`${permissionDocumentApi} ${JSON.stringify(response?.data)}`)
              }).catch(error => {
                alert(error?.message || 'network error')
              }).finally(() => {
                setModalData(false)
              })
            }}
          >
            Save
          </Button>
        </AlertModal.Footer>
      </AlertModal>
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
