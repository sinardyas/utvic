import React from 'react'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import PageHeader from '../_shared/PageHeader'
import Button from '../../../components/Button'
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
              labelText={'Ide'}
              labelId={'ide'}
              placeholder={'Isi ide kamu'}
              onChange={handleChange}
              showInfoIcon
            />

            <TextAndFileInput
              labelText={'Perencanaan'}
              labelId={'perencanaan'}
              placeholder={'Masukkan perencanaan kamu'}
              onChange={handleChange}
              showInfoIcon
            />

            <TextAndFileInput
              labelText={'Implementasi'}
              labelId={'implementasi'}
              placeholder={'Masukkan target kamu'}
              onChange={handleChange}
              showInfoIcon
            />
          </div>

          <div className={'flex space-x-4'}>
            <Button>
              Save a Draft
            </Button>
            <Button backgroundCss={'bg-amber-300'} colorCss={'text-black'} type={'submit'}>
              Submit
            </Button>
          </div>

        </form>

      </div>
    </section>
  )
}

function Idea () {
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

export default Idea
