import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"wide":true,"title":"Latte Dietética","description":"Productos especialmente diseñados para aquellos que buscan opciones saludables y dietéticas.","slug":"latte-dietetica","price":1500,"urlTB":"https://tubodegaonline.com/latte-dietetica","image":"/imgCategories/estucheDieteticas.png"};
				const file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/dieteticas.md";
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
