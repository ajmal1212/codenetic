globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from './astro/server_BG5POMIu.mjs';
import { a as $$Section, b as $$Row, c as $$Col } from './Col_B-e8fz3m.mjs';
/* empty css                         */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$TextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextImage;
  const {
    id,
    title,
    image,
    imageWidth,
    imageHeight,
    mobileImage,
    imagePosition = "right",
    text,
    classes,
    offsetImage = false
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": classes, "data-astro-cid-l3b76b2h": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-l3b76b2h": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": "relative", "data-astro-cid-l3b76b2h": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<picture${addAttribute(`text-image__picture ${offsetImage ? "text-image__picture--offset" : ""} ${imagePosition === "right" ? "text-image__picture--offset-right" : ""}`, "class")} data-astro-cid-l3b76b2h> ${mobileImage && renderTemplate`<source${addAttribute(mobileImage.src, "srcset")} media="(max-width: 1024px)" data-astro-cid-l3b76b2h>`} <img${addAttribute(image.src, "src")}${addAttribute(title, "alt")}${addAttribute(imageWidth, "width")}${addAttribute(imageHeight, "height")} data-astro-cid-l3b76b2h> </picture> ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": `self-center ${imagePosition === "right" ? "lg:-order-1" : ""}`, "data-astro-cid-l3b76b2h": true }, { "default": ($$result4) => renderTemplate` <div class="text-image__content" data-astro-cid-l3b76b2h> <h2 class="text-image__heading" data-astro-cid-l3b76b2h>${unescapeHTML(title)}</h2> <p class="text-image__text" data-astro-cid-l3b76b2h>${text}</p> </div> ` })} ` })} ` })} `;
}, "/workspaces/codenetic/src/components/blocks/basic/TextImage.astro", void 0);

export { $$TextImage as $ };
