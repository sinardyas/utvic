import React, { Component } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

class FormSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <label for={this.props.name} class="text-xl font-semibold">{this.props.label ?? ''}</label>
                <div className={`flex justify-end mt-2 rounded border py-6 px-4 focus:outline-none ${this.props.formheader ? 'bg-yellow-400 text-black text-xl font-semibold':'bg-gray-100  text-gray-400' }`}>
                    <select name={this.props.name} class="appearance-none bg-transparent w-full outline-none">
                        <option value="">{this.props.placeholder}</option>
                        {this.props.data.map((v) =>
                        <option value={v.name}>{ v.label }</option>
                        )}
                    </select>
                    <span className='text-right hover:cursor-pointer focus:hidden' for={this.props.name}>
                        <KeyboardArrowDownOutlinedIcon />
                    </span>
                </div>
            </>
        );
    }
}

export default FormSelect;