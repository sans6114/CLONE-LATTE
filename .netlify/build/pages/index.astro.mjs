/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DuVAwPw9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BJAJeRUX.mjs';
import { $ as $$Divider } from '../chunks/Divider_BoVquTCI.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DNUuaHua.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$c = createAstro();
const $$MarcasSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MarcasSection;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Title and description --> <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3"> <h2 class="text-balance text-2xl font-bold leading-tight sm:text-3xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty font-semibold leading-tight"> ${subTitle}${" "} <span class="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-xl font-bold text-transparent">
garpa
</span> </p>`} </div> <div class="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-20 mt-10"> <!-- Clients Group SVGs --> <!-- First --> <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-40 lg:py-5 mx-auto h-auto w-32 py-3 sm:mx-0" viewBox="0 0 512 512"><path fill="#8080ff" d="M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a321 321 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9m-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a488 488 0 0 0-64.18-10.16a481 481 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435 435 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47m0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440 440 0 0 1 16.12 42.32a434 434 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48m13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a440 440 0 0 1-15.37 41.39m-98.24-107.45a440 440 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18M145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491 491 0 0 0 201 160.51a499 499 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83m-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.5 493.5 0 0 0 23.4 60.75a502.5 502.5 0 0 0-23.69 61.58m111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a481 481 0 0 0 64.69 9.39a501 501 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48m23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439 439 0 0 1-28.2 34.74m124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.5 484.5 0 0 0 40.23-51.2a478 478 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47m17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483 483 0 0 0-24.31-60.94a481.5 481.5 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52"></path><path fill="#8080ff" d="M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43"></path></svg> <!-- Second --> <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-40 lg:py-5 mx-auto h-auto w-32 py-3 sm:mx-0" fill="#8080ff" viewBox="0 0 56 56"><path d="M41.937 29.513c.07 7.552 6.625 10.065 6.698 10.097c-.056.178-1.047 3.582-3.454 7.098c-2.08 3.04-4.238 6.07-7.64 6.132c-3.34.061-4.415-1.982-8.235-1.982s-5.013 1.92-8.177 2.043c-3.282.125-5.782-3.287-7.88-6.316c-4.285-6.196-7.56-17.508-3.162-25.144c2.184-3.792 6.089-6.193 10.326-6.254c3.223-.062 6.266 2.168 8.236 2.168s5.667-2.682 9.554-2.288c1.627.068 6.194.657 9.127 4.95c-.236.147-5.45 3.182-5.393 9.496m-6.28-18.545C37.4 8.858 38.573 5.922 38.253 3c-2.512.101-5.55 1.674-7.352 3.782c-1.614 1.867-3.029 4.856-2.647 7.72c2.8.216 5.66-1.423 7.403-3.534"></path></svg> <!-- Third --> <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-40 lg:py-5 mx-auto h-auto w-32 py-3 sm:mx-0" viewBox="0 0 2048 2048"><path fill="#8080ff" d="M1024 0q25 0 49 11t42 28l894 894q20 20 29 45t10 52q0 26-11 49t-28 40l-890 890q-39 39-95 39q-25 0-49-11t-42-28L39 1115q-17-17-28-41t-11-50t10-51t29-44l613-613l232 232q-12 29-12 61q0 64 46 110l8 8q2 2 5 3t6 1t10 4v567q-12 5-20 14t-18 18q-26 26-41 55t-15 67q0 34 13 63t35 52t52 35t64 13q34 0 65-11t53-31t36-50t14-65q0-22-6-44t-18-41t-28-36t-35-27V763l212 212q-12 29-12 60q0 33 12 61t34 50t49 33t62 13q33 0 61-12t50-34t33-49t13-62q0-32-12-60t-34-50t-49-34t-61-13q-27 0-52 9l-227-227q9-25 9-52q0-33-12-61t-34-50t-49-33t-62-12q-24 0-50 8L743 224L929 39q39-39 95-39"></path></svg> <!-- Fourth --> <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-40 lg:py-5 mx-auto h-auto w-32 py-3 sm:mx-0" viewBox="0 0 2048 2048"><path fill="#8080ff" d="M1024 0q25 0 49 11t42 28l894 894q20 20 29 45t10 52q0 26-11 49t-28 40l-890 890q-39 39-95 39q-25 0-49-11t-42-28L39 1115q-17-17-28-41t-11-50t10-51t29-44l613-613l232 232q-12 29-12 61q0 64 46 110l8 8q2 2 5 3t6 1t10 4v567q-12 5-20 14t-18 18q-26 26-41 55t-15 67q0 34 13 63t35 52t52 35t64 13q34 0 65-11t53-31t36-50t14-65q0-22-6-44t-18-41t-28-36t-35-27V763l212 212q-12 29-12 60q0 33 12 61t34 50t49 33t62 13q33 0 61-12t50-34t33-49t13-62q0-32-12-60t-34-50t-49-34t-61-13q-27 0-52 9l-227-227q9-25 9-52q0-33-12-61t-34-50t-49-33t-62-12q-24 0-50 8L743 224L929 39q39-39 95-39"></path></svg> <!-- Quint --> <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-40 lg:py-5 mx-auto h-auto w-32 py-3 sm:mx-0" fill="#8080ff" viewBox="0 0 56 56"><path d="M41.937 29.513c.07 7.552 6.625 10.065 6.698 10.097c-.056.178-1.047 3.582-3.454 7.098c-2.08 3.04-4.238 6.07-7.64 6.132c-3.34.061-4.415-1.982-8.235-1.982s-5.013 1.92-8.177 2.043c-3.282.125-5.782-3.287-7.88-6.316c-4.285-6.196-7.56-17.508-3.162-25.144c2.184-3.792 6.089-6.193 10.326-6.254c3.223-.062 6.266 2.168 8.236 2.168s5.667-2.682 9.554-2.288c1.627.068 6.194.657 9.127 4.95c-.236.147-5.45 3.182-5.393 9.496m-6.28-18.545C37.4 8.858 38.573 5.922 38.253 3c-2.512.101-5.55 1.674-7.352 3.782c-1.614 1.867-3.029 4.856-2.647 7.72c2.8.216 5.66-1.423 7.403-3.534"></path></svg> </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/MarcasSection.astro", void 0);

const $$Astro$b = createAstro();
const $$PrimaryBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PrimaryBtn;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "cursor-pointer group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-violet-500 hover:bg-violet-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  return renderTemplate`<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses}`, "class")}${addAttribute(url, "href")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="1em" viewBox="0 0 15 15"> <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path> </svg>`} </a>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/buttons/PrimaryBtn.astro", void 0);

const $$Astro$a = createAstro();
const $$CategoryDivider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CategoryDivider;
  const { categoria } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row items-center w-full px-5"> ${categoria.right ? renderTemplate`<!-- Si \`right\` es true, muestra la imagen primero y luego el contenido -->
          <div class="md:w-1/2 md:mx-auto order-1 md:order-none"> <img class="rounded-3xl shadow-2xl"${addAttribute(categoria.img, "src")}${addAttribute(categoria.alt, "alt")}> </div>
          <div class="shadow-xl rounded-sm flex flex-col items-center text-start md:w-1/4 md:mx-auto order-2 md:order-none"> <div class="card-body"> <h2 class="card-title">${categoria.title}</h2> <p>${categoria.subtitle}</p> <div class="w-56 mt-5"> ${renderComponent($$result, "ButtonCompleting", $$PrimaryBtn, { "title": categoria.btnTitle, "url": categoria.btnUrl, "noArrow": false })} </div> </div> </div>` : renderTemplate`<!-- Si \`right\` es false, muestra el contenido primero y luego la imagen -->
          <div class="shadow-xl rounded-sm flex flex-col items-center text-start md:w-1/4  order-2 md:order-none"> <div class="card-body"> <h2 class="card-title">${categoria.title}</h2> <p>${categoria.subtitle}</p> <div class="w-56 mt-5"> ${renderComponent($$result, "ButtonCompleting", $$PrimaryBtn, { "title": categoria.btnTitle, "url": categoria.btnUrl, "noArrow": false })} </div> </div> </div>
          <div class="md:w-1/2 md: mx-auto order-1 md:order-none"> <img class="rounded-3xl shadow-2xl"${addAttribute(categoria.img, "src")}${addAttribute(categoria.alt, "alt")}> </div>`} </div>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/CategoryDivider.astro", void 0);

const packsData = [
  {
    title: "Latte Amor",
    subtitle: "Pack Amor para un gesto especial con alguien querido.",
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: "Pack de Latte Chocolate Amor",
    btnTitle: "Ver más",
    btnUrl: "/packs/amor",
    right: true,
  },
  {
    title: "Latte Amistad",
    subtitle: "Pack Amistad para regalar a un amigo especial.",
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: "Pack de Latte Chocolate Amistad",
    btnTitle: "Ver más",
    btnUrl: "/packs/amistad",
    right: false,
  },
  {
    title: "Latte Cumpleaños",
    subtitle: "Pack Cumpleaños para celebrar con regalos especiales.",
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: "Pack de Latte Chocolate Cumpleaños",
    btnTitle: "Ver más",
    btnUrl: "/packs/cumpleaños",
    right: true,
  },
  {
    title: "Latte Celebraciones",
    subtitle: "Pack Celebraciones para un toque dulce en días especiales.",
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: "Pack de Latte Chocolate Celebraciones",
    btnTitle: "Ver más",
    btnUrl: "/packs/celebraciones",
    right: false,
  },
  {
    title: "Latte Vinotecas",
    subtitle: "Pack Celebraciones para un toque dulce en días especiales.",
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: "Pack de Latte Chocolate Celebraciones",
    btnTitle: "Ver más",
    btnUrl: "/packs/vinotecas",
    right: true,
  },
  {
    title: "Latte Dieteticas",
    subtitle: "Pack Celebraciones para un toque dulce en días especiales.",
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: "Pack de Latte Chocolate Celebraciones",
    btnTitle: "Ver más",
    btnUrl: "/packs/dieteticas",
    right: false,
  },
];

const $$Astro$9 = createAstro();
const $$CategoriasLatte = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CategoriasLatte;
  const { title, subtitle, img2, alt2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col my-[150px] items-center"> <div class="flex flex-col md:px-10 items-center gap-y-5 mb-10 text-center"> <h2 class="block text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight ">${title}</h2> <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">${subtitle}</p> </div> ${packsData.map((data) => renderTemplate`${renderComponent($$result, "CategoryDivider", $$CategoryDivider, { "categoria": data })}
<div class="border border-violet-500 w-3/5 mx-auto my-[100px]"></div>`)} <div class="flex flex-col"> <div class="flex flex-col md:px-10 items-center gap-y-5 text-center"> <h2 class="block text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight ">Alfajor de la fortuna</h2> <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">¿Sabías que hacemos alfajores también? Si, pero como somos latte y queremos tener nuestro toque distintivo siempre, tenes que saber que cada alfajor cuenta con una frase única que puede ser capaz de alegrarte el día.</p> </div> ${img2 && alt2 && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img2, "alt": alt2, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/CategoriasLatte.astro", void 0);

const $$ChatItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl mt-[100px]"> <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div> <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div> <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div> <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div> <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white"> <div class="absolute bottom-0 p-5"> <div class="chat chat-start"> <div class="chat-bubble">Nos encantaron!!!</div> </div> <div class="chat chat-start"> <div class="chat-bubble">Vuelvo del viaje y te pido más. San valentín es nuestro fuerte!! asi que le damos con todoooo</div> </div> <div class="chat chat-start"> <div class="chat-bubble">La presentación, elvoltorio. Todo perfecto! ame</div> </div> </div> </div> </div>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/utils/ChatItem.astro", void 0);

const $$Astro$8 = createAstro();
const $$StatsLatte = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$StatsLatte;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col mt-[60px]"> <!-- title --> <div class="flex flex-col md:px-10 items-center gap-y-5 text-center"> <h2 class="block text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight"> ${title} </h2> <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"> ${subtitle} </p> </div> <div class="flex flex-col"> <div> <!-- stats --> ${renderComponent($$result, "ChatItem", $$ChatItem, {})} <div class="flex gap-x-10 justify-center my-10"> <a class="btn btn-primary md:w-56" href="">Portal comercios</a> <a class="btn btn-secondary md:w-56" href="">Mapa interactivo</a> </div> </div> </div> ${renderComponent($$result, "Divider", $$Divider, {})} </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/StatsLatte.astro", void 0);

const $$Astro$7 = createAstro();
const $$InstagramBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$InstagramBtn;
  const { btnTitle, btnUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(btnUrl, "href")} class="btn w-56 m-4"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"></rect><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"></stop><stop offset=".1" stop-color="#fd5"></stop><stop offset=".5" stop-color="#ff543e"></stop><stop offset="1" stop-color="#c837ab"></stop></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"></stop><stop offset=".128" stop-color="#3771c8"></stop><stop offset="1" stop-color="#60f" stop-opacity="0"></stop></radialGradient></defs></g></svg> ${btnTitle} </a>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/buttons/InstagramBtn.astro", void 0);

const $$Astro$6 = createAstro();
const $$Tiktok = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tiktok;
  const { btnTitle, btnUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(btnUrl, "href")} class="btn w-56 m-4"> <svg xmlns="http://www.w3.org/2000/svg" width="0.89em" height="1em" viewBox="0 0 256 290"><path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"></path><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"></path><path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"></path></svg> ${btnTitle} </a>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/buttons/Tiktok.astro", void 0);

const $$Astro$5 = createAstro();
const $$Redes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Redes;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row p-10 my-[60px] justify-center"> <div class="flex flex-col items-center gap-y-5 mb-10 text-center"> <h2 class="block text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight ">Te invitamos a seguirnos en nuestras redes</h2> <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 ">Contamos con una caracteristica clave: creatividad. Nuestras redes son denotación de esto, te invitamos a seguirnos</p> <div> ${renderComponent($$result, "InstagramBtn", $$InstagramBtn, { "btnTitle": "Instragram", "btnUrl": "https://www.instagram.com/latteechocolate/?hl=es" })} ${renderComponent($$result, "TiktokBtn", $$Tiktok, { "btnTitle": "Tiktok", "btnUrl": "#" })} </div> </div> <div class="bg-violet-500 bg-opacity-25 rounded-3xl"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })} </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/Redes.astro", void 0);

const $$Astro$4 = createAstro();
const $$AnnounceBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AnnounceBanner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed bottom-0 start-1/2 z-50  mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl p-4 text-center shadow-sm "${addAttribute({
    background: "rgb(108,109,178)",
    backgroundImage: "radial-gradient(circle, rgba(108,109,178,1) 40%, rgba(243,11,134,1) 90%)"
  }, "style")}> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 backdrop-brightness-75 sm:backdrop-brightness-100 px-3 py-2 text-sm font-semibold transition duration-300   disabled:pointer-events-none disabled:opacity-50 dark:backdrop-brightness-100    dark:focus:outline-none"${addAttribute(url, "href")} target="_blank"> ${btnTitle} <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} `;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/banner/AnnounceBanner.astro", void 0);

const $$Astro$3 = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed  lg:w-4/5"> ${subTitle} </p>`} <div class="mt-8"> ${renderComponent($$result, "ButtonCompleting", $$PrimaryBtn, { "title": primaryBtn, "url": primaryBtnURL, "noArrow": false })} </div> </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/HeroSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardIndex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardIndex;
  const formatter = (imagen) => {
    return imagen.startsWith("http") ? imagen : `${"http://localhost:4321"}/src/images/index/${imagen}`;
  };
  const { card } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-[200px] md:h-auto card bg-base-100 shadow-xl focus-visible:scale-125 md:hover:scale-125 hover:z-40 transition-all duration-500 md:duration-300 ease-in-out rounded-3xl"> <figure> <img${addAttribute(formatter(card.imgCard), "src")}${addAttribute(card.alt, "alt")} class="h-full md:h-96 w-full object-cover object-center rounded-3xl"${addAttribute("false", "draggable")}${addAttribute("eager", "loading")}> </figure> <div class="card-body absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-violet-500 text-center text-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 rounded-3xl"> <h2 class="card-title">${card.CardTitle}</h2> </div> </div>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/CardIndex.astro", void 0);

// Ejemplos de objetos de prueba
const cardData = [
    {
      CardTitle: "Originialidad",
      subCard: "Si hay algo que nos caracteriza es la originalidad y el empeño puesto en cada frase y producto fabricado, si buscas algo nuevo, es por aca.",
      imgCard: "latteperson1.png",
      alt: "personje latte con diferentes vestimentas y expresiones"
    },
    {
      CardTitle: "Simplicidad y excelencia",
      subCard: "Nuestros productos no solo son autenticos, también nos encargamos de ofrecerte un producto de calidad, el packaging, el diseño, y el mismo chocolate es una denotación de excelencia.",
      imgCard: "latteperson2.png",
      alt: "personje latte con diferentes vestimentas y expresiones"
    },
    {
      CardTitle: "Envíos rápidos y seguros",
      subCard: "Garantizamos envíos seguros con seguimiento para que tu pedido llegue sin inconvenientes",
      imgCard: "latteperson3.png",
      alt: "personje latte con diferentes vestimentas y expresiones"
    },
    {
      CardTitle: "Facilidad en metodo de pago",
      subCard: "Ofrecemos métodos de pago sencillos y rápidos para tu comodidad.",
      imgCard: "latteperson4.png",
      alt: "personje latte con diferentes vestimentas y expresiones"
    },
    {
      CardTitle: "Sos la prioridad",
      subCard: "En latte nuestros clientes son prioridad, escuchamos constantemente a cada comentario y aporte de nuestros usuarios.",
      imgCard: "latteperson1.png",
      alt: "personje latte con diferentes vestimentas y expresiones"
    }
  ];

const $$Astro$1 = createAstro();
const $$BeneficiosLatte = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BeneficiosLatte;
  const { title, subTitle, src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full flex flex-col"> <!-- Block to display the feature image --> <div class="relative overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full object-cover object-center", "draggable": "false", "format": "avif", "loading": "eager" })} </div> <div class="flex flex-col"> <div class="flex flex-col md:px-10 items-center gap-y-5 mb-10 text-center"> <h1 class="block text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight ">${title}</h1> <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">${subTitle}</p> </div> <div class="flex flex-col md:flex-row cursor-pointer p-10 md:px-24 md:py-4 w-5/6 md:w-full mx-auto md:mx-10 rounded-3xl"> ${cardData.map((card) => renderTemplate`${renderComponent($$result, "CardIndex", $$CardIndex, { "card": card })}`)} </div> </div> </section> `;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/BeneficiosLatte.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DRPoHq2O.avif","width":4067,"height":2576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/images/index/hero-image.avif";
							}
							
							return target[name];
						}
					});

const redes = new Proxy({"src":"/_astro/mockupredes.DReXkX0T.png","width":1152,"height":864,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/images/index/mockupredes.png";
							}
							
							return target[name];
						}
					});

const alfajorImage = new Proxy({"src":"/_astro/alfajorImage.ml38107F.png","width":4000,"height":2667,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/images/index/alfajorImage.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col"> <div class="flex flex-col md:px-10 items-center text-center mb-[60px]"> <h2 class="block text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight"> ${title} </h2> </div> <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-10"> <li> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div> <div class="timeline-start mb-10 md:text-end"> <time class="font-mono italic">1984</time> <div class="text-lg font-black">First Macintosh computer</div>
The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
              personal computer. It played a pivotal role in establishing desktop publishing as a general
              office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
              in a beige case with integrated carrying handle; it came with a keyboard and single-button
              mouse.
</div> <hr> </li> <li> <hr> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div> <div class="timeline-end mb-10"> <time class="font-mono italic">1998</time> <div class="text-lg font-black">iMac</div>
iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
              been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
              and has evolved through seven distinct forms
</div> <hr> </li> <li> <hr> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div> <div class="timeline-start mb-10 md:text-end"> <time class="font-mono italic">2001</time> <div class="text-lg font-black">iPod</div>
The iPod is a discontinued series of portable media players and multi-purpose mobile devices
              designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
              8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
              million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
              over 20 years, the iPod brand is the oldest to be discontinued by Apple
</div> <hr> </li> <li> <hr> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div> <div class="timeline-end mb-10"> <time class="font-mono italic">2007</time> <div class="text-lg font-black">iPhone</div>
iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
              operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
              January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
              of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
              accounts for 15.6% of global smartphone market share
</div> <hr> </li> <li> <hr> <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div> <div class="timeline-start mb-10 md:text-end"> <time class="font-mono italic">2015</time> <div class="text-lg font-black">Apple Watch</div>
The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
              tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
              iOS and other Apple products and services
</div> </li> </ul> <a class="btn btn-primary w-56 mx-auto" href="/nosotros">Sobre nosotros</a> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/TimeLine.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Inicio | Latte chocolate" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnounceBanner", $$AnnounceBanner, { "btnId": "dismiss-button", "btnTitle": "Explor\xE1 nuestros productos", "url": "/" })}  ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `El chocolate que <span
 class="text-violet-500">habla por vos</span>`, "subTitle": "Dise\xF1ados para expresar tus sentimientos de la mejor forma.", "primaryBtn": "Ver productos", "primaryBtnURL": "/productos", "src": heroImage, "alt": "Variedad de chocolates personalizados de Latte Chocolate" })} ${renderComponent($$result2, "Divider", $$Divider, {})} ${renderComponent($$result2, "MarcasSection", $$MarcasSection, { "title": "Confianza de comercios", "subTitle": "Un producto revelador que" })} ${renderComponent($$result2, "Divider", $$Divider, {})} ${renderComponent($$result2, "BeneficiosLatte", $$BeneficiosLatte, { "title": "\xBFPor qu\xE9 destacamos?", "subTitle": "En Latte, respondemos a una necesidad \xFAnica en el sector de los chocolates y dulces, creando momentos \xFAnicos.", "src": heroImage, "alt": "Imagen de mockup de cajas de chocolates latte" })} ${renderComponent($$result2, "Divider", $$Divider, {})} ${renderComponent($$result2, "CategoriasLatte", $$CategoriasLatte, { "title": "Nuestro segmento de categor\xEDas", "subtitle": "Si queres adquirir este tipo de segmentos enteros entra al protal comercio y crea o accede a tu cuenta.", "btnTitle": "Crear mi cuenta", "btnUrl": "/register", "img2": alfajorImage, "alt2": "imagen alfajor de la fortuna de latte chocolate" })} ${renderComponent($$result2, "Divider", $$Divider, {})} ${renderComponent($$result2, "StatsLatte", $$StatsLatte, { "title": "Las mejores devoluciones del publico", "subtitle": "Nuestro producto es muy bien recibido por cada uno de nuestra red de revendedores, es un producto que realmente conviene." })} ${renderComponent($$result2, "TimeLine", $$TimeLine, { "title": "Un poco sobre nosotros" })} ${renderComponent($$result2, "Divider", $$Divider, {})} ${renderComponent($$result2, "Redes", $$Redes, { "src": redes, "alt": "Imagen mockup sobre las redes sociales de latte chocolate" })} ` })}`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
