import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../../store/global/Provider'
import { api } from '../../../../boot/axios'
import PageSpinner from '../../../../components/Spinner-1'
import DocumentItem from '../../_shared/DocumentItem'
import FolderIcon from '../../../../assets/images/folder.png'
import DocumentIcon from '../../../../assets/images/document.png'
import AlertModal from '../../../../components/AlertModal/AlertModal'
import Button from '../../../../components/Button'


function DocumentsView() {
  const [modalData, setModalData] = useState()
  const isModalOpen = !!modalData

  const globalContext = useContext(GlobalContext)
  const [responses, setResponses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [getDokumenkuRes] = responses

  useEffect(() => {
    const {
      api: {
        getDokumenku: getDokumenkuApi,
      },
    } = window.processEnv
    const { FetchGet } = globalContext

    const userId = JSON.parse(localStorage.getItem('UserId') || null)

    FetchGet({
      method: 'POST',
      data: {
        UserId: userId,
        IsPublic: true
      },
      url: getDokumenkuApi,
      errorText: 'Error while fetch Master Area',
    }).then(getDocumentRes => {
      setResponses([getDocumentRes])
      setIsLoading(false)
    })
  }, [globalContext])

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

  if(isLoading) {
    return <PageSpinner />
  }

  return (
    <React.Fragment>
      <div
        className="bg-white shadow border-2 overflow-hidden rounded-lg mt-8"
      >
        {
          getDokumenkuRes.map(dokumenku => {
            return (
              <React.Fragment key={dokumenku.DocumentId}>
                <DocumentItem
                  background={'bg-gray-100'}
                  leftIcon={FolderIcon}
                  more
                  dropdownMenus={createDropdownMenus({
                    // any Document Id
                    DocumentId: dokumenku.DocumentId,
                    name: 'Folder Makalah',
                  })}
                  fontWeight={'font-medium'}
                >
                  {dokumenku.name}
                </DocumentItem>

                <div className={'md:ml-8 divide-y'}>
                  {
                    dokumenku.Children?.map((document) => {
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
              </React.Fragment>
            )
          })
        }
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
    </React.Fragment>
  )
}

export default DocumentsView;
