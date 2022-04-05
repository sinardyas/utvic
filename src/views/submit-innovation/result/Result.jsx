import React from 'react'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import PageHeader from '../_shared/PageHeader'
import Button from '../_shared/Button'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import useInputForm from '../_helpers/useInputForm'
import TextAndFileInput from '../_shared/TextAndFileInput/TextAndFileInput'
import TextInput from '../_shared/TextInput'

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
            className={'grid grid-cols-1 gap-x-3 gap-y-8'}
          >
            <div
              className={'flex flex-wrap md:flex-nowrap items-end md:space-x-3'}>
              <TextInput
                containerClassName={'basis-full md:basis-1/4'}
                labelText={'Benefit'}
                labelId={'benefit'}
                placeholder={'Input angka'}
                onChange={handleChange}
                showInfoIcon
                componentsProps={{
                  input: {
                    pattern: '[0-9]*',
                  },
                }}
              />

              <TextInput
                containerClassName={'basis-full md:basis-3/4'}
                labelText={''}
                placeholder={'Input teks disini'}
                labelId={'benefit-info'}
                onChange={handleChange}
              />
            </div>

            <div
              className={'flex flex-wrap md:flex-nowrap items-end md:space-x-3'}>
              <TextInput
                containerClassName={'basis-full md:basis-1/4'}
                labelText={'Cost'}
                labelId={'cost'}
                placeholder={'Input angka'}
                onChange={handleChange}
                showInfoIcon
                componentsProps={{
                  input: {
                    pattern: '[0-9]*',
                  },
                }}
              />

              <TextInput
                containerClassName={'basis-full md:basis-3/4'}
                labelText={''}
                placeholder={'Input teks disini'}
                labelId={'cost-info'}
                onChange={handleChange}
              />

            </div>

            <TextAndFileInput
              labelText={'Standarisasi'}
              labelId={'standarisasi'}
              placeholder={'Tulis deskripsi'}
              onChange={handleChange}
              showInfoIcon
            />

            <TextAndFileInput
              labelText={'Next Project'}
              labelId={'next-project'}
              placeholder={'Tulis deskripsi'}
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

function Result () {
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

export default Result
