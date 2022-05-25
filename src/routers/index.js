import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInSide from "../pages/SignInSide";
import UserRegistration from "../pages/UserRegistration";
import AuthenticationSuccess from "../pages/AuthenticationSuccess";

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInSide/>}/>
                <Route path="/user-registration" element={<UserRegistration/>}/>
                <Route path="/authentication-sucess" element={<AuthenticationSuccess/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;