import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"wide":false,"title":"Latte Cumpleaños","description":"Detalles y regalos perfectos para celebrar cumpleaños de manera especial.","slug":"latte-cumpleanos","price":1400,"urlTB":"https://www.lattechocolate.com.ar/productos/pack-chocolates-cumpleanos/","image":"/imgCategories/estucheCumpleaños.png"};
				const file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/cumpleaños.md";
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
