globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                      */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_BG5POMIu.mjs';
import { $ as $$Layout } from '../../../chunks/Col_B-e8fz3m.mjs';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_CuRSzaa0.mjs';
import { $ as $$BlogPosts } from '../../../chunks/BlogPosts_uuSwwypK.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_B6u0MbFN.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://foxi.netlify.app/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const SEO = {
    title: `Foxi | posts tagges as ` + tag,
    description: "Explore Foxi's latest news designed to enhance productivity, ensure top-notch security, and integrate seamlessly with your favorite tools. Join thousands of satisfied users and transform your workflow with Foxi today!"
  };
  const header = {
    title: `Foxi posts about <br><strong>` + tag + `</strong>`,
    text: `Stay informed, stay productive with all the latest fromFoxi.`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, { "data": posts })} ` })}`;
}, "/workspaces/codenetic/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "/workspaces/codenetic/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
