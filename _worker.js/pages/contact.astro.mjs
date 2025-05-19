globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BG5POMIu.mjs';
import { e as $$Icon, f as $$Form, g as $$FormField, h as $$InputField, d as $$Button, a as $$Section, b as $$Row, c as $$Col, $ as $$Layout } from '../chunks/Col_B-e8fz3m.mjs';
import { $ as $$Card } from '../chunks/Card_BHXr35gX.mjs';
import { $ as $$CardBody } from '../chunks/CardBody_BZuMINo8.mjs';
/* empty css                                   */
import { $ as $$BasicDark } from '../chunks/BasicDark_DMMpWy_5.mjs';
import { $ as $$BasicCard } from '../chunks/BasicCard_Ce12Selw.mjs';
import { $ as $$Basic } from '../chunks/Basic_Dxo_YLuS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://foxi.netlify.app/");
const $$TextArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TextArea;
  const { id, label, iconName, iconPosition, helperText, required, disabled, value, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "input",
    { [`input--icon-${iconPosition}`]: iconPosition },
    ,
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-5ltckmgw> <textarea${addAttribute(id, "id")} rows="7"${addAttribute(id, "name")}${addAttribute(label, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(value, "value")} class="input__field peer" data-astro-cid-5ltckmgw></textarea> <label${addAttribute(id, "for")}${addAttribute(`input__label ${iconPosition === "lead" ? "peer-placeholder-shown:left-10 peer-focus:left-2" : ""}`, "class")} data-astro-cid-5ltckmgw> ${label} </label> ${iconName && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": "input__icon", "data-astro-cid-5ltckmgw": true })}`} ${helperText && renderTemplate`<small class="input__helper-text" data-astro-cid-5ltckmgw> <span data-astro-cid-5ltckmgw> ${helperText} </span> </small>`} </div> `;
}, "/workspaces/codenetic/src/components/ui/forms/form-elements/TextArea.astro", void 0);

const $$Astro$2 = createAstro("https://foxi.netlify.app/");
const $$BasicForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BasicForm;
  const { classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "classes": classes }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardBody", $$CardBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Form", $$Form, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-2xl">Get in Touch</h2> ${renderComponent($$result4, "FormField", $$FormField, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "InputField", $$InputField, { "type": "text", "id": "firstName", "label": "First Name" })} ${renderComponent($$result5, "InputField", $$InputField, { "type": "text", "id": "lastName", "label": "Last Name" })} ` })} ${renderComponent($$result4, "FormField", $$FormField, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "InputField", $$InputField, { "type": "email", "id": "email", "label": "Email", "required": true, "value": "name@youremail.com" })} ` })} ${renderComponent($$result4, "FormField", $$FormField, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "InputField", $$InputField, { "type": "tel", "id": "phone", "label": "phone number" })} ` })} ${renderComponent($$result4, "FormField", $$FormField, {}, { "default": ($$result5) => renderTemplate`${renderComponent($$result5, "TextArea", $$TextArea, { "id": "message", "label": "Your Message" })}` })} ${renderComponent($$result4, "Button", $$Button, { "style": "primary", "type": "submit" }, { "default": ($$result5) => renderTemplate`Submit` })} ` })} ` })} ` })}`;
}, "/workspaces/codenetic/src/components/blocks/contact/BasicForm.astro", void 0);

const $$Astro$1 = createAstro("https://foxi.netlify.app/");
const $$ContactHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactHero;
  const { id, title, text, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": classes }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": `self-center` }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<header class="max-w-xl"> <h1>${unescapeHTML(title)}</h1> <p class="text-lg leading-relaxed">${text}</p> </header> ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": "relative" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Form", $$BasicForm, { "classes": "max-w-xl" })} ` })} ` })} ` })}`;
}, "/workspaces/codenetic/src/components/blocks/hero/ContactHero.astro", void 0);

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$ContactCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactCards;
  const { classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "requests", "classes": classes }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "classes": "mb-12 max-w-4xl mx-auto" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-balance">Have a Special Request? We’re Here to <strong>Help!</strong></h2> <p class="pb-0 text-lg">
Choose from one of the options below to get the specific help you need. Whether it's
				customer support, sales inquiries, feature requests, or general feedback, we're here to
				provide you with the best assistance possible.
</p> ` })} ` })} ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "3" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "Customer Support", "subtitle": "Need help with Foxi? Our support team is available 24/7 to assist you with any issues or questions you might have.", "icon": "rocket", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "3" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "Sales Inquiries ", "subtitle": "Interested in our plans or want a custom solution? Get in touch with our sales team to find the perfect fit. ", "icon": "document-text", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "3" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "Feature Requests", "subtitle": "Have an idea to make Foxi even better? We\u2019d love to hear from you! Share your feature requests and help us improve ", "icon": "bolt", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "3", "classes": "flex flex-col gap-6" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "General Feedback", "subtitle": "Your feedback is invaluable to us. Let us know how we\u2019re doing and how we can improve. ", "icon": "chat-bubble-left-ellipsis", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ` })} ` })}`;
}, "/workspaces/codenetic/src/components/blocks/contact/ContactCards.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Foxi | Get in Touch with Us",
    description: "Have questions or need assistance? Contact Foxi today for support, inquiries, or feedback. Our team is here to help you make the most of your Foxi experience."
  };
  const header = {
    title: "Get Answers to Your <strong>Foxi</strong> Questions.",
    text: "Whether you have a question, need support, or just want to share your feedback, we're all ears. Reach out to us and we'll get back to you as soon as possible."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormHero", $$ContactHero, { "title": header.title, "text": header.text, "id": "contact", "classes": "bg-neutral-50 dark:bg-neutral-950/80" })} ${renderComponent($$result2, "ContactCards", $$ContactCards, { "classes": "dark:bg-neutral-950/80" })} ${renderComponent($$result2, "SocialProof", $$Basic, { "classes": "dark:bg-neutral-950/80" })} ${renderComponent($$result2, "CTA", $$BasicDark, {})} ` })}`;
}, "/workspaces/codenetic/src/pages/contact.astro", void 0);

const $$file = "/workspaces/codenetic/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
