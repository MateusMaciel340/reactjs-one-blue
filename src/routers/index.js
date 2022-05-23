import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages";

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;