! function(h, C) {
    function t(e, t) {
        return t.toUpperCase()
    }

    function r(e) {
        !g.addEventListener && "load" !== e.type && "complete" !== g.readyState || (q(), xe.ready())
    }
    var i, n, y = typeof C,
        e = h.location,
        g = h.document,
        o = g.documentElement,
        a = h.jQuery,
        s = h.$,
        u = {},
        f = [],
        l = "1.10.2",
        m = f.concat,
        c = f.push,
        p = f.slice,
        d = f.indexOf,
        v = u.toString,
        b = u.hasOwnProperty,
        x = l.trim,
        xe = function(e, t) {
            return new xe.fn.init(e, t, n)
        },
        T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        N = /\S+/g,
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        A = /(?:^|:|,)(?:\s*\[)+/g,
        j = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        D = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        L = /^-ms-/,
        H = /-([\da-z])/gi,
        q = function() {
            g.addEventListener ? (g.removeEventListener("DOMContentLoaded", r, !1), h.removeEventListener("load", r, !1)) : (g.detachEvent("onreadystatechange", r), h.detachEvent("onload", r))
        };

    function _(e) {
        var t = e.length,
            n = xe.type(e);
        return !xe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && 0 < t && t - 1 in e)))
    }
    xe.fn = xe.prototype = {
            jquery: l,
            constructor: xe,
            init: function(e, t, n) {
                var r, i;
                if (!e) return this;
                if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : xe.isFunction(e) ? n.ready(e) : (e.selector !== C && (this.selector = e.selector, this.context = e.context), xe.makeArray(e, this));
                if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof xe ? t[0] : t, xe.merge(this, xe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), E.test(r[1]) && xe.isPlainObject(t))
                        for (r in t) xe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if ((i = g.getElementById(r[2])) && i.parentNode) {
                    if (i.id !== r[2]) return n.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = g, this.selector = e, this
            },
            selector: "",
            length: 0,
            toArray: function() {
                return p.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = xe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return xe.each(this, e, t)
            },
            ready: function(e) {
                return xe.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(p.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            map: function(n) {
                return this.pushStack(xe.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: c,
            sort: [].sort,
            splice: [].splice
        }, xe.fn.init.prototype = xe.fn, xe.extend = xe.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[1] || {}, s = 2), "object" == typeof a || xe.isFunction(a) || (a = {}), u === s && (a = this, --s); s < u; s++)
                if (null != (i = arguments[s]))
                    for (r in i) e = a[r], a !== (n = i[r]) && (l && n && (xe.isPlainObject(n) || (t = xe.isArray(n))) ? (o = t ? (t = !1, e && xe.isArray(e) ? e : []) : e && xe.isPlainObject(e) ? e : {}, a[r] = xe.extend(l, o, n)) : n !== C && (a[r] = n));
            return a
        }, xe.extend({
            expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                return h.$ === xe && (h.$ = s), e && h.jQuery === xe && (h.jQuery = a), xe
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? xe.readyWait++ : xe.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--xe.readyWait : !xe.isReady) {
                    if (!g.body) return setTimeout(xe.ready);
                    (xe.isReady = !0) !== e && 0 < --xe.readyWait || (i.resolveWith(g, [xe]), xe.fn.trigger && xe(g).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === xe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === xe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[v.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== xe.type(e) || e.nodeType || xe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !b.call(e, "constructor") && !b.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (xe.support.ownLast)
                    for (t in e) return b.call(e, t);
                for (t in e);
                return t === C || b.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || g;
                var r = E.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = xe.buildFragment([e], t, i), i && xe(i).remove(), xe.merge([], r.childNodes))
            },
            parseJSON: function(e) {
                return h.JSON && h.JSON.parse ? h.JSON.parse(e) : null === e ? e : "string" == typeof e && ((e = xe.trim(e)) && S.test(e.replace(j, "@").replace(D, "]").replace(A, ""))) ? Function("return " + e)() : (xe.error("Invalid JSON: " + e), C)
            },
            parseXML: function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                } catch (e) {
                    t = C
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || xe.error("Invalid XML: " + e), t
            },
            noop: function() {},
            globalEval: function(e) {
                e && xe.trim(e) && (h.execScript || function(e) {
                    h.eval.call(h, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(L, "ms-").replace(H, t)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r = 0,
                    i = e.length,
                    o = _(e);
                if (n) {
                    if (o)
                        for (; r < i && !1 !== t.apply(e[r], n); r++);
                    else
                        for (r in e)
                            if (!1 === t.apply(e[r], n)) break
                } else if (o)
                    for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: x && !x.call("\ufeff ") ? function(e) {
                return null == e ? "" : x.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(w, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (_(Object(e)) ? xe.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (d) return d.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                var n = t.length,
                    r = e.length,
                    i = 0;
                if ("number" == typeof n)
                    for (; i < n; i++) e[r++] = t[i];
                else
                    for (; t[i] !== C;) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                var r = [],
                    i = 0,
                    o = e.length;
                for (n = !!n; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i = 0,
                    o = e.length,
                    a = [];
                if (_(e))
                    for (; i < o; i++) null != (r = t(e[i], i, n)) && (a[a.length] = r);
                else
                    for (i in e) null != (r = t(e[i], i, n)) && (a[a.length] = r);
                return m.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (i = e[t], t = e, e = i), xe.isFunction(e) ? (n = p.call(arguments, 2), (r = function() {
                    return e.apply(t || this, n.concat(p.call(arguments)))
                }).guid = e.guid = e.guid || xe.guid++, r) : C
            },
            access: function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === xe.type(n))
                    for (s in i = !0, n) xe.access(e, t, s, n[s], !0, o, a);
                else if (r !== C && (i = !0, xe.isFunction(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                        return l.call(xe(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            }
        }), xe.ready.promise = function(e) {
            if (!i)
                if (i = xe.Deferred(), "complete" === g.readyState) setTimeout(xe.ready);
                else if (g.addEventListener) g.addEventListener("DOMContentLoaded", r, !1), h.addEventListener("load", r, !1);
            else {
                g.attachEvent("onreadystatechange", r), h.attachEvent("onload", r);
                var n = !1;
                try {
                    n = null == h.frameElement && g.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!xe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        q(), xe.ready()
                    }
                }()
            }
            return i.promise(e)
        }, xe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            u["[object " + t + "]"] = t.toLowerCase()
        }), n = xe(g),
        function(n, i) {
            var e, h, T, w, o, r, g, C, l, m, N, a, y, v, s, c, b, x = "sizzle" + -new Date,
                k = n.document,
                E = 0,
                f = 0,
                u = ie(),
                p = ie(),
                d = ie(),
                S = !1,
                A = function(e, t) {
                    return e === t && (S = !0), 0
                },
                j = typeof i,
                D = {}.hasOwnProperty,
                t = [],
                L = t.pop,
                H = t.push,
                q = t.push,
                _ = t.slice,
                M = t.indexOf || function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                P = B.replace("w", "w#"),
                R = "\\[" + F + "*(" + B + ")" + F + "*(?:([*^$|!~]?=)" + F + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + P + ")|)|)" + F + "*\\]",
                W = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + R.replace(3, 8) + ")*)|.*)\\)|)",
                $ = RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                I = RegExp("^" + F + "*," + F + "*"),
                z = RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                X = RegExp(F + "*[+~]"),
                U = RegExp("=" + F + "*([^\\]'\"]*)" + F + "*\\]", "g"),
                V = RegExp(W),
                Y = RegExp("^" + P + "$"),
                J = {
                    ID: RegExp("^#(" + B + ")"),
                    CLASS: RegExp("^\\.(" + B + ")"),
                    TAG: RegExp("^(" + B.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + R),
                    PSEUDO: RegExp("^" + W),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + O + ")$", "i"),
                    needsContext: RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                },
                G = /^[^{]+\{\s*\[native \w/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                ee = /'|\\/g,
                te = RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
                ne = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                q.apply(t = _.call(k.childNodes), k.childNodes), t[k.childNodes.length].nodeType
            } catch (e) {
                q = {
                    apply: t.length ? function(e, t) {
                        H.apply(e, _.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function re(e, t, n, r) {
                var i, o, a, s, u, l, c, f, p, d;
                if ((t ? t.ownerDocument || t : k) !== N && m(t), n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = (t = t || N).nodeType) && 9 !== s) return [];
                if (y && !r) {
                    if (i = Q.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && b(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return q.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && h.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (h.qsa && (!v || !v.test(e))) {
                        if (f = c = x, p = t, d = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = de(e), (c = t.getAttribute("id")) ? f = c.replace(ee, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + he(l[u]);
                            p = X.test(e) && t.parentNode || t, d = l.join(",")
                        }
                        if (d) try {
                            return q.apply(n, p.querySelectorAll(d)), n
                        } catch (e) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return function(e, t, n, r) {
                    var i, o, a, s, u, l = de(e);
                    if (!r && 1 === l.length) {
                        if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && y && w.relative[o[1].type]) {
                            if (!(t = (w.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (i = J.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                            if ((u = w.find[s]) && (r = u(a.matches[0].replace(te, ne), X.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(i, 1), !(e = r.length && he(o))) return q.apply(n, r), n;
                                break
                            }
                    }
                    return g(e, l)(r, t, !y, n, X.test(e)), n
                }(e.replace($, "$1"), t, n, r)
            }

            function ie() {
                var r = [];
                return function e(t, n) {
                    return r.push(t += " ") > w.cacheLength && delete e[r.shift()], e[t] = n
                }
            }

            function oe(e) {
                return e[x] = !0, e
            }

            function ae(e) {
                var t = N.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function se(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
            }

            function ue(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function le(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ce(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function fe(a) {
                return oe(function(o) {
                    return o = +o, oe(function(e, t) {
                        for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }
            for (e in r = re.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, h = re.support = {}, m = re.setDocument = function(e) {
                    var u = e ? e.ownerDocument || e : k,
                        t = u.defaultView;
                    return u !== N && 9 === u.nodeType && u.documentElement ? (a = (N = u).documentElement, y = !r(u), t && t.attachEvent && t !== t.top && t.attachEvent("onbeforeunload", function() {
                        m()
                    }), h.attributes = ae(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), h.getElementsByTagName = ae(function(e) {
                        return e.appendChild(u.createComment("")), !e.getElementsByTagName("*").length
                    }), h.getElementsByClassName = ae(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), h.getById = ae(function(e) {
                        return a.appendChild(e).id = x, !u.getElementsByName || !u.getElementsByName(x).length
                    }), h.getById ? (w.find.ID = function(e, t) {
                        if (typeof t.getElementById != j && y) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, w.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete w.find.ID, w.filter.ID = function(e) {
                        var n = e.replace(te, ne);
                        return function(e) {
                            var t = typeof e.getAttributeNode != j && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), w.find.TAG = h.getElementsByTagName ? function(e, t) {
                        return typeof t.getElementsByTagName != j ? t.getElementsByTagName(e) : i
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, w.find.CLASS = h.getElementsByClassName && function(e, t) {
                        return typeof t.getElementsByClassName != j && y ? t.getElementsByClassName(e) : i
                    }, s = [], v = [], (h.qsa = G.test(u.querySelectorAll)) && (ae(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + F + "*(?:value|" + O + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                    }), ae(function(e) {
                        var t = u.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (h.matchesSelector = G.test(c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ae(function(e) {
                        h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), s.push("!=", W)
                    }), v = v.length && RegExp(v.join("|")), s = s.length && RegExp(s.join("|")), b = G.test(a.contains) || a.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, A = a.compareDocumentPosition ? function(e, t) {
                        if (e === t) return S = !0, 0;
                        var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return n ? 1 & n || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === u || b(k, e) ? -1 : t === u || b(k, t) ? 1 : l ? M.call(l, e) - M.call(l, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (e === t) return S = !0, 0;
                        if (!i || !o) return e === u ? -1 : t === u ? 1 : i ? -1 : o ? 1 : l ? M.call(l, e) - M.call(l, t) : 0;
                        if (i === o) return ue(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? ue(a[r], s[r]) : a[r] === k ? -1 : s[r] === k ? 1 : 0
                    }, u) : N
                }, re.matches = function(e, t) {
                    return re(e, null, null, t)
                }, re.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== N && m(e), t = t.replace(U, "='$1']"), !(!h.matchesSelector || !y || s && s.test(t) || v && v.test(t))) try {
                        var n = c.call(e, t);
                        if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return 0 < re(t, N, null, [e]).length
                }, re.contains = function(e, t) {
                    return (e.ownerDocument || e) !== N && m(e), b(e, t)
                }, re.attr = function(e, t) {
                    (e.ownerDocument || e) !== N && m(e);
                    var n = w.attrHandle[t.toLowerCase()],
                        r = n && D.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !y) : i;
                    return r === i ? h.attributes || !y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null : r
                }, re.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }, re.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (S = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(A), S) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return e
                }, o = re.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += o(t);
                    return n
                }, (w = re.selectors = {
                    cacheLength: 50,
                    createPseudo: oe,
                    match: J,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== i ? e[2] = e[4] : n && V.test(n) && (t = de(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = u[e + " "];
                            return t || (t = RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && u(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute != j && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = re.attr(e, n);
                                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(d, e, t, h, g) {
                            var m = "nth" !== d.slice(0, 3),
                                y = "last" !== d.slice(-4),
                                v = "of-type" === e;
                            return 1 === h && 0 === g ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var r, i, o, a, s, u, l = m != y ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    f = v && e.nodeName.toLowerCase(),
                                    p = !n && !v;
                                if (c) {
                                    if (m) {
                                        for (; l;) {
                                            for (o = e; o = o[l];)
                                                if (v ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                                            u = l = "only" === d && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                        for (s = (r = (i = c[x] || (c[x] = {}))[d] || [])[0] === E && r[1], a = r[0] === E && r[2], o = s && c.childNodes[s]; o = ++s && o && o[l] || (a = s = 0) || u.pop();)
                                            if (1 === o.nodeType && ++a && o === e) {
                                                i[d] = [E, s, a];
                                                break
                                            }
                                    } else if (p && (r = (e[x] || (e[x] = {}))[d]) && r[0] === E) a = r[1];
                                    else
                                        for (;
                                            (o = ++s && o && o[l] || (a = s = 0) || u.pop()) && ((v ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++a || (p && ((o[x] || (o[x] = {}))[d] = [E, a]), o !== e)););
                                    return (a -= g) === h || 0 == a % h && 0 <= a / h
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return a[x] ? a(o) : 1 < a.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                                for (var n, r = a(e, o), i = r.length; i--;) e[n = M.call(e, r[i])] = !(t[n] = r[i])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: oe(function(e) {
                            var r = [],
                                i = [],
                                s = g(e.replace($, "$1"));
                            return s[x] ? oe(function(e, t, n, r) {
                                for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                            }) : function(e, t, n) {
                                return r[0] = e, s(r, null, n, i), !i.pop()
                            }
                        }),
                        has: oe(function(t) {
                            return function(e) {
                                return 0 < re(t, e).length
                            }
                        }),
                        contains: oe(function(t) {
                            return function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                        }),
                        lang: oe(function(n) {
                            return Y.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === a
                        },
                        focus: function(e) {
                            return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !w.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Z.test(e.nodeName)
                        },
                        input: function(e) {
                            return K.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: fe(function() {
                            return [0]
                        }),
                        last: fe(function(e, t) {
                            return [t - 1]
                        }),
                        eq: fe(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: fe(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: fe(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: fe(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: fe(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; t > ++r;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = w.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[e] = le(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[e] = ce(e);

            function pe() {}

            function de(e, t) {
                var n, r, i, o, a, s, u, l = p[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = w.preFilter; a;) {
                    for (o in n && !(r = I.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace($, " ")
                        }), a = a.slice(n.length)), w.filter) !(r = J[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? re.error(e) : p(e, s).slice(0)
            }

            function he(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function ge(s, e, t) {
                var u = e.dir,
                    l = t && "parentNode" === u,
                    c = f++;
                return e.first ? function(e, t, n) {
                    for (; e = e[u];)
                        if (1 === e.nodeType || l) return s(e, t, n)
                } : function(e, t, n) {
                    var r, i, o, a = E + " " + c;
                    if (n) {
                        for (; e = e[u];)
                            if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                    } else
                        for (; e = e[u];)
                            if (1 === e.nodeType || l)
                                if ((i = (o = e[x] || (e[x] = {}))[u]) && i[0] === a) {
                                    if (!0 === (r = i[1]) || r === T) return !0 === r
                                } else if ((i = o[u] = [a])[1] = s(e, t, n) || T, !0 === i[1]) return !0
                }
            }

            function me(i) {
                return 1 < i.length ? function(e, t, n) {
                    for (var r = i.length; r--;)
                        if (!i[r](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function ye(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) !(o = e[s]) || n && !n(o, r, i) || (a.push(o), l && t.push(s));
                return a
            }

            function ve(d, h, g, m, y, e) {
                return m && !m[x] && (m = ve(m)), y && !y[x] && (y = ve(y, e)), oe(function(e, t, n, r) {
                    var i, o, a, s = [],
                        u = [],
                        l = t.length,
                        c = e || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || !e && h ? c : ye(c, s, d, n, r),
                        p = g ? y || (e ? d : l || m) ? [] : t : f;
                    if (g && g(f, p, n, r), m)
                        for (i = ye(p, u), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    if (e) {
                        if (y || d) {
                            if (y) {
                                for (i = [], o = p.length; o--;)(a = p[o]) && i.push(f[o] = a);
                                y(null, p = [], i, r)
                            }
                            for (o = p.length; o--;)(a = p[o]) && -1 < (i = y ? M.call(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else p = ye(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : q.apply(t, p)
                })
            }

            function be(e) {
                for (var r, t, n, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = ge(function(e) {
                        return e === r
                    }, a, !0), l = ge(function(e) {
                        return -1 < M.call(r, e)
                    }, a, !0), c = [function(e, t, n) {
                        return !o && (n || t !== C) || ((r = t).nodeType ? u(e, t, n) : l(e, t, n))
                    }]; s < i; s++)
                    if (t = w.relative[e[s].type]) c = [ge(me(c), t)];
                    else {
                        if ((t = w.filter[e[s].type].apply(null, e[s].matches))[x]) {
                            for (n = ++s; n < i && !w.relative[e[n].type]; n++);
                            return ve(1 < s && me(c), 1 < s && he(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace($, "$1"), t, s < n && be(e.slice(s, n)), n < i && be(e = e.slice(n)), n < i && he(e))
                        }
                        c.push(t)
                    }
                return me(c)
            }
            pe.prototype = w.filters = w.pseudos, w.setFilters = new pe, g = re.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = d[e + " "];
                if (!o) {
                    for (t || (t = de(e)), n = t.length; n--;)(o = be(t[n]))[x] ? r.push(o) : i.push(o);
                    o = d(e, function(m, y) {
                        function e(e, t, n, r, i) {
                            var o, a, s, u = [],
                                l = 0,
                                c = "0",
                                f = e && [],
                                p = null != i,
                                d = C,
                                h = e || x && w.find.TAG("*", i && t.parentNode || t),
                                g = E += null == d ? 1 : Math.random() || .1;
                            for (p && (C = t !== N && t, T = v); null != (o = h[c]); c++) {
                                if (x && o) {
                                    for (a = 0; s = m[a++];)
                                        if (s(o, t, n)) {
                                            r.push(o);
                                            break
                                        }
                                    p && (E = g, T = ++v)
                                }
                                b && ((o = !s && o) && l--, e && f.push(o))
                            }
                            if (l += c, b && c !== l) {
                                for (a = 0; s = y[a++];) s(f, u, t, n);
                                if (e) {
                                    if (0 < l)
                                        for (; c--;) f[c] || u[c] || (u[c] = L.call(r));
                                    u = ye(u)
                                }
                                q.apply(r, u), p && !e && 0 < u.length && 1 < l + y.length && re.uniqueSort(r)
                            }
                            return p && (E = g, C = d), f
                        }
                        var v = 0,
                            b = 0 < y.length,
                            x = 0 < m.length;
                        return b ? oe(e) : e
                    }(i, r))
                }
                return o
            }, h.sortStable = x.split("").sort(A).join("") === x, h.detectDuplicates = S, m(), h.sortDetached = ae(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }), ae(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || se("type|href|height|width", function(e, t, n) {
                return n ? i : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), h.attributes && ae(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || se("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? i : e.defaultValue
            }), ae(function(e) {
                return null == e.getAttribute("disabled")
            }) || se(O, function(e, t, n) {
                var r;
                return n ? i : (r = e.getAttributeNode(t)) && r.specified ? r.value : !0 === e[t] ? t.toLowerCase() : null
            }), xe.find = re, xe.expr = re.selectors, xe.expr[":"] = xe.expr.pseudos, xe.unique = re.uniqueSort, xe.text = re.getText, xe.isXMLDoc = re.isXML, xe.contains = re.contains
        }(h);
    var M = {};
    xe.Callbacks = function(i) {
        i = "string" == typeof i ? M[i] || function(e) {
            var n = M[e] = {};
            return xe.each(e.match(N) || [], function(e, t) {
                n[t] = !0
            }), n
        }(i) : xe.extend({}, i);
        var r, t, n, o, a, s, u = [],
            l = !i.once && [],
            c = function(e) {
                for (t = i.memory && e, n = !0, a = s || 0, s = 0, o = u.length, r = !0; u && a < o; a++)
                    if (!1 === u[a].apply(e[0], e[1]) && i.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var e = u.length;
                        (function r(e) {
                            xe.each(e, function(e, t) {
                                var n = xe.type(t);
                                "function" === n ? i.unique && f.has(t) || u.push(t) : t && t.length && "string" !== n && r(t)
                            })
                        })(arguments), r ? o = u.length : t && (s = e, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && xe.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = xe.inArray(t, u, n));) u.splice(n, 1), r && (n <= o && o--, n <= a && a--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < xe.inArray(e, u) : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], o = 0, this
                },
                disable: function() {
                    return u = l = t = C, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = C, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, xe.extend({
        Deferred: function(e) {
            var a = [
                    ["resolve", "done", xe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", xe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", xe.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return u.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return xe.Deferred(function(i) {
                            xe.each(a, function(e, t) {
                                var n = t[0],
                                    r = xe.isFunction(o[e]) && o[e];
                                u[t[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && xe.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[n + "With"](this === s ? i.promise() : this, r ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? xe.extend(e, s) : s
                    }
                },
                u = {};
            return s.pipe = s.then, xe.each(a, function(e, t) {
                var n = t[2],
                    r = t[3];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, a[1 ^ e][2].disable, a[2][2].lock), u[t[0]] = function() {
                    return u[t[0] + "With"](this === u ? s : this, arguments), this
                }, u[t[0] + "With"] = n.fireWith
            }), s.promise(u), e && e.call(u, u), u
        },
        when: function(e) {
            function t(t, n, r) {
                return function(e) {
                    n[t] = this, r[t] = 1 < arguments.length ? p.call(arguments) : e, r === i ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                }
            }
            var i, n, r, o = 0,
                a = p.call(arguments),
                s = a.length,
                u = 1 !== s || e && xe.isFunction(e.promise) ? s : 0,
                l = 1 === u ? e : xe.Deferred();
            if (1 < s)
                for (i = Array(s), n = Array(s), r = Array(s); o < s; o++) a[o] && xe.isFunction(a[o].promise) ? a[o].promise().done(t(o, r, a)).fail(l.reject).progress(t(o, n, i)) : --u;
            return u || l.resolveWith(r, a), l.promise()
        }
    }), xe.support = function(o) {
        var e, t, n, r, i, a, s, u, l, c = g.createElement("div");
        if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("*") || [], !(t = c.getElementsByTagName("a")[0]) || !t.style || !e.length) return o;
        a = (r = g.createElement("select")).appendChild(g.createElement("option")), n = c.getElementsByTagName("input")[0], t.style.cssText = "top:1px;float:left;opacity:.5", o.getSetAttribute = "t" !== c.className, o.leadingWhitespace = 3 === c.firstChild.nodeType, o.tbody = !c.getElementsByTagName("tbody").length, o.htmlSerialize = !!c.getElementsByTagName("link").length, o.style = /top/.test(t.getAttribute("style")), o.hrefNormalized = "/a" === t.getAttribute("href"), o.opacity = /^0.5/.test(t.style.opacity), o.cssFloat = !!t.style.cssFloat, o.checkOn = !!n.value, o.optSelected = a.selected, o.enctype = !!g.createElement("form").enctype, o.html5Clone = "<:nav></:nav>" !== g.createElement("nav").cloneNode(!0).outerHTML, o.inlineBlockNeedsLayout = !1, o.shrinkWrapBlocks = !1, o.pixelPosition = !1, o.deleteExpando = !0, o.noCloneEvent = !0, o.reliableMarginRight = !0, o.boxSizingReliable = !0, n.checked = !0, o.noCloneChecked = n.cloneNode(!0).checked, r.disabled = !0, o.optDisabled = !a.disabled;
        try {
            delete c.test
        } catch (e) {
            o.deleteExpando = !1
        }
        for (l in (n = g.createElement("input")).setAttribute("value", ""), o.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), o.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), (i = g.createDocumentFragment()).appendChild(n), o.appendChecked = n.checked, o.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function() {
                o.noCloneEvent = !1
            }), c.cloneNode(!0).click()), {
                submit: !0,
                change: !0,
                focusin: !0
            }) c.setAttribute(s = "on" + l, "t"), o[l + "Bubbles"] = s in h || !1 === c.attributes[s].expando;
        for (l in c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === c.style.backgroundClip, xe(o)) break;
        return o.ownLast = "0" !== l, xe(function() {
            var e, t, n, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                i = g.getElementsByTagName("body")[0];
            i && ((e = g.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", i.appendChild(e).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = c.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", o.reliableHiddenOffsets = u && 0 === n[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", xe.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                o.boxSizing = 4 === c.offsetWidth
            }), h.getComputedStyle && (o.pixelPosition = "1%" !== (h.getComputedStyle(c, null) || {}).top, o.boxSizingReliable = "4px" === (h.getComputedStyle(c, null) || {
                width: "4px"
            }).width, (t = c.appendChild(g.createElement("div"))).style.cssText = c.style.cssText = r, t.style.marginRight = t.style.width = "0", c.style.width = "1px", o.reliableMarginRight = !parseFloat((h.getComputedStyle(t, null) || {}).marginRight)), typeof c.style.zoom !== y && (c.innerHTML = "", c.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", o.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", o.shrinkWrapBlocks = 3 !== c.offsetWidth, o.inlineBlockNeedsLayout && (i.style.zoom = 1)), i.removeChild(e), e = c = n = t = null)
        }), e = r = i = a = t = n = null, o
    }({});
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        F = /([A-Z])/g;

    function B(e, t, n, r) {
        if (xe.acceptData(e)) {
            var i, o, a = xe.expando,
                s = e.nodeType,
                u = s ? xe.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || n !== C || "string" != typeof t) return l || (l = s ? e[a] = f.pop() || xe.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: xe.noop
            }), "object" != typeof t && "function" != typeof t || (r ? u[l] = xe.extend(u[l], t) : u[l].data = xe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), n !== C && (o[xe.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[xe.camelCase(t)]) : i = o, i
        }
    }

    function P(e, t, n) {
        if (xe.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? xe.cache : e,
                s = o ? e[xe.expando] : xe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = xe.isArray(t) ? t.concat(xe.map(t, xe.camelCase)) : t in r ? [t] : (t = xe.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !W(r) : !xe.isEmptyObject(r)) return
                }(n || (delete a[s].data, W(a[s]))) && (o ? xe.cleanData([e], !0) : xe.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function R(e, t, n) {
        if (n === C && 1 === e.nodeType) {
            var r = "data-" + t.replace(F, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? xe.parseJSON(n) : n)
                } catch (e) {}
                xe.data(e, t, n)
            } else n = C
        }
        return n
    }

    function W(e) {
        var t;
        for (t in e)
            if (("data" !== t || !xe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    xe.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? xe.cache[e[xe.expando]] : e[xe.expando]) && !W(e)
        },
        data: function(e, t, n) {
            return B(e, t, n)
        },
        removeData: function(e, t) {
            return P(e, t)
        },
        _data: function(e, t, n) {
            return B(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return P(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && xe.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), xe.fn.extend({
        data: function(e, t) {
            var n, r, i = null,
                o = 0,
                a = this[0];
            if (e !== C) return "object" == typeof e ? this.each(function() {
                xe.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                xe.data(this, e, t)
            }) : a ? R(a, e, xe.data(a, e)) : null;
            if (this.length && (i = xe.data(a), 1 === a.nodeType && !xe._data(a, "parsedAttrs"))) {
                for (n = a.attributes; n.length > o; o++) 0 === (r = n[o].name).indexOf("data-") && R(a, r = xe.camelCase(r.slice(5)), i[r]);
                xe._data(a, "parsedAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                xe.removeData(this, e)
            })
        }
    }), xe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = xe._data(e, t), n && (!r || xe.isArray(n) ? r = xe._data(e, t, xe.makeArray(n)) : r.push(n)), r || []) : C
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = xe.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = xe._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                xe.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return xe._data(e, n) || xe._data(e, n, {
                empty: xe.Callbacks("once memory").add(function() {
                    xe._removeData(e, t + "queue"), xe._removeData(e, n)
                })
            })
        }
    }), xe.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? xe.queue(this[0], t) : n === C ? this : this.each(function() {
                var e = xe.queue(this, t, n);
                xe._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && xe.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                xe.dequeue(this, e)
            })
        },
        delay: function(r, e) {
            return r = xe.fx && xe.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
                var n = setTimeout(e, r);
                t.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(a, [a])
            }
            var r, i = 1,
                o = xe.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = C), e = e || "fx"; s--;)(r = xe._data(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });
    var $, I, z = /[\t\r\n\f]/g,
        X = /\r/g,
        U = /^(?:input|select|textarea|button|object)$/i,
        V = /^(?:a|area)$/i,
        Y = /^(?:checked|selected)$/i,
        J = xe.support.getSetAttribute,
        G = xe.support.input;
    xe.fn.extend({
        attr: function(e, t) {
            return xe.access(this, xe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                xe.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return xe.access(this, xe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = xe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = C, delete this[e]
                } catch (e) {}
            })
        },
        addClass: function(t) {
            var e, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof t && t;
            if (xe.isFunction(t)) return this.each(function(e) {
                xe(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(N) || []; a < s; a++)
                    if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = xe.trim(r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (xe.isFunction(t)) return this.each(function(e) {
                xe(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(N) || []; a < s; a++)
                    if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(z, " ") : "")) {
                        for (o = 0; i = e[o++];)
                            for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        n.className = t ? xe.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : xe.isFunction(i) ? this.each(function(e) {
                xe(this).toggleClass(i.call(this, e, this.className, t), t)
            }) : this.each(function() {
                if ("string" == o)
                    for (var e, t = 0, n = xe(this), r = i.match(N) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o !== y && "boolean" != o || (this.className && xe._data(this, "__className__", this.className), this.className = this.className || !1 === i ? "" : xe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(z, " ").indexOf(t)) return !0;
            return !1
        },
        val: function(n) {
            var e, r, i, t = this[0];
            return arguments.length ? (i = xe.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, xe(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : xe.isArray(t) && (t = xe.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = xe.valHooks[this.type] || xe.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, t, "value") !== C || (this.value = t))
            })) : t ? (r = xe.valHooks[t.type] || xe.valHooks[t.nodeName.toLowerCase()]) && "get" in r && (e = r.get(t, "value")) !== C ? e : "string" == typeof(e = t.value) ? e.replace(X, "") : null == e ? "" : e : void 0
        }
    }), xe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = xe.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (!(!(n = r[u]).selected && u !== i || (xe.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && xe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = xe(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = xe.makeArray(t), a = i.length; a--;)((r = i[a]).selected = 0 <= xe.inArray(xe(r).val(), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === y ? xe.prop(e, t, n) : (1 === o && xe.isXMLDoc(e) || (t = t.toLowerCase(), r = xe.attrHooks[t] || (xe.expr.match.bool.test(t) ? I : $)), n === C ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = xe.find.attr(e, t)) ? C : i : null !== n ? r && "set" in r && (i = r.set(e, n, t)) !== C ? i : (e.setAttribute(t, n + ""), n) : (xe.removeAttr(e, t), C))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(N);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = xe.propFix[n] || n, xe.expr.match.bool.test(n) ? G && J || !Y.test(n) ? e[r] = !1 : e[xe.camelCase("default-" + n)] = e[r] = !1 : xe.attr(e, n, ""), e.removeAttribute(J ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!xe.support.radioValue && "radio" === t && xe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !xe.isXMLDoc(e)) && (t = xe.propFix[t] || t, i = xe.propHooks[t]), n !== C ? i && "set" in i && (r = i.set(e, n, t)) !== C ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = xe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : U.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), I = {
        set: function(e, t, n) {
            return !1 === t ? xe.removeAttr(e, n) : G && J || !Y.test(n) ? e.setAttribute(!J && xe.propFix[n] || n, n) : e[xe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, xe.each(xe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = xe.expr.attrHandle[t] || xe.find.attr;
        xe.expr.attrHandle[t] = G && J || !Y.test(t) ? function(e, t, n) {
            var r = xe.expr.attrHandle[t],
                i = n ? C : (xe.expr.attrHandle[t] = C) != o(e, t, n) ? t.toLowerCase() : null;
            return xe.expr.attrHandle[t] = r, i
        } : function(e, t, n) {
            return n ? C : e[xe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), G && J || (xe.attrHooks.value = {
        set: function(e, t, n) {
            return xe.nodeName(e, "input") ? (e.defaultValue = t, C) : $ && $.set(e, t, n)
        }
    }), J || ($ = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : C
        }
    }, xe.expr.attrHandle.id = xe.expr.attrHandle.name = xe.expr.attrHandle.coords = function(e, t, n) {
        var r;
        return n ? C : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, xe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : C
        },
        set: $.set
    }, xe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            $.set(e, "" !== t && t, n)
        }
    }, xe.each(["width", "height"], function(e, n) {
        xe.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : C
            }
        }
    })), xe.support.hrefNormalized || xe.each(["href", "src"], function(e, t) {
        xe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), xe.support.style || (xe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || C
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), xe.support.optSelected || (xe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), xe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        xe.propFix[this.toLowerCase()] = this
    }), xe.support.enctype || (xe.propFix.enctype = "encoding"), xe.each(["radio", "checkbox"], function() {
        xe.valHooks[this] = {
            set: function(e, t) {
                return xe.isArray(t) ? e.checked = 0 <= xe.inArray(xe(e).val(), t) : C
            }
        }, xe.support.checkOn || (xe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Q = /^(?:input|select|textarea)$/i,
        K = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        ee = /^(?:focusinfocus|focusoutblur)$/,
        te = /^([^.]*)(?:\.(.+)|)$/;

    function ne() {
        return !0
    }

    function re() {
        return !1
    }

    function ie() {
        try {
            return g.activeElement
        } catch (e) {}
    }
    xe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = xe._data(e);
            if (m) {
                for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = xe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || ((c = m.handle = function(e) {
                        return typeof xe === y || e && xe.event.triggered === e.type ? C : xe.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(N) || [""]).length; s--;) d = g = (o = te.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), d && (l = xe.event.special[d] || {}, d = (i ? l.delegateType : l.bindType) || d, l = xe.event.special[d] || {}, f = xe.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && xe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (p = a[d]) || ((p = a[d] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(d, c, !1) : e.attachEvent && e.attachEvent("on" + d, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, f) : p.push(f), xe.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = xe.hasData(e) && xe._data(e);
            if (m && (c = m.events)) {
                for (l = (t = (t || "").match(N) || [""]).length; l--;)
                    if (d = g = (s = te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = xe.event.special[d] || {}, p = c[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || xe.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) xe.event.remove(e, d + t[l], n, r, !0);
                xe.isEmptyObject(c) && (delete m.handle, xe._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || g],
                p = b.call(e, "type") ? e.type : e,
                d = b.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = n = n || g, 3 !== n.nodeType && 8 !== n.nodeType && !ee.test(p + xe.event.triggered) && (0 <= p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), o = p.indexOf(":") < 0 && "on" + p, (e = e[xe.expando] ? e : new xe.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = C, e.target || (e.target = n), t = null == t ? [e] : xe.makeArray(t, [e]), u = xe.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !xe.isWindow(n)) {
                    for (s = u.delegateType || p, ee.test(s + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                    l === (n.ownerDocument || g) && f.push(l.defaultView || l.parentWindow || h)
                }
                for (c = 0;
                    (a = f[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : u.bindType || p, (i = (xe._data(a, "events") || {})[e.type] && xe._data(a, "handle")) && i.apply(a, t), (i = o && a[o]) && xe.acceptData(a) && i.apply && !1 === i.apply(a, t) && e.preventDefault();
                if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), t)) && xe.acceptData(n) && o && n[p] && !xe.isWindow(n)) {
                    (l = n[o]) && (n[o] = null), xe.event.triggered = p;
                    try {
                        n[p]()
                    } catch (e) {}
                    xe.event.triggered = C, l && (n[o] = l)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = xe.event.fix(e);
            var t, n, r, i, o, a = [],
                s = p.call(arguments),
                u = (xe._data(this, "events") || {})[e.type] || [],
                l = xe.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = xe.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, (n = ((xe.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) !== C && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (i = [], o = 0; o < s; o++) i[n = (r = t[o]).selector + " "] === C && (i[n] = r.needsContext ? 0 <= xe(n, this).index(u) : xe.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return t.length > s && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[xe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Z.test(i) ? this.mouseHooks : K.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new xe.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || g), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || g).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === C || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ie() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ie() && this.blur ? (this.blur(), !1) : C
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return xe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : C
                },
                _default: function(e) {
                    return xe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== C && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = xe.extend(new xe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? xe.event.trigger(i, null, t) : xe.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, xe.removeEvent = g.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === y && (e[r] = null), e.detachEvent(r, n))
    }, xe.Event = function(e, t) {
        return this instanceof xe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? ne : re) : this.type = e, t && xe.extend(this, t), this.timeStamp = e && e.timeStamp || xe.now(), this[xe.expando] = !0, C) : new xe.Event(e, t)
    }, xe.Event.prototype = {
        isDefaultPrevented: re,
        isPropagationStopped: re,
        isImmediatePropagationStopped: re,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ne, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ne, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ne, this.stopPropagation()
        }
    }, xe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, i) {
        xe.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || xe.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), xe.support.submitBubbles || (xe.event.special.submit = {
        setup: function() {
            return !xe.nodeName(this, "form") && (xe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = xe.nodeName(t, "input") || xe.nodeName(t, "button") ? t.form : C;
                n && !xe._data(n, "submitBubbles") && (xe.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), xe._data(n, "submitBubbles", !0))
            }), C)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && xe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !xe.nodeName(this, "form") && (xe.event.remove(this, "._submit"), C)
        }
    }), xe.support.changeBubbles || (xe.event.special.change = {
        setup: function() {
            return Q.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (xe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), xe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), xe.event.simulate("change", this, e, !0)
            })), !1) : (xe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !xe._data(t, "changeBubbles") && (xe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || xe.event.simulate("change", this.parentNode, e, !0)
                }), xe._data(t, "changeBubbles", !0))
            }), C)
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : C
        },
        teardown: function() {
            return xe.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), xe.support.focusinBubbles || xe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(e) {
            xe.event.simulate(t, e.target, xe.event.fix(e), !0)
        }
        var r = 0;
        xe.event.special[t] = {
            setup: function() {
                0 == r++ && g.addEventListener(e, n, !0)
            },
            teardown: function() {
                0 == --r && g.removeEventListener(e, n, !0)
            }
        }
    }), xe.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = C), e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = C) : null == r && ("string" == typeof t ? (r = n, n = C) : (r = n, n = t, t = C)), !1 === r) r = re;
            else if (!r) return this;
            return 1 === i && (a = r, (r = function(e) {
                return xe().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = xe.guid++)), this.each(function() {
                xe.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, xe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = C), !1 === n && (n = re), this.each(function() {
                xe.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                xe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? xe.event.trigger(e, t, n, !0) : C
        }
    });
    var oe = /^.[^:#\[\.,]*$/,
        ae = /^(?:parents|prev(?:Until|All))/,
        se = xe.expr.match.needsContext,
        ue = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function le(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function ce(e, n, r) {
        if (xe.isFunction(n)) return xe.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return xe.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (oe.test(n)) return xe.filter(n, e, r);
            n = xe.filter(n, e)
        }
        return xe.grep(e, function(e) {
            return 0 <= xe.inArray(e, n) !== r
        })
    }

    function fe(e) {
        var t = pe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    xe.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(xe(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (xe.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) xe.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? xe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = xe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (xe.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ce(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ce(this, e || [], !1))
        },
        is: function(e) {
            return !!ce(this, "string" == typeof e && se.test(e) ? xe(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = se.test(e) || "string" != typeof e ? xe(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && xe.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? xe.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? xe.inArray(this[0], xe(e)) : xe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? xe(e, t) : xe.makeArray(e && e.nodeType ? [e] : e),
                r = xe.merge(this.get(), n);
            return this.pushStack(xe.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), xe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return le(e, "nextSibling")
        },
        prev: function(e) {
            return le(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe.sibling(e.firstChild)
        },
        contents: function(e) {
            return xe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : xe.merge([], e.childNodes)
        }
    }, function(r, i) {
        xe.fn[r] = function(e, t) {
            var n = xe.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = xe.filter(t, n)), 1 < this.length && (ue[r] || (n = xe.unique(n)), ae.test(r) && (n = n.reverse())), this.pushStack(n)
        }
    }), xe.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? xe.find.matchesSelector(r, e) ? [r] : [] : xe.find.matches(e, xe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (n === C || 1 !== i.nodeType || !xe(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        de = / jQuery\d+="(?:null|\d+)"/g,
        he = RegExp("<(?:" + pe + ")[\\s/>]", "i"),
        ge = /^\s+/,
        me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ye = /<([\w:]+)/,
        ve = /<tbody/i,
        be = /<|&#?\w+;/,
        Te = /<(?:script|style|link)/i,
        we = /^(?:checkbox|radio)$/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^$|\/(?:java|ecma)script/i,
        ke = /^true\/(.*)/,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: xe.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ae = fe(g).appendChild(g.createElement("div"));

    function je(e, t) {
        return xe.nodeName(e, "table") && xe.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function De(e) {
        return e.type = (null !== xe.find.attr(e, "type")) + "/" + e.type, e
    }

    function Le(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function He(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) xe._data(n, "globalEval", !t || xe._data(t[r], "globalEval"))
    }

    function qe(e, t) {
        if (1 === t.nodeType && xe.hasData(e)) {
            var n, r, i, o = xe._data(e),
                a = xe._data(t, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (r = 0, i = s[n].length; r < i; r++) xe.event.add(t, n, s[n][r]);
            a.data && (a.data = xe.extend({}, a.data))
        }
    }

    function _e(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !xe.support.noCloneEvent && t[xe.expando]) {
                for (r in (i = xe._data(t)).events) xe.removeEvent(t, r, i.handle);
                t.removeAttribute(xe.expando)
            }
            "script" === n && t.text !== e.text ? (De(t).text = e.text, Le(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), xe.support.html5Clone && e.innerHTML && !xe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && we.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function Me(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== y ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== y ? e.querySelectorAll(t || "*") : C;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || xe.nodeName(r, t) ? o.push(r) : xe.merge(o, Me(r, t));
        return t === C || t && xe.nodeName(e, t) ? xe.merge([e], o) : o
    }

    function Oe(e) {
        we.test(e.type) && (e.defaultChecked = e.checked)
    }
    Se.optgroup = Se.option, Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, xe.fn.extend({
        text: function(e) {
            return xe.access(this, function(e) {
                return e === C ? xe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || g).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? xe.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || xe.cleanData(Me(n)), n.parentNode && (t && xe.contains(n.ownerDocument, n) && He(Me(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && xe.cleanData(Me(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && xe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return xe.clone(this, e, t)
            })
        },
        html: function(e) {
            return xe.access(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === C) return 1 === t.nodeType ? t.innerHTML.replace(de, "") : C;
                if (!("string" != typeof e || Te.test(e) || !xe.support.htmlSerialize && he.test(e) || !xe.support.leadingWhitespace && ge.test(e) || Se[(ye.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(me, "<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (xe.cleanData(Me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var r = xe.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                i = 0;
            return this.domManip(arguments, function(e) {
                var t = r[i++],
                    n = r[i++];
                n && (t && t.parentNode !== n && (t = this.nextSibling), xe(this).remove(), n.insertBefore(e, t))
            }, !0), i ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, r, i) {
            n = m.apply([], n);
            var e, t, o, a, s, u, l = 0,
                c = this.length,
                f = this,
                p = c - 1,
                d = n[0],
                h = xe.isFunction(d);
            if (h || !(c <= 1 || "string" != typeof d || xe.support.checkClone) && Ce.test(d)) return this.each(function(e) {
                var t = f.eq(e);
                h && (n[0] = d.call(this, e, t.html())), t.domManip(n, r, i)
            });
            if (c && (e = (u = xe.buildFragment(n, this[0].ownerDocument, !1, !i && this)).firstChild, 1 === u.childNodes.length && (u = e), e)) {
                for (o = (a = xe.map(Me(u, "script"), De)).length; l < c; l++) t = u, l !== p && (t = xe.clone(t, !0, !0), o && xe.merge(a, Me(t, "script"))), r.call(this[l], t, l);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, xe.map(a, Le), l = 0; l < o; l++) t = a[l], Ne.test(t.type || "") && !xe._data(t, "globalEval") && xe.contains(s, t) && (t.src ? xe._evalUrl(t.src) : xe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ee, "")));
                u = e = null
            }
            return this
        }
    }), xe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        xe.fn[e] = function(e) {
            for (var t, n = 0, r = [], i = xe(e), o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), xe(i[n])[a](t), c.apply(r, t.get());
            return this.pushStack(r)
        }
    }), xe.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = xe.contains(e.ownerDocument, e);
            if (xe.support.html5Clone || xe.isXMLDoc(e) || !he.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ae.innerHTML = e.outerHTML, Ae.removeChild(o = Ae.firstChild)), !(xe.support.noCloneEvent && xe.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || xe.isXMLDoc(e)))
                for (r = Me(o), s = Me(e), a = 0; null != (i = s[a]); ++a) r[a] && _e(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Me(e), r = r || Me(o), a = 0; null != (i = s[a]); a++) qe(i, r[a]);
                else qe(e, o);
            return 0 < (r = Me(o, "script")).length && He(r, !u && Me(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, p = fe(t), d = [], h = 0; h < f; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === xe.type(o)) xe.merge(d, o.nodeType ? [o] : o);
                    else if (be.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (ye.exec(o) || ["", ""])[1].toLowerCase(), c = Se[u] || Se._default, s.innerHTML = c[1] + o.replace(me, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!xe.support.leadingWhitespace && ge.test(o) && d.push(t.createTextNode(ge.exec(o)[0])), !xe.support.tbody)
                    for (i = (o = "table" !== u || ve.test(o) ? "<table>" !== c[1] || ve.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) xe.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (xe.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else d.push(t.createTextNode(o));
            for (s && p.removeChild(s), xe.support.appendChecked || xe.grep(Me(d, "input"), Oe), h = 0; o = d[h++];)
                if ((!r || -1 === xe.inArray(o, r)) && (a = xe.contains(o.ownerDocument, o), s = Me(p.appendChild(o), "script"), a && He(s), n))
                    for (i = 0; o = s[i++];) Ne.test(o.type || "") && n.push(o);
            return s = null, p
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = xe.expando, u = xe.cache, l = xe.support.deleteExpando, c = xe.event.special; null != (n = e[a]); a++)
                if ((t || xe.acceptData(n)) && (o = (i = n[s]) && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? xe.event.remove(n, r) : xe.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== y ? n.removeAttribute(s) : n[s] = null, f.push(i))
                }
        },
        _evalUrl: function(e) {
            return xe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), xe.fn.extend({
        wrapAll: function(t) {
            if (xe.isFunction(t)) return this.each(function(e) {
                xe(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = xe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return xe.isFunction(n) ? this.each(function(e) {
                xe(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = xe(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = xe.isFunction(t);
            return this.each(function(e) {
                xe(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                xe.nodeName(this, "body") || xe(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Fe, Be, Pe, Re = /alpha\([^)]*\)/i,
        We = /opacity\s*=\s*([^)]*)/,
        $e = /^(top|right|bottom|left)$/,
        Ie = /^(none|table(?!-c[ea]).+)/,
        ze = /^margin/,
        Xe = RegExp("^(" + T + ")(.*)$", "i"),
        Ue = RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Ve = RegExp("^([+-])=(" + T + ")", "i"),
        Ye = {
            BODY: "block"
        },
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Qe = ["Top", "Right", "Bottom", "Left"],
        Ke = ["Webkit", "O", "Moz", "ms"];

    function Ze(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ke.length; i--;)
            if ((t = Ke[i] + n) in e) return t;
        return r
    }

    function et(e, t) {
        return e = t || e, "none" === xe.css(e, "display") || !xe.contains(e.ownerDocument, e)
    }

    function tt(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = xe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && et(r) && (o[a] = xe._data(r, "olddisplay", ot(r.nodeName)))) : o[a] || (i = et(r), (n && "none" !== n || !i) && xe._data(r, "olddisplay", i ? n : xe.css(r, "display"))));
        for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function nt(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function rt(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += xe.css(e, n + Qe[o], !0, i)), r ? ("content" === n && (a -= xe.css(e, "padding" + Qe[o], !0, i)), "margin" !== n && (a -= xe.css(e, "border" + Qe[o] + "Width", !0, i))) : (a += xe.css(e, "padding" + Qe[o], !0, i), "padding" !== n && (a += xe.css(e, "border" + Qe[o] + "Width", !0, i)));
        return a
    }

    function it(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Be(e),
            a = xe.support.boxSizing && "border-box" === xe.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Pe(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ue.test(i)) return i;
            r = a && (xe.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + rt(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ot(e) {
        var t = g,
            n = Ye[e];
        return n || ("none" !== (n = at(e, t)) && n || ((t = ((Fe = (Fe || xe("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || Fe[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = at(e, t), Fe.detach()), Ye[e] = n), n
    }

    function at(e, t) {
        var n = xe(t.createElement(e)).appendTo(t.body),
            r = xe.css(n[0], "display");
        return n.remove(), r
    }
    xe.fn.extend({
        css: function(e, t) {
            return xe.access(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (xe.isArray(t)) {
                    for (i = Be(e), r = t.length; a < r; a++) o[t[a]] = xe.css(e, t[a], !1, i);
                    return o
                }
                return n !== C ? xe.style(e, t, n) : xe.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return tt(this, !0)
        },
        hide: function() {
            return tt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                et(this) ? xe(this).show() : xe(this).hide()
            })
        }
    }), xe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: xe.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = xe.camelCase(t),
                    u = e.style;
                if (t = xe.cssProps[s] || (xe.cssProps[s] = Ze(u, s)), a = xe.cssHooks[t] || xe.cssHooks[s], n === C) return a && "get" in a && (i = a.get(e, !1, r)) !== C ? i : u[t];
                if ("string" === (o = typeof n) && (i = Ve.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(xe.css(e, t)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || xe.cssNumber[s] || (n += "px"), xe.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && (n = a.set(e, n, r)) === C))) try {
                    u[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = xe.camelCase(t);
            return t = xe.cssProps[s] || (xe.cssProps[s] = Ze(e.style, s)), (a = xe.cssHooks[t] || xe.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), o === C && (o = Pe(e, t, r)), "normal" === o && t in Ge && (o = Ge[t]), "" === n || n ? (i = parseFloat(o), !0 === n || xe.isNumeric(i) ? i || 0 : o) : o
        }
    }), h.getComputedStyle ? (Be = function(e) {
        return h.getComputedStyle(e, null)
    }, Pe = function(e, t, n) {
        var r, i, o, a = n || Be(e),
            s = a ? a.getPropertyValue(t) || a[t] : C,
            u = e.style;
        return a && ("" !== s || xe.contains(e.ownerDocument, e) || (s = xe.style(e, t)), Ue.test(s) && ze.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = s, s = a.width, u.width = r, u.minWidth = i, u.maxWidth = o)), s
    }) : g.documentElement.currentStyle && (Be = function(e) {
        return e.currentStyle
    }, Pe = function(e, t, n) {
        var r, i, o, a = n || Be(e),
            s = a ? a[t] : C,
            u = e.style;
        return null == s && u && u[t] && (s = u[t]), Ue.test(s) && !$e.test(t) && (r = u.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : s, s = u.pixelLeft + "px", u.left = r, o && (i.left = o)), "" === s ? "auto" : s
    }), xe.each(["height", "width"], function(e, i) {
        xe.cssHooks[i] = {
            get: function(e, t, n) {
                return t ? 0 === e.offsetWidth && Ie.test(xe.css(e, "display")) ? xe.swap(e, Je, function() {
                    return it(e, i, n)
                }) : it(e, i, n) : C
            },
            set: function(e, t, n) {
                var r = n && Be(e);
                return nt(0, t, n ? rt(e, i, n, xe.support.boxSizing && "border-box" === xe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), xe.support.opacity || (xe.cssHooks.opacity = {
        get: function(e, t) {
            return We.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = xe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === xe.trim(o.replace(Re, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Re.test(o) ? o.replace(Re, i) : o + " " + i)
        }
    }), xe(function() {
        xe.support.reliableMarginRight || (xe.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? xe.swap(e, {
                    display: "inline-block"
                }, Pe, [e, "marginRight"]) : C
            }
        }), !xe.support.pixelPosition && xe.fn.position && xe.each(["top", "left"], function(e, n) {
            xe.cssHooks[n] = {
                get: function(e, t) {
                    return t ? (t = Pe(e, n), Ue.test(t) ? xe(e).position()[n] + "px" : t) : C
                }
            }
        })
    }), xe.expr && xe.expr.filters && (xe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !xe.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || xe.css(e, "display"))
    }, xe.expr.filters.visible = function(e) {
        return !xe.expr.filters.hidden(e)
    }), xe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        xe.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Qe[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, ze.test(i) || (xe.cssHooks[i + o].set = nt)
    });
    var st = /%20/g,
        ut = /\[\]$/,
        lt = /\r?\n/g,
        ct = /^(?:submit|button|image|reset|file)$/i,
        ft = /^(?:input|select|textarea|keygen)/i;

    function pt(n, e, r, i) {
        var t;
        if (xe.isArray(e)) xe.each(e, function(e, t) {
            r || ut.test(n) ? i(n, t) : pt(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== xe.type(e)) i(n, e);
        else
            for (t in e) pt(n + "[" + t + "]", e[t], r, i)
    }
    xe.fn.extend({
        serialize: function() {
            return xe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = xe.prop(this, "elements");
                return e ? xe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !xe(this).is(":disabled") && ft.test(this.nodeName) && !ct.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = xe(this).val();
                return null == n ? null : xe.isArray(n) ? xe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(lt, "\r\n")
                }
            }).get()
        }
    }), xe.param = function(e, t) {
        function n(e, t) {
            t = xe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var r, i = [];
        if (t === C && (t = xe.ajaxSettings && xe.ajaxSettings.traditional), xe.isArray(e) || e.jquery && !xe.isPlainObject(e)) xe.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) pt(r, e[r], t, n);
        return i.join("&").replace(st, "+")
    }, xe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        xe.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), xe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var dt, ht, gt = xe.now(),
        mt = /\?/,
        yt = /#.*$/,
        vt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        xt = /^(?:GET|HEAD)$/,
        Tt = /^\/\//,
        wt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Ct = xe.fn.load,
        Nt = {},
        kt = {},
        Et = "*/".concat("*");
    try {
        ht = e.href
    } catch (e) {
        (ht = g.createElement("a")).href = "", ht = ht.href
    }

    function St(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(N) || [];
            if (xe.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function At(t, i, o, a) {
        var s = {},
            u = t === kt;

        function l(e) {
            var r;
            return s[e] = !0, xe.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : C : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function jt(e, t) {
        var n, r, i = xe.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== C && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && xe.extend(!0, e, n), e
    }
    dt = wt.exec(ht.toLowerCase()) || [], xe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ct) return Ct.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return 0 <= s && (r = e.slice(s, e.length), e = e.slice(0, s)), xe.isFunction(t) ? (n = t, t = C) : t && "object" == typeof t && (o = "POST"), 0 < a.length && xe.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? xe("<div>").append(xe.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, xe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        xe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), xe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Et,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": xe.parseJSON,
                "text xml": xe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? jt(jt(e, xe.ajaxSettings), t) : jt(xe.ajaxSettings, e)
        },
        ajaxPrefilter: St(Nt),
        ajaxTransport: St(kt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = C), t = t || {};
            var n, r, c, f, p, d, h, i, g = xe.ajaxSetup({}, t),
                m = g.context || g,
                y = g.context && (m.nodeType || m.jquery) ? xe(m) : xe.event,
                v = xe.Deferred(),
                b = xe.Callbacks("once memory"),
                x = g.statusCode || {},
                o = {},
                a = {},
                T = 0,
                s = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === T) {
                            if (!i)
                                for (i = {}; t = bt.exec(f);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === T ? f : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return T || (e = a[n] = a[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return T || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (T < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || s;
                        return h && h.abort(t), u(0, t), this
                    }
                };
            if (v.promise(w).complete = b.add, w.success = w.done, w.error = w.fail, g.url = ((e || g.url || ht) + "").replace(yt, "").replace(Tt, dt[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = xe.trim(g.dataType || "*").toLowerCase().match(N) || [""], null == g.crossDomain && (n = wt.exec(g.url.toLowerCase()), g.crossDomain = !(!n || n[1] === dt[1] && n[2] === dt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (dt[3] || ("http:" === dt[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = xe.param(g.data, g.traditional)), At(Nt, g, t, w), 2 === T) return w;
            for (r in (d = g.global) && 0 == xe.active++ && xe.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !xt.test(g.type), c = g.url, g.hasContent || (g.data && (c = g.url += (mt.test(c) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = vt.test(c) ? c.replace(vt, "$1_=" + gt++) : c + (mt.test(c) ? "&" : "?") + "_=" + gt++)), g.ifModified && (xe.lastModified[c] && w.setRequestHeader("If-Modified-Since", xe.lastModified[c]), xe.etag[c] && w.setRequestHeader("If-None-Match", xe.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && w.setRequestHeader("Content-Type", g.contentType), w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : g.accepts["*"]), g.headers) w.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, w, g) || 2 === T)) return w.abort();
            for (r in s = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](g[r]);
            if (h = At(kt, g, t, w)) {
                w.readyState = 1, d && y.trigger("ajaxSend", [w, g]), g.async && 0 < g.timeout && (p = setTimeout(function() {
                    w.abort("timeout")
                }, g.timeout));
                try {
                    T = 1, h.send(o, u)
                } catch (e) {
                    if (!(T < 2)) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, a, s, u, l = t;
                2 !== T && (T = 2, p && clearTimeout(p), h = C, f = r || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    for (;
                        "*" === u[0];) u.shift(), i === C && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (a in s)
                            if (s[a] && s[a].test(i)) {
                                u.unshift(a);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (a in n) {
                            if (!u[0] || e.converters[a + " " + u[0]]) {
                                o = a;
                                break
                            }
                            r || (r = a)
                        }
                        o = o || r
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : C
                }(g, w, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    for (; o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, s, w, i), i ? (g.ifModified && ((u = w.getResponseHeader("Last-Modified")) && (xe.lastModified[c] = u), (u = w.getResponseHeader("etag")) && (xe.etag[c] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || l) + "", i ? v.resolveWith(m, [o, l, w]) : v.rejectWith(m, [w, l, a]), w.statusCode(x), x = C, d && y.trigger(i ? "ajaxSuccess" : "ajaxError", [w, g, i ? o : a]), b.fireWith(m, [w, l]), d && (y.trigger("ajaxComplete", [w, g]), --xe.active || xe.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return xe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return xe.get(e, C, t, "script")
        }
    }), xe.each(["get", "post"], function(e, i) {
        xe[i] = function(e, t, n, r) {
            return xe.isFunction(t) && (r = r || n, n = t, t = C), xe.ajax({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            })
        }
    }), xe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return xe.globalEval(e), e
            }
        }
    }), xe.ajaxPrefilter("script", function(e) {
        e.cache === C && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), xe.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = g.head || xe("head")[0] || g.documentElement;
            return {
                send: function(e, n) {
                    (r = g.createElement("script")).async = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function(e, t) {
                        !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200, "success"))
                    }, i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(C, !0)
                }
            }
        }
    });
    var Dt = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    xe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Dt.pop() || xe.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), xe.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = xe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Lt, "$1" + r) : !1 !== e.jsonp && (e.url += (mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || xe.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = h[r], h[r] = function() {
            o = arguments
        }, n.always(function() {
            h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Dt.push(r)), o && xe.isFunction(i) && i(o[0]), o = i = C
        }), "script") : C
    });
    var Ht, qt, _t = 0,
        Mt = h.ActiveXObject && function() {
            var e;
            for (e in Ht) Ht[e](C, !0)
        };

    function Ot() {
        try {
            return new h.XMLHttpRequest
        } catch (e) {}
    }
    xe.ajaxSettings.xhr = h.ActiveXObject ? function() {
        return !this.isLocal && Ot() || function() {
            try {
                return new h.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : Ot, qt = xe.ajaxSettings.xhr(), xe.support.cors = !!qt && "withCredentials" in qt, (qt = xe.support.ajax = !!qt) && xe.ajaxTransport(function(l) {
        var c;
        if (!l.crossDomain || xe.support.cors) return {
            send: function(e, a) {
                var s, t, u = l.xhr();
                if (l.username ? u.open(l.type, l.url, l.async, l.username, l.password) : u.open(l.type, l.url, l.async), l.xhrFields)
                    for (t in l.xhrFields) u[t] = l.xhrFields[t];
                l.mimeType && u.overrideMimeType && u.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (t in e) u.setRequestHeader(t, e[t])
                } catch (e) {}
                u.send(l.hasContent && l.data || null), c = function(e, t) {
                    var n, r, i, o;
                    try {
                        if (c && (t || 4 === u.readyState))
                            if (c = C, s && (u.onreadystatechange = xe.noop, Mt && delete Ht[s]), t) 4 !== u.readyState && u.abort();
                            else {
                                o = {}, n = u.status, r = u.getAllResponseHeaders(), "string" == typeof u.responseText && (o.text = u.responseText);
                                try {
                                    i = u.statusText
                                } catch (e) {
                                    i = ""
                                }
                                n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                            }
                    } catch (e) {
                        t || a(-1, e)
                    }
                    o && a(n, i, o, r)
                }, l.async ? 4 === u.readyState ? setTimeout(c) : (s = ++_t, Mt && (Ht || (Ht = {}, xe(h).unload(Mt)), Ht[s] = c), u.onreadystatechange = c) : c()
            },
            abort: function() {
                c && c(C, !0)
            }
        }
    });
    var Ft, Bt, Pt = /^(?:toggle|show|hide)$/,
        Rt = RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        Wt = /queueHooks$/,
        $t = [function(t, e, n) {
            var r, i, o, a, s, u, l = this,
                c = {},
                f = t.style,
                p = t.nodeType && et(t),
                d = xe._data(t, "fxshow");
            for (r in n.queue || (null == (s = xe._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || u()
                }), s.unqueued++, l.always(function() {
                    l.always(function() {
                        s.unqueued--, xe.queue(t, "fx").length || s.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === xe.css(t, "display") && "none" === xe.css(t, "float") && (xe.support.inlineBlockNeedsLayout && "inline" !== ot(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", xe.support.shrinkWrapBlocks || l.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], Pt.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) continue;
                    c[r] = d && d[r] || xe.style(t, r)
                }
            if (!xe.isEmptyObject(c))
                for (r in d ? "hidden" in d && (p = d.hidden) : d = xe._data(t, "fxshow", {}), o && (d.hidden = !p), p ? xe(t).show() : l.done(function() {
                        xe(t).hide()
                    }), l.done(function() {
                        var e;
                        for (e in xe._removeData(t, "fxshow"), c) xe.style(t, e, c[e])
                    }), c) a = Xt(p ? d[r] : 0, r, l), r in d || (d[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }],
        It = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Rt.exec(t),
                    o = i && i[3] || (xe.cssNumber[e] ? "" : "px"),
                    a = (xe.cssNumber[e] || "px" !== o && +r) && Rt.exec(xe.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o)
                    for (o = o || a[3], i = i || [], a = +r || 1; a /= s = s || ".5", xe.style(n.elem, e, a + o), s !== (s = n.cur() / r) && 1 !== s && --u;);
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function zt() {
        return setTimeout(function() {
            Ft = C
        }), Ft = xe.now()
    }

    function Xt(e, t, n) {
        for (var r, i = (It[t] || []).concat(It["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Ut(o, e, t) {
        var n, a, r = 0,
            i = $t.length,
            s = xe.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ft || zt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: xe.extend({}, e),
                opts: xe.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ft || zt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = xe.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? s.resolveWith(o, [l, e]) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = xe.camelCase(n), i = t[r], o = e[n], xe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = xe.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = $t[r].call(l, o, c, l.opts)) return n;
        return xe.map(c, Xt, l), xe.isFunction(l.opts.start) && l.opts.start.call(o, l), xe.fx.timer(xe.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function Vt(e, t, n, r, i) {
        return new Vt.prototype.init(e, t, n, r, i)
    }

    function Yt(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Qe[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function Jt(e) {
        return xe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    xe.Animation = xe.extend(Ut, {
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = xe.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; r < i; r++) n = e[r], It[n] = It[n] || [], It[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? $t.unshift(e) : $t.push(e)
        }
    }), ((xe.Tween = Vt).prototype = {
        constructor: Vt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (xe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Vt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Vt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Vt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? xe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Vt.propHooks._default.set(this), this
        }
    }).init.prototype = Vt.prototype, (Vt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = xe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                xe.fx.step[e.prop] ? xe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[xe.cssProps[e.prop]] || xe.cssHooks[e.prop]) ? xe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = Vt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, xe.each(["toggle", "show", "hide"], function(e, r) {
        var i = xe.fn[r];
        xe.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Yt(r, !0), e, t, n)
        }
    }), xe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function i() {
                var e = Ut(this, xe.extend({}, t), a);
                (o || xe._data(this, "finish")) && e.stop(!0)
            }
            var o = xe.isEmptyObject(t),
                a = xe.speed(e, n, r);
            return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        },
        stop: function(i, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = C), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = xe.timers,
                    r = xe._data(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Wt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || xe.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = xe._data(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = xe.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, xe.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), xe.each({
        slideDown: Yt("show"),
        slideUp: Yt("hide"),
        slideToggle: Yt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        xe.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), xe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? xe.extend({}, e) : {
            complete: n || !n && t || xe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !xe.isFunction(t) && t
        };
        return r.duration = xe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in xe.fx.speeds ? xe.fx.speeds[r.duration] : xe.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            xe.isFunction(r.old) && r.old.call(this), r.queue && xe.dequeue(this, r.queue)
        }, r
    }, xe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, xe.timers = [], xe.fx = Vt.prototype.init, xe.fx.tick = function() {
        var e, t = xe.timers,
            n = 0;
        for (Ft = xe.now(); t.length > n; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || xe.fx.stop(), Ft = C
    }, xe.fx.timer = function(e) {
        e() && xe.timers.push(e) && xe.fx.start()
    }, xe.fx.interval = 13, xe.fx.start = function() {
        Bt || (Bt = setInterval(xe.fx.tick, xe.fx.interval))
    }, xe.fx.stop = function() {
        clearInterval(Bt), Bt = null
    }, xe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, xe.fx.step = {}, xe.expr && xe.expr.filters && (xe.expr.filters.animated = function(t) {
        return xe.grep(xe.timers, function(e) {
            return t === e.elem
        }).length
    }), xe.fn.offset = function(t) {
        if (arguments.length) return t === C ? this : this.each(function(e) {
            xe.offset.setOffset(this, t, e)
        });
        var e, n, r = {
                top: 0,
                left: 0
            },
            i = this[0],
            o = i && i.ownerDocument;
        return o ? (e = o.documentElement, xe.contains(e, i) ? (typeof i.getBoundingClientRect !== y && (r = i.getBoundingClientRect()), n = Jt(o), {
            top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : r) : void 0
    }, xe.offset = {
        setOffset: function(e, t, n) {
            var r = xe.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = xe(e),
                s = a.offset(),
                u = xe.css(e, "top"),
                l = xe.css(e, "left"),
                c = {},
                f = {};
            o = ("absolute" === r || "fixed" === r) && -1 < xe.inArray("auto", [u, l]) ? (i = (f = a.position()).top, f.left) : (i = parseFloat(u) || 0, parseFloat(l) || 0), xe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : a.css(c)
        }
    }, xe.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === xe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), xe.nodeName(e[0], "html") || (n = e.offset()), n.top += xe.css(e[0], "borderTopWidth", !0), n.left += xe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - xe.css(r, "marginTop", !0),
                    left: t.left - n.left - xe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || o; e && !xe.nodeName(e, "html") && "static" === xe.css(e, "position");) e = e.offsetParent;
                return e || o
            })
        }
    }), xe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        xe.fn[t] = function(e) {
            return xe.access(this, function(e, t, n) {
                var r = Jt(e);
                return n === C ? r ? i in r ? r[i] : r.document.documentElement[t] : e[t] : (r ? r.scrollTo(o ? xe(r).scrollLeft() : n, o ? n : xe(r).scrollTop()) : e[t] = n, C)
            }, t, e, arguments.length, null)
        }
    }), xe.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        xe.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            xe.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return xe.access(this, function(e, t, n) {
                    var r;
                    return xe.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : n === C ? xe.css(e, t, i) : xe.style(e, t, n, i)
                }, a, n ? e : C, n, null)
            }
        })
    }), xe.fn.size = function() {
        return this.length
    }, xe.fn.andSelf = xe.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = xe : (h.jQuery = h.$ = xe, "function" == typeof define && define.amd && define("jquery", [], function() {
        return xe
    }))
}(window);