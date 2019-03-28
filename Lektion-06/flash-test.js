/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flash-setclasses !*/
!(function(e, n, t) {
  function o(e, n) {
    return typeof e === n;
  }
  function i() {
    var e, n, t, i, a, s, r;
    for (var l in f)
      if (f.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = f[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (i = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (s = e[a]),
            (r = s.split(".")),
            1 === r.length
              ? (Modernizr[r[0]] = i)
              : (!Modernizr[r[0]] ||
                  Modernizr[r[0]] instanceof Boolean ||
                  (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                (Modernizr[r[0]][r[1]] = i)),
            c.push((i ? "" : "no-") + r.join("-"));
      }
  }
  function a(e) {
    var n = p.className,
      t = Modernizr._config.classPrefix || "";
    if ((h && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      h ? (p.className.baseVal = n) : (p.className = n));
  }
  function s() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : h
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function r() {
    var e = n.body;
    return e || ((e = s(h ? "svg" : "body")), (e.fake = !0)), e;
  }
  function l(e, n) {
    if ("object" == typeof e) for (var t in e) d(e, t) && l(t, e[t]);
    else {
      e = e.toLowerCase();
      var o = e.split("."),
        i = Modernizr[o[0]];
      if ((2 == o.length && (i = i[o[1]]), "undefined" != typeof i))
        return Modernizr;
      (n = "function" == typeof n ? n() : n),
        1 == o.length
          ? (Modernizr[o[0]] = n)
          : (!Modernizr[o[0]] ||
              Modernizr[o[0]] instanceof Boolean ||
              (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
            (Modernizr[o[0]][o[1]] = n)),
        a([(n && 0 != n ? "" : "no-") + o.join("-")]),
        Modernizr._trigger(e, n);
    }
    return Modernizr;
  }
  var c = [],
    f = [],
    u = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e]);
        }, 0);
      },
      addTest: function(e, n, t) {
        f.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function(e) {
        f.push({ name: null, fn: e });
      }
    },
    Modernizr = function() {};
  (Modernizr.prototype = u), (Modernizr = new Modernizr());
  var d,
    p = n.documentElement,
    h = "svg" === p.nodeName.toLowerCase();
  !(function() {
    var e = {}.hasOwnProperty;
    d =
      o(e, "undefined") || o(e.call, "undefined")
        ? function(e, n) {
            return n in e && o(e.constructor.prototype[n], "undefined");
          }
        : function(n, t) {
            return e.call(n, t);
          };
  })(),
    (u._l = {}),
    (u.on = function(e, n) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(n),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (u._trigger = function(e, n) {
      if (this._l[e]) {
        var t = this._l[e];
        setTimeout(function() {
          var e, o;
          for (e = 0; e < t.length; e++) (o = t[e])(n);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function() {
      u.addTest = l;
    }),
    Modernizr.addAsyncTest(function() {
      var t,
        o,
        i = function(e) {
          p.contains(e) || p.appendChild(e);
        },
        a = function(e) {
          e.fake && e.parentNode && e.parentNode.removeChild(e);
        },
        c = function(e, n) {
          var t = !!e;
          if (
            (t && ((t = new Boolean(t)), (t.blocked = "blocked" === e)),
            l("flash", function() {
              return t;
            }),
            n && g.contains(n))
          ) {
            for (; n.parentNode !== g; ) n = n.parentNode;
            g.removeChild(n);
          }
        };
      try {
        o =
          "ActiveXObject" in e &&
          "Pan" in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      } catch (f) {}
      if (
        ((t = !(
          ("plugins" in navigator && "Shockwave Flash" in navigator.plugins) ||
          o
        )),
        t || h)
      )
        c(!1);
      else {
        var u,
          d,
          v = s("embed"),
          g = r();
        if (
          ((v.type = "application/x-shockwave-flash"),
          g.appendChild(v),
          !("Pan" in v || o))
        )
          return i(g), c("blocked", v), void a(g);
        (u = function() {
          return (
            i(g),
            p.contains(g)
              ? (p.contains(v)
                  ? ((d = v.style.cssText),
                    "" !== d ? c("blocked", v) : c(!0, v))
                  : c("blocked"),
                void a(g))
              : ((g = n.body || g),
                (v = s("embed")),
                (v.type = "application/x-shockwave-flash"),
                g.appendChild(v),
                setTimeout(u, 1e3))
          );
        }),
          setTimeout(u, 10);
      }
    }),
    i(),
    a(c),
    delete u.addTest,
    delete u.addAsyncTest;
  for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
  e.Modernizr = Modernizr;
})(window, document);
