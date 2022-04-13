import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'
import BreadcrumbsSection
  from '../../../components/BreadcrumbsSection/BreadcrumbsSection'
import CalendarLogo from '../../../assets/images/calendar-logo.png'
import SearchIcon from '../../../assets/images/search-form.png'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import AddIcon from '@mui/icons-material/Add'
import DateIcon from '../../../assets/images/date.png'
import DeleteIcon from '../../../assets/images/delete_search.png'
import { useMediaQuery } from '@mui/material'
import { GlobalContext } from '../../../store/global/Provider'
import PageSpinner from '../../../components/Spinner-1'

function EventItem ({ eventData }) {
  const { ImageUrl, Title, Description, Date } = eventData
  const isDesktop = useMediaQuery('(min-width:768px)')

  const image = (
    <img
      className={'w-full max-w-[240px]'}
      src={ImageUrl}
      alt={'event'}
      width={240}
    />
  )
  const title = (
    <h2 className={'font-semibold text-2xl'}>{Title}</h2>
  )
  const date = (
    <time>
      <img
        className={'inline-block mr-3'}
        src={DateIcon}
        alt={'date'}
      />
      <span>
        {Date}
      </span>
    </time>
  )

  const trashButton = (
    <Button
      className={'!rounded-full !p-3 !border-none w-auto'}
      backgroundCss={'bg-amber-300'}
      size={'small'}
    >
      <img
        className={'w-[24px] min-w-[24px] h-[24px]'}
        src={DeleteIcon}
        alt={'delete'}
      />
    </Button>
  )

  if (!isDesktop) {
    return (
      <div
        className={'flex border gap-x-6 shadow-md rounded-2xl overflow-hidden'}>
        <div
          className={'w-full max-w-[150px] child:h-full child:object-cover child:rounded-2xl'}>
          {image}
        </div>

        <div className={'flex flex-1 flex-col py-6 pr-3 gap-y-3'}>
          <div className={'flex justify-between items-center'}>
            {date}
            {trashButton}
          </div>

          <div className={'flex flex-col gap-y-1'}>
            {title}
            <div
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {Description}
            </div>
          </div>

        </div>

      </div>
    )
  }

  return (
    <div className={'flex gap-x-6 border shadow-md p-5 rounded-md'}>
      <picture className={'w-full max-w-[240px] my-auto'}>
        {image}
      </picture>

      <div className={'flex flex-col flex-1 gap-y-1'}>
        {title}
        <div>
          {Description}
        </div>
      </div>

      <div className={'flex flex-col gap-y-1'}>
        {date}
        <div className={'self-end my-auto'}>
          {trashButton}
        </div>
      </div>
    </div>
  )

}

function Calendar () {
  const globalContext = useContext(GlobalContext)
  const [responses, setResponses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const {
      api: {
        listEvent: listEventApi,
      },
    } = window.processEnv
    const { FetchGet } = globalContext

    FetchGet({
      url: listEventApi,
      errorText: 'Error while fetch Master Area',
    }).then((response) => {
      setResponses([response])
      setIsLoading(false)
    })

  }, [globalContext])

  const [listEventRes] = responses

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
            title: 'Calendar of Event',
          },
        ]}
      />

      <div className={'container my-6'}>
        <div className={'flex items-center gap-x-3'}>
          <img className={'w-[27px] md:w-auto'} src={CalendarLogo} alt={'calendar'}/>
          <h1>
            Calendar of Event
          </h1>
        </div>
      </div>

      <div className={'container'}>
        <div className={'flex items-end justify-between'}>
          <button
            className={'block md:hidden rounded-full p-2 !bg-gray-200 mb-3 order-2'}
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

          <Button
            className={'flex items-center gap-x-2 order-1 md:order-2'}
            backgroundCss={'bg-amber-300 mb-1.5'}
            colorCss={'text-black'}
            componentType={'link'}
            href={'/event/create-event'}
          >
            <AddIcon fontWeight={'900'}/>
            Buat Event
          </Button>
        </div>
      </div>

      <div className={'container my-9 '}>
        {
          isLoading ?
            <PageSpinner/>
            :
            (
              <ul className={'flex flex-col gap-y-4 md:gap-y-6'}>
                {
                  listEventRes.map(event => {
                    return (
                      <li key={event.IdEvent}>
                        <EventItem eventData={event}/>
                      </li>
                    )
                  })
                }
              </ul>
            )
        }
      </div>

    </div>
  )
}

export default Calendar
