import {
  defineAction,
  z,
} from 'astro:actions';

export const registerUser = defineAction({
    accept: 'form',
    input: z.object({
         name: z.string().min(2),
         email: z.string().min(2),
         password: z.string().min(2),
         remember_me: z.boolean().optional(),
    }),
    handler: async ({name, email, password, remember_me}, {cookies}) => {
if(remember_me){
  cookies.set('email', email, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),//1 año
    path: '/'
  }) 
}else {
  cookies.delete('email', {
    path: '/'
  })
}
//si recibo la info
        //console.log({name, email, password, remember_me})
        return {ok: true, msg: 'Usuario creado'}
    }
})

