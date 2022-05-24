import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInSide from "../pages";

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInSide/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;