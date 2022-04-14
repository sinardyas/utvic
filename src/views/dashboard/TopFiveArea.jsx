import React from 'react'

const TopFiveArea = () => {

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


  return (
    <div className="mt-10 space-y-5">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-center">
        <div className="md:w-1/2">
          <h1 className="text-xl font-semibold text-black">Top 5 Area Dashboard</h1>
        </div>
        <div className="md:flex md:w-1/2 md:items-center">
          <span className="font-semibold text-black">Keterangan:</span>
          <div className="flex items-center justify-start gap-4 mt-4 md:justify-center md:mt-0 md:ml-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-red-500 rounded-tl-full rounded-tr-full"></span>
              <span>Analisis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-yellow-300 rounded-tl-full rounded-tr-full"></span>
              <span>Ide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-green-500 rounded-tl-full rounded-tr-full"></span>
              <span>Result</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-5"></div>

      <div className="flex items-end flex-grow w-1/2 mx-auto space-x-2 sm:space-x-3">
        {
          respData.Data.map((v, i) =>
            <div className="relative flex flex-col items-center flex-grow pb-5 group">
              <span
                className="absolute top-0 hidden px-4 py-2 -mt-6 text-sm text-white bg-blue-400 rounded-md top-tooltip group-hover:block">
                {v.Total} </span>
              <div className={`relative flex items-center justify-center w-1/5 bg-green-400 rounded-tl-full rounded-tr-full top-6 md:top-8 md:w-[1rem] hover:cursor-pointer hover:border hover:border-green-500 left-tooltip ${'h-['+v.Analisis.Total*.4+'rem]'} `} data-target="tooltip-result-0">
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
                        hover:border-yellow-500 left-tooltip ${'h-['+v.Analisis.Total*.3+'rem]'} `} data-target="tooltip-analis-0">
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
  )
}

export default TopFiveArea