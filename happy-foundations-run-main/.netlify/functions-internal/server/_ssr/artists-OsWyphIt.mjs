import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as artists, t as Reveal } from "./Reveal-CkUYUqMx.mjs";
import { t as PageHeader } from "./PageHeader-B3OGy_bu.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/artists-OsWyphIt.js
var import_jsx_runtime = require_jsx_runtime();
function ArtistsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		label: "The team",
		title: "The hands behind the ink.",
		children: "Six resident artists. Each keeps their own book, their own waiting list, and their own way of working. Requests go directly to the artist you choose."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-24 md:gap-36",
			children: artists.map((artist, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `grid gap-10 lg:grid-cols-12 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "zoom",
					className: "image-frame block aspect-[4/5] w-full lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: artist.image,
						alt: `Portrait of ${artist.name}, tattoo artist at Noir Ink`,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 lg:col-start-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "fade",
							className: "label !text-accent",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "clip",
							as: "h2",
							className: "display mt-6 text-[2.6rem] md:text-[3.6rem]",
							children: artist.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							variant: "up",
							delay: 120,
							className: "label mt-5 block",
							children: [
								artist.specialty,
								" — ",
								artist.location
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "line",
							delay: 200,
							className: "hairline my-9 max-w-[12rem]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							delay: 180,
							className: "body-copy",
							children: artist.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "up",
							delay: 260,
							className: "mt-10 block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/book",
								search: { artist: artist.slug },
								className: "btn-line",
								children: ["Request ", artist.name.split(" ")[0]]
							})
						})
					]
				})]
			}, artist.slug))
		})
	})] });
}
//#endregion
export { ArtistsPage as component };
