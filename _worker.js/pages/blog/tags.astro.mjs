globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { a as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BG5POMIu.mjs';
import { $ as $$Layout } from '../../chunks/Col_B-e8fz3m.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_CuRSzaa0.mjs';
import { $ as $$BlogPosts } from '../../chunks/BlogPosts_uuSwwypK.mjs';
import { g as getCollection } from '../../chunks/_astro_content_B6u0MbFN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": "Tags" })} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, { "data": allPosts })} ` })}`;
}, "/workspaces/codenetic/src/pages/blog/tags/index.astro", void 0);

const $$file = "/workspaces/codenetic/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
