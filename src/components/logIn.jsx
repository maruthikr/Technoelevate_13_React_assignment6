import React, { Component } from 'react'
export default class logIn extends Component {
i
    
    
    render() {
        const {history} = this.props
        return (
            <div>

                <button
                onClick={()=>{
                    history.push(
                        {
                            pathname:"/employeeportal" ,
                        })

                }}


                >login</button>
            </div>
        )
    }
}
