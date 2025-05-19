globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderSlot, r as renderTemplate } from './astro/server_BG5POMIu.mjs';
/* empty css                           */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const {
    title = "Get started now",
    text = "Get started today and see the difference for yourself!",
    mode,
    bg,
    classes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["cta", { [`${classes}`]: classes }, { [`${mode}`]: mode }], "class:list")}${addAttribute(bg ? { backgroundImage: `url(${bg.src})` } : {}, "style")} data-astro-cid-ctop6wru> <div class="cta__body" data-astro-cid-ctop6wru> <h2 class="cta__heading" data-astro-cid-ctop6wru>${unescapeHTML(title)}</h2> <p class="cta__text" data-astro-cid-ctop6wru>${unescapeHTML(text)}</p> </div> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/workspaces/codenetic/src/components/ui/CTA.astro", void 0);

export { $$CTA as $ };
