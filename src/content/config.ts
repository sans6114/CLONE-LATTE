import {
  defineCollection,
  reference,
  z,
} from 'astro:content';

const categorias = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        wide: z.boolean(),
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        price: z.number(),
        urlTB: z.string(),
        image: image()
    })
})
const producto = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        categoria: reference('categorias'),
        image: image()
    })
  })

  export const collections = {
    categoria: categorias,
    producto: producto
  }