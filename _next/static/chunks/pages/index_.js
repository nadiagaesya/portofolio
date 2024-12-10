(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return s(7419)
        }
        ])
    },
    3229: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return l
            }
        });
        var n = s(5893)
          , i = s(5078)
          , a = s(7294);
        function l(e) {
            let {data: t, height: s, width: l, onClick: c, isHover: o=!0, zIndex: r} = e
              , [d,h] = (0,
            a.useState)(!1);
            return (0,
            a.useEffect)( () => {
                window.innerWidth < 400 && h(!0)
            }
            , []),
            (0,
            n.jsxs)("div", {
                className: "relative",
                children: [d ? (0,
                n.jsxs)("button", {
                    className: "card-portfolio-wrapper relative",
                    id: t.slug,
                    style: {
                        height: s || "100%",
                        width: null != l ? l : "100%"
                    },
                    onClick: () => c(t.slug),
                    children: [(0,
                    n.jsx)("div", {
                        style: {
                            backgroundImage: "url('".concat(t.image.src, "')")
                        },
                        className: "card-portfolio flex items-end justify-center text-center",
                        children: (0,
                        n.jsxs)("div", {
                            className: "py-10 px-5 text-white relative z-[1]",
                            children: [(0,
                            n.jsx)("div", {
                                className: "".concat(o ? "title text-2xl" : "text-3xl", " font-semibold"),
                                children: t.title
                            }), (0,
                            n.jsx)("div", {
                                className: "".concat(o ? "tech" : "opacity-70", " text-sm mt-2"),
                                children: t.effort.map( (e, s) => s + 1 === t.effort.length ? e : e + ", ")
                            })]
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "".concat(o ? "layer z-0" : "layer-non-hover")
                    })]
                }) : (0,
                n.jsxs)(i.Z, {
                    component: "button",
                    rotateXMax: 10,
                    rotateYMax: 10,
                    highlight: !1,
                    className: "card-portfolio-wrapper relative",
                    id: t.slug,
                    onClick: () => c(t.slug),
                    style: {
                        height: null != s ? s : "100%",
                        width: null != l ? l : "100%",
                        zIndex: r + ""
                    },
                    children: [(0,
                    n.jsx)("div", {
                        style: {
                            backgroundImage: "url('".concat(t.image.src, "')")
                        },
                        className: "card-portfolio flex items-end justify-center text-center",
                        children: (0,
                        n.jsxs)("div", {
                            className: "py-10 px-5 text-white relative z-[1]",
                            children: [(0,
                            n.jsx)("div", {
                                className: "".concat(o ? "title text-2xl" : "text-3xl", " font-semibold"),
                                children: t.title
                            }), (0,
                            n.jsx)("div", {
                                className: "".concat(o ? "tech" : "opacity-70", " text-sm mt-2"),
                                children: t.effort.map( (e, s) => s + 1 === t.effort.length ? e : e + ", ")
                            })]
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "".concat(o ? "layer z-0" : "layer-non-hover")
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "card-shadow",
                    style: {
                        backgroundImage: "url('".concat(t.image.src, "')")
                    }
                })]
            })
        }
    },
    7419: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return g
            }
        });
        var n = s(5893)
          , i = s(7294)
          , a = s(792)
          , l = s(3093)
          , c = s(4463)
          , o = s(7048)
          , r = s(1106)
          , d = s(6793)
          , h = s(3229);
        function x(e) {
            let {refrence: t, setIsOpenDetail: s} = e
              , {handleNavigate: a} = (0,
            i.useContext)(r.v)
              , [l,c] = (0,
            i.useState)(!1)
              , [o,x] = (0,
            i.useState)(null);
            function u(e) {
                s(!0),
                a("/portfolio/".concat(e))
            }
            return (0,
            i.useEffect)( () => {
                window.innerWidth < 400 && c(!0),
                x(screen.height)
            }
            , []),
            l ? (0,
            n.jsxs)("div", {
                className: "relative",
                children: [(0,
                n.jsx)("div", {
                    className: "absolute -top-16 text-center font-bold w-full text-3xl",
                    children: "Project Gallery"
                }), (0,
                n.jsx)("div", {
                    className: "flex gap-12 overflow-x-scroll whitespace-nowrap scroll-smooth w-full px-8 mb-12",
                    children: d.Z.map(e => (0,
                    n.jsx)(h.Z, {
                        width: "300px",
                        data: e,
                        height: "420px",
                        onClick: u
                    }, e.id))
                })]
            }) : (0,
            n.jsx)("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-24 px-16 sm:px-24 lg:px-64 mb-12 ",
                ref: t,
                children: d.Z.map(e => (0,
                n.jsx)(h.Z, {
                    data: e,
                    height: o && o > 1e3 ? o / 2 + "px" : "420px",
                    onClick: u
                }, e.id))
            })
        }
        var u = s(5499)
          , m = s(5700)
          , f = s(9206);
        function p() {
            let e = (0,
            i.useRef)(null)
              , [t,s] = (0,
            i.useState)(!1)
              , [d,h] = (0,
            i.useState)(!1)
              , [p,v] = (0,
            i.useState)(0);
            function j(e) {
                v(window.scrollY)
            }
            return (0,
            i.useEffect)( () => {
                window.addEventListener("scroll", j)
            }
            , []),
            (0,
            n.jsxs)(r.Z, {
                children: [(0,
                n.jsx)(u.Z, {
                    onClick: () => window.scrollTo({
                        top: 500,
                        left: 0,
                        behavior: "smooth"
                    }),
                    show: p < 100 && !t
                }), (0,
                n.jsx)(a.Z, {
                    isOpenMenu: t,
                    handleClickMenu: function() {
                        s(e => !e)
                    }
                }), (0,
                n.jsx)(o.Z, {
                    isOpenMenu: t,
                    scrollY: p,
                    backgroundImage: "/assets/earth-render.png",
                    title: "Unlocking Creativity through Digital Solutions",
                    subTitle: "Pangidoan Nsh | Software Dev Enthusiast"
                }), (0,
                n.jsx)(l.Z, {
                    isOpen: t,
                    setIsOpen: s
                }), (0,
                n.jsx)("div", {
                    className: "fixed -z-10 inset-0 duration-500 ".concat(p > 200 ? "bg-black" : "")
                }), (0,
                n.jsx)("div", {
                    className: "h-[50vh]"
                }), (0,
                n.jsxs)("div", {
                    className: "relative min-h-screen ".concat(p > 50 ? "z-40" : "-z-30"),
                    children: [(0,
                    n.jsx)(c.u, {
                        appear: !0,
                        as: i.Fragment,
                        show: !t && !d,
                        children: (0,
                        n.jsx)("div", {
                            className: "pt-52",
                            children: (0,
                            n.jsx)(c.u.Child, {
                                as: "div",
                                enter: "ease-out duration-[400ms] delay-500",
                                enterFrom: "opacity-0 translate-y-40",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0 -translate-y-40",
                                className: "text-white relative",
                                children: (0,
                                n.jsx)(x, {
                                    refrence: e,
                                    setIsOpenDetail: h
                                })
                            })
                        })
                    }), (0,
                    n.jsx)(m.Z, {
                        show: !t && !d
                    })]
                }), (0,
                n.jsx)(f.Z, {
                    show: p > 500 && !t,
                    handleScrollUp: () => window.scrollTo({
                        top: 500,
                        left: 0,
                        behavior: "smooth"
                    })
                })]
            })
        }
        var v = s(9008)
          , j = s.n(v);
        function g() {
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(j(), {
                    children: [(0,
                    n.jsx)("title", {
                        children: "Portfolio | Pangidoan NSH"
                    }), (0,
                    n.jsx)("meta", {
                        name: "description",
                        content: "pangidoan nsh portfolio"
                    }), (0,
                    n.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })]
                }), (0,
                n.jsx)("main", {
                    children: (0,
                    n.jsx)(p, {})
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [802, 978, 78, 739, 774, 888, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
