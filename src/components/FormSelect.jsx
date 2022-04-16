import React from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const FormSelect = (props) => {


    return (
        <>
            <label for={props.name} class="text-xl font-semibold">{props.label ?? ''}</label>
            <div className={`flex justify-end mt-2 rounded border py-4 px-2 focus:outline-none ${props.formheader ? 'bg-yellow-400 text-black text-xl font-semibold' : 'bg-gray-100  text-gray-400'}`}>
                <select onSelect={props.onSelect} name={props.name} className="w-full bg-transparent outline-none appearance-none">
                    <option value="">{props.placeholder}</option>
                    {props.data.map((v) =>
                        <option value={v.value}>{v.label}</option>
                    )}
                </select>
                <span className='text-right hover:cursor-pointer focus:hidden' for={props.name}>
                    <KeyboardArrowDownOutlinedIcon />
                </span>
            </div>
        </>
    );
}

export default FormSelect;