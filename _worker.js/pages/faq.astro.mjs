globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BG5POMIu.mjs';
import { $ as $$Layout } from '../chunks/Col_B-e8fz3m.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CuRSzaa0.mjs';
import { $ as $$StickySidebar } from '../chunks/StickySidebar_C6rjpl2y.mjs';
import { $ as $$Accordion } from '../chunks/Accordion_x5R_vYeg.mjs';
import { $ as $$Card } from '../chunks/Card_BHXr35gX.mjs';
import { $ as $$TextImage } from '../chunks/TextImage_BrslyNEU.mjs';
import { $ as $$BasicDark } from '../chunks/BasicDark_DMMpWy_5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://foxi.netlify.app/");
const $$FaqSticky = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqSticky;
  const { title, text, data, type = "left", classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "StickySidebar", $$StickySidebar, { "classes": classes, "type": type }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Card", $$Card, { "classes": "divide-y divide-neutral-100 dark:divide-neutral-800" }, { "default": ($$result3) => renderTemplate`${data.map((faq) => renderTemplate`${renderComponent($$result3, "FAQ", $$Accordion, { "title": faq.question, "text": faq.reply, "open": faq.open })}`)}` })} `, "sidebar": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${title && renderTemplate`<h3 class="text-3xl">${title}</h3>`} ${text && renderTemplate`<p class="text-lg leading-relaxed">${text}</p>`} </header>` })}`;
}, "/workspaces/codenetic/src/components/blocks/FAQ/FaqSticky.astro", void 0);

const faqData = [
	{
		question: "What is the cost of the basic plan?",
		reply: "The basic plan is $9.99 per month, which includes access to core features and limited integrations. This plan is perfect for individuals or small teams looking to improve their productivity without a large investment.",
		category: "pricing",
		open: true
	},
	{
		question: "Are there any discounts for annual subscriptions?",
		reply: "Yes, we offer a 20% discount on annual subscriptions for all our plans. By choosing an annual subscription, you can save money and ensure uninterrupted access to all Foxi features for the entire year.",
		category: "pricing",
		open: false
	},
	{
		question: "Can I change my subscription plan at any time?",
		reply: "Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. This flexibility allows you to adjust your plan based on your changing needs and usage.",
		category: "pricing",
		open: false
	},
	{
		question: "Is there a free trial available?",
		reply: "Yes, we offer a 14-day free trial for all new users. During the trial, you can explore all the features of Foxi without any commitment, allowing you to see how it fits into your workflow.",
		category: "pricing",
		open: false
	},
	{
		question: "Do you offer refunds?",
		reply: "We offer a 30-day money-back guarantee if you are not satisfied with our service. Simply contact our support team within 30 days of your purchase, and we'll process your refund.",
		category: "pricing",
		open: false
	},
	{
		question: "How do I cancel my subscription?",
		reply: "You can cancel your subscription from your account settings at any time. After cancellation, you will still have access to your account until the end of the billing cycle.",
		category: "pricing",
		open: false
	},
	{
		question: "Can I use Foxi with Google Calendar?",
		reply: "Yes, Foxi integrates seamlessly with Google Calendar for easy scheduling and task management. This integration helps you keep track of your events and tasks in one place.",
		category: "integrations",
		open: true
	},
	{
		question: "Does Foxi work with Slack?",
		reply: "Yes, you can integrate Foxi with Slack to receive notifications and updates directly in your channels. This allows you to stay informed about your projects without leaving Slack.",
		category: "integrations",
		open: false
	},
	{
		question: "How do I connect Foxi with Trello?",
		reply: "To connect Foxi with Trello, go to the integrations page in your settings and follow the instructions to link your accounts. This integration helps you manage your Trello boards and Foxi projects together.",
		category: "integrations",
		open: false
	},
	{
		question: "Is there an API for custom integrations?",
		reply: "Yes, we provide an API that allows you to create custom integrations with Foxi. Our API documentation provides detailed instructions and examples to help you get started.",
		category: "integrations",
		open: false
	},
	{
		question: "Can I sync Foxi with my email?",
		reply: "Currently, we do not support email integration, but this feature is on our roadmap for future releases. Stay tuned for updates as we continue to enhance Foxi's capabilities.",
		category: "integrations",
		open: false
	},
	{
		question: "Does Foxi support Zapier?",
		reply: "Yes, Foxi integrates with Zapier, allowing you to connect with over 2,000 apps and automate your workflows. This integration helps you streamline your processes and improve efficiency.",
		category: "integrations",
		open: false
	},
	{
		question: "What are the main features of Foxi?",
		reply: "Foxi includes in-app messaging, project management, time tracking, customizable dashboards, and more. These features are designed to help you stay organized, communicate effectively, and manage your time efficiently.",
		category: "features",
		open: true
	},
	{
		question: "How do I use the in-app messaging feature?",
		reply: "In-app messaging allows you to communicate with your team directly within Foxi. Simply navigate to the messaging tab to start a conversation. You can send messages, share files, and create group chats.",
		category: "features",
		open: false
	},
	{
		question: "Can I customize my dashboard?",
		reply: "Yes, you can customize your dashboard by adding, removing, and rearranging widgets to fit your workflow. This customization helps you keep important information at your fingertips.",
		category: "features",
		open: false
	},
	{
		question: "How does the time tracking feature work?",
		reply: "Time tracking allows you to log the time spent on tasks and projects. Start the timer when you begin a task and stop it when you're done. You can also manually log time if needed.",
		category: "features",
		open: false
	},
	{
		question: "Is there a mobile app for Foxi?",
		reply: "Yes, Foxi is available on both iOS and Android, allowing you to manage your tasks and projects on the go. Download the app from the App Store or Google Play to stay productive anywhere.",
		category: "features",
		open: false
	}
];

const faqImage1 = new Proxy({"src":"/_astro/faq-01.BEilivaQ.png","width":1000,"height":607,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/codenetic/src/assets/faq/faq-01.png";
							}
							
							return target[name];
						}
					});

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqPricing = faqData.filter((faq) => faq.category === "pricing");
  const faqIntegrations = faqData.filter((faq) => faq.category === "integrations");
  const SEO = {
    title: "Foxi | Get Your Questions Answered with a Smile",
    description: "Dive into the Foxi FAQ Funhouse to get answers to all your questions about pricing, integrations, features, and more. Discover how Foxi can make your work life more productive and enjoyable."
  };
  const header = {
    title: "Get Answers to Your <strong>Foxi</strong> Questions.",
    text: "Find answers to common questions about Foxi "
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "FAQ", $$FaqSticky, { "title": "Understanding Our Pricing Plans", "text": "Get all the details on Foxi\u2019s pricing plans. Learn about the costs, discounts, and subscription options to find the best plan that fits your needs and budget.", "data": faqPricing })} ${renderComponent($$result2, "TextImage", $$TextImage, { "title": "Why Foxi\u2019s Pricing Plans Offer Great Value", "text": "At Foxi, we believe in providing exceptional value at every price point. Our pricing plans are designed to cater to a variety of needs, from individuals and small teams to large enterprises. Each plan includes access to our powerful features, seamless integrations, and top-notch customer support. ", "image": faqImage1, "mobileImage": faqImage1, "imagePosition": "left", "offsetImage": true, "classes": "bg-neutral-50 dark:bg-neutral-900 lg:!py-64" })} ${renderComponent($$result2, "FAQ", $$FaqSticky, { "title": "Integrations Made Easy", "text": "Discover how Foxi seamlessly integrates with your favorite tools and platforms. From Google Calendar to Slack, find out how to connect and enhance your productivity with powerful integrations.", "data": faqIntegrations })} ${renderComponent($$result2, "CTA", $$BasicDark, {})} ` })}`;
}, "/workspaces/codenetic/src/pages/faq.astro", void 0);

const $$file = "/workspaces/codenetic/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Faq,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
