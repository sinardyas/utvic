import React from 'react'

import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
// import Info from './../../assets/images/icons/info.svg';
// import TrashOutline from './../../assets/images/icons/trash-outline.svg';
import { InfoIcon } from '../../../assets/images/icons';
import Select from './Select';
import { Table } from '.';

const Card = () => {
    return (
        <div className='text-2xl bg-white rounded shadow-md continer'>
            {/* Header */}
            <div className="flex gap-4">
                <div className="flex justify-between w-full gap-3 p-4 bg-yellow-400 rounded-md text-blak">
                    <div className="flex">
                        <img src={InfoIcon} alt="" className='w-10 h-10 p-3 text-white bg-black rounded-full' />
                        <div className="ml-4 text-2xl font-semibold">CRP</div>
                    </div>

                    <button className='flex items-center justify-center w-10 h-10 p-3 text-white bg-black rounded-full'>
                        <KeyboardArrowUpSharpIcon className='w-8 h-10 ' />
                    </button>
                </div>
            </div>

            {/* Header */}

            <div className="px-6 py-4">
                <Select
                    label="Pilih Inovasi"
                />

                <div className='h-5'></div>
                <div class="w-full inline-block rounded-lg border shadow-2xl">
                    <Table />
                    {/* <table class="w-full inline-block divide-y divide-gray-300">
                        <thead class="bg-black text-white text-xl text-center justify-center item-center">
                            <tr class="divide-x divide-gray-200">
                                <th scope="col" class="py-3.5 pl-4 pr-4 text-left font-semibold sm:pl-6">No</th>
                                <th scope="col" class="px-4 py-3.5 text-left font-semibold ">ID Makalah</th>
                                <th scope="col" class="px-4 py-3.5 text-left font-semibold ">Judul Inovasi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr class="divide-x divide-gray-200">
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium sm:pl-6">Lindsay Walton</td>
                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                            </tr>

                        </tbody>
                    </table> */}
                </div>

                <div className='mt-4'>
                    <Table />
                </div>

                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col">

                        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg rounded-md">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card