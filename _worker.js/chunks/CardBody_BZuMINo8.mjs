globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, r as renderTemplate } from './astro/server_BG5POMIu.mjs';
/* empty css                           */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$CardBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardBody;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["card__body", { [`${classes}`]: classes }], "class:list")} data-astro-cid-4v6mohoo> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/workspaces/codenetic/src/components/ui/cards/partials/CardBody.astro", void 0);

export { $$CardBody as $ };
