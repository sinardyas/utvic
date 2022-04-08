import React, { useContext, useEffect, useState } from 'react'
import PageSpinner from '../../../../components/Spinner-1'
import DocumentItem from '../../_shared/DocumentItem'
import FolderIcon from '../../../../assets/images/folder.png'
import DocumentIcon from '../../../../assets/images/document.png'
import { GlobalContext } from '../../../../store/global/Provider'

function DocumentsView () {
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

    const userId = JSON.parse(localStorage.getItem('UserId') || null)

    FetchGet({
      method: 'POST',
      data: {
        UserId: userId,
        IsPublic: true,
      },
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

  if (isLoading) {
    return <PageSpinner/>
  }

  return (
    <React.Fragment>
      <div
        className="bg-white shadow border-2 overflow-hidden rounded-lg mt-8 divide-y"
      >
        {
          getDocumentRes.map(({ Children, ...document }) => {
            return (
              <React.Fragment key={document.DocumentId}>
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
    </React.Fragment>
  )
}

export default DocumentsView
