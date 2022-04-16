import React, { Component } from 'react';


class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <label for={this.props.name} className="text-xl font-semibold">{this.props.label}</label>
                <input name={this.props.name} className="px-2 py-4 pl-2 pr-10 mt-2 text-gray-400 bg-gray-100 border rounded focus:outline-none md:pr-32" placeholder={this.props.placeholder} />
            </>
        );
    }
}

export default FormInput;