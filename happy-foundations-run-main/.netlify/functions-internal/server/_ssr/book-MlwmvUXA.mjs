import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as studio, d as styles, n as artists, o as processSteps, t as Reveal } from "./Reveal-CkUYUqMx.mjs";
import { t as PageHeader } from "./PageHeader-B3OGy_bu.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./book-CxKXeXMs.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-MlwmvUXA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var booking_bg_default = "/assets/booking-bg-BN5MqhJk.jpg";
var fieldClass = "w-full border-b border-input bg-transparent py-4 text-base font-light text-foreground outline-none transition-colors duration-500 placeholder:text-subtle focus:border-accent";
function BookPage() {
	const { artist } = Route.useSearch();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	function handleSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const idea = String(data.get("idea") ?? "").trim();
		if (!name || !email || !idea) {
			toast.error("Please add your name, email and a short description of the idea.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("That email address doesn't look right.");
			return;
		}
		setSubmitting(true);
		window.setTimeout(() => {
			setSubmitting(false);
			setSent(true);
			form.reset();
			toast.success("Request received — we'll reply within two working days.");
		}, 600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		label: "Booking",
		title: "Tell us what you want to carry.",
		children: "Every tattoo starts with a consultation. Fill this in with as much detail as you have — rough ideas are welcome. We reply within two working days."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-12 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					className: "border border-border-strong p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label !text-accent",
							children: "Request sent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-6 text-[2.4rem]",
							children: "Thank you — we have it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "body-copy mt-6",
							children: [
								"Your artist will come back to you at the email you gave us, usually within two working days. If it's urgent, call ",
								studio.phone,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSent(false),
								className: "btn-line",
								children: "Send another"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work",
								className: "btn-accent",
								children: "Browse the work"
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					noValidate: true,
					className: "flex flex-col gap-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "label mb-3 block",
								children: "Your name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								name: "name",
								className: fieldClass,
								placeholder: "Full name"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "label mb-3 block",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								type: "email",
								className: fieldClass,
								placeholder: "you@email.com"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "artist",
								className: "label mb-3 block",
								children: "Preferred artist"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "artist",
								name: "artist",
								defaultValue: artist ?? "",
								className: `${fieldClass} [&>option]:bg-surface`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "No preference"
								}), artists.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: a.slug,
									children: [
										a.name,
										" — ",
										a.specialty
									]
								}, a.slug))]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "style",
								className: "label mb-3 block",
								children: "Style"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "style",
								name: "style",
								className: `${fieldClass} [&>option]:bg-surface`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Not sure yet"
								}), styles.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.slug,
									children: s.name
								}, s.slug))]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "placement",
									className: "label mb-3 block",
									children: "Placement"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "placement",
									name: "placement",
									className: fieldClass,
									placeholder: "Forearm, ribs…"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "size",
									className: "label mb-3 block",
									children: "Approx. size"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "size",
									name: "size",
									className: fieldClass,
									placeholder: "12 cm"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "date",
									className: "label mb-3 block",
									children: "Earliest date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "date",
									name: "date",
									type: "date",
									className: fieldClass
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "idea",
							className: "label mb-3 block",
							children: "The idea"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "idea",
							name: "idea",
							rows: 5,
							className: `${fieldClass} resize-none`,
							placeholder: "Describe the piece, references, and anything the artist should know."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: submitting,
								className: "btn-accent disabled:opacity-50",
								children: submitting ? "Sending…" : "Send request"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label",
								children: "First consultation is free"
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "zoom",
						className: "image-frame block aspect-[4/5] w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: booking_bg_default,
							alt: "Close-up of a tattoo session in progress at Noir Ink",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label mb-6",
							children: "What happens next"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "flex flex-col",
							children: processSteps.slice(0, 3).map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-t border-border py-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label !text-accent",
										children: step.number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "display mt-3 text-xl",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "body-copy mt-2 text-sm",
										children: step.copy
									})
								]
							}, step.number))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label mb-4",
								children: "Or reach us directly"
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
							})
						]
					})
				]
			})]
		})
	})] });
}
//#endregion
export { BookPage as component };
