/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_DuVAwPw9.mjs';
import 'kleur/colors';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_wugjsLxw.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$FormLogin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormLogin;
  const { title, textButton, textButtonSecond, isRegister = false } = Astro2.props;
  const email = Astro2.cookies.get("email")?.value ?? "";
  const remember = !!email;
  console.log(remember);
  return renderTemplate`${maybeRenderHead()}<section class="bg-base-100 bg-opacity-20 shadow-2xl p-5 rounded-3xl h-[500px] flex flex-col justify-around border border-black"> <h1 class="font-bold text-center text-3xl text-black"> ${title} </h1> <form class="flex flex-col gap-4" action=""> ${isRegister ? renderTemplate`<label class="input input-bordered flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path> </svg> <input type="text" class="grow" placeholder="Nombre" name="name"> </label>` : null} <label class="input input-bordered flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path> </svg> <input type="text" class="grow" placeholder="Email" name="email"${addAttribute(email, "value")}> </label> <label class="input input-bordered flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd"></path> </svg> <input type="password" placeholder="Contraseña" class="grow" name="password"> </label> <!-- Remember Me Checkbox --> <div class="flex items-center"> <input type="checkbox"${addAttribute(remember, "checked")} id="remember_me" name="remember_me" class="text-blue-500"> <label for="remember" class="text-gray-600 ml-2 font-ex">Recuerdame</label> </div> <div class="flex flex-col gap-2 w-3/4 md:w-full mx-auto text-center"> <button type="submit" id="btn-sumbit" class="btn btn-primary w-full disabled:bg-gray-300 ">${textButton} </button> <button type="button" id="btn-google" class="btn btn-outline btn-primary disabled:text-black disabled:border-none disabled:blur-sm"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"></path></svg> ${textButtonSecond} </button> ${isRegister ? renderTemplate`<a href="/login" class="link link-secondary">
¿Tenes cuenta? Ingresa aqui
</a>` : renderTemplate`<a href="/register" class="link link-secondary">
¿No tenés cuenta? registrate aqui
</a>`} </div> </form> </section> `;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/auth/FormLogin.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormLogin", $$FormLogin, { "title": "Login", "textButton": "Ingresar", "textButtonSecond": "Ingresar con google" })} ` })}`;
}, "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/login.astro", void 0);

const $$file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
