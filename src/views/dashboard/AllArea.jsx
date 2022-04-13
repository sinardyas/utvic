import React from 'react'
import FormSelect from '../../components/FormSelect';

const AllArea = () => {


  const respData = {
    "Status": 200,
    "Message": "Sukses",
    "Data": [
      {
        "No": 1,
        "Area": "Jakarta",
        "Total": 100,
        "Analisis": {
          "Total": 20,
          "Color": "#fff000",
          "data": [
            {
              "Category": "Imut",
              "SubCategory": "people & proses",
              "total": 10
            },
            {
              "Category": "Lisa",
              "SubCategory": "Business Model",
              "total": 10
            }
          ]
        },
        "Ide": {
          "Total": 20,
          "Color": "#ffffff",
          "data": [
            {
              "Category": "Imut",
              "SubCategory": "people & proses",
              "total": 10
            },
            {
              "Category": "Lisa",
              "SubCategory": "Business Model",
              "total": 10
            }
          ]
        },
        "Result": {
          "Total": 20,
          "Color": "#f00000",
          "data": [
            {
              "Category": "Imut",
              "SubCategory": "people & proses",
              "total": 10
            },
            {
              "Category": "Lisa",
              "SubCategory": "Business Model",
              "total": 10
            }
          ]
        },
      },
      {
        "No": 2,
        "Area": "Bandung",
        "Total": 100,
        "Analisis": {
          "Total": 20,
          "Color": "#fff000",
          "data": [
            {
              "Category": "Imut",
              "SubCategory": "people & proses",
              "total": 10
            },
            {
              "Category": "Lisa",
              "SubCategory": "Business Model",
              "total": 10
            }
          ]
        },
        "Ide": {
          "Total": 20,
          "Color": "#ffffff",
          "data": [
            {
              "Category": "Imut",
              "SubCategory": "people & proses",
              "total": 10
            },
            {
              "Category": "Lisa",
              "SubCategory": "Business Model",
              "total": 10
            }
          ]
        },
        "Result": {
          "Total": 20,
          "Color": "#f00000",
          "data": [
            {
              "Category": "Imut",
              "SubCategory": "people & proses",
              "total": 10
            },
            {
              "Category": "Lisa",
              "SubCategory": "Business Model",
              "total": 10
            }
          ]
        }
      }
    ]
  };

  const listFilters = [
    {
      "name": "lisa",
      "label": "Lisa"
    },
    {
      "name": "imut",
      "label": "Imut"
    },
  ];


return (
  <section>
    <div class="mt-10 flex w-full flex-col justify-center gap-4 md:flex-row">
      <div class="flex flex-col md:w-1/2">
        <FormSelect name="filter" label="Filter" placeholder="Pilih Filter" data={ listFilters} />
      </div>
      <div class="flex flex-col md:w-1/2">
        <label for="filter" class="text-xl font-semibold">Kategori</label>
        <div class="flex items-center justify-between gap-2">
          <input name="filter" type="text"
            class="mt-2 w-full rounded border bg-gray-100 py-6 pl-2 pr-10 text-gray-400 focus:outline-none" />
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
      <div className="flex items-end flex-grow w-1/2 mx-auto space-x-2 sm:space-x-3">
        {
          respData.Data.map((v, i) =>
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span
                className="absolute top-0 hidden px-4 py-2 -mt-6 text-sm text-white bg-blue-400 rounded-md top-tooltip group-hover:block">
                {v.Total} </span>
              <div className={`relative flex items-center justify-center w-1/5 bg-green-400 rounded-tl-full rounded-tr-full top-6 md:top-8 md:w-[1rem] hover:cursor-pointer hover:border hover:border-green-500 left-tooltip ${'h-[' + v.Analisis.Total * .4 + 'rem]'} `} data-target="tooltip-result-0">
                <div className="absolute ml-16 left-tooltip-green tooltip-result-0 ">
                  <span
                    className="w-6 h-6 p-1 text-xs text-center text-white align-middle bg-green-400 rounded-full">{v.Result.Total}</span>
                </div>
              </div>
              <div className={`relative flex items-center justify-center w-1/4 md:w-[1rem] bg-yellow-400 rounded-tl-full rounded-tr-full top-3 md:top-4 hover:cursor-pointer hover:border hover:border-yellow-500 left-tooltip ${'h-[' + v.Ide.Total * .4 + 'rem]'} `} data-target="tooltip-ide-0">
                <div className="absolute ml-16 left-tooltip-yellow tooltip-ide-0 ">
                  <span
                    className="w-6 h-6 p-1 text-xs text-center text-white align-middle bg-yellow-400 rounded-full">{v.Ide.Total}</span>
                </div>
              </div>
              <div
                class={`relative flex w-1/4 md:w-[1rem] justify-center items-center rounded-tl-full
                        rounded-tr-full bg-red-400 hover:cursor-pointer hover:border
                        hover:border-yellow-500 left-tooltip ${'h-[' + v.Analisis.Total * .3 + 'rem]'} `} data-target="tooltip-analis-0">
                <div className="absolute ml-16 left-tooltip-red tooltip-analis-0 ">
                  <span
                    className="w-6 h-6 p-1 text-xs text-center text-white align-middle bg-red-400 rounded-full">{v.Analisis.Total}</span>
                </div>
              </div>
              <span className="absolute bottom-0 text-sm font-bold">{v.Area}</span>


            </div>

          )
        }

      </div>


    </div>
      <div className="flex items-center justify-center gap-5 mt-10 align-middle">
        <span className="p-5 py-3 my-auto text-center bg-white border border-black rounded-full">&#10094;</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>10</span>
        <span className="p-5 py-3 my-auto text-yellow-400 bg-white border border-black rounded-full">&#10095;</span>
      </div>
  </section>
)
}

export default AllArea