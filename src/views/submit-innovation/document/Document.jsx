import React from 'react'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import PageHeader from '../_shared/PageHeader'
import Button from '../_shared/Button'
import BreadcrumbsSection
  from '../_shared/BreadcrumbsSection/BreadcrumbsSection'
import useInputForm from '../_helpers/useInputForm'
import FileInput from '../_shared/FileInput'
import TextInput from '../_shared/TextInput'
import DocumentIcon from '../_shared/icons/document.png'
import TrashIcon from '../_shared/icons/trash.png'
import PreviewIcon from '../_shared/icons/preview.png'
import LinkIcon from '../../../assets/images/link.png'

function Form () {
  const [formValues, , handleChange] = useInputForm()

  return (
    <section>
      <div className={'container md:border md:shadow mb-8'}>
        <form
          className={'flex flex-col space-y-8 my-7'}
          onSubmit={(e) => {
            e.preventDefault()
            console.log(formValues)
          }}
        >
          <div
            className={'grid grid-cols-1 gap-x-3 gap-y-8'}>
            <div className={'grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-8'}>
              <FileInput
                labelText={'Upload Makalah Inovasi'}
                labelId={'makalah-inovasi'}
                placeholder={'Upload file'}
                onChange={handleChange}
                showInfoIcon
                extensions={['pdf', 'ppt']}
                extensionInfo={'*File dapat berupa dokumen seperti'}
              />

              <FileInput
                labelText={'Upload Dokumen Pendukung'}
                labelId={'dokumen-pendukung'}
                placeholder={'Upload file'}
                onChange={handleChange}
                showInfoIcon
                extensionInfo={'*Upload file dengan semua format'}
              />
            </div>

            <ul className={'flex flex-col divide-y'}>
              {
                [
                  { DocumentId: 1, name: 'Innovasi Solusi.pdf' },
                  { DocumentId: 2, name: 'Cover Makalah.png' },
                  { DocumentId: 3, name: 'Makalah.pdf' },
                  { DocumentId: 4, name: 'Cover Depan.png' },
                ].map((document) => {
                  return (
                    <li className={'p-4 flex items-center space-x-6'}
                        key={document.DocumentId}>
                      <img
                        className={'min-w-[24px] w-[24px] h-[24px]'}
                        src={DocumentIcon}
                        alt={'document'}
                      />
                      <span className={'flex-1 text-base'}>
                        {document.name}
                      </span>
                      <img
                        className={'min-w-[24px] w-[24px] h-[24px]'}
                        src={TrashIcon}
                        alt={'trash'}
                      />
                    </li>
                  )
                })
              }
            </ul>

            <TextInput
              labelText={'Link File'}
              labelId={'link-file'}
              placeholder={'Masukkan Link'}
              onChange={handleChange}
              startAdornment={
                <img src={LinkIcon} alt={'link'}/>
              }
            />

          </div>

          <div className={'flex gap-x-3 justify-between'}>
            <div
              className={'flex flex-wrap gap-x-3 gap-y-4 auto-cols-min items-end'}>
              <Button>
                Save a Draft
              </Button>

              <Button className={'!bg-white border text-black'} type={'submit'}>
                Cancel
              </Button>

              <Button className={'!bg-amber-300 text-black'} type={'submit'}>
                Submit
              </Button>
            </div>

            <Button className={'!bg-blue-500'}>
              <img
                className={'min-w-[24px] w-[24px] h-[24px] sm:hidden'}
                src={PreviewIcon}
                alt={'link'}
              />

              <span className={'hidden sm:block text-white font-semibold text-lg'}>
                Preview Inovasi
              </span>
            </Button>

          </div>

        </form>

      </div>
    </section>
  )
}

function Document () {
  return (
    <React.Fragment>
      <React.Fragment>
        <Header/>
        <DrawerNav/>
      </React.Fragment>

      <BreadcrumbsSection/>

      <PageHeader/>

      <Form/>

    </React.Fragment>
  )
}

export default Document
