import React from 'react'
import '../../../styles/Makalah.scss';

const Select = ({label}) => {
    return (
        <div className='flex flex-col w-full'>
            <label className='mb-2'>{label}</label>
            <select className='form-select'>
                <option value="">List inovasi dengan tipe proyek CRP</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        </div>
  )
}

export default Select