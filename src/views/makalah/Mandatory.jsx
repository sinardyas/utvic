import React from 'react'
import { InfoIcon, TrashIcon } from '../../assets/images/icons'
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';

const mandatory = () => {
    return (
        <div className="container">
            <div className='text-2xl bg-white rounded shadow-md '>
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

                <div className="px-6 py-4">
                    <div class="mt-8 flex flex-col">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg rounded-md">
                                <table class="min-w-full divide-y divide-gray-300 ">
                                    <thead class="bg-black">
                                        <tr class="divide-x divide-gray-200 text-3xl text-center font-semibold text-white ">
                                            <th scope="col" class="py-3.5 pl-4 pr-4 sm:pl-6">No</th>
                                            <th scope="col" class="px-4 py-3.5">ID Makalah</th>
                                            <th scope="col" class="px-4 py-3.5">Judul inovasi</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 bg-white">
                                        <tr class="divide-x divide-gray-200 text-2xl text-center font-semibold">
                                            <td class="whitespace-nowrap py-4 pl-4 pr-4  text-gray-900 sm:pl-6">1</td>
                                            <td class="whitespace-nowrap p-4 text-gray-500">20211234</td>
                                            <td class="whitespace-nowrap p-4 text-gray-500 flex justify-center gap-x-4 items-center">
                                                <span>Inovasi Pembersihan Unit 1</span>
                                                <button className='w-10 h-10 text-center text-white bg-yellow-400 rounded-full shadow xs:bg-red-300' >
                                                    <img src={TrashIcon} alt="" className='p-1' />
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mandatory