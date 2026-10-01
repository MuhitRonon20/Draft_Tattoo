import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as journal, t as Reveal } from "./Reveal-CkUYUqMx.mjs";
import { t as PageHeader } from "./PageHeader-B3OGy_bu.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-dy9l2u3E.js
var import_jsx_runtime = require_jsx_runtime();
function JournalPage() {
	const [lead, ...rest] = journal;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		label: "Journal",
		title: "Notes from the room.",
		children: "Writing about process, healing and the decisions behind a piece — from the artists who make them."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40",
		children: [
			lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "zoom",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					"data-cursor": "Read",
					className: "group grid gap-10 lg:grid-cols-12 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "image-frame aspect-[16/10] w-full lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: lead.image,
							alt: lead.title,
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label !text-accent",
										children: "Latest"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label",
										children: lead.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label",
										children: lead.readingTime
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display mt-6 text-[2.6rem] transition-colors duration-700 group-hover:text-accent md:text-[3.4rem]",
								children: lead.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-6",
								children: lead.excerpt
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-x-8 gap-y-16 md:grid-cols-3",
				children: rest.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: i * 110,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"data-cursor": "Read",
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "image-frame aspect-[4/3] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: post.image,
									alt: post.title,
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label",
									children: post.date
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label",
									children: post.readingTime
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-4 text-[1.9rem] transition-colors duration-700 group-hover:text-accent",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-4 text-sm",
								children: post.excerpt
							})
						]
					})
				}, post.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				variant: "up",
				delay: 160,
				className: "mt-24 block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mb-12" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy max-w-xl",
						children: "Read something that matches the piece you have in mind? Bring it to the consultation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "btn-accent mt-10",
						children: "Book a session"
					})
				]
			})
		]
	})] });
}
//#endregion
export { JournalPage as component };
