import React from 'react'
import { TrashIcon } from '../../assets/images/icons';
import FormSelect from '../../components/FormSelect';
import PaginationSize from '../../components/Paginations';
import Graph from './components/Graph';

const AllArea = () => {


  const respData = {
    "Status": 200,
    "Message": "Sukses",
    "Data": [
      {
        "No": 1,
        "Area": "Jakarta",
        "Total": 128,
        "Analisis": {
          "Total": 38,
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
          "Total": 40,
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
          "Total": 50,
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
        "Total": 120,
        "Analisis": {
          "Total": 46,
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
          "Total": 24,
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
          "Total": 50,
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
      },
      {
        "No": 2,
        "Area": "Sampit",
        "Total": 112,
        "Analisis": {
          "Total": 79,
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
          "Total": 24,
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
          "Total": 35,
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
      },
      {
        "No": 2,
        "Area": "Medan",
        "Total": 108,
        "Analisis": {
          "Total": 8,
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
          "Total": 65,
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
          "Total": 35,
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
      },
      {
        "No": 2,
        "Area": "Tegal",
        "Total": 87,
        "Analisis": {
          "Total": 48,
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
          "Total": 4,
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
          "Total": 35,
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
            class="mt-2 w-full rounded border bg-gray-100 py-4 pl-2 pr-10 text-gray-400 focus:outline-none" />
          <span class="hover:cursor-pointer">
            <img src={TrashIcon} alt="" className='w-7 h-7' />
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
      <Graph data={respData.Data} />


    </div>
      <div className="flex items-center justify-center gap-5 mt-10 align-middle">
        {/* <PaginationSize /> */}
        <button className="p-5 py-3 my-auto text-center bg-white border border-black rounded-full">&#10094;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>10</button>
        <button className="p-5 py-3 my-auto text-yellow-400 bg-white border border-black rounded-full">&#10095;</button>
      </div>
  </section>
)
}

export default AllArea