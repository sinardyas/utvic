import React from 'react'
import Graph from './components/Graph';

const TopFiveArea = () => {

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

      <Graph data={respData.Data} />
    </div>
  )
}

export default TopFiveArea