import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CardSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardSmall;
  const { categoria } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- A clickable card that leads to the details of the product-->${maybeRenderHead()}<a${addAttribute("/productos/" + categoria.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:h-80"> <!-- The product's main image --> <img${addAttribute(imageClass, "class")}${addAttribute(categoria.data.image, "src")}${addAttribute(`imagen de ${categoria.data.title}`, "alt")}> <!-- An overlay gradient that sits on top of the product image--> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- The product's subtitle and the anchor SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${categoria.data.title} </span> </a>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/utils/CardSmall.astro", void 0);

const $$Astro = createAstro();
const $$CardWide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardWide;
  const { categoria } = Astro2.props;
  categoria.data;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- The anchor tag is the main container for the product card. When clicked, this leads to the details of the product. -->${maybeRenderHead()}<a${addAttribute("/productos/" + categoria.data.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:col-span-2 md:h-80"> <!-- The product's main image --> <img${addAttribute(imageClass, "class")}${addAttribute(categoria.data.image, "src")}${addAttribute(`imagen de ${categoria.data.title}`, "alt")}> <!-- This container includes a gradient overlay over the product's image --> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- This container includes product's subtitle and an SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${categoria.data.title}</span> </a>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/utils/CardWide.astro", void 0);

const mockupDos = new Proxy({"src":"/_astro/mockup2.QgbiE15L.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/images/index/mockup2.png";
							}
							
							return target[name];
						}
					});

export { $$CardSmall as $, $$CardWide as a, mockupDos as m };
