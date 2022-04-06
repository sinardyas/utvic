import React from 'react'
import Header from '../../../../components/Header'
import DrawerNav from '../../../../components/menu/DrawerNav'
import PageHeader from '../_shared/PageHeader'
import Button from '../../_shared/Button'
import BreadcrumbsSection
  from '../../../../components/BreadcrumbsSection/BreadcrumbsSection'
import useInputForm from '../../_helpers/useInputForm'
import TextInput from '../../../../components/TextInput'

function Form () {
  const [formValues, , handleChange] = useInputForm()

  return (
    <section>
      <div className={'container md:border md:shadow mb-8'}>
        <form
          className={'flex flex-col space-y-8 my-7'}
          onSubmit={(e) => {
            e.preventDefault()
            alert(JSON.stringify(formValues))
          }}
        >
          <div
            className={'grid grid-cols-1 gap-x-3 gap-y-8'}>
            <TextInput
              labelText={'Prestasi'}
              labelId={'prestasi'}
              placeholder={'Masukkan Prestasi'}
              onChange={handleChange}
              showInfoIcon
            />
          </div>

          <div className={'flex gap-x-3 justify-between md:justify-start'}>
            <div
              className={'flex flex-wrap gap-x-3 gap-y-4 auto-cols-min items-end'}
            >
              <Button type={'button'}>
                Cancel
              </Button>

              <Button
                className={'!bg-white !text-black !border-black'}
                type={'submit'}
              >
                Save a Draft
              </Button>
            </div>

            <Button className={'!bg-amber-300 !text-black'} type={'submit'}>
              Submit Inovasi
            </Button>

          </div>

        </form>

      </div>
    </section>
  )
}

function Achievement () {
  return (
    <React.Fragment>
      <React.Fragment>
        <Header/>
        <DrawerNav/>
      </React.Fragment>

      <BreadcrumbsSection
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Submit Innovation',
          },
        ]}
      />


      <PageHeader/>

      <Form/>

    </React.Fragment>
  )
}

export default Achievement
