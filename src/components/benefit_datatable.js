import React, { Component } from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class BenefitDatatable extends Component {
    componentDidMount() {
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    { title: "Code" },
                    { title: "Name" }
                ]
            }
        )
    }
    componentWillUnmount() {

    }

    render() {
        return <div style={{width: '100%'}}>
            <table className="display" width="100%" ref={el => this.el = el}>

            </table>
        </div>
    }
}

export default BenefitDatatable;