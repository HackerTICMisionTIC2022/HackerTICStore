import { useState, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu.js";
import { Navigation } from "./components/Navigation.js";

function App() {

    const [role, setRole] = useState('Client');

    return(

        <Fragment>

            <BrowserRouter>

                <Menu role = {role}/>
                <br/>
                <Navigation role = {role}/>
            
            </BrowserRouter>
        
        </Fragment>

    );

}

export default App;