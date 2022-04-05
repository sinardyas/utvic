import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../../components/Header'
import DrawerNav from '../../../../components/menu/DrawerNav'
import TextInput from '../../_shared/TextInput'
import PageHeader from '../_shared/PageHeader'
import SelectInput, { transformToOptions } from '../../_shared/SelectInput'
import FileInput from '../../_shared/FileInput'
import Button from '../../_shared/Button'
import { GlobalContext } from '../../../../store/global/Provider'
import PageSpinner from '../../../../components/Spinner-1'
import { api } from '../../../../boot/axios'
import BreadcrumbsSection
  from '../../_shared/BreadcrumbsSection/BreadcrumbsSection'
import useInputForm from '../../_helpers/useInputForm'


function Form () {
  const globalContext = useContext(GlobalContext)
  const [responses, setResponses] = useState([])
  const [formValues, , handleChange] = useInputForm({})
  const [isLoading, setIsLoading] = useState(true)

  const {
    api: {
      createInnovation: createInnovationApi,
    },
  } = window.processEnv

  useEffect(() => {
    const {
      api: {
        masterArea: masterAreaApi,
        masterReferensi: masterReferensiApi,
        masterTemaInovasi: masterTemaInovasiApi,
        masterMetodologiProyek: masterMetodologiProyekApi,
        masterSubkategoriInovasi: masterSubkategoriInovasiApi,
        masterFasilitator: masterFasilitatorApi,
        masterUser: masterUserApi,
        masterKategoriInovasi: masterKategoriInovasiApi,
        masterTipeProyek: masterTipeProyekApi,
        masterTipeInovasi: masterTipeInovasiApi,
      },
    } = window.processEnv
    const { FetchGet } = globalContext

    Promise.all([
      FetchGet({
        url: masterAreaApi,
        errorText: 'Error while fetch Master Area',
      }),
      FetchGet({
        url: masterReferensiApi,
        errorText: 'Error while fetch Master Referensi',
      }),
      FetchGet({
        url: masterTemaInovasiApi,
        errorText: 'Error while fetch Master Tema Inovasi',
      }),
      FetchGet({
        url: masterMetodologiProyekApi,
        errorText: 'Error while fetch Master Metodologi Proyek',
      }),
      FetchGet({
        url: masterSubkategoriInovasiApi,
        errorText: 'Error while fetch Master Subkategori Inovasi',
      }),
      FetchGet({
        url: masterFasilitatorApi,
        errorText: 'Error while fetch Master Fasilitator',
      }),
      FetchGet({
        url: masterUserApi,
        errorText: 'Error while fetch Master User',
      }),
      FetchGet({
        url: masterKategoriInovasiApi,
        errorText: 'Error while fetch Master Kategori Inovasi',
      }),
      FetchGet({
        url: masterTipeProyekApi,
        errorText: 'Error while fetch Master Tipe Proyek',
      }),
      FetchGet({
        url: masterTipeInovasiApi,
        errorText: 'Error while fetch Master Tipe Inovasi',
      }),
    ])
      .then(responses => {
        setResponses(responses)
        setIsLoading(false)
      })
  }, [globalContext])

  const [
    masterAreaRes,
    masterReferensiRes,
    masterTemaInovasiRes,
    masterMetodologiProyekRes,
    masterSubkategoriInovasiRes,
    masterFasilitatorRes,
    masterUserRes,
    masterKategoriInovasiRes,
    masterTipeProyekRes,
    masterTipeInovasiRes,
  ] = responses

  if (isLoading) {
    return <PageSpinner/>
  }

  return (
    <section>
      <div className={'container md:border md:shadow mb-8'}>
        <form
          className={'flex flex-col space-y-8 my-7'}
          onSubmit={(e) => {
            e.preventDefault()

            function validate(formValues, labelIds) {
              for (let i = 0; i < labelIds.length; i++) {
                const label = labelIds[i]
                if(!formValues[label]) {
                  const labelText = document.querySelector(`label[for="${label}"]`)
                    .textContent
                    .replace(/\*$/, '')
                    .replace(/^pilih/i, '')
                  alert(`Pilih ${labelText} terlebih dahulu`)
                  return false
                }
              }
              return true
            }

            if(!validate(formValues, ['tipe-proyek', 'tipe-inovasi', 'member'])) {
              return
            }

            alert(JSON.stringify(formValues))
          }}
        >
          <div
            className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8'}>
            <TextInput
              labelText={'Judul'}
              labelId={'judul'}
              placeholder={'Masukkan Judul'}
              required
              onChange={handleChange}
            />

            <TextInput
              labelText={'Unit'}
              labelId={'unit'}
              placeholder={'Masukkan Unit'}
              onChange={handleChange}
            />

            <SelectInput
              labelText={'Area'}
              labelId={'area'}
              placeholder={'Pilih Area'}
              onChange={handleChange}
            >
              {transformToOptions(masterAreaRes, 'Id', 'Name')}
            </SelectInput>

            <SelectInput
              labelText={'Area Hybrid'}
              labelId={'area-hybrid'}
              placeholder={'Pilih Area'}
              onChange={handleChange}
            >
              {transformToOptions(masterAreaRes, 'Id', 'Name')}
            </SelectInput>

            <SelectInput
              labelText={'Pilih Tipe Proyek'}
              labelId={'tipe-proyek'}
              placeholder={'Pilih Tipe Proyek'}
              onChange={handleChange}
              required
            >
              {transformToOptions(masterTipeProyekRes, 'Id',
                'ProjectTypeName')}
            </SelectInput>

            <SelectInput
              labelText={'Pilih Kategori Inovasi'}
              labelId={'kategori-inovasi'}
              placeholder={'Pilih Kategori Inovasi'}
              onChange={handleChange}
            >
              {transformToOptions(masterKategoriInovasiRes, 'Id',
                'CategoryName')}
            </SelectInput>

            <SelectInput
              labelText={'Pilih Sub Kategori'}
              labelId={'sub-kategori'}
              placeholder={'Pilih Sub Kategori'}
              onChange={handleChange}
            >
              {transformToOptions(masterSubkategoriInovasiRes, 'Id',
                'CategoryName')}
            </SelectInput>

            <SelectInput
              labelText={'Pilih Tema Inovasi'}
              labelId={'tema-inovasi'}
              placeholder={'Pilih Tema Inovasi'}
              onChange={handleChange}
            >
              {transformToOptions(masterTemaInovasiRes, 'Id',
                'InovationThemeName')}
            </SelectInput>

            <SelectInput
              labelText={'Pilih Tipe Inovasi'}
              labelId={'tipe-inovasi'}
              placeholder={'Pilih Tipe'}
              onChange={handleChange}
              required
            >
              {transformToOptions(masterTipeInovasiRes, 'Id',
                'InovationTypeName')}
            </SelectInput>

            <SelectInput
              labelText={'Pilih Referensi'}
              labelId={'referensi'}
              placeholder={'Pilih Referensi'}
              onChange={handleChange}
            >
              {transformToOptions(masterReferensiRes, 'Id', 'Judul')}
            </SelectInput>

            <TextInput
              containerClassName={'md:row-span-2 md:col-span-2'}
              componentsProps={{
                input: {
                  className: 'h-[170px]',
                },
              }}
              labelText={'Deskripsi'}
              labelId={'deskripsi'}
              placeholder={'Tulis Deksripsi'}
              multiline
              onChange={handleChange}
            />

            <SelectInput
              labelText={'Pilih Metodologi Proyek'}
              labelId={'metodologi-proyek'}
              placeholder={'Pilih Metodologi'}
              onChange={handleChange}
            >
              {transformToOptions(masterMetodologiProyekRes, 'Id',
                'MetodologiProjectName')}
            </SelectInput>

            <SelectInput
              labelText={'Pilih Fasilitator'}
              labelId={'fasilitator'}
              placeholder={'Pilih Fasilitator'}
              onChange={handleChange}
            >
              {transformToOptions(masterFasilitatorRes, 'Id',
                'FasilitatorName')}
            </SelectInput>

          </div>

          <div className={'h-[1px] w-full bg-gray-300'}/>

          <div
            className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8'}>
            <TextInput
              labelText={'Nama Tim'}
              labelId={'nama-tim'}
              placeholder={'Nama Tim'}
              onChange={handleChange}
            />

            <TextInput
              labelText={'Leader'}
              labelId={'leader'}
              placeholder={'Leader'}
              required
              onChange={handleChange}
            />

            <SelectInput
              labelText={'Member'}
              labelId={'member'}
              placeholder={'Pilih Member'}
              required
              onChange={handleChange}
            >
              {transformToOptions(masterUserRes, 'UserId', 'UserName')}
            </SelectInput>

            <FileInput
              labelText={'Upload Foto'}
              labelId={'upload-foto'}
              placeholder={'Upload Image'}
              accept="image/png, image/jpeg"
              extensions={['jpeg', 'png']}
              onChange={handleChange}
            />
          </div>

          <div>
            <Button type={'submit'}>
              Save a Draft
            </Button>
          </div>

        </form>

      </div>
    </section>
  )
}

function InnovationProfile () {
  return (
    <React.Fragment>
      <React.Fragment>
        <Header/>
        <DrawerNav/>
      </React.Fragment>

      <BreadcrumbsSection />

      <PageHeader/>

      <Form/>

    </React.Fragment>
  )
}

export default InnovationProfile
