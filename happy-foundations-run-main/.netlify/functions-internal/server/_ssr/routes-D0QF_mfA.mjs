import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as studio, d as styles, i as journal, l as studio_interior_default, n as artists, o as processSteps, r as featured, t as Reveal, u as studio_tools_default } from "./Reveal-CkUYUqMx.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as spotlight_default, t as SectionHeading } from "./spotlight-CP4737yH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D0QF_mfA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_artist_default = "/assets/hero-artist-Cgt0Ckgl.jpg";
/**
* Smooth, rAF-throttled parallax. Returns a ref to attach to the moving layer.
* `speed` is the fraction of the element's travel through the viewport.
*/
function useParallax(speed = .12, scale = 0) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const rect = node.getBoundingClientRect();
			const vh = window.innerHeight;
			if (rect.bottom < -vh || rect.top > vh * 2) return;
			const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
			const y = progress * speed * 100;
			const s = scale ? 1 + Math.abs(progress) * scale : 1;
			node.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [speed, scale]);
	return ref;
}
var headline = [
	"Ink is",
	"a form of",
	"memory."
];
function Hero() {
	const [stage, setStage] = (0, import_react.useState)(0);
	const imageRef = useParallax(.16, .04);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setStage(9);
			return;
		}
		const timers = [
			200,
			900,
			1500,
			2100,
			2700,
			3200
		].map((ms, i) => window.setTimeout(() => setStage(i + 1), ms));
		return () => timers.forEach(window.clearTimeout);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grain relative h-[100svh] min-h-[620px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 transition-[clip-path,opacity] duration-[1600ms]",
			style: {
				transitionTimingFunction: "var(--ease-editorial)",
				clipPath: stage >= 2 ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
				opacity: stage >= 2 ? 1 : 0
			},
			children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: imageRef,
				className: "absolute inset-[-8%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_artist_default,
					alt: "Tattoo artist working on a client's forearm in a dark studio",
					width: 1920,
					height: 1200,
					className: "h-full w-full object-cover transition-transform duration-[2600ms]",
					style: {
						transitionTimingFunction: "var(--ease-editorial)",
						transform: stage >= 2 ? "scale(1)" : "scale(1.05)"
					}
				})
			}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/55 to-background/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" })
			]
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 flex items-center justify-center transition-opacity duration-1000",
			style: { opacity: stage === 1 ? 1 : 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "display text-2xl tracking-[0.4em]",
				children: "NOIR INK"
			})
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex h-full max-w-[1560px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28",
			children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "label mb-8 max-w-full transition-[opacity,transform] duration-1000 max-sm:text-[0.6rem] max-sm:tracking-[0.18em]",
				style: {
					transitionTimingFunction: "var(--ease-editorial)",
					opacity: stage >= 4 ? 1 : 0,
					transform: stage >= 4 ? "none" : "translateY(1rem)"
				},
				children: [
					studio.tagline,
					"  ",
					studio.established
				]
			}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display max-w-[15ch] text-[clamp(3rem,11vw,9.5rem)] md:ml-[6%]",
				children: headline.map((line, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("span", {
					className: "block overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block transition-[transform,opacity] duration-[1200ms]",
						style: {
							transitionTimingFunction: "var(--ease-editorial)",
							transitionDelay: `${i * 150}ms`,
							transform: stage >= 3 ? "none" : "translateY(105%)",
							opacity: stage >= 3 ? 1 : 0
						},
						children: line
					})
				}, line))
			}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-wrap items-center gap-8 transition-[opacity,transform] duration-1000 md:ml-[6%]",
				style: {
					transitionTimingFunction: "var(--ease-editorial)",
					opacity: stage >= 5 ? 1 : 0,
					transform: stage >= 5 ? "none" : "translateY(1.25rem)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/book",
					className: "btn-line",
					children: "Book a session"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work",
					className: "label link-reveal hover:!text-foreground",
					children: "See the work"
				})]
			})
			]
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-8 right-6 flex items-center gap-4 transition-opacity duration-1000 md:right-10",
			style: { opacity: stage >= 6 ? 1 : 0 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label",
				children: "Scroll to explore"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-10 w-px bg-border-strong" })]
		})
		]
	});
}
function StudioIntro() {
	const smallRef = useParallax(.1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative mx-auto max-w-[1560px] px-6 py-28 md:px-10 md:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-12 lg:gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 lg:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "fade",
					className: "label mb-8 block",
					children: "01 / The studio"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "clip",
					as: "h2",
					className: "display text-[2.4rem] sm:text-[3.2rem] lg:text-[3.9rem]",
					children: [
						"We don't follow",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"the skin.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "We follow the story."
						})
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "line",
					delay: 200,
					className: "hairline my-12 max-w-[14rem]"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 120,
					className: "body-copy max-w-md",
					children: "Every piece begins as a conversation, not a catalogue. We design around the individual — their proportions, their history, the way they carry themselves — and then we commit to the drawing."
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 220,
					className: "body-copy mt-6 max-w-md",
					children: "Six artists, one room, no walk-in volume. We take fewer clients so each piece gets the hours it needs."
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 320,
					className: "mt-12 block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/studio",
						className: "label link-reveal hover:!text-foreground",
						children: "Inside the studio"
					})
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "zoom",
					className: "image-frame block aspect-[4/3] w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: studio_interior_default,
						alt: "Interior of the Noir Ink studio: concrete walls, black steel and warm low light",
						width: 1600,
						height: 1104,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-10 sm:flex-row sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: smallRef,
						className: "w-full sm:w-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: "zoom",
							delay: 140,
							className: "image-frame block aspect-[4/5] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: studio_tools_default,
								alt: "Tattoo machine, needles and ink on a steel tray",
								width: 1200,
								height: 1504,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid w-full grid-cols-2 gap-8 sm:w-1/2",
						children: [
							["Est.", "2014"],
							["Artists", "Six"],
							["Sessions a day", "Four"],
							["Touch-up", "Included"]
						].map(([k, v], i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(Reveal, {
							variant: "up",
							delay: i * 90,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "label mb-3",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "display text-2xl",
								children: v
							})]
						}, k))
					})]
				})]
			})]
		})
	});
}
function FeaturedWork({ limit = 8 }) {
	const items = featured.slice(0, limit);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "02",
			label: "Selected work",
			title: "A record of hours.",
			children: "Pieces from the last two years, photographed in the studio the day they were finished."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6",
			children: items.map((item, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
				variant: "zoom",
				delay: i % 3 * 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work",
					"data-cursor": "View",
					className: "image-frame group relative block w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: `${item.style} tattoo by ${item.artist}`,
						loading: "lazy",
						className: `w-full object-cover ${item.span === "tall" ? "aspect-[4/5]" : "aspect-square"}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label !text-accent",
							children: item.style
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display mt-2 text-2xl",
							children: item.artist
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label mt-3 !text-foreground/80",
							children: "View work"
						})
						]
					})]
				})
			}, `${item.style}-${i}`))
		})]
	});
}
function StyleExplorer() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const active = styles[activeIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1560px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "03",
				label: "Styles",
				title: "Find your language.",
				children: "Eight directions we work in. Most pieces end up somewhere between two of them."
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 hidden gap-16 lg:grid lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "lg:col-span-7",
					children: styles.map((style, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onMouseEnter: () => setActiveIndex(i),
							onFocus: () => setActiveIndex(i),
							onClick: () => setActiveIndex(i),
							"data-cursor": "Explore",
							className: "group flex w-full items-baseline justify-between gap-8 py-7 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display text-[2.8rem] leading-none transition-[color,transform] duration-700",
								style: {
									transitionTimingFunction: "var(--ease-editorial)",
									color: i === activeIndex ? "var(--color-foreground)" : "var(--color-subtle)",
									transform: i === activeIndex ? "translateX(1.25rem)" : "none"
								},
								children: style.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label shrink-0",
								children: String(i + 1).padStart(2, "0")
							})]
						})
					}, style.slug))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "image-frame sticky top-32 aspect-[4/5] w-full",
						children: styles.map((style, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("img", {
							src: style.image,
							alt: `${style.name} tattoo`,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms]",
							style: {
								transitionTimingFunction: "var(--ease-editorial)",
								opacity: i === activeIndex ? 1 : 0
							}
						}, style.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-8 max-w-sm",
						children: active.note
					})]
				})]
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 flex flex-col gap-16 lg:hidden",
				children: styles.map((style, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					delay: 40,
					children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "image-frame aspect-[4/5] w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: style.image,
							alt: `${style.name} tattoo`,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-baseline justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display text-[2.1rem]",
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
				}, style.slug))
			})
			]
		})
	});
}
function ArtistCard({ artist, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		variant: "zoom",
		delay: index % 3 * 120,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/artists",
			"data-cursor": "View",
			className: "group block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "image-frame aspect-[4/5] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: artist.image,
					alt: `Portrait of ${artist.name}, tattoo artist`,
					width: 1024,
					height: 1280,
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-start justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display text-[1.9rem] transition-transform duration-700 group-hover:translate-x-1",
						children: artist.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label mt-3 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
						children: artist.specialty
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label shrink-0",
					children: artist.location
				})]
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body-copy mt-4 text-sm",
				children: artist.bio
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label link-reveal mt-6 inline-block group-hover:!text-foreground",
				children: "View portfolio"
			})
			]
		})
	});
}
function ArtistCollection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "04",
			label: "Artists",
			title: "The hands behind the ink.",
			children: "Six resident artists. Each keeps their own book, their own waiting list, and their own way of working."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-3",
			children: artists.map((artist, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(ArtistCard, {
				artist,
				index: i
			}, artist.slug))
		})]
	});
}
function ArtistSpotlight() {
	const imgRef = useParallax(.18, .03);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grain relative h-[85svh] min-h-[560px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: imgRef,
			className: "absolute inset-[-10%]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: spotlight_default,
				alt: "Maya Kane drawing a tattoo design under a single warm lamp",
				width: 1920,
				height: 1088,
				loading: "lazy",
				className: "h-full w-full object-cover"
			})
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-l from-background via-background/60 to-background/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto flex h-full max-w-[1560px] items-center justify-end px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md",
				children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "fade",
					className: "label mb-6 block !text-accent",
					children: "Artist spotlight"
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "clip",
					as: "h2",
					className: "display text-[3rem] md:text-[4.2rem]",
					children: "Maya Kane"
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 140,
					className: "label mt-5 block",
					children: "Blackwork / Ornamental"
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "line",
					delay: 220,
					className: "hairline my-9 max-w-[10rem]"
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 200,
					className: "body-copy",
					children: "Maya opened Noir Ink in 2014 after eight years between Berlin and Osaka. She draws ornamental work freehand on the body, following muscle and bone rather than a flat template — which is why her pieces still read cleanly a decade later."
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 300,
					className: "mt-10 block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/artists",
						"data-cursor": "View",
						className: "btn-line",
						children: "View Maya's work"
					})
				})
				]
			})
		})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
		children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioIntro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedWork, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyleExplorer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtistCollection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtistSpotlight, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "05",
				label: "Process",
				title: "From idea to healed skin.",
				children: "Five steps, no surprises. The same for a palm-sized piece and a full backpiece."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5",
				children: processSteps.map((step, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "up",
					delay: i * 90,
					className: "bg-background p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label !text-accent",
						children: step.number
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display mt-6 text-2xl",
						children: step.title
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-copy mt-4 text-sm",
						children: step.copy
					})
					]
				}, step.number))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-24 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1560px] px-6 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					index: "06",
					label: "Journal",
					title: "Notes from the room.",
					children: "Writing about process, healing and the decisions behind a piece."
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-12 md:grid-cols-2",
					children: journal.slice(0, 2).map((post, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Reveal, {
						variant: "zoom",
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/journal",
							"data-cursor": "Read",
							className: "group block",
							children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "image-frame aspect-[16/10] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: post.image,
									alt: post.title,
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label",
									children: post.date
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label",
									children: post.readingTime
								})]
							}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-4 text-[2rem] transition-colors duration-700 group-hover:text-accent",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "up",
					delay: 200,
					className: "mt-16 block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/journal",
						className: "label link-reveal hover:!text-foreground",
						children: "Read the journal"
					})
				})
				]
			})
		})
		]
	});
}
//#endregion
export { Index as component };
