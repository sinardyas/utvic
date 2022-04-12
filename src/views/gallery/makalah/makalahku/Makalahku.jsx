import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../../components/Header'
import DrawerNav from '../../../../components/menu/DrawerNav'
import BreadcrumbsSection
  from '../../../../components/BreadcrumbsSection/BreadcrumbsSection'
import NavigationBar from '../../../../components/NavigationBar'
import SearchIcon from '../../../../assets/images/search-form.png'
import DeleteIcon from '../../../../assets/images/delete_search.png'
import TextInput from '../../../../components/TextInput'
import SelectInput, {
  transformToOptions,
} from '../../../submit-innovation/_shared/SelectInput'
import Button from '../../../../components/Button'
import DownloadIcon from '../../../../assets/images/document-download.png'
import { GlobalContext } from '../../../../store/global/Provider'
import PageSpinner from '../../../../components/Spinner-1'
import Pagination from '@mui/material/Pagination'
import '../../../../styles/Paginations.scss'
import useInputForm from '../../../submit-innovation/_helpers/useInputForm'

function ListMakalah ({ filterData }) {
  const globalContext = useContext(GlobalContext)
  const [responses, setResponses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [galeriMakalahRes] = responses

  useEffect(() => {
    const {
      api: {
        galeriMakalah: galeriMakalahApi,
      },
    } = window.processEnv
    const { FetchGet } = globalContext
    const { SearchKeyword, Filter, Category, PageLimit } = filterData
    setIsLoading(true)

    FetchGet({
      method: 'POST',
      data: {
        IsAll: false,
        IsMe: true,
        Area: '',
        PageStart: 0,
        SearchKeyword,
        Filter,
        Category,
        PageLimit,
      },
      url: galeriMakalahApi,
      errorText: 'Error while fetch Master Area',
    }).then(response => {
      setResponses([response])
      setIsLoading(false)
    })
  }, [globalContext, filterData])

  if (isLoading) {
    return <PageSpinner/>
  }

  return (
    <ul className={'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6'}>
      {
        galeriMakalahRes.map((galeriMakalah) => {
          const {
            Id,
            Judul,
            Deskripsi,
            InovationNumber,
            Color,
            ImageUrl,
          } = galeriMakalah

          return (
            <li key={Id}>
              <div
                className={'flex gap-x-6 py-5 px-4 shadow rounded-xl md:rounded-none border md:border-y-0 md:border-r-0 md:border-l-[2px] md:border-l-amber-300'}
              >
                <img
                  className={'w-full max-w-[80px] h-[87px] object-cover rounded-2xl'}
                  src={ImageUrl}
                  alt={'makalah'}
                />

                <div className={'flex-col flex-1'}>
                  <div className={'flex items-center gap-x-4'}>
                    <div
                      className={'bg-orange-100 p-1 rounded text-yellow-600 font-semibold'}
                    >
                      {InovationNumber}
                    </div>

                    <div className={'flex-1'}>
                      <div
                        className={`h-[30px] w-[30px] ${!Color &&
                        'bg-green-500'} rounded`}
                        style={{
                          backgroundColor: Color,
                        }}
                      />
                    </div>


                  </div>

                  <div className={'font-semibold'}>
                    {Judul}
                  </div>

                  <div className={'text-gray-500'}>
                    {Deskripsi}
                  </div>
                </div>

                <button className={'mt-auto md:mt-0 md:mb-auto'}>
                  <img
                    className={'min-w-[24px] w-[24px] h-[24px]'}
                    src={DownloadIcon}
                    alt={'download'}
                  />
                </button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

function Makalahku () {
  const [formValues, setFormValus, handleChange] = useInputForm({
    Category: null,
    Filter: null,
    SearchKeyword: '',
    PageLimit: 10,
  })

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
            title: 'Gallery',
            href: '/gallery',
          },
          {
            title: 'Makalahku',
          },
        ]}
      />

      <NavigationBar
        navigations={[
          {
            title: 'Semua Makalah',
            url: '/gallery/all-makalah',
          },
          {
            title: 'Makalahku',
            url: '/gallery/makalahku',
          },
          {
            title: 'Makalah Area',
            url: '/gallery/area-makalah',
          },
        ]}
      />

      <div className={'container my-6'}>
        <div
          className={'flex flex-wrap md:flex-nowrap gap-x-4 gap-y-2 items-end mb-8'}
        >
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
            containerClassName={'hidden md:block order-1'}
            labelText={'Search'}
            labelId={'SearchKeyword'}
            placeholder={'Ketik yang ingin dicari'}
            startAdornment={(
              <img
                className={'min-w-[24px] w-[24px] h-[24px]'}
                alt={'add-folder'}
                src={SearchIcon}
              />
            )}
            onChange={handleChange}
            value={formValues.SearchKeyowrd}
          />

          <div className={'md:hidden basis-full order-3'}/>

          <div className={'flex-1 md:order-2 order-1'}>
            <SelectInput
              labelText={'Pilih Filter'}
              labelId={'Filter'}
              placeholder={'Pilih filter'}
              onChange={handleChange}
              value={formValues.Filter}
            >
              {
                transformToOptions([
                  {
                    id: 'filter-1',
                    label: 'Filter 1',
                  },
                  {
                    id: 'filter-2',
                    label: 'Filter 2',
                  },
                ], 'id', 'label')
              }
            </SelectInput>
          </div>

          <div className={'flex-1 order-4'}>
            <SelectInput
              labelText={'Kategori'}
              labelId={'Category'}
              onChange={handleChange}
              value={formValues.Category}
            >
              {
                transformToOptions([
                  {
                    id: 'kategori-1',
                    label: 'Kategori 1',
                  },
                  {
                    id: 'kategori-2',
                    label: 'Kategori 2',
                  },
                ], 'id', 'label')
              }
            </SelectInput>

          </div>

          <button
            className={'p-2 mb-3 order-5'}
          >
            <img
              className={'min-w-[24px] w-[24px] h-[24px]'}
              alt={'add-folder'}
              src={DeleteIcon}
            />
          </button>
        </div>

        <div className={'flex justify-between mb-8'}>
          <Button>
            Hapus Makalah
          </Button>

          <Button
            className={'border-2 border-black'}
            backgroundCss={'bg-white'}
            colorCss={'text-black'}
          >
            Export
          </Button>
        </div>

        <div>
          <ListMakalah filterData={formValues}/>
          <div className={'flex justify-center mt-10'}>
            <Pagination
              id={'custom-pagination'}
              count={10}
              onChange={(e, page) => {
                setFormValus(prevState => {
                  return {
                    ...prevState,
                    PageLimit: page * 10,
                  }
                })
              }}
              value={formValues.PageLimit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Makalahku
