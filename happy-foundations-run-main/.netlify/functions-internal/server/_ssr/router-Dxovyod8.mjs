import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as navLinks, c as studio, t as Reveal } from "./Reveal-CkUYUqMx.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "./book-CxKXeXMs.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dxovyod8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-FyuquP46.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-700 ${scrolled ? "bg-background/90 py-4 backdrop-blur-md md:py-5" : "bg-transparent py-6 md:py-9"}`,
		style: { transitionTimingFunction: "var(--ease-editorial)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1560px] items-center justify-between px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-baseline gap-3",
					"aria-label": `${studio.name} home`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display text-xl tracking-[0.18em] md:text-2xl",
						children: "NOIR"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label !text-foreground/70 !tracking-[0.42em]",
						children: "INK"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-10 lg:flex",
					"aria-label": "Main",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "label link-reveal hover:!text-foreground data-[status=active]:!text-foreground",
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "label link-reveal hidden !text-accent hover:!text-accent lg:inline-block",
						children: "Book a session"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(true),
						className: "label link-reveal lg:hidden",
						"aria-label": "Open menu",
						children: "Menu"
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-0 z-[60] bg-background transition-[opacity,clip-path] duration-[900ms] lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
		style: {
			transitionTimingFunction: "var(--ease-editorial)",
			clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)"
		},
		"aria-hidden": !open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col px-6 pb-12 pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display text-xl tracking-[0.18em]",
						children: "NOIR INK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						className: "label",
						"aria-label": "Close menu",
						children: "Close"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-auto flex flex-col gap-1",
					"aria-label": "Mobile",
					children: navLinks.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "display border-b border-border py-5 text-[3rem] leading-none transition-[color,transform] duration-700 hover:text-accent",
						style: {
							transitionTimingFunction: "var(--ease-editorial)",
							transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
							opacity: open ? 1 : 0,
							transform: open ? "none" : "translateY(1.5rem)"
						},
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "btn-accent w-full justify-center",
						children: "Book a session"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "label mt-8",
						children: [
							studio.instagram,
							" — ",
							studio.email
						]
					})]
				})
			]
		})
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "clip",
					as: "h2",
					className: "display text-[2.6rem] sm:text-[4rem] lg:text-[5.4rem]",
					children: [
						"Let's make",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"something permanent."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 160,
					className: "mt-12 block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "btn-accent",
						children: "Book a session"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mb-5",
							children: "Studio"
						}), studio.address.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy text-sm",
							children: line
						}, line))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mb-5",
							children: "Hours"
						}), studio.hours.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-copy text-sm",
							children: line
						}, line))] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label mb-5",
								children: "Contact"
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-copy mt-2 text-sm",
								children: studio.instagram
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mb-5",
							children: "Pages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex flex-col gap-2",
							"aria-label": "Footer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "body-copy link-reveal w-fit text-sm",
									children: "Home"
								}),
								navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									className: "body-copy link-reveal w-fit text-sm",
									children: link.label
								}, link.to)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/book",
									className: "body-copy link-reveal w-fit text-sm",
									children: "Book"
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					className: "mt-24 block overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"aria-hidden": "true",
						className: "display select-none whitespace-nowrap text-center text-[clamp(3.4rem,12.5vw,12rem)] leading-none text-foreground/[0.07]",
						children: "NOIR INK"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "label",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							studio.name
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "label",
						children: ["Berlin — Est. ", studio.established]
					})]
				})
			]
		})
	});
}
/** Small circular cursor that shows a label over elements with [data-cursor]. */
function CustomCursor() {
	const dot = (0, import_react.useRef)(null);
	const [label, setLabel] = (0, import_react.useState)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(pointer: fine)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		let target = {
			x: -100,
			y: -100
		};
		let current = {
			x: -100,
			y: -100
		};
		const render = () => {
			current.x += (target.x - current.x) * .18;
			current.y += (target.y - current.y) * .18;
			if (dot.current) dot.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
			frame = requestAnimationFrame(render);
		};
		const onMove = (e) => {
			target = {
				x: e.clientX,
				y: e.clientY
			};
			setActive(true);
			const el = e.target?.closest?.("[data-cursor]");
			setLabel(el?.dataset["cursor"] ?? null);
		};
		const onLeave = () => setActive(false);
		window.addEventListener("mousemove", onMove);
		document.addEventListener("mouseleave", onLeave);
		frame = requestAnimationFrame(render);
		return () => {
			window.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseleave", onLeave);
			cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		"aria-hidden": "true",
		className: "pointer-events-none fixed left-0 top-0 z-[80] hidden items-center justify-center rounded-full border border-foreground/60 text-[0.5rem] uppercase tracking-[0.2em] transition-[width,height,background-color,opacity,color] duration-500 lg:flex",
		style: {
			transitionTimingFunction: "var(--ease-editorial)",
			width: label ? 84 : 10,
			height: label ? 84 : 10,
			opacity: active ? label ? 1 : .55 : 0,
			backgroundColor: label ? "var(--color-foreground)" : "transparent",
			color: "var(--color-primary-foreground)",
			mixBlendMode: label ? "normal" : "difference"
		},
		children: label
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label !text-accent",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-6 text-[3rem]",
					children: "This page was never inked."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-line",
						children: "Back home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-[2.4rem]",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body-copy mt-6",
					children: "Something went wrong on our end. You can try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-line",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "NOIR INK — Contemporary Tattoo Studio in Berlin" },
			{
				name: "description",
				content: "Noir Ink is a six-artist tattoo studio in Berlin working in blackwork, Japanese, fine line and realism. Custom work, by appointment."
			},
			{
				name: "author",
				content: "Noir Ink"
			},
			{
				property: "og:title",
				content: "NOIR INK — Contemporary Tattoo Studio in Berlin"
			},
			{
				property: "og:description",
				content: "Custom tattoo work by six resident artists in Berlin. Consultation, design and sessions by appointment."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&family=Jost:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'/>"
			},
			{
				rel: "shortcut icon",
				href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'/>"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "auto"
		});
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "page-transition min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}, pathname),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-D0QF_mfA.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "NOIR INK — Contemporary Tattoo Studio in Berlin" },
		{
			name: "description",
			content: "Custom tattoo work by six resident artists in Berlin. Blackwork, Japanese, fine line, realism and more — by appointment only."
		},
		{
			property: "og:title",
			content: "NOIR INK — Contemporary Tattoo Studio in Berlin"
		},
		{
			property: "og:description",
			content: "Six resident artists. Custom work, designed for the body it lives on."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./artists-OsWyphIt.mjs");
var Route$4 = createFileRoute("/artists")({
	head: () => ({ meta: [
		{ title: "Artists — NOIR INK Berlin" },
		{
			name: "description",
			content: "Meet the six resident tattoo artists at Noir Ink Berlin: blackwork, Japanese, fine line, realism, neo traditional and lettering specialists."
		},
		{
			property: "og:title",
			content: "Artists — NOIR INK Berlin"
		},
		{
			property: "og:description",
			content: "Six resident artists, each with their own book and their own way of working."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./journal-dy9l2u3E.mjs");
var Route$3 = createFileRoute("/journal")({
	head: () => ({ meta: [
		{ title: "Journal — NOIR INK Berlin" },
		{
			name: "description",
			content: "Notes from the Noir Ink studio: choosing a tattoo style, the healing process, blackwork design and life behind the needle."
		},
		{
			property: "og:title",
			content: "Journal — NOIR INK Berlin"
		},
		{
			property: "og:description",
			content: "Writing about process, healing and the decisions behind a piece."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./studio-BrAl0Wvw.mjs");
var Route$2 = createFileRoute("/studio")({
	head: () => ({ meta: [
		{ title: "The Studio — NOIR INK Berlin" },
		{
			name: "description",
			content: "Inside Noir Ink: a six-artist tattoo studio in Berlin. Our process, hygiene standards, opening hours and how to find us."
		},
		{
			property: "og:title",
			content: "The Studio — NOIR INK Berlin"
		},
		{
			property: "og:description",
			content: "Six artists, one room, no walk-in volume. Here's how we work."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./styles-DgIyjjkj.mjs");
var Route$1 = createFileRoute("/styles")({
	head: () => ({ meta: [
		{ title: "Tattoo Styles — NOIR INK Berlin" },
		{
			name: "description",
			content: "Eight tattoo styles we work in at Noir Ink Berlin: blackwork, Japanese, fine line, realism, ornamental, neo traditional, lettering and abstract."
		},
		{
			property: "og:title",
			content: "Tattoo Styles — NOIR INK Berlin"
		},
		{
			property: "og:description",
			content: "Eight directions we work in. Most pieces end up somewhere between two of them."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work-C5XO-pXI.mjs");
var Route = createFileRoute("/work")({
	head: () => ({ meta: [
		{ title: "Selected Work — NOIR INK Tattoo Portfolio" },
		{
			name: "description",
			content: "A portfolio of recent tattoo work from Noir Ink Berlin: blackwork, Japanese, fine line, realism, ornamental, lettering and abstract pieces."
		},
		{
			property: "og:title",
			content: "Selected Work — NOIR INK Tattoo Portfolio"
		},
		{
			property: "og:description",
			content: "Recent tattoo work from the Noir Ink studio, filterable by style."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	ArtistsRoute: Route$4.update({
		id: "/artists",
		path: "/artists",
		getParentRoute: () => Route$6
	}),
	BookRoute: Route$7.update({
		id: "/book",
		path: "/book",
		getParentRoute: () => Route$6
	}),
	JournalRoute: Route$3.update({
		id: "/journal",
		path: "/journal",
		getParentRoute: () => Route$6
	}),
	StudioRoute: Route$2.update({
		id: "/studio",
		path: "/studio",
		getParentRoute: () => Route$6
	}),
	StylesRoute: Route$1.update({
		id: "/styles",
		path: "/styles",
		getParentRoute: () => Route$6
	}),
	WorkRoute: Route.update({
		id: "/work",
		path: "/work",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
