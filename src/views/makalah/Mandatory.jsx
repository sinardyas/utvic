
import React, { } from 'react'
import { InfoIcon, TrashIcon } from '../../assets/images/icons'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import FormSelect from '../../components/FormSelect';


const Mandatory = () => {
    const [openContent, setOpenContent] = React.useState(0);

    const type = {
        "Status": 200,
        "Message": "Success",
        "Data": [
            {
                "Tipe": "judul",
                "SubTipeId": '01',
                "TipeName": "CRP",
                "list": [
                    {
                        "value": "crp1",
                        "label": "CRP-1"
                    },
                    {
                        "value": "crp2",
                        "label": "CRP-2"
                    },
                    {
                        "value": "crp3",
                        "label": "CRP-3"
                    },
                ]
            },
            {
                "Tipe": "judul",
                "SubTipeId": '01',
                "TipeName": "CSM",
                "list": [
                    {
                        "value": "csm1",
                        "label": "CSM-1"
                    },
                    {
                        "value": "csm2",
                        "label": "CSM-2"
                    },
                    {
                        "value": "csm3",
                        "label": "CSM-3"
                    },
                ]
            },
            {
                "Tipe": "judul",
                "SubTipeId": '01',
                "TipeName": "Digital & Other",
                "list": [
                    {
                        "value": "dno1",
                        "label": "Digital & Other 1"
                    },
                    {
                        "value": "dno2",
                        "label": "Digital & Other 2"
                    },
                    {
                        "value": "dno3",
                        "label": "Digital & Other 3"
                    },
                ]
            },
            {
                "Tipe": "judul",
                "SubTipeId": '01',
                "TipeName": "Design Thingking",
                "list": [
                    {
                        "value": "dt1",
                        "label": "Design Thinking-1"
                    },
                    {
                        "value": "dt2",
                        "label": "Design Thinking-2"
                    },
                    {
                        "value": "dt3",
                        "label": "Design Thinking-3"
                    },
                ]
            },
            {
                "Tipe": "judul",
                "SubTipeId": '01',
                "TipeName": "Reguler",
                "list": [
                    {
                        "value": "reg1",
                        "label": "Reguler-1"
                    },
                    {
                        "value": "reg2",
                        "label": "Reguler-2"
                    },
                    {
                        "value": "reg3",
                        "label": "Reguler-3"
                    },
                ]
            }
        ]
    };


    const respData = {
        "Status": 200,
        "Message": "Table data loaded successfully",
        "Data": {
            "TotalData": 3,
            "Columns": [
                {
                    "name": "IdMakalah",
                    "field": "IdMakalah",
                    "label": "ID Makalah",
                    "align": "center",
                    "sortable": true
                },
                {
                    "name": "JudulMakalah",
                    "field": "JudulMakalah",
                    "label": "Judul Makalah",
                    "align": "center",
                    "sortable": true
                }
            ],
            "Rows": [
                {
                    "IdMakalah": "2021033424",
                    "JudulMakalah": "Inovasi Pembersihan Unit  1"
                },
                {
                    "IdMakalah": "2021033424",
                    "JudulMakalah": "Inovasi Pembersihan Unit  2"
                },
                {
                    "IdMakalah": "2021033424",
                    "JudulMakalah": "Inovasi Pembersihan Unit  3"
                },
                {
                    "IdMakalah": "2021033424",
                    "JudulMakalah": "Inovasi Pembersihan Unit  4"
                }
            ]
        }
    };


    return (
        <>
            <div className='container flex flex-col w-full gap-4'>
                {
                    type.Data.map((v, i) =>
                        <section className='text-xl bg-white border rounded shadow-md'>

                            <div className="flex gap-4">
                                <div className="flex justify-between w-full gap-3 p-4 bg-yellow-400 rounded-md text-blak">
                                    <div className="flex">
                                        <img src={InfoIcon} alt="" className='w-10 h-10 p-3 text-white bg-black rounded-full' />
                                        <div className="ml-4 text-2xl font-semibold">{v.TipeName} </div>
                                    </div>

                                    <button
                                        onClick={() => setOpenContent(i)}
                                        className='flex items-center justify-center w-10 h-10 p-3 text-white bg-black rounded-full'>
                                        {
                                            openContent === i ? (
                                                <ArrowUpIcon className='w-8 h-10 ' />
                                            ) : (
                                                    <ArrowDownIcon className='w-8 h-10' />

                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className={`px-6 py-4 ${openContent === i ? 'block transition ease-in-out delay-500 ' : 'hidden'} `} >
                                <div className="md:px-4">
                                    <FormSelect name={v.TipeName} placeholder={`Pilih ${v.TipeName} `} label="Pilih Inovasi" data={v.list} />
                                </div>
                                <div className="flex flex-col mt-8 ">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-4">
                                        <div className="overflow-hidden rounded-md shadow ring-1 ring-slate-500 ring-opacity-10 md:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-300 ">
                                                <thead className="bg-black">
                                                    <tr className="text-xl font-semibold text-center text-white divide-x divide-gray-200 ">
                                                        <th scope="col" className="py-3.5 pl-4 pr-4 sm:pl-6">No</th>
                                                        {
                                                            respData.Data.Columns.map((v, i) =>
                                                                <th scope="col" className="px-4 py-3.5">{v.label}</th>
                                                            )
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {
                                                        respData.Data.Rows.map((v, i) =>
                                                            <tr className={`divide-x divide-gray-200 text-sm text-gray-600  py-2 text-center ${i % 2 === 1 ? 'bg-slate-300' : 'bg-white'} `}>
                                                                <td className="whitespace-nowrap">{i + 1}</td>
                                                                <td className="whitespace-nowrap">{v.IdMakalah}</td>
                                                                <td>
                                                                    <div className="flex items-center justify-between p-4 whitespace-nowrap gap-x-4">
                                                                        <div className='w-full self-text-center' >{v.JudulMakalah}</div>
                                                                        <button className='w-10 h-10 text-white bg-yellow-400 rounded-full shadow md:text-right xs:bg-red-300' >
                                                                            <img src={TrashIcon} alt="" className='p-1' />
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </div>

        </>
    )
}

export default Mandatory;


