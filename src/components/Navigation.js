import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductListAdmin } from "./ProductListAdmin.js";
import { ProductModify } from "./ProductModify.js";
import { SaleList } from "./SaleList.js";
import { ProductListClient } from "./ProductListClient.js";
import { ShoppingCart } from "./ShoppingCart.js";

export const Navigation = ({ role }) => {

    return(

        <Routes>

            {role === "Admin" ? (

                <Fragment>

                    <Route path="/productListAdmin" element={<ProductListAdmin/>}/>
                    <Route path="/productModify" element={<ProductModify/>}/>
                    <Route path="/saleList" element={<SaleList/>}/>

                </Fragment>

            ) : (

                <Fragment>

                    <Route path="/productListClient" element={<ProductListClient/>}/>
                    <Route path="/shoppingCart" element={<ShoppingCart/>}/>

                </Fragment>

            )}

        </Routes>

    )

}