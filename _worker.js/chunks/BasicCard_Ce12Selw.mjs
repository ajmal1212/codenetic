globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, b as addAttribute } from './astro/server_BG5POMIu.mjs';
import { $ as $$Image } from './_astro_assets_DQL_3Swb.mjs';
import { e as $$Icon } from './Col_B-e8fz3m.mjs';
import { $ as $$Card } from './Card_BHXr35gX.mjs';
import { $ as $$CardBody } from './CardBody_BZuMINo8.mjs';
/* empty css                           */

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$BasicCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicCard;
  const { title = "", subtitle, titleSize = "lg", image, icon, link, type, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "classes": classes, "link": link, "data-astro-cid-7czs2qhi": true }, { "default": ($$result2) => renderTemplate`${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": title, "class": type === "image-bottom" ? "order-2" : "", "width": 600, "height": 400, "data-astro-cid-7czs2qhi": true })}`}${icon && renderTemplate`${maybeRenderHead()}<div class="px-6 pt-6" data-astro-cid-7czs2qhi> ${renderComponent($$result2, "Icon", $$Icon, { "name": `${icon}`, "class": "card__icon", "data-astro-cid-7czs2qhi": true })} </div>`}${renderComponent($$result2, "CardBody", $$CardBody, { "data-astro-cid-7czs2qhi": true }, { "default": ($$result3) => renderTemplate`${title && renderTemplate`<h3${addAttribute([[`text-${titleSize} lg:text${titleSize}`]], "class:list")} data-astro-cid-7czs2qhi>${title}</h3>`}${subtitle && renderTemplate`<p data-astro-cid-7czs2qhi>${subtitle}</p>`}${renderSlot($$result3, $$slots["default"])} ` })} ` })} `;
}, "/workspaces/codenetic/src/components/ui/cards/BasicCard.astro", void 0);

export { $$BasicCard as $ };
