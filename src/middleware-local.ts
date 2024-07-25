
//solo demostracion

import type { MiddlewareNext } from 'astro';
import { defineMiddleware } from 'astro:middleware';

const privateRoutes = ['/protected']
// const privateRoutes = 

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async ({ url, request }, next) => {


    const authHeaders = request.headers.get('authorization') ?? ''
    console.log(authHeaders)
    if (privateRoutes.includes(url.pathname)) {
        return checkLocalAuth(authHeaders, next)
        //console.log('protected')
    }


    //console.log(context.url)

    return next()
});


//verificar la informacion que la persona puso en los auth headers
const checkLocalAuth = (authHeaders: string, next: MiddlewareNext) => {
    if (authHeaders) {
        const headersAuth =  authHeaders.split(' ').at(-1) ?? 'user:pass'
        const decodedValue = atob(headersAuth).split(':')
        //console.log(headersAuth, decodedValue)
        const [user, password] = decodedValue
    
        if(user === 'admin' && password === 'admin1'){
            return next()
        }
    }
//corto desde que tiene el espacio y agarro la posicion -1, osea el "codigo encriptado"
   
    return new Response('Auth necesaria', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic real="Secure area"'
        }
    })
}