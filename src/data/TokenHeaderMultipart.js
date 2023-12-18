import Cookies from "js-cookie"

export const TokenHeaderMultipart = {

    headers: {
        'authorization': `Token ${Cookies.get('token', {path: '/'})}`,
        'Accept' : 'application/json',
        'Content-Type': 'multipart/form-data'
    }
}