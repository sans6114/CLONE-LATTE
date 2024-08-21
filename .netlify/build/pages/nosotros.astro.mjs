/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DuVAwPw9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
/* empty css                                    */
import { $ as $$Divider, a as $$HeroSectionAlt } from '../chunks/Divider_BrrEOLmL.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DZlfg4QP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Swiper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Swiper;
  const { images } = Astro2.props;
  const imagesForSlide = images.map((image) => {
    return image.startsWith("http") ? image : `${"http://localhost:4321"}/src/images/fabrica/${image}`;
  });
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead()}<div class="swiper mt-10 col-span-1 sm:col-span-2" data-astro-cid-qfh3srwg> <!-- Additional required wrapper --> <div class="swiper-wrapper" data-astro-cid-qfh3srwg> <!-- Slides --> ${imagesForSlide.map((img) => renderTemplate`<div class="swiper-slide" data-astro-cid-qfh3srwg> <img${addAttribute(img, "src")} alt="Product Image" class="w-full h-full object-cover" data-astro-cid-qfh3srwg> </div>`)} </div> <!-- If we need pagination --> <div class="swiper-pagination" data-astro-cid-qfh3srwg></div> </div>  `;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/nosotros/Swiper.astro", void 0);

const images = [
    'cacerola.jpg',
    'fabrica-2.jpg',
    'fabrica-3.jpg',
    'fabrica-4.jpg'
];

const $$Astro$2 = createAstro();
const $$HeroNosotros = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroNosotros;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div class="max-w-screen-md"> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="text-balance text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight text-start"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-4 text-pretty text-lg leading-relaxed lg:w-4/5"> ${subTitle} </p>`} <!-- Review Section: This section presents avatars, review ratings and the number of reviews --> </div> <!-- Hero slider Image Section --> <div class="flex w-full mask mask-heart border-2 md:w-3/4 md:mx-auto h-full"> ${renderComponent($$result, "Swiper", $$Swiper, { "images": images.map((img) => img) })} </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/nosotros/HeroNosotros.astro", void 0);

const $$Astro$1 = createAstro();
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    img,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row md:justify-center w-full mb-[80px]"> <div class="px-4 flex-grow self-center"> <h2 class="text-start mb-4 text-balance text-4xl font-extrabold tracking-tight">${title}</h2> <p class="mt-4 text-pretty text-lg leading-relaxed lg:w-4/5">${subTitle}</p> </div> <div class="mask mask-squircle mt-5 md:w-2/4"> <img${addAttribute(img, "src")}${addAttribute(alt, "alt")}> </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/nosotros/RightSection.astro", void 0);

const $$Astro = createAstro();
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const {
    title,
    subTitle,
    img,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row md:justify-center w-full mb-[80px]"> <div class="mask mask-squircle order-2 sm:order-1 mt-5 md:w-2/4"> <img${addAttribute(img, "src")}${addAttribute(alt, "alt")}> </div> <div class="order-1 sm:order-2 px-4 flex-grow self-center"> <h2 class="text-start mb-4 text-balance text-4xl font-extrabold tracking-tight">${title}</h2> <p class="mt-4 text-pretty text-lg leading-relaxed lg:w-4/5">${subTitle}</p> </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/nosotros/LeftSection.astro", void 0);

const articles = [
  {
    isRight: true,
    title: "Donde comenzamos",
    subTitle: "Todo empezo con un caserola y una chica con un objetivo, si un simple artefacto de la cocina iba a ser el origen de una marca que hoy en dia es cada vez mas grande.",
    img: "fabrica-1.jpg",
    alt: "pot in which the first chocolate latte was founded"
  },
  {
    isRight: false,
    title: "Crecimos",
    subTitle: "Hoy en dia todo es diferente, pasamos de una cocinita a una fabrica con gente de lujo, un producto revelador y único, para que puedas usarlo para regalar, como para emprender.",
    img: "fabrica-2.jpg",
    alt: "Construction site before and after"
  },
  {
    isRight: true,
    title: "Productos originales",
    subTitle: "Establecimos nuestros productos con un objetivo muy claro, el transmitir algo con un dulce, que hace que un simple dulce sea mucho más. Conoce nuestra tienda o contactanos para distribuir Latte.",
    img: "fabrica-2.jpg",
    alt: "Construction workers orchestrating a project"
  },
  {
    isRight: false,
    title: "Equipo con un valor inmenso",
    subTitle: "En Latte cada miembro es especial, cada persona que forma parte de ya sea del producto final o aportando una idea es esencial para mantener a la marca en lo alto, abajo tendras una presentación especial del equipo.",
    img: "fabrica-4.jpg",
    alt: "In progress building structure"
  }
];

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const formatter = (image) => {
    return image.startsWith("http") ? image : `${"http://localhost:4321"}/src/images/fabrica/${image}`;
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Nosotros | Latte chocolate" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroNosotros", $$HeroNosotros, { "title": "Conocenos un poco más", "subTitle": "Nuestra historia y valores hacen de Latte un negocio único. Ya sea comprando un chocolate para un ser querido o revendiendo nuestros productos, eres parte esencial de nuestra visión y misión." })} ${articles.map((article) => {
    return article.isRight ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "img": formatter(article.img), "alt": article.alt })}
        ${renderComponent($$result2, "Divider", $$Divider, {})}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": formatter(article.img), "alt": article.alt })}
        ${renderComponent($$result2, "Divider", $$Divider, {})}`;
  })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "No dudes más", "subTitle": "Unite a nuestra red de revendedores y disfruta de múltiples beneficios", "url": "./contact.astro" })} ` })}`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/nosotros.astro", void 0);
const $$file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
