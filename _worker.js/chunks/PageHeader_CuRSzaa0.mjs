globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BG5POMIu.mjs';
import { a as $$Section, b as $$Row, c as $$Col } from './Col_B-e8fz3m.mjs';
/* empty css                         */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { id = "intro", title, text, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": `bg-neutral-50 dark:bg-neutral-900 ${classes}`, "data-astro-cid-bl63ps4a": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-bl63ps4a": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "data-astro-cid-bl63ps4a": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<header class="page-header" data-astro-cid-bl63ps4a> <h1 class="page-header__title" data-astro-cid-bl63ps4a>${unescapeHTML(title)}</h1> <p class="page-header__text" data-astro-cid-bl63ps4a>${unescapeHTML(text)}</p> </header> ` })} ` })} ` })} `;
}, "/workspaces/codenetic/src/components/blocks/hero/PageHeader.astro", void 0);

export { $$PageHeader as $ };
