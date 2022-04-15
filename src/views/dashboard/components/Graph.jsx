import React from 'react'

const Graph = (props) => {

    const grandTotal = props.data.reduce((acc, curr) => {
        return acc + curr.Total;
    }, 0);

    const chartHeight = (value, total) => {
        const result = Math.round(value / grandTotal * 100).toString();
        return result;
    };

    const getMaxHeight = Math.max(...props.data.map((v) => {
        return Math.floor(v.Total/10);
    }));


    // console.log(getMaxTotal);

    return (
        <div>
            <div className="flex items-end flex-grow mb-10 md:gap-24 justify-around mx-auto space-x-2 sm:space-x-3 h-fit ">
                {
                    props.data.map((v, i) =>
                        <div className="relative w-fit flex flex-col pb-6 items-center group text-xs " style={{ height: `max-${getMaxHeight}rem` }}>
                            <span
                                className="absolute top-0 hidden px-4 py-2 -mt-6 md:-mt-4 text-sm text-white rounded-md top-tooltip group-hover:block bg-sky-400">
                                {v.Total} </span>
                            <div className="relative flex items-center justify-center bg-green-400 rounded-tl-full rounded-tr-full top-6 md:top-8 w-[1.5rem] hover:cursor-pointer hover:border hover:border-green-500 left-tooltip" data-target="tooltip-result-0"
                                style={{ height: `${chartHeight(v.Result.Total)}rem` }}>
                                <div className='absolute -z-10 h-[1px] w-5 bg-black ml-10 pin-tooltip'></div>
                                <div className="absolute ml-[5.4rem] left-tooltip-green tooltip-ide-0 w-6 h-6 text-white bg-green-400 rounded-full my-auto text-center">
                                    <div className='realtive mt-1 h-full'>{v.Result.Total}</div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center w-[1.5rem] bg-yellow-400 rounded-tl-full rounded-tr-full top-3 md:top-2 hover:cursor-pointer hover:border hover:border-yellow-500 left-tooltip" data-target="tooltip-ide-0"
                                style={{ height: `${chartHeight(v.Ide.Total)}rem` }}>
                                <div className='absolute -z-10 h-[1px] w-5 bg-black ml-10 pin-tooltip'></div>
                                <div className="absolute ml-[5.4rem] left-tooltip-yellow tooltip-ide-0 w-6 h-6 text-white bg-yellow-400 rounded-full mx-auto text-center">
                                    <div className='realtive mt-1 h-full'>{v.Ide.Total}</div>
                                </div>
                            </div>
                            <div
                                class="relative flex w-[1.5rem] justify-center items-center rounded-tl-full
                        rounded-tr-full bg-red-400 hover:cursor-pointer hover:border
                        hover:border-yellow-500 left-tooltip" data-target="tooltip-analis-0"
                                style={{ height: `${chartHeight(v.Analisis.Total)}rem` }}
                            >
                                <div className='absolute -z-10 h-[1px] w-5 bg-black ml-10 pin-tooltip'></div>
                                <div className="absolute ml-[5.4rem] mx-auto text-center left-tooltip-red tooltip-analis-0 w-6 h-6 rounded-full text-white bg-red-400">
                                    <div
                                        className="realtive mt-1 h-full">{v.Analisis.Total}</div>
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

export default Graph