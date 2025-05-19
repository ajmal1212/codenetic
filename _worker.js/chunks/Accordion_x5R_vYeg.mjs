globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate } from './astro/server_BG5POMIu.mjs';
import { e as $$Icon } from './Col_B-e8fz3m.mjs';
/* empty css                           */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    title = "Foxi. Tailwind CSS Astro Starter Kit by Oxygenna",
    text = "Foxi is a design and development agency that specializes in creating beautiful and functional websites.",
    open = false,
    classes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details${addAttribute(["accordion group", { [`${classes}`]: classes }], "class:list")}${addAttribute(open ? true : void 0, "open")} data-astro-cid-wx4eh2ni> <summary class="accordion__summary" data-astro-cid-wx4eh2ni> ${title} ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "class": "accordion__icon", "data-astro-cid-wx4eh2ni": true })} </summary> <p class="accordion__text" data-astro-cid-wx4eh2ni> ${text} </p> </details> `;
}, "/workspaces/codenetic/src/components/ui/Accordion.astro", void 0);

export { $$Accordion as $ };
