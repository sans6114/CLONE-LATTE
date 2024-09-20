import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"wide":false,"title":"Latte Surtido","description":"Detalles y regalos perfectos para poder tener en tu comercio, esta caja incluye 10 cajas de chocolates en variantes surtidas.","slug":"latte-surtido","price":1400,"urlTB":"https://www.lattechocolate.com.ar/productos/pack-10-chocolates-tematica-surtida/","image":"/imgCategories/estucheMusica.png"};
				const file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/música.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
