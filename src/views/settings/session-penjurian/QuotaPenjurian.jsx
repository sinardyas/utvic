import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuotaPenjurian extends Component {
  render() {
    return (
        <div>
            <Link to={'/setting/add-session-penjurian'}>
            <button
                class="mt-10 flex justify-start rounded-md border border-black bg-transparent py-3 pr-8 pl-2 font-semibold text-black">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg></span>
                Add Quota
            </button>

            </Link>

            <div class="mt-10 space-y-5">
                <div class="flex items-center justify-between rounded border border-gray-200 bg-white py-4 px-4 shadow md:rounded-none md:border-l-2 md:border-l-yellow-400">
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-4 font-semibold">
                            <div class="text-2xl text-black">Lisa</div>
                            <div class="text-2xl text-black">26/50</div>
                        </div>
                        <div class="gap-4 md:flex">
                            <div class="text-xl text-gray-800">People & Culture</div>
                            <div class="flex items-center justify-start gap-2 font-sans text-xl text-gray-500">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder-minus">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                        <line x1="9" y1="14" x2="15" y2="14"></line>
                                    </svg>
                                </span>
                                <span>30 Quota</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <button class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button class="rounded-full bg-yellow-400 p-2 shadow hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5  6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between rounded border border-gray-200 bg-white py-4 px-4 shadow md:rounded-none md:border-l-2 md:border-l-yellow-400">
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-4 font-semibold">
                            <div class="text-2xl text-black">Lisa</div>
                            <div class="text-2xl text-black">26/50</div>
                        </div>
                        <div class="gap-4 md:flex">
                            <div class="text-xl text-gray-800">People & Culture</div>
                            <div class="flex items-center justify-start gap-2 font-sans text-xl text-gray-500">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder-minus">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                        <line x1="9" y1="14" x2="15" y2="14"></line>
                                    </svg>
                                </span>
                                <span>30 Quota</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <button class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button class="rounded-full bg-yellow-400 p-2 shadow hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5  6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex items-center justify-between rounded border border-gray-200 bg-white py-4 px-4 shadow md:rounded-none md:border-l-2 md:border-l-yellow-400">
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-4 font-semibold">
                            <div class="text-2xl text-black">Lisa</div>
                            <div class="text-2xl text-black">26/50</div>
                        </div>
                        <div class="gap-4 md:flex">
                            <div class="text-xl text-gray-800">People & Culture</div>
                            <div class="flex items-center justify-start gap-2 font-sans text-xl text-gray-500">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder-minus">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                        <line x1="9" y1="14" x2="15" y2="14"></line>
                                    </svg>
                                </span>
                                <span>30 Quota</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <button class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button class="rounded-full bg-yellow-400 p-2 shadow hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5  6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

      </div>
    )
  }
}
