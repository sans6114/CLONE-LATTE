/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DuVAwPw9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
/* empty css                                    */
import { $ as $$MainLayout } from '../chunks/MainLayout_DNUuaHua.mjs';
import { $ as $$Divider } from '../chunks/Divider_BoVquTCI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Swiper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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

const $$Astro$3 = createAstro();
const $$HeroNosotros = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroNosotros;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div class="max-w-screen-md"> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="text-balance text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl lg:leading-tight text-start"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-4 text-pretty text-lg leading-relaxed lg:w-4/5"> ${subTitle} </p>`} <!-- Review Section: This section presents avatars, review ratings and the number of reviews --> </div> <!-- Hero slider Image Section --> <div class="flex w-full mask mask-heart border-2 md:w-3/4 md:mx-auto h-full"> ${renderComponent($$result, "Swiper", $$Swiper, { "images": images.map((img) => img) })} </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/nosotros/HeroNosotros.astro", void 0);

const $$Astro$2 = createAstro();
const $$RightSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    img,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row md:justify-center w-full mb-[80px]"> <div class="px-4 flex-grow self-center"> <h2 class="text-start mb-4 text-balance text-4xl font-extrabold tracking-tight">${title}</h2> <p class="mt-4 text-pretty text-lg leading-relaxed lg:w-4/5">${subTitle}</p> </div> <div class="mask mask-squircle mt-5 md:w-2/4"> <img${addAttribute(img, "src")}${addAttribute(alt, "alt")}> </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/nosotros/RightSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$LeftSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const {
    title,
    subTitle,
    img,
    alt
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row md:justify-center w-full mb-[80px]"> <div class="mask mask-squircle order-2 sm:order-1 mt-5 md:w-2/4"> <img${addAttribute(img, "src")}${addAttribute(alt, "alt")}> </div> <div class="order-1 sm:order-2 px-4 flex-grow self-center"> <h2 class="text-start mb-4 text-balance text-4xl font-extrabold tracking-tight">${title}</h2> <p class="mt-4 text-pretty text-lg leading-relaxed lg:w-4/5">${subTitle}</p> </div> </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/nosotros/LeftSection.astro", void 0);

const $$Astro = createAstro();
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const { user } = Astro2.locals;
  const btnTitle = user ? "Ingresa nuevamente a tu cuenta" : "Contact\xE1 para distribuir";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg class="w-[90px] md:w-[200px]" version="1.1" viewBox="0 0 1251 1250" xmlns="http://www.w3.org/2000/svg"> <path transform="translate(716,368)" d="m0 0h25l17 3 16 5 16 7 14 9 10 8 12 11 12 13 11 15 11 18 10 21 9 27 6 29 2 13 1 14v44l11-10 9-7 3-5v-11l-6-20v-8l4-3h8l4 5 4 13 3-4 3-7 4-3h6l5 5v7l-2 6 6-2 5-2 6 1 4 4v7l-6 5-25 13-11 8-6 5-7 8-12 10-12 8h-2l-1 8-7 36-8 31-12 36-8 20-10 21-14 24-22 33-10 14-11 13-8 10-11 12-7 8-15 15-2 4 7 10 5 12 1 5v15l-1 9 12 2 3 4v8l-3 3-3 1h-14l-12-1-4-5-1-3v-7l3-12v-13l-6-12-2-2-11 10-16 11-16 9-12 5-5 1h-16l-25-5-26-8-17-6-3 12-6 10-8 8-5 2-10 2h-17l-3 9-3 2h-6l-5-5-1-7 3-12 5-6h9l4 1h12l6-3 5-6 3-8v-10l-33-16-23-13-24-15-20-14-17-13-16-13-14-12-13-12-21-21-7-8-11-13-14-19-12-18-14-24-11-22-11-28-7-23-5-24-2-18v-36l3-23 5-19 8-19 8-15 10-14 12-14 11-10 16-11 16-8 15-6 20-5 21-3h24l25 4 22 6 20 8 16 8 20 12 13 10 11 8 3-1 12-23 10-15 10-13 12-14 9-9 14-11 14-9 14-7 21-7z" fill="#E40E7E"></path> <path transform="translate(393,461)" d="m0 0h19l5 4 1 2v9l-3 4-3 1-15 1-15 4-12 6-10 8-9 8-9 12-7 14-4 14-1 6v46l-5 4h-7l-6-4-3-12v-32l3-18 5-15 8-15 8-11 7-8 11-9 13-9 13-6z" fill="#FEFEFE"></path> <path transform="translate(391,685)" d="m0 0h7l5 6 9 28 4 3 20 6 12 2 30 1 4 3v9l-3 3-3 1h-33l-17-4-9-3-5-1h-23l-16 2h-7l-5-5v-6l5-5 13-2 1-1-14-11-2-3v-7l4-4h8l14 11-3-11v-8z" fill="#512912"></path> <path transform="translate(692,667)" d="m0 0h13l9 4 7 6 4 8 1 9-2 9v5l5 7 2 6v12l-5 10-8 7-8 3h-14l-8-4-3-6 2-7 5-3h15l3-2 1-6-4-4-12-3-3-3-1-7 3-5 10-5 1-2v-6l-3-3-6-1-8 7-4 2-7-1-4-4-1-6 4-7 5-5 7-4z" fill="#512912"></path> <path transform="translate(909,541)" d="m0 0h8l4 5 4 13 3-4 3-7 4-3h6l5 5v7l-2 6 6-2 5-2 6 1 4 4v7l-6 5-25 13-11 8-6 5-7 8-12 10-12 8h-2l1-15 3-8 11-10 9-7 3-5v-11l-6-20v-8z" fill="#522B14"></path> <path transform="translate(612,616)" d="m0 0h9l10 3 11 7 8 9 6 12 2 6v12l-4 4h-7l-4-4-7-16-7-7-6-3-8-1-10 4-6 7-3 9v17l-2 7-3 2h-8l-4-5-2-9v-13l4-16 7-12 8-7 8-4z" fill="#512912"></path> <path transform="translate(742,584)" d="m0 0h9l10 3 9 6 8 8 8 16 2 8-1 9-3 3-6 1-5-3-6-16-5-7-6-4-10-2-9 3-6 7-4 11v18l-3 5-3 2-6-1-4-5-2-12v-9l3-14 6-12 6-7 10-6z" fill="#512912"></path> <path transform="translate(559,904)" d="m0 0h7l5 4 4 9 2 12 2 16-4 13-6 9-7 7-5 2-10 2h-17l-3 9-3 2h-6l-5-5-1-7 3-12 5-6h9l4 1h12l6-3 5-6 3-8v-19l-4-9v-7z" fill="#522A13"></path> <path transform="translate(580,698)" d="m0 0h8l9 2 8 5 5 10v8l-3 10-5 6-8 4h-11l-8-3-7-7-4-9-1-11 3-7 5-5z" fill="#DADBDA"></path> <path transform="translate(794,646)" d="m0 0h12l10 3 6 4 4 4 1 3v14l-3 8-5 5-5 3-11 1-8-2-8-6-6-12v-12l5-8 5-4z" fill="#DADBDA"></path> <path transform="translate(736,912)" d="m0 0 5 5 6 10 4 13v15l-1 9 12 2 3 4v8l-3 3-3 1h-14l-12-1-4-5-1-3v-7l3-12v-13l-6-12-1-1v-5z" fill="#532C16"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg class="w-[80px] md:w-[200px]" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 1250 1251"> <path transform="translate(746,93)" d="m0 0h28l16 4 12 5 11 7 11 9 8 9 12 22 7 19 5 22 7 50 13 85 13 92 13 98 31 248 13 89 7 59 2 13v16l-3 15-6 15-8 12-11 12-12 9 4 3 15 8 13 10 15 15 3 4 6-8 5-2 6 1 5 5 1 6-5 10-8 10-7 5-6 1-6-3-10-15-10-11-15-11-16-8-15-5-10-2h-14l-292 40-36 6-26 2h-11l-8 2h-14l-16-4-8-4-14-11-18-18-9-13-6-12-4-13-44-325-5-39-9-1-25-7-26-10-24-12-19-12-13-10-13-11-18-18-5-7-10 3-15 4-9 1h-9l-5-3-3-4v-7l5-6 4-1 13-1 2-1-13-10-4-4-1-8 4-6 7-2 7 3 8 7 6 4-4-6-8-10-1-7 3-5 5-3 7 1 6 5 11 14v2h2l4-18 6-5h7l6 5 1 7-3 14-8 16-5 6 2 4 11 12 11 11 14 11 16 11 16 9 16 8 23 9 24 7-21-154-32-236v-8l4-15 5-12 8-12 10-10 11-6 13-4 120-17z" fill="#C28146"></path> <path transform="translate(746,93)" d="m0 0h28l16 4 12 5 11 7 11 9 8 9 12 22 2 5-1 3-14-14-7-8-10-7-12-5-10-2h-13l-376 49-17 4-16 6-10 6-10 9-7 9-5 12-3 14v18l14 106 41 313 42 321 5 17 8 16 10 15 9 11 10 6 19 7 7 3-2 2-5 1h-14l-16-4-8-4-14-11-18-18-9-13-6-12-4-13-44-325-5-39-9-1-25-7-26-10-24-12-19-12-13-10-13-11-18-18-5-7-10 3-15 4-9 1h-9l-5-3-3-4v-7l5-6 4-1 13-1 2-1-13-10-4-4-1-8 4-6 7-2 7 3 8 7 6 4-4-6-8-10-1-7 3-5 5-3 7 1 6 5 11 14v2h2l4-18 6-5h7l6 5 1 7-3 14-8 16-5 6 2 4 11 12 11 11 14 11 16 11 16 9 16 8 23 9 24 7-21-154-32-236v-8l4-15 5-12 8-12 10-10 11-6 13-4 120-17z" fill="#8E511C"></path> <path transform="translate(705,871)" d="m0 0h25l12 5 9 7 6 8 2 6 7 45 4 31-1 10-6 12-8 9-10 5-21 5-34 3-14-2-14-5-10-7-6-7-3-8-7-41-3-22v-17l3-10 6-9 10-7 15-6 22-3z" fill="#A35D34"></path> <path transform="translate(867,847)" d="m0 0h22l12 5 9 7 6 8 3 10 7 46 3 23v11l-5 12-7 9-9 6-17 5-13 2-25 2-15-1-15-5-10-6-8-9-3-9-8-49-2-20 1-13 4-10 7-8 8-5 16-6 31-4z" fill="#A45E35"></path> <path transform="translate(515,722)" d="m0 0h29l14 7 7 6 6 10 7 43 4 29v16l-7 14-6 7-12 6-16 4-28 3h-18l-15-4-10-5-10-9-4-9-5-27-5-34v-22l4-11 7-8 10-6 12-5 21-3z" fill="#A35D34"></path> <path transform="translate(432,251)" d="m0 0h25l12 5 10 9 5 7 3 13 7 46 2 15v16l-4 9-6 9-7 6-10 4-18 4-34 3-15-2-13-5-9-6-5-5-3-4-4-16-7-44-1-8v-21l4-11 7-8 10-6 14-5 14-2z" fill="#A35D34"></path> <path transform="translate(804,499)" d="m0 0h25l12 5 10 8 6 10 6 34 5 37 1 11-2 9-5 10-8 9-10 5-21 5-34 3-14-2-14-5-9-6-7-8-3-7-6-35-4-28v-19l4-11 6-8 11-7 13-5 12-2z" fill="#A35D34"></path> <path transform="translate(644,530)" d="m0 0h25l12 5 9 7 7 10 3 16 6 39 3 24v7l-4 11-6 9-8 7-10 4-18 4-34 3-14-2-16-6-9-7-6-8-3-11-7-44-2-16v-14l2-9 5-8 9-8 10-5 14-4z" fill="#A35D34"></path> <path transform="translate(550,894)" d="m0 0h26l10 4 9 7 6 7 3 6 7 44 4 30v12l-5 12-7 9-10 6-18 5-15 2-14 1h-19l-12-3-14-7-7-6-5-10-5-27-5-33v-26l4-9 7-8 10-6 13-5 21-3z" fill="#A35D34"></path> <path transform="translate(492,553)" d="m0 0h19l11 4 8 6 7 7 4 9 7 45 4 31-1 10-7 14-5 6-14 7-17 4-32 3-14-1-11-3-14-7-8-8-4-10-7-41-3-23v-15l3-11 4-6 9-8 11-5 9-3 23-3z" fill="#A45E35"></path> <path transform="translate(832,675)" d="m0 0h28l12 5 10 9 5 8 2 8 7 45 3 23v12l-8 16-7 7-8 4-14 4-21 3-11 1h-18l-13-3-14-7-6-5-5-8-4-18-7-45-1-16 2-13 4-8 8-8 14-7 16-4z" fill="#A45E35"></path> <path transform="translate(695,698)" d="m0 0 10 3 9 5 7 6 5 8 4 20 7 47 1 9v13l-4 10-7 9-7 6-15 5-15 3-22 2h-16l-16-4-10-5-10-9-4-8-8-47-2-14v-24l3-9 9-10 10-6 15-5 31-4z" fill="#A45E35"></path> <path transform="translate(749,196)" d="m0 0h26l12 5 9 7 6 8 2 6 7 45 4 31-1 10-6 12-8 9-10 5-21 5h-10l-9-8-15-8-15-4h-19l-10 1-3-7-7-41-3-22v-17l3-10 6-9 10-7 15-6 22-3z" fill="#A45E35"></path> <path transform="translate(610,221)" d="m0 0 12 4 10 7 7 8 3 8 7 45 4 32-2 11-5 10-7 8-12 6-7 2h-8l-8-8-14-8-11-4-5-1h-23l-12 3-7 3h-3l-4-13-7-43-2-15v-18l3-10 6-8 8-6 16-7 10-2 26-3z" fill="#A45E35"></path> <path transform="translate(701,318)" d="m0 0h19l15 4 15 8 12 11 7 10 5 11 3 11 1 7v10l-3 16-8 16-6 8-9 9-11 7-14 5-11 2h-12l-14-3-12-5-11-7-9-9-9-14-5-14-1-5v-22l4-14 7-13 10-12 11-8 13-6z" fill="#FCFCFB"></path> <path transform="translate(551,340)" d="m0 0h23l14 4 13 7 10 9 8 9 7 14 3 11 1 6v14l-3 14-8 16-7 9-7 7-11 7-12 5-9 2h-22l-14-4-13-7-10-9-8-9-8-16-3-12v-20l4-15 8-15 10-11 13-9 12-5z" fill="#FCFCFB"></path> <path transform="translate(1079,381)" d="m0 0 9 1 4 5v8l-10 15v2l16-15h9l5 5 1 7-3 5-12 12h-2v2h19l6 5 1 7-3 5-4 3-14 1-16-2-13-3-10 14-9 11-12 13-16 16-11 9-13 10-18 12-18 10-21 10-14 5-7-1-5-5v-9l6-5 26-11 20-11 18-12 13-10 14-12 18-18 9-11 10-13 2-5-10-12-7-15-2-7v-7l3-5 3-2h8l5 4 5 15 2 2 10-16z" fill="#1F1F1C"></path> <path transform="translate(221,476)" d="m0 0h7l6 5 1 7-3 14-8 16-5 6 2 4 11 12 11 11 14 11 16 11 16 9 16 8 23 9 24 7 2 7 1 14-9-1-25-7-26-10-24-12-19-12-13-10-13-11-18-18-5-7-10 3-15 4-9 1h-9l-5-3-3-4v-7l5-6 4-1 13-1 2-1-13-10-4-4-1-8 4-6 7-2 7 3 8 7 6 4-4-6-8-10-1-7 3-5 5-3 7 1 6 5 11 14v2h2l4-18z" fill="#201F1C"></path> <path transform="translate(687,346)" d="m0 0h19l12 5 9 7 7 10 4 11v16l-4 12-7 9-8 7-12 5-5 1h-11l-11-3-10-6-7-7-7-14-1-4v-15l3-10 7-11 7-6 12-6z" fill="#010000"></path> <path transform="translate(548,377)" d="m0 0h18l11 4 10 7 6 8 4 8 2 8v13l-3 10-6 10-10 9-12 5-5 1h-12l-10-3-10-6-8-8-6-12-1-4v-17l4-11 6-9 8-7 11-5z" fill="#010000"></path> <path transform="translate(870,994)" d="m0 0 13 1 17 4 17 6 17 9 13 10 15 15 3 4 6-8 5-2 6 1 5 5 1 6-5 10-8 10-7 5-6 1-6-3-10-15-10-11-15-11-16-8-15-5-21-4-5-3-2-4v-6l5-6z" fill="#1F1F1C"></path> <path transform="translate(632,1049)" d="m0 0h6l6 4 1 2v9l-2 14v13l3 19 5 16 7 16 7 11 1 5-3 7-8 5-16 4h-8l-6-5-1-2v-6l4-6 7-2h5l-9-19-6-19-3-17v-26l3-16 3-5z" fill="#201F1C"></path> <path transform="translate(499,489)" d="m0 0h12l11 3 9 6 3 6v7l-4 6-5 4-11 4h-18l-11-4-7-6-2-4v-8l5-7 9-5z" fill="#F8C1B6"></path> <path transform="translate(783,439)" d="m0 0h14l10 3 8 5 4 6v7l-4 6-7 5-10 3h-16l-12-4-8-7-1-3v-7l4-6 5-4z" fill="#F8C1B6"></path> <path transform="translate(662,479)" d="m0 0h6l4 3 1 10-3 10-4 6-9 8-11 4h-11l-11-4-9-7-6-10-1-3v-9l3-3 7-1 4 4 4 9 4 5 9 3 9-2 5-4 4-10 3-7z" fill="#010101"></path> <path transform="translate(570,894)" d="m0 0 9 1 10 5 10 9 5 9 7 44 4 30v12l-5 12-7 9-10 6-18 5-6 1h-14l4-2 21-5 9-4 8-7 5-8 2-6 1-7v-9l-7-49-5-22-5-12-5-5-10-5z" fill="#8F511D"></path> <path transform="translate(508,554)" d="m0 0 9 1 10 5 10 10 4 9 7 45 4 31-1 10-7 14-5 6-14 7-17 4-8 1h-11l4-2 25-6 10-5 7-7 5-10 1-4v-20l-7-47-5-21-6-12-5-4-10-4z" fill="#8F511D"></path> <path transform="translate(886,848)" d="m0 0 9 1 12 7 8 9 3 7 6 37 5 37v11l-5 12-7 9-9 6-17 5-13 2h-12l4-2 26-6 11-6 6-7 5-11 1-16-7-49-5-23-4-10-6-7-8-4z" fill="#8F511D"></path> <path transform="translate(725,871)" d="m0 0 8 1 12 6 7 6 5 7 2 6 7 45 4 31-1 10-6 12-8 9-10 5-21 5h-14l4-2 21-5 12-6 7-8 4-9 1-4v-19l-7-47-5-21-6-12-6-5-10-4z" fill="#8F511D"></path> <path transform="translate(537,722)" d="m0 0h7l14 7 7 6 6 10 7 43 4 29v16l-7 14-6 7-12 6-16 4-6 1h-14l4-2 22-5 9-4 7-5 6-10 2-5 1-6v-14l-7-48-5-21-4-10-6-7-9-4z" fill="#8F511D"></path> <path transform="translate(664,530)" d="m0 0 8 1 12 6 8 7 5 8 3 16 6 39 3 24v7l-4 11-6 9-8 7-10 4-18 4h-14l4-2 21-5 9-4 8-7 6-11 1-4v-21l-7-47-4-18-5-11-6-7-12-5z" fill="#8F511D"></path> <path transform="translate(770,196)" d="m0 0 8 1 12 6 8 7 5 9 4 21 7 49 1 14-3 10-7 11-8 7-10 4-18 4h-10v-2l21-5 12-6 7-8 4-9 1-4v-19l-7-47-5-21-6-12-6-5-10-4z" fill="#8F511D"></path> <path transform="translate(854,675)" d="m0 0 9 1 12 6 9 9 4 8 7 44 4 30v12l-8 16-7 7-8 4-14 4-11 2h-13l4-2 22-5 12-6 8-9 4-10 1-15-7-50-5-22-4-10-5-7-8-4-6-2z" fill="#8F511D"></path> <path transform="translate(695,698)" d="m0 0 10 3 9 5 7 6 5 8 4 20 7 47 1 9v13l-4 10-7 9-7 6-15 5-15 3h-13l4-2 25-6 9-5 8-9 4-10 1-6v-11l-7-49-5-22-4-10-6-7-12-5z" fill="#8F511D"></path> <path transform="translate(824,499)" d="m0 0 8 1 12 6 7 6 6 10 6 34 5 37 1 11-2 9-5 10-8 9-10 5-21 5h-14l4-2 21-5 12-6 7-8 4-9 1-5v-17l-7-48-5-21-6-12-8-6-8-3z" fill="#8F511D"></path> <path transform="translate(453,251)" d="m0 0 7 1 12 6 9 9 4 8 6 35 5 36v16l-4 9-6 9-7 6-10 4-18 4h-14l4-2 21-5 12-6 7-8 4-10 1-5v-15l-7-48-5-21-4-9-5-7-12-6z" fill="#8F511D"></path> <path transform="translate(610,221)" d="m0 0 12 4 10 7 7 8 3 8 7 45 4 32-2 11-5 10-7 8-12 6-7 2h-8v-2l15-6 7-6 5-8 3-10v-18l-7-47-5-21-4-9-7-8-11-4z" fill="#8F511D"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight  md:text-5xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg"> ${subTitle} </p>`} </div> <!-- Github Button --> ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> <a class="btn btn-primary"${addAttribute(url, "href")}>${btnTitle}</a> </div>`} </section>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/banner/HeroSectionAlt.astro", void 0);

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
