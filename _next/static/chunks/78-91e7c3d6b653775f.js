"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[78], {
    5078: function(t, e, a) {
        a.d(e, {
            Z: function() {
                return f
            }
        });
        var o = a(7294);
        function n() {
            return (n = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = arguments[e];
                    for (var o in a)
                        Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var r = function(t, e) {
            return t.querySelector(e)
        }
          , i = function(t) {
            void 0 === t && (t = {});
            var e = {};
            return Object.keys(t).forEach(function(a) {
                void 0 !== t[a] && (e[a] = t[a])
            }),
            e
        }
          , s = ["component", "children", "rootChildren", "scaleChildren", "rotateChildren", "className", "scaleClassName", "rotateClassName", "innerClassName"];
        function c() {
            return (c = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = arguments[e];
                    for (var o in a)
                        Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var u = ["eventsEl", "alwaysActive", "activeOffset", "shadowOffset", "shadowScale", "duration", "rotate", "rotateTouch", "rotateXMax", "rotateYMax", "rotateXInvert", "rotateYInvert", "stretchX", "stretchY", "stretchZ", "commonOrigin", "shadow", "highlight", "onEnter", "onLeave", "onRotate"]
          , l = function(t) {
            var e = {};
            return Object.keys(t).forEach(function(a) {
                u.includes(a) || (e[a] = t[a])
            }),
            e
        }
          , p = function(t) {
            var e = {};
            return Object.keys(t).forEach(function(a) {
                u.includes(a) && (e[a] = t[a])
            }),
            e
        }
          , f = function(t) {
            var e = t.component
              , a = t.children
              , u = t.rootChildren
              , f = t.scaleChildren
              , d = t.rotateChildren
              , h = t.className
              , v = t.scaleClassName
              , m = t.rotateClassName
              , y = t.innerClassName
              , g = function(t, e) {
                if (null == t)
                    return {};
                var a, o, n = {}, r = Object.keys(t);
                for (o = 0; o < r.length; o++)
                    a = r[o],
                    e.indexOf(a) >= 0 || (n[a] = t[a]);
                return n
            }(t, s)
              , M = (0,
            o.useRef)(null)
              , w = (0,
            o.useRef)(null)
              , O = function() {
                for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
                    e[a] = arguments[a];
                return e.filter(function(t) {
                    return !!t
                }).join(" ")
            }
              , E = function() {
                var e, a, o, s, u, l, f, d, h, v, m, y, g, O, E, x, b, X, Y, _, L, N, C, T, A, R, j, k, I, P, D, F, S, Z, q;
                w.current = (void 0 === (e = c({
                    el: M.current
                }, p(t))) && (e = {}),
                O = (g = e).el,
                E = g.eventsEl,
                b = (x = {
                    __atropos__: !0,
                    params: n({
                        alwaysActive: !1,
                        activeOffset: 50,
                        shadowOffset: 50,
                        shadowScale: 1,
                        duration: 300,
                        rotate: !0,
                        rotateTouch: !0,
                        rotateXMax: 15,
                        rotateYMax: 15,
                        rotateXInvert: !1,
                        rotateYInvert: !1,
                        stretchX: 0,
                        stretchY: 0,
                        stretchZ: 0,
                        commonOrigin: !0,
                        shadow: !0,
                        highlight: !0,
                        onEnter: null,
                        onLeave: null,
                        onRotate: null
                    }, i(e || {})),
                    destroyed: !1,
                    isActive: !1
                }).params,
                X = [],
                !function t() {
                    y = requestAnimationFrame(function() {
                        X.forEach(function(t) {
                            if ("function" == typeof t)
                                t();
                            else {
                                var e = t.element
                                  , a = t.prop
                                  , o = t.value;
                                e.style[a] = o
                            }
                        }),
                        X.splice(0, X.length),
                        t()
                    })
                }(),
                Y = function(t, e) {
                    X.push({
                        element: t,
                        prop: "transitionDuration",
                        value: e
                    })
                }
                ,
                _ = function(t, e) {
                    X.push({
                        element: t,
                        prop: "transitionTimingFunction",
                        value: e
                    })
                }
                ,
                L = function(t, e) {
                    X.push({
                        element: t,
                        prop: "transform",
                        value: e
                    })
                }
                ,
                N = function(t, e) {
                    X.push({
                        element: t,
                        prop: "opacity",
                        value: e
                    })
                }
                ,
                C = function(t, e) {
                    X.push({
                        element: t,
                        prop: "transformOrigin",
                        value: e
                    })
                }
                ,
                T = function(t, e, a, o) {
                    return t.addEventListener(e, a, o)
                }
                ,
                A = function(t, e, a, o) {
                    return t.removeEventListener(e, a, o)
                }
                ,
                R = function(t) {
                    var e = t.rotateXPercentage
                      , a = void 0 === e ? 0 : e
                      , o = t.rotateYPercentage
                      , n = void 0 === o ? 0 : o
                      , r = t.duration
                      , i = t.opacityOnly
                      , s = t.easeOut
                      , c = function(t) {
                        if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity)
                            return t.dataset.atroposOpacity.split(";").map(function(t) {
                                return parseFloat(t)
                            })
                    };
                    O.querySelectorAll("[data-atropos-offset], [data-atropos-opacity]").forEach(function(t) {
                        Y(t, r),
                        _(t, s ? "ease-out" : "");
                        var e = c(t);
                        if (0 === a && 0 === n)
                            i || L(t, "translate3d(0, 0, 0)"),
                            e && N(t, e[0]);
                        else {
                            var o = parseFloat(t.dataset.atroposOffset) / 100;
                            if (Number.isNaN(o) || i || L(t, "translate3d(" + -(-n * o) + "%, " + -(a * o) + "%, 0)"),
                            e) {
                                var u = e[0]
                                  , l = e[1];
                                N(t, u + (l - u) * Math.max(Math.abs(a), Math.abs(n)) / 100)
                            }
                        }
                    })
                }
                ,
                j = function(t, e) {
                    var o, n = O !== E;
                    if (u || (u = O.getBoundingClientRect()),
                    n && !l && (l = E.getBoundingClientRect()),
                    void 0 === t && void 0 === e) {
                        var r = n ? l : u;
                        t = r.left + r.width / 2,
                        e = r.top + r.height / 2
                    }
                    var i = 0
                      , s = 0
                      , c = u
                      , p = c.top
                      , f = c.left
                      , h = c.width
                      , v = c.height;
                    if (n) {
                        var m = l
                          , y = m.top
                          , g = m.left
                          , M = m.width
                          , w = m.height
                          , x = t - g
                          , X = e - y;
                        s = -(b.rotateYMax * (x - (h / 2 + (f - g))) / (M - h / 2) * 1),
                        i = b.rotateXMax * (X - (v / 2 + (p - y))) / (w - v / 2),
                        o = t - f + "px " + (e - p) + "px"
                    } else {
                        var T = t - f
                          , A = e - p;
                        s = -(b.rotateYMax * (T - h / 2) / (h / 2) * 1),
                        i = b.rotateXMax * (A - v / 2) / (v / 2)
                    }
                    i = Math.min(Math.max(-i, -b.rotateXMax), b.rotateXMax),
                    b.rotateXInvert && (i = -i),
                    s = Math.min(Math.max(-s, -b.rotateYMax), b.rotateYMax),
                    b.rotateYInvert && (s = -s);
                    var j = i / b.rotateXMax * 100
                      , k = s / b.rotateYMax * 100;
                    L(a, "translate3d(" + (n ? k / 100 * b.stretchX : 0) * (b.rotateYInvert ? -1 : 1) + "%, " + -((n ? j / 100 * b.stretchY : 0) * (b.rotateXInvert ? -1 : 1)) + "%, " + -(n ? Math.max(Math.abs(j), Math.abs(k)) / 100 * b.stretchZ : 0) + "px) rotateX(" + i + "deg) rotateY(" + s + "deg)"),
                    o && b.commonOrigin && C(a, o),
                    d && (Y(d, b.duration + "ms"),
                    _(d, "ease-out"),
                    L(d, "translate3d(" + -(.25 * k) + "%, " + .25 * j + "%, 0)"),
                    N(d, Math.max(Math.abs(j), Math.abs(k)) / 100)),
                    R({
                        rotateXPercentage: j,
                        rotateYPercentage: k,
                        duration: b.duration + "ms",
                        easeOut: !0
                    }),
                    "function" == typeof b.onRotate && b.onRotate(i, s)
                }
                ,
                k = function() {
                    X.push(function() {
                        return O.classList.add("atropos-active")
                    }),
                    Y(a, b.duration + "ms"),
                    _(a, "ease-out"),
                    L(o, "translate3d(0,0, " + b.activeOffset + "px)"),
                    Y(o, b.duration + "ms"),
                    _(o, "ease-out"),
                    f && (Y(f, b.duration + "ms"),
                    _(f, "ease-out")),
                    x.isActive = !0
                }
                ,
                I = function(t) {
                    if (h = void 0,
                    ("pointerdown" !== t.type || "mouse" !== t.pointerType) && ("pointerenter" !== t.type || "mouse" === t.pointerType)) {
                        if ("pointerdown" === t.type && t.preventDefault(),
                        v = t.clientX,
                        m = t.clientY,
                        b.alwaysActive) {
                            u = void 0,
                            l = void 0;
                            return
                        }
                        k(),
                        "function" == typeof b.onEnter && b.onEnter()
                    }
                }
                ,
                P = function(t) {
                    !1 === h && t.cancelable && t.preventDefault()
                }
                ,
                D = function(t) {
                    if (b.rotate && x.isActive) {
                        if ("mouse" !== t.pointerType) {
                            if (!b.rotateTouch)
                                return;
                            t.preventDefault()
                        }
                        var e = t.clientX
                          , a = t.clientY
                          , o = e - v
                          , n = a - m;
                        if ("string" == typeof b.rotateTouch && (0 !== o || 0 !== n) && void 0 === h) {
                            if (o * o + n * n >= 25) {
                                var r = 180 * Math.atan2(Math.abs(n), Math.abs(o)) / Math.PI;
                                h = "scroll-y" === b.rotateTouch ? r > 45 : 90 - r > 45
                            }
                            !1 === h && (O.classList.add("atropos-rotate-touch"),
                            t.cancelable && t.preventDefault())
                        }
                        "mouse" !== t.pointerType && h || j(e, a)
                    }
                }
                ,
                F = function(t) {
                    if (u = void 0,
                    l = void 0,
                    x.isActive && (!t || "pointerup" !== t.type || "mouse" !== t.pointerType) && (!t || "pointerleave" !== t.type || "mouse" === t.pointerType)) {
                        if ("string" == typeof b.rotateTouch && h && O.classList.remove("atropos-rotate-touch"),
                        b.alwaysActive) {
                            j(),
                            "function" == typeof b.onRotate && b.onRotate(0, 0),
                            "function" == typeof b.onLeave && b.onLeave();
                            return
                        }
                        X.push(function() {
                            return O.classList.remove("atropos-active")
                        }),
                        Y(o, b.duration + "ms"),
                        _(o, ""),
                        L(o, "translate3d(0,0, 0px)"),
                        f && (Y(f, b.duration + "ms"),
                        _(f, "")),
                        d && (Y(d, b.duration + "ms"),
                        _(d, ""),
                        L(d, "translate3d(0, 0, 0)"),
                        N(d, 0)),
                        Y(a, b.duration + "ms"),
                        _(a, ""),
                        L(a, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),
                        R({
                            duration: b.duration + "ms"
                        }),
                        x.isActive = !1,
                        "function" == typeof b.onRotate && b.onRotate(0, 0),
                        "function" == typeof b.onLeave && b.onLeave()
                    }
                }
                ,
                S = function(t) {
                    var e = t.target;
                    !E.contains(e) && e !== E && x.isActive && F()
                }
                ,
                x.destroy = function() {
                    x.destroyed = !0,
                    cancelAnimationFrame(y),
                    A(document, "click", S),
                    A(E, "pointerdown", I),
                    A(E, "pointerenter", I),
                    A(E, "pointermove", D),
                    A(E, "touchmove", P),
                    A(E, "pointerleave", F),
                    A(E, "pointerup", F),
                    A(E, "lostpointercapture", F),
                    delete O.__atropos__
                }
                ,
                "string" == typeof O && (O = r(document, O)),
                O && (O.__atropos__ || (void 0 !== E ? "string" == typeof E && (E = r(document, E)) : E = O,
                Object.assign(x, {
                    el: O
                }),
                a = r(O, ".atropos-rotate"),
                o = r(O, ".atropos-scale"),
                s = r(O, ".atropos-inner"),
                O.__atropos__ = x)),
                O && E && (b.shadow && ((f = r(O, ".atropos-shadow")) || ((f = document.createElement("span")).classList.add("atropos-shadow"),
                Z = !0),
                L(f, "translate3d(0,0,-" + b.shadowOffset + "px) scale(" + b.shadowScale + ")"),
                Z && a.appendChild(f)),
                b.highlight && ((d = r(O, ".atropos-highlight")) || ((d = document.createElement("span")).classList.add("atropos-highlight"),
                q = !0),
                L(d, "translate3d(0,0,0)"),
                q && s.appendChild(d)),
                b.rotateTouch && ("string" == typeof b.rotateTouch ? O.classList.add("atropos-rotate-touch-" + b.rotateTouch) : O.classList.add("atropos-rotate-touch")),
                r(O, "[data-atropos-opacity]") && R({
                    opacityOnly: !0
                }),
                T(document, "click", S),
                T(E, "pointerdown", I),
                T(E, "pointerenter", I),
                T(E, "pointermove", D),
                T(E, "touchmove", P),
                T(E, "pointerleave", F),
                T(E, "pointerup", F),
                T(E, "lostpointercapture", F),
                b.alwaysActive && (k(),
                j())),
                x)
            }
              , x = function() {
                w.current && (w.current.destroy(),
                w.current = null)
            };
            return (0,
            o.useEffect)(function() {
                return M.current && E(),
                function() {
                    x()
                }
            }, []),
            (0,
            o.useEffect)(function() {
                return w.current && (w.current.params.onEnter = t.onEnter,
                w.current.params.onLeave = t.onLeave,
                w.current.params.onRotate = t.onRotate),
                function() {
                    w.current && (w.current.params.onEnter = null,
                    w.current.params.onLeave = null,
                    w.current.params.onRotate = null)
                }
            }),
            o.createElement(void 0 === e ? "div" : e, c({
                className: O("atropos", void 0 === h ? "" : h)
            }, l(g), {
                ref: M
            }), o.createElement("span", {
                className: O("atropos-scale", void 0 === v ? "" : v)
            }, o.createElement("span", {
                className: O("atropos-rotate", void 0 === m ? "" : m)
            }, o.createElement("span", {
                className: O("atropos-inner", void 0 === y ? "" : y)
            }, a, (t.highlight || void 0 === t.highlight) && o.createElement("span", {
                className: "atropos-highlight"
            })), d, (t.shadow || void 0 === t.shadow) && o.createElement("span", {
                className: "atropos-shadow"
            })), f), u)
        }
    }
}]);
