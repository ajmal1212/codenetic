globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from './astro/server_BG5POMIu.mjs';
import { e as $$Icon, a as $$Section, b as $$Row, c as $$Col } from './Col_B-e8fz3m.mjs';
import { $ as $$Rating } from './Rating_v0rRGkAs.mjs';
/* empty css                         */

const $$Astro$2 = createAstro("https://foxi.netlify.app/");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { size = "base", link = "#", radius, image, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(["avatar", { [`avatar--${size}`]: size }, , { [`${classes}`]: classes }], "class:list")} data-astro-cid-iusywdof> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")}${addAttribute(image.alt, "title")}${addAttribute(radius, "class")} data-astro-cid-iusywdof> </a> `;
}, "/workspaces/codenetic/src/components/ui/Avatar.astro", void 0);

const $$Astro$1 = createAstro("https://foxi.netlify.app/");
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const {
    blockquote,
    figcaption,
    cite,
    avatar,
    size = "base",
    mobileSize = size,
    rating,
    align = "left",
    link,
    classes,
    quoteSize = 64
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "testimonial",
    { [`testimonial--${align}`]: align },
    { [`text-${mobileSize}`]: mobileSize },
    { [`lg:text-${size}`]: size },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-koa6grap> <div class="testimonial__container" data-astro-cid-koa6grap> <figure class="testimonial__figure" data-astro-cid-koa6grap> <blockquote class="testimonial__blockquote" data-astro-cid-koa6grap> <p data-astro-cid-koa6grap> ${blockquote} </p> </blockquote> <figcaption class="testimonial__figcaption" data-astro-cid-koa6grap> ${rating && renderTemplate`${renderComponent($$result, "Rating", $$Rating, { "rating": rating, "data-astro-cid-koa6grap": true })}`} <div class="testimonial__figcaption-container" data-astro-cid-koa6grap> ${avatar && renderTemplate`${renderComponent($$result, "Avatar", $$Avatar, { "size": "lg", "image": avatar, "radius": "rounded-full", "classes": "cursor-default max-w-full shrink-0", "data-astro-cid-koa6grap": true })}`} <div class="testimonial__figcaption-cite-container" data-astro-cid-koa6grap> <span class="testimonial__figcaption--credit" data-astro-cid-koa6grap>${figcaption}</span> ${cite && renderTemplate`<cite class="testimonial__figcaption--cite" data-astro-cid-koa6grap> ${link ? renderTemplate`<a${addAttribute(link, "href")} data-astro-cid-koa6grap>${cite}</a>` : renderTemplate`<span data-astro-cid-koa6grap>${cite}</span>`} </cite>`} </div> </div> </figcaption> </figure> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotes", "class": "testimonial--quote", "size": quoteSize, "width": quoteSize, "height": quoteSize, "data-astro-cid-koa6grap": true })} </div> </div> `;
}, "/workspaces/codenetic/src/components/ui/Testimonial.astro", void 0);

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$BasicDark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicDark;
  const {
    blockquote = "Foxi is like a rocket boost for our productivity! Its sleek design and out-of-this-world features make managing projects and team communication a breeze.",
    figcaption = "Sheryl Sandberg",
    cite = "CEO, Facebook",
    bg,
    bgPosition = "center"
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonial", "mode": "dark", "bg": bg, "bgPosition": bgPosition, "classes": "dark:border-t border-y border-neutral-800" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Testimonial", $$Testimonial, { "blockquote": blockquote, "figcaption": figcaption, "cite": cite, "align": "center", "size": "4xl", "mobileSize": "2xl", "classes": "!leading-tight font-bold xl:text-5xl max-w-4xl mx-auto", "quoteSize": 112 })} ` })} ` })} ` })}`;
}, "/workspaces/codenetic/src/components/blocks/testimonials/BasicDark.astro", void 0);

export { $$BasicDark as $, $$Avatar as a };
