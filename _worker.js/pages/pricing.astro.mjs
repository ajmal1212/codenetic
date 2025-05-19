globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate, e as renderSlot, j as renderScript } from '../chunks/astro/server_BG5POMIu.mjs';
import { e as $$Icon, d as $$Button, a as $$Section, b as $$Row, c as $$Col, $ as $$Layout } from '../chunks/Col_B-e8fz3m.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CuRSzaa0.mjs';
/* empty css                                   */
import { $ as $$Basic$1 } from '../chunks/Basic_Dxo_YLuS.mjs';
import { $ as $$Accordion } from '../chunks/Accordion_x5R_vYeg.mjs';
import { $ as $$Card } from '../chunks/Card_BHXr35gX.mjs';
import { $ as $$BasicDark } from '../chunks/BasicDark_DASSDA0V.mjs';
import { f as features, $ as $$Feature } from '../chunks/featuresData_BQvi331Z.mjs';
import { $ as $$BasicDark$1 } from '../chunks/BasicDark_DMMpWy_5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$6 = createAstro("https://foxi.netlify.app/");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$List;
  const { type = "basic", listColor = "primary", listItems, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([
    "list",
    { [`list--${type}`]: type },
    { [`list--${listColor}`]: listColor },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-qfyuypxa> ${listItems.map((item) => renderTemplate`<li data-astro-cid-qfyuypxa> ${type === "checklist" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "check-circle", "data-astro-cid-qfyuypxa": true })}`} ${item.listItem} </li>`)} </ul> `;
}, "/workspaces/codenetic/src/components/ui/List.astro", void 0);

const $$Astro$5 = createAstro("https://foxi.netlify.app/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const { classes, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    "pricing__header",
    { [` pricing__header--${type}`]: type },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-ys7rv7gk> ${renderSlot($$result, $$slots["default"])} </header> `;
}, "/workspaces/codenetic/src/components/ui/pricing-tables/partials/Header.astro", void 0);

const $$Astro$4 = createAstro("https://foxi.netlify.app/");
const $$Body = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Body;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["pricing__body", { [`${classes}`]: classes }], "class:list")} data-astro-cid-chezmbrw> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/workspaces/codenetic/src/components/ui/pricing-tables/partials/Body.astro", void 0);

const $$Astro$3 = createAstro("https://foxi.netlify.app/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const { classes, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([
    "pricing__footer",
    { [` pricing__footer--${type}`]: type },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-cqjlmval> ${renderSlot($$result, $$slots["default"])} </footer> `;
}, "/workspaces/codenetic/src/components/ui/pricing-tables/partials/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://foxi.netlify.app/");
const $$PricingTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PricingTable;
  const { data, id, listType, classes } = Astro2.props;
  const { type, header, body, footer } = data;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([
    "pricing pricing--annualy",
    { [`pricing--${type}`]: type },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-y3zfnuaj> <div class="pricing__container" data-astro-cid-y3zfnuaj> ${renderComponent($$result, "Header", $$Header, { "type": type, "data-astro-cid-y3zfnuaj": true }, { "default": ($$result2) => renderTemplate` <h3${addAttribute([
    "pricing__header-title",
    { [`pricing__header-title--featured`]: type === "featured" }
  ], "class:list")} data-astro-cid-y3zfnuaj> ${header.title} <span class="pricing__header-subtitle" data-astro-cid-y3zfnuaj>${header.subtitle}</span> </h3> <div class="pricing__header-info" data-astro-cid-y3zfnuaj> <h4${addAttribute([
    "pricing__header-info-annualy text-5xl font-bold text-neutral-700 lg:text-6xl dark:text-neutral-50",
    { [`text-primary-50`]: type === "featured" }
  ], "class:list")} data-astro-cid-y3zfnuaj> <span class="pricing__header-currency" data-astro-cid-y3zfnuaj>${header.currency}</span> <span class="pricing__header-price" data-astro-cid-y3zfnuaj>${header.price}</span> <span class="pricing__header-perTime" data-astro-cid-y3zfnuaj>/${header.priceLabel}</span> </h4> <h4${addAttribute([
    "pricing__header-info-monthly text-5xl font-bold text-neutral-700 lg:text-6xl dark:text-neutral-50",
    { [`text-primary-50`]: type === "featured" }
  ], "class:list")} data-astro-cid-y3zfnuaj> <span class="pricing__header-currency" data-astro-cid-y3zfnuaj>${header.currency}</span> <span class="pricing__header-price" data-astro-cid-y3zfnuaj>${header.priceMontly}</span> <span class="pricing__header-perTime" data-astro-cid-y3zfnuaj>/${header.priceLabelMontly}</span> </h4> </div> ${renderComponent($$result2, "Button", $$Button, { "size": "lg", "style": type === "featured" ? "secondary" : "primary", "elevated": true, "type": "link", "link": header.buttonLink, "data-astro-cid-y3zfnuaj": true }, { "default": ($$result3) => renderTemplate`${header.buttonName}` })} ` })} ${body && renderTemplate`${renderComponent($$result, "Body", $$Body, { "data-astro-cid-y3zfnuaj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "List", $$List, { "type": listType, "listItems": body.listItems, "classes": type === "featured" ? "[&_li]:!text-primary-50 space-y-4" : "space-y-4", "listColor": type === "featured" ? "white" : "primary", "data-astro-cid-y3zfnuaj": true })} ` })}`} ${footer && renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "type": type, "data-astro-cid-y3zfnuaj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "size": "lg", "style": "primary", "type": "link", "link": footer.buttonLink, "variation": "link", "classes": "!font-medium " + (type === "featured" ? "!text-white" : ""), "data-astro-cid-y3zfnuaj": true }, { "default": ($$result3) => renderTemplate`${footer.buttonName}` })} ` })}`} </div> </div> `;
}, "/workspaces/codenetic/src/components/ui/pricing-tables/PricingTable.astro", void 0);

const $$Astro$1 = createAstro("https://foxi.netlify.app/");
const $$Toggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Toggle;
  const { id, label, showLabel = true, checked = false, helperText, disabled, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["toggle", { [`${classes}`]: classes }], "class:list")} data-astro-cid-yd7b5pvr> <input${addAttribute(["toggle__input peer"], "class:list")} type="checkbox" value=""${addAttribute(id, "id")}${addAttribute(disabled, "disabled")}${addAttribute(checked, "checked")} data-astro-cid-yd7b5pvr> <label${addAttribute(["toggle__label", { ["sr-only"]: !showLabel }], "class:list")}${addAttribute(id, "for")} data-astro-cid-yd7b5pvr>${label}</label> ${helperText && renderTemplate`<small class="toggle__helper-text" data-astro-cid-yd7b5pvr> <span data-astro-cid-yd7b5pvr>${helperText}</span> </small>`} </div> `;
}, "/workspaces/codenetic/src/components/ui/forms/form-elements/Toggle.astro", void 0);

const pricingTablesData = [
	{
		header: {
			title: "Basic",
			subtitle: "Ideal for individual developers.",
			currency: "$",
			price: "19",
			priceLabel: "month, billed anually",
			priceMontly: "25",
			priceLabelMontly: "month",
			buttonName: "Try for free",
			buttonLink: "/"
		},
		body: {
			listItems: [
				{
					listItem: "Join forces with fellow architects"
				},
				{
					listItem: "Present your projects with flair and captivate your audience."
				},
				{
					listItem: "Immerse yourself in the dynamic realm of architecture."
				}
			]
		},
		footer: {
			buttonName: "See all features",
			buttonLink: "/"
		},
		type: "basic"
	},
	{
		header: {
			title: "Team",
			subtitle: "Ideal for small teams",
			currency: "$",
			price: "29",
			priceLabel: "month, billed anually",
			priceMontly: "35",
			priceLabelMontly: "month",
			buttonName: "Try for free",
			buttonLink: "/"
		},
		body: {
			listItems: [
				{
					listItem: "Join forces with fellow architects"
				},
				{
					listItem: "Present your projects with flair and captivate your audience."
				},
				{
					listItem: "Immerse yourself in the dynamic realm of architecture."
				},
				{
					listItem: "Unlock endless inspiration"
				}
			]
		},
		footer: {
			buttonName: "See all features",
			buttonLink: "/"
		},
		type: "featured"
	},
	{
		header: {
			title: "Enterprise",
			subtitle: "Ideal for companies",
			currency: "$",
			price: "49",
			priceLabel: "month, billed anually",
			priceMontly: "65",
			priceLabelMontly: "month",
			buttonName: "Try for free",
			buttonLink: "/"
		},
		body: {
			listItems: [
				{
					listItem: "Join forces with fellow architects"
				},
				{
					listItem: "Present your projects with flair and captivate your audience."
				},
				{
					listItem: "Immerse yourself in the dynamic realm of architecture."
				}
			]
		},
		footer: {
			buttonName: "See all features",
			buttonLink: "/"
		},
		type: "basic"
	}
];

const $$PricingPlanChange = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Pricing plans: A simple script to toggle the pricing plans between annualy and monthly -->${renderScript($$result, "/workspaces/codenetic/src/components/scripts/PricingPlanChange.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/codenetic/src/components/scripts/PricingPlanChange.astro", void 0);

const $$PricingColumns = createComponent(($$result, $$props, $$slots) => {
  const pricingData = pricingTablesData;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "classes": "flex items-center justify-center gap-4 mb-12" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span id="monthlyLabel" class="font-semibold text-neutral-400 transition-colors">Bill monthly</span> ${renderComponent($$result4, "Toggle", $$Toggle, { "id": "pricingType", "label": "pricing", "showLabel": false, "checked": true })} <span class="font-semibold text-neutral-400 text-primary-500 transition-colors" id="annualLabel">Bill annually</span> ` })} ${pricingData.map((item, key) => renderTemplate`${renderComponent($$result3, "Col", $$Col, { "span": "4" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "PricingTable", $$PricingTable, { "data": item, "listType": "checklist", "id": `plan-${key}` })} ` })}`)}` })} ` })} ${renderComponent($$result, "PricingChange", $$PricingPlanChange, {})}`;
}, "/workspaces/codenetic/src/components/blocks/pricing/PricingColumns.astro", void 0);

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$Basic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Basic;
  const { classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "FAQ", "classes": classes, "data-astro-cid-audnad2w": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-audnad2w": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "classes": "mb-12 max-w-4xl mx-auto", "data-astro-cid-audnad2w": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-pretty" data-astro-cid-audnad2w>
Demystifying <strong data-astro-cid-audnad2w>pricing,</strong> common queries resolved
</h2> <p class="text-lg leading-relaxed" data-astro-cid-audnad2w>
Curious about our pricing plans? We’re here to help. Below are some of the most frequently
				asked questions about our pricing options.
</p> ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "2", "data-astro-cid-audnad2w": true })} ${renderComponent($$result3, "Col", $$Col, { "span": "8", "data-astro-cid-audnad2w": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$Card, { "classes": "divide-y divide-neutral-100 dark:divide-neutral-800", "data-astro-cid-audnad2w": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Accordion", $$Accordion, { "title": "What is included in the free trial?", "text": "Our free trial gives you full access to all features of our platform for 14 days. You can explore and use all functionalities to see how they fit your business needs, without any cost.", "data-astro-cid-audnad2w": true })} ${renderComponent($$result5, "Accordion", $$Accordion, { "title": "Can I change my plan later?", "text": "Yes, you can upgrade or downgrade your plan at any time from your account settings. The changes will take effect immediately, and any cost adjustments will be prorated.", "data-astro-cid-audnad2w": true })} ${renderComponent($$result5, "Accordion", $$Accordion, { "title": "Are there any hidden fees?", "text": "No, there are no hidden fees. The price you see is the price you pay. We believe in transparent pricing with no surprises.", "data-astro-cid-audnad2w": true })} ${renderComponent($$result5, "Accordion", $$Accordion, { "title": "What payment methods do you accept?", "text": "We accept all major credit cards, including Visa, MasterCard, American Express, and PayPal. For enterprise plans, we also offer invoicing options.", "data-astro-cid-audnad2w": true })} ${renderComponent($$result5, "Accordion", $$Accordion, { "title": "Do you offer discounts for annual subscriptions?", "text": "Yes, we offer a discount for annual subscriptions. By choosing an annual plan, you can save up to 20% compared to the monthly plan.", "data-astro-cid-audnad2w": true })} ` })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "2", "data-astro-cid-audnad2w": true })} ` })} ` })} `;
}, "/workspaces/codenetic/src/components/blocks/FAQ/Basic.astro", void 0);

const $$FeatureList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "features" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "classes": "mb-12 max-w-4xl mx-auto" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-pretty">Whats included on <strong>all</strong> foxi plans</h2> <p class="pb-0 text-lg">
Explore the suite of tools designed to streamline your workflow, enhance productivity, and
				drive growth. Each product is crafted with precision to meet your needs and exceed your
				expectations.
</p> ` })} ` })} ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate`${features.slice(0, 8).map((feature) => renderTemplate`${renderComponent($$result3, "Col", $$Col, { "span": "3" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Feature", $$Feature, { "title": feature.title, "icon": feature.icon, "align": "left", "classes": "mb-12" }, { "default": ($$result5) => renderTemplate`${feature.description}` })} ` })}`)}` })} ` })}`;
}, "/workspaces/codenetic/src/components/blocks/features/FeatureList.astro", void 0);

const testimonialBackground = new Proxy({"src":"/_astro/testimonial-bg-02.DsUYGwFk.webp","width":1600,"height":900,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/codenetic/src/assets/testimonial-bg-02.webp";
							}
							
							return target[name];
						}
					});

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Foxi | Pricing made simple",
    description: "Discover the perfect SaaS pricing plan for your business. From startups to enterprises, our scalable solutions offer unparalleled features and 24/7 support."
  };
  const header = {
    title: "Choose the plan that works for <strong>your</strong> needs",
    text: "All plans come with a 30-day money-back guarantee."
  };
  const testimonialData = {
    blockquote: "Foxi isn't just an app\u2014it's like having a mischievous yet brilliant sidekick for your business. It streamlines tasks and also cracks jokes to keep spirits high",
    figcaption: "Max Widgetson",
    cite: " CEO, Widgetify Ltd"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "Price", $$PricingColumns, {})} ${renderComponent($$result2, "SocialProof", $$Basic$1, {})} ${renderComponent($$result2, "Feature", $$FeatureList, {})} ${renderComponent($$result2, "Testimonial", $$BasicDark, { "bg": testimonialBackground, "bgPosition": "left", "blockquote": testimonialData.blockquote, "figcaption": testimonialData.figcaption, "cite": testimonialData.cite })} ${renderComponent($$result2, "FAQ", $$Basic, { "classes": "bg-slate-50 dark:bg-neutral-900/40" })} ${renderComponent($$result2, "CTA", $$BasicDark$1, {})} ` })}`;
}, "/workspaces/codenetic/src/pages/pricing.astro", void 0);

const $$file = "/workspaces/codenetic/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Pricing,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
