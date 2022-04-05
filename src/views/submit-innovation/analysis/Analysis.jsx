import React from 'react'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import PageHeader from '../_shared/PageHeader'
import Button from '../_shared/Button'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import useInputForm from '../_helpers/useInputForm'
import TextAndFileInput from '../_shared/TextAndFileInput/TextAndFileInput'

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
            <TextAndFileInput
              labelText={'Latar Belakang'}
              labelId={'latar-belakang'}
              placeholder={'Isi latar belakang'}
              onChange={handleChange}
              showInfoIcon
            />

            <TextAndFileInput
              labelText={'Target'}
              labelId={'target'}
              placeholder={'Masukkan target kamu'}
              onChange={handleChange}
              showInfoIcon
            />

            <TextAndFileInput
              labelText={'Akar Masalah'}
              labelId={'akar-masalah'}
              placeholder={'Masukkan akar masalah kamu'}
              onChange={handleChange}
              showInfoIcon
            />
          </div>

          <div className={'flex space-x-4'}>
            <Button>
              Save a Draft
            </Button>
            <Button className={'!bg-amber-300 text-black'} type={'submit'}>
              Submit
            </Button>
          </div>

        </form>

      </div>
    </section>
  )
}

function Analysis () {
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

export default Analysis
