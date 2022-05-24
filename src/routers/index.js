import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInSide from "../pages/SignInSide";
import UserRegistration from "../pages/UserRegistration";

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInSide/>}/>
                <Route path="/user-registration" element={<UserRegistration/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;