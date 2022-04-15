import React from 'react'

export default function Table(prop) {
    return (

        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col">

                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">

                        <div class="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg rounded-md">
                            <table class="min-w-full justify-center items-center divide-y divide-gray-300 shadow text-2xl break-normal">
                                <thead class="bg-black">
                                    <tr class="divide-x divide-gray-200">
                                        <th scope="col" class="py-3.5 pl-4 pr-4 font-semibold text-white sm:pl-6">No</th>
                                        <th scope="col" class="px-4 py-3.5 font-semibold text-white">ID Makalah</th>
                                        <th scope="col" class="px-4 py-3.5 font-semibold text-white">Judul inovasi</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-[#F9F9F9] text-gray-400" >
                                    <tr class="divide-x divide-gray-200">
                                        <td class="py-4 pl-4 pr- sm:pl-6">1</td>
                                        <td class="p-4">20211234</td>
                                        <td class="p-4">
                                            <div className="flex justify-between items-center">
                                                <span className='text-center'>Inovasi Pembersihan Unit 1</span>
                                                <button className='flex justify-center items-center w-8 h-8 p-3 bg-yellow-400 text-black rounded-full'>
                                                    <Trash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="divide-x divide-gray-200 bg-[rgba(0,0,0,0.1)]">
                                        <td class="py-4 pl-4 pr- sm:pl-6">2</td>
                                        <td class="p-4">20211234</td>
                                        <td class="p-4">
                                            <div className="flex justify-between items-center">
                                                <span className='text-center'>Inovasi Pembersihan Unit 12</span>
                                                <button className='flex justify-center items-center w-8 h-8 p-3 bg-yellow-400 text-black rounded-full'>
                                                    <Trash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>


  )
}
