import {Navigate, Outlet} from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import {TokenHeader} from "../data/TokenHeader";

export default function AnonymousRoute() {
    const token = Cookies.get('token', {path: '/'});

    axios.post("http://127.0.0.1:8000/api/user/check/", "", {
        ...TokenHeader
    })
        .then(response => {
            if (response.status !== 200) {
                Cookies.remove('token', {path: '/'});
            }
        })
        .catch((error) => {
            Cookies.remove('token', {path: '/'});
        });

    return token ? <Navigate to="/dashboard" replace/> : <Outlet/>;
}