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
                <label for={this.props.name} class="text-xl font-semibold">{this.props.label}</label>
                <input name={this.props.name} class="mt-2 rounded border bg-gray-100 py-6 pl-2 pr-10 text-gray-400 focus:outline-none md:pr-32" placeholder={this.props.placeholder} />
            </>
        );
    }
}

export default FormInput;