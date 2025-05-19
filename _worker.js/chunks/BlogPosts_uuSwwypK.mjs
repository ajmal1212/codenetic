globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, F as Fragment } from './astro/server_BG5POMIu.mjs';
import { a as $$Section, b as $$Row, c as $$Col } from './Col_B-e8fz3m.mjs';
import { $ as $$Image } from './_astro_assets_DQL_3Swb.mjs';
import { $ as $$Card } from './Card_BHXr35gX.mjs';
import { $ as $$CardBody } from './CardBody_BZuMINo8.mjs';
import { $ as $$Badge, g as getCollection } from './_astro_content_B6u0MbFN.mjs';
/* empty css                         */

const $$Astro$2 = createAstro("https://foxi.netlify.app/");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    title = "",
    subtitle,
    image,
    link,
    classes = "!shadow-none border border-neutral-100 dark:border-neutral-800",
    tags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "classes": classes, "data-astro-cid-ulirv4bf": true }, { "default": ($$result2) => renderTemplate`${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": title, "width": 600, "height": 400, "data-astro-cid-ulirv4bf": true })}`}${renderComponent($$result2, "CardBody", $$CardBody, { "data-astro-cid-ulirv4bf": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h3 class="post-title" data-astro-cid-ulirv4bf> <a${addAttribute(link, "href")} data-astro-cid-ulirv4bf>${title}</a> </h3> <h4 class="post-subtitle" data-astro-cid-ulirv4bf>${subtitle}</h4> ${renderSlot($$result3, $$slots["default"])} ` })} ${tags && renderTemplate`<div class="post-tags" data-astro-cid-ulirv4bf> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "name": tag, "link": `/blog/tags/` + tag, "classes": "capitalize", "data-astro-cid-ulirv4bf": true })}`)} </div>`}` })} `;
}, "/workspaces/codenetic/src/components/ui/cards/BlogCard.astro", void 0);

const $$Astro$1 = createAstro("https://foxi.netlify.app/");
const $$TagNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagNavigation;
  const posts = await getCollection("blog");
  const tags = [...new Set(posts.map((post) => post.data.tags).flat())];
  const currentPath = new URL(Astro2.request.url).pathname;
  const pathSegments = currentPath.split("/").filter((segment) => segment.length > 0);
  const currentTag = pathSegments[pathSegments.length - 1] || "";
  return renderTemplate`${maybeRenderHead()}<div class="tags" data-astro-cid-4odnjaj3> ${renderComponent($$result, "Badge", $$Badge, { "link": `/blog/`, "name": `All`, "type": `${currentTag === "blog" ? "primary" : "neutral"}`, "data-astro-cid-4odnjaj3": true })} ${tags.map((tag) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-4odnjaj3": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Badge", $$Badge, { "link": `/blog/tags/${tag}`, "name": tag, "type": `${currentTag === tag ? "primary" : "neutral"}`, "data-astro-cid-4odnjaj3": true })} ` })}`)} </div> `;
}, "/workspaces/codenetic/src/components/ui/blog/TagNavigation.astro", void 0);

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$BlogPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPosts;
  const { data: allPosts } = Astro2.props;
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TagNavigation", $$TagNavigation, {})} ` })} ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result3, "Col", $$Col, { "span": "4" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Post", $$BlogCard, { "link": `/blog/${post.id}`, "title": post.data.title, "subtitle": `By ${post.data.author} on ${new Date(post.data.pubDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, "image": post.data.image, "tags": post.data.tags }, { "default": ($$result5) => renderTemplate`${post.data.description}` })} ` })}`)}` })} ` })}`;
}, "/workspaces/codenetic/src/components/blocks/blog/BlogPosts.astro", void 0);

export { $$BlogPosts as $ };
