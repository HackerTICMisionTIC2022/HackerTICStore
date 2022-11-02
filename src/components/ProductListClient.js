import { Component, Fragment } from "react";

export function ProductListClient() {

    var heading = ['Imagen', 'Nombre', 'Descripción', 'Valor Unitario', 'Stock', 'Comprar'];
    var body = [
        ['Imagen Producto 1', 'Camiseta', 'Talla M', 54000, 200, <button onClick={ BuyProduct }>Comprar</button>],
        ['Imagen Producto 2', 'Pantalón', 'Talla 30', 80000, 25, <button onClick={ BuyProduct }>Comprar</button>],
        ['Imagen Producto 3', 'Zapatos', 'Talla 41', 105000, 10, <button onClick={ BuyProduct }>Comprar</button>]
    ];

    return (
        <Fragment>
            
            <center>
                <div>
                    <h3>Lista De Productos</h3>
                    <br/>
                </div>
                <div >
                    <Table
                        heading={heading}
                        body={body}
                    />
                </div>
            </center>

        </Fragment>

    );

    function BuyProduct() {



    }

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
                            {body.map(row => <TableRow row={row} />)}
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