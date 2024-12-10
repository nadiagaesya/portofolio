"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[739], {
    9206: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var a = n(5893)
          , i = n(1954);
        function s(e) {
            let {show: t, handleScrollUp: n} = e;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("button", {
                    className: "btn-bottombar fixed bottom-0 md:left-32 left-6 border-[2.5px] border-white \n            ".concat(t ? "z-40" : "-z-20", " mb-20\n            ").concat(t ? "scale-100" : "scale-0"),
                    children: [(0,
                    a.jsx)("span", {
                        className: "caption -rotate-90 -left-1",
                        children: "Filters"
                    }), (0,
                    a.jsx)(i.JO, {
                        icon: "material-symbols:more-vert",
                        className: "text-white"
                    })]
                }), (0,
                a.jsxs)("button", {
                    onClick: n,
                    className: "btn-bottombar fixed bottom-0 md:right-32 right-6 border-[2.5px]\n             border-white ".concat(t ? "z-40" : "-z-20", " mb-20\n            ").concat(t ? "scale-100" : "scale-0"),
                    children: [(0,
                    a.jsx)("span", {
                        className: "caption -rotate-90 w-max -left-1",
                        children: "Go Top"
                    }), (0,
                    a.jsx)(i.JO, {
                        icon: "ion:chevron-up",
                        className: "text-white"
                    })]
                })]
            })
        }
        n(7294)
    },
    5700: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var a = n(5893)
          , i = n(747)
          , s = n(1954);
        function o(e) {
            let {show: t} = e;
            return (0,
            a.jsxs)("div", {
                className: "py-12 flex flex-col gap-6 justify-center items-center duration-300\n        ".concat(t ? "opacity-1" : "-translate-y-8 opacity-0"),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex z-50 text-white gap-5  items-center",
                    children: [(0,
                    a.jsx)("a", {
                        href: i.Z,
                        target: "_blank",
                        children: (0,
                        a.jsx)(s.JO, {
                            icon: "fa-brands:linkedin-in",
                            className: "text-sm"
                        })
                    }), (0,
                    a.jsx)("a", {
                        href: i.C,
                        target: "_blank",
                        children: (0,
                        a.jsx)(s.JO, {
                            icon: "fa6-brands:instagram",
                            className: "text-sm"
                        })
                    })]
                }), (0,
                a.jsx)("span", {
                    className: "text-[10px] text-white/60 hover:text-white",
                    children: "Copyright \xa9 2023 Pangidoan Nugroho. All Rights Reserved."
                })]
            })
        }
        n(7294)
    },
    7048: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var a = n(5893)
          , i = n(7294)
          , s = n(4463)
          , o = n(990);
        function r(e) {
            let {isOpenMenu: t, scrollY: n, backgroundImage: r, title: c, subTitle: l} = e
              , d = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)( () => {
                o.p8.set(d.current, {
                    x: 0,
                    y: 0,
                    scale: 1.1
                })
            }
            , []),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
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
                a.jsxs)("div", {
                    children: [(0,
                    a.jsx)(s.u, {
                        as: i.Fragment,
                        show: !t,
                        children: (0,
                        a.jsx)(s.u.Child, {
                            as: "div",
                            enter: "ease-out duration-[400ms] delay-500",
                            enterFrom: "opacity-0 translate-y-40",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0 -translate-y-40",
                            className: "z-10 fixed w-screen h-screen text-white ",
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex gap-4 flex-col px-6 justify-center items-center h-screen",
                                style: {
                                    translate: n > 50 ? "0 -".concat(n / 3.5, "px") : "0 0",
                                    opacity: n > 0 ? "".concat((200 - n) / n) : "1"
                                },
                                children: [(0,
                                a.jsx)("div", {
                                    className: "text-center text-5xl font-semibold sm:w-3/4 lg:w-1/2",
                                    children: c
                                }), (0,
                                a.jsx)("div", {
                                    className: "semi-white font-roboto font-light",
                                    children: l
                                })]
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "bg-hero-wrapper duration-1000 ".concat(t ? "scale-105" : "scale-100"),
                        children: (0,
                        a.jsx)("div", {
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
    3093: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var a = n(5893)
          , i = n(1106)
          , s = n(4463)
          , o = n(7294);
        function r(e) {
            let {isOpen: t, setIsOpen: n} = e
              , [r,c] = (0,
            o.useState)("")
              , {isNavigate: l, handleNavigate: d} = (0,
            o.useContext)(i.v);
            function p(e) {
                c(e.target.id)
            }
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)(s.u, {
                    show: t && !l,
                    children: [(0,
                    a.jsx)("div", {
                        className: "fixed inset-0 duration-500 ".concat(t ? "backdrop-blur-md" : "")
                    }), (0,
                    a.jsx)("div", {
                        className: "fixed inset-0 z-50",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex flex-col h-screen items-center justify-center p-4 text-center text-white text-[54px] font-semibold leading-[60px]",
                            onClick: function(e) {
                                "" === r && n(!1)
                            },
                            children: [(0,
                            a.jsx)(s.u.Child, {
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
                                onMouseLeave: () => c(""),
                                onClick: () => d("/"),
                                children: "Portfolio"
                            }), (0,
                            a.jsx)(s.u.Child, {
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
                                onMouseLeave: () => c(""),
                                onClick: () => d("/about"),
                                children: "About Me"
                            }), (0,
                            a.jsx)(s.u.Child, {
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
                                onMouseLeave: () => c(""),
                                onClick: () => d("/contact"),
                                children: "Contact"
                            })]
                        })
                    })]
                })
            })
        }
    },
    792: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var a = n(5893)
          , i = n(1664)
          , s = n.n(i);
        function o(e) {
            let {isClicked: t, handleClicked: n} = e;
            return (0,
            a.jsx)("button", {
                className: "relative z-50 bg-white h-10 w-10 rounded-full duration-200",
                onClick: () => n(),
                children: (0,
                a.jsxs)("div", {
                    id: "nav-icon",
                    className: "".concat(t ? "open" : ""),
                    children: [(0,
                    a.jsx)("span", {
                        className: "bg-[#1C1B1F]"
                    }), (0,
                    a.jsx)("span", {
                        className: "bg-[#1C1B1F]"
                    })]
                })
            })
        }
        var r = n(5675)
          , c = n.n(r);
        function l(e) {
            let {isOpenMenu: t, handleClickMenu: n} = e;
            return (0,
            a.jsxs)("nav", {
                className: "fixed flex items-end justify-between w-screen z-[60] px-6 md:px-24 lg:px-32 h-[130px]",
                children: [(0,
                a.jsx)(s(), {
                    href: "/",
                    children: (0,
                    a.jsx)(c(), {
                        src: "/white-logo.png",
                        alt: "logo",
                        width: 40,
                        height: 46
                    })
                }), (0,
                a.jsx)("div", {
                    className: "flex items-center justify-center hover:scale-125 duration-300",
                    children: (0,
                    a.jsx)(o, {
                        isClicked: t,
                        handleClicked: n
                    })
                })]
            })
        }
    },
    5499: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var a = n(5893);
        function i(e) {
            let {onClick: t, show: n} = e;
            return (0,
            a.jsx)(a.Fragment, {
                children: n ? (0,
                a.jsx)("div", {
                    className: "icon-scroll",
                    onClick: t
                }) : ""
            })
        }
    },
    1106: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            },
            v: function() {
                return o
            }
        });
        var a = n(5893)
          , i = n(1163)
          , s = n(7294);
        let o = (0,
        s.createContext)({
            isNavigate: !1,
            handleNavigate: () => {}
        });
        function r(e) {
            let {children: t} = e
              , n = (0,
            i.useRouter)()
              , [r,c] = (0,
            s.useState)(!1);
            return (0,
            a.jsx)(o.Provider, {
                value: {
                    isNavigate: r,
                    handleNavigate: function(e) {
                        e !== n.pathname && c(!0),
                        n.push(e)
                    }
                },
                children: t
            })
        }
    },
    6793: function(e, t) {
        t.Z = [{
            id: 0,
            slug: "mom-tracking-system",
            title: "MoM Tracking System",
            technologies: ["Laravel", "Bootstrap", "MySQL", "Figma"],
            image: {
                src: "/assets/project/mom-tracking-system.jpg"
            },
            partner: {
                name: "PT. Hadji Kalla",
                logo: "/assets/partner-logo/kalla.png",
                location: "Makassar - Indonesia"
            },
            effort: ["UI Design", "Dev Frontend", "Dev Backend"],
            description: "MoM Tracking System is an innovative web application that I developed during my internship at PT Hadji Kalla.\n        Designed to record meetings across various business units, the application facilitates recording dates, locations, PIC, agendas, and discussion outcomes.\n        With a focus on efficient documentation, MoM Tracking System assists management in tracking and responding to meeting developments faster and more effectively.",
            startDate: "Sep 2022",
            endDate: "Nov 2022",
            role: "UI/UX Designer & Fullstack Dev assistant (Intern)"
        }, {
            id: 1,
            slug: "vehicle-logistics",
            title: "Kalla Vehicle Logistics",
            technologies: ["React Js", "Tailwind Css", "Laravel", "MySQL", "Figma"],
            image: {
                src: "/assets/project/vehicle-logistics.jpg"
            },
            partner: {
                name: "PT. Hadji Kalla",
                logo: "/assets/partner-logo/kalla.png",
                location: "Makassar - Indonesia"
            },
            effort: ["UI Design", "Dev Frontend", "Dev Backend"],
            description: "Welcome to Kalla Vehicle Logistics! My internship project at PT Hadji Kalla brings innovation to automotive logistics management.\n        This web application is designed to support the operations of PT Hadji Kalla, especially under the Kalla Logistics sub-holding, within the Kalla Logistics SBU.",
            startDate: "Oct 2022",
            endDate: "Jan 2023",
            role: "UI/UX Designer & Frontend Dev (Intern)"
        }, {
            id: 2,
            slug: "sn-residence",
            title: "SN Residence",
            technologies: ["React Js", "Tailwind Css", "Laravel", "MySQL", "Figma"],
            image: {
                src: "/assets/project/sn-residence.jpg"
            },
            partner: {
                name: "SN Residence Bantaeng",
                logo: "/assets/partner-logo/sn.png",
                location: "Online"
            },
            effort: ["UI Design", "Dev Frontend"],
            description: "This project is the result of collaboration between HREV Team and SN Residence Bantaeng, aiming to create a website that serves as a landing page and a booking management tool for prospective buyers at SN Residence Bantaeng.",
            startDate: "Feb 2023",
            endDate: "Mar 2023",
            role: "UI/UX Designer assistant & Frontend Dev"
        }, {
            id: 3,
            slug: "hrev-landinig-page",
            title: "HREV Landing Page",
            technologies: ["React Js", "Tailwind Css"],
            image: {
                src: "/assets/project/hrev-profile.jpg"
            },
            partner: {
                name: "HREV Software House",
                logo: "/assets/partner-logo/hrev.svg",
                location: "Online"
            },
            effort: ["Dev Frontend"],
            description: "This project involves creating a landing page for the HREV Team to make it easier for potential clients to view detailed profiles of the HREV Team.",
            startDate: "Mar 2023",
            endDate: "Apr 2023",
            role: "Frontend Dev"
        }, {
            id: 4,
            slug: "helpdesk-it",
            title: "Ticketing System Helpdesk IT BPS Riau",
            technologies: ["Next Js", "Tailwind Css", "Nest Js", "TypeORM", "MySQL", "Figma"],
            image: {
                src: "/assets/project/helpdesk-it.jpg"
            },
            partner: {
                name: "Badan Pusat Statistik Provinsi Riau",
                logo: "/assets/partner-logo/bps.png",
                location: "Pekanbaru - Indonesia"
            },
            effort: ["Analyze System", "UI Design", "Dev Frontend", "Dev Backend"],
            description: "Internship and research project at the Central Statistics Agency of Riau Province (BPS Riau) led me to the development of Helpdesk IT, an innovative system to manage technology disruption reports and requests at BPS Riau. The main goal of this project is to improve the effectiveness, efficiency, and documentation of technology reporting in the environment of BPS Riau.",
            startDate: "Feb 2023",
            endDate: "Jun 2023",
            role: "Software Engineer (Intern)"
        }, {
            id: 5,
            slug: "absis-project",
            title: "ABSIS WEB",
            technologies: ["React Js", "Tailwind Css", "Figma", "Laravel"],
            image: {
                src: "/assets/project/absis-project.jpg"
            },
            partner: {
                name: "ABSIS TECH ID",
                logo: "/assets/partner-logo/absis-logo.png",
                location: "Yogyakarta - Indonesia"
            },
            effort: ["UI Design", "Dev Frontend", "Dev Backend"],
            description: 'Monitoring Waste with Arduino-based Weighing Waste System (ABSIS)" project is a revolutionary system specifically designed to record waste generation in Indonesia in real-time, integrated, and reliable. By leveraging Arduino technology, ABSIS accurately weighs and records the amount of waste in each collection. This project not only delivers advanced technological solutions but also sets a new standard in real-time waste monitoring.',
            startDate: "Aug 2023",
            endDate: "Dec 2023",
            role: "Fullstack Developer"
        }, {
            id: 6,
            slug: "satria-ticket-project",
            title: "Satria Ticket App",
            technologies: ["React Js", "Ionic", "Tailwind Css", "Figma", "Laravel"],
            image: {
                src: "/assets/project/satria-ticket.jpg"
            },
            partner: {
                name: "Freelance Project",
                logo: "",
                location: "Remote"
            },
            effort: ["UI Design", "Dev Frontend (Mobile)"],
            description: "SatriaTicket is a freelance project we developed for a client in Buton, Indonesia, providing a digital solution for ferry ticket bookings. This prototype application allows users to view, book, and pay for tickets directly through an integrated payment gateway, aiming to simplify and expedite the booking process while enhancing accessibility to maritime transportation in the Buton region with modern technology that is secure, fast, and user-friendly.",
            startDate: "Apr 2024",
            endDate: "May 2024",
            role: "Frontend (Mobile) Developer"
        }, {
            id: 7,
            slug: "renaisis-ai",
            title: "Renaisis AI (Dashboard) Frontend Development",
            technologies: ["NextJs", "ReactJs", "Tailwind Css", "Ant Design"],
            image: {
                src: "/assets/project/renaisis-ai.jpg"
            },
            partner: {
                name: "Freelance Project",
                logo: "",
                location: "Remote"
            },
            effort: ["Dev Frontend"],
            description: "Renaisis AI is a web application developed for health insurance consultation, utilizing AI technology to guide users through insurance options and aid in making informed decisions. This freelance project involved creating a responsive and user-friendly frontend interface. Key technologies used include Next.js, React.js, TailwindCSS, and Ant Design. The focus was on ensuring an engaging user experience with dynamic content display, including AI-generated tables and chat responses, and supporting both dark and light modes for enhanced usability.",
            startDate: "May 2024",
            endDate: "Jun 2024",
            role: "Frontend Developer"
        }, {
            id: 8,
            slug: "bu-tourist",
            title: "BuTourist App",
            technologies: ["Ionic", "ReactJs", "Laravel", "Tailwind Css"],
            image: {
                src: "/assets/project/butourist.jpg"
            },
            partner: {
                name: "Freelance Project",
                logo: "",
                location: "Remote"
            },
            effort: ["Dev Mobile", "Dev Backend"],
            description: "BU Tourist App is a freelance project developed to promote tourism in Buton Utara, Southeast Sulawesi, by providing an accessible mobile platform for exploring local attractions. The app allows users to view a list of tourist spots, access detailed information about each location, and navigate to these destinations with route guidance directly from their current position. Additionally, an admin panel enables the management of tourist data, allowing for easy updates to names, locations, facilities, and images, ensuring the app remains accurate and up-to-date.",
            startDate: "May 2024",
            endDate: "Jun 2024",
            role: "Fullstack Developer"
        }].sort( (e, t) => t.id - e.id).map(e => e)
    },
    747: function(e, t, n) {
        n.d(t, {
            C: function() {
                return i
            },
            Z: function() {
                return a
            }
        });
        let a = "https://www.linkedin.com/in/pangidoan-nsh/"
          , i = "https://www.instagram.com/pangidoannsh_/"
    }
}]);
