import React, { useCallback } from 'react'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import CalendarLogo from '../../../assets/images/calendar-logo.png'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import FileInput from '../../../components/FileInput'
import DatePicker from '../../../components/DatePicker'
import useInputForm from '../../submit-innovation/_helpers/useInputForm'
import { api } from '../../../boot/axios'

function CreateEvent () {
  const [formValues, setFormValues, handleChange] = useInputForm()

  const handleDateChange = useCallback(({ target }) => {
    const { id, value: date } = target

    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    const dateValue = `${date.getFullYear()}-${month}-${day}`

    setFormValues(prevState => {
      return {
        ...prevState,
        [id]: dateValue,
      }
    })

  }, [setFormValues])

  return (
    <div>
      <Header/>
      <DrawerNav/>

      <BreadcrumbsSection
        className={'hidden md:block'}
        items={[
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Create Event',
          },
        ]}
      />

      <div className={'container my-6'}>
        <div className={'flex items-center gap-x-3'}>
          <img className={'w-[27px] md:w-auto'} src={CalendarLogo}
               alt={'calendar'}/>
          <h1>
            Pendaftaran Event
          </h1>
        </div>
      </div>

      <form
        className={'container'}
        onSubmit={(e) => {
          e.preventDefault()

          const formData = new FormData()

          Object.entries(formValues).forEach((entry) => {
            const [key, value] = entry
            formData.append(key, value)
          })

          const { addEvent: addEventApi } = window.processEnv.api

          api.post(addEventApi, formData).then(response => {
            console.log(response, formValues)
            alert(JSON.stringify(formValues))
          })
        }}
      >
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5'}>
          <TextInput
            labelText={'Judul Event'}
            labelId={'judul'}
            placeholder={'Masukan judul artikel kamu disini...'}
            containerClassName={'md:col-span-2'}
            onChange={handleChange}
          />

          <DatePicker
            labelText={'Mulai'}
            labelId={'PublishDate'}
            placeholder={'Pilih periode'}
            onChange={handleDateChange}
            componentsProps={{
              input: {
                minDate: new Date(),
                maxDate: formValues['UnpublishDate'] ?
                  DatePicker.subDays(new Date(formValues['UnpublishDate']), 1)
                  : undefined,
              },
            }}
          />

          <DatePicker
            labelText={'Selesai'}
            labelId={'UnpublishDate'}
            placeholder={'Pilih periode'}
            onChange={handleDateChange}
            componentsProps={{
              input: {
                minDate: formValues['PublishDate'] ?
                  DatePicker.addDays(new Date(formValues['PublishDate']), 1)
                  : DatePicker.addDays(new Date(), 1),
              },
            }}
          />

          <TextInput
            labelText={'Catatan'}
            labelId={'Catatan'}
            placeholder={'Masukan catatan kamu disini...'}
            multiline
            containerClassName={'md:col-span-2'}
            componentsProps={{
              root: {
                className: 'h-[130px]',
              },
            }}
            onChange={handleChange}
          />

          <FileInput
            labelText={'File'}
            labelId={'File'}
            placeholder={'Upload file'}
            extensions={['pdf', 'docx']}
            extensionInfo={'*File dapat berupa dokumen seperti'}
            onChange={handleChange}
          />

          <div className={'flex gap-x-1 md:col-span-2'}>
            <Button href={'/event/calendar'} componentType={'link'}>
              Batal
            </Button>

            <Button
              backgroundCss={'bg-amber-300'}
              colorCss={'text-black'}
              type={'submit'}
            >
              Submit
            </Button>
          </div>

        </div>
      </form>

    </div>
  )
}

export default CreateEvent
