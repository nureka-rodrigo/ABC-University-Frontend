import Cookies from "js-cookie";

export const TokenHeader = {

    headers: {
        'authorization': `Token ${Cookies.get('token', {path: '/'})}`,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
}