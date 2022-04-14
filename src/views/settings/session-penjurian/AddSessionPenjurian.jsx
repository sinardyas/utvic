import { Breadcrumbs } from '@mui/material'
import React, { Component } from 'react'
import Link from '@mui/material/Link';
import Header from '../../../components/Header'
import DrawerNav from '../../../components/menu/DrawerNav'

export default class AddSessionPenjurian extends Component {
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
                                <Link underline="hover" color="inherit" href="/settings" className='font-bold'>
                                    Setting
                                </Link>
                                <Link
                                    underline="hover"
                                    color="inherit"

                                    className='font-bold'
                                >
                                    Add Session Penjurian
                                </Link>

                            </Breadcrumbs>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto w-full p-4">
                    <div class="text-3xl font-semibold text-black">Add Session Penjurian</div>

                    <div class="mt-10 space-y-6">
                        <div class="flex flex-col">
                            <label for="atas" class="text-xl font-semibold">Masukan Tipe Penjurian</label>
                            <input name="atas" placeholder="Masukan Tipe Penjurian" class="mt-2 rounded border bg-gray-100 py-4 pl-2 pr-10 text-gray-400 focus:outline-none md:pr-32" />
                        </div>

                        <div class="gap-4 md:flex md:justify-between">
                            <div class="flex flex-col md:w-1/2">
                                <label for="atas" class="text-xl font-semibold">Mulai</label>
                                <div class="mt-2 flex items-center justify-start rounded border bg-gray-100 px-2 focus:outline-none md:pr-32">
                                    <span class="">
                                        <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <input name="atas" placeholder="Pilih Periode" class="ml-2 bg-transparent py-4 pl-2 pr-10 text-gray-400 outline-none" />
                                </div>
                            </div>

                            <div class="flex flex-col md:w-1/2">
                                <label for="atas" class="text-xl font-semibold">Selesai</label>
                                <div class="mt-2 flex items-center justify-start rounded border bg-gray-100 px-2 focus:outline-none md:pr-32">
                                    <span class="">
                                        <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <input name="atas" placeholder="Pilih Periode" class="ml-2 bg-transparent py-4 pl-2 pr-10 text-gray-400 outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 flex justify-start gap-3">
                        <button class="rounded-md bg-red-500 px-8 py-3 font-sans text-xl text-white">Cancel</button>
                        <button class="rounded-md bg-yellow-400 px-8 py-3 font-sans text-xl text-black">Save</button>
                    </div>
                </div>


            </div>
        )
    }
}
