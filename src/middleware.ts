import { defineMiddleware } from 'astro:middleware';

const privateRoutes = ['/protected']
// const privateRoutes = 

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async ({ url, request }, next) => {



    //console.log(context.url)

    return next()
});

