import { useState, Fragment } from "react";

export function ProductModify() {

    const [product, setProduct] = useState({

        image: "",
        name: "",
        description: "",
        price: "",
        stock: ""

    });

    return(

        <Fragment>

            <center>
                <div>
                    <h3>Crear Producto</h3>
                    <br/>
                    <label>URL Imagen
                        <br/>
                        <input 
                            type="text"
                            onChange={(e) => { setProduct({ ...product, image: e.target.value })}}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>Nombre
                        <br/>
                        <input 
                            type="text"
                            onChange={(e) => { setProduct({ ...product, name: e.target.value })}}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>Descripción
                        <br/>
                        <input
                            type="text"
                            onChange={(e) => { setProduct({ ...product, description: e.target.value })}}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>Valor Unitario
                        <br/>
                        <input
                            type="number"
                            onChange={(e) => { setProduct({ ...product, price: e.target.value })}}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>Stock
                        <br/>
                        <input
                            type="number"
                            onChange={(e) => { setProduct({ ...product, stock: e.target.value })}}

                        />
                    </label>
                    <br></br>
                    <br></br>                    
                    <button onClick={ CreateProduct }>Crear</button>
                </div>
            </center>

        </Fragment>

    );

    function CreateProduct() {



    }

}