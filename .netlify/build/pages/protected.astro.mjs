/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import { f as firebase } from '../chunks/config_COeD87Ye.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_fRUNfPoz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Protected = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Protected;
  const userValue = firebase.auth.currentUser;
  await userValue?.reload();
  const { user } = Astro2.locals;
  if (!user) {
    return;
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Protected" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl text-center my-4 font-extrabold">Hola protected</h1> <div class="card card-side bg-base-100 shadow-xl"> <figure> ${user.avatar ? renderTemplate`<img${addAttribute(user.avatar, "src")}${addAttribute(`avatar de ${user.name}`, "alt")}>` : renderTemplate`<img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie">`} </figure> <div class="card-body"> <h2 class="text-2xl font-bold">${user.name}</h2> <h2 class="card-title">${user.email}</h2> <p> ${user.emailVerified ? "Email verified" : "Email no verified"} </p> <div class="card-actions justify-end"> <button class="btn btn-primary">Watch</button> </div> </div> </div> ` })} <!-- {displayName!.substring(0, 2)} -->`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/protected.astro", void 0);

const $$file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/protected.astro";
const $$url = "/protected";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Protected,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
