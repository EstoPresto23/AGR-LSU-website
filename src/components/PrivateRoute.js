
import React, { useContext, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import {onAuthStateChanged, getAuth} from "firebase/auth";

const PrivateRoute = ({ children }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user == null) {
        return <Navigate to="/SignIn" />
    } else if (user) {
        return <>
            {children}
        </>
    } else {
        return <>Loading</>
    }
}

export default PrivateRoute