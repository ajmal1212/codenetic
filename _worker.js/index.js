globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bccx20CY.mjs';
import { manifest } from './manifest_Bhrd1Zb4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/tags/_tag_.astro.mjs');
const _page3 = () => import('./pages/blog/tags.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/blog/_---id_.astro.mjs');
const _page6 = () => import('./pages/changelog.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/faq.astro.mjs');
const _page9 = () => import('./pages/features.astro.mjs');
const _page10 = () => import('./pages/pricing.astro.mjs');
const _page11 = () => import('./pages/robots.txt.astro.mjs');
const _page12 = () => import('./pages/terms.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/tags/[tag].astro", _page2],
    ["src/pages/blog/tags/index.astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/blog/[...id].astro", _page5],
    ["src/pages/changelog.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/faq.astro", _page8],
    ["src/pages/features.astro", _page9],
    ["src/pages/pricing.astro", _page10],
    ["src/pages/robots.txt.ts", _page11],
    ["src/pages/terms.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
