import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, d as renderComponent, f as renderSlot, b as createAstro } from './astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BqaCaw9f.mjs';

const atardecer = new Proxy({"src":"/_astro/atardecer.BUtcOLe_.jpg","width":3024,"height":4032,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/images/auth/atardecer.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const alt = "Imagen de atardecer";
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <!-- component --> <div class="bg-gray-100 flex justify-center items-center h-screen"> <!-- Left: Image --> <div class="w-1/2 h-screen hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "class": "object-cover w-full h-full", "src": atardecer, "alt": alt })} </div> <!-- Right: Login Form --> <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2"> ${renderSlot($$result, $$slots["default"])} </div> </div> </body></html>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/layouts/AuthLayout.astro", void 0);

export { $$AuthLayout as $ };
