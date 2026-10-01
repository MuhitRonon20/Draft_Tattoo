import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as styles, t as Reveal } from "./Reveal-CkUYUqMx.mjs";
import { t as PageHeader } from "./PageHeader-B3OGy_bu.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/styles-DgIyjjkj.js
var import_jsx_runtime = require_jsx_runtime();
function StylesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		label: "Styles",
		title: "Find your language.",
		children: "Eight directions we work in. Most pieces end up somewhere between two of them — bring a reference and we'll help you place it."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4",
			children: styles.map((style, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "zoom",
				delay: i % 4 * 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					"data-cursor": "Explore",
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "image-frame aspect-[3/4] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: style.image,
								alt: `${style.name} tattoo example`,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-baseline justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display text-[1.8rem] transition-colors duration-700 group-hover:text-accent",
								children: style.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label",
								children: String(i + 1).padStart(2, "0")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy mt-3 text-sm",
							children: style.note
						})
					]
				})
			}, style.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			variant: "up",
			delay: 160,
			className: "mt-24 block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mb-12" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy max-w-xl",
					children: "Not sure where your idea sits? Send us the reference and we'll tell you honestly which style — and which artist — it belongs to."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					className: "btn-accent mt-10",
					children: "Start a consultation"
				})
			]
		})]
	})] });
}
//#endregion
export { StylesPage as component };
