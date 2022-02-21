import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import TestComponents from "../../../n2_feauters/f0_test/TestComponents";
import Login from "../../../n2_feauters/f1_auth/a1_login/Login";
import Register from "../../../n2_feauters/f1_auth/a2_register/pages/Register";
import Profile from "../../../n2_feauters/f1_auth/a2_register/pages/Profile";
import RecoveryPassword from "../../../n2_feauters/f1_auth/a2_register/pages/RecoveryPassword";
import Password from "../../../n2_feauters/f1_auth/a2_register/pages/Password";
import Error404 from "../../../n2_feauters/f1_auth/a2_register/pages/Error404";

export const PATH={
    LOGIN:'/login',
    REGISTER:'/register',
    PROFILE:'/profile',
    RECOVERY_PASSWORD:'/recovery_password',
    ADD_NEW_PASSWORD:'/new_password',
    COMPONENTS:'/components',
    REDIRECT:'/'
}



function Routers(){
    return(
        <div>
            <Routes>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
                <Route path={PATH.ADD_NEW_PASSWORD} element={<Password/>}/>
                <Route path={PATH.COMPONENTS} element={<TestComponents/>}/>

                <Route element={() => <Error404/>}/>
                {/*<Route path={PATH.REDIRECT} element={()=><Navigate to={PATH.LOGIN} replace/>}/>*/}
            </Routes>

        </div>
    )
}
export default Routers;