import { Component, Fragment } from "react";
import Sales from "../data/Sales.json";

export function SaleList() {

    var heading = ['Fecha', 'ID Venta', 'Valor'];

    const DisplayData = Sales.map(

        (info) => {

            return(

                <tr>
                    <td>{info.date}</td>
                    <td>{info.saleID}</td>
                    <td>{info.price}</td>
                </tr>

            )

        }
        
    )

    return (
        
        <Fragment>
            
            <center>
                <div>
                    <h3>Lista De Ventas</h3>
                    <br/>
                </div>
                <div >
                    <Table
                        heading={heading}
                        body={DisplayData}
                    />
                </div>
                <h6>TOTAL: 100000</h6>
            </center>

        </Fragment>

    );

}

class Table extends Component {

    render() {

        var heading = this.props.heading;
        var body = this.props.body;
        
        return(

            <Fragment>

                <div>
                    <table>
                        <thead>
                            <tr>
                                {heading.map(head => <th>{head}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {body}
                        </tbody>
                    </table>
                </div>

            </Fragment>

        );

    }

}

class TableRow extends Component {

    render() {

        var row = this.props.row;

        return(

            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>

        );

    }

}