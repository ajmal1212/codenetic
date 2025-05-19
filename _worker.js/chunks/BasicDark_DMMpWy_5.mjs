globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, r as renderTemplate, s as spreadAttributes, u as unescapeHTML, d as renderComponent } from './astro/server_BG5POMIu.mjs';
import { a as $$Section, b as $$Row, c as $$Col, d as $$Button } from './Col_B-e8fz3m.mjs';
import { $ as $$CTA } from './CTA_QO5oADJS.mjs';
/* empty css                           */
import { $ as $$Image } from './_astro_assets_DQL_3Swb.mjs';

const $$Astro$1 = createAstro("https://foxi.netlify.app/");
const $$ChipNotification = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ChipNotification;
  const { elevated, radius = "rounded", classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["chip", { ["chip--elevated"]: elevated }, { [`${classes}`]: classes }, radius], "class:list")} data-astro-cid-2xfqp4y7> ${renderSlot($$result, $$slots["button"])} <span class="chip--body" data-astro-cid-2xfqp4y7> ${renderSlot($$result, $$slots["default"])} </span> </div> `;
}, "/workspaces/codenetic/src/components/ui/ChipNotification.astro", void 0);

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$Highlight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Highlight;
  const { type = "1", classes, colorFrom, colorTo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["highlight", { [`highlight--${type}`]: type }, { [`${classes}`]: classes }], "class:list")}${addAttribute(`background-image:linear-gradient(to right, ${colorFrom} 0%, ${colorTo} 100%)`, "style")} data-astro-cid-ncbfbw5h> ${renderSlot($$result, $$slots["default"])} </span> `;
}, "/workspaces/codenetic/src/components/ui/Highlight.astro", void 0);

const ctaImage = new Proxy({"src":"/_astro/cta-dark-bg.h-w07icx.webp","width":900,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/codenetic/src/assets/cta-dark-bg.webp";
							}
							
							return target[name];
						}
					});

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const badge = createSvgComponent({"meta":{"src":"/_astro/badge.DNLxsjES.svg","width":300,"height":301,"format":"svg"},"attributes":{"width":"300","height":"301","viewBox":"0 0 300 301","fill":"none"},"children":"\n<rect x=\"11\" y=\"12\" width=\"278\" height=\"278\" rx=\"139\" fill=\"#CBD5E1\" fill-opacity=\"0.15\" />\n<g class=\"wobble\">\n<rect x=\"143\" y=\"183.076\" width=\"13.0851\" height=\"46.1421\" fill=\"#DE9300\" />\n<path d=\"M93.3564 85.6699H53C53 116.965 55.4 134.967 99.9887 134.967\" stroke=\"#FFEC86\" stroke-width=\"9\" />\n<path d=\"M208.554 126.658C208.554 159.39 182.019 185.925 149.287 185.925C116.554 185.925 90.0195 159.39 90.0195 126.658C90.0195 93.9253 116.554 67.3905 149.287 67.3905C182.019 67.3905 208.554 93.9253 208.554 126.658Z\" fill=\"#FFEC86\" />\n<path d=\"M149.287 226.913C125.12 226.913 105.529 233.981 105.529 242.699H193.045C193.045 233.981 173.454 226.913 149.287 226.913Z\" fill=\"#FFEC86\" />\n<path d=\"M90.0195 56H208.554V123.888H90.0195V56Z\" fill=\"#FFEC86\" />\n<path d=\"M193.045 245.746H105.529V242.422H193.045V245.746Z\" fill=\"#FFEC86\" />\n<path d=\"M206.878 85.6699H247.234C247.234 116.965 244.834 134.967 200.246 134.967\" stroke=\"#FFB525\" stroke-width=\"9\" />\n<path d=\"M149.665 67.0116V56.3834H208.173V117.115C203.626 88.8302 179.19 67.1955 149.665 67.0116ZM149.665 67.7706C180.959 67.9681 206.461 92.5743 208.091 123.508H149.665L149.665 84.7488L149.665 72.0474L149.665 68.594L149.665 67.7706ZM149.665 124.267H208.126C208.157 125.06 208.173 125.857 208.173 126.657C208.173 159.053 182.013 185.339 149.665 185.543L149.665 184.72L149.665 181.267L149.665 168.565L149.665 126.657L149.665 124.267ZM149.665 67.467L149.665 67.4093V67.3948V67.3911V67.3902L149.665 67.467ZM192.596 241.839C192.289 241.721 191.869 241.56 191.349 241.367C190.182 240.933 188.514 240.333 186.508 239.665C182.499 238.332 177.134 236.729 171.724 235.66C166.324 234.592 160.835 234.048 156.598 234.861C154.475 235.268 152.637 236.021 151.283 237.248C150.612 237.857 150.066 238.576 149.665 239.414L149.665 231.536L149.665 228.153L149.665 227.293C161.566 227.329 172.314 229.085 180.099 231.893C184.034 233.313 187.192 234.995 189.359 236.843C191.219 238.43 192.321 240.113 192.596 241.839ZM191.084 242.079C191.319 242.166 191.533 242.246 191.726 242.319H149.675C149.853 240.345 150.611 238.881 151.793 237.811C153.008 236.709 154.7 235.998 156.741 235.606C160.829 234.822 166.199 235.342 171.577 236.404C176.944 237.465 182.276 239.057 186.269 240.386C188.265 241.05 189.924 241.647 191.084 242.079ZM192.664 243.078V245.366H149.65C149.643 245.159 149.634 244.879 149.628 244.562C149.62 244.101 149.618 243.57 149.633 243.078H192.664Z\" fill=\"#FFB525\" stroke=\"#FFB525\" stroke-width=\"0.759061\" />\n<circle cx=\"150.448\" cy=\"120.061\" r=\"35.4674\" fill=\"#DCAE0C\" />\n<circle cx=\"150.379\" cy=\"119.623\" r=\"44.5629\" fill=\"#DE9300\" />\n<path d=\"M150.38 90.4648L159.366 108.437L177.338 110.683L164.997 124.522L168.352 144.38L150.38 135.395L132.408 144.38L135.793 124.522L123.422 110.683L141.394 108.437L150.38 90.4648Z\" fill=\"#FFF4BC\" />\n</g>\n<style>\n.wobble {\n    animation: wobble 4s ease infinite;\n}\n\n@keyframes wobble {\n    0%, 18% {\n        -webkit-transform: translateX(0%);\n        transform: translateX(0%);\n        -webkit-transform-origin: 50% 50%;\n        transform-origin: 50% 50%;\n    }\n\n    3% {\n        -webkit-transform: translateX(-32px) rotate(-10deg);\n        transform: translateX(-32px) rotate(-10deg);\n    }\n\n    6% {\n        -webkit-transform: translateX(calc(32px / 2)) rotate(10deg);\n        transform: translateX(calc(32px / 2)) rotate(10deg);\n    }\n\n    9% {\n        -webkit-transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));\n        transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));\n    }\n\n    12% {\n        -webkit-transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));\n        transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));\n    }\n\n    15% {\n        -webkit-transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));\n        transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));\n    }\n}\n</style>\n"});

const $$BasicDark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "1" })} ${renderComponent($$result3, "Col", $$Col, { "span": "10" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CTA", $$CTA, { "title": "Join Over 30,000 Satisfied Users!", "text": "Discover why thousands of professionals trust our platform to streamline their workflow and enhance productivity. Get started today and see the difference for yourself!", "mode": "dark", "bg": ctaImage }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "ChipNotification", $$ChipNotification, { "radius": "rounded-full", "classes": "mb-6 box" }, { "button": ($$result6) => renderTemplate`${renderComponent($$result6, "Image", $$Image, { "src": badge, "alt": "Product of the Year", "class": "h-12 w-12", "slot": "button" })}`, "default": ($$result6) => renderTemplate`  ${maybeRenderHead()}<span class="hidden md:block">#1 Product of the Year,</span> ${renderComponent($$result6, "Highlight", $$Highlight, { "classes": "md:ml-2" }, { "default": ($$result7) => renderTemplate` Product Hunt ` })} ` })} ${renderComponent($$result5, "Button", $$Button, { "size": "lg", "style": "primary" }, { "default": ($$result6) => renderTemplate` Get started now! ` })} ` })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "1" })} ` })} ` })}`;
}, "/workspaces/codenetic/src/components/blocks/CTA/BasicDark.astro", void 0);

export { $$BasicDark as $, $$ChipNotification as a, createSvgComponent as c };
