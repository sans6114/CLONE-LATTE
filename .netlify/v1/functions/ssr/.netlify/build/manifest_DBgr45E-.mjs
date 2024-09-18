import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_DxybiuS0.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BEKeqhlY.js"}],"styles":[{"type":"external","src":"/_astro/index.i6cHTQt2.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CXyk7At0.js"}],"styles":[{"type":"inline","content":"html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:hidden}.lenis.lenis-scrolling iframe{pointer-events:none}\n"},{"type":"external","src":"/_astro/index.i6cHTQt2.css"},{"type":"external","src":"/_astro/index.BswZJUt7.css"},{"type":"inline","content":".swiper[data-astro-cid-qfh3srwg]{width:100%;height:auto}@media (max-width: 600px){.swiper[data-astro-cid-qfh3srwg]{width:350px}}\n.scrollbar-hide[data-astro-cid-ouamjn2i]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-ouamjn2i]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68uhR9zV.js"}],"styles":[{"type":"inline","content":"html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:hidden}.lenis.lenis-scrolling iframe{pointer-events:none}\n"},{"type":"external","src":"/_astro/index.i6cHTQt2.css"},{"type":"inline","content":".scrollbar-hide[data-astro-cid-ouamjn2i]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-ouamjn2i]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/productos","isIndex":true,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/index.astro","pathname":"/productos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.68uhR9zV.js"}],"styles":[{"type":"inline","content":"html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:hidden}.lenis.lenis-scrolling iframe{pointer-events:none}\n"},{"type":"external","src":"/_astro/index.i6cHTQt2.css"},{"type":"inline","content":".scrollbar-hide[data-astro-cid-ouamjn2i]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-ouamjn2i]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/protected","isIndex":false,"type":"page","pattern":"^\\/protected\\/?$","segments":[[{"content":"protected","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/protected.astro","pathname":"/protected","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BE9MdcUf.js"}],"styles":[{"type":"external","src":"/_astro/index.i6cHTQt2.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B9ssbGNl.js"}],"styles":[{"type":"external","src":"/_astro/index.i6cHTQt2.css"},{"type":"inline","content":"html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:hidden}.lenis.lenis-scrolling iframe{pointer-events:none}\n"},{"type":"external","src":"/_astro/index.BswZJUt7.css"},{"type":"inline","content":".scrollbar-hide[data-astro-cid-ouamjn2i]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-ouamjn2i]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/register.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/components/sections/index/CategoriasLatte.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/productos/[...slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/productos/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/pages/productos/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/productos/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/productos/index@_@astro":"pages/productos.astro.mjs","\u0000@astro-page:src/pages/productos/[...slug]@_@astro":"pages/productos/_---slug_.astro.mjs","\u0000@astro-page:src/pages/protected@_@astro":"pages/protected.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DBgr45E-.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/actions/index.ts":"chunks/index_UBgQZiBL.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/amistad.md?astroContentCollectionEntry=true":"chunks/amistad_C2uvLBx1.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/amor.md?astroContentCollectionEntry=true":"chunks/amor_BcsUxXod.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/cumpleaños.md?astroContentCollectionEntry=true":"chunks/cumpleaños_xd2UyGvU.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/dieteticas.md?astroContentCollectionEntry=true":"chunks/dieteticas__PNw_dU4.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/festividades.md?astroContentCollectionEntry=true":"chunks/festividades_BY97APLY.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/futbol.md?astroContentCollectionEntry=true":"chunks/futbol_UHZgaJct.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/música.md?astroContentCollectionEntry=true":"chunks/música_DgIbUi6s.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/vinotecas.md?astroContentCollectionEntry=true":"chunks/vinotecas_CJ59Qcm7.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/amistad.md?astroPropagatedAssets":"chunks/amistad_CVTqIPey.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/amor.md?astroPropagatedAssets":"chunks/amor_DWtUWhwl.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/cumpleaños.md?astroPropagatedAssets":"chunks/cumpleaños__7nm1Geb.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/dieteticas.md?astroPropagatedAssets":"chunks/dieteticas_CXhbLl5R.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/festividades.md?astroPropagatedAssets":"chunks/festividades_d_K7UUqu.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/futbol.md?astroPropagatedAssets":"chunks/futbol_Bf2f4PiJ.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/música.md?astroPropagatedAssets":"chunks/música_CaaO4b38.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/vinotecas.md?astroPropagatedAssets":"chunks/vinotecas_DmZw6KCk.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/amistad.md":"chunks/amistad_D0km5N3a.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/amor.md":"chunks/amor_llwsm7wJ.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/cumpleaños.md":"chunks/cumpleaños_l6QMTnmE.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/dieteticas.md":"chunks/dieteticas_DMp0c4Yv.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/festividades.md":"chunks/festividades_CNHCicnw.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/futbol.md":"chunks/futbol_D2kfH_P6.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/música.md":"chunks/música_D53LZAzT.mjs","C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/vinotecas.md":"chunks/vinotecas_BJInMAEV.mjs","/astro/hoisted.js?q=5":"_astro/hoisted.BE9MdcUf.js","/astro/hoisted.js?q=2":"_astro/hoisted.B9ssbGNl.js","/astro/hoisted.js?q=4":"_astro/hoisted.68uhR9zV.js","/astro/hoisted.js?q=3":"_astro/hoisted.CXyk7At0.js","/astro/hoisted.js?q=0":"_astro/hoisted.2ZPJi2e4.js","/astro/hoisted.js?q=1":"_astro/hoisted.BEKeqhlY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/mockupredes.DReXkX0T.png","/_astro/mockup2.QgbiE15L.png","/_astro/alfajorImage.ml38107F.png","/_astro/presentation1.7LPjjIO4.png","/_astro/atardecer.BUtcOLe_.jpg","/_astro/index.BswZJUt7.css","/_astro/index.i6cHTQt2.css","/favicon.svg","/fabrica/cacerola.jpg","/fabrica/calu-camioneta.jpg","/fabrica/fabrica-1.jpg","/fabrica/fabrica-2.jpg","/fabrica/fabrica-3.jpg","/fabrica/fabrica-4.jpg","/fabrica/fabrica-5.jpg","/fabrica/fabrica-6.jpg","/fabrica/fabrica-7.jpg","/fabrica/fabrica-8.jpg","/index/alfajorImage.png","/index/hero-image.avif","/index/latteperson1.png","/index/latteperson2.png","/index/latteperson3.png","/index/latteperson4.png","/index/mockupredes.png","/_astro/hoisted.2ZPJi2e4.js","/_astro/hoisted.68uhR9zV.js","/_astro/hoisted.B9ssbGNl.js","/_astro/hoisted.BE9MdcUf.js","/_astro/hoisted.BEKeqhlY.js","/_astro/hoisted.CXyk7At0.js","/_astro/sweetalert2.all.Co9sPQeP.js","/_astro/_astro_actions.CR7AzrjM.js","/imgCategories/alfajorImage.png","/imgCategories/estucheAmistad.png","/imgCategories/estucheAmor.png","/imgCategories/estucheCumpleaños.png","/imgCategories/estucheDieteticas.png","/imgCategories/estucheFutbol.png","/imgCategories/estucheMama.png","/imgCategories/estucheMusica.png","/imgCategories/estucheVinoteca.png","/imgCategories/mockup.png"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
