import React from 'react'
import { AddIcon } from '../../../assets/images/icons'

const ButtonAdd = (props) => {
    return (
        <> <button
            onClick={props.onClick}
            class="mt-10 flex justify-start items-center rounded-md border border-black bg-transparent py-3 pr-8 pl-2 font-semibold text-black">
            <span>
                <img src={AddIcon} alt="add-icon" className='w-5 h-5' />
            </span>
            {props.label}
        </button>
        </>
    )
}

export default ButtonAdd