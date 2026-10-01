import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-CxKXeXMs.js
var $$splitComponentImporter = () => import("./book-MlwmvUXA.mjs");
var Route = createFileRoute("/book")({
	validateSearch: (search) => ({ artist: typeof search["artist"] === "string" ? search["artist"] : void 0 }),
	head: () => ({ meta: [
		{ title: "Book a Session — NOIR INK Berlin" },
		{
			name: "description",
			content: "Request a tattoo consultation at Noir Ink Berlin. Tell us your idea, placement, size and preferred artist — we reply within two working days."
		},
		{
			property: "og:title",
			content: "Book a Session — NOIR INK Berlin"
		},
		{
			property: "og:description",
			content: "Request a consultation with one of our six resident artists in Berlin."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
