import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CkUYUqMx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-B3OGy_bu.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ label, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-[1560px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-56",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "fade",
				className: "label mb-8 block !text-accent",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "clip",
				as: "h1",
				className: "display max-w-[16ch] text-[clamp(2.8rem,8vw,7rem)]",
				children: title
			}),
			children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "up",
				delay: 160,
				className: "body-copy mt-10 max-w-xl",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "line",
				delay: 260,
				className: "hairline mt-16"
			})
		]
	});
}
//#endregion
export { PageHeader as t };
