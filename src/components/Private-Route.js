import {Navigate, Outlet} from "react-router-dom"
import Cookies from "js-cookie"
import axios from "axios"
import {TokenHeader} from "../data/TokenHeader"

export default function PrivateRoute() {
    const token = Cookies.get('token', {path: '/'})

    axios.post("api/user/check/", "", {
        ...TokenHeader
    })
        .then(response => {
            if (response.status !== 200) {
                Cookies.remove('token', {path: '/'})
                window.location.href = "/"
            }
        })
        .catch((error) => {
            Cookies.remove('token', {path: '/'})
            window.location.href = "/"
        })

    return token ? <Outlet/> : <Navigate to="/" replace/>
}