import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CkUYUqMx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/spotlight-CP4737yH.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ index, label, title, align = "left", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [
			(index || label) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "fade",
				className: "mb-7 flex items-center gap-4",
				children: [index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label !text-accent",
					children: index
				}), label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label",
					children: label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "clip",
				as: "h2",
				className: "display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem]",
				children: title
			}),
			children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "up",
				delay: 160,
				className: "body-copy mt-8 max-w-xl",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "line",
				delay: 260,
				className: "hairline mt-12"
			})
		]
	});
}
var spotlight_default = "/assets/spotlight-jbp3Xwms.jpg";
//#endregion
export { spotlight_default as n, SectionHeading as t };
