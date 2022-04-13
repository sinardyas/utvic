import React from 'react'

const AllArea = () => {

  const dataAllArea = [
    {
      'area': 'Jakarta',
      'count': 128,
      'result': 48,
      'ide': 50,
      'analis': 30
    },
    {
      'area': 'Bandung',
      'count': 128,
      'result': 48,
      'ide': 50,
      'analis': 30
    },
    {
      'area': 'Sampit',
      'count': 128,
      'result': 48,
      'ide': 50,
      'analis': 30
    },
    {
      'area': 'Medan',
      'count': 128,
      'result': 48,
      'ide': 50,
      'analis': 30
    },
    {
      'area': 'Tegal',
      'count': 128,
      'result': 48,
      'ide': 50,
      'analis': 30
    },
  ];


  return (
    <section>
      <div class="mt-10 flex w-full flex-col justify-center gap-4 md:flex-row">
        <div class="flex flex-col md:w-1/2">
          <label for="filter" class="text-xl font-semibold">Filter</label>

          <select name="filter"
            class="mt-2 rounded border bg-gray-100 py-4 pl-2 pr-10 text-gray-400 focus:outline-none md:pr-32">
            <option value="">Pilih Filter</option>
            <option value="">Filter-1</option>
            <option value="">Filter-4</option>
            <option value="">Filter-3</option>
          </select>
        </div>
        <div class="flex flex-col md:w-1/2">
          <label for="filter" class="text-xl font-semibold">Kategori</label>
          <div class="flex items-center justify-between gap-2">
            <input name="filter" type="text"
              class="mt-2 w-full rounded border bg-gray-100 py-4 pl-2 pr-10 text-gray-400 focus:outline-none" />
            <span class="hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-trash-2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                </path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div class="mt-10 space-y-5">
        <div class="flex flex-col md:flex-row gap-4 md:justify-center items-start">
          <div class="md:w-1/2">
            <h1 class="text-xl font-semibold text-black">All Dashboard Area</h1>
          </div>
          <div class="md:flex md:w-1/2 md:items-center">
            <span class="font-semibold text-black">Keterangan:</span>
            <div class="flex items-center justify-start md:justify-center gap-4 mt-4 md:mt-0 md:ml-4">
              <div class="flex items-center gap-2">
                <span class="h-8 w-8 rounded-tl-full rounded-tr-full bg-red-500"></span>
                <span>Analisis</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="h-8 w-8 rounded-tl-full rounded-tr-full bg-yellow-300"></span>
                <span>Ide</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="h-8 w-8 rounded-tl-full rounded-tr-full bg-green-500"></span>
                <span>Result</span>
              </div>
            </div>
          </div>
        </div>

        <div class="h-5"></div>
        <div class="flex w-1/2 mx-auto flex-grow items-end space-x-2 sm:space-x-3">
          {
            dataAllArea.map((v) =>
              <div class="group relative flex flex-grow flex-col items-center pb-5">
                <span
                  class="top-tooltip hidden absolute top-0 -mt-6 rounded-md bg-blue-400 py-2 px-4 text-sm text-white group-hover:block">
                  128 </span>
                <div class="relative top-6 md:top-8 flex h-12 w-[1rem] md:w-[1rem] items-center justify-center
                        rounded-tl-full rounded-tr-full bg-green-400 hover:cursor-pointer hover:border
                        hover:border-green-500 left-tooltip" data-target="tooltip-result-0">
                  <div class="left-tooltip-green tooltip-result-0 absolute hidden ml-16 ">
                    <span
                      class="h-6 w-6 rounded-full bg-green-400 text-xs text-white text-center align-middle p-1">38</span>
                  </div>
                </div>
                <div class="relative top-3 md:top-4 flex h-12 w-1/4 md:w-[1rem] justify-center items-center rounded-tl-full rounded-tr-full
                        bg-yellow-400 hover:cursor-pointer hover:border
                        hover:border-yellow-500 left-tooltip" data-target="tooltip-ide-0">
                  <div class="left-tooltip-yellow tooltip-ide-0 absolute hidden ml-16 ">
                    <span
                      class="h-6 w-6 rounded-full bg-yellow-400 text-xs text-white text-center align-middle p-1">38</span>
                  </div>
                </div>
                <div
                  class="relative flex h-24 w-1/4 md:w-[1rem] justify-center items-center rounded-tl-full
                        rounded-tr-full bg-red-400 hover:cursor-pointer hover:border
                        hover:border-yellow-500 left-tooltip" data-target="tooltip-analis-0">
                  <div class="left-tooltip-red tooltip-analis-0 absolute hidden ml-16 ">
                    <span
                      class="h-6 w-6 rounded-full bg-red-400 text-xs text-white text-center align-middle p-1">38</span>
                  </div>
                </div>
                <span class="absolute bottom-0 text-sm font-bold">{v.area}</span>
              </div>

            )}


        </div>
      </div>
    </section>
  )
}

export default AllArea