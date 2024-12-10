(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[34], {
    8802: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/portfolio/[slug]", function() {
            return i(5878)
        }
        ])
    },
    9206: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return s
            }
        });
        var n = i(5893)
          , a = i(1954);
        function s(e) {
            let {show: t, handleScrollUp: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)("button", {
                    className: "btn-bottombar fixed bottom-0 md:left-32 left-6 border-[2.5px] border-white \n            ".concat(t ? "z-40" : "-z-20", " mb-20\n            ").concat(t ? "scale-100" : "scale-0"),
                    children: [(0,
                    n.jsx)("span", {
                        className: "caption -rotate-90 -left-1",
                        children: "Filters"
                    }), (0,
                    n.jsx)(a.JO, {
                        icon: "material-symbols:more-vert",
                        className: "text-white"
                    })]
                }), (0,
                n.jsxs)("button", {
                    onClick: i,
                    className: "btn-bottombar fixed bottom-0 md:right-32 right-6 border-[2.5px]\n             border-white ".concat(t ? "z-40" : "-z-20", " mb-20\n            ").concat(t ? "scale-100" : "scale-0"),
                    children: [(0,
                    n.jsx)("span", {
                        className: "caption -rotate-90 w-max -left-1",
                        children: "Go Top"
                    }), (0,
                    n.jsx)(a.JO, {
                        icon: "ion:chevron-up",
                        className: "text-white"
                    })]
                })]
            })
        }
        i(7294)
    },
    3229: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(5893)
          , a = i(5078)
          , s = i(7294);
        function o(e) {
            let {data: t, height: i, width: o, onClick: r, isHover: l=!0, zIndex: c} = e
              , [d,p] = (0,
            s.useState)(!1);
            return (0,
            s.useEffect)( () => {
                window.innerWidth < 400 && p(!0)
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
                        height: i || "100%",
                        width: null != o ? o : "100%"
                    },
                    onClick: () => r(t.slug),
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
                                className: "".concat(l ? "title text-2xl" : "text-3xl", " font-semibold"),
                                children: t.title
                            }), (0,
                            n.jsx)("div", {
                                className: "".concat(l ? "tech" : "opacity-70", " text-sm mt-2"),
                                children: t.effort.map( (e, i) => i + 1 === t.effort.length ? e : e + ", ")
                            })]
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "".concat(l ? "layer z-0" : "layer-non-hover")
                    })]
                }) : (0,
                n.jsxs)(a.Z, {
                    component: "button",
                    rotateXMax: 10,
                    rotateYMax: 10,
                    highlight: !1,
                    className: "card-portfolio-wrapper relative",
                    id: t.slug,
                    onClick: () => r(t.slug),
                    style: {
                        height: null != i ? i : "100%",
                        width: null != o ? o : "100%",
                        zIndex: c + ""
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
                                className: "".concat(l ? "title text-2xl" : "text-3xl", " font-semibold"),
                                children: t.title
                            }), (0,
                            n.jsx)("div", {
                                className: "".concat(l ? "tech" : "opacity-70", " text-sm mt-2"),
                                children: t.effort.map( (e, i) => i + 1 === t.effort.length ? e : e + ", ")
                            })]
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "".concat(l ? "layer z-0" : "layer-non-hover")
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
    5700: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var n = i(5893)
          , a = i(747)
          , s = i(1954);
        function o(e) {
            let {show: t} = e;
            return (0,
            n.jsxs)("div", {
                className: "py-12 flex flex-col gap-6 justify-center items-center duration-300\n        ".concat(t ? "opacity-1" : "-translate-y-8 opacity-0"),
                children: [(0,
                n.jsxs)("div", {
                    className: "flex z-50 text-white gap-5  items-center",
                    children: [(0,
                    n.jsx)("a", {
                        href: a.Z,
                        target: "_blank",
                        children: (0,
                        n.jsx)(s.JO, {
                            icon: "fa-brands:linkedin-in",
                            className: "text-sm"
                        })
                    }), (0,
                    n.jsx)("a", {
                        href: a.C,
                        target: "_blank",
                        children: (0,
                        n.jsx)(s.JO, {
                            icon: "fa6-brands:instagram",
                            className: "text-sm"
                        })
                    })]
                }), (0,
                n.jsx)("span", {
                    className: "text-[10px] text-white/60 hover:text-white",
                    children: "Copyright \xa9 2023 Pangidoan Nugroho. All Rights Reserved."
                })]
            })
        }
        i(7294)
    },
    7048: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return r
            }
        });
        var n = i(5893)
          , a = i(7294)
          , s = i(4463)
          , o = i(990);
        function r(e) {
            let {isOpenMenu: t, scrollY: i, backgroundImage: r, title: l, subTitle: c} = e
              , d = (0,
            a.useRef)(null);
            return (0,
            a.useEffect)( () => {
                o.p8.set(d.current, {
                    x: 0,
                    y: 0,
                    scale: 1.1
                })
            }
            , []),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("div", {
                    onMouseMove: function(e) {
                        t || o.p8.to(d.current, {
                            duration: .3,
                            x: (window.innerWidth - 2 * e.clientX) / 40,
                            y: (window.innerWidth - 2 * e.clientY) / 40,
                            ease: "none",
                            stagger: .15
                        })
                    },
                    className: "fixed w-screen h-screen z-20"
                }), (0,
                n.jsxs)("div", {
                    children: [(0,
                    n.jsx)(s.u, {
                        as: a.Fragment,
                        show: !t,
                        children: (0,
                        n.jsx)(s.u.Child, {
                            as: "div",
                            enter: "ease-out duration-[400ms] delay-500",
                            enterFrom: "opacity-0 translate-y-40",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0 -translate-y-40",
                            className: "z-10 fixed w-screen h-screen text-white ",
                            children: (0,
                            n.jsxs)("div", {
                                className: "flex gap-4 flex-col px-6 justify-center items-center h-screen",
                                style: {
                                    translate: i > 50 ? "0 -".concat(i / 3.5, "px") : "0 0",
                                    opacity: i > 0 ? "".concat((200 - i) / i) : "1"
                                },
                                children: [(0,
                                n.jsx)("div", {
                                    className: "text-center text-5xl font-semibold sm:w-3/4 lg:w-1/2",
                                    children: l
                                }), (0,
                                n.jsx)("div", {
                                    className: "semi-white font-roboto font-light",
                                    children: c
                                })]
                            })
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "bg-hero-wrapper duration-1000 ".concat(t ? "scale-105" : "scale-100"),
                        children: (0,
                        n.jsx)("div", {
                            className: "bg-hero",
                            ref: d,
                            style: {
                                backgroundImage: "url('".concat(r, "')")
                            }
                        })
                    })]
                })]
            })
        }
        o.p8.timeline({
            defaults: {
                duration: .5,
                ease: "none"
            }
        })
    },
    497: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return m
            }
        });
        var n = i(5893)
          , a = i(7294)
          , s = i(792)
          , o = i(3093)
          , r = i(4463)
          , l = i(5499)
          , c = i(5700)
          , d = i(9206)
          , p = i(1106)
          , u = i(7048);
        function m(e) {
            let {children: t, backgroundImage: i, title: m, subTitle: h} = e
              , [f,g] = (0,
            a.useState)(!1)
              , [v,x] = (0,
            a.useState)(0);
            function b(e) {
                x(window.scrollY)
            }
            return (0,
            a.useEffect)( () => {
                window.addEventListener("scroll", b)
            }
            , []),
            (0,
            n.jsxs)(p.Z, {
                children: [(0,
                n.jsx)(l.Z, {
                    onClick: () => window.scrollTo({
                        top: 500,
                        left: 0,
                        behavior: "smooth"
                    }),
                    show: v < 100 && !f
                }), (0,
                n.jsx)(s.Z, {
                    isOpenMenu: f,
                    handleClickMenu: function() {
                        g(e => !e)
                    }
                }), (0,
                n.jsx)(u.Z, {
                    isOpenMenu: f,
                    scrollY: v,
                    backgroundImage: i,
                    title: m,
                    subTitle: h
                }), (0,
                n.jsx)(o.Z, {
                    isOpen: f,
                    setIsOpen: g
                }), (0,
                n.jsx)("div", {
                    className: "fixed -z-10 inset-0 duration-1000 ".concat(v > 150 ? "bg-[#111111]" : "")
                }), (0,
                n.jsx)("div", {
                    className: "h-28"
                }), (0,
                n.jsxs)("div", {
                    className: "relative min-h-screen ".concat(v > 150 ? "opacity-100 duration-1000" : "opacity-0 "),
                    children: [(0,
                    n.jsx)(r.u, {
                        appear: !0,
                        as: a.Fragment,
                        show: !f,
                        children: (0,
                        n.jsx)("div", {
                            className: "pt-52 ",
                            children: (0,
                            n.jsx)(r.u.Child, {
                                as: "div",
                                enter: "ease-out duration-[400ms] delay-500",
                                enterFrom: "opacity-0 translate-y-40",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0 -translate-y-40",
                                className: "text-white relative",
                                children: t
                            })
                        })
                    }), (0,
                    n.jsx)(c.Z, {
                        show: !f
                    })]
                }), (0,
                n.jsx)(d.Z, {
                    show: v > 500 && !f,
                    handleScrollUp: () => window.scrollTo({
                        top: 300,
                        left: 0,
                        behavior: "smooth"
                    })
                })]
            })
        }
    },
    3093: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return r
            }
        });
        var n = i(5893)
          , a = i(1106)
          , s = i(4463)
          , o = i(7294);
        function r(e) {
            let {isOpen: t, setIsOpen: i} = e
              , [r,l] = (0,
            o.useState)("")
              , {isNavigate: c, handleNavigate: d} = (0,
            o.useContext)(a.v);
            function p(e) {
                l(e.target.id)
            }
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)(s.u, {
                    show: t && !c,
                    children: [(0,
                    n.jsx)("div", {
                        className: "fixed inset-0 duration-500 ".concat(t ? "backdrop-blur-md" : "")
                    }), (0,
                    n.jsx)("div", {
                        className: "fixed inset-0 z-50",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex flex-col h-screen items-center justify-center p-4 text-center text-white text-[54px] font-semibold leading-[60px]",
                            onClick: function(e) {
                                "" === r && i(!1)
                            },
                            children: [(0,
                            n.jsx)(s.u.Child, {
                                as: "div",
                                enter: "ease-out duration-300 delay-[200ms]",
                                enterFrom: "opacity-0 translate-y-20",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "ease-in duration-200 delay-100",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0 -translate-y-20",
                                className: "py-[2px] cursor-pointer duration-150\n                                  ".concat("" === r || "portfolio" === r ? "opacity-100" : "opacity-70"),
                                id: "portfolio",
                                onMouseEnter: p,
                                onMouseLeave: () => l(""),
                                onClick: () => d("/"),
                                children: "Portfolio"
                            }), (0,
                            n.jsx)(s.u.Child, {
                                as: "div",
                                enter: "ease-out duration-300 delay-[300ms]",
                                enterFrom: "opacity-0 translate-y-20",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "ease-in duration-200 delay-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0 -translate-y-20",
                                className: "py-[2px] cursor-pointer duration-150 \n                                  ".concat("" === r || "about" === r ? "opacity-100" : "opacity-70"),
                                id: "about",
                                onMouseEnter: p,
                                onMouseLeave: () => l(""),
                                onClick: () => d("/about"),
                                children: "About Me"
                            }), (0,
                            n.jsx)(s.u.Child, {
                                as: "div",
                                enter: "ease-out duration-300 delay-[400ms]",
                                enterFrom: "opacity-0 translate-y-20",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "ease-in duration-200 delay-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0 -translate-y-20",
                                className: "py-[2px] cursor-pointer duration-150\n                                  ".concat("" === r || "contact" === r ? "opacity-100" : "opacity-70"),
                                id: "contact",
                                onMouseEnter: p,
                                onMouseLeave: () => l(""),
                                onClick: () => d("/contact"),
                                children: "Contact"
                            })]
                        })
                    })]
                })
            })
        }
    },
    792: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return c
            }
        });
        var n = i(5893)
          , a = i(1664)
          , s = i.n(a);
        function o(e) {
            let {isClicked: t, handleClicked: i} = e;
            return (0,
            n.jsx)("button", {
                className: "relative z-50 bg-white h-10 w-10 rounded-full duration-200",
                onClick: () => i(),
                children: (0,
                n.jsxs)("div", {
                    id: "nav-icon",
                    className: "".concat(t ? "open" : ""),
                    children: [(0,
                    n.jsx)("span", {
                        className: "bg-[#1C1B1F]"
                    }), (0,
                    n.jsx)("span", {
                        className: "bg-[#1C1B1F]"
                    })]
                })
            })
        }
        var r = i(5675)
          , l = i.n(r);
        function c(e) {
            let {isOpenMenu: t, handleClickMenu: i} = e;
            return (0,
            n.jsxs)("nav", {
                className: "fixed flex items-end justify-between w-screen z-[60] px-6 md:px-24 lg:px-32 h-[130px]",
                children: [(0,
                n.jsx)(s(), {
                    href: "/",
                    children: (0,
                    n.jsx)(l(), {
                        src: "/white-logo.png",
                        alt: "logo",
                        width: 40,
                        height: 46
                    })
                }), (0,
                n.jsx)("div", {
                    className: "flex items-center justify-center hover:scale-125 duration-300",
                    children: (0,
                    n.jsx)(o, {
                        isClicked: t,
                        handleClicked: i
                    })
                })]
            })
        }
    },
    5499: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return a
            }
        });
        var n = i(5893);
        function a(e) {
            let {onClick: t, show: i} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: i ? (0,
                n.jsx)("div", {
                    className: "icon-scroll",
                    onClick: t
                }) : ""
            })
        }
    },
    1106: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return r
            },
            v: function() {
                return o
            }
        });
        var n = i(5893)
          , a = i(1163)
          , s = i(7294);
        let o = (0,
        s.createContext)({
            isNavigate: !1,
            handleNavigate: () => {}
        });
        function r(e) {
            let {children: t} = e
              , i = (0,
            a.useRouter)()
              , [r,l] = (0,
            s.useState)(!1);
            return (0,
            n.jsx)(o.Provider, {
                value: {
                    isNavigate: r,
                    handleNavigate: function(e) {
                        e !== i.pathname && l(!0),
                        i.push(e)
                    }
                },
                children: t
            })
        }
    },
    747: function(e, t, i) {
        "use strict";
        i.d(t, {
            C: function() {
                return a
            },
            Z: function() {
                return n
            }
        });
        let n = "https://www.linkedin.com/in/pangidoan-nsh/"
          , a = "https://www.instagram.com/pangidoannsh_/"
    },
    5878: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            __N_SSG: function() {
                return h
            },
            default: function() {
                return f
            }
        });
        var n = i(5893)
          , a = i(497)
          , s = [{
            id: 15,
            portfolioId: 0,
            title: "",
            desc: "",
            image: "/assets/portfolio/mom-0.jpg"
        }, {
            id: 0,
            portfolioId: 0,
            title: "My Job",
            desc: "As a Ui/UX designer, my role is to shape an intuitive and appealing interface. \n        As a full-stack developer, I'm not only designing user experiences but also directly involved \n        in the complete development of this application. I play a role in every aspect, from design to implementation.",
            image: ""
        }, {
            id: 1,
            portfolioId: 0,
            title: "Technologies Used",
            desc: "Using Laravel and Bootstrap, we present the MoM Tracking System as a reliable and responsive web application.\n         The use of Laravel ensures optimal performance, while Bootstrap adds an elegant and responsive design touch.",
            image: ""
        }, {
            id: 14,
            portfolioId: 0,
            title: "Dashboard User Interface",
            desc: "",
            image: "/assets/portfolio/mom-1.png"
        }, {
            id: 12,
            portfolioId: 1,
            title: "",
            desc: "",
            image: "/assets/portfolio/vl-0.png"
        }, {
            id: 2,
            portfolioId: 1,
            title: "My Job",
            desc: [{
                title: "UI/UX Design",
                desc: "Responsible for designing an engaging and user-friendly user interface (UI). Conducting user research, creating wireframes, and developing visual designs that align with user needs and company branding."
            }, {
                title: "Fullstack Dev",
                desc: "Involved in full-stack development using React.js to implement a responsive and interactive frontend view. On the backend, using Laravel (Lumen) to develop robust and efficient application services. Involved in the development of features from start to finish, including database management, routing, and frontend integration."
            }],
            image: ""
        }, {
            id: 3,
            portfolioId: 1,
            title: "Technologies Used",
            desc: "In the development of Vehicle Logistics, we use React.js as the frontend framework to build a responsive, interactive, and easily manageable user interface. Reusable components in React.js allow for optimal UI development and maintenance, as well as integration with other applications, including mobile apps. On the backend, we adopt Laravel (Lumen) as the framework to develop robust and efficient application services. With powerful routing features, integrated security systems, and advanced database management capabilities through ORM, we can easily handle requests and responses.",
            image: ""
        }, {
            id: 13,
            portfolioId: 1,
            title: "Dashboard User Interface",
            desc: "",
            image: "/assets/portfolio/vl-1.png"
        }, {
            id: 10,
            portfolioId: 2,
            title: "",
            desc: "",
            image: "/assets/portfolio/sn-residence-0.png"
        }, {
            id: 4,
            portfolioId: 2,
            title: "My Job",
            desc: "I contribute as a Frontend Developer in this project, responsible for using the React JS framework to \n        develop the user interface (UI) of the website. My role includes building key components such as carousels, booking systems, \n        footers, and other elements, ensuring an attractive and responsive display.",
            image: ""
        }, {
            id: 5,
            portfolioId: 2,
            title: "Technologies Used",
            desc: "This project is supported by modern technologies to ensure performance and reliability. On the frontend, we use the React JS framework, while on the backend, we rely on Laravel. Database management is implemented using MySQL. The combination of these technologies provides a solid foundation for efficient and reliable web development.",
            image: ""
        }, {
            id: 6,
            portfolioId: 3,
            title: "Frontend",
            desc: "My role in this project is as a Frontend Developer using the React JS framework to develop the Web UI, and adding particle animation effects for a more attractive and interactive display.",
            image: "/assets/portfolio/hrev-0.jpg"
        }, {
            id: 7,
            portfolioId: 4,
            title: "",
            desc: "",
            image: "/assets/portfolio/helpdesk-it-0.png"
        }, {
            id: 8,
            portfolioId: 4,
            title: "My Job",
            desc: [{
                title: "Entity Relationship Diagram (ERD) Design",
                desc: "Designing the database structure using ERD. Identifying entities, attributes, and relationships between entities in the IT Helpdesk system. Creating a structured ERD to ensure data consistency and integrity."
            }, {
                title: "UI/UX Design",
                desc: "Designing the user interface (UI) of the application while adhering to good design principles. Designing layouts, components, and intuitive and responsive UI elements to make it easy for users to interact with the application."
            }, {
                title: "Frontend Dev",
                desc: "Developing frontend using Next.js and Tailwindcss"
            }, {
                title: "Backend Dev",
                desc: "Developing backend using Nest.js with microservice approach"
            }, {
                title: "Develop Whatsapp Service",
                desc: "Developing a Whatsapp service system based on API to be used by Helpdesk API for notification and Whatsapp messaging features"
            }],
            image: ""
        }, {
            id: 9,
            portfolioId: 4,
            title: "Technologies Used",
            desc: "In this project, I use modern technologies such as Next.js and Tailwind CSS for frontend development, and Nest.js for backend development with a microservice approach. In addition, in the development of the Whatsapp Service feature, I use Baileys as a package for sending Whatsapp messages.",
            image: ""
        }, {
            id: 16,
            portfolioId: 4,
            title: "Dashboard User Interface",
            desc: "",
            image: "/assets/portfolio/helpdesk-it-1.png"
        }, {
            id: 11,
            portfolioId: 2,
            title: "Booking Form User Interface",
            desc: "",
            image: "/assets/portfolio/sn-residence-1.png"
        }, {
            id: 17,
            portfolioId: 5,
            title: "",
            desc: "",
            image: "/assets/project/absis-project.jpg",
            target: "https://absis-client.vercel.app/",
            rounded: !0
        }, {
            id: 18,
            portfolioId: 5,
            title: "About the Project",
            desc: [{
                title: "Collaboration with PKM UII",
                desc: "The collaboration in this project involves the HREV Team as a vendor working with PKM UII (Student Creativity Program from Universitas Islam Indonesia). PKM UII offers an Arduino system to weigh waste data in"
            }, {
                title: "Integrating Arduino and Web",
                desc: "The Arduino system is integrated into the web, allowing accurate recording of the amount of waste in each collection. This web interface is designed to be an effective and efficient interface in presenting data to the public."
            }],
            image: ""
        }, {
            id: 19,
            portfolioId: 5,
            title: "My Job",
            desc: "In this small team, I play the role of a Fullstack Developer in this project, responsible for developing the front-end and back-end of the web. Additionally, I also assist the UI designer in achieving a look that aligns with the project's vision",
            image: ""
        }, {
            id: 20,
            portfolioId: 5,
            title: "Technologies Used",
            desc: "This project uses modern technology, with React.js as the front-end framework, Tailwind CSS for styling, and Leaflet as a package for displaying maps. These technologies provide reliability and flexibility to ABSIS Web.",
            image: ""
        }, {
            id: 21,
            portfolioId: 5,
            title: "ABSIS WEB",
            desc: "",
            image: ["/assets/portfolio/absis-jumbotron.webp", "/assets/portfolio/absis-value.webp", "/assets/portfolio/absis-arduino.webp", "/assets/portfolio/absis-map.webp"]
        }, {
            id: 22,
            portfolioId: 6,
            title: "What is challenging",
            desc: [{
                title: "Payment Gateway",
                desc: "Developing a payment feature with Laravel for the first time, which enables e-wallet payments."
            }, {
                title: "First time using Ionic",
                desc: "For the first time, utilizing Ionic as a cross-platform framework and developing a mobile platform with Ionic and React.js"
            }],
            image: ""
        }, {
            id: 23,
            portfolioId: 6,
            title: "My Job",
            desc: [{
                title: "UI/UX Design",
                desc: "Handled UI/UX design from inception to implementation. Created wireframes, and prototypes independently. Focused on crafting intuitive interfaces to elevate user satisfaction and engagement."
            }, {
                title: "Frontend Development (Mobile)",
                desc: "Single-handedly developed responsive frontend using React.js, Ionic, and Tailwindcss. Ensured seamless user experience across devices and browsers through rigorous testing and optimization."
            }],
            image: "/assets/portfolio/st-ui.jpg"
        }, {
            id: 23,
            portfolioId: 6,
            title: "Tech Stack",
            desc: "In this project, we utilized Ionic, Laravel, React, Tailwind CSS, and Midtrans to build a high-performance, scalable application with seamless payment integration, delivering a responsive and reliable user experience.",
            image: "/assets/portfolio/st-tech.jpg"
        }, {
            id: 24,
            portfolioId: 7,
            title: "",
            desc: "",
            image: "/assets/portfolio/ren-ai.webp",
            target: "https://renaisis-ai.vercel.app/",
            rounded: !0
        }, {
            id: 25,
            portfolioId: 7,
            title: "Tech Stack",
            desc: [{
                title: "Frameworks",
                desc: "Next.js, React.js"
            }, {
                title: "Styling",
                desc: "TailwindCSS, Ant Design"
            }],
            image: "/assets/portfolio/ren-ai2.webp"
        }, {
            id: 26,
            portfolioId: 7,
            title: "Challenges",
            desc: [{
                title: "Dynamic AI Responses",
                desc: "Implementing flexible formats for AI-generated responses, including the display of dynamic tables and chat text based on user input."
            }, {
                title: "Resizable UI Components",
                desc: "Developing resizable sidebars and tables that adjust seamlessly without impacting performance."
            }, {
                title: "Dark Mode and Light Mode",
                desc: "Integrating smooth transitions between dark mode and light mode to enhance user experience."
            }],
            image: ["/assets/portfolio/ren-ai3.webp", "/assets/portfolio/ren-ai4.webp", "/assets/portfolio/ren-ai6.webp"],
            rounded: !0
        }, {
            id: 27,
            portfolioId: 7,
            title: "Dark Mode Interface",
            desc: "",
            image: "/assets/portfolio/ren-ai7.webp",
            rounded: !0
        }, {
            id: 28,
            portfolioId: 8,
            title: "Key Features",
            desc: [{
                title: "Tourist Spot List",
                desc: "Displays a list of tourist locations with detailed information."
            }, {
                title: "Route Guidance",
                desc: "Provides directions from the user's current location to the selected tourist spot using Leaflet's RoutingMachine."
            }, {
                title: "Admin Panel",
                desc: "Allows for CRUD operations on tourist data, including names, locations, facilities, and images."
            }]
        }, {
            id: 29,
            portfolioId: 8,
            title: "My Role",
            desc: [{
                title: "Frontend Mobile Development",
                desc: "Developed the mobile application interface using React.js and Ionic, ensuring a responsive and user-friendly experience for tourists exploring the app."
            }, {
                title: "Backend Development",
                desc: "Built and managed the backend using Laravel, including the implementation of APIs for data management and communication between the frontend and backend."
            }],
            image: "/assets/portfolio/bu-tourist-ui.webp",
            rounded: !0
        }, {
            id: 30,
            portfolioId: 8,
            title: "What is Challenging",
            desc: "Implementing the route guidance feature using Leaflet's RoutingMachine was a key accomplishment in the BU Tourist App project. Leveraging the advanced capabilities of this library, I successfully integrated real-time route calculations, ensuring accurate and efficient navigation from the user's location to tourist destinations. This integration demonstrated my proficiency in utilizing Leaflet's functions to enhance user experience and provide reliable routing solutions.",
            image: "/assets/portfolio/bu-tourist6.png"
        }, {
            id: 31,
            portfolioId: 8,
            title: "Tech Stack",
            desc: "The backend of the BU Tourist App was built using Laravel, providing a robust framework for managing data and API interactions. For the mobile frontend, React.js and Ionic were used to create a responsive and user-friendly interface. Leaflet, along with its RoutingMachine library, was integrated to handle the map functionalities, including displaying tourist locations and providing real-time route guidance from the user's current position.",
            image: "/assets/portfolio/bu-tourist-tech.webp",
            rounded: !0
        }]
          , o = i(1664)
          , r = i.n(o);
        function l(e) {
            let {description: t, id: i} = e
              , a = s.filter(e => e.portfolioId === i);
            return (0,
            n.jsxs)("div", {
                className: "min-h-screen relative z-50 px-6 md:px-24 lg:px-56 pt-24 text-white",
                children: [(0,
                n.jsx)("div", {
                    className: "px-6 lg:px-28 mb-12",
                    children: (0,
                    n.jsxs)("div", {
                        children: [(0,
                        n.jsx)("h4", {
                            className: "text-2xl font-semibold mb-3 lg:mb-6",
                            children: "Deskripsi Projek"
                        }), (0,
                        n.jsx)("p", {
                            className: "opacity-60 font-roboto",
                            children: t
                        })]
                    })
                }), (0,
                n.jsx)("div", {
                    className: "flex flex-col lg:gap-12 gap-8",
                    children: a.map(e => (0,
                    n.jsxs)("div", {
                        children: [e.title ? (0,
                        n.jsx)("h4", {
                            className: "text-2xl font-semibold mb-3 lg:mb-6",
                            children: e.title
                        }) : "", e.desc ? Array.isArray(e.desc) ? (0,
                        n.jsx)("div", {
                            className: "flex flex-col gap-3",
                            children: e.desc.map( (e, t) => (0,
                            n.jsxs)("p", {
                                children: [(0,
                                n.jsx)("span", {
                                    className: "font-semibold",
                                    children: t + 1 + ". " + e.title
                                }), " :", (0,
                                n.jsx)("span", {
                                    className: "opacity-60",
                                    children: " " + e.desc
                                })]
                            }, e + t))
                        }) : (0,
                        n.jsx)("p", {
                            className: "opacity-60",
                            children: e.desc
                        }) : "", e.image ? Array.isArray(e.image) ? (0,
                        n.jsx)("div", {
                            className: "flex flex-col gap-4",
                            children: e.image.map( (t, i) => (0,
                            n.jsx)("img", {
                                src: t,
                                className: "mt-2 ".concat(e.rounded ? "rounded-2xl" : "")
                            }, i))
                        }) : (0,
                        n.jsx)("div", {
                            className: "flex justify-center",
                            children: (0,
                            n.jsxs)("div", {
                                className: "relative w-max group",
                                children: [e.target ? (0,
                                n.jsxs)(n.Fragment, {
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "overlay ".concat(e.rounded ? "rounded-2xl" : "", " group-hover:bg-black group-hover:bg-opacity-50")
                                    }), (0,
                                    n.jsx)(r(), {
                                        href: e.target,
                                        target: "_blank",
                                        className: "see-project group-hover:opacity-100 opacity-0",
                                        children: "Lihat Project"
                                    })]
                                }) : "", (0,
                                n.jsx)("img", {
                                    src: e.image,
                                    className: "mt-6 ".concat(e.rounded ? "rounded-2xl" : "")
                                })]
                            })
                        }) : ""]
                    }, e.id))
                })]
            })
        }
        var c = i(9008)
          , d = i.n(c);
        i(7294);
        var p = i(3229)
          , u = i(1163);
        function m(e) {
            let {data: t} = e
              , i = (0,
            u.useRouter)();
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-12 justify-center items-center mt-24",
                children: [(0,
                n.jsx)("div", {
                    className: "text-center font-medium",
                    children: "next"
                }), (0,
                n.jsx)(p.Z, {
                    data: t,
                    height: "500px",
                    width: "50vw",
                    zIndex: 50,
                    isHover: !1,
                    onClick: function(e) {
                        i.push(e)
                    }
                })]
            })
        }
        var h = !0;
        function f(e) {
            let {image: t, title: i, partner: s, description: o, id: r, nextPageData: c} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)(d(), {
                    children: [(0,
                    n.jsx)("title", {
                        children: i + " | Pangidoan NSH"
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
                    n.jsxs)(a.Z, {
                        backgroundImage: t.src,
                        title: i,
                        subTitle: s.name,
                        children: [(0,
                        n.jsx)(l, {
                            description: o,
                            id: r
                        }), (0,
                        n.jsx)("div", {
                            className: "flex justify-center lg:mt-24 lg:px-36",
                            children: (0,
                            n.jsx)("div", {
                                className: "divider"
                            })
                        }), (0,
                        n.jsx)(m, {
                            data: c
                        })]
                    })
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [802, 978, 78, 774, 888, 179], function() {
        return e(e.s = 8802)
    }),
    _N_E = e.O()
}
]);
