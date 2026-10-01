import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as styles, r as featured, s as socialGrid, t as Reveal } from "./Reveal-CkUYUqMx.mjs";
import { t as PageHeader } from "./PageHeader-B3OGy_bu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-C5XO-pXI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var gallery = [...featured, ...socialGrid];
function WorkPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = (0, import_react.useMemo)(() => filter === "All" ? gallery : gallery.filter((g) => g.style === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		label: "Portfolio",
		title: "A record of hours.",
		children: "Pieces from the last two years, photographed in the studio the day they were finished. Filter by style to narrow it down."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-x-8 gap-y-4",
				children: ["All", ...styles.map((s) => s.name)].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(name),
					className: `label link-reveal ${filter === name ? "!text-accent" : "hover:!text-foreground"}`,
					children: name
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "zoom",
					delay: i % 3 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						"data-cursor": "View",
						className: "image-frame group relative block w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: `${item.style} tattoo by ${item.artist}`,
							loading: "lazy",
							className: `w-full object-cover ${i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label !text-accent",
								children: item.style
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display mt-2 text-2xl",
								children: item.artist
							})]
						})]
					})
				}, `${item.style}-${i}`))
			}),
			items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body-copy mt-16",
				children: "No pieces in this style yet — check back soon."
			})
		]
	})] });
}
//#endregion
export { WorkPage as component };
