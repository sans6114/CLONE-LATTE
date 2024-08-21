import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_DuVAwPw9.mjs';
import 'kleur/colors';
import 'clsx';

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

const $$Astro = createAstro();
const $$PrimaryBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrimaryBtn;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "cursor-pointer group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-violet-500 hover:bg-violet-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  return renderTemplate`<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses}`, "class")}${addAttribute(url, "href")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="1em" viewBox="0 0 15 15"> <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path> </svg>`} </a>`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/ui/buttons/PrimaryBtn.astro", void 0);

export { $$PrimaryBtn as $, heroImage as h };
