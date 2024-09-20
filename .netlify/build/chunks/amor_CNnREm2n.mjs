import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DxybiuS0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"wide":false,"title":"Latte Amor","description":"Categoría dedicada a productos especiales para expresar amor y afecto.","slug":"latte-amor","price":1200,"urlTB":"https://www.lattechocolate.com.ar/productos/pack-chocolates-tematica-amor/","image":"/imgCategories/estucheAmor.png"};
				const file = "C:/Users/PC/Desktop/LATTE-NETLIFY/astro-auth/src/content/categorias/amor.md";
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
