import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Bggfa8vQ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/login.astro.mjs');
const _page3 = () => import('./pages/nosotros.astro.mjs');
const _page4 = () => import('./pages/productos.astro.mjs');
const _page5 = () => import('./pages/productos/_---slug_.astro.mjs');
const _page6 = () => import('./pages/protected.astro.mjs');
const _page7 = () => import('./pages/register.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/login.astro", _page2],
    ["src/pages/nosotros.astro", _page3],
    ["src/pages/productos/index.astro", _page4],
    ["src/pages/productos/[...slug].astro", _page5],
    ["src/pages/protected.astro", _page6],
    ["src/pages/register.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "84da49e2-280d-46de-bae5-a5b98c69aa93"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
