import React, { Component } from 'react'

export default class EmployeeInfo extends Component {

    state = {
        ...this.props.info
    }
    render() {
        console.log(this.state);
        return (
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.name}</td>
                <td>{this.state.designation}</td>
                <td>{this.state.salary} </td>

            </tr>
        )
    }
}
