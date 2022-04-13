import React, { Component } from 'react'
import Link from '@mui/material/Link';
import Header from '../../components/Header';
import DrawerNav from '../../components/menu/DrawerNav';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import FormSelect from '../../components/FormSelect';

export class FormMandatory extends Component {
  render() {
    return (

      <div>
        {
          !!localStorage.getItem('Token')
            ? (
              <>
                <Header />
                <DrawerNav />
              </>
            )
            : <></>
        }


        <div className='space-from-header py-[1rem] bg-slate-200'>
          <div className="container">
            <div role="presentation" className='pt-3'>
              <Breadcrumbs aria-label="breadcrumb" >
                <Link underline="hover" color="inherit" href="/" className='font-bold'>
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="/makalah" className='font-bold'>
                  Pilih Makalah
                </Link>
                <Link
                  underline="hover"
                  color="inherit"

                  className='font-bold'
                >
                  Form Mandatory
                </Link>

              </Breadcrumbs>
            </div>
          </div>
        </div>
        <div class="container mx-auto w-full p-4">
          <div class="text-xl font-semibold text-black">Setting Mandatory</div>

          <div class="mt-10 space-y-6">
            <div class="flex flex-col">
              <FormSelect label="Tahap PEJUANG" placeholder="Pilih Pejuang" name="tahap_pejuang" />
            </div>

            <div class="gap-24 md:flex md:justify-between">
              <div class="flex md:w-1/2 flex-col">
                <FormSelect name="type" label="Pilih Type" placeholder="Pilih Type" />
              </div>

              <div class="flex flex-col md:w-1/2">
                <FormSelect name="sub_type" label="Pilih Sub Type" placeholder="Pilih Sub Type" />
              </div>
            </div>

            <div class="flex flex-col">

              <FormSelect name="category" label="Pilih Category" placeholder="Pilih Category" />
            </div>

            <div class="flex flex-col">

              <FormSelect name="sub_category" label="Pilih Sub Category" placeholder="Pilih Sub Category" />
            </div>
          </div>

          <div class="mt-5 flex justify-start gap-3">
            <button class="rounded-md bg-red-400 px-8 py-3 font-sans text-xl text-white">Cancel</button>
            <button class="rounded-md bg-yellow-400 px-8 py-3 font-sans text-xl text-black">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FormMandatory