globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from './astro/server_BG5POMIu.mjs';
import { e as $$Icon } from './Col_B-e8fz3m.mjs';
/* empty css                             */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$Rating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rating;
  const { rating = 0, size = "base", elevated, title, text, helperText, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "rating",
    { ["rating--elevated"]: elevated },
    { [`rating--${size}`]: size },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-ev5oopnm> ${title && renderTemplate`<h4 class="rating__title" data-astro-cid-ev5oopnm>${title}</h4>`} <span class="rating__body" data-astro-cid-ev5oopnm> <span class="rating__stars" role="img"${addAttribute(`Rating: ${rating} out of 5 stars`, "aria-label")} data-astro-cid-ev5oopnm> ${Array.from({ length: 5 }, (_, index) => renderTemplate`<span aria-hidden="true" data-astro-cid-ev5oopnm> ${renderComponent($$result, "Icon", $$Icon, { "name": index < rating ? "filled-star" : "empty-star", "data-astro-cid-ev5oopnm": true })} </span>`)} </span> ${text && renderTemplate`<span data-astro-cid-ev5oopnm>${text}</span>`} </span> ${helperText && renderTemplate`<span class="rating__helper-text" data-astro-cid-ev5oopnm> ${helperText} </span>`} </div> `;
}, "/workspaces/codenetic/src/components/ui/Rating.astro", void 0);

export { $$Rating as $ };
