/*! jQuery & Zepto Lazy v1.7.9 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function (t, e) {
  "use strict";
  function r(r, a, i, u, l) {
    function f() {
      L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () {
        s(!0);
      }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) {
        "resize" === t.type && (w = B = -1), s(t.all);
      }), u.a = function (t) {
        t = c(t), i.push.apply(i, t);
      }, u.g = function () {
        return i = n(i).filter(function () {
          return !n(this).data(a.loadedName);
        });
      }, u.f = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = i.filter(function () {
            return this === t[e];
          });r.length && s(!1, r);
        }
      }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e));
    }function c(t) {
      var i = a.defaultImage,
          o = a.placeholder,
          u = a.imageBase,
          l = a.srcsetAttribute,
          f = a.loaderAttribute,
          c = a._f || {};t = n(t).filter(function () {
        var t = n(this),
            r = m(this);return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e);
      }).data("plugin_" + a.name, r);for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
            g = m(t[s]),
            h = A.attr(a.imageBaseAttribute) || u;g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')");
      }return t;
    }function s(t, e) {
      if (!i.length) return void (a.autoDestroy && r.destroy());for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++) if (t || e || A(o[s])) {
        var g = n(o[s]),
            h = m(o[s]),
            b = g.attr(a.attribute),
            v = g.attr(a.imageBaseAttribute) || l,
            p = g.attr(a.loaderAttribute);g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p));
      }u && (i = n(i).filter(function () {
        return !n(this).data(c);
      }));
    }function d(t, e, r, i) {
      ++z;var o = function () {
        y("onError", t), p(), o = n.noop;
      };y("beforeLoad", t);var u = a.attribute,
          l = a.srcsetAttribute,
          f = a.sizesAttribute,
          c = a.retinaAttribute,
          s = a.removeAttribute,
          d = a.loadedName,
          A = t.attr(c);if (i) {
        var g = function () {
          s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop;
        };t.off(I).one(I, o).one(D, g), y(i, t, function (e) {
          e ? (t.off(D), g()) : (t.off(I), o());
        }) || t.trigger(I);
      } else {
        var h = n(new Image());h.one(I, o).one(D, function () {
          t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p();
        });var m = (L && A ? A : t.attr(u)) || "";h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D);
      }
    }function A(t) {
      var e = t.getBoundingClientRect(),
          r = a.scrollDirection,
          n = a.threshold,
          i = h() + n > e.top && -n < e.bottom,
          o = g() + n > e.left && -n < e.right;return "vertical" === r ? i : "horizontal" === r ? o : i && o;
    }function g() {
      return w >= 0 ? w : w = n(t).width();
    }function h() {
      return B >= 0 ? B : B = n(t).height();
    }function m(t) {
      return t.tagName.toLowerCase();
    }function b(t, e) {
      if (e) {
        var r = t.split(",");t = "";for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "");
      }return t;
    }function v(t, e) {
      var n,
          i = 0;return function (o, u) {
        function l() {
          i = +new Date(), e.call(r, o);
        }var f = +new Date() - i;n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f);
      };
    }function p() {
      --z, i.length || z || y("onFinishedAll");
    }function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0);
    }var z = 0,
        w = -1,
        B = -1,
        L = !1,
        T = "afterLoad",
        D = "load",
        I = "error",
        N = "img",
        E = "src",
        F = "srcset",
        C = "sizes",
        O = "background-image";"event" === a.bind || o ? f() : n(t).on(D + "." + l, f);
  }function a(a, o) {
    var u = this,
        l = n.extend({}, u.config, o),
        f = {},
        c = l.name + "-" + ++i;return u.config = function (t, r) {
      return r === e ? l[t] : (l[t] = r, u);
    }, u.addItems = function (t) {
      return f.a && f.a("string" === n.type(t) ? n(t) : t), u;
    }, u.getItems = function () {
      return f.g ? f.g() : {};
    }, u.update = function (t) {
      return f.e && f.e({}, !t), u;
    }, u.force = function (t) {
      return f.f && f.f("string" === n.type(t) ? n(t) : t), u;
    }, u.loadAll = function () {
      return f.e && f.e({ all: !0 }, !0), u;
    }, u.destroy = function () {
      return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e;
    }, r(u, l, a, f, c), l.chainable ? a : u;
  }var n = t.jQuery || t.Zepto,
      i = 0,
      o = !1;n.fn.Lazy = n.fn.lazy = function (t) {
    return new a(this, t);
  }, n.Lazy = n.lazy = function (t, r, i) {
    if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
      t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++) (o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0];
    }
  }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function () {
    o = !0;
  });
}(window);
/**
 * Minified by jsDelivr using UglifyJS v3.4.1.
 * Original file: /npm/lunr@2.3.0/lunr.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function () {
  var t,
      l,
      c,
      e,
      r,
      h,
      d,
      f,
      p,
      y,
      m,
      g,
      x,
      v,
      w,
      Q,
      k,
      S,
      E,
      L,
      b,
      T,
      P,
      O,
      I,
      i,
      n,
      s,
      z = function (e) {
    var t = new z.Builder();return t.pipeline.add(z.trimmer, z.stopWordFilter, z.stemmer), t.searchPipeline.add(z.stemmer), e.call(t, t), t.build();
  };z.version = "2.3.0", z.utils = {}, z.utils.warn = (t = this, function (e) {
    t.console && console.warn && console.warn(e);
  }), z.utils.asString = function (e) {
    return null == e ? "" : e.toString();
  }, z.utils.clone = function (e) {
    if (null == e) return e;for (var t = Object.create(null), r = Object.keys(e), i = 0; i < r.length; i++) {
      var n = r[i],
          s = e[n];if (Array.isArray(s)) t[n] = s.slice();else {
        if ("string" != typeof s && "number" != typeof s && "boolean" != typeof s) throw new TypeError("clone is not deep and does not support nested objects");t[n] = s;
      }
    }return t;
  }, z.FieldRef = function (e, t, r) {
    this.docRef = e, this.fieldName = t, this._stringValue = r;
  }, z.FieldRef.joiner = "/", z.FieldRef.fromString = function (e) {
    var t = e.indexOf(z.FieldRef.joiner);if (-1 === t) throw "malformed field ref string";var r = e.slice(0, t),
        i = e.slice(t + 1);return new z.FieldRef(i, r, e);
  }, z.FieldRef.prototype.toString = function () {
    return null == this._stringValue && (this._stringValue = this.fieldName + z.FieldRef.joiner + this.docRef), this._stringValue;
  }, z.Set = function (e) {
    if (this.elements = Object.create(null), e) {
      this.length = e.length;for (var t = 0; t < this.length; t++) this.elements[e[t]] = !0;
    } else this.length = 0;
  }, z.Set.complete = { intersect: function (e) {
      return e;
    }, union: function (e) {
      return e;
    }, contains: function () {
      return !0;
    } }, z.Set.empty = { intersect: function () {
      return this;
    }, union: function (e) {
      return e;
    }, contains: function () {
      return !1;
    } }, z.Set.prototype.contains = function (e) {
    return !!this.elements[e];
  }, z.Set.prototype.intersect = function (e) {
    var t,
        r,
        i,
        n = [];this.length < e.length ? (t = this, r = e) : (t = e, r = this), i = Object.keys(t.elements);for (var s = 0; s < i.length; s++) {
      var o = i[s];o in r.elements && n.push(o);
    }return new z.Set(n);
  }, z.Set.prototype.union = function (e) {
    return new z.Set(Object.keys(this.elements).concat(Object.keys(e.elements)));
  }, z.idf = function (e, t) {
    var r = 0;for (var i in e) "_index" != i && (r += Object.keys(e[i]).length);var n = (t - r + .5) / (r + .5);return Math.log(1 + Math.abs(n));
  }, z.Token = function (e, t) {
    this.str = e || "", this.metadata = t || {};
  }, z.Token.prototype.toString = function () {
    return this.str;
  }, z.Token.prototype.update = function (e) {
    return this.str = e(this.str, this.metadata), this;
  }, z.Token.prototype.clone = function (e) {
    return e = e || function (e) {
      return e;
    }, new z.Token(e(this.str, this.metadata), this.metadata);
  }, z.tokenizer = function (e, t) {
    if (null == e || null == e) return [];if (Array.isArray(e)) return e.map(function (e) {
      return new z.Token(z.utils.asString(e).toLowerCase(), z.utils.clone(t));
    });for (var r = e.toString().trim().toLowerCase(), i = r.length, n = [], s = 0, o = 0; s <= i; s++) {
      var a = s - o;if (r.charAt(s).match(z.tokenizer.separator) || s == i) {
        if (0 < a) {
          var u = z.utils.clone(t) || {};u.position = [o, a], u.index = n.length, n.push(new z.Token(r.slice(o, s), u));
        }o = s + 1;
      }
    }return n;
  }, z.tokenizer.separator = /[\s\-]+/, z.Pipeline = function () {
    this._stack = [];
  }, z.Pipeline.registeredFunctions = Object.create(null), z.Pipeline.registerFunction = function (e, t) {
    t in this.registeredFunctions && z.utils.warn("Overwriting existing registered function: " + t), e.label = t, z.Pipeline.registeredFunctions[e.label] = e;
  }, z.Pipeline.warnIfFunctionNotRegistered = function (e) {
    e.label && e.label in this.registeredFunctions || z.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e);
  }, z.Pipeline.load = function (e) {
    var r = new z.Pipeline();return e.forEach(function (e) {
      var t = z.Pipeline.registeredFunctions[e];if (!t) throw new Error("Cannot load unregistered function: " + e);r.add(t);
    }), r;
  }, z.Pipeline.prototype.add = function () {
    Array.prototype.slice.call(arguments).forEach(function (e) {
      z.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e);
    }, this);
  }, z.Pipeline.prototype.after = function (e, t) {
    z.Pipeline.warnIfFunctionNotRegistered(t);var r = this._stack.indexOf(e);if (-1 == r) throw new Error("Cannot find existingFn");r += 1, this._stack.splice(r, 0, t);
  }, z.Pipeline.prototype.before = function (e, t) {
    z.Pipeline.warnIfFunctionNotRegistered(t);var r = this._stack.indexOf(e);if (-1 == r) throw new Error("Cannot find existingFn");this._stack.splice(r, 0, t);
  }, z.Pipeline.prototype.remove = function (e) {
    var t = this._stack.indexOf(e);-1 != t && this._stack.splice(t, 1);
  }, z.Pipeline.prototype.run = function (e) {
    for (var t = this._stack.length, r = 0; r < t; r++) {
      for (var i = this._stack[r], n = [], s = 0; s < e.length; s++) {
        var o = i(e[s], s, e);if (void 0 !== o && "" !== o) if (o instanceof Array) for (var a = 0; a < o.length; a++) n.push(o[a]);else n.push(o);
      }e = n;
    }return e;
  }, z.Pipeline.prototype.runString = function (e, t) {
    var r = new z.Token(e, t);return this.run([r]).map(function (e) {
      return e.toString();
    });
  }, z.Pipeline.prototype.reset = function () {
    this._stack = [];
  }, z.Pipeline.prototype.toJSON = function () {
    return this._stack.map(function (e) {
      return z.Pipeline.warnIfFunctionNotRegistered(e), e.label;
    });
  }, z.Vector = function (e) {
    this._magnitude = 0, this.elements = e || [];
  }, z.Vector.prototype.positionForIndex = function (e) {
    if (0 == this.elements.length) return 0;for (var t = 0, r = this.elements.length / 2, i = r - t, n = Math.floor(i / 2), s = this.elements[2 * n]; 1 < i && (s < e && (t = n), e < s && (r = n), s != e);) i = r - t, n = t + Math.floor(i / 2), s = this.elements[2 * n];return s == e ? 2 * n : e < s ? 2 * n : s < e ? 2 * (n + 1) : void 0;
  }, z.Vector.prototype.insert = function (e, t) {
    this.upsert(e, t, function () {
      throw "duplicate index";
    });
  }, z.Vector.prototype.upsert = function (e, t, r) {
    this._magnitude = 0;var i = this.positionForIndex(e);this.elements[i] == e ? this.elements[i + 1] = r(this.elements[i + 1], t) : this.elements.splice(i, 0, e, t);
  }, z.Vector.prototype.magnitude = function () {
    if (this._magnitude) return this._magnitude;for (var e = 0, t = this.elements.length, r = 1; r < t; r += 2) {
      var i = this.elements[r];e += i * i;
    }return this._magnitude = Math.sqrt(e);
  }, z.Vector.prototype.dot = function (e) {
    for (var t = 0, r = this.elements, i = e.elements, n = r.length, s = i.length, o = 0, a = 0, u = 0, l = 0; u < n && l < s;) (o = r[u]) < (a = i[l]) ? u += 2 : a < o ? l += 2 : o == a && (t += r[u + 1] * i[l + 1], u += 2, l += 2);return t;
  }, z.Vector.prototype.similarity = function (e) {
    return this.dot(e) / this.magnitude() || 0;
  }, z.Vector.prototype.toArray = function () {
    for (var e = new Array(this.elements.length / 2), t = 1, r = 0; t < this.elements.length; t += 2, r++) e[r] = this.elements[t];return e;
  }, z.Vector.prototype.toJSON = function () {
    return this.elements;
  }, z.stemmer = (l = { ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log" }, c = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }, e = "[aeiouy]", r = "[^aeiou][^aeiouy]*", h = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), d = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"), p = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), y = /^(.+?)(ss|i)es$/, m = /^(.+?)([^s])s$/, g = /^(.+?)eed$/, x = /^(.+?)(ed|ing)$/, v = /.$/, w = /(at|bl|iz)$/, Q = new RegExp("([^aeiouylsz])\\1$"), k = new RegExp("^" + r + e + "[^aeiouwxy]$"), S = /^(.+?[^aeiou])y$/, E = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, L = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, b = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, T = /^(.+?)(s|t)(ion)$/, P = /^(.+?)e$/, O = /ll$/, I = new RegExp("^" + r + e + "[^aeiouwxy]$"), i = function (e) {
    var t, r, i, n, s, o, a;if (e.length < 3) return e;if ("y" == (i = e.substr(0, 1)) && (e = i.toUpperCase() + e.substr(1)), s = m, (n = y).test(e) ? e = e.replace(n, "$1$2") : s.test(e) && (e = e.replace(s, "$1$2")), s = x, (n = g).test(e)) {
      var u = n.exec(e);(n = h).test(u[1]) && (n = v, e = e.replace(n, ""));
    } else if (s.test(e)) {
      t = (u = s.exec(e))[1], (s = p).test(t) && (o = Q, a = k, (s = w).test(e = t) ? e += "e" : o.test(e) ? (n = v, e = e.replace(n, "")) : a.test(e) && (e += "e"));
    }(n = S).test(e) && (e = (t = (u = n.exec(e))[1]) + "i");(n = E).test(e) && (t = (u = n.exec(e))[1], r = u[2], (n = h).test(t) && (e = t + l[r]));(n = L).test(e) && (t = (u = n.exec(e))[1], r = u[2], (n = h).test(t) && (e = t + c[r]));if (s = T, (n = b).test(e)) t = (u = n.exec(e))[1], (n = d).test(t) && (e = t);else if (s.test(e)) {
      t = (u = s.exec(e))[1] + u[2], (s = d).test(t) && (e = t);
    }(n = P).test(e) && (t = (u = n.exec(e))[1], s = f, o = I, ((n = d).test(t) || s.test(t) && !o.test(t)) && (e = t));return s = d, (n = O).test(e) && s.test(e) && (n = v, e = e.replace(n, "")), "y" == i && (e = i.toLowerCase() + e.substr(1)), e;
  }, function (e) {
    return e.update(i);
  }), z.Pipeline.registerFunction(z.stemmer, "stemmer"), z.generateStopWordFilter = function (e) {
    var t = e.reduce(function (e, t) {
      return e[t] = t, e;
    }, {});return function (e) {
      if (e && t[e.toString()] !== e.toString()) return e;
    };
  }, z.stopWordFilter = z.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), z.Pipeline.registerFunction(z.stopWordFilter, "stopWordFilter"), z.trimmer = function (e) {
    return e.update(function (e) {
      return e.replace(/^\W+/, "").replace(/\W+$/, "");
    });
  }, z.Pipeline.registerFunction(z.trimmer, "trimmer"), z.TokenSet = function () {
    this.final = !1, this.edges = {}, this.id = z.TokenSet._nextId, z.TokenSet._nextId += 1;
  }, z.TokenSet._nextId = 1, z.TokenSet.fromArray = function (e) {
    for (var t = new z.TokenSet.Builder(), r = 0, i = e.length; r < i; r++) t.insert(e[r]);return t.finish(), t.root;
  }, z.TokenSet.fromClause = function (e) {
    return "editDistance" in e ? z.TokenSet.fromFuzzyString(e.term, e.editDistance) : z.TokenSet.fromString(e.term);
  }, z.TokenSet.fromFuzzyString = function (e, t) {
    for (var r = new z.TokenSet(), i = [{ node: r, editsRemaining: t, str: e }]; i.length;) {
      var n,
          s,
          o,
          a = i.pop();if (0 < a.str.length) (s = a.str.charAt(0)) in a.node.edges ? n = a.node.edges[s] : (n = new z.TokenSet(), a.node.edges[s] = n), 1 == a.str.length ? n.final = !0 : i.push({ node: n, editsRemaining: a.editsRemaining, str: a.str.slice(1) });if (0 < a.editsRemaining && 1 < a.str.length) (s = a.str.charAt(1)) in a.node.edges ? o = a.node.edges[s] : (o = new z.TokenSet(), a.node.edges[s] = o), a.str.length <= 2 ? o.final = !0 : i.push({ node: o, editsRemaining: a.editsRemaining - 1, str: a.str.slice(2) });if (0 < a.editsRemaining && 1 == a.str.length && (a.node.final = !0), 0 < a.editsRemaining && 1 <= a.str.length) {
        if ("*" in a.node.edges) var u = a.node.edges["*"];else {
          u = new z.TokenSet();a.node.edges["*"] = u;
        }1 == a.str.length ? u.final = !0 : i.push({ node: u, editsRemaining: a.editsRemaining - 1, str: a.str.slice(1) });
      }if (0 < a.editsRemaining) {
        if ("*" in a.node.edges) var l = a.node.edges["*"];else {
          l = new z.TokenSet();a.node.edges["*"] = l;
        }0 == a.str.length ? l.final = !0 : i.push({ node: l, editsRemaining: a.editsRemaining - 1, str: a.str });
      }if (0 < a.editsRemaining && 1 < a.str.length) {
        var c,
            h = a.str.charAt(0),
            d = a.str.charAt(1);d in a.node.edges ? c = a.node.edges[d] : (c = new z.TokenSet(), a.node.edges[d] = c), 1 == a.str.length ? c.final = !0 : i.push({ node: c, editsRemaining: a.editsRemaining - 1, str: h + a.str.slice(2) });
      }
    }return r;
  }, z.TokenSet.fromString = function (e) {
    for (var t = new z.TokenSet(), r = t, i = !1, n = 0, s = e.length; n < s; n++) {
      var o = e[n],
          a = n == s - 1;if ("*" == o) i = !0, (t.edges[o] = t).final = a;else {
        var u = new z.TokenSet();u.final = a, t.edges[o] = u, t = u, i && (t.edges["*"] = r);
      }
    }return r;
  }, z.TokenSet.prototype.toArray = function () {
    for (var e = [], t = [{ prefix: "", node: this }]; t.length;) {
      var r = t.pop(),
          i = Object.keys(r.node.edges),
          n = i.length;r.node.final && e.push(r.prefix);for (var s = 0; s < n; s++) {
        var o = i[s];t.push({ prefix: r.prefix.concat(o), node: r.node.edges[o] });
      }
    }return e;
  }, z.TokenSet.prototype.toString = function () {
    if (this._str) return this._str;for (var e = this.final ? "1" : "0", t = Object.keys(this.edges).sort(), r = t.length, i = 0; i < r; i++) {
      var n = t[i];e = e + n + this.edges[n].id;
    }return e;
  }, z.TokenSet.prototype.intersect = function (e) {
    for (var t = new z.TokenSet(), r = void 0, i = [{ qNode: e, output: t, node: this }]; i.length;) {
      r = i.pop();for (var n = Object.keys(r.qNode.edges), s = n.length, o = Object.keys(r.node.edges), a = o.length, u = 0; u < s; u++) for (var l = n[u], c = 0; c < a; c++) {
        var h = o[c];if (h == l || "*" == l) {
          var d = r.node.edges[h],
              f = r.qNode.edges[l],
              p = d.final && f.final,
              y = void 0;h in r.output.edges ? (y = r.output.edges[h]).final = y.final || p : ((y = new z.TokenSet()).final = p, r.output.edges[h] = y), i.push({ qNode: f, output: y, node: d });
        }
      }
    }return t;
  }, z.TokenSet.Builder = function () {
    this.previousWord = "", this.root = new z.TokenSet(), this.uncheckedNodes = [], this.minimizedNodes = {};
  }, z.TokenSet.Builder.prototype.insert = function (e) {
    var t,
        r = 0;if (e < this.previousWord) throw new Error("Out of order word insertion");for (var i = 0; i < e.length && i < this.previousWord.length && e[i] == this.previousWord[i]; i++) r++;this.minimize(r), t = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child;for (i = r; i < e.length; i++) {
      var n = new z.TokenSet(),
          s = e[i];t.edges[s] = n, this.uncheckedNodes.push({ parent: t, char: s, child: n }), t = n;
    }t.final = !0, this.previousWord = e;
  }, z.TokenSet.Builder.prototype.finish = function () {
    this.minimize(0);
  }, z.TokenSet.Builder.prototype.minimize = function (e) {
    for (var t = this.uncheckedNodes.length - 1; e <= t; t--) {
      var r = this.uncheckedNodes[t],
          i = r.child.toString();i in this.minimizedNodes ? r.parent.edges[r.char] = this.minimizedNodes[i] : (r.child._str = i, this.minimizedNodes[i] = r.child), this.uncheckedNodes.pop();
    }
  }, z.Index = function (e) {
    this.invertedIndex = e.invertedIndex, this.fieldVectors = e.fieldVectors, this.tokenSet = e.tokenSet, this.fields = e.fields, this.pipeline = e.pipeline;
  }, z.Index.prototype.search = function (t) {
    return this.query(function (e) {
      new z.QueryParser(t, e).parse();
    });
  }, z.Index.prototype.query = function (e) {
    for (var t = new z.Query(this.fields), r = Object.create(null), i = Object.create(null), n = Object.create(null), s = Object.create(null), o = Object.create(null), a = 0; a < this.fields.length; a++) i[this.fields[a]] = new z.Vector();e.call(t, t);for (a = 0; a < t.clauses.length; a++) {
      var u = t.clauses[a],
          l = null,
          c = z.Set.complete;l = u.usePipeline ? this.pipeline.runString(u.term, { fields: u.fields }) : [u.term];for (var h = 0; h < l.length; h++) {
        var d = l[h];u.term = d;var f = z.TokenSet.fromClause(u),
            p = this.tokenSet.intersect(f).toArray();if (0 === p.length && u.presence === z.Query.presence.REQUIRED) {
          for (var y = 0; y < u.fields.length; y++) {
            s[R = u.fields[y]] = z.Set.empty;
          }break;
        }for (var m = 0; m < p.length; m++) {
          var g = p[m],
              x = this.invertedIndex[g],
              v = x._index;for (y = 0; y < u.fields.length; y++) {
            var w = x[R = u.fields[y]],
                Q = Object.keys(w),
                k = g + "/" + R,
                S = new z.Set(Q);if (u.presence == z.Query.presence.REQUIRED && (c = c.union(S), void 0 === s[R] && (s[R] = z.Set.complete)), u.presence != z.Query.presence.PROHIBITED) {
              if (i[R].upsert(v, u.boost, function (e, t) {
                return e + t;
              }), !n[k]) {
                for (var E = 0; E < Q.length; E++) {
                  var L,
                      b = Q[E],
                      T = new z.FieldRef(b, R),
                      P = w[b];void 0 === (L = r[T]) ? r[T] = new z.MatchData(g, R, P) : L.add(g, R, P);
                }n[k] = !0;
              }
            } else void 0 === o[R] && (o[R] = z.Set.empty), o[R] = o[R].union(S);
          }
        }
      }if (u.presence === z.Query.presence.REQUIRED) for (y = 0; y < u.fields.length; y++) {
        s[R = u.fields[y]] = s[R].intersect(c);
      }
    }var O = z.Set.complete,
        I = z.Set.empty;for (a = 0; a < this.fields.length; a++) {
      var R;s[R = this.fields[a]] && (O = O.intersect(s[R])), o[R] && (I = I.union(o[R]));
    }var F = Object.keys(r),
        N = [],
        C = Object.create(null);if (t.isNegated()) {
      F = Object.keys(this.fieldVectors);for (a = 0; a < F.length; a++) {
        T = F[a];var _ = z.FieldRef.fromString(T);r[T] = new z.MatchData();
      }
    }for (a = 0; a < F.length; a++) {
      var j = (_ = z.FieldRef.fromString(F[a])).docRef;if (O.contains(j) && !I.contains(j)) {
        var D,
            A = this.fieldVectors[_],
            B = i[_.fieldName].similarity(A);if (void 0 !== (D = C[j])) D.score += B, D.matchData.combine(r[_]);else {
          var V = { ref: j, score: B, matchData: r[_] };C[j] = V, N.push(V);
        }
      }
    }return N.sort(function (e, t) {
      return t.score - e.score;
    });
  }, z.Index.prototype.toJSON = function () {
    var e = Object.keys(this.invertedIndex).sort().map(function (e) {
      return [e, this.invertedIndex[e]];
    }, this),
        t = Object.keys(this.fieldVectors).map(function (e) {
      return [e, this.fieldVectors[e].toJSON()];
    }, this);return { version: z.version, fields: this.fields, fieldVectors: t, invertedIndex: e, pipeline: this.pipeline.toJSON() };
  }, z.Index.load = function (e) {
    var t = {},
        r = {},
        i = e.fieldVectors,
        n = {},
        s = e.invertedIndex,
        o = new z.TokenSet.Builder(),
        a = z.Pipeline.load(e.pipeline);e.version != z.version && z.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + z.version + "' does not match serialized index '" + e.version + "'");for (var u = 0; u < i.length; u++) {
      var l = (h = i[u])[0],
          c = h[1];r[l] = new z.Vector(c);
    }for (u = 0; u < s.length; u++) {
      var h,
          d = (h = s[u])[0],
          f = h[1];o.insert(d), n[d] = f;
    }return o.finish(), t.fields = e.fields, t.fieldVectors = r, t.invertedIndex = n, t.tokenSet = o.root, t.pipeline = a, new z.Index(t);
  }, z.Builder = function () {
    this._ref = "id", this._fields = Object.create(null), this._documents = Object.create(null), this.invertedIndex = Object.create(null), this.fieldTermFrequencies = {}, this.fieldLengths = {}, this.tokenizer = z.tokenizer, this.pipeline = new z.Pipeline(), this.searchPipeline = new z.Pipeline(), this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = [];
  }, z.Builder.prototype.ref = function (e) {
    this._ref = e;
  }, z.Builder.prototype.field = function (e, t) {
    if (/\//.test(e)) throw new RangeError("Field '" + e + "' contains illegal character '/'");this._fields[e] = t || {};
  }, z.Builder.prototype.b = function (e) {
    this._b = e < 0 ? 0 : 1 < e ? 1 : e;
  }, z.Builder.prototype.k1 = function (e) {
    this._k1 = e;
  }, z.Builder.prototype.add = function (e, t) {
    var r = e[this._ref],
        i = Object.keys(this._fields);this._documents[r] = t || {}, this.documentCount += 1;for (var n = 0; n < i.length; n++) {
      var s = i[n],
          o = this._fields[s].extractor,
          a = o ? o(e) : e[s],
          u = this.tokenizer(a, { fields: [s] }),
          l = this.pipeline.run(u),
          c = new z.FieldRef(r, s),
          h = Object.create(null);this.fieldTermFrequencies[c] = h, this.fieldLengths[c] = 0, this.fieldLengths[c] += l.length;for (var d = 0; d < l.length; d++) {
        var f = l[d];if (null == h[f] && (h[f] = 0), h[f] += 1, null == this.invertedIndex[f]) {
          var p = Object.create(null);p._index = this.termIndex, this.termIndex += 1;for (var y = 0; y < i.length; y++) p[i[y]] = Object.create(null);this.invertedIndex[f] = p;
        }null == this.invertedIndex[f][s][r] && (this.invertedIndex[f][s][r] = Object.create(null));for (var m = 0; m < this.metadataWhitelist.length; m++) {
          var g = this.metadataWhitelist[m],
              x = f.metadata[g];null == this.invertedIndex[f][s][r][g] && (this.invertedIndex[f][s][r][g] = []), this.invertedIndex[f][s][r][g].push(x);
        }
      }
    }
  }, z.Builder.prototype.calculateAverageFieldLengths = function () {
    for (var e = Object.keys(this.fieldLengths), t = e.length, r = {}, i = {}, n = 0; n < t; n++) {
      var s = z.FieldRef.fromString(e[n]),
          o = s.fieldName;i[o] || (i[o] = 0), i[o] += 1, r[o] || (r[o] = 0), r[o] += this.fieldLengths[s];
    }var a = Object.keys(this._fields);for (n = 0; n < a.length; n++) {
      var u = a[n];r[u] = r[u] / i[u];
    }this.averageFieldLength = r;
  }, z.Builder.prototype.createFieldVectors = function () {
    for (var e = {}, t = Object.keys(this.fieldTermFrequencies), r = t.length, i = Object.create(null), n = 0; n < r; n++) {
      for (var s = z.FieldRef.fromString(t[n]), o = s.fieldName, a = this.fieldLengths[s], u = new z.Vector(), l = this.fieldTermFrequencies[s], c = Object.keys(l), h = c.length, d = this._fields[o].boost || 1, f = this._documents[s.docRef].boost || 1, p = 0; p < h; p++) {
        var y,
            m,
            g,
            x = c[p],
            v = l[x],
            w = this.invertedIndex[x]._index;void 0 === i[x] ? (y = z.idf(this.invertedIndex[x], this.documentCount), i[x] = y) : y = i[x], m = y * ((this._k1 + 1) * v) / (this._k1 * (1 - this._b + this._b * (a / this.averageFieldLength[o])) + v), m *= d, m *= f, g = Math.round(1e3 * m) / 1e3, u.insert(w, g);
      }e[s] = u;
    }this.fieldVectors = e;
  }, z.Builder.prototype.createTokenSet = function () {
    this.tokenSet = z.TokenSet.fromArray(Object.keys(this.invertedIndex).sort());
  }, z.Builder.prototype.build = function () {
    return this.calculateAverageFieldLengths(), this.createFieldVectors(), this.createTokenSet(), new z.Index({ invertedIndex: this.invertedIndex, fieldVectors: this.fieldVectors, tokenSet: this.tokenSet, fields: Object.keys(this._fields), pipeline: this.searchPipeline });
  }, z.Builder.prototype.use = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);t.unshift(this), e.apply(this, t);
  }, z.MatchData = function (e, t, r) {
    for (var i = Object.create(null), n = Object.keys(r || {}), s = 0; s < n.length; s++) {
      var o = n[s];i[o] = r[o].slice();
    }this.metadata = Object.create(null), void 0 !== e && (this.metadata[e] = Object.create(null), this.metadata[e][t] = i);
  }, z.MatchData.prototype.combine = function (e) {
    for (var t = Object.keys(e.metadata), r = 0; r < t.length; r++) {
      var i = t[r],
          n = Object.keys(e.metadata[i]);null == this.metadata[i] && (this.metadata[i] = Object.create(null));for (var s = 0; s < n.length; s++) {
        var o = n[s],
            a = Object.keys(e.metadata[i][o]);null == this.metadata[i][o] && (this.metadata[i][o] = Object.create(null));for (var u = 0; u < a.length; u++) {
          var l = a[u];null == this.metadata[i][o][l] ? this.metadata[i][o][l] = e.metadata[i][o][l] : this.metadata[i][o][l] = this.metadata[i][o][l].concat(e.metadata[i][o][l]);
        }
      }
    }
  }, z.MatchData.prototype.add = function (e, t, r) {
    if (!(e in this.metadata)) return this.metadata[e] = Object.create(null), void (this.metadata[e][t] = r);if (t in this.metadata[e]) for (var i = Object.keys(r), n = 0; n < i.length; n++) {
      var s = i[n];s in this.metadata[e][t] ? this.metadata[e][t][s] = this.metadata[e][t][s].concat(r[s]) : this.metadata[e][t][s] = r[s];
    } else this.metadata[e][t] = r;
  }, z.Query = function (e) {
    this.clauses = [], this.allFields = e;
  }, z.Query.wildcard = new String("*"), z.Query.wildcard.NONE = 0, z.Query.wildcard.LEADING = 1, z.Query.wildcard.TRAILING = 2, z.Query.presence = { OPTIONAL: 1, REQUIRED: 2, PROHIBITED: 3 }, z.Query.prototype.clause = function (e) {
    return "fields" in e || (e.fields = this.allFields), "boost" in e || (e.boost = 1), "usePipeline" in e || (e.usePipeline = !0), "wildcard" in e || (e.wildcard = z.Query.wildcard.NONE), e.wildcard & z.Query.wildcard.LEADING && e.term.charAt(0) != z.Query.wildcard && (e.term = "*" + e.term), e.wildcard & z.Query.wildcard.TRAILING && e.term.slice(-1) != z.Query.wildcard && (e.term = e.term + "*"), "presence" in e || (e.presence = z.Query.presence.OPTIONAL), this.clauses.push(e), this;
  }, z.Query.prototype.isNegated = function () {
    for (var e = 0; e < this.clauses.length; e++) if (this.clauses[e].presence != z.Query.presence.PROHIBITED) return !1;return !0;
  }, z.Query.prototype.term = function (e, t) {
    if (Array.isArray(e)) return e.forEach(function (e) {
      this.term(e, z.utils.clone(t));
    }, this), this;var r = t || {};return r.term = e.toString(), this.clause(r), this;
  }, z.QueryParseError = function (e, t, r) {
    this.name = "QueryParseError", this.message = e, this.start = t, this.end = r;
  }, z.QueryParseError.prototype = new Error(), z.QueryLexer = function (e) {
    this.lexemes = [], this.str = e, this.length = e.length, this.pos = 0, this.start = 0, this.escapeCharPositions = [];
  }, z.QueryLexer.prototype.run = function () {
    for (var e = z.QueryLexer.lexText; e;) e = e(this);
  }, z.QueryLexer.prototype.sliceString = function () {
    for (var e = [], t = this.start, r = this.pos, i = 0; i < this.escapeCharPositions.length; i++) r = this.escapeCharPositions[i], e.push(this.str.slice(t, r)), t = r + 1;return e.push(this.str.slice(t, this.pos)), this.escapeCharPositions.length = 0, e.join("");
  }, z.QueryLexer.prototype.emit = function (e) {
    this.lexemes.push({ type: e, str: this.sliceString(), start: this.start, end: this.pos }), this.start = this.pos;
  }, z.QueryLexer.prototype.escapeCharacter = function () {
    this.escapeCharPositions.push(this.pos - 1), this.pos += 1;
  }, z.QueryLexer.prototype.next = function () {
    if (this.pos >= this.length) return z.QueryLexer.EOS;var e = this.str.charAt(this.pos);return this.pos += 1, e;
  }, z.QueryLexer.prototype.width = function () {
    return this.pos - this.start;
  }, z.QueryLexer.prototype.ignore = function () {
    this.start == this.pos && (this.pos += 1), this.start = this.pos;
  }, z.QueryLexer.prototype.backup = function () {
    this.pos -= 1;
  }, z.QueryLexer.prototype.acceptDigitRun = function () {
    for (var e, t; 47 < (t = (e = this.next()).charCodeAt(0)) && t < 58;);e != z.QueryLexer.EOS && this.backup();
  }, z.QueryLexer.prototype.more = function () {
    return this.pos < this.length;
  }, z.QueryLexer.EOS = "EOS", z.QueryLexer.FIELD = "FIELD", z.QueryLexer.TERM = "TERM", z.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", z.QueryLexer.BOOST = "BOOST", z.QueryLexer.PRESENCE = "PRESENCE", z.QueryLexer.lexField = function (e) {
    return e.backup(), e.emit(z.QueryLexer.FIELD), e.ignore(), z.QueryLexer.lexText;
  }, z.QueryLexer.lexTerm = function (e) {
    if (1 < e.width() && (e.backup(), e.emit(z.QueryLexer.TERM)), e.ignore(), e.more()) return z.QueryLexer.lexText;
  }, z.QueryLexer.lexEditDistance = function (e) {
    return e.ignore(), e.acceptDigitRun(), e.emit(z.QueryLexer.EDIT_DISTANCE), z.QueryLexer.lexText;
  }, z.QueryLexer.lexBoost = function (e) {
    return e.ignore(), e.acceptDigitRun(), e.emit(z.QueryLexer.BOOST), z.QueryLexer.lexText;
  }, z.QueryLexer.lexEOS = function (e) {
    0 < e.width() && e.emit(z.QueryLexer.TERM);
  }, z.QueryLexer.termSeparator = z.tokenizer.separator, z.QueryLexer.lexText = function (e) {
    for (;;) {
      var t = e.next();if (t == z.QueryLexer.EOS) return z.QueryLexer.lexEOS;if (92 != t.charCodeAt(0)) {
        if (":" == t) return z.QueryLexer.lexField;if ("~" == t) return e.backup(), 0 < e.width() && e.emit(z.QueryLexer.TERM), z.QueryLexer.lexEditDistance;if ("^" == t) return e.backup(), 0 < e.width() && e.emit(z.QueryLexer.TERM), z.QueryLexer.lexBoost;if ("+" == t && 1 === e.width()) return e.emit(z.QueryLexer.PRESENCE), z.QueryLexer.lexText;if ("-" == t && 1 === e.width()) return e.emit(z.QueryLexer.PRESENCE), z.QueryLexer.lexText;if (t.match(z.QueryLexer.termSeparator)) return z.QueryLexer.lexTerm;
      } else e.escapeCharacter();
    }
  }, z.QueryParser = function (e, t) {
    this.lexer = new z.QueryLexer(e), this.query = t, this.currentClause = {}, this.lexemeIdx = 0;
  }, z.QueryParser.prototype.parse = function () {
    this.lexer.run(), this.lexemes = this.lexer.lexemes;for (var e = z.QueryParser.parseClause; e;) e = e(this);return this.query;
  }, z.QueryParser.prototype.peekLexeme = function () {
    return this.lexemes[this.lexemeIdx];
  }, z.QueryParser.prototype.consumeLexeme = function () {
    var e = this.peekLexeme();return this.lexemeIdx += 1, e;
  }, z.QueryParser.prototype.nextClause = function () {
    var e = this.currentClause;this.query.clause(e), this.currentClause = {};
  }, z.QueryParser.parseClause = function (e) {
    var t = e.peekLexeme();if (null != t) switch (t.type) {case z.QueryLexer.PRESENCE:
        return z.QueryParser.parsePresence;case z.QueryLexer.FIELD:
        return z.QueryParser.parseField;case z.QueryLexer.TERM:
        return z.QueryParser.parseTerm;default:
        var r = "expected either a field or a term, found " + t.type;throw 1 <= t.str.length && (r += " with value '" + t.str + "'"), new z.QueryParseError(r, t.start, t.end);}
  }, z.QueryParser.parsePresence = function (e) {
    var t = e.consumeLexeme();if (null != t) {
      switch (t.str) {case "-":
          e.currentClause.presence = z.Query.presence.PROHIBITED;break;case "+":
          e.currentClause.presence = z.Query.presence.REQUIRED;break;default:
          var r = "unrecognised presence operator'" + t.str + "'";throw new z.QueryParseError(r, t.start, t.end);}var i = e.peekLexeme();if (null == i) {
        r = "expecting term or field, found nothing";throw new z.QueryParseError(r, t.start, t.end);
      }switch (i.type) {case z.QueryLexer.FIELD:
          return z.QueryParser.parseField;case z.QueryLexer.TERM:
          return z.QueryParser.parseTerm;default:
          r = "expecting term or field, found '" + i.type + "'";throw new z.QueryParseError(r, i.start, i.end);}
    }
  }, z.QueryParser.parseField = function (e) {
    var t = e.consumeLexeme();if (null != t) {
      if (-1 == e.query.allFields.indexOf(t.str)) {
        var r = e.query.allFields.map(function (e) {
          return "'" + e + "'";
        }).join(", "),
            i = "unrecognised field '" + t.str + "', possible fields: " + r;throw new z.QueryParseError(i, t.start, t.end);
      }e.currentClause.fields = [t.str];var n = e.peekLexeme();if (null == n) {
        i = "expecting term, found nothing";throw new z.QueryParseError(i, t.start, t.end);
      }switch (n.type) {case z.QueryLexer.TERM:
          return z.QueryParser.parseTerm;default:
          i = "expecting term, found '" + n.type + "'";throw new z.QueryParseError(i, n.start, n.end);}
    }
  }, z.QueryParser.parseTerm = function (e) {
    var t = e.consumeLexeme();if (null != t) {
      e.currentClause.term = t.str.toLowerCase(), -1 != t.str.indexOf("*") && (e.currentClause.usePipeline = !1);var r = e.peekLexeme();if (null != r) switch (r.type) {case z.QueryLexer.TERM:
          return e.nextClause(), z.QueryParser.parseTerm;case z.QueryLexer.FIELD:
          return e.nextClause(), z.QueryParser.parseField;case z.QueryLexer.EDIT_DISTANCE:
          return z.QueryParser.parseEditDistance;case z.QueryLexer.BOOST:
          return z.QueryParser.parseBoost;case z.QueryLexer.PRESENCE:
          return e.nextClause(), z.QueryParser.parsePresence;default:
          var i = "Unexpected lexeme type '" + r.type + "'";throw new z.QueryParseError(i, r.start, r.end);} else e.nextClause();
    }
  }, z.QueryParser.parseEditDistance = function (e) {
    var t = e.consumeLexeme();if (null != t) {
      var r = parseInt(t.str, 10);if (isNaN(r)) {
        var i = "edit distance must be numeric";throw new z.QueryParseError(i, t.start, t.end);
      }e.currentClause.editDistance = r;var n = e.peekLexeme();if (null != n) switch (n.type) {case z.QueryLexer.TERM:
          return e.nextClause(), z.QueryParser.parseTerm;case z.QueryLexer.FIELD:
          return e.nextClause(), z.QueryParser.parseField;case z.QueryLexer.EDIT_DISTANCE:
          return z.QueryParser.parseEditDistance;case z.QueryLexer.BOOST:
          return z.QueryParser.parseBoost;default:
          i = "Unexpected lexeme type '" + n.type + "'";throw new z.QueryParseError(i, n.start, n.end);} else e.nextClause();
    }
  }, z.QueryParser.parseBoost = function (e) {
    var t = e.consumeLexeme();if (null != t) {
      var r = parseInt(t.str, 10);if (isNaN(r)) {
        var i = "boost must be numeric";throw new z.QueryParseError(i, t.start, t.end);
      }e.currentClause.boost = r;var n = e.peekLexeme();if (null != n) switch (n.type) {case z.QueryLexer.TERM:
          return e.nextClause(), z.QueryParser.parseTerm;case z.QueryLexer.FIELD:
          return e.nextClause(), z.QueryParser.parseField;case z.QueryLexer.EDIT_DISTANCE:
          return z.QueryParser.parseEditDistance;case z.QueryLexer.BOOST:
          return z.QueryParser.parseBoost;default:
          i = "Unexpected lexeme type '" + n.type + "'";throw new z.QueryParseError(i, n.start, n.end);} else e.nextClause();
    }
  }, n = this, s = function () {
    return z;
  }, "function" == typeof define && define.amd ? define(s) : "object" == typeof exports ? module.exports = s() : n.lunr = s();
}();
//# sourceMappingURL=/sm/c6b660e88edbdc3761aa42cbf710eeac855946db58876059a56606f939aa0205.map
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById("main-nav").classList.add('expanded');
	document.body.style.overflow = "hidden";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById("main-nav").classList.remove("expanded");
	document.body.style.backgroundColor = "white";
	document.body.style.overflow = "auto";
}

// Focus al search
var elm_rows = document.getElementsByClassName("main-search-form")[0];
elm_rows.addEventListener("click", function (e) {
	this.getElementsByTagName("input")[0].focus();
});

$(document).ready(function () {
	$('#slides').slick({
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
});

$(function () {
	$('.lazy').Lazy();
});
var lunrIndex, $results, pagesIndex;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');

        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
    }
}

var searchTerm = getQueryVariable('query');

// Initialize lunrjs using our generated index file
function initLunr() {
    // First retrieve the index file
    $.getJSON("/index.json").done(function (index) {
        pagesIndex = index;
        lunrIndex = lunr(function () {
            this.field("title", { boost: 10 });
            this.field("tags", { boost: 5 });
            this.field("categories", { boost: 5 });
            this.field("content");
            this.ref("ref");

            pagesIndex.forEach(function (page) {
                this.add(page);
            }, this);
        });
    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Error getting Hugo index flie:", err);
    });
}

// Nothing crazy here, just hook up a listener on the input field
function initUI() {
    $results = $("#results");
    $("#search").keyup(function () {
        $results.empty();

        // Only trigger a search when 2 chars. at least have been provided
        var query = $(this).val();
        if (query.length < 2) {
            return;
        }

        var results = search(query);

        renderResults(results);
    });
}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(query) {
    return lunrIndex.search(query).map(function (result) {
        return pagesIndex.filter(function (page) {
            return page.ref === result.ref;
        })[0];
    });
}

/**
 * Display the 10 first results
 *
 * @param  {Array} results to display
 */
function renderResults(results) {
    if (!results.length) {
        return;
    }

    // Only show the ten first results
    results.slice(0, 100).forEach(function (result) {
        var $result = $("<li>");
        $result.append($("<a>", {
            href: result.ref,
            text: "» " + result.title
        }));
        $results.append($result);
    });
}

// Let's get started
initLunr();

$(document).ready(function () {
    initUI();
    $("#search").keyup(function () {
        if (!this.value) {
            $(".search-results-box").removeClass('expanded');
        } else {
            $(".search-results-box").addClass('expanded');
        }
    });
});
!function (i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";
  var e = window.Slick || {};(e = function () {
    var e = 0;return function (t, o) {
      var s,
          n = this;n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({ height: e }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function (i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      }, complete: function () {
        t && t.call();
      } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();null !== t && "object" == typeof t && t.each(function () {
      var t = i(this).slick("getSlick");t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};!1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;!0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);n.get(c) && a.appendChild(n.get(c));
          }d.appendChild(a);
        }o.appendChild(d);
      }l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);break;case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);break;case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");break;default:
        return;}
  }, e.prototype.checkNavigable = function (i) {
    var e, t;if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;break;
      }t = e[o];
    }return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;!1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();var o = i(this);setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
  }, e.prototype.init = function (e) {
    var t = this;i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
    }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;!0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");r.onload = function () {
          e.animate({ opacity: 0 }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }var t,
        o,
        s,
        n = this;if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({ data: { message: "next" } });
  }, e.prototype.orientationChange = function () {
    var i = this;i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({ data: { message: "previous" } });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};!0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
    }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
  }, e.prototype.setHeight = function () {
    var i = this;if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;r.options.responsive.push(s[t]);
    }l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));"ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();!0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {case "left":case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;break;case "right":case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;}"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {case "start":
        e.swipeStart(i);break;case "move":
        e.swipeMove(i);break;case "end":
        e.swipeEnd(i);}
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;return o;
  };
});

//# sourceMappingURL=site.js.map