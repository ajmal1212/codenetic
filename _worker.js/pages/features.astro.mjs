globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BG5POMIu.mjs';
import { b as $$Row, c as $$Col, $ as $$Layout } from '../chunks/Col_B-e8fz3m.mjs';
import { $ as $$StickySidebar } from '../chunks/StickySidebar_C6rjpl2y.mjs';
import { $ as $$Feature, f as features } from '../chunks/featuresData_BQvi331Z.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CuRSzaa0.mjs';
import { $ as $$BasicDark } from '../chunks/BasicDark_DMMpWy_5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$FeatureSticky = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureSticky;
  const { title, text, data, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "StickySidebar", $$StickySidebar, { "classes": classes }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate`${// Map through the filtered features and render them
  data.map((feature) => renderTemplate`${renderComponent($$result3, "Col", $$Col, { "span": "4" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Feature", $$Feature, { "title": feature.title, "icon": feature.icon, "align": "left", "classes": "mb-12" }, { "default": ($$result5) => renderTemplate`${feature.description}` })} ` })}`)}` })} `, "sidebar": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${title && renderTemplate`<h3 class="text-3xl">${title}</h3>`} ${text && renderTemplate`<p class="text-lg leading-relaxed">${text}</p>`} </header>` })}`;
}, "/workspaces/codenetic/src/components/blocks/features/FeatureSticky.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const featuresAnalytics = features.filter((feature) => feature.category === "Analytics");
  const featuresProductivity = features.filter((feature) => feature.category === "Productivity");
  const featuresSecurity = features.filter((feature) => feature.category === "Security");
  const featuresIntegrations = features.filter((feature) => feature.category === "Integrations");
  const featuresSupport = features.filter((feature) => feature.category === "Support");
  const SEO = {
    title: "Foxi | Features to Boost Productivity & Security",
    description: "Explore Foxi's powerful features designed to enhance productivity, ensure top-notch security, and integrate seamlessly with your favorite tools. Join thousands of satisfied users and transform your workflow with Foxi today!"
  };
  const header = {
    title: "Why you and your team will <strong>love</strong> foxi.",
    text: "Streamline your tasks, protect your data, and enjoy working with our tools!"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Insightful Analytics", "text": "Delve into your data with precision and uncover actionable insights.", "data": featuresAnalytics })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Efficiency Unleashed", "text": "Streamline tasks and focus on what matters with tools designed to boost your productivity.", "data": featuresSecurity, "classes": "bg-neutral-50 dark:bg-neutral-900" })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Ultimate Data Protection", "text": "Keep your data safe with top-notch security measures and real-time threat detection.", "data": featuresProductivity })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Seamless Connectivity", "text": "Effortlessly connect your favorite apps and automate workflows for a smoother workday.", "data": featuresIntegrations, "classes": "bg-neutral-50 dark:bg-neutral-900" })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "24/7 Expert Help", "text": "Our friendly support team is always here to assist you with any questions or issues.", "data": featuresSupport })} ${renderComponent($$result2, "CTA", $$BasicDark, {})} ` })}`;
}, "/workspaces/codenetic/src/pages/features.astro", void 0);

const $$file = "/workspaces/codenetic/src/pages/features.astro";
const $$url = "/features";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Features,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
