import { Component, Fragment } from "react";

export function ShoppingCart() {

    var heading = ['Imagen', 'Nombre', 'Cantidad', 'Valor Unitario', 'Total'];
    var body = [
        ['Imagen Producto 1', 'Camiseta', 3, 54000, 162000],
        ['Imagen Producto 2', 'Pantalón', 2, 80000, 160000],
        ['Imagen Producto 3', 'Zapatos', 1, 105000, 105000]
    ];

    return (
        
        <Fragment>
            
            <center>
                <div>
                    <h3>Carrito De Compras</h3>
                    <br/>
                </div>
                <div >
                    <Table
                        heading={heading}
                        body={body}
                    />
                </div>
                <h6>TOTAL: 427000</h6>
                <br/>
                <button>Confirmar</button>
                <button>Cancelar</button>
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