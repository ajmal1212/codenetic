globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate, e as renderSlot } from '../../chunks/astro/server_BG5POMIu.mjs';
import { e as $$Icon, a as $$Section, b as $$Row, c as $$Col, $ as $$Layout } from '../../chunks/Col_B-e8fz3m.mjs';
import { $ as $$Badge, r as renderEntry, g as getCollection } from '../../chunks/_astro_content_B6u0MbFN.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://foxi.netlify.app/");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const url = new URL(Astro2.request.url);
  const pathname = url.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = ["Home", ...segments];
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(["breadcrumbs", { [`${classes}`]: classes }], "class:list")} data-astro-cid-licbrrf5> <ol class="breadcrumbs__list" data-astro-cid-licbrrf5> ${breadcrumbs.map((segment, index) => renderTemplate`<li class="breadcrumbs__list-item" data-astro-cid-licbrrf5> <a${addAttribute(`/${segments.slice(0, index).join("/")}`, "href")} class="breadcrumbs__item-link" data-astro-cid-licbrrf5> ${index === 0 ? segment : segment.replace(/-/g, " ")} </a> ${index < breadcrumbs.length - 1 && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-left", "class": "breadcrumbs__item-icon", "data-astro-cid-licbrrf5": true })}`} </li>`)} </ol> </nav> `;
}, "/workspaces/codenetic/src/components/ui/Breadcrumbs.astro", void 0);

const $$Astro$2 = createAstro("https://foxi.netlify.app/");
const $$BlogPostHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPostHero;
  const { tags, title, author, publishDate } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "post-intro", "classes": "bg-neutral-50 dark:bg-neutral-900", "data-astro-cid-s5km4abd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-s5km4abd": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "data-astro-cid-s5km4abd": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<header class="post-header" data-astro-cid-s5km4abd> ${renderComponent($$result4, "Breadcrumbs", $$Breadcrumbs, { "classes": "mb-6", "data-astro-cid-s5km4abd": true })} <h1 class="post-header__title" data-astro-cid-s5km4abd> ${title} </h1> ${author ? renderTemplate`<p class="page-header__text" data-astro-cid-s5km4abd>
Written by, ${author} ${publishDate && "on " + publishDate} </p>` : publishDate && renderTemplate`<p class="page-header__text" data-astro-cid-s5km4abd>Published on, ${publishDate}</p>`} </header> ${tags && renderTemplate`<div class="post-header__tags" data-astro-cid-s5km4abd> ${tags.map((tag) => renderTemplate`${renderComponent($$result4, "Badge", $$Badge, { "name": tag, "link": `/blog/tags/` + tag, "classes": "capitalize", "data-astro-cid-s5km4abd": true })}`)} </div>`}` })} ` })} ` })} `;
}, "/workspaces/codenetic/src/components/blocks/blog/BlogPostHero.astro", void 0);

const $$Astro$1 = createAstro("https://foxi.netlify.app/");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  const SEO = {
    title: `${frontmatter.title} | Foxi`,
    description: `${frontmatter.description}`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description, "data-astro-cid-gjtny2mx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogPostHero", $$BlogPostHero, { "tags": frontmatter.tags, "title": frontmatter.title, "author": frontmatter.author, "publishDate": frontmatter.pubDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), "data-astro-cid-gjtny2mx": true })} ${maybeRenderHead()}<div class="post-body basic-text basic-text--lg" data-astro-cid-gjtny2mx> ${renderSlot($$result2, $$slots["default"])} </div> ` })} `;
}, "/workspaces/codenetic/src/layouts/PostLayout.astro", void 0);

const $$Astro = createAstro("https://foxi.netlify.app/");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { id: decodeURI(entry.id) },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Layout", $$PostLayout, { "frontmatter": entry.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/workspaces/codenetic/src/pages/blog/[...id].astro", void 0);

const $$file = "/workspaces/codenetic/src/pages/blog/[...id].astro";
const $$url = "/blog/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
