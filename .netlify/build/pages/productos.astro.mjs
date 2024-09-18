/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_fRUNfPoz.mjs';
import { m as mockupDos, $ as $$CardSmall, a as $$CardWide } from '../chunks/mockup2_Dm75yQxe.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BqaCaw9f.mjs';
import 'clsx';
import { g as getCollection, $ as $$PrimaryBtn } from '../chunks/_astro_content_CRM31Z2P.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$TestimonialProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialProducts;
  const { title, subTitle, benefits } = Astro2.props;
  const ListItemMarker = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-6 w-6 text-primary-400 dark:text-primary-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Grid --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <div class="lg:col-span-7"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl", "src": mockupDos, "alt": "Mockup of floating boxes" })} </div> <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <div class="space-y-2 md:space-y-4"> <h2 class="text-balance text-3xl font-bold  lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty "> ${subTitle} </p>`} </div> ${benefits && renderTemplate`<ul class="space-y-2 sm:space-y-4"> ${benefits.map((item) => renderTemplate`<li class="flex space-x-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ListItemMarker)}` })} <span class="text-pretty text-base font-medium "> ${item} </span> </li>`)} </ul>`} </div> </div> </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/products/TestimonialProducts.astro", void 0);

const $$Astro = createAstro();
const $$TestimonialSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`<!-- Main div that wraps the testimonials section -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials"> <!-- Title of the testimonials section --> <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-balance text-2xl font-bold  sm:text-3xl lg:text-4xl"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Looping through each testimonial data and rendering it --> ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 "> <div class="flex-auto p-4 md:p-6"> <!-- Testimonial content --> <p class="text-pretty text-base italic text-neutral-600  md:text-lg"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="size-8 flex-shrink-0 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg> </div> <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800  sm:text-base"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 "> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/products/TestimonialSectionAlt.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const categorias = await getCollection("categorias");
  const title = "Productos";
  const subTitle = "Explora la gran variedad de productos que ofrecemos, cada uno tiene un mensaje pensado y dise\xF1ado para un momento en especial.";
  const testimonials = [
    // First testimonial data
    {
      content: ' "Hola! C\xF3mo est\xE1n? Ayer descubr\xED sus chocolates s\xFAper originales en la Puro Dise\xF1o. Quer\xEDa saber d\xF3nde se pueden conseguir fuera de la Feria.\xA0Muchas\xA0gracias!." ',
      author: "Cliente minorista",
      role: "Instagram | Cliente minorista"
    },
    // Second testimonial data
    {
      content: ' "Son hermosos y se les nota el amor con el que est\xE1n hechos y sobre todo pensados, las ideas\xA0son\xA0hermosas.."',
      author: "Cliente minorista",
      role: "Instagram | Cliente minorista"
    },
    // Third testimonial data
    {
      content: ' "Son hermosos y se les nota el amor con el que est\xE1n hechos y sobre todo pensados, las ideas\xA0son\xA0hermosas.." ',
      author: "Comercio",
      role: "Instagram | Comercio"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Productos | Latte chocolate" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full mt-[70px] md:mt-[100px]"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty   md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryBtn", $$PrimaryBtn, { "title": "testimonios", "url": "#testimonials" })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${categorias.map(
    (categoria) => categoria.data.wide ? renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "categoria": categoria })}` : renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "categoria": categoria })}`
  )} </section> </div>  ${renderComponent($$result2, "TestimonialProducts", $$TestimonialProducts, { "title": "\xBFPor qu\xE9 elegir Latte?", "subTitle": "Latte tiene productos increibles, nuestro fuerte es transmitir mensajes a traves de nuestros productos. Compra ahora en nuestra tienda o contactanos para distribuir.", "benefits": [
    "Perfectos para regalar: Nuestros chocolates est\xE1n dise\xF1ados para expresar mensajes especiales, siendo el regalo perfecto para cualquier ocasi\xF3n.",
    "Innovaci\xF3n constante: Siempre estamos innovando de forma creativa para ofrecerte la mejor experiencia.",
    "Calidad: calidad excelente y sobre todo peso de a\xF1os de experiencia en la industria."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialSectionAlt, { "title": "Que dicen nuestros clientes", "testimonials": testimonials })} ` })}`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/productos/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/productos/index.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
