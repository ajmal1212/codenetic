globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, r as renderTemplate } from './astro/server_BG5POMIu.mjs';
/* empty css                           */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { link, classes } = Astro2.props;
  return renderTemplate`${link ? renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(["card", { [`${classes}`]: classes }], "class:list")} data-astro-cid-eypzv45g>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<div${addAttribute(["card", { [`${classes}`]: classes }], "class:list")} data-astro-cid-eypzv45g>${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/workspaces/codenetic/src/components/ui/cards/partials/Card.astro", void 0);

export { $$Card as $ };
