import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as studio, l as studio_interior_default, o as processSteps, t as Reveal, u as studio_tools_default } from "./Reveal-CkUYUqMx.mjs";
import { t as PageHeader } from "./PageHeader-B3OGy_bu.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as spotlight_default, t as SectionHeading } from "./spotlight-CP4737yH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-BrAl0Wvw.js
var import_jsx_runtime = require_jsx_runtime();
var principles = [
	{
		title: "Single-use everything",
		copy: "Needles, tubes, ink caps and razors are sterile, single-use and opened in front of you."
	},
	{
		title: "No walk-in volume",
		copy: "Four sessions a day across the whole studio. Nobody is rushed, including the artist."
	},
	{
		title: "Drawn for you",
		copy: "We don't tattoo other artists' designs. Every piece is drawn for the body it lives on."
	},
	{
		title: "Aftercare included",
		copy: "Written aftercare, a two-week check-in and a free touch-up within the first year."
	}
];
function StudioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHeader, {
			label: "The studio",
			title: "We follow the story, not the skin.",
			children: [
				"Noir Ink opened in ",
				studio.established,
				" in a former workshop in Berlin. Concrete, black steel and warm low light — built so a nine-hour session still feels calm."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1560px] px-6 pb-24 md:px-10 md:pb-36",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "zoom",
				className: "image-frame block aspect-[16/9] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: studio_interior_default,
					alt: "Interior of the Noir Ink studio: concrete walls, black steel and warm low light",
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "zoom",
					delay: 120,
					className: "image-frame block aspect-[4/3] w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: studio_tools_default,
						alt: "Tattoo machine, needles and ink on a steel tray",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "zoom",
					delay: 220,
					className: "image-frame block aspect-[4/3] w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: spotlight_default,
						alt: "An artist drawing a design under a single warm lamp",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-24 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1560px] px-6 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "01",
					label: "How we work",
					title: "Four things we don't bend on.",
					children: "The details that decide whether a tattoo still reads well in fifteen years."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-px bg-border sm:grid-cols-2",
					children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						delay: i * 90,
						className: "bg-surface p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label !text-accent",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-6 text-[1.9rem]",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-4 text-sm",
								children: p.copy
							})
						]
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "02",
				label: "Process",
				title: "From idea to healed skin.",
				children: "Five steps, no surprises."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-20 flex flex-col",
				children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-6 border-t border-border py-10 md:grid-cols-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label !text-accent md:col-span-2",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-[2rem] md:col-span-4",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy text-sm md:col-span-6",
								children: step.copy
							})
						]
					})
				}, step.number))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mb-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mb-5",
							children: "Find us"
						}), studio.address.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy text-sm",
							children: line
						}, line))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						delay: 100,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mb-5",
							children: "Opening hours"
						}), studio.hours.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy text-sm",
							children: line
						}, line))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "up",
						delay: 200,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label mb-5",
								children: "Get in touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${studio.email}`,
								className: "body-copy link-reveal block text-sm",
								children: studio.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${studio.phone.replace(/\s/g, "")}`,
								className: "body-copy link-reveal mt-2 block text-sm",
								children: studio.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								className: "btn-accent mt-8",
								children: "Book a session"
							})
						]
					})
				]
			})]
		})
	] });
}
//#endregion
export { StudioPage as component };
