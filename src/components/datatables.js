import React, { Component } from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net-se')

export class BenefitDatatable extends Component {
    componentDidMount() {
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    { title: "CDT Code" },
                    { title: "CDT Description" }
                ],
                dom:
                    "<'ui grid'"+
                    "<'row'"+
                    "<'three wide column'f>"+
                    "<'twelve wide column'i>"+
                    ">"+
                    "<'row'"+
                    "<'center aligned sixteen wide column'>"+
                    ">"+
                    "<'row dt-table'"+
                    "<'sixteen wide column'tr>"+
                    ">"+
                    "<'row'"+
                    "<'four wide column'l>"+
                    "<'right aligned ten wide column'p>"+
                    "<'right aligned four wide column'>"+
                    ">"+
                ">",
                renderer: 'semanticUI',
                pagingType: "full_numbers",
                scrollX: true,
                language: {
                emptyTable:     "No Records Found!",
                zeroRecords:    "No Matching Records Found!",
                search:         "Search",
                paginate: {
                  first: "<i class='angle single left icon'></i> First",
                  previous: "<i class='angle double left icon'></i> Previous",
                  next: "Next <i class='angle double right icon'></i>",
                  last: "Last <i class='angle single right icon'></i>"
                },
                drawCallBack: function () {
                }
              }
            }
        )
    }
    componentWillUnmount() {
    }
    render() {
        return <div style={{width: '100%'}}>
            <table className="ui celled table" width="100%" ref={el => this.el = el} id="tblBenefit">
            </table>
        </div>
    }
}

export default BenefitDatatable;
