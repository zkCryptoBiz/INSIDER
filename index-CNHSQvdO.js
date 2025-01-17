function pg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function mg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var dd = { exports: {} },
  Is = {},
  hd = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  gg = Symbol.for("react.portal"),
  yg = Symbol.for("react.fragment"),
  vg = Symbol.for("react.strict_mode"),
  xg = Symbol.for("react.profiler"),
  wg = Symbol.for("react.provider"),
  Ag = Symbol.for("react.context"),
  Sg = Symbol.for("react.forward_ref"),
  Tg = Symbol.for("react.suspense"),
  Cg = Symbol.for("react.memo"),
  kg = Symbol.for("react.lazy"),
  Du = Symbol.iterator;
function Pg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Du && e[Du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  md = Object.assign,
  gd = {};
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gd),
    (this.updater = n || pd);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yd() {}
yd.prototype = nr.prototype;
function sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gd),
    (this.updater = n || pd);
}
var oa = (sa.prototype = new yd());
oa.constructor = sa;
md(oa, nr.prototype);
oa.isPureReactComponent = !0;
var ju = Array.isArray,
  vd = Object.prototype.hasOwnProperty,
  la = { current: null },
  xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function wd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      vd.call(t, r) && !xd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ni,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: la.current,
  };
}
function Eg(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function Mg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ou = /\/+/g;
function no(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mg("" + e.key)
    : t.toString(36);
}
function Bi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case gg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + no(o, 0) : r),
      ju(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ou, "$&/") + "/"),
          Bi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (aa(i) &&
            (i = Eg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ou, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ju(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + no(s, l);
      o += Bi(s, t, n, a, i);
    }
  else if (((a = Pg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + no(s, l++)), (o += Bi(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Bi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Ng(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var we = { current: null },
  Fi = { transition: null },
  Ig = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: la,
  };
function Ad() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: pi,
  forEach: function (e, t, n) {
    pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!aa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = nr;
B.Fragment = yg;
B.Profiler = xg;
B.PureComponent = sa;
B.StrictMode = vg;
B.Suspense = Tg;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ig;
B.act = Ad;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = md({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = la.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      vd.call(t, a) &&
        !xd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: s, props: r, _owner: o };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ag,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wg, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = wd;
B.createFactory = function (e) {
  var t = wd.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Sg, render: e };
};
B.isValidElement = aa;
B.lazy = function (e) {
  return { $$typeof: kg, _payload: { _status: -1, _result: e }, _init: Ng };
};
B.memo = function (e, t) {
  return { $$typeof: Cg, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
B.unstable_act = Ad;
B.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
B.useContext = function (e) {
  return we.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
B.useId = function () {
  return we.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return we.current.useRef(e);
};
B.useState = function (e) {
  return we.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return we.current.useTransition();
};
B.version = "18.3.1";
hd.exports = B;
var T = hd.exports;
const sn = mg(T),
  Rg = pg({ __proto__: null, default: sn }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lg = T,
  Dg = Symbol.for("react.element"),
  jg = Symbol.for("react.fragment"),
  Og = Object.prototype.hasOwnProperty,
  Bg = Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Og.call(t, r) && !Fg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Dg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Bg.current,
  };
}
Is.Fragment = jg;
Is.jsx = Sd;
Is.jsxs = Sd;
dd.exports = Is;
var g = dd.exports,
  Wo = {},
  Td = { exports: {} },
  De = {},
  Cd = { exports: {} },
  kd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, D) {
    var j = M.length;
    M.push(D);
    e: for (; 0 < j; ) {
      var Q = (j - 1) >>> 1,
        ne = M[Q];
      if (0 < i(ne, D)) (M[Q] = D), (M[j] = ne), (j = Q);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var D = M[0],
      j = M.pop();
    if (j !== D) {
      M[0] = j;
      e: for (var Q = 0, ne = M.length, Gt = ne >>> 1; Q < Gt; ) {
        var qt = 2 * (Q + 1) - 1,
          to = M[qt],
          _t = qt + 1,
          hi = M[_t];
        if (0 > i(to, j))
          _t < ne && 0 > i(hi, to)
            ? ((M[Q] = hi), (M[_t] = j), (Q = _t))
            : ((M[Q] = to), (M[qt] = j), (Q = qt));
        else if (_t < ne && 0 > i(hi, j)) (M[Q] = hi), (M[_t] = j), (Q = _t);
        else break e;
      }
    }
    return D;
  }
  function i(M, D) {
    var j = M.sortIndex - D.sortIndex;
    return j !== 0 ? j : M.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    y = !1,
    v = !1,
    x = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= M)
        r(u), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(u);
    }
  }
  function w(M) {
    if (((x = !1), m(M), !v))
      if (n(a) !== null) (v = !0), Zt(S);
      else {
        var D = n(u);
        D !== null && Z(w, D.startTime - M);
      }
  }
  function S(M, D) {
    (v = !1), x && ((x = !1), p(k), (k = -1)), (y = !0);
    var j = d;
    try {
      for (
        m(D), f = n(a);
        f !== null && (!(f.expirationTime > D) || (M && !ee()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var ne = Q(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof ne == "function" ? (f.callback = ne) : f === n(a) && r(a),
            m(D);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Gt = !0;
      else {
        var qt = n(u);
        qt !== null && Z(w, qt.startTime - D), (Gt = !1);
      }
      return Gt;
    } finally {
      (f = null), (d = j), (y = !1);
    }
  }
  var P = !1,
    E = null,
    k = -1,
    O = 5,
    R = -1;
  function ee() {
    return !(e.unstable_now() - R < O);
  }
  function qe() {
    if (E !== null) {
      var M = e.unstable_now();
      R = M;
      var D = !0;
      try {
        D = E(!0, M);
      } finally {
        D ? st() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var st;
  if (typeof h == "function")
    st = function () {
      h(qe);
    };
  else if (typeof MessageChannel < "u") {
    var Jt = new MessageChannel(),
      di = Jt.port2;
    (Jt.port1.onmessage = qe),
      (st = function () {
        di.postMessage(null);
      });
  } else
    st = function () {
      A(qe, 0);
    };
  function Zt(M) {
    (E = M), P || ((P = !0), st());
  }
  function Z(M, D) {
    k = A(function () {
      M(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Zt(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var j = d;
      d = D;
      try {
        return M();
      } finally {
        d = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var j = d;
      d = M;
      try {
        return D();
      } finally {
        d = j;
      }
    }),
    (e.unstable_scheduleCallback = function (M, D, j) {
      var Q = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? Q + j : Q))
          : (j = Q),
        M)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = j + ne),
        (M = {
          id: c++,
          callback: D,
          priorityLevel: M,
          startTime: j,
          expirationTime: ne,
          sortIndex: -1,
        }),
        j > Q
          ? ((M.sortIndex = j),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (x ? (p(k), (k = -1)) : (x = !0), Z(w, j - Q)))
          : ((M.sortIndex = ne), t(a, M), v || y || ((v = !0), Zt(S))),
        M
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (M) {
      var D = d;
      return function () {
        var j = d;
        d = D;
        try {
          return M.apply(this, arguments);
        } finally {
          d = j;
        }
      };
    });
})(kd);
Cd.exports = kd;
var zg = Cd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vg = T,
  Re = zg;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pd = new Set(),
  Or = {};
function vn(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) Pd.add(t[e]);
}
var pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ko = Object.prototype.hasOwnProperty,
  Ug =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bu = {},
  Fu = {};
function Qg(e) {
  return Ko.call(Fu, e)
    ? !0
    : Ko.call(Bu, e)
    ? !1
    : Ug.test(e)
    ? (Fu[e] = !0)
    : ((Bu[e] = !0), !1);
}
function bg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hg(e, t, n, r) {
  if (t === null || typeof t > "u" || bg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ua = /[\-:]([a-z])/g;
function ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ua, ca);
    ce[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ua, ca);
    ce[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ua, ca);
  ce[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fa(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hg(t, n, i, r) && (n = null),
    r || i === null
      ? Qg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = Vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mi = Symbol.for("react.element"),
  Sn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  da = Symbol.for("react.strict_mode"),
  Xo = Symbol.for("react.profiler"),
  Ed = Symbol.for("react.provider"),
  Md = Symbol.for("react.context"),
  ha = Symbol.for("react.forward_ref"),
  Yo = Symbol.for("react.suspense"),
  Jo = Symbol.for("react.suspense_list"),
  pa = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Nd = Symbol.for("react.offscreen"),
  zu = Symbol.iterator;
function or(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (zu && e[zu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  ro;
function yr(e) {
  if (ro === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ro = (t && t[1]) || "";
    }
  return (
    `
` +
    ro +
    e
  );
}
var io = !1;
function so(e, t) {
  if (!e || io) return "";
  io = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (io = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function Wg(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = so(e.type, !1)), e;
    case 11:
      return (e = so(e.type.render, !1)), e;
    case 1:
      return (e = so(e.type, !0)), e;
    default:
      return "";
  }
}
function Zo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Sn:
      return "Portal";
    case Xo:
      return "Profiler";
    case da:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Jo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Md:
        return (e.displayName || "Context") + ".Consumer";
      case Ed:
        return (e._context.displayName || "Context") + ".Provider";
      case ha:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pa:
        return (
          (t = e.displayName || null), t !== null ? t : Zo(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Zo(e(t));
        } catch {}
    }
  return null;
}
function Kg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zo(t);
    case 8:
      return t === da ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ut(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Id(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xg(e) {
  var t = Id(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gi(e) {
  e._valueTracker || (e._valueTracker = Xg(e));
}
function Rd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Id(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function qi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Go(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ld(e, t) {
  (t = t.checked), t != null && fa(e, "checked", t, !1);
}
function qo(e, t) {
  Ld(e, t);
  var n = Ut(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _o(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _o(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _o(e, t, n) {
  (t !== "number" || qi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function Dd(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function el(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yi,
  Od = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        yi = yi || document.createElement("div"),
          yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Yg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function (e) {
  Yg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]);
  });
});
function Bd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Fd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Bd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Jg = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function tl(e, t) {
  if (t) {
    if (Jg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function nl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var rl = null;
function ma(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var il = null,
  Un = null,
  Qn = null;
function Hu(e) {
  if ((e = si(e))) {
    if (typeof il != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Os(t)), il(e.stateNode, e.type, t));
  }
}
function zd(e) {
  Un ? (Qn ? Qn.push(e) : (Qn = [e])) : (Un = e);
}
function Vd() {
  if (Un) {
    var e = Un,
      t = Qn;
    if (((Qn = Un = null), Hu(e), t)) for (e = 0; e < t.length; e++) Hu(t[e]);
  }
}
function Ud(e, t) {
  return e(t);
}
function Qd() {}
var oo = !1;
function bd(e, t, n) {
  if (oo) return e(t, n);
  oo = !0;
  try {
    return Ud(e, t, n);
  } finally {
    (oo = !1), (Un !== null || Qn !== null) && (Qd(), Vd());
  }
}
function Fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Os(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var sl = !1;
if (pt)
  try {
    var lr = {};
    Object.defineProperty(lr, "passive", {
      get: function () {
        sl = !0;
      },
    }),
      window.addEventListener("test", lr, lr),
      window.removeEventListener("test", lr, lr);
  } catch {
    sl = !1;
  }
function Zg(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Cr = !1,
  _i = null,
  $i = !1,
  ol = null,
  Gg = {
    onError: function (e) {
      (Cr = !0), (_i = e);
    },
  };
function qg(e, t, n, r, i, s, o, l, a) {
  (Cr = !1), (_i = null), Zg.apply(Gg, arguments);
}
function _g(e, t, n, r, i, s, o, l, a) {
  if ((qg.apply(this, arguments), Cr)) {
    if (Cr) {
      var u = _i;
      (Cr = !1), (_i = null);
    } else throw Error(C(198));
    $i || (($i = !0), (ol = u));
  }
}
function xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wu(e) {
  if (xn(e) !== e) throw Error(C(188));
}
function $g(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Wu(i), e;
        if (s === r) return Wu(i), t;
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Wd(e) {
  return (e = $g(e)), e !== null ? Kd(e) : null;
}
function Kd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Kd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xd = Re.unstable_scheduleCallback,
  Ku = Re.unstable_cancelCallback,
  ey = Re.unstable_shouldYield,
  ty = Re.unstable_requestPaint,
  $ = Re.unstable_now,
  ny = Re.unstable_getCurrentPriorityLevel,
  ga = Re.unstable_ImmediatePriority,
  Yd = Re.unstable_UserBlockingPriority,
  es = Re.unstable_NormalPriority,
  ry = Re.unstable_LowPriority,
  Jd = Re.unstable_IdlePriority,
  Rs = null,
  tt = null;
function iy(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(Rs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : ly,
  sy = Math.log,
  oy = Math.LN2;
function ly(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sy(e) / oy) | 0)) | 0;
}
var vi = 64,
  xi = 4194304;
function xr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ts(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = xr(l)) : ((s &= o), s !== 0 && (r = xr(s)));
  } else (o = n & ~i), o !== 0 ? (r = xr(o)) : s !== 0 && (r = xr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Je(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ay(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function uy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Je(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = ay(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function ll(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Zd() {
  var e = vi;
  return (vi <<= 1), !(vi & 4194240) && (vi = 64), e;
}
function lo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n);
}
function cy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Je(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function ya(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function Gd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qd,
  va,
  _d,
  $d,
  eh,
  al = !1,
  wi = [],
  It = null,
  Rt = null,
  Lt = null,
  zr = new Map(),
  Vr = new Map(),
  Ct = [],
  fy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function ar(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = si(t)), t !== null && va(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function dy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (It = ar(It, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rt = ar(Rt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Lt = ar(Lt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return zr.set(s, ar(zr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Vr.set(s, ar(Vr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function th(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hd(n)), t !== null)) {
          (e.blockedOn = t),
            eh(e.priority, function () {
              _d(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (rl = r), n.target.dispatchEvent(r), (rl = null);
    } else return (t = si(n)), t !== null && va(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Yu(e, t, n) {
  zi(e) && n.delete(t);
}
function hy() {
  (al = !1),
    It !== null && zi(It) && (It = null),
    Rt !== null && zi(Rt) && (Rt = null),
    Lt !== null && zi(Lt) && (Lt = null),
    zr.forEach(Yu),
    Vr.forEach(Yu);
}
function ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    al ||
      ((al = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, hy)));
}
function Ur(e) {
  function t(i) {
    return ur(i, e);
  }
  if (0 < wi.length) {
    ur(wi[0], e);
    for (var n = 1; n < wi.length; n++) {
      var r = wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && ur(It, e),
      Rt !== null && ur(Rt, e),
      Lt !== null && ur(Lt, e),
      zr.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < Ct.length;
    n++
  )
    (r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
    th(n), n.blockedOn === null && Ct.shift();
}
var bn = xt.ReactCurrentBatchConfig,
  ns = !0;
function py(e, t, n, r) {
  var i = z,
    s = bn.transition;
  bn.transition = null;
  try {
    (z = 1), xa(e, t, n, r);
  } finally {
    (z = i), (bn.transition = s);
  }
}
function my(e, t, n, r) {
  var i = z,
    s = bn.transition;
  bn.transition = null;
  try {
    (z = 4), xa(e, t, n, r);
  } finally {
    (z = i), (bn.transition = s);
  }
}
function xa(e, t, n, r) {
  if (ns) {
    var i = ul(e, t, n, r);
    if (i === null) vo(e, t, r, rs, n), Xu(e, r);
    else if (dy(i, e, t, n, r)) r.stopPropagation();
    else if ((Xu(e, r), t & 4 && -1 < fy.indexOf(e))) {
      for (; i !== null; ) {
        var s = si(i);
        if (
          (s !== null && qd(s),
          (s = ul(e, t, n, r)),
          s === null && vo(e, t, r, rs, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else vo(e, t, r, null, n);
  }
}
var rs = null;
function ul(e, t, n, r) {
  if (((rs = null), (e = ma(r)), (e = on(e)), e !== null))
    if (((t = xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (rs = e), null;
}
function nh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ny()) {
        case ga:
          return 1;
        case Yd:
          return 4;
        case es:
        case ry:
          return 16;
        case Jd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null,
  wa = null,
  Vi = null;
function rh() {
  if (Vi) return Vi;
  var e,
    t = wa,
    n = t.length,
    r,
    i = "value" in Pt ? Pt.value : Pt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Vi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ui(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ai() {
  return !0;
}
function Ju() {
  return !1;
}
function je(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ai
        : Ju),
      (this.isPropagationStopped = Ju),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ai));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ai));
      },
      persist: function () {},
      isPersistent: Ai,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Aa = je(rr),
  ii = J({}, rr, { view: 0, detail: 0 }),
  gy = je(ii),
  ao,
  uo,
  cr,
  Ls = J({}, ii, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== cr &&
            (cr && e.type === "mousemove"
              ? ((ao = e.screenX - cr.screenX), (uo = e.screenY - cr.screenY))
              : (uo = ao = 0),
            (cr = e)),
          ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : uo;
    },
  }),
  Zu = je(Ls),
  yy = J({}, Ls, { dataTransfer: 0 }),
  vy = je(yy),
  xy = J({}, ii, { relatedTarget: 0 }),
  co = je(xy),
  wy = J({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ay = je(wy),
  Sy = J({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ty = je(Sy),
  Cy = J({}, rr, { data: 0 }),
  Gu = je(Cy),
  ky = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Py = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ey = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function My(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ey[e]) ? !!t[e] : !1;
}
function Sa() {
  return My;
}
var Ny = J({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = ky[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Py[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sa,
    charCode: function (e) {
      return e.type === "keypress" ? Ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ui(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Iy = je(Ny),
  Ry = J({}, Ls, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = je(Ry),
  Ly = J({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sa,
  }),
  Dy = je(Ly),
  jy = J({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Oy = je(jy),
  By = J({}, Ls, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Fy = je(By),
  zy = [9, 13, 27, 32],
  Ta = pt && "CompositionEvent" in window,
  kr = null;
pt && "documentMode" in document && (kr = document.documentMode);
var Vy = pt && "TextEvent" in window && !kr,
  ih = pt && (!Ta || (kr && 8 < kr && 11 >= kr)),
  _u = " ",
  $u = !1;
function sh(e, t) {
  switch (e) {
    case "keyup":
      return zy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function oh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function Uy(e, t) {
  switch (e) {
    case "compositionend":
      return oh(t);
    case "keypress":
      return t.which !== 32 ? null : (($u = !0), _u);
    case "textInput":
      return (e = t.data), e === _u && $u ? null : e;
    default:
      return null;
  }
}
function Qy(e, t) {
  if (Cn)
    return e === "compositionend" || (!Ta && sh(e, t))
      ? ((e = rh()), (Vi = wa = Pt = null), (Cn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ih && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var by = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!by[e.type] : t === "textarea";
}
function lh(e, t, n, r) {
  zd(r),
    (t = is(t, "onChange")),
    0 < t.length &&
      ((n = new Aa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  Qr = null;
function Hy(e) {
  vh(e, 0);
}
function Ds(e) {
  var t = En(e);
  if (Rd(t)) return e;
}
function Wy(e, t) {
  if (e === "change") return t;
}
var ah = !1;
if (pt) {
  var fo;
  if (pt) {
    var ho = "oninput" in document;
    if (!ho) {
      var tc = document.createElement("div");
      tc.setAttribute("oninput", "return;"),
        (ho = typeof tc.oninput == "function");
    }
    fo = ho;
  } else fo = !1;
  ah = fo && (!document.documentMode || 9 < document.documentMode);
}
function nc() {
  Pr && (Pr.detachEvent("onpropertychange", uh), (Qr = Pr = null));
}
function uh(e) {
  if (e.propertyName === "value" && Ds(Qr)) {
    var t = [];
    lh(t, Qr, e, ma(e)), bd(Hy, t);
  }
}
function Ky(e, t, n) {
  e === "focusin"
    ? (nc(), (Pr = t), (Qr = n), Pr.attachEvent("onpropertychange", uh))
    : e === "focusout" && nc();
}
function Xy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ds(Qr);
}
function Yy(e, t) {
  if (e === "click") return Ds(t);
}
function Jy(e, t) {
  if (e === "input" || e === "change") return Ds(t);
}
function Zy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : Zy;
function br(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ko.call(t, i) || !Ge(e[i], t[i])) return !1;
  }
  return !0;
}
function rc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ic(e, t) {
  var n = rc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rc(n);
  }
}
function ch(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ch(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function fh() {
  for (var e = window, t = qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qi(e.document);
  }
  return t;
}
function Ca(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gy(e) {
  var t = fh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ch(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ca(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = ic(n, s));
        var o = ic(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var qy = pt && "documentMode" in document && 11 >= document.documentMode,
  kn = null,
  cl = null,
  Er = null,
  fl = !1;
function sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fl ||
    kn == null ||
    kn !== qi(r) ||
    ((r = kn),
    "selectionStart" in r && Ca(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Er && br(Er, r)) ||
      ((Er = r),
      (r = is(cl, "onSelect")),
      0 < r.length &&
        ((t = new Aa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kn))));
}
function Si(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pn = {
    animationend: Si("Animation", "AnimationEnd"),
    animationiteration: Si("Animation", "AnimationIteration"),
    animationstart: Si("Animation", "AnimationStart"),
    transitionend: Si("Transition", "TransitionEnd"),
  },
  po = {},
  dh = {};
pt &&
  ((dh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function js(e) {
  if (po[e]) return po[e];
  if (!Pn[e]) return e;
  var t = Pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in dh) return (po[e] = t[n]);
  return e;
}
var hh = js("animationend"),
  ph = js("animationiteration"),
  mh = js("animationstart"),
  gh = js("transitionend"),
  yh = new Map(),
  oc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wt(e, t) {
  yh.set(e, t), vn(t, [e]);
}
for (var mo = 0; mo < oc.length; mo++) {
  var go = oc[mo],
    _y = go.toLowerCase(),
    $y = go[0].toUpperCase() + go.slice(1);
  Wt(_y, "on" + $y);
}
Wt(hh, "onAnimationEnd");
Wt(ph, "onAnimationIteration");
Wt(mh, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(gh, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ev = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function lc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _g(r, t, void 0, e), (e.currentTarget = null);
}
function vh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          lc(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          lc(i, l, u), (s = a);
        }
    }
  }
  if ($i) throw ((e = ol), ($i = !1), (ol = null), e);
}
function b(e, t) {
  var n = t[gl];
  n === void 0 && (n = t[gl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xh(t, e, 2, !1), n.add(r));
}
function yo(e, t, n) {
  var r = 0;
  t && (r |= 4), xh(n, e, r, t);
}
var Ti = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[Ti]) {
    (e[Ti] = !0),
      Pd.forEach(function (n) {
        n !== "selectionchange" && (ev.has(n) || yo(n, !1, e), yo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ti] || ((t[Ti] = !0), yo("selectionchange", !1, t));
  }
}
function xh(e, t, n, r) {
  switch (nh(t)) {
    case 1:
      var i = py;
      break;
    case 4:
      i = my;
      break;
    default:
      i = xa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !sl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function vo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = on(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  bd(function () {
    var u = s,
      c = ma(n),
      f = [];
    e: {
      var d = yh.get(e);
      if (d !== void 0) {
        var y = Aa,
          v = e;
        switch (e) {
          case "keypress":
            if (Ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Iy;
            break;
          case "focusin":
            (v = "focus"), (y = co);
            break;
          case "focusout":
            (v = "blur"), (y = co);
            break;
          case "beforeblur":
          case "afterblur":
            y = co;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = vy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Dy;
            break;
          case hh:
          case ph:
          case mh:
            y = Ay;
            break;
          case gh:
            y = Oy;
            break;
          case "scroll":
            y = gy;
            break;
          case "wheel":
            y = Fy;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Ty;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = qu;
        }
        var x = (t & 4) !== 0,
          A = !x && e === "scroll",
          p = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = Fr(h, p)), w != null && x.push(Wr(h, w, m)))),
            A)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((d = new y(d, v, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          d &&
            n !== rl &&
            (v = n.relatedTarget || n.fromElement) &&
            (on(v) || v[mt]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? on(v) : null),
              v !== null &&
                ((A = xn(v)), v !== A || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = Zu),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = qu),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (A = y == null ? d : En(y)),
            (m = v == null ? d : En(v)),
            (d = new x(w, h + "leave", y, n, c)),
            (d.target = A),
            (d.relatedTarget = m),
            (w = null),
            on(c) === u &&
              ((x = new x(p, h + "enter", v, n, c)),
              (x.target = m),
              (x.relatedTarget = A),
              (w = x)),
            (A = w),
            y && v)
          )
            t: {
              for (x = y, p = v, h = 0, m = x; m; m = An(m)) h++;
              for (m = 0, w = p; w; w = An(w)) m++;
              for (; 0 < h - m; ) (x = An(x)), h--;
              for (; 0 < m - h; ) (p = An(p)), m--;
              for (; h--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = An(x)), (p = An(p));
              }
              x = null;
            }
          else x = null;
          y !== null && ac(f, d, y, x, !1),
            v !== null && A !== null && ac(f, A, v, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? En(u) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === "select" || (y === "input" && d.type === "file"))
        )
          var S = Wy;
        else if (ec(d))
          if (ah) S = Jy;
          else {
            S = Xy;
            var P = Ky;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Yy);
        if (S && (S = S(e, u))) {
          lh(f, S, n, c);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            _o(d, "number", d.value);
      }
      switch (((P = u ? En(u) : window), e)) {
        case "focusin":
          (ec(P) || P.contentEditable === "true") &&
            ((kn = P), (cl = u), (Er = null));
          break;
        case "focusout":
          Er = cl = kn = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fl = !1), sc(f, n, c);
          break;
        case "selectionchange":
          if (qy) break;
        case "keydown":
        case "keyup":
          sc(f, n, c);
      }
      var E;
      if (Ta)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Cn
          ? sh(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (ih &&
          n.locale !== "ko" &&
          (Cn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Cn && (E = rh())
            : ((Pt = c),
              (wa = "value" in Pt ? Pt.value : Pt.textContent),
              (Cn = !0))),
        (P = is(u, k)),
        0 < P.length &&
          ((k = new Gu(k, e, null, n, c)),
          f.push({ event: k, listeners: P }),
          E ? (k.data = E) : ((E = oh(n)), E !== null && (k.data = E)))),
        (E = Vy ? Uy(e, n) : Qy(e, n)) &&
          ((u = is(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Gu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    vh(f, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function is(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Fr(e, n)),
      s != null && r.unshift(Wr(e, s, i)),
      (s = Fr(e, t)),
      s != null && r.push(Wr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ac(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Fr(n, s)), a != null && o.unshift(Wr(n, a, l)))
        : i || ((a = Fr(n, s)), a != null && o.push(Wr(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var tv = /\r\n?/g,
  nv = /\u0000|\uFFFD/g;
function uc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tv,
      `
`
    )
    .replace(nv, "");
}
function Ci(e, t, n) {
  if (((t = uc(t)), uc(e) !== t && n)) throw Error(C(425));
}
function ss() {}
var dl = null,
  hl = null;
function pl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ml = typeof setTimeout == "function" ? setTimeout : void 0,
  rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cc = typeof Promise == "function" ? Promise : void 0,
  iv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cc < "u"
      ? function (e) {
          return cc.resolve(null).then(e).catch(sv);
        }
      : ml;
function sv(e) {
  setTimeout(function () {
    throw e;
  });
}
function xo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ur(t);
}
function Dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + ir,
  Kr = "__reactProps$" + ir,
  mt = "__reactContainer$" + ir,
  gl = "__reactEvents$" + ir,
  ov = "__reactListeners$" + ir,
  lv = "__reactHandles$" + ir;
function on(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fc(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = fc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function si(e) {
  return (
    (e = e[et] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Os(e) {
  return e[Kr] || null;
}
var yl = [],
  Mn = -1;
function Kt(e) {
  return { current: e };
}
function H(e) {
  0 > Mn || ((e.current = yl[Mn]), (yl[Mn] = null), Mn--);
}
function U(e, t) {
  Mn++, (yl[Mn] = e.current), (e.current = t);
}
var Qt = {},
  ye = Kt(Qt),
  Ce = Kt(!1),
  hn = Qt;
function Yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function os() {
  H(Ce), H(ye);
}
function dc(e, t, n) {
  if (ye.current !== Qt) throw Error(C(168));
  U(ye, t), U(Ce, n);
}
function wh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Kg(e) || "Unknown", i));
  return J({}, n, r);
}
function ls(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
    (hn = ye.current),
    U(ye, e),
    U(Ce, Ce.current),
    !0
  );
}
function hc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = wh(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Ce),
      H(ye),
      U(ye, e))
    : H(Ce),
    U(Ce, n);
}
var lt = null,
  Bs = !1,
  wo = !1;
function Ah(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function av(e) {
  (Bs = !0), Ah(e);
}
function Xt() {
  if (!wo && lt !== null) {
    wo = !0;
    var e = 0,
      t = z;
    try {
      var n = lt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (Bs = !1);
    } catch (i) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Xd(ga, Xt), i);
    } finally {
      (z = t), (wo = !1);
    }
  }
  return null;
}
var Nn = [],
  In = 0,
  as = null,
  us = 0,
  Fe = [],
  ze = 0,
  pn = null,
  at = 1,
  ut = "";
function en(e, t) {
  (Nn[In++] = us), (Nn[In++] = as), (as = e), (us = t);
}
function Sh(e, t, n) {
  (Fe[ze++] = at), (Fe[ze++] = ut), (Fe[ze++] = pn), (pn = e);
  var r = at;
  e = ut;
  var i = 32 - Je(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Je(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (at = (1 << (32 - Je(t) + i)) | (n << i) | r),
      (ut = s + e);
  } else (at = (1 << s) | (n << i) | r), (ut = e);
}
function ka(e) {
  e.return !== null && (en(e, 1), Sh(e, 1, 0));
}
function Pa(e) {
  for (; e === as; )
    (as = Nn[--In]), (Nn[In] = null), (us = Nn[--In]), (Nn[In] = null);
  for (; e === pn; )
    (pn = Fe[--ze]),
      (Fe[ze] = null),
      (ut = Fe[--ze]),
      (Fe[ze] = null),
      (at = Fe[--ze]),
      (Fe[ze] = null);
}
var Ie = null,
  Ne = null,
  W = !1,
  Ye = null;
function Th(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Ne = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: at, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xl(e) {
  if (W) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!pc(e, t)) {
        if (vl(e)) throw Error(C(418));
        t = Dt(n.nextSibling);
        var r = Ie;
        t && pc(e, t)
          ? Th(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ie = e));
      }
    } else {
      if (vl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ie = e);
    }
  }
}
function mc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function ki(e) {
  if (e !== Ie) return !1;
  if (!W) return mc(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !pl(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (vl(e)) throw (Ch(), Error(C(418)));
    for (; t; ) Th(e, t), (t = Dt(t.nextSibling));
  }
  if ((mc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Ie ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ch() {
  for (var e = Ne; e; ) e = Dt(e.nextSibling);
}
function Jn() {
  (Ne = Ie = null), (W = !1);
}
function Ea(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var uv = xt.ReactCurrentBatchConfig;
function fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gc(e) {
  var t = e._init;
  return t(e._payload);
}
function kh(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ft(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = Eo(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, w) {
    var S = m.type;
    return S === Tn
      ? c(p, h, m.props.children, w, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === St &&
            gc(S) === h.type))
      ? ((w = i(h, m.props)), (w.ref = fr(p, h, m)), (w.return = p), w)
      : ((w = Yi(m.type, m.key, m.props, null, p.mode, w)),
        (w.ref = fr(p, h, m)),
        (w.return = p),
        w);
  }
  function u(p, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Mo(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, w, S) {
    return h === null || h.tag !== 7
      ? ((h = fn(m, p.mode, w, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Eo("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case mi:
          return (
            (m = Yi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = fr(p, null, h)),
            (m.return = p),
            m
          );
        case Sn:
          return (h = Mo(h, p.mode, m)), (h.return = p), h;
        case St:
          var w = h._init;
          return f(p, w(h._payload), m);
      }
      if (vr(h) || or(h))
        return (h = fn(h, p.mode, m, null)), (h.return = p), h;
      Pi(p, h);
    }
    return null;
  }
  function d(p, h, m, w) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : l(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case mi:
          return m.key === S ? a(p, h, m, w) : null;
        case Sn:
          return m.key === S ? u(p, h, m, w) : null;
        case St:
          return (S = m._init), d(p, h, S(m._payload), w);
      }
      if (vr(m) || or(m)) return S !== null ? null : c(p, h, m, w, null);
      Pi(p, m);
    }
    return null;
  }
  function y(p, h, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), l(h, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case mi:
          return (p = p.get(w.key === null ? m : w.key) || null), a(h, p, w, S);
        case Sn:
          return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, S);
        case St:
          var P = w._init;
          return y(p, h, m, P(w._payload), S);
      }
      if (vr(w) || or(w)) return (p = p.get(m) || null), c(h, p, w, S, null);
      Pi(h, w);
    }
    return null;
  }
  function v(p, h, m, w) {
    for (
      var S = null, P = null, E = h, k = (h = 0), O = null;
      E !== null && k < m.length;
      k++
    ) {
      E.index > k ? ((O = E), (E = null)) : (O = E.sibling);
      var R = d(p, E, m[k], w);
      if (R === null) {
        E === null && (E = O);
        break;
      }
      e && E && R.alternate === null && t(p, E),
        (h = s(R, h, k)),
        P === null ? (S = R) : (P.sibling = R),
        (P = R),
        (E = O);
    }
    if (k === m.length) return n(p, E), W && en(p, k), S;
    if (E === null) {
      for (; k < m.length; k++)
        (E = f(p, m[k], w)),
          E !== null &&
            ((h = s(E, h, k)), P === null ? (S = E) : (P.sibling = E), (P = E));
      return W && en(p, k), S;
    }
    for (E = r(p, E); k < m.length; k++)
      (O = y(E, p, k, m[k], w)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? k : O.key),
          (h = s(O, h, k)),
          P === null ? (S = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        E.forEach(function (ee) {
          return t(p, ee);
        }),
      W && en(p, k),
      S
    );
  }
  function x(p, h, m, w) {
    var S = or(m);
    if (typeof S != "function") throw Error(C(150));
    if (((m = S.call(m)), m == null)) throw Error(C(151));
    for (
      var P = (S = null), E = h, k = (h = 0), O = null, R = m.next();
      E !== null && !R.done;
      k++, R = m.next()
    ) {
      E.index > k ? ((O = E), (E = null)) : (O = E.sibling);
      var ee = d(p, E, R.value, w);
      if (ee === null) {
        E === null && (E = O);
        break;
      }
      e && E && ee.alternate === null && t(p, E),
        (h = s(ee, h, k)),
        P === null ? (S = ee) : (P.sibling = ee),
        (P = ee),
        (E = O);
    }
    if (R.done) return n(p, E), W && en(p, k), S;
    if (E === null) {
      for (; !R.done; k++, R = m.next())
        (R = f(p, R.value, w)),
          R !== null &&
            ((h = s(R, h, k)), P === null ? (S = R) : (P.sibling = R), (P = R));
      return W && en(p, k), S;
    }
    for (E = r(p, E); !R.done; k++, R = m.next())
      (R = y(E, p, k, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? k : R.key),
          (h = s(R, h, k)),
          P === null ? (S = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        E.forEach(function (qe) {
          return t(p, qe);
        }),
      W && en(p, k),
      S
    );
  }
  function A(p, h, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Tn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case mi:
          e: {
            for (var S = m.key, P = h; P !== null; ) {
              if (P.key === S) {
                if (((S = m.type), S === Tn)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (h = i(P, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === St &&
                    gc(S) === P.type)
                ) {
                  n(p, P.sibling),
                    (h = i(P, m.props)),
                    (h.ref = fr(p, P, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Tn
              ? ((h = fn(m.props.children, p.mode, w, m.key)),
                (h.return = p),
                (p = h))
              : ((w = Yi(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = fr(p, h, m)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case Sn:
          e: {
            for (P = m.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Mo(m, p.mode, w)), (h.return = p), (p = h);
          }
          return o(p);
        case St:
          return (P = m._init), A(p, h, P(m._payload), w);
      }
      if (vr(m)) return v(p, h, m, w);
      if (or(m)) return x(p, h, m, w);
      Pi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Eo(m, p.mode, w)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return A;
}
var Zn = kh(!0),
  Ph = kh(!1),
  cs = Kt(null),
  fs = null,
  Rn = null,
  Ma = null;
function Na() {
  Ma = Rn = fs = null;
}
function Ia(e) {
  var t = cs.current;
  H(cs), (e._currentValue = t);
}
function wl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Hn(e, t) {
  (fs = e),
    (Ma = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (Ma !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (fs === null) throw Error(C(308));
      (Rn = e), (fs.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var ln = null;
function Ra(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function Eh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ra(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tt = !1;
function La(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Mh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ra(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Qi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
  }
}
function yc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ds(e, t, n, r) {
  var i = e.updateQueue;
  Tt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        y = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            x = l;
          switch (((d = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (d = typeof v == "function" ? v.call(y, f, d) : v),
                d == null)
              )
                break e;
              f = J({}, f, d);
              break e;
            case 2:
              Tt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (y = {
          eventTime: y,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (a = f)) : (c = c.next = y),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (gn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function vc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var oi = {},
  nt = Kt(oi),
  Xr = Kt(oi),
  Yr = Kt(oi);
function an(e) {
  if (e === oi) throw Error(C(174));
  return e;
}
function Da(e, t) {
  switch ((U(Yr, t), U(Xr, e), U(nt, oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = el(t, e));
  }
  H(nt), U(nt, t);
}
function Gn() {
  H(nt), H(Xr), H(Yr);
}
function Nh(e) {
  an(Yr.current);
  var t = an(nt.current),
    n = el(t, e.type);
  t !== n && (U(Xr, e), U(nt, n));
}
function ja(e) {
  Xr.current === e && (H(nt), H(Xr));
}
var K = Kt(0);
function hs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ao = [];
function Oa() {
  for (var e = 0; e < Ao.length; e++)
    Ao[e]._workInProgressVersionPrimary = null;
  Ao.length = 0;
}
var bi = xt.ReactCurrentDispatcher,
  So = xt.ReactCurrentBatchConfig,
  mn = 0,
  Y = null,
  re = null,
  se = null,
  ps = !1,
  Mr = !1,
  Jr = 0,
  cv = 0;
function fe() {
  throw Error(C(321));
}
function Ba(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function Fa(e, t, n, r, i, s) {
  if (
    ((mn = s),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bi.current = e === null || e.memoizedState === null ? pv : mv),
    (e = n(r, i)),
    Mr)
  ) {
    s = 0;
    do {
      if (((Mr = !1), (Jr = 0), 25 <= s)) throw Error(C(301));
      (s += 1),
        (se = re = null),
        (t.updateQueue = null),
        (bi.current = gv),
        (e = n(r, i));
    } while (Mr);
  }
  if (
    ((bi.current = ms),
    (t = re !== null && re.next !== null),
    (mn = 0),
    (se = re = Y = null),
    (ps = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function za() {
  var e = Jr !== 0;
  return (Jr = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (Y.memoizedState = se = e) : (se = se.next = e), se;
}
function be() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? Y.memoizedState : se.next;
  if (t !== null) (se = t), (re = e);
  else {
    if (e === null) throw Error(C(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      se === null ? (Y.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function To(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((mn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (o = r)) : (a = a.next = f),
          (Y.lanes |= c),
          (gn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      Ge(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Y.lanes |= s), (gn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Co(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ge(s, t.memoizedState) || (Te = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Ih() {}
function Rh(e, t) {
  var n = Y,
    r = be(),
    i = t(),
    s = !Ge(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    Va(jh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Dh.bind(null, n, r, i, t), void 0, null),
      oe === null)
    )
      throw Error(C(349));
    mn & 30 || Lh(n, t, i);
  }
  return i;
}
function Lh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Oh(t) && Bh(e);
}
function jh(e, t, n) {
  return n(function () {
    Oh(t) && Bh(e);
  });
}
function Oh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function Bh(e) {
  var t = gt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function xc(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hv.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fh() {
  return be().memoizedState;
}
function Hi(e, t, n, r) {
  var i = $e();
  (Y.flags |= e),
    (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fs(e, t, n, r) {
  var i = be();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (re !== null) {
    var o = re.memoizedState;
    if (((s = o.destroy), r !== null && Ba(r, o.deps))) {
      i.memoizedState = Gr(t, n, s, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = Gr(1 | t, n, s, r));
}
function wc(e, t) {
  return Hi(8390656, 8, e, t);
}
function Va(e, t) {
  return Fs(2048, 8, e, t);
}
function zh(e, t) {
  return Fs(4, 2, e, t);
}
function Vh(e, t) {
  return Fs(4, 4, e, t);
}
function Uh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fs(4, 4, Uh.bind(null, t, e), n)
  );
}
function Ua() {}
function bh(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ba(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hh(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ba(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wh(e, t, n) {
  return mn & 21
    ? (Ge(n, t) || ((n = Zd()), (Y.lanes |= n), (gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function fv(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = So.transition;
  So.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (So.transition = r);
  }
}
function Kh() {
  return be().memoizedState;
}
function dv(e, t, n) {
  var r = Bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xh(e))
  )
    Yh(t, n);
  else if (((n = Eh(e, t, n, r)), n !== null)) {
    var i = xe();
    Ze(n, e, r, i), Jh(n, t, r);
  }
}
function hv(e, t, n) {
  var r = Bt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xh(e)) Yh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ge(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ra(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Eh(e, t, i, r)),
      n !== null && ((i = xe()), Ze(n, e, r, i), Jh(n, t, r));
  }
}
function Xh(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Yh(e, t) {
  Mr = ps = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
  }
}
var ms = {
    readContext: Qe,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  pv = {
    readContext: Qe,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: wc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, Uh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = dv.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xc,
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = xc(!1),
        t = e[0];
      return (e = fv.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = $e();
      if (W) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(C(349));
        mn & 30 || Lh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        wc(jh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Gr(9, Dh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = oe.identifierPrefix;
      if (W) {
        var n = ut,
          r = at;
        (n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mv = {
    readContext: Qe,
    useCallback: bh,
    useContext: Qe,
    useEffect: Va,
    useImperativeHandle: Qh,
    useInsertionEffect: zh,
    useLayoutEffect: Vh,
    useMemo: Hh,
    useReducer: To,
    useRef: Fh,
    useState: function () {
      return To(Zr);
    },
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      var t = be();
      return Wh(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = To(Zr)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ih,
    useSyncExternalStore: Rh,
    useId: Kh,
    unstable_isNewReconciler: !1,
  },
  gv = {
    readContext: Qe,
    useCallback: bh,
    useContext: Qe,
    useEffect: Va,
    useImperativeHandle: Qh,
    useInsertionEffect: zh,
    useLayoutEffect: Vh,
    useMemo: Hh,
    useReducer: Co,
    useRef: Fh,
    useState: function () {
      return Co(Zr);
    },
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      var t = be();
      return re === null ? (t.memoizedState = e) : Wh(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = Co(Zr)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Ih,
    useSyncExternalStore: Rh,
    useId: Kh,
    unstable_isNewReconciler: !1,
  };
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Al(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Bt(e),
      s = ft(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = jt(e, s, i)),
      t !== null && (Ze(t, e, i, r), Qi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Bt(e),
      s = ft(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = jt(e, s, i)),
      t !== null && (Ze(t, e, i, r), Qi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = Bt(e),
      i = ft(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = jt(e, i, r)),
      t !== null && (Ze(t, e, r, n), Qi(t, e, r));
  },
};
function Ac(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !br(n, r) || !br(i, s)
      : !0
  );
}
function Zh(e, t, n) {
  var r = !1,
    i = Qt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Qe(s))
      : ((i = ke(t) ? hn : ye.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Yn(e, i) : Qt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Sc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zs.enqueueReplaceState(t, t.state, null);
}
function Sl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), La(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Qe(s))
    : ((s = ke(t) ? hn : ye.current), (i.context = Yn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Al(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zs.enqueueReplaceState(i, i.state, null),
      ds(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ko(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yv = typeof WeakMap == "function" ? WeakMap : Map;
function Gh(e, t, n) {
  (n = ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ys || ((ys = !0), (Dl = r)), Tl(e, t);
    }),
    n
  );
}
function qh(e, t, n) {
  (n = ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Tl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Tl(e, t),
          typeof r != "function" &&
            (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Tc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Rv.bind(null, e, t, n)), t.then(e, e));
}
function Cc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ft(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vv = xt.ReactCurrentOwner,
  Te = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Ph(t, null, n, r) : Zn(t, e.child, n, r);
}
function Pc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Hn(t, i),
    (r = Fa(e, t, n, r, s, i)),
    (n = za()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && n && ka(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function Ec(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ja(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), _h(e, t, s, r, i))
      : ((e = Yi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : br), n(o, r) && e.ref === t.ref)
    )
      return yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _h(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (br(s, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), yt(e, t, i);
  }
  return Cl(e, t, n, r, i);
}
function $h(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Dn, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(Dn, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        U(Dn, Me),
        (Me |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(Dn, Me),
      (Me |= r);
  return ve(e, t, i, n), t.child;
}
function ep(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cl(e, t, n, r, i) {
  var s = ke(n) ? hn : ye.current;
  return (
    (s = Yn(t, s)),
    Hn(t, i),
    (n = Fa(e, t, n, r, s, i)),
    (r = za()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && r && ka(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function Mc(e, t, n, r, i) {
  if (ke(n)) {
    var s = !0;
    ls(t);
  } else s = !1;
  if ((Hn(t, i), t.stateNode === null))
    Wi(e, t), Zh(t, n, r), Sl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Qe(u))
      : ((u = ke(n) ? hn : ye.current), (u = Yn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Sc(t, o, r, u)),
      (Tt = !1);
    var d = t.memoizedState;
    (o.state = d),
      ds(t, r, o, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ce.current || Tt
        ? (typeof c == "function" && (Al(t, n, c, r), (a = t.memoizedState)),
          (l = Tt || Ac(t, n, l, r, d, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Mh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ke(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Qe(a))
        : ((a = ke(n) ? hn : ye.current), (a = Yn(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Sc(t, o, r, a)),
      (Tt = !1),
      (d = t.memoizedState),
      (o.state = d),
      ds(t, r, o, i);
    var v = t.memoizedState;
    l !== f || d !== v || Ce.current || Tt
      ? (typeof y == "function" && (Al(t, n, y, r), (v = t.memoizedState)),
        (u = Tt || Ac(t, n, u, r, d, v, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return kl(e, t, n, r, s, i);
}
function kl(e, t, n, r, i, s) {
  ep(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && hc(t, n, !1), yt(e, t, s);
  (r = t.stateNode), (vv.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Zn(t, e.child, null, s)), (t.child = Zn(t, null, l, s)))
      : ve(e, t, l, s),
    (t.memoizedState = r.state),
    i && hc(t, n, !0),
    t.child
  );
}
function tp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dc(e, t.context, !1),
    Da(e, t.containerInfo);
}
function Nc(e, t, n, r, i) {
  return Jn(), Ea(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Pl = { dehydrated: null, treeContext: null, retryLane: 0 };
function El(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function np(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(K, i & 1),
    e === null)
  )
    return (
      xl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Qs(o, r, 0, null)),
              (e = fn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = El(n)),
              (t.memoizedState = Pl),
              e)
            : Qa(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return xv(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ft(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Ft(l, s)) : ((s = fn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? El(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ft(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qa(e, t) {
  return (
    (t = Qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ei(e, t, n, r) {
  return (
    r !== null && Ea(r),
    Zn(t, e.child, null, n),
    (e = Qa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ko(Error(C(422)))), Ei(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Qs({ mode: "visible", children: r.children }, i, 0, null)),
        (s = fn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, o),
        (t.child.memoizedState = El(o)),
        (t.memoizedState = Pl),
        s);
  if (!(t.mode & 1)) return Ei(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(C(419))), (r = ko(s, r, void 0)), Ei(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Te || l)) {
    if (((r = oe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), gt(e, i), Ze(r, e, i, -1));
    }
    return Ya(), (r = ko(Error(C(421)))), Ei(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ne = Dt(i.nextSibling)),
      (Ie = t),
      (W = !0),
      (Ye = null),
      e !== null &&
        ((Fe[ze++] = at),
        (Fe[ze++] = ut),
        (Fe[ze++] = pn),
        (at = e.id),
        (ut = e.overflow),
        (pn = t)),
      (t = Qa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ic(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wl(e.return, t, n);
}
function Po(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function rp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ve(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ic(e, n, t);
        else if (e.tag === 19) Ic(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && hs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Po(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && hs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Po(t, !0, n, null, s);
        break;
      case "together":
        Po(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wv(e, t, n) {
  switch (t.tag) {
    case 3:
      tp(t), Jn();
      break;
    case 5:
      Nh(t);
      break;
    case 1:
      ke(t.type) && ls(t);
      break;
    case 4:
      Da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(cs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? np(e, t, n)
          : (U(K, K.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $h(e, t, n);
  }
  return yt(e, t, n);
}
var ip, Ml, sp, op;
ip = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ml = function () {};
sp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), an(nt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Go(e, i)), (r = Go(e, r)), (s = []);
        break;
      case "select":
        (i = J({}, i, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = $o(e, i)), (r = $o(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ss);
    }
    tl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Or.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Or.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && b("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
op = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Av(e, t, n) {
  var r = t.pendingProps;
  switch ((Pa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return ke(t.type) && os(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        H(Ce),
        H(ye),
        Oa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ki(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Bl(Ye), (Ye = null)))),
        Ml(e, t),
        de(t),
        null
      );
    case 5:
      ja(t);
      var i = an(Yr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return de(t), null;
        }
        if (((e = an(nt.current)), ki(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[et] = t), (r[Kr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              b("cancel", r), b("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              b("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < wr.length; i++) b(wr[i], r);
              break;
            case "source":
              b("error", r);
              break;
            case "img":
            case "image":
            case "link":
              b("error", r), b("load", r);
              break;
            case "details":
              b("toggle", r);
              break;
            case "input":
              Vu(r, s), b("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                b("invalid", r);
              break;
            case "textarea":
              Qu(r, s), b("invalid", r);
          }
          tl(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Or.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  b("scroll", r);
            }
          switch (n) {
            case "input":
              gi(r), Uu(r, s, !0);
              break;
            case "textarea":
              gi(r), bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ss);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[et] = t),
            (e[Kr] = r),
            ip(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = nl(n, r)), n)) {
              case "dialog":
                b("cancel", e), b("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                b("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wr.length; i++) b(wr[i], e);
                i = r;
                break;
              case "source":
                b("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                b("error", e), b("load", e), (i = r);
                break;
              case "details":
                b("toggle", e), (i = r);
                break;
              case "input":
                Vu(e, r), (i = Go(e, r)), b("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = J({}, r, { value: void 0 })),
                  b("invalid", e);
                break;
              case "textarea":
                Qu(e, r), (i = $o(e, r)), b("invalid", e);
                break;
              default:
                i = r;
            }
            tl(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Fd(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Od(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Br(e, a)
                    : typeof a == "number" && Br(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Or.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && b("scroll", e)
                      : a != null && fa(e, s, a, o));
              }
            switch (n) {
              case "input":
                gi(e), Uu(e, r, !1);
                break;
              case "textarea":
                gi(e), bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Vn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ss);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) op(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = an(Yr.current)), an(nt.current), ki(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (s = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (H(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ne !== null && t.mode & 1 && !(t.flags & 128))
          Ch(), Jn(), (t.flags |= 98560), (s = !1);
        else if (((s = ki(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[et] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (s = !1);
        } else Ye !== null && (Bl(Ye), (Ye = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ie === 0 && (ie = 3) : Ya())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Gn(), Ml(e, t), e === null && Hr(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return Ia(t.type._context), de(t), null;
    case 17:
      return ke(t.type) && os(), de(t), null;
    case 19:
      if ((H(K), (s = t.memoizedState), s === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) dr(s, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = hs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    dr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            $() > _n &&
            ((t.flags |= 128), (r = !0), dr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !W)
            )
              return de(t), null;
          } else
            2 * $() - s.renderingStartTime > _n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), dr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = $()),
          (t.sibling = null),
          (n = K.current),
          U(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Xa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Sv(e, t) {
  switch ((Pa(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && os(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        H(Ce),
        H(ye),
        Oa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ja(t), null;
    case 13:
      if ((H(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(K), null;
    case 4:
      return Gn(), null;
    case 10:
      return Ia(t.type._context), null;
    case 22:
    case 23:
      return Xa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mi = !1,
  pe = !1,
  Tv = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Nl(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Rc = !1;
function Cv(e, t) {
  if (((dl = ns), (e = fh()), Ca(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (d = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = o),
                d === s && ++c === r && (a = o),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hl = { focusedElem: e, selectionRange: n }, ns = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    A = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ke(t.type, x),
                      A
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (w) {
          q(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (v = Rc), (Rc = !1), v;
}
function Nr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Nl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Vs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Il(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[Kr], delete t[gl], delete t[ov], delete t[lv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ap(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ap(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ss));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
function Ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), (e = e.sibling);
}
var le = null,
  Xe = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) up(e, t, n), (n = n.sibling);
}
function up(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(Rs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || Ln(n, t);
    case 6:
      var r = le,
        i = Xe;
      (le = null),
        wt(e, t, n),
        (le = r),
        (Xe = i),
        le !== null &&
          (Xe
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Xe
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? xo(e.parentNode, n)
              : e.nodeType === 1 && xo(e, n),
            Ur(e))
          : xo(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Xe),
        (le = n.stateNode.containerInfo),
        (Xe = !0),
        wt(e, t, n),
        (le = r),
        (Xe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Nl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (Ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          q(n, t, l);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), wt(e, t, n), (pe = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function Dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tv()),
      t.forEach(function (r) {
        var i = Dv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (le = l.stateNode), (Xe = !1);
              break e;
            case 3:
              (le = l.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (le = l.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          l = l.return;
        }
        if (le === null) throw Error(C(160));
        up(s, o, i), (le = null), (Xe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cp(t, e), (t = t.sibling);
}
function cp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), _e(e), r & 4)) {
        try {
          Nr(3, e, e.return), Vs(3, e);
        } catch (x) {
          q(e, e.return, x);
        }
        try {
          Nr(5, e, e.return);
        } catch (x) {
          q(e, e.return, x);
        }
      }
      break;
    case 1:
      He(t, e), _e(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (
        (He(t, e),
        _e(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Br(i, "");
        } catch (x) {
          q(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Ld(i, s),
              nl(l, o);
            var u = nl(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                f = a[o + 1];
              c === "style"
                ? Fd(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Od(i, f)
                : c === "children"
                ? Br(i, f)
                : fa(i, c, f, u);
            }
            switch (l) {
              case "input":
                qo(i, s);
                break;
              case "textarea":
                Dd(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Vn(i, !!s.multiple, y, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Vn(i, !!s.multiple, s.defaultValue, !0)
                      : Vn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Kr] = s;
          } catch (x) {
            q(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((He(t, e), _e(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), _e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ur(t.containerInfo);
        } catch (x) {
          q(e, e.return, x);
        }
      break;
    case 4:
      He(t, e), _e(e);
      break;
    case 13:
      He(t, e),
        _e(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Wa = $())),
        r & 4 && Dc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), He(t, e), (pe = u)) : He(t, e),
        _e(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((d = N), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nr(4, d, d.return);
                  break;
                case 1:
                  Ln(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      q(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Ln(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Oc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (N = y)) : Oc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Bd("display", o)));
              } catch (x) {
                q(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                q(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      He(t, e), _e(e), r & 4 && Dc(e);
      break;
    case 21:
      break;
    default:
      He(t, e), _e(e);
  }
}
function _e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ap(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Br(i, ""), (r.flags &= -33));
          var s = Lc(e);
          Ll(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Lc(e);
          Rl(e, l, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kv(e, t, n) {
  (N = e), fp(e);
}
function fp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Mi;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Mi;
        var u = pe;
        if (((Mi = o), (pe = a) && !u))
          for (N = i; N !== null; )
            (o = N),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Bc(i)
                : a !== null
                ? ((a.return = o), (N = a))
                : Bc(i);
        for (; s !== null; ) (N = s), fp(s), (s = s.sibling);
        (N = i), (Mi = l), (pe = u);
      }
      jc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (N = s)) : jc(e);
  }
}
function jc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Vs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && vc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vc(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ur(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        pe || (t.flags & 512 && Il(t));
      } catch (d) {
        q(t, t.return, d);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Oc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Bc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vs(4, t);
          } catch (a) {
            q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              q(t, i, a);
            }
          }
          var s = t.return;
          try {
            Il(t);
          } catch (a) {
            q(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Il(t);
          } catch (a) {
            q(t, o, a);
          }
      }
    } catch (a) {
      q(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (N = l);
      break;
    }
    N = t.return;
  }
}
var Pv = Math.ceil,
  gs = xt.ReactCurrentDispatcher,
  ba = xt.ReactCurrentOwner,
  Ue = xt.ReactCurrentBatchConfig,
  F = 0,
  oe = null,
  te = null,
  ue = 0,
  Me = 0,
  Dn = Kt(0),
  ie = 0,
  qr = null,
  gn = 0,
  Us = 0,
  Ha = 0,
  Ir = null,
  Se = null,
  Wa = 0,
  _n = 1 / 0,
  ot = null,
  ys = !1,
  Dl = null,
  Ot = null,
  Ni = !1,
  Et = null,
  vs = 0,
  Rr = 0,
  jl = null,
  Ki = -1,
  Xi = 0;
function xe() {
  return F & 6 ? $() : Ki !== -1 ? Ki : (Ki = $());
}
function Bt(e) {
  return e.mode & 1
    ? F & 2 && ue !== 0
      ? ue & -ue
      : uv.transition !== null
      ? (Xi === 0 && (Xi = Zd()), Xi)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nh(e.type))),
        e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (jl = null), Error(C(185)));
  ri(e, n, r),
    (!(F & 2) || e !== oe) &&
      (e === oe && (!(F & 2) && (Us |= n), ie === 4 && kt(e, ue)),
      Pe(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((_n = $() + 500), Bs && Xt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  uy(e, t);
  var r = ts(e, e === oe ? ue : 0);
  if (r === 0)
    n !== null && Ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ku(n), t === 1))
      e.tag === 0 ? av(Fc.bind(null, e)) : Ah(Fc.bind(null, e)),
        iv(function () {
          !(F & 6) && Xt();
        }),
        (n = null);
    else {
      switch (Gd(r)) {
        case 1:
          n = ga;
          break;
        case 4:
          n = Yd;
          break;
        case 16:
          n = es;
          break;
        case 536870912:
          n = Jd;
          break;
        default:
          n = es;
      }
      n = xp(n, dp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dp(e, t) {
  if (((Ki = -1), (Xi = 0), F & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = ts(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xs(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = pp();
    (oe !== e || ue !== t) && ((ot = null), (_n = $() + 500), cn(e, t));
    do
      try {
        Nv();
        break;
      } catch (l) {
        hp(e, l);
      }
    while (!0);
    Na(),
      (gs.current = s),
      (F = i),
      te !== null ? (t = 0) : ((oe = null), (ue = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ll(e)), i !== 0 && ((r = i), (t = Ol(e, i)))), t === 1)
    )
      throw ((n = qr), cn(e, 0), kt(e, r), Pe(e, $()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ev(i) &&
          ((t = xs(e, r)),
          t === 2 && ((s = ll(e)), s !== 0 && ((r = s), (t = Ol(e, s)))),
          t === 1))
      )
        throw ((n = qr), cn(e, 0), kt(e, r), Pe(e, $()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          tn(e, Se, ot);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = Wa + 500 - $()), 10 < t))
          ) {
            if (ts(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ml(tn.bind(null, e, Se, ot), t);
            break;
          }
          tn(e, Se, ot);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Je(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = $() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Pv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ml(tn.bind(null, e, Se, ot), r);
            break;
          }
          tn(e, Se, ot);
          break;
        case 5:
          tn(e, Se, ot);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Pe(e, $()), e.callbackNode === n ? dp.bind(null, e) : null;
}
function Ol(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = xs(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && Bl(t)),
    e
  );
}
function Bl(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function Ev(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ge(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function kt(e, t) {
  for (
    t &= ~Ha,
      t &= ~Us,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fc(e) {
  if (F & 6) throw Error(C(327));
  Wn();
  var t = ts(e, 0);
  if (!(t & 1)) return Pe(e, $()), null;
  var n = xs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ll(e);
    r !== 0 && ((t = r), (n = Ol(e, r)));
  }
  if (n === 1) throw ((n = qr), cn(e, 0), kt(e, t), Pe(e, $()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tn(e, Se, ot),
    Pe(e, $()),
    null
  );
}
function Ka(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((_n = $() + 500), Bs && Xt());
  }
}
function yn(e) {
  Et !== null && Et.tag === 0 && !(F & 6) && Wn();
  var t = F;
  F |= 1;
  var n = Ue.transition,
    r = z;
  try {
    if (((Ue.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Ue.transition = n), (F = t), !(F & 6) && Xt();
  }
}
function Xa() {
  (Me = Dn.current), H(Dn);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rv(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Pa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && os();
          break;
        case 3:
          Gn(), H(Ce), H(ye), Oa();
          break;
        case 5:
          ja(r);
          break;
        case 4:
          Gn();
          break;
        case 13:
          H(K);
          break;
        case 19:
          H(K);
          break;
        case 10:
          Ia(r.type._context);
          break;
        case 22:
        case 23:
          Xa();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (te = e = Ft(e.current, null)),
    (ue = Me = t),
    (ie = 0),
    (qr = null),
    (Ha = Us = gn = 0),
    (Se = Ir = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function hp(e, t) {
  do {
    var n = te;
    try {
      if ((Na(), (bi.current = ms), ps)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ps = !1;
      }
      if (
        ((mn = 0),
        (se = re = Y = null),
        (Mr = !1),
        (Jr = 0),
        (ba.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (qr = t), (te = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = Cc(o);
          if (y !== null) {
            (y.flags &= -257),
              kc(y, o, l, s, t),
              y.mode & 1 && Tc(s, u, t),
              (t = y),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Tc(s, u, t), Ya();
              break e;
            }
            a = Error(C(426));
          }
        } else if (W && l.mode & 1) {
          var A = Cc(o);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              kc(A, o, l, s, t),
              Ea(qn(a, l));
            break e;
          }
        }
        (s = a = qn(a, l)),
          ie !== 4 && (ie = 2),
          Ir === null ? (Ir = [s]) : Ir.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Gh(s, a, t);
              yc(s, p);
              break e;
            case 1:
              l = a;
              var h = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ot === null || !Ot.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = qh(s, l, t);
                yc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      gp(n);
    } catch (S) {
      (t = S), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pp() {
  var e = gs.current;
  return (gs.current = ms), e === null ? ms : e;
}
function Ya() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    oe === null || (!(gn & 268435455) && !(Us & 268435455)) || kt(oe, ue);
}
function xs(e, t) {
  var n = F;
  F |= 2;
  var r = pp();
  (oe !== e || ue !== t) && ((ot = null), cn(e, t));
  do
    try {
      Mv();
      break;
    } catch (i) {
      hp(e, i);
    }
  while (!0);
  if ((Na(), (F = n), (gs.current = r), te !== null)) throw Error(C(261));
  return (oe = null), (ue = 0), ie;
}
function Mv() {
  for (; te !== null; ) mp(te);
}
function Nv() {
  for (; te !== null && !ey(); ) mp(te);
}
function mp(e) {
  var t = vp(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? gp(e) : (te = t),
    (ba.current = null);
}
function gp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sv(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (te = null);
        return;
      }
    } else if (((n = Av(n, t, Me)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function tn(e, t, n) {
  var r = z,
    i = Ue.transition;
  try {
    (Ue.transition = null), (z = 1), Iv(e, t, n, r);
  } finally {
    (Ue.transition = i), (z = r);
  }
  return null;
}
function Iv(e, t, n, r) {
  do Wn();
  while (Et !== null);
  if (F & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (cy(e, s),
    e === oe && ((te = oe = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ni ||
      ((Ni = !0),
      xp(es, function () {
        return Wn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ue.transition), (Ue.transition = null);
    var o = z;
    z = 1;
    var l = F;
    (F |= 4),
      (ba.current = null),
      Cv(e, n),
      cp(n, e),
      Gy(hl),
      (ns = !!dl),
      (hl = dl = null),
      (e.current = n),
      kv(n),
      ty(),
      (F = l),
      (z = o),
      (Ue.transition = s);
  } else e.current = n;
  if (
    (Ni && ((Ni = !1), (Et = e), (vs = i)),
    (s = e.pendingLanes),
    s === 0 && (Ot = null),
    iy(n.stateNode),
    Pe(e, $()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ys) throw ((ys = !1), (e = Dl), (Dl = null), e);
  return (
    vs & 1 && e.tag !== 0 && Wn(),
    (s = e.pendingLanes),
    s & 1 ? (e === jl ? Rr++ : ((Rr = 0), (jl = e))) : (Rr = 0),
    Xt(),
    null
  );
}
function Wn() {
  if (Et !== null) {
    var e = Gd(vs),
      t = Ue.transition,
      n = z;
    try {
      if (((Ue.transition = null), (z = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (vs = 0), F & 6)) throw Error(C(331));
        var i = F;
        for (F |= 4, N = e.current; N !== null; ) {
          var s = N,
            o = s.child;
          if (N.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (N = f);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var d = c.sibling,
                        y = c.return;
                      if ((lp(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = y), (N = d);
                        break;
                      }
                      N = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var A = x.sibling;
                    (x.sibling = null), (x = A);
                  } while (x !== null);
                }
              }
              N = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (N = o);
          else
            e: for (; N !== null; ) {
              if (((s = N), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nr(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (N = p);
                break e;
              }
              N = s.return;
            }
        }
        var h = e.current;
        for (N = h; N !== null; ) {
          o = N;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (N = m);
          else
            e: for (o = h; N !== null; ) {
              if (((l = N), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vs(9, l);
                  }
                } catch (S) {
                  q(l, l.return, S);
                }
              if (l === o) {
                N = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (N = w);
                break e;
              }
              N = l.return;
            }
        }
        if (
          ((F = i), Xt(), tt && typeof tt.onPostCommitFiberRoot == "function")
        )
          try {
            tt.onPostCommitFiberRoot(Rs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (Ue.transition = t);
    }
  }
  return !1;
}
function zc(e, t, n) {
  (t = qn(n, t)),
    (t = Gh(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = xe()),
    e !== null && (ri(e, 1, t), Pe(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) zc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ot === null || !Ot.has(r)))
        ) {
          (e = qn(n, e)),
            (e = qh(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = xe()),
            t !== null && (ri(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ue & n) === n &&
      (ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > $() - Wa)
        ? cn(e, 0)
        : (Ha |= n)),
    Pe(e, t);
}
function yp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xi), (xi <<= 1), !(xi & 130023424) && (xi = 4194304))
      : (t = 1));
  var n = xe();
  (e = gt(e, t)), e !== null && (ri(e, t, n), Pe(e, n));
}
function Lv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yp(e, n);
}
function Dv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), yp(e, n);
}
var vp;
vp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), wv(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), W && t.flags & 1048576 && Sh(t, us, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wi(e, t), (e = t.pendingProps);
      var i = Yn(t, ye.current);
      Hn(t, n), (i = Fa(null, t, r, e, i, n));
      var s = za();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((s = !0), ls(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            La(t),
            (i.updater = zs),
            (t.stateNode = i),
            (i._reactInternals = t),
            Sl(t, r, e, n),
            (t = kl(null, t, r, !0, s, n)))
          : ((t.tag = 0), W && s && ka(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ov(r)),
          (e = Ke(r, e)),
          i)
        ) {
          case 0:
            t = Cl(null, t, r, e, n);
            break e;
          case 1:
            t = Mc(null, t, r, e, n);
            break e;
          case 11:
            t = Pc(null, t, r, e, n);
            break e;
          case 14:
            t = Ec(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Cl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Mc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((tp(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Mh(e, t),
          ds(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = qn(Error(C(423)), t)), (t = Nc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = qn(Error(C(424)), t)), (t = Nc(e, t, r, n, i));
            break e;
          } else
            for (
              Ne = Dt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                W = !0,
                Ye = null,
                n = Ph(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === i)) {
            t = yt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nh(t),
        e === null && xl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        pl(r, i) ? (o = null) : s !== null && pl(r, s) && (t.flags |= 32),
        ep(e, t),
        ve(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && xl(t), null;
    case 13:
      return np(e, t, n);
    case 4:
      return (
        Da(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Pc(e, t, r, i, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          U(cs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ge(s.value, o)) {
            if (s.children === i.children && !Ce.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = ft(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      wl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  wl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Hn(t, n),
        (i = Qe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ke(r, t.pendingProps)),
        (i = Ke(r.type, i)),
        Ec(e, t, r, i, n)
      );
    case 15:
      return _h(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Wi(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), ls(t)) : (e = !1),
        Hn(t, n),
        Zh(t, r, i),
        Sl(t, r, i, n),
        kl(null, t, r, !0, e, n)
      );
    case 19:
      return rp(e, t, n);
    case 22:
      return $h(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function xp(e, t) {
  return Xd(e, t);
}
function jv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new jv(e, t, n, r);
}
function Ja(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ov(e) {
  if (typeof e == "function") return Ja(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ha)) return 11;
    if (e === pa) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ja(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Tn:
        return fn(n.children, i, s, t);
      case da:
        (o = 8), (i |= 8);
        break;
      case Xo:
        return (
          (e = Ve(12, n, t, i | 2)), (e.elementType = Xo), (e.lanes = s), e
        );
      case Yo:
        return (e = Ve(13, n, t, i)), (e.elementType = Yo), (e.lanes = s), e;
      case Jo:
        return (e = Ve(19, n, t, i)), (e.elementType = Jo), (e.lanes = s), e;
      case Nd:
        return Qs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ed:
              o = 10;
              break e;
            case Md:
              o = 9;
              break e;
            case ha:
              o = 11;
              break e;
            case pa:
              o = 14;
              break e;
            case St:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function fn(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Qs(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = Nd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Eo(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function Mo(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = lo(0)),
    (this.expirationTimes = lo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Za(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new Bv(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ve(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    La(s),
    e
  );
}
function Fv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wp(e) {
  if (!e) return Qt;
  e = e._reactInternals;
  e: {
    if (xn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return wh(e, n, t);
  }
  return t;
}
function Ap(e, t, n, r, i, s, o, l, a) {
  return (
    (e = Za(n, r, !0, e, i, s, o, l, a)),
    (e.context = wp(null)),
    (n = e.current),
    (r = xe()),
    (i = Bt(n)),
    (s = ft(r, i)),
    (s.callback = t ?? null),
    jt(n, s, i),
    (e.current.lanes = i),
    ri(e, i, r),
    Pe(e, r),
    e
  );
}
function bs(e, t, n, r) {
  var i = t.current,
    s = xe(),
    o = Bt(i);
  return (
    (n = wp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ft(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(i, t, o)),
    e !== null && (Ze(e, i, o, s), Qi(e, i, o)),
    o
  );
}
function ws(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ga(e, t) {
  Vc(e, t), (e = e.alternate) && Vc(e, t);
}
function zv() {
  return null;
}
var Sp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qa(e) {
  this._internalRoot = e;
}
Hs.prototype.render = qa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  bs(e, t, null, null);
};
Hs.prototype.unmount = qa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function () {
      bs(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function Hs(e) {
  this._internalRoot = e;
}
Hs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $d();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
    Ct.splice(n, 0, e), n === 0 && th(e);
  }
};
function _a(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ws(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uc() {}
function Vv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ws(o);
        s.call(u);
      };
    }
    var o = Ap(t, r, e, 0, null, !1, !1, "", Uc);
    return (
      (e._reactRootContainer = o),
      (e[mt] = o.current),
      Hr(e.nodeType === 8 ? e.parentNode : e),
      yn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ws(a);
      l.call(u);
    };
  }
  var a = Za(e, 0, !1, null, null, !1, !1, "", Uc);
  return (
    (e._reactRootContainer = a),
    (e[mt] = a.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      bs(t, a, n, r);
    }),
    a
  );
}
function Ks(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ws(o);
        l.call(a);
      };
    }
    bs(t, o, e, i);
  } else o = Vv(n, t, e, i, r);
  return ws(o);
}
qd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xr(t.pendingLanes);
        n !== 0 &&
          (ya(t, n | 1), Pe(t, $()), !(F & 6) && ((_n = $() + 500), Xt()));
      }
      break;
    case 13:
      yn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = xe();
          Ze(r, e, 1, i);
        }
      }),
        Ga(e, 1);
  }
};
va = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = xe();
      Ze(t, e, 134217728, n);
    }
    Ga(e, 134217728);
  }
};
_d = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = gt(e, t);
    if (n !== null) {
      var r = xe();
      Ze(n, e, t, r);
    }
    Ga(e, t);
  }
};
$d = function () {
  return z;
};
eh = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
il = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Os(r);
            if (!i) throw Error(C(90));
            Rd(r), qo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Dd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vn(e, !!n.multiple, t, !1);
  }
};
Ud = Ka;
Qd = yn;
var Uv = { usingClientEntryPoint: !1, Events: [si, En, Os, zd, Vd, Ka] },
  hr = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qv = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || zv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ii.isDisabled && Ii.supportsFiber)
    try {
      (Rs = Ii.inject(Qv)), (tt = Ii);
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uv;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_a(t)) throw Error(C(200));
  return Fv(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!_a(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Sp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Za(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    new qa(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Wd(t)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
  return yn(e);
};
De.hydrate = function (e, t, n) {
  if (!Ws(t)) throw Error(C(200));
  return Ks(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!_a(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Sp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Ap(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[mt] = t.current),
    Hr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Hs(t);
};
De.render = function (e, t, n) {
  if (!Ws(t)) throw Error(C(200));
  return Ks(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!Ws(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (yn(function () {
        Ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Ka;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ws(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ks(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function Tp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tp);
    } catch (e) {
      console.error(e);
    }
}
Tp(), (Td.exports = De);
var bv = Td.exports,
  Qc = bv;
(Wo.createRoot = Qc.createRoot), (Wo.hydrateRoot = Qc.hydrateRoot);
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function As() {
  return (
    (As = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    As.apply(this, arguments)
  );
}
var Mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mt || (Mt = {}));
const bc = "popstate";
function Hv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return Fl(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : kp(i);
  }
  return Kv(t, n, null, e);
}
function Ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Cp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Wv() {
  return Math.random().toString(36).substr(2, 8);
}
function Hc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Fl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    As(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Xs(t) : t,
      { state: n, key: (t && t.key) || r || Wv() }
    )
  );
}
function kp(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Xs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Kv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = Mt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(As({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    l = Mt.Pop;
    let A = c(),
      p = A == null ? null : A - u;
    (u = A), a && a({ action: l, location: x.location, delta: p });
  }
  function d(A, p) {
    l = Mt.Push;
    let h = Fl(x.location, A, p);
    u = c() + 1;
    let m = Hc(h, u),
      w = x.createHref(h);
    try {
      o.pushState(m, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(w);
    }
    s && a && a({ action: l, location: x.location, delta: 1 });
  }
  function y(A, p) {
    l = Mt.Replace;
    let h = Fl(x.location, A, p);
    u = c();
    let m = Hc(h, u),
      w = x.createHref(h);
    o.replaceState(m, "", w),
      s && a && a({ action: l, location: x.location, delta: 0 });
  }
  function v(A) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof A == "string" ? A : kp(A);
    return (
      (h = h.replace(/ $/, "%20")),
      Ee(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(A) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(bc, f),
        (a = A),
        () => {
          i.removeEventListener(bc, f), (a = null);
        }
      );
    },
    createHref(A) {
      return t(i, A);
    },
    createURL: v,
    encodeLocation(A) {
      let p = v(A);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: y,
    go(A) {
      return o.go(A);
    },
  };
  return x;
}
var Wc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wc || (Wc = {}));
function Xv(e, t, n) {
  return n === void 0 && (n = "/"), Yv(e, t, n, !1);
}
function Yv(e, t, n, r) {
  let i = typeof t == "string" ? Xs(t) : t,
    s = Mp(i.pathname || "/", n);
  if (s == null) return null;
  let o = Pp(e);
  Jv(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) {
    let u = s0(s);
    l = r0(o[a], u, r);
  }
  return l;
}
function Pp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (Ee(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Kn([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (Ee(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Pp(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: t0(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of Ep(s.path)) i(s, o, a);
    }),
    t
  );
}
function Ep(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Ep(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Jv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : n0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Zv = /^:[\w-]+$/,
  Gv = 3,
  qv = 2,
  _v = 1,
  $v = 10,
  e0 = -2,
  Kc = (e) => e === "*";
function t0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Kc) && (r += e0),
    t && (r += qv),
    n
      .filter((i) => !Kc(i))
      .reduce((i, s) => i + (Zv.test(s) ? Gv : s === "" ? _v : $v), r)
  );
}
function n0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function r0(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      f = Xc(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      d = a.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Xc(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: Kn([s, f.pathname]),
        pathnameBase: o0(Kn([s, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (s = Kn([s, f.pathnameBase]));
  }
  return o;
}
function Xc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = i0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: y } = c;
      if (d === "*") {
        let x = l[f] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[f];
      return (
        y && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function i0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Cp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function s0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Cp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Mp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Kn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  o0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function l0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Np = ["post", "put", "patch", "delete"];
new Set(Np);
const a0 = ["get", ...Np];
new Set(a0);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ss() {
  return (
    (Ss = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ss.apply(this, arguments)
  );
}
const u0 = T.createContext(null),
  c0 = T.createContext(null),
  Ip = T.createContext(null),
  Ys = T.createContext(null),
  Js = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rp = T.createContext(null);
function $a() {
  return T.useContext(Ys) != null;
}
function f0() {
  return $a() || Ee(!1), T.useContext(Ys).location;
}
function d0(e, t) {
  return h0(e, t);
}
function h0(e, t, n, r) {
  $a() || Ee(!1);
  let { navigator: i } = T.useContext(Ip),
    { matches: s } = T.useContext(Js),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = f0(),
    c;
  if (t) {
    var f;
    let A = typeof t == "string" ? Xs(t) : t;
    a === "/" || ((f = A.pathname) != null && f.startsWith(a)) || Ee(!1),
      (c = A);
  } else c = u;
  let d = c.pathname || "/",
    y = d;
  if (a !== "/") {
    let A = a.replace(/^\//, "").split("/");
    y = "/" + d.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let v = Xv(e, { pathname: y }),
    x = v0(
      v &&
        v.map((A) =>
          Object.assign({}, A, {
            params: Object.assign({}, l, A.params),
            pathname: Kn([
              a,
              i.encodeLocation
                ? i.encodeLocation(A.pathname).pathname
                : A.pathname,
            ]),
            pathnameBase:
              A.pathnameBase === "/"
                ? a
                : Kn([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(A.pathnameBase).pathname
                      : A.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && x
    ? T.createElement(
        Ys.Provider,
        {
          value: {
            location: Ss(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Mt.Pop,
          },
        },
        x
      )
    : x;
}
function p0() {
  let e = S0(),
    t = l0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return T.createElement(
    T.Fragment,
    null,
    T.createElement("h2", null, "Unexpected Application Error!"),
    T.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? T.createElement("pre", { style: i }, n) : null,
    null
  );
}
const m0 = T.createElement(p0, null);
class g0 extends T.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? T.createElement(
          Js.Provider,
          { value: this.props.routeContext },
          T.createElement(Rp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function y0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = T.useContext(u0);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    T.createElement(Js.Provider, { value: t }, r)
  );
}
function v0(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = o.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    c >= 0 || Ee(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: y } = n,
          v =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, f, d) => {
    let y,
      v = !1,
      x = null,
      A = null;
    n &&
      ((y = l && f.route.id ? l[f.route.id] : void 0),
      (x = f.route.errorElement || m0),
      a &&
        (u < 0 && d === 0
          ? ((v = !0), (A = null))
          : u === d &&
            ((v = !0), (A = f.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, d + 1)),
      h = () => {
        let m;
        return (
          y
            ? (m = x)
            : v
            ? (m = A)
            : f.route.Component
            ? (m = T.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = c),
          T.createElement(y0, {
            match: f,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? T.createElement(g0, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var zl = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(zl || {});
function x0(e) {
  let t = T.useContext(c0);
  return t || Ee(!1), t;
}
function w0(e) {
  let t = T.useContext(Js);
  return t || Ee(!1), t;
}
function A0(e) {
  let t = w0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ee(!1), n.route.id;
}
function S0() {
  var e;
  let t = T.useContext(Rp),
    n = x0(zl.UseRouteError),
    r = A0(zl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Lp(e) {
  Ee(!1);
}
function T0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Mt.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  $a() && Ee(!1);
  let a = t.replace(/^\/*/, "/"),
    u = T.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: Ss({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o]
    );
  typeof r == "string" && (r = Xs(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: y = null,
      key: v = "default",
    } = r,
    x = T.useMemo(() => {
      let A = Mp(c, a);
      return A == null
        ? null
        : {
            location: { pathname: A, search: f, hash: d, state: y, key: v },
            navigationType: i,
          };
    }, [a, c, f, d, y, v, i]);
  return x == null
    ? null
    : T.createElement(
        Ip.Provider,
        { value: u },
        T.createElement(Ys.Provider, { children: n, value: x })
      );
}
function C0(e) {
  let { children: t, location: n } = e;
  return d0(Vl(t), n);
}
new Promise(() => {});
function Vl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    T.Children.forEach(e, (r, i) => {
      if (!T.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === T.Fragment) {
        n.push.apply(n, Vl(r.props.children, s));
        return;
      }
      r.type !== Lp && Ee(!1), !r.props.index || !r.props.children || Ee(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Vl(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const k0 = "6";
try {
  window.__reactRouterVersion = k0;
} catch {}
const P0 = "startTransition",
  Yc = Rg[P0];
function E0(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = T.useRef();
  s.current == null && (s.current = Hv({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, a] = T.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = T.useCallback(
      (f) => {
        u && Yc ? Yc(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    T.useLayoutEffect(() => o.listen(c), [o, c]),
    T.createElement(T0, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
var Jc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Jc || (Jc = {}));
var Zc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Zc || (Zc = {}));
var M0 = "@vercel/analytics",
  N0 = "1.4.1",
  I0 = () => {
    window.va ||
      (window.va = function (...t) {
        (window.vaq = window.vaq || []).push(t);
      });
  };
function Dp() {
  return typeof window < "u";
}
function jp() {
  try {
    const e = "production";
  } catch {}
  return "production";
}
function R0(e = "auto") {
  if (e === "auto") {
    window.vam = jp();
    return;
  }
  window.vam = e;
}
function L0() {
  return (Dp() ? window.vam : jp()) || "production";
}
function No() {
  return L0() === "development";
}
var D0 = "https://va.vercel-scripts.com/v1/script.debug.js",
  j0 = "/_vercel/insights/script.js";
function O0(e = { debug: !0 }) {
  var t;
  if (!Dp()) return;
  R0(e.mode),
    I0(),
    e.beforeSend &&
      ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend));
  const n = e.scriptSrc || (No() ? D0 : j0);
  if (document.head.querySelector(`script[src*="${n}"]`)) return;
  const r = document.createElement("script");
  (r.src = n),
    (r.defer = !0),
    (r.dataset.sdkn = M0 + (e.framework ? `/${e.framework}` : "")),
    (r.dataset.sdkv = N0),
    e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"),
    e.endpoint && (r.dataset.endpoint = e.endpoint),
    e.dsn && (r.dataset.dsn = e.dsn),
    (r.onerror = () => {
      const i = No()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";

    }),
    No() && e.debug === !1 && (r.dataset.debug = "false"),
    document.head.appendChild(r);
}
function B0({ route: e, path: t }) {
  var n;
  (n = window.va) == null || n.call(window, "pageview", { route: e, path: t });
}
function F0(e) {
  return (
    T.useEffect(() => {
      var t;
      e.beforeSend &&
        ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend));
    }, [e.beforeSend]),
    T.useEffect(() => {
      O0({
        framework: e.framework || "react",
        ...(e.route !== void 0 && { disableAutoTrack: !0 }),
        ...e,
      });
    }, []),
    T.useEffect(() => {
      e.route && e.path && B0({ route: e.route, path: e.path });
    }, [e.route, e.path]),
    null
  );
}
function z0(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Zs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ul = (e) => Array.isArray(e);
function Op(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function _r(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Gc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function eu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Gc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Gc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Gs(e, t, n) {
  const r = e.getProps();
  return eu(r, t, n !== void 0 ? n : r.custom, e);
}
const tu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  nu = ["initial", ...tu],
  li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  wn = new Set(li),
  dt = (e) => e * 1e3,
  ht = (e) => e / 1e3,
  V0 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  U0 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Q0 = { type: "keyframes", duration: 0.8 },
  b0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  H0 = (e, { keyframes: t }) =>
    t.length > 2
      ? Q0
      : wn.has(e)
      ? e.startsWith("scale")
        ? U0(t[1])
        : V0
      : b0;
function ru(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const W0 = { skipAnimations: !1, useManualTiming: !1 },
  K0 = (e) => e !== null;
function qs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(K0),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const ge = (e) => e;
let Ql = ge;
function X0(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    s.has(u) && (a.schedule(u), e()), u(o);
  }
  const a = {
    schedule: (u, c = !1, f = !1) => {
      const y = f && r ? t : n;
      return c && s.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const Ri = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Y0 = 40;
function Bp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ri.reduce((p, h) => ((p[h] = X0(s)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = o,
    y = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Y0), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: Ri.reduce((p, h) => {
      const m = o[h];
      return (p[h] = (w, S = !1, P = !1) => (n || v(), m.schedule(w, S, P))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Ri.length; h++) o[Ri[h]].cancel(p);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: V,
    cancel: bt,
    state: ae,
    steps: Io,
  } = Bp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ge, !0),
  Fp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  J0 = 1e-7,
  Z0 = 12;
function G0(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do (o = t + (n - t) / 2), (s = Fp(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > J0 && ++l < Z0);
  return o;
}
function ai(e, t, n, r) {
  if (e === t && n === r) return ge;
  const i = (s) => G0(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Fp(i(s), t, r));
}
const zp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Vp = (e) => (t) => 1 - e(1 - t),
  Up = ai(0.33, 1.53, 0.69, 0.99),
  iu = Vp(Up),
  Qp = zp(iu),
  bp = (e) =>
    (e *= 2) < 1 ? 0.5 * iu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  su = (e) => 1 - Math.sin(Math.acos(e)),
  Hp = Vp(su),
  Wp = zp(su),
  Kp = (e) => /^0[^.\s]+$/u.test(e);
function q0(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Kp(e)
    : !0;
}
const Xp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Yp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Jp = Yp("--"),
  _0 = Yp("var(--"),
  ou = (e) => (_0(e) ? $0.test(e.split("/*")[0].trim()) : !1),
  $0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function tx(e) {
  const t = ex.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Zp(e, t, n = 1) {
  const [r, i] = tx(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Xp(o) ? parseFloat(o) : o;
  }
  return ou(i) ? Zp(i, t, n + 1) : i;
}
const vt = (e, t, n) => (n > t ? t : n < e ? e : n),
  sr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  $r = { ...sr, transform: (e) => vt(0, 1, e) },
  Li = { ...sr, default: 1 },
  ui = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  At = ui("deg"),
  rt = ui("%"),
  L = ui("px"),
  nx = ui("vh"),
  rx = ui("vw"),
  qc = {
    ...rt,
    parse: (e) => rt.parse(e) / 100,
    transform: (e) => rt.transform(e * 100),
  },
  ix = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  _c = (e) => e === sr || e === L,
  $c = (e, t) => parseFloat(e.split(", ")[t]),
  ef =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return $c(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? $c(s[1], e) : 0;
      }
    },
  sx = new Set(["x", "y", "z"]),
  ox = li.filter((e) => !sx.has(e));
function lx(e) {
  const t = [];
  return (
    ox.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const $n = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: ef(4, 13),
  y: ef(5, 14),
};
$n.translateX = $n.x;
$n.translateY = $n.y;
const Gp = (e) => (t) => t.test(e),
  ax = { test: (e) => e === "auto", parse: (e) => e },
  qp = [sr, L, rt, At, rx, nx, ax],
  tf = (e) => qp.find(Gp(e)),
  dn = new Set();
let bl = !1,
  Hl = !1;
function _p() {
  if (Hl) {
    const e = Array.from(dn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = lx(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var l;
            (l = r.getValue(s)) === null || l === void 0 || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Hl = !1), (bl = !1), dn.forEach((e) => e.complete()), dn.clear();
}
function $p() {
  dn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Hl = !0);
  });
}
function ux() {
  $p(), _p();
}
class lu {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (dn.add(this), bl || ((bl = !0), V.read($p), V.resolveKeyframes(_p)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      dn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), dn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Lr = (e) => Math.round(e * 1e5) / 1e5,
  au = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cx(e) {
  return e == null;
}
const fx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  uu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && fx.test(n) && n.startsWith(e)) ||
      (t && !cx(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  em = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, l] = r.match(au);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  dx = (e) => vt(0, 255, e),
  Ro = { ...sr, transform: (e) => Math.round(dx(e)) },
  un = {
    test: uu("rgb", "red"),
    parse: em("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ro.transform(e) +
      ", " +
      Ro.transform(t) +
      ", " +
      Ro.transform(n) +
      ", " +
      Lr($r.transform(r)) +
      ")",
  };
function hx(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Wl = { test: uu("#"), parse: hx, transform: un.transform },
  jn = {
    test: uu("hsl", "hue"),
    parse: em("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      rt.transform(Lr(t)) +
      ", " +
      rt.transform(Lr(n)) +
      ", " +
      Lr($r.transform(r)) +
      ")",
  },
  he = {
    test: (e) => un.test(e) || Wl.test(e) || jn.test(e),
    parse: (e) =>
      un.test(e) ? un.parse(e) : jn.test(e) ? jn.parse(e) : Wl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? un.transform(e)
        : jn.transform(e),
  },
  px =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function mx(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(au)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(px)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const tm = "number",
  nm = "color",
  gx = "var",
  yx = "var(",
  nf = "${}",
  vx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ei(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      vx,
      (a) => (
        he.test(a)
          ? (r.color.push(s), i.push(nm), n.push(he.parse(a)))
          : a.startsWith(yx)
          ? (r.var.push(s), i.push(gx), n.push(a))
          : (r.number.push(s), i.push(tm), n.push(parseFloat(a))),
        ++s,
        nf
      )
    )
    .split(nf);
  return { values: n, split: l, indexes: r, types: i };
}
function rm(e) {
  return ei(e).values;
}
function im(e) {
  const { split: t, types: n } = ei(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o];
        l === tm
          ? (s += Lr(i[o]))
          : l === nm
          ? (s += he.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const xx = (e) => (typeof e == "number" ? 0 : e);
function wx(e) {
  const t = rm(e);
  return im(e)(t.map(xx));
}
const Ht = {
    test: mx,
    parse: rm,
    createTransformer: im,
    getAnimatableNone: wx,
  },
  Ax = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Sx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(au) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Ax.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const Tx = /\b([a-z-]*)\(.*?\)/gu,
  Kl = {
    ...Ht,
    getAnimatableNone: (e) => {
      const t = e.match(Tx);
      return t ? t.map(Sx).join(" ") : e;
    },
  },
  Cx = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L,
  },
  kx = {
    rotate: At,
    rotateX: At,
    rotateY: At,
    rotateZ: At,
    scale: Li,
    scaleX: Li,
    scaleY: Li,
    scaleZ: Li,
    skew: At,
    skewX: At,
    skewY: At,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: $r,
    originX: qc,
    originY: qc,
    originZ: L,
  },
  rf = { ...sr, transform: Math.round },
  cu = {
    ...Cx,
    ...kx,
    zIndex: rf,
    size: L,
    fillOpacity: $r,
    strokeOpacity: $r,
    numOctaves: rf,
  },
  Px = {
    ...cu,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: Kl,
    WebkitFilter: Kl,
  },
  fu = (e) => Px[e];
function sm(e, t) {
  let n = fu(e);
  return (
    n !== Kl && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Ex = new Set(["auto", "none", "0"]);
function Mx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !Ex.has(s) && ei(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = sm(n, i);
}
class om extends lu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), ou(u))) {
        const c = Zp(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !ix.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = tf(i),
      l = tf(s);
    if (o !== l)
      if (_c(o) && _c(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) q0(t[i]) && r.push(i);
    r.length && Mx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = $n[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      l = i[o];
    (i[o] = $n[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function du(e) {
  return typeof e == "function";
}
let Ji;
function Nx() {
  Ji = void 0;
}
const it = {
    now: () => (
      Ji === void 0 &&
        it.set(
          ae.isProcessing || W0.useManualTiming
            ? ae.timestamp
            : performance.now()
        ),
      Ji
    ),
    set: (e) => {
      (Ji = e), queueMicrotask(Nx);
    },
  },
  sf = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Ht.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function Ix(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Rx(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = sf(i, t),
    l = sf(s, t);
  return !o || !l ? !1 : Ix(e) || ((n === "spring" || du(n)) && r);
}
const Lx = 40;
class lm {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = it.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Lx
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ux(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = it.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !Rx(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        a == null || a(qs(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const er = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  am = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(er(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function um(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Dx = 5;
function cm(e, t, n) {
  const r = Math.max(t - Dx, 0);
  return um(n - e(r), t - r);
}
const G = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Lo = 0.001;
function jx({
  duration: e = G.duration,
  bounce: t = G.bounce,
  velocity: n = G.velocity,
  mass: r = G.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = vt(G.minDamping, G.maxDamping, o)),
    (e = vt(G.minDuration, G.maxDuration, ht(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            y = Xl(u, o),
            v = Math.exp(-f);
          return Lo - (d / y) * v;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = Xl(Math.pow(u, 2), o);
          return ((-i(u) + Lo > 0 ? -1 : 1) * ((d - y) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Lo + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = Bx(i, s, l);
  if (((e = dt(e)), isNaN(a)))
    return { stiffness: G.stiffness, damping: G.damping, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Ox = 12;
function Bx(e, t, n) {
  let r = n;
  for (let i = 1; i < Ox; i++) r = r - e(r) / t(r);
  return r;
}
function Xl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Yl = 2e4;
function fm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Yl; ) (t += n), (r = e.next(t));
  return t >= Yl ? 1 / 0 : t;
}
const Fx = ["duration", "bounce"],
  zx = ["stiffness", "damping", "mass"];
function of(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Vx(e) {
  let t = {
    velocity: G.velocity,
    stiffness: G.stiffness,
    damping: G.damping,
    mass: G.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!of(e, zx) && of(e, Fx))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * vt(0.05, 1, 1 - e.bounce) * Math.sqrt(i);
      t = { ...t, mass: G.mass, stiffness: i, damping: s };
    } else {
      const n = jx(e);
      (t = { ...t, ...n, mass: G.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function dm(e = G.visualDuration, t = G.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    l = { done: !1, value: s },
    {
      stiffness: a,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: y,
    } = Vx({ ...n, velocity: -ht(n.velocity || 0) }),
    v = d || 0,
    x = u / (2 * Math.sqrt(a * c)),
    A = o - s,
    p = ht(Math.sqrt(a / c)),
    h = Math.abs(A) < 5;
  r || (r = h ? G.restSpeed.granular : G.restSpeed.default),
    i || (i = h ? G.restDelta.granular : G.restDelta.default);
  let m;
  if (x < 1) {
    const S = Xl(p, x);
    m = (P) => {
      const E = Math.exp(-x * p * P);
      return (
        o - E * (((v + x * p * A) / S) * Math.sin(S * P) + A * Math.cos(S * P))
      );
    };
  } else if (x === 1) m = (S) => o - Math.exp(-p * S) * (A + (v + p * A) * S);
  else {
    const S = p * Math.sqrt(x * x - 1);
    m = (P) => {
      const E = Math.exp(-x * p * P),
        k = Math.min(S * P, 300);
      return (
        o - (E * ((v + x * p * A) * Math.sinh(k) + S * A * Math.cosh(k))) / S
      );
    };
  }
  const w = {
    calculatedDuration: (y && f) || null,
    next: (S) => {
      const P = m(S);
      if (y) l.done = S >= f;
      else {
        let E = 0;
        x < 1 && (E = S === 0 ? dt(v) : cm(m, S, P));
        const k = Math.abs(E) <= r,
          O = Math.abs(o - P) <= i;
        l.done = k && O;
      }
      return (l.value = l.done ? o : P), l;
    },
    toString: () => {
      const S = Math.min(fm(w), Yl),
        P = am((E) => w.next(S * E).value, S, 30);
      return S + "ms " + P;
    },
  };
  return w;
}
function lf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    y = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    v = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
        ? l
        : a;
  let x = n * t;
  const A = f + x,
    p = o === void 0 ? A : o(A);
  p !== A && (x = p - f);
  const h = (k) => -x * Math.exp(-k / r),
    m = (k) => p + h(k),
    w = (k) => {
      const O = h(k),
        R = m(k);
      (d.done = Math.abs(O) <= u), (d.value = d.done ? p : R);
    };
  let S, P;
  const E = (k) => {
    y(d.value) &&
      ((S = k),
      (P = dm({
        keyframes: [d.value, v(d.value)],
        velocity: cm(m, k, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let O = !1;
        return (
          !P && S === void 0 && ((O = !0), w(k), E(k)),
          S !== void 0 && k >= S ? P.next(k - S) : (!O && w(k), d)
        );
      },
    }
  );
}
const Ux = ai(0.42, 0, 1, 1),
  Qx = ai(0, 0, 0.58, 1),
  hm = ai(0.42, 0, 0.58, 1),
  bx = (e) => Array.isArray(e) && typeof e[0] != "number",
  hu = (e) => Array.isArray(e) && typeof e[0] == "number",
  af = {
    linear: ge,
    easeIn: Ux,
    easeInOut: hm,
    easeOut: Qx,
    circIn: su,
    circInOut: Wp,
    circOut: Hp,
    backIn: iu,
    backInOut: Qp,
    backOut: Up,
    anticipate: bp,
  },
  uf = (e) => {
    if (hu(e)) {
      Ql(e.length === 4);
      const [t, n, r, i] = e;
      return ai(t, n, r, i);
    } else if (typeof e == "string") return Ql(af[e] !== void 0), af[e];
    return e;
  },
  Hx = (e, t) => (n) => t(e(n)),
  zt = (...e) => e.reduce(Hx),
  X = (e, t, n) => e + (t - e) * n;
function Do(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Wx({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Do(a, l, e + 1 / 3)), (s = Do(a, l, e)), (o = Do(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ts(e, t) {
  return (n) => (n > 0 ? t : e);
}
const jo = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Kx = [Wl, un, jn],
  Xx = (e) => Kx.find((t) => t.test(e));
function cf(e) {
  const t = Xx(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === jn && (n = Wx(n)), n;
}
const ff = (e, t) => {
    const n = cf(e),
      r = cf(t);
    if (!n || !r) return Ts(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = jo(n.red, r.red, s)),
      (i.green = jo(n.green, r.green, s)),
      (i.blue = jo(n.blue, r.blue, s)),
      (i.alpha = X(n.alpha, r.alpha, s)),
      un.transform(i)
    );
  },
  Jl = new Set(["none", "hidden"]);
function Yx(e, t) {
  return Jl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Jx(e, t) {
  return (n) => X(e, t, n);
}
function pu(e) {
  return typeof e == "number"
    ? Jx
    : typeof e == "string"
    ? ou(e)
      ? Ts
      : he.test(e)
      ? ff
      : qx
    : Array.isArray(e)
    ? pm
    : typeof e == "object"
    ? he.test(e)
      ? ff
      : Zx
    : Ts;
}
function pm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => pu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Zx(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = pu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function Gx(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[s] = a), i[o]++;
  }
  return r;
}
const qx = (e, t) => {
  const n = Ht.createTransformer(t),
    r = ei(e),
    i = ei(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Jl.has(e) && !i.values.length) || (Jl.has(t) && !r.values.length)
      ? Yx(e, t)
      : zt(pm(Gx(r, i), i.values), n)
    : Ts(e, t);
};
function mm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? X(e, t, n)
    : pu(e)(e, t);
}
function _x(e, t, n) {
  const r = [],
    i = n || mm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || ge : t;
      l = zt(a, l);
    }
    r.push(l);
  }
  return r;
}
function $x(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Ql(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = _x(t, r, i),
    l = o.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = er(e[c], e[c + 1], u);
      return o[c](f);
    };
  return n ? (u) => a(vt(e[0], e[s - 1], u)) : a;
}
function e1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = er(0, t, r);
    e.push(X(n, 1, i));
  }
}
function t1(e) {
  const t = [0];
  return e1(t, e.length - 1), t;
}
function n1(e, t) {
  return e.map((n) => n * t);
}
function r1(e, t) {
  return e.map(() => t || hm).splice(0, e.length - 1);
}
function Cs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = bx(r) ? r.map(uf) : uf(r),
    s = { done: !1, value: t[0] },
    o = n1(n && n.length === t.length ? n : t1(t), e),
    l = $x(o, t, { ease: Array.isArray(i) ? i : r1(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const i1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => V.update(t, !0),
      stop: () => bt(t),
      now: () => (ae.isProcessing ? ae.timestamp : it.now()),
    };
  },
  s1 = { decay: lf, inertia: lf, tween: Cs, keyframes: Cs, spring: dm },
  o1 = (e) => e / 100;
class mu extends lm {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || lu,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new o(s, l, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      l = du(n) ? n : s1[n] || Cs;
    let a, u;
    l !== Cs &&
      typeof t[0] != "number" &&
      ((a = zt(o1, mm(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = fm(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      y = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: d,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: A,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      w = s;
    if (y) {
      const k = Math.min(this.currentTime, c) / f;
      let O = Math.floor(k),
        R = k % 1;
      !R && k >= 1 && (R = 1),
        R === 1 && O--,
        (O = Math.min(O, y + 1)),
        !!(O % 2) &&
          (v === "reverse"
            ? ((R = 1 - R), x && (R -= x / f))
            : v === "mirror" && (w = o)),
        (m = vt(0, 1, R) * f);
    }
    const S = h ? { done: !1, value: a[0] } : w.next(m);
    l && (S.value = l(S.value));
    let { done: P } = S;
    !h &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      E && i !== void 0 && (S.value = qs(a, this.options, i)),
      A && A(S.value),
      E && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ht(t.calculatedDuration) : 0;
  }
  get time() {
    return ht(this.currentTime);
  }
  set time(t) {
    (t = dt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = ht(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = i1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const l1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function gu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const a1 = { linearEasing: void 0 };
function u1(e, t) {
  const n = gu(e);
  return () => {
    var r;
    return (r = a1[t]) !== null && r !== void 0 ? r : n();
  };
}
const ks = u1(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function gm(e) {
  return !!(
    (typeof e == "function" && ks()) ||
    !e ||
    (typeof e == "string" && (e in Zl || ks())) ||
    hu(e) ||
    (Array.isArray(e) && e.every(gm))
  );
}
const Ar = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Zl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ar([0, 0.65, 0.55, 1]),
    circOut: Ar([0.55, 0, 1, 0.45]),
    backIn: Ar([0.31, 0.01, 0.66, -0.59]),
    backOut: Ar([0.33, 1.53, 0.69, 0.99]),
  };
function ym(e, t) {
  if (e)
    return typeof e == "function" && ks()
      ? am(e, t)
      : hu(e)
      ? Ar(e)
      : Array.isArray(e)
      ? e.map((n) => ym(n, t) || Zl.easeOut)
      : Zl[e];
}
function c1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l = "easeInOut",
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = ym(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function df(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const f1 = gu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ps = 10,
  d1 = 2e4;
function h1(e) {
  return du(e.type) || e.type === "spring" || !gm(e.ease);
}
function p1(e, t) {
  const n = new mu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < d1; ) (r = n.sample(s)), i.push(r.value), (s += Ps);
  return { times: void 0, keyframes: i, duration: s - Ps, ease: "linear" };
}
const vm = { anticipate: bp, backInOut: Qp, circInOut: Wp };
function m1(e) {
  return e in vm;
}
class hf extends lm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new om(
      s,
      (o, l) => this.onKeyframesResolved(o, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: l,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && ks() && m1(o) && (o = vm[o]), h1(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: y,
          motionValue: v,
          element: x,
          ...A
        } = this.options,
        p = p1(t, A);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (s = p.times),
        (o = p.ease),
        (l = "keyframes");
    }
    const f = c1(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (df(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(qs(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: s, type: l, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ht(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ht(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = dt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ge;
      const { animation: r } = n;
      df(r, t);
    }
    return ge;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...y
        } = this.options,
        v = new mu({
          ...y,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: l,
          isGenerator: !0,
        }),
        x = dt(this.time);
      u.setWithVelocity(v.sample(x - Ps).value, v.sample(x).value, Ps);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: l,
    } = t;
    return (
      f1() &&
      r &&
      l1.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      l !== "inertia"
    );
  }
}
const g1 = gu(() => window.ScrollTimeline !== void 0);
class y1 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      g1() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function v1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const yu =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const l = ru(r, e) || {},
        a = l.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - dt(a);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), l.onUpdate && l.onUpdate(d);
        },
        onComplete: () => {
          o(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      v1(l) || (c = { ...c, ...H0(e, c) }),
        c.duration && (c.duration = dt(c.duration)),
        c.repeatDelay && (c.repeatDelay = dt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !s && t.get() !== void 0)
      ) {
        const d = qs(c.keyframes, l);
        if (d !== void 0)
          return (
            V.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new y1([])
          );
      }
      return !s && hf.supports(c) ? new hf(c) : new mu(c);
    },
  x1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  w1 = (e) => (Ul(e) ? e[e.length - 1] || 0 : e);
function vu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function xu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class wu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return vu(this.subscriptions, t), () => xu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const pf = 30,
  A1 = (e) => !isNaN(parseFloat(e));
class S1 {
  constructor(t, n = {}) {
    (this.version = "11.13.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = it.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = it.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = A1(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new wu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            V.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = it.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > pf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, pf);
    return um(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ti(e, t) {
  return new S1(e, t);
}
function T1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ti(n));
}
function C1(e, t) {
  const n = Gs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = w1(s[o]);
    T1(e, o, l);
  }
}
const Au = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  k1 = "framerAppearId",
  xm = "data-" + Au(k1);
function wm(e) {
  return e.props[xm];
}
const me = (e) => !!(e && e.getVelocity);
function P1(e) {
  return !!(me(e) && e.add);
}
function Gl(e, t) {
  const n = e.getValue("willChange");
  if (P1(n)) return n.add(t);
}
function E1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Am(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null
      ),
      y = a[f];
    if (y === void 0 || (c && E1(c, f))) continue;
    const v = { delay: n, ...ru(o || {}, f) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const p = wm(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, V);
        h !== null && ((v.startTime = h), (x = !0));
      }
    }
    Gl(e, f),
      d.start(
        yu(f, d, y, e.shouldReduceMotion && wn.has(f) ? { type: !1 } : v, e, x)
      );
    const A = d.animation;
    A && u.push(A);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        V.update(() => {
          l && C1(e, l);
        });
      }),
    u
  );
}
function ql(e, t, n = {}) {
  var r;
  const i = Gs(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Am(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = s;
            return M1(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else return Promise.all([o(), l(n.delay)]);
}
function M1(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(N1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            ql(u, t, { ...s, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function N1(e, t) {
  return e.sortNodePosition(t);
}
function I1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => ql(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ql(e, t, n);
  else {
    const i = typeof t == "function" ? Gs(e, t, n.custom) : t;
    r = Promise.all(Am(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const R1 = nu.length;
function Sm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Sm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < R1; n++) {
    const r = nu[n],
      i = e.props[r];
    (_r(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const L1 = [...tu].reverse(),
  D1 = tu.length;
function j1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => I1(e, n, r)));
}
function O1(e) {
  let t = j1(e),
    n = mf(),
    r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = Gs(
      e,
      c,
      a === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: y, transitionEnd: v, ...x } = d;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const { props: u } = e,
      c = Sm(e.parent) || {},
      f = [],
      d = new Set();
    let y = {},
      v = 1 / 0;
    for (let A = 0; A < D1; A++) {
      const p = L1[A],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        w = _r(m),
        S = p === a ? h.isActive : null;
      S === !1 && (v = A);
      let P = m === c[p] && m !== u[p] && w;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          Zs(m) ||
          typeof m == "boolean")
      )
        continue;
      const E = B1(h.prevProp, m);
      let k = E || (p === a && h.isActive && !P && w) || (A > v && w),
        O = !1;
      const R = Array.isArray(m) ? m : [m];
      let ee = R.reduce(i(p), {});
      S === !1 && (ee = {});
      const { prevResolvedValues: qe = {} } = h,
        st = { ...qe, ...ee },
        Jt = (Z) => {
          (k = !0),
            d.has(Z) && ((O = !0), d.delete(Z)),
            (h.needsAnimating[Z] = !0);
          const M = e.getValue(Z);
          M && (M.liveStyle = !1);
        };
      for (const Z in st) {
        const M = ee[Z],
          D = qe[Z];
        if (y.hasOwnProperty(Z)) continue;
        let j = !1;
        Ul(M) && Ul(D) ? (j = !Op(M, D)) : (j = M !== D),
          j
            ? M != null
              ? Jt(Z)
              : d.add(Z)
            : M !== void 0 && d.has(Z)
            ? Jt(Z)
            : (h.protectedKeys[Z] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = ee),
        h.isActive && (y = { ...y, ...ee }),
        r && e.blockInitialAnimation && (k = !1),
        k &&
          (!(P && E) || O) &&
          f.push(...R.map((Z) => ({ animation: Z, options: { type: p } })));
    }
    if (d.size) {
      const A = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (A[p] = h ?? null);
      }),
        f.push({ animation: A });
    }
    let x = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var y;
        return (y = d.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const f = o(a);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = mf()), (r = !0);
    },
  };
}
function B1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Op(t, e) : !1;
}
function $t(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function mf() {
  return {
    animate: $t(!0),
    whileInView: $t(),
    whileHover: $t(),
    whileTap: $t(),
    whileDrag: $t(),
    whileFocus: $t(),
    exit: $t(),
  };
}
class Yt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class F1 extends Yt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = O1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Zs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let z1 = 0;
class V1 extends Yt {
  constructor() {
    super(...arguments), (this.id = z1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const U1 = { animation: { Feature: F1 }, exit: { Feature: V1 } };
function Q1(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
const We = { x: !1, y: !1 };
function Tm() {
  return We.x || We.y;
}
function gf(e) {
  return (t) => {
    t.pointerType === "touch" || Tm() || e(t);
  };
}
function b1(e, t, n = {}) {
  const r = new AbortController(),
    i = { passive: !0, ...n, signal: r.signal },
    s = gf((o) => {
      const { target: l } = o,
        a = t(o);
      if (!a || !l) return;
      const u = gf((c) => {
        a(c), l.removeEventListener("pointerleave", u);
      });
      l.addEventListener("pointerleave", u, i);
    });
  return (
    Q1(e).forEach((o) => {
      o.addEventListener("pointerenter", s, i);
    }),
    () => r.abort()
  );
}
function H1(e) {
  return e === "x" || e === "y"
    ? We[e]
      ? null
      : ((We[e] = !0),
        () => {
          We[e] = !1;
        })
    : We.x || We.y
    ? null
    : ((We.x = We.y = !0),
      () => {
        We.x = We.y = !1;
      });
}
const Cm = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ci(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const W1 = (e) => (t) => Cm(t) && e(t, ci(t));
function ct(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Vt(e, t, n, r) {
  return ct(e, t, W1(n), r);
}
const yf = (e, t) => Math.abs(e - t);
function K1(e, t) {
  const n = yf(e.x, t.x),
    r = yf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class km {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Bo(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          y = K1(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !y) return;
        const { point: v } = f,
          { timestamp: x } = ae;
        this.history.push({ ...v, timestamp: x });
        const { onStart: A, onMove: p } = this.handlers;
        d ||
          (A && A(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Oo(d, this.transformPagePoint)),
          V.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const A = Bo(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Oo(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(f, A), v && v(f, A);
      }),
      !Cm(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = ci(t),
      l = Oo(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ae;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Bo(l, this.history)),
      (this.removeListeners = zt(
        Vt(this.contextWindow, "pointermove", this.handlePointerMove),
        Vt(this.contextWindow, "pointerup", this.handlePointerUp),
        Vt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), bt(this.updatePoint);
  }
}
function Oo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function vf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bo({ point: e }, t) {
  return {
    point: e,
    delta: vf(e, Pm(t)),
    offset: vf(e, X1(t)),
    velocity: Y1(t, 0.1),
  };
}
function X1(e) {
  return e[0];
}
function Pm(e) {
  return e[e.length - 1];
}
function Y1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Pm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > dt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = ht(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function On(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const Em = 1e-4,
  J1 = 1 - Em,
  Z1 = 1 + Em,
  Mm = 0.01,
  G1 = 0 - Mm,
  q1 = 0 + Mm;
function Le(e) {
  return e.max - e.min;
}
function _1(e, t, n) {
  return Math.abs(e - t) <= n;
}
function xf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = X(t.min, t.max, e.origin)),
    (e.scale = Le(n) / Le(t)),
    (e.translate = X(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= J1 && e.scale <= Z1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= G1 && e.translate <= q1) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Dr(e, t, n, r) {
  xf(e.x, t.x, n.x, r ? r.originX : void 0),
    xf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function wf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Le(t));
}
function $1(e, t, n) {
  wf(e.x, t.x, n.x), wf(e.y, t.y, n.y);
}
function Af(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Le(t));
}
function jr(e, t, n) {
  Af(e.x, t.x, n.x), Af(e.y, t.y, n.y);
}
function ew(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? X(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? X(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Sf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function tw(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Sf(e.x, n, i), y: Sf(e.y, t, r) };
}
function Tf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function nw(e, t) {
  return { x: Tf(e.x, t.x), y: Tf(e.y, t.y) };
}
function rw(e, t) {
  let n = 0.5;
  const r = Le(e),
    i = Le(t);
  return (
    i > r
      ? (n = er(t.min, t.max - r, e.min))
      : r > i && (n = er(e.min, e.max - i, t.min)),
    vt(0, 1, n)
  );
}
function iw(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const _l = 0.35;
function sw(e = _l) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = _l),
    { x: Cf(e, "left", "right"), y: Cf(e, "top", "bottom") }
  );
}
function Cf(e, t, n) {
  return { min: kf(e, t), max: kf(e, n) };
}
function kf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Pf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Bn = () => ({ x: Pf(), y: Pf() }),
  Ef = () => ({ min: 0, max: 0 }),
  _ = () => ({ x: Ef(), y: Ef() });
function Be(e) {
  return [e("x"), e("y")];
}
function Nm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ow({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Fo(e) {
  return e === void 0 || e === 1;
}
function $l({ scale: e, scaleX: t, scaleY: n }) {
  return !Fo(e) || !Fo(t) || !Fo(n);
}
function nn(e) {
  return (
    $l(e) ||
    Im(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Im(e) {
  return Mf(e.x) || Mf(e.y);
}
function Mf(e) {
  return e && e !== "0%";
}
function Es(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Nf(e, t, n, r, i) {
  return i !== void 0 && (e = Es(e, i, r)), Es(e, n, r) + t;
}
function ea(e, t = 0, n = 1, r, i) {
  (e.min = Nf(e.min, t, n, r, i)), (e.max = Nf(e.max, t, n, r, i));
}
function Rm(e, { x: t, y: n }) {
  ea(e.x, t.translate, t.scale, t.originPoint),
    ea(e.y, n.translate, n.scale, n.originPoint);
}
const If = 0.999999999999,
  Rf = 1.0000000000001;
function aw(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    (s = n[l]), (o = s.projectionDelta);
    const { visualElement: a } = s.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        zn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Rm(e, o)),
      r && nn(s.latestValues) && zn(e, s.latestValues));
  }
  t.x < Rf && t.x > If && (t.x = 1), t.y < Rf && t.y > If && (t.y = 1);
}
function Fn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Lf(e, t, n, r, i = 0.5) {
  const s = X(e.min, e.max, i);
  ea(e, t, n, s, r);
}
function zn(e, t) {
  Lf(e.x, t.x, t.scaleX, t.scale, t.originX),
    Lf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Lm(e, t) {
  return Nm(lw(e.getBoundingClientRect(), t));
}
function uw(e, t, n) {
  const r = Lm(e, n),
    { scroll: i } = t;
  return i && (Fn(r.x, i.offset.x), Fn(r.y, i.offset.y)), r;
}
const Dm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  cw = new WeakMap();
class fw {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = _()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ci(c).point);
      },
      s = (c, f) => {
        const { drag: d, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          d &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = H1(d)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Be((A) => {
            let p = this.getAxisMotionValue(A).get() || 0;
            if (rt.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[A];
                m && (p = Le(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[A] = p;
          }),
          v && V.postRender(() => v(c, f)),
          Gl(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: A } = f;
        if (y && this.currentDirection === null) {
          (this.currentDirection = dw(A)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, A),
          this.updateAxis("y", f.point, A),
          this.visualElement.render(),
          x && x(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        Be((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new km(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Dm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && V.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Di(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = ew(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && On(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = tw(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = sw(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Be((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = iw(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !On(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = uw(r, i.root, this.visualElement.getTransformPagePoint());
    let o = nw(i.layout.layoutBox, s);
    if (n) {
      const l = n(ow(o));
      (this.hasMutatedConstraints = !!l), l && (o = Nm(l));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = Be((c) => {
        if (!Di(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        o && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Gl(this.visualElement, t), r.start(yu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Be((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Be((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Be((n) => {
      const { drag: r } = this.getProps();
      if (!Di(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - X(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!On(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Be((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = rw({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Be((o) => {
        if (!Di(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o];
        l.set(X(a, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    cw.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Vt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        On(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      V.read(r);
    const o = ct(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Be((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = _l,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function Di(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function dw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class hw extends Yt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ge),
      (this.removeListeners = ge),
      (this.controls = new fw(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ge);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Df = (e) => (t, n) => {
  e && V.postRender(() => e(t, n));
};
class pw extends Yt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ge);
  }
  onPointerDown(t) {
    this.session = new km(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Dm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Df(t),
      onStart: Df(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && V.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Vt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const _s = T.createContext(null);
function mw() {
  const e = T.useContext(_s);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = T.useId();
  T.useEffect(() => r(i), []);
  const s = T.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const Su = T.createContext({}),
  jm = T.createContext({}),
  Zi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function jf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const pr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = jf(e, t.target.x),
        r = jf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  gw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ht.parse(e);
      if (i.length > 5) return r;
      const s = Ht.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + o] /= l), (i[1 + o] /= a);
      const u = X(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Ms = {};
function yw(e) {
  Object.assign(Ms, e);
}
const { schedule: Tu, cancel: cT } = Bp(queueMicrotask, !1);
class vw extends T.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    yw(xw),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Zi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              V.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Tu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Om(e) {
  const [t, n] = mw(),
    r = T.useContext(Su);
  return g.jsx(vw, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: T.useContext(jm),
    isPresent: t,
    safeToRemove: n,
  });
}
const xw = {
    borderRadius: {
      ...pr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: pr,
    borderTopRightRadius: pr,
    borderBottomLeftRadius: pr,
    borderBottomRightRadius: pr,
    boxShadow: gw,
  },
  Bm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ww = Bm.length,
  Of = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Bf = (e) => typeof e == "number" || L.test(e);
function Aw(e, t, n, r, i, s) {
  i
    ? ((e.opacity = X(0, n.opacity !== void 0 ? n.opacity : 1, Sw(r))),
      (e.opacityExit = X(t.opacity !== void 0 ? t.opacity : 1, 0, Tw(r))))
    : s &&
      (e.opacity = X(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < ww; o++) {
    const l = `border${Bm[o]}Radius`;
    let a = Ff(t, l),
      u = Ff(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Bf(a) === Bf(u)
        ? ((e[l] = Math.max(X(Of(a), Of(u), r), 0)),
          (rt.test(u) || rt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = X(t.rotate || 0, n.rotate || 0, r));
}
function Ff(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Sw = Fm(0, 0.5, Hp),
  Tw = Fm(0.5, 0.95, ge);
function Fm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(er(e, t, r)));
}
function zf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Oe(e, t) {
  zf(e.x, t.x), zf(e.y, t.y);
}
function Vf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Uf(e, t, n, r, i) {
  return (
    (e -= t), (e = Es(e, 1 / n, r)), i !== void 0 && (e = Es(e, 1 / i, r)), e
  );
}
function Cw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (rt.test(t) &&
      ((t = parseFloat(t)), (t = X(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = X(s.min, s.max, r);
  e === s && (l -= t),
    (e.min = Uf(e.min, t, n, l, i)),
    (e.max = Uf(e.max, t, n, l, i));
}
function Qf(e, t, [n, r, i], s, o) {
  Cw(e, t[n], t[r], t[i], t.scale, s, o);
}
const kw = ["x", "scaleX", "originX"],
  Pw = ["y", "scaleY", "originY"];
function bf(e, t, n, r) {
  Qf(e.x, t, kw, n ? n.x : void 0, r ? r.x : void 0),
    Qf(e.y, t, Pw, n ? n.y : void 0, r ? r.y : void 0);
}
function Hf(e) {
  return e.translate === 0 && e.scale === 1;
}
function zm(e) {
  return Hf(e.x) && Hf(e.y);
}
function Wf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Ew(e, t) {
  return Wf(e.x, t.x) && Wf(e.y, t.y);
}
function Kf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Vm(e, t) {
  return Kf(e.x, t.x) && Kf(e.y, t.y);
}
function Xf(e) {
  return Le(e.x) / Le(e.y);
}
function Yf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Mw {
  constructor() {
    this.members = [];
  }
  add(t) {
    vu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (xu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Nw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Iw = (e, t) => e.depth - t.depth;
class Rw {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    vu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    xu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Iw),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Gi(e) {
  const t = me(e) ? e.get() : e;
  return x1(t) ? t.toValue() : t;
}
function Lw(e, t) {
  const n = it.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (bt(r), e(s - t));
    };
  return V.read(r, !0), () => bt(r);
}
function Dw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function jw(e, t, n) {
  const r = me(e) ? e : ti(e);
  return r.start(yu("", r, t, n)), r.animation;
}
const rn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Sr = typeof window < "u" && window.MotionDebug !== void 0,
  zo = ["", "X", "Y", "Z"],
  Ow = { visibility: "hidden" },
  Jf = 1e3;
let Bw = 0;
function Vo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Um(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = wm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Um(r);
}
function Qm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      (this.id = Bw++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Sr &&
              (rn.totalNodes =
                rn.resolvedTargetDeltas =
                rn.recalculatedProjection =
                  0),
            this.nodes.forEach(Vw),
            this.nodes.forEach(Ww),
            this.nodes.forEach(Kw),
            this.nodes.forEach(Uw),
            Sr && window.MotionDebug.record(rn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Rw());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new wu()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Dw(o)), (this.instance = o);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Lw(d, 250)),
            Zi.hasAnimatedSinceResize &&
              ((Zi.hasAnimatedSinceResize = !1), this.nodes.forEach(Gf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || Gw,
                { onLayoutAnimationStart: A, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Vm(this.targetLayout, v) || y,
                m = !d && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...ru(x, "layout"), onPlay: A, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || Gf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        bt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Xw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Um(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Zf);
        return;
      }
      this.isUpdating || this.nodes.forEach(bw),
        (this.isUpdating = !1),
        this.nodes.forEach(Hw),
        this.nodes.forEach(Fw),
        this.nodes.forEach(zw),
        this.clearAllSnapshots();
      const l = it.now();
      (ae.delta = vt(0, 1e3 / 60, l - ae.timestamp)),
        (ae.timestamp = l),
        (ae.isProcessing = !0),
        Io.update.process(ae),
        Io.preRender.process(ae),
        Io.render.process(ae),
        (ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Tu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Qw), this.sharedNodes.forEach(Yw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = _()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !zm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (l || nn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        qw(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: l } = this.options;
      if (!l) return _();
      const a = l.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(_w)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Fn(a.x, c.offset.x), Fn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = _();
      if (
        (Oe(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Oe(a, o), Fn(a.x, f.offset.x), Fn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = _();
      Oe(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          nn(c.latestValues) && zn(a, c.latestValues);
      }
      return nn(this.latestValues) && zn(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = _();
      Oe(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !nn(u.latestValues)) continue;
        $l(u.latestValues) && u.updateSnapshot();
        const c = _(),
          f = u.measurePageBox();
        Oe(c, f),
          bf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return nn(this.latestValues) && bf(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ae.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = _()),
              (this.relativeTargetOrigin = _()),
              jr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = _()), (this.targetWithTransforms = _())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                $1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                Rm(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = _()),
                (this.relativeTargetOrigin = _()),
                jr(this.relativeTargetOrigin, this.target, y.target),
                Oe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Sr && rn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          $l(this.parent.latestValues) ||
          Im(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ae.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Oe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        y = this.treeScale.y;
      aw(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = _()));
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Vf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Vf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Dr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== y ||
          !Yf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Yf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Sr && rn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        o)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Bn()),
        (this.projectionDelta = Bn()),
        (this.projectionDeltaWithTransform = Bn());
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Bn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = _(),
        y = a ? a.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        A = this.getStack(),
        p = !A || A.members.length <= 1,
        h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(Zw));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        qf(f.x, o.x, S),
          qf(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (jr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Jw(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && Ew(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = _()),
            Oe(m, this.relativeTarget)),
          x &&
            ((this.animationValues = c), Aw(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (bt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = V.update(() => {
          (Zi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = jw(0, Jf, {
              ...o,
              onUpdate: (l) => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Jf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          bm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || _();
          const f = Le(this.layout.layoutBox.x);
          (a.x.min = o.target.x.min), (a.x.max = a.x.min + f);
          const d = Le(this.layout.layoutBox.y);
          (a.y.min = o.target.y.min), (a.y.max = a.y.min + d);
        }
        Oe(l, a),
          zn(l, c),
          Dr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Mw()),
        this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Vo("z", o, u, this.animationValues);
      for (let c = 0; c < zo.length; c++)
        Vo(`rotate${zo[c]}`, o, u, this.animationValues),
          Vo(`skew${zo[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Ow;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Gi(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Gi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !nn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Nw(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const x in Ms) {
        if (d[x] === void 0) continue;
        const { correct: A, applyTo: p } = Ms[x],
          h = u.transform === "none" ? d[x] : A(d[x], f);
        if (p) {
          const m = p.length;
          for (let w = 0; w < m; w++) u[p[w]] = h;
        } else u[x] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Gi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Zf),
        this.root.sharedNodes.clear();
    }
  };
}
function Fw(e) {
  e.updateLayout();
}
function zw(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Be((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Le(d);
          (d.min = r[f].min), (d.max = d.min + y);
        })
      : bm(s, n.layoutBox, r) &&
        Be((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Le(r[f]);
          (d.max = d.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y));
        });
    const l = Bn();
    Dr(l, r, n.layoutBox);
    const a = Bn();
    o ? Dr(a, e.applyTransform(i, !0), n.measuredBox) : Dr(a, r, n.layoutBox);
    const u = !zm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: y } = f;
        if (d && y) {
          const v = _();
          jr(v, n.layoutBox, d.layoutBox);
          const x = _();
          jr(x, r, y.layoutBox),
            Vm(v, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Vw(e) {
  Sr && rn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Uw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Qw(e) {
  e.clearSnapshot();
}
function Zf(e) {
  e.clearMeasurements();
}
function bw(e) {
  e.isLayoutDirty = !1;
}
function Hw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Gf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Ww(e) {
  e.resolveTargetDelta();
}
function Kw(e) {
  e.calcProjection();
}
function Xw(e) {
  e.resetSkewAndRotation();
}
function Yw(e) {
  e.removeLeadSnapshot();
}
function qf(e, t, n) {
  (e.translate = X(t.translate, 0, n)),
    (e.scale = X(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function _f(e, t, n, r) {
  (e.min = X(t.min, n.min, r)), (e.max = X(t.max, n.max, r));
}
function Jw(e, t, n, r) {
  _f(e.x, t.x, n.x, r), _f(e.y, t.y, n.y, r);
}
function Zw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Gw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  $f = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ed = $f("applewebkit/") && !$f("chrome/") ? Math.round : ge;
function td(e) {
  (e.min = ed(e.min)), (e.max = ed(e.max));
}
function qw(e) {
  td(e.x), td(e.y);
}
function bm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !_1(Xf(t), Xf(n), 0.2))
  );
}
function _w(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const $w = Qm({
    attachResizeListener: (e, t) => ct(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Uo = { current: void 0 },
  Hm = Qm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Uo.current) {
        const e = new $w({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Uo.current = e);
      }
      return Uo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  eA = {
    pan: { Feature: pw },
    drag: { Feature: hw, ProjectionNode: Hm, MeasureLayout: Om },
  };
function nd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n);
  const i = r[n ? "onHoverStart" : "onHoverEnd"];
  i && V.postRender(() => i(t, ci(t)));
}
class tA extends Yt {
  mount() {
    const { current: t, props: n } = this.node;
    t &&
      (this.unmount = b1(
        t,
        (r) => (nd(this.node, r, !0), (i) => nd(this.node, i, !1)),
        { passive: !n.onHoverStart && !n.onHoverEnd }
      ));
  }
  unmount() {}
}
class nA extends Yt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = zt(
      ct(this.node.current, "focus", () => this.onFocus()),
      ct(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Wm = (e, t) => (t ? (e === t ? !0 : Wm(e, t.parentElement)) : !1);
function Qo(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ci(n));
}
class rA extends Yt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ge),
      (this.removeEndListeners = ge),
      (this.removeAccessibleListeners = ge),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = Vt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !Wm(this.node.current, l.target) ? c : u;
              d && V.update(() => d(l, a));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Vt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = zt(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Qo("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && V.postRender(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ct(this.node.current, "keyup", o)),
              Qo("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ct(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Qo("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = ct(this.node.current, "blur", r);
        this.removeAccessibleListeners = zt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && V.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Tm()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && V.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Vt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = ct(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = zt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const ta = new WeakMap(),
  bo = new WeakMap(),
  iA = (e) => {
    const t = ta.get(e.target);
    t && t(e);
  },
  sA = (e) => {
    e.forEach(iA);
  };
function oA({ root: e, ...t }) {
  const n = e || document;
  bo.has(n) || bo.set(n, {});
  const r = bo.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(sA, { root: e, ...t })), r[i];
}
function lA(e, t, n) {
  const r = oA(t);
  return (
    ta.set(e, n),
    r.observe(e),
    () => {
      ta.delete(e), r.unobserve(e);
    }
  );
}
const aA = { some: 0, all: 1 };
class uA extends Yt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : aA[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return lA(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(cA(t, n)) && this.startObserver();
  }
  unmount() {}
}
function cA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const fA = {
    inView: { Feature: uA },
    tap: { Feature: rA },
    focus: { Feature: nA },
    hover: { Feature: tA },
  },
  dA = { layout: { ProjectionNode: Hm, MeasureLayout: Om } },
  Cu = T.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  $s = T.createContext({}),
  ku = typeof window < "u",
  Km = ku ? T.useLayoutEffect : T.useEffect,
  Xm = T.createContext({ strict: !1 });
function hA(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = T.useContext($s),
    a = T.useContext(Xm),
    u = T.useContext(_s),
    c = T.useContext(Cu).reducedMotion,
    f = T.useRef();
  (r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    y = T.useContext(jm);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    pA(f.current, n, i, y);
  const v = T.useRef(!1);
  T.useInsertionEffect(() => {
    d && v.current && d.update(n, u);
  });
  const x = n[xm],
    A = T.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x))
    );
  return (
    Km(() => {
      d &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Tu.render(d.render),
        A.current && d.animationState && d.animationState.animateChanges());
    }),
    T.useEffect(() => {
      d &&
        (!A.current && d.animationState && d.animationState.animateChanges(),
        A.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, x);
          }),
          (A.current = !1)));
    }),
    d
  );
}
function pA(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Ym(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (l && On(l)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function Ym(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Ym(e.parent);
}
function mA(e, t, n) {
  return T.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : On(n) && (n.current = r));
    },
    [t]
  );
}
function eo(e) {
  return Zs(e.animate) || nu.some((t) => _r(e[t]));
}
function Jm(e) {
  return !!(eo(e) || e.variants);
}
function gA(e, t) {
  if (eo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || _r(n) ? n : void 0,
      animate: _r(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function yA(e) {
  const { initial: t, animate: n } = gA(e, T.useContext($s));
  return T.useMemo(() => ({ initial: t, animate: n }), [rd(t), rd(n)]);
}
function rd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const id = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  tr = {};
for (const e in id) tr[e] = { isEnabled: (t) => id[e].some((n) => !!t[n]) };
function vA(e) {
  for (const t in e) tr[t] = { ...tr[t], ...e[t] };
}
const xA = Symbol.for("motionComponentSymbol");
function wA({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && vA(e);
  function s(l, a) {
    let u;
    const c = { ...T.useContext(Cu), ...l, layoutId: AA(l) },
      { isStatic: f } = c,
      d = yA(l),
      y = r(l, f);
    if (!f && ku) {
      SA();
      const v = TA(c);
      (u = v.MeasureLayout),
        (d.visualElement = hA(i, y, c, t, v.ProjectionNode));
    }
    return g.jsxs($s.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? g.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, l, mA(y, d.visualElement, a), y, f, d.visualElement),
      ],
    });
  }
  const o = T.forwardRef(s);
  return (o[xA] = i), o;
}
function AA({ layoutId: e }) {
  const t = T.useContext(Su).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function SA(e, t) {
  T.useContext(Xm).strict;
}
function TA(e) {
  const { drag: t, layout: n } = tr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const CA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Pu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(CA.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Zm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Gm = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function qm(e, t, n, r) {
  Zm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Gm.has(i) ? i : Au(i), t.attrs[i]);
}
function _m(e, { layout: t, layoutId: n }) {
  return (
    wn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ms[e] || e === "opacity"))
  );
}
function Eu(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (me(i[o]) ||
      (t.style && me(t.style[o])) ||
      _m(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function $m(e, t, n) {
  const r = Eu(e, t, n);
  for (const i in e)
    if (me(e[i]) || me(t[i])) {
      const s =
        li.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Mu(e) {
  const t = T.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function kA(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: PA(r, i, s, e), renderState: t() };
  return n && (o.mount = (l) => n(r, l, o)), o;
}
const eg = (e) => (t, n) => {
  const r = T.useContext($s),
    i = T.useContext(_s),
    s = () => kA(e, t, r, i);
  return n ? s() : Mu(s);
};
function PA(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = Gi(s[d]);
  let { initial: o, animate: l } = e;
  const a = eo(e),
    u = Jm(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? l : o;
  if (f && typeof f != "boolean" && !Zs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let y = 0; y < d.length; y++) {
      const v = eu(e, d[y]);
      if (v) {
        const { transitionEnd: x, transition: A, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[h] = m);
        }
        for (const h in x) i[h] = x[h];
      }
    }
  }
  return i;
}
const Nu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  tg = () => ({ ...Nu(), attrs: {} }),
  ng = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  EA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  MA = li.length;
function NA(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < MA; s++) {
    const o = li[s],
      l = e[o];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (o.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = ng(l, cu[o]);
      if (!a) {
        i = !1;
        const c = EA[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Iu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (wn.has(a)) {
      o = !0;
      continue;
    } else if (Jp(a)) {
      i[a] = u;
      continue;
    } else {
      const c = ng(u, cu[a]);
      a.startsWith("origin") ? ((l = !0), (s[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = NA(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function sd(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function IA(e, t, n) {
  const r = sd(t, e.x, e.width),
    i = sd(n, e.y, e.height);
  return `${r} ${i}`;
}
const RA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  LA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function DA(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? RA : LA;
  e[s.offset] = L.transform(-r);
  const o = L.transform(t),
    l = L.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Ru(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f
) {
  if ((Iu(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: y, dimensions: v } = e;
  d.transform && (v && (y.transform = d.transform), delete d.transform),
    v &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = IA(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && DA(d, o, l, a, !1);
}
const Lu = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  jA = {
    useVisualState: eg({
      scrapeMotionValuesFromProps: $m,
      createRenderState: tg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        V.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          V.render(() => {
            Ru(n, r, Lu(t.tagName), e.transformTemplate), qm(t, n);
          });
      },
    }),
  },
  OA = {
    useVisualState: eg({
      scrapeMotionValuesFromProps: Eu,
      createRenderState: Nu,
    }),
  };
function rg(e, t, n) {
  for (const r in t) !me(t[r]) && !_m(r, n) && (e[r] = t[r]);
}
function BA({ transformTemplate: e }, t) {
  return T.useMemo(() => {
    const n = Nu();
    return Iu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function FA(e, t) {
  const n = e.style || {},
    r = {};
  return rg(r, n, e), Object.assign(r, BA(e, t)), r;
}
function zA(e, t) {
  const n = {},
    r = FA(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const VA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ns(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    VA.has(e)
  );
}
let ig = (e) => !Ns(e);
function UA(e) {
  e && (ig = (t) => (t.startsWith("on") ? !Ns(t) : e(t)));
}
try {
  UA(require("@emotion/is-prop-valid").default);
} catch {}
function QA(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((ig(i) ||
        (n === !0 && Ns(i)) ||
        (!t && !Ns(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function bA(e, t, n, r) {
  const i = T.useMemo(() => {
    const s = tg();
    return (
      Ru(s, t, Lu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    rg(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function HA(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (Pu(n) ? bA : zA)(r, s, o, n),
      u = QA(r, typeof n == "string", e),
      c = n !== T.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = T.useMemo(() => (me(f) ? f.get() : f), [f]);
    return T.createElement(n, { ...c, children: d });
  };
}
function WA(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Pu(r) ? jA : OA),
      preloadedFeatures: e,
      useRender: HA(i),
      createVisualElement: t,
      Component: r,
    };
    return wA(o);
  };
}
const na = { current: null },
  sg = { current: !1 };
function KA() {
  if (((sg.current = !0), !!ku))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (na.current = e.matches);
      e.addListener(t), t();
    } else na.current = !1;
}
function XA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (me(i)) e.addValue(r, i);
    else if (me(s)) e.addValue(r, ti(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ti(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const od = new WeakMap(),
  YA = [...qp, he, Ht],
  JA = (e) => YA.find(Gp(e)),
  ld = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class ZA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = lu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = it.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), V.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = eo(n)),
      (this.isVariantNode = Jm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const d in f) {
      const y = f[d];
      a[d] !== void 0 && me(y) && y.set(a[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      od.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      sg.current || KA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : na.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    od.delete(this.current),
      this.projection && this.projection.unmount(),
      bt(this.notifyUpdate),
      bt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = wn.has(t),
      i = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && V.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in tr) {
      const n = tr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : _();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < ld.length; r++) {
      const i = ld[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = XA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ti(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Xp(i) || Kp(i))
          ? (i = parseFloat(i))
          : !JA(i) && Ht.test(n) && (i = sm(t, n)),
        this.setBaseTarget(t, me(i) ? i.get() : i)),
      me(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = eu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !me(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new wu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class og extends ZA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = om);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function GA(e) {
  return window.getComputedStyle(e);
}
class qA extends og {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Zm);
  }
  readValueFromInstance(t, n) {
    if (wn.has(n)) {
      const r = fu(n);
      return (r && r.default) || 0;
    } else {
      const r = GA(t),
        i = (Jp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Lm(t, n);
  }
  build(t, n, r) {
    Iu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Eu(t, n, r);
  }
}
class _A extends og {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = _);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (wn.has(n)) {
      const r = fu(n);
      return (r && r.default) || 0;
    }
    return (n = Gm.has(n) ? n : Au(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $m(t, n, r);
  }
  build(t, n, r) {
    Ru(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    qm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Lu(t.tagName)), super.mount(t);
  }
}
const $A = (e, t) =>
    Pu(e) ? new _A(t) : new qA(t, { allowProjection: e !== T.Fragment }),
  eS = WA({ ...U1, ...fA, ...eA, ...dA }, $A),
  I = z0(eS);
class tS extends T.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function nS({ children: e, isPresent: t }) {
  const n = T.useId(),
    r = T.useRef(null),
    i = T.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = T.useContext(Cu);
  return (
    T.useInsertionEffect(() => {
      const { width: o, height: l, top: a, left: u } = i.current;
      if (t || !r.current || !o || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    g.jsx(tS, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: T.cloneElement(e, { ref: r }),
    })
  );
}
const rS = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const l = Mu(iS),
    a = T.useId(),
    u = T.useCallback(
      (f) => {
        l.set(f, !0);
        for (const d of l.values()) if (!d) return;
        r && r();
      },
      [l, r]
    ),
    c = T.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (l.set(f, !1), () => l.delete(f)),
      }),
      s ? [Math.random(), u] : [n, u]
    );
  return (
    T.useMemo(() => {
      l.forEach((f, d) => l.set(d, !1));
    }, [n]),
    T.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    o === "popLayout" && (e = g.jsx(nS, { isPresent: n, children: e })),
    g.jsx(_s.Provider, { value: c, children: e })
  );
};
function iS() {
  return new Map();
}
const ji = (e) => e.key || "";
function ad(e) {
  const t = [];
  return (
    T.Children.forEach(e, (n) => {
      T.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const sS = ({
    children: e,
    exitBeforeEnter: t,
    custom: n,
    initial: r = !0,
    onExitComplete: i,
    presenceAffectsLayout: s = !0,
    mode: o = "sync",
  }) => {
    const l = T.useMemo(() => ad(e), [e]),
      a = l.map(ji),
      u = T.useRef(!0),
      c = T.useRef(l),
      f = Mu(() => new Map()),
      [d, y] = T.useState(l),
      [v, x] = T.useState(l);
    Km(() => {
      (u.current = !1), (c.current = l);
      for (let h = 0; h < v.length; h++) {
        const m = ji(v[h]);
        a.includes(m) ? f.delete(m) : f.get(m) !== !0 && f.set(m, !1);
      }
    }, [v, a.length, a.join("-")]);
    const A = [];
    if (l !== d) {
      let h = [...l];
      for (let m = 0; m < v.length; m++) {
        const w = v[m],
          S = ji(w);
        a.includes(S) || (h.splice(m, 0, w), A.push(w));
      }
      o === "wait" && A.length && (h = A), x(ad(h)), y(l);
      return;
    }
    const { forceRender: p } = T.useContext(Su);
    return g.jsx(g.Fragment, {
      children: v.map((h) => {
        const m = ji(h),
          w = l === v || a.includes(m),
          S = () => {
            if (f.has(m)) f.set(m, !0);
            else return;
            let P = !0;
            f.forEach((E) => {
              E || (P = !1);
            }),
              P && (p == null || p(), x(c.current), i && i());
          };
        return g.jsx(
          rS,
          {
            isPresent: w,
            initial: !u.current || r ? void 0 : !1,
            custom: w ? void 0 : n,
            presenceAffectsLayout: s,
            mode: o,
            onExitComplete: w ? void 0 : S,
            children: h,
          },
          m
        );
      }),
    });
  },
  mr = 48,
  oS = ({
    color: e = "currentColor",
    direction: t = "left",
    distance: n = "md",
    duration: r = 0.4,
    easing: i = "cubic-bezier(0, 0, 0, 1)",
    hideOutline: s = !0,
    label: o,
    lines: l = 3,
    onToggle: a,
    render: u,
    rounded: c = !1,
    size: f = 32,
    toggle: d,
    toggled: y,
    disabled: v = !1,
    animateOnMount: x = !1,
  }) => {
    const [A, p] = T.useState(!1),
      [h, m] = T.useState(!1);
    T.useEffect(() => {
      m(!0);
    }, []);
    const w = Math.max(12, Math.min(mr, f)),
      S = Math.round((mr - w) / 2),
      P = w / 12,
      E = Math.round(P),
      O =
        w /
        (l *
          ((n === "lg" ? 0.25 : n === "sm" ? 0.75 : 0.5) +
            (l === 3 ? 1 : 1.25))),
      R = Math.round(O),
      ee = E * l + R * (l - 1),
      qe = Math.round((mr - ee) / 2),
      st =
        l === 3
          ? n === "lg"
            ? 4.0425
            : n === "sm"
            ? 5.1625
            : 4.6325
          : n === "lg"
          ? 6.7875
          : n === "sm"
          ? 8.4875
          : 7.6675,
      Jt = (P - E + (O - R)) / (l === 3 ? 1 : 2),
      di = parseFloat((w / st - Jt / (4 / 3)).toFixed(2)),
      Zt = Math.max(0, r),
      Z = {
        cursor: v ? "not-allowed" : "pointer",
        height: `${mr}px`,
        position: "relative",
        transition: `${Zt}s ${i}`,
        userSelect: "none",
        width: `${mr}px`,
      },
      M = {
        background: e,
        height: `${E}px`,
        left: `${S}px`,
        position: "absolute",
      };
    s && (Z.outline = "none"), c && (M.borderRadius = "9em");
    const D = () => {
        const Gt = y !== void 0 ? y : A;
        return x && !h ? !Gt : Gt;
      },
      j = d || p,
      Q = D();
    return u({
      barHeight: E,
      barStyles: M,
      burgerStyles: Z,
      easing: i,
      handler: () => {
        j(!Q), typeof a == "function" && a(!Q);
      },
      isLeft: t === "left",
      isToggled: Q,
      label: o,
      margin: R,
      move: di,
      time: Zt,
      topOffset: qe,
      width: w,
    });
  };
function ra() {
  return (
    (ra =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    ra.apply(this, arguments)
  );
}
const lS = (e) =>
    sn.createElement(
      oS,
      ra({}, e, {
        render: (t) =>
          sn.createElement(
            "div",
            {
              className: "hamburger-react",
              "aria-label": t.label,
              "aria-expanded": t.isToggled,
              onClick: e.disabled ? void 0 : t.handler,
              onKeyUp: e.disabled
                ? void 0
                : (n) => n.key === "Enter" && t.handler(),
              role: "button",
              style: t.burgerStyles,
              tabIndex: 0,
            },
            sn.createElement("div", {
              style: {
                ...t.barStyles,
                width: `${t.width}px`,
                top: `${t.topOffset}px`,
                transition: `${t.time}s ${t.easing}`,
                transform: `${
                  t.isToggled
                    ? `rotate(${45 * (t.isLeft ? -1 : 1)}deg) translate(${
                        t.move * (t.isLeft ? -1 : 1)
                      }px, ${t.move}px)`
                    : "none"
                }`,
              },
            }),
            sn.createElement("div", {
              style: {
                ...t.barStyles,
                width: `${t.width}px`,
                top: `${t.topOffset + t.barHeight + t.margin}px`,
                transition: `${t.time}s ${t.easing}`,
                opacity: `${t.isToggled ? "0" : "1"}`,
              },
            }),
            sn.createElement("div", {
              style: {
                ...t.barStyles,
                width: `${t.width}px`,
                top: `${t.topOffset + t.barHeight * 2 + t.margin * 2}px`,
                transition: `${t.time}s ${t.easing}`,
                transform: `${
                  t.isToggled
                    ? `rotate(${45 * (t.isLeft ? 1 : -1)}deg) translate(${
                        t.move * (t.isLeft ? -1 : 1)
                      }px, ${t.move * -1}px)`
                    : "none"
                }`,
              },
            })
          ),
      })
    ),
  aS =
    "data:image/webp;base64,UklGRrYBAABXRUJQVlA4TKoBAAAvV4IkEG+gqJEkNbZvxmMvp7BtGxS3Y1TUthGb6u/25nPzHwD4+B0ux3kpTfX+SDB2Rs7mNDRCTqoS4NjWnjZydgDDVM4SqJ12OmZsZxfMUzJPxyWvgJlpM5J+yC+HEzmi/27cNpIk+gHjqo3m2t3YIxOOpBAJeWQC/2WQhUGx5/8UIlXwKIH/0hwR/meTihwlkgW1MM3NFYbVZRZWWSHL/0HHSJVvg8jMiE2kyg9inr8a/uD/rMrWVUW42cWwupTCKk1k+R9ka0iVd7nNIPqQKl+Icv5q+IP/syo71OwdgAxrDW0qn3GmTWWRpa9NpZC/Gp42mBP/EFmv/zEyQpKYikZtKvBfbojJaZBObch4XEQC9shHcYzlRWY25tAF6mXxJ4gggxcnkHsiEnctRPwQ80WsiC3uKwnk3IpKEXGS9O9w1aZSYwP2iDT2JDVMNaKlTSVhkpvZBiTlAk/oO9S0toHUGDs+UPk16Aaz5ouCMAXwLcJL37nXQzZSjnWXUv5q4pDA7YxjrBq1WF+x9T6sO0xq9f2TrjCp1W83BP5LM6RW/50j8F/mmAc=",
  lg = "/assets/character-DtZ7lBSS.webp";
function uS() {
  const [e, t] = T.useState(!1),
    n = [
      { name: "about" },
      { name: "roadmap" },
      { name: "tokenomics" },
      {
        name: "whitepaper",
        link: "https://drive.google.com/file/d/1X-ceoG-v6sBemyrzlF0EUJWO0PqjrRnO/view",
        url: !0,
      },
    ],
    r = (s) => {
      const o = document.getElementById(s);
      o && o.scrollIntoView({ behavior: "smooth" });
    };
  T.useEffect(() => {
    e
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [e]);
  const i = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }), t(!1);
  };
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("div", {
        className: "w-screen h-24 bg-black fixed bg-opacity-70 z-[999]",
        children: g.jsxs("nav", {
          className:
            "flex size-full items-center justify-between px-6 md:px-16 lg:px-32",
          children: [
            g.jsx("button", {
              onClick: i,
              className: "z-50",
              children: g.jsx("img", {
                src: lg,
                alt: "Insider Character",
                draggable: !1,
                style: { userSelect: "none" },
                width: 64,
                height: 64,
              }),
            }),
            g.jsx("div", {
              className:
                "flex-row items-center gap-10 hidden min-[1320px]:flex",
              children: n.map((s, o) =>
                g.jsx(
                  "a",
                  {
                    href: s.url ? s.link : void 0,
                    onClick: s.url ? void 0 : () => r(s.name),
                    target: s.url ? "_blank" : "",
                    rel: s.url ? "noopener noreferrer" : "",
                    className:
                      "text-text text-2xl font-bold font-pixeloid-bold uppercase cursor-pointer",
                    children: s.name,
                  },
                  o
                )
              ),
            }),
            g.jsx("div", {
              className: "max-[1320px]:block hidden z-50",
              children: g.jsx(lS, {
                color: "#fff",
                duration: 0.5,
                size: 30,
                toggled: e,
                toggle: t,
              }),
            }),
            g.jsx(I.button, {
              onClick: () =>
                window.open(
                  "https://www.pinksale.finance/solana/launchpad/HUxNg8hu8eD1osfR2k2EcrCdUfV9Jcratas19sBWWr7Q",
                  "_blank"
                ),
              className:
                "relative items-center justify-end w-[200px] h-[35px] hidden min-[1320px]:flex",
              children: g.jsx(I.img, {
                src: aS,
                initial: { scale: 1 },
                whileHover: { scale: 1 },
                whileTap: { scale: 0.92 },
                transition: { duration: 0.2, ease: "easeInOut" },
                className: "absolute z-50",
                draggable: !1,
                style: { userSelect: "none", width: 380, height: "auto" },
              }),
            }),
          ],
        }),
      }),
      g.jsx(sS, {
        children:
          e &&
          g.jsx(I.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5, ease: "easeInOut" },
            className:
              "bg-black size-full fixed min-w-full min-h-dvh min-[1320px]:hidden z-[100]",
            children: g.jsx("div", {
              className:
                "flex flex-col items-center justify-center gap-8 h-full",
              children: n.map((s, o) =>
                g.jsx(
                  I.a,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.1 + o * 0.1,
                    },
                    href: s.url ? s.link : void 0,
                    onClick: () => {
                      r(s.name), t(!1);
                    },
                    target: s.url ? "_blank" : "",
                    rel: s.url ? "noopener noreferrer" : "",
                    className:
                      "text-text text-3xl sm:text-4xl font-bold font-pixeloid-bold uppercase cursor-pointer",
                    children: s.name,
                  },
                  o
                )
              ),
            }),
          }),
      }),
    ],
  });
}
const cS = "/assets/blackhole-BwBTPoT2.webp",
  fS =
    "data:image/webp;base64,UklGRsAFAABXRUJQVlA4TLQFAAAvo8RKEEfCJrbtKOcnFQ4YpGAB/VT0VJuALQmYYBRJkqJcPgdk8hyfhvvysIok2Um/YIDfZIBCBf6r8IGDvAzbRlLk47v/779TxjoAfnySGKCQIhQpUxISKYpciuWEIAg6KorA3G8FJShBzhEJivU4lQiCKD9SUf7f877K/yv/r4j3+1zXZZt2+JEQEBCw4sc9zMuC2sf44p22ISKcthe9sx4UdPiR/2Tcj0ZEgiKQ6g0SJElSJGdHzFqxjsS0YsZj1P/fNLnVXdQzRxnRfziQJMdtZnILd1hACfwRZQeTYxr+An+CE+cer6Kzsr6amLptYeoGyVrTsjW4W0r/of9kQye6qmV1OTic8+BqSq6BF0FsYf3EpKoYjvJUbIHqWUt1YupXXxOyVb1sLoFzMpaS2BtcJ/Qf+k824PimWsozI1aB+41aNTfBaUzVNhIc3i1wqm3wlnrNWnEVyXRebSNpQraKW3kVxFTk2MJrIL7r0n/oP21CnokmbSTDh9w+3KpM6tlqWivpP/SfQ2BSnhj6D/3nRAw3+94A8Yti0n84IX/Bccs2GIXVWuk/9J/xAJ5YGzDcBgfU2dEmZMs7OPz9vjuiByBWSf+h/wxQroOrzsQtNDirscXoDiCakK0oHPSV2QfpP/SfAcs/cM58Gyt/wa+gFEQ4prlyt+9qtTdAb6SerWis1Er/of8MWLyGKwl2YvsKzBG1ecLqcmEntrgtReF8365Y+g93YcWZSfCk1Kcg9gjHg8MQfQY+B1+Db/q+BF+AOFx8TEuDl5WYyntiFNb7Toql/9B/BjCdM5MAW5rDJYwkh9o+45WmZMs7G33pP/SfEYD11dS6wzpkVheZ4vXOUJJDbX/xSsxsrVlfCsq6eIwzCpO+9B/6z2EHMbwDTr2ELFXqQxWFYOGyXpSbIJLEc0Wg/9B/2sRvUA0cpoh5FeY4K76iihy0bqX3rFn3qJ7i6swDHjRbXhblH1Am5eXyW5T+c4o+P8BFEJgzDHEcOEyR6iqm1VV4wbyViFkra8exqDXMqZdhFrcyata0qqoHq1ObbrWAi60LGqJFq0X5HUSKW+kt6G4mRuys3GH6D/0nG76Cak3AYYpUV7FYXYUXvLSyvIoo68R6mEtgcSujZk2rqnqwOrXpVgu42LqgIZpaLcpvIGLVysXYb/HYm3OgnAr6D/0nC2bgopY4TMRLFeY4K76iihxUb2XwrGlXVU9xdeYBD5otL4vyHSiT6nKZiXai9B/6z6EWn8Fxy3tQjVxfhf5D/xld7ICz2A7ms6MPQeQeWL6mnYsPvbt6UXpnAVRfF1bpoP/Qf8YbsZUzOHgxO+u4Y+weKF8KShKotRarpP/wKVbAndh+AscGUS4FpZiPYDXm57HoP/SfwxHmvEpsW3h2tPzHePoA5kSUS0FJ4uzoiuRj8BFI/6H/jHTmvEosL4ByC1NHr7hqF8BcwLVsFq7i4ajfGUqUs6OX+8o9OgvSf+g/I52CCXLmW7BlP/eU25+x3Dn3QbX9XC9bTr0sblfez45e6Vu+1Ok/9J+RDw7rARj0uSIMV5rw7BiicLav/BUQL4D0H17FFxCfadKhK94SXH4ui/5D/xnriOuG/kP/of/Qf07JJrcJoP/Qf44lUvx8uZuG19+brxr8vfnoP3SBM+AA4j84S9Xqv1OPPdDsYjhyuLAQ9ZaV04RsyYhp8JrgSXH2vLSS/kP/CY/oLuhtnajPrzleii+/M5SU9dbKerRM6g9PpAnZ8t7KepxVSf+h/2SDvJsNAdTuDCXXraC6lWYbSw4TY9YymSZkq7qVXhNcvji9pSSJ93I3WBdP/6HeLINq4DBxnXhZdeZ4KT7YnaFEuW4S61aWbyzOJib6vZu0JFud11Zqz1vnpZX0H/pPdOpfxcs6UY+uOc6KPzT+H+WX+8RhNfQf+k9UklonWfxLDD1ClP5D/0mCCQ==",
  dS = "/assets/buy-now-button-U7gp6bdd.webp",
  hS = "/assets/highscores-button-WrSvMxaP.webp",
  pS = "/assets/telegram-button-CONKI9xa.webp",
  mS = "/assets/x-button-D04aKgQ1.webp",
  ud = "/assets/diamond-BBBBRYGL.webp",
  gS = "/assets/coin-CiYuVfW7.webp",
  ag = "/assets/cash-CHq9AwUl.webp",
  yS = "/assets/emerald-CMDBMkXB.webp",
  ug =
    "data:image/webp;base64,UklGRsAOAABXRUJQVlA4TLMOAAAv88F8EDULg7ZtBCX8Yf927R5BREyA/+exBPgtACjh20gxIDcklnkiN727BKU8KbhY5lapO3OrHKpy6HjglXeM5ot1Hhg/xIpb2eeKV6o8mkkYWQVHwC+pyj6csteKdPX/Pyc7ublB1se2bfusY9u7x7bN9SxmJrZto8vnt//fHzPBTraNs/cQ28kNpLKT/3Pa9Jxnin2ef3wJtiv1drJVuvSqNmWq0+cC8pw7iG22ttmlta1Nl1uwURqtK1xFnlNNKl6BRAEAy8baFz+zmu3ibNu2fW2XrrOOa9LxdtNRom3balqd3ff/v1OJ49QCLR7BXgN11yT7HEm2tq1t0610R513CZ12F11JRzhD/ZIlMzNDmJkT+U6A1Oq2nk2p7um/q7nvvPP93/8q7lcBlcQKYhHpXdMBoQAqigWgRpMka4pAIaOmDGRGjaIONCrqjKQGKmCho6QUFlUgo6p0++EAAEAwmc1s27Zt267LtvHati7btm3b9gRMbVOi/9mOb2rz6b8EWvEbTTmux6x+0EEBqtKrfdFlgN9iyLwgkCZG6prwrAiWVlVFrYIhYRNkQwb4a8pgN8WrtQA560syZ5Im0gjWHqwpSDBSWvov0wQvU/bywmXI8logTVwLpZCmPWQ1Brt50N+lkG6q5A1cTjUtyma4RnsXlXLqFdw1bbWiCftnn7QY7CxtqYXEKQGLUpejCkU0BbS9xrKqZY/wzL6L4AtBpQIaS2aFQEnL6b/0H9XoWDKM0uZcIE5Y64kiLCUMs4xGl9lp/WRt3pMnrpFdkK3YMsto/JAWTyDgkOahIGO6wHMTm16hDDAf7lWOHuG9BEgWTVogUNAjZPov8aUtgDc84IcAVSHQKUAjQxKduBd4QA54gcoBr+SA5yO82gn/6a8k/HMQmAf0UwLOKUvEz9F55YDXgkl+9x715quAQuLROJ/yON6nvFyBTqiRLf+Z8FPAjwxYBm8EmK+KNy+EB2+ER9Rc+UFGgklJr1Eh8fARIfiZNwSMZPVHmRn8lyJS7cp20Pq3AvHDrIzxLreDNGWNDtyU1RBN2xVuz+zYWou6G2UGe4UposweEaaUFE3/Jb4Ob5UFLwioJwQfBP4qzCewcjbcj0p/Hksb17Rizoq9KZqg3T5oaFG2lkAZ9UUM2zgwfAPQkZow8BP4QIi1hLh0SGrsktQE7ChlwT6pRYXEnIchv9grdIeaPiLch6sLLwViBFsjsJDI4L9cD05JwqKC9nqAQMqYpg63GhXMaARmTWocWJWxnodpr3KxR3SI6b+cH2pyJILYhBZoayPrwFZm30bWPmohcaWu2kjPI6RXKJd4tuEjOs30X/pPb/XW0/qoPfc1yADf4oV1myBMsE2QtDUj3AatiEBVaPIC1ebF734q8B7dfSgDqka4DVASngr4IoDnNOu/PnvPTGP6L6R4F8wYDsoA/+9BINHRe9rA2V+V54adRa9Ix82+OkZjBSACKUO1nEnKliQwWVR5VIwewWavMMv6Q1CTAQZ6GJuUYoUAwTpFo3fyMLUoxZrBf1kulJLFRsWIdBNLfPieFlwoQq6V24Bm2HqM3TvGDSb46Ro6G811MrbU6WgO7XIgEZf/gxWMlsqqpi+o0B6zqmnZCIPh62KoZzF0VYDD1oS2AL8yoRnEaZaYhhxxC2DOuP3PGtWCAjBnLwK9xhLto4aRJdVUKM3mE4yk860SBkF5aK3ABWB7XxVUOWDCoiITx5gx7fYzwbSOLwQzjQb/ZWlWKJGJEmRfwoovx7ZXfx2b678uaCFUiyp0PGCNYrP/JT58l3rnGZh241EMsUIgd7QyeFOoqwYNrIp+6ob3TKCB0d8AH/MNNAX4lR38GDdiNGqNEr69ygbO/trImaH55woESMYLE+8Z+01c4AMBjzKzw7fr00CODWOBhYIgGPtd+KoHzCyZ/lsHOgSM94Ig5wq0VQTqfUWgPkAVgfpQHuBZY3tvl0Mcpzb2j3X2DY198sVOKBGILdOQxdLQhT8noxO8G247c9w3Me67AMf/EKO/iDnp8EC4a5CVvUYKDtBWUK7c7qzJGtJ6hRZCNTHyzL46xwgQlAdomFKJ20Z9hffM7HisyEC9grcCKgSwXuw9Mzsa/JeUUfvIZNSwi1iC44+sib23W5mJ+2hFdtCr7Tmf8Q1PU0s1/6Va3nNoXfeZci1DmJg2UsucUBkTCk0UIa+KYa/h6kKTh36LgPZXhIOjqEgf1aCUuLKS2EdtgtpRSNwjYBf/+yBJoiersNorTL/1FIw8vKWljQDJBiXDXoM/i9ZZ8EEA/2qmMpbMisjER9PSbFJDVOECMzsa/BdCvCSH7wW3jnG928EkAzsdWxaq+y9HfEyli7h1jrl1jIVOfPf2EbfO8dZC4gOBNDHedHynHG8VmDetmpcNJUNW4bM/0EErcHA7OjJGNcSWWY4f0gxMEmJBAXhEQDt1VtEbHwbDfnob1GRAiKoJXxAV5HLAIwIESyBDiSYPHgq8hy7+6+V0WEiciQz8NQ2lUDKuKg/wiL36KcJ9ZpY0+C9Lw5Nr+DQLoTon0MnYciJMgqhwm2HrKSQ5fE+THbwlaPKNp9/RQXWJZUlwXTFnf/uAlqA9ZjWuV7QqiZEaYviGGKEhwO8Pa0dFK4TrGV1TlsCdpy1VAB5iupY3RDWyXiK9yu4HFoQJyYAfJ5LwvxlGMqbMFoEJNSLKA4IXBDTKTGWdR1mJTKQ/DWVTUFOhBPtvGSULzGlmRZ2dMeHRR2bwX4ikIgP/uQhG6lWiX/y8xDv5FPf0C2rJl3rvnmJApEYX6c/b05+nC+7P26XRhiL5V/qtpyAP1DdKsd4BOxSrlTxQXxGwldkf7d2uBmvKDh6Qxxsdl9bJyqqegh2wqSLHM5NwvGY3eIvKgNXxnM2NNAb+cQzAnnqE4O6Bf138i2D21buIAMm2rRDO6Ojr1hoiE89Og92CmkGcmQ3+mzypbGv3kV4ux+pdxIxmCGd6Jg0ZyL52FzHjNyZEEezzThr6iwExV5qNp0iUAT7DMsBXAms0ztRnqsI/96FRJHxUaId+2setNTF/78IXO942NwDuKuuM7wt0rE7t27Jz1J5NT4sMba4JiLYS2cnKLkigUqJajwK7oLt7I8YIKTRWiKyDfMWOwyB9GF3d2egq2i4UYzOu9ALqwCScenIkCNZ4FJiXAl3cKpGBW6dZmv7LKwWRgX5xzwCYq3/cAw7x/0QV67mibAayZ1Mu3Rm9U7+Ep5rlXC+ukT6dV0B3x1C3ngknJgE5MwlXLmE/sOLQv4I69C3ZD61zpcQHLEaQvbghTePIWkbjyZpYB/WAgI2ssxueAJl/b3Vv9e66lr9lpTibAYuxuYiO6DmoI//cxcW43NGoqTiXvcgBzzBm/j8FpzeFcHfHQHE2JdHowixeZIBnejl5oD4z+C/kYf3jnnB4yH/HStljJt1K0D9PP86OkfidES9uwCNdFfqxtgT99/CdOqa+GuZTNc2n0HrGnh7dI45MgrVkgEUZ4Jc7UGW854HQINyn+nJI9fUIrPpy5LxQfqMhA0apMJczoVNH7MJaMsDPHWjkHc8cCj5+hLEL30yExI7pv5A4Bfx2vBfw8wQY8OPYeaGcpiF8/eEedPH2XfqmdFFq3DdQV2zQgaFB+ofAQYeu9W1tCcJ8XKYhfYFkqLGxA21iaDu7M//MxVQ4tGYXWSb21exjRR3NMVo0s07sal9hn7TqjJpjNi+picBx4xR+PAIP3Dd0DJf1Tfi8dQ1Hm45GXZiERGXOkZuWyEQi0+gVTj7aBsmFXpBY0eC/DMIRWsIHH8F/7vkFfsGPiug4qvsuFsaNUF99g0oXCaBCcCAVYsRyY6FPj0zwSuAjA/cMcMmU+8JGT12T5EInaHBmE05cwolLoVL2saJDwquXaCc0xiz5Mre+Lllf/0HF4iMbEZ3650BHNlXBdiGcAUaj1tSgNTehWkuLRhs6lTv6x131TT1/bYNLVKadvyd2yFdghVi/EfCNBRwu+H/nGCNZeGyrCJe7GDy3jCP2FiOCcN+fsJrwGblz8bqmnnMvxulIvfhAZOLF1Wl811F4fMskgaay9kvhjOD0xeua+0wSOxr8FwKn8rYLg/x3zA5ryQC3/TI7PBDmuk7HcRZPWAb4XinWGwK55va1olwGCevMP9edd6Jb7wTalW+qD9eV2bls+oc798/shLbbIIyOlMtPLK9Kdmc/wOgn35RC9UBAIdZt1D+jD3CDjLCSKxJIufIUnOkEIl3syKRgU9feqX4IH5cNiDncHEOFuKXNYCcmJdGZaPOVyEAZYDTNqSSSrj6H+yGCbbr3jPVDeLgsvIRjYGeJJXULyVefg2TwX4jVkqy+BBM6dZuO6AXIgU314BkbBHOEB/+AuENL+oKoEBU7hjPwg9KOmEkXFfv0az/fbCHnwh6YZeWOw8CSA5OCLu7cN1POdqmMPRb8JRxDHrqW2Wk4wp+KlLXHSjsGXg/28rZL3XomnJgEFa70Yhtv9yOKcfydxDr8jNE4+59/LK7LY8zyqkxkgB9lgJ+iAhgJJ4J55wpTQ1KYiYH5W5YaGbv6Izw03OyrjdgzqalNwT51xC5UuDBJLg/URyIDn5lCMFeRe27HhDHy6CaGjvY0HO9HRSLDJJY2+C97sXMLQ9sguOMCCgcgPG/oyH7o1hSVAX61vv47xZLsvR1mGd0VskzsK2jmyX0558hNmwmvVbaea2roaGjsorCxoWO1yKVYwplNHrdCs07sqlvtQcCshsPBLSzmp5J/YyQVYj1hwv3/FeMyO9NozyQktizWkR+KTDwxtcShmPUG/4Xgqg1BFybBIRFt8AgdkBDnB4NmnBZQCtWm47aES0cGL9y9UrBnrVD3Crjv2WCFubamXDozV6OuHSn7rvwmb/92UKB3PUELda+W2ceKBoFd5g9Gz9NpCgT5Fqgzz+AWaxXlctmW74hU+l2ZGuvYMBn8l/4bza9xYVt8rOg/xn7bsD3Q1r8VOHztaoU/6Foq3RqbqaqmVp/+S3MBAA==";
function vS() {
  const e = [
      {
        text: "buy now",
        image: dS,
        url: "https://www.pinksale.finance/solana/launchpad/HUxNg8hu8eD1osfR2k2EcrCdUfV9Jcratas19sBWWr7Q",
      },
      { text: "highscores", image: hS },
      { text: "telegram", image: pS, url: "https://t.me/InsidersPortal" },
      { text: "x", image: mS, url: "https://x.com/solinsiders" },
    ],
    t = [
      {
        src: ud,
        alt: "Diamond",
        size: 100,
        rotation: -15,
        top: "42%",
        left: "12%",
        delay: 0,
      },
      {
        src: gS,
        alt: "Coin",
        size: 110,
        rotation: -20,
        top: "55%",
        left: "22%",
        delay: 0.15,
      },
      {
        src: ag,
        alt: "Cash",
        size: 280,
        rotation: -15,
        top: "69%",
        left: "12%",
        delay: 0.2,
      },
    ],
    n = [
      {
        src: ug,
        alt: "Pumpfun",
        size: 100,
        rotation: 10,
        top: "35%",
        right: "18%",
        delay: 0.4,
      },
      {
        src: yS,
        alt: "Emerald",
        size: 110,
        rotation: -5,
        top: "50%",
        right: "27%",
        delay: 0.5,
      },
      {
        src: ud,
        alt: "Diamond Large",
        size: 220,
        rotation: 17,
        top: "69%",
        right: "15%",
        delay: 1,
      },
    ],
    r = () => {
      const i = document.getElementById("highscores");
      i && i.scrollIntoView({ behavior: "smooth" });
    };
  return g.jsxs("div", {
    className: "relative h-full w-screen mt-24 lg:pb-20",
    children: [
      g.jsxs("div", {
        className:
          "flex h-fit flex-col justify-start items-center mt-20 relative pb-10 sm:pb-0",
        children: [
          g.jsx("img", {
            src: cS,
            width: 590,
            height: 590,
            alt: "Black Hole",
            className: "object-cover",
            draggable: !1,
            style: { userSelect: "none" },
          }),
          g.jsx("img", {
            src: fS,
            alt: "Insider Logo",
            className:
              "object-cover absolute mt-10 md:mt-16 lg:w-[520px] md:w-[450px] sm:w-[350px] w-[260px] h-auto",
            draggable: !1,
            style: { userSelect: "none" },
          }),
        ],
      }),
      g.jsx("div", {
        className:
          "flex flex-col items-center justify-center gap-6 md:gap-12 -mt-48 z-[999]",
        children: e.map((i, s) =>
          g.jsxs(
            I.div,
            {
              onClick: () => {
                i.url && window.open(i.url, "_blank"),
                  i.text === "highscores" && r();
              },
              className:
                "relative flex items-center justify-center w-[280px] md:w-[380px] h-[35px]",
              children: [
                g.jsx(I.p, {
                  className:
                    "text-text text-3xl md:text-4xl font-pixeloid-bold uppercase z-[48] cursor-pointer absolute",
                  initial: { opacity: 1 },
                  whileHover: { opacity: 0 },
                  whileTap: { scale: 0.9, cursor: "pointer" },
                  transition: { duration: 0.2, ease: "easeInOut" },
                  children: i.text,
                }),
                g.jsx(I.img, {
                  src: i.image,
                  alt: i.text,
                  initial: { opacity: 0 },
                  whileHover: { opacity: 1, cursor: "pointer" },
                  whileTap: { scale: 0.9, cursor: "pointer" },
                  transition: { duration: 0.2, ease: "easeInOut" },
                  className: "absolute z-[49]",
                  draggable: !1,
                  style: { userSelect: "none", width: 380, height: "auto" },
                }),
              ],
            },
            s
          )
        ),
      }),
      t.map((i, s) =>
        g.jsx(
          I.div,
          {
            className: "absolute hidden lg:block",
            initial: { y: 0 },
            animate: { y: [0, -10, 0] },
            transition: { duration: 4, repeat: 1 / 0, delay: i.delay },
            style: { top: i.top, left: i.left },
            children: g.jsx("img", {
              src: i.src,
              alt: i.alt,
              width: i.size,
              height: i.size,
              draggable: !1,
              style: {
                userSelect: "none",
                transform: `rotate(${i.rotation}deg)`,
              },
            }),
          },
          s
        )
      ),
      n.map((i, s) =>
        g.jsx(
          I.div,
          {
            className: "absolute hidden lg:block",
            initial: { y: 0 },
            animate: { y: [0, -10, 0] },
            transition: { duration: 4, repeat: 1 / 0, delay: i.delay },
            style: { top: i.top, right: i.right },
            children: g.jsx("img", {
              src: i.src,
              alt: i.alt,
              width: i.size,
              height: i.size,
              draggable: !1,
              style: {
                userSelect: "none",
                transform: `rotate(${i.rotation}deg)`,
              },
            }),
          },
          s
        )
      ),
    ],
  });
}
const xS =
    "data:image/webp;base64,UklGRsoLAABXRUJQVlA4WAoAAAAQAAAA1QQAdQIAQUxQSAoCAAANHLNp29j/3520XTtFxAQQPcbnzVQpK+BItq1a2fe+70bkmrnGTMBdMmcATIE5kDq5ExIREbuTubs9PeitF6GnioiYAKBA/P1HEZFQHG0H7zrWAncfQszLDVwmwby4bmvMi+1CQqp06BDMa0IqIJ39E5XOHkgB7rWuF4DsG1FxbC+YWFODqqUJLobs93KkIew7E1ysiI9oJD36nHYtno7AxnpbqwPkD54lIh5hMLJJSZBAKnhanan597///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///3MWAAlHcjKOJAGa9R7BySsRXAwtrEmE4k7KTBBKu31cjDE0b+H+Gu9GDXCxInIL9lZ42BivRSo7W74nKspkXnYXBQWMLKhODehAezPzMtNPeIKLITCvwUdwuh7uxWu69BjUfzn4PwX6Lwa/DmVWUDggmgkAAHDVAJ0BKtYEdgI+KRSJQyGhIRCoXCgYAoS0t3C78P98+Uw4785XK3eYEY/43fjXyMRmp1K8wHvy/s3sA24HmA85H0AeQBwAH7AelN+xnw7+SAAAa4AtRnbm/DNya7zfhm5Nd5vwzcmu834ZuTXeb8M3JrvN+Gbk13m/DNya7zfhm5Nd5vwzcmu834ZuTXeb8M3JrvN+Gbk13m/DNya7zfhm5Nd5vwzcmu834ZuTXeb8M3JrvN+Gbk13m/DNqGkXRySsj9pf9h/a6+Zi9kE8zMXsgnmZi9kE8zMXsgnmZi9kE8zMXsgnmZi9hBaHrl7PN3pnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1ptJnOntTWDNKMgueIFBkFzxAoMgueIFBkFzxAoMgueIFBkFdNqrO2PxWZmL2QTzMxeyCeZmL2QTzMxeyCeZmL2QTzMxeyCeX1pqhhWUF9d8nCGtujT+Jbo0/iW6NP4lujT+Jbo0/iW6NP4lujT+Jbo0/iW6NP4lujT+Jbo0/iW6NP4lujT+Jbo0/iW6NP4lujT+Jbo0/iW6NP4lujT+Jbo0/iW6NP4lujT+Jbo0/iW6NP4lujShTnMIQdGZuWaoLlmqC5ZqguWaoLlmqC5ZqguWaoLlmqC5ZqguWaoLlmqC5ZqguWaoLlmqC5Zp6hBJ4AD+ws57XmjAhYAFrrc9zt/MVb39/D1AYUXdP/1qQTwen//b+3QF3f/64+KP3/9oya3muKKJC8vGvfy2nP4kf3bDqMbf6cinrN/pyKes3+nIp6zf6cinrN/pyKes3+nIp6zf6cinrN/pyKes3+nIp6zf6cinrN/pyKes3+nIp6zf6cinrN/pyKes3+nIp6zf6cinrN/pyKes3+nIp6zf6cinrN/pyKes3+nIp6zf6cinrN/pyKes3+nIp6zf6RYFVNU0FPE05pst375WIv4mEprlliWDOb/+94vzPw8RHjL7gsyLQozz//ll2/ItHu4DO5ggLZroDL/8giP//tCXhVp88aAvu3Hi718ZOLfvBvGkVKMSDQj1xNd3X44EeCC3UojaubNSGPNlchBXuxkP7E+uFf6AAAAAAAAAAABKr32vCKEBdqzEbJqMsgHOunWBUU2MJUpvLth4pT93GHey8txNXSqVSPGvQYMxvNGzxU+QHxM6gAAAB/AV/4L0gEAA173FgUC7AAAoahAQAEhrgAAy+EgIACQ1wAAZfCQEABIa4AAMvhICAAkNcAAGXwkBAASGuAADL4SAgAJDXAABl8JAQAEhrgAAy+EgIACQ1wAAZfCQEABIa4AAMvhICAAkNcAAGXwkBAASGuAADL4SAgAJDXAABl8JAQAEhrgAAy+EgIACQ1wAAZfCQEABIa4AAMvhICAAkNcAAGXwkBAAFCY6lWMCpPkGeiRBOOpIGmd7yuzWRB89GJCFeElQ9fKJ43kTc2maOmUb0TnXT9tU2C7ZuUpSlKUpSlKUpSlKUpSlKUpSlKUpDwHdl59G1I+ODcPqPBCH9t8YBqJrBNfa579fHRRfGJGSl+LlcwYRy3l7TK9r4xIrke7PkXX82WkT8i6/mt0CyauctO09ScAAAAAAAAAAAAAACurnfnpH+Ya87EaOHtMrnp9s//XsewQeI6/Vr4OYSWVA7NpQ/iBR//887HuU4AA=",
  wS =
    "data:image/webp;base64,UklGRrAPAABXRUJQVlA4WAoAAAAQAAAASwIAXQEAQUxQSEcBAAABgBzJturmBSKZo3j1g/kZmNnCnZkZlpZ2Vg43kbeywjBdi+HW+XAiYgJcp0dftvjibLdkDKcpdTvGcGg3Be+9fzKGhvfez5nM0ZdVvphMySxOEz87ZnFoLF59MouGV83ky0bpv5wo5vgOJXeZOFdQ8hF1uIQfHTeh5CG15AZKWtHfJRDRm1DykNdE1AAi+jKUlFJL6uhx01ksIhKAoxWpmroMHP92VMrEqUNJCUoc/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X+ZcvI3QEZb1M7UZcg4db0uQcYD/TdYdch461ksfwNMtOXvRs/0ZZg4dYNYgokHuKnDxNtAxNJhAIRP6XBjIDpeBoRjN7wlQLjLOKoDwssQlQDhrmcAVlA4IEIOAAAQdwCdASpMAl4BPikUiEMhoSESKQSAGAKEs7dwu1iGcA/vX5K+SjRPnn7Z+TP5c9LFzP4n/p30c5H9+vJt8k/Lf77/cP3G/tX/////4B/vv879mf5i/2/uBfpT/lf7L/g/+N/gO4t5gP6P/ef9Z/qvdo/2P+9/vHuX/vf9y/1XuAfz3+0esh/jvZo/aH2Cf5V/fPVv/0f/Z/xP7//R//Xv81/0v9N+//0P/rP/yfzu2aTxf/Q/xA8G/79+InRTSnqIv8H+Pvsl/gPF/ao3gLiv8/7rORC/1nlM/1Xx0Zj39s9DnRnm3gG8BGpg2TSO6wZQi3Iqw1X0gO4AXZENAUBgikV2kXblqv37WY5kaWXCaxhFs8VGhxwqn69wEZAxuU3lCvOJQHIpnBk/ODJ+bgz482D+1quIQmbt6DEGBrnpAhGnQQCuOSLK1Q9STgXH9lyE2fZSgGWTRnjsU56p2BpPfBWfvNyxv77Q8RTllbHRqLQEldVTKqiLYtnvCCyKdUyuW894fIp1TK5bzrFBF6NtZJTcSOE9qordRR1fqhT7N7BT9laE2ocr2WAaTDw4h9q/RCldsYfQdTw0XMUrTthbkzeFZ1N3kUUWXPI0++175Eg5x46jhE3d9U18I3J8cmJPZtOESqoWnCJVULThEqqFpwiO2X7dBM94FrTkzEfqINkCeF5ioNnvCCyKdUyuW894fIp1TKnxYVQf5wZPzgyflwXrXHiieMbry8c4G2JwNsTgbYnA2xOBticeF0xJBPO+jsEeZ8GT84Mn5wZPzgyfnBlCW0m3m+xOBticDbE4G2JwNsTgbY8IKc+ZSYnA2xOBticDbE4G2JwNupctKIX8sTgbYnA2xOBticDbE4HG5DcIYIG2JwNsTgbYnA2xOBticFSuR5eOcDbE4G2JwNsTgbYnA2xOPLECMOAeBticDbE4G2JwNsTgbYogzQoE9hJ+cGT84Mn5wZPzgyfnBu9N3/aVePM+DJ+cGT84Mn5wZPzh5c8lEL+WJwNsTgbYnA2xOBticDjchuEMEDbE4G2JwNsTgbYnA2xOCpXI8vHOBticDbE4G2JwNsTgbYnHliBGHAPA2xOBticDbE4G2JwNsUQZoUCewk/ODJ+cGT84Mn5wZPzg3em7/tKvHmfBk/ODJ+cGT84Mn5w8ubuSaruiDDQx3UXuWakCSvzPgyfnBk/ODJ+cGT82itTh5IM+/HOc3zg8782SThEqqFpwiVVC04RKqhacIlVQtOESqoWnCJVULThEqqFpwiVVCqAK/LtAAP5FvN+riTBCYkXMR8YZ2x9TgVXJgIdnk5Jk7125Mfr8TQHVHjlwt/hmf1dymyE6s1eLE/tf2DgZ3FXQ0rZAgWH78jX4N24ZByRZ8HdGpTGekFJ5BnP6UB0YQDkFGXSS9PKXE8I3WHRLUgknDk0XPvQjLPdjitU1OZ6p312AyhaSnS5gYgsC4bmvXwbqLlQxJNpUgkadNAHYxYwUTOjhH1JZW61fpk6uSdKjTpNurFukDWZng1NjKZIY0XSCNfODkuxgw/eJnYJ0B4U1X8qciVFDmnDTjrTV95bCWkREMqZbhXbZWLPTz7hFhSpgoxMDpVg279qzGHalnhlwfLOEV6oe3dngsNcVM1M8Y6BUmXqTjopeKrjSSxRNutCejv3GeFNyllXIk5GZS+WwtU8e/7Bq7VSGlX5C8s+UAVzKA84xyQuW704lmMjDAtaKK5Dvji+Fz9uhIW5XExyoZ1KiqODeXU8dZCaexNsaLN9hBEZUm6IhcclSPbj63Yi+tqxT/13Dpug+egMu06QF9DI/2YyvW31e2KTrhq2SkOB+1Bk1AhMj/2eanKixsnrWgl86OG+7SzVbxQwoqbMxZE9Sv64mF7E0xvLODNIYu4ZDuUaKgRWWs5JzHPF+lJyBOTbo3cujS/R0xCkVkpogHtO2MXqXaG42J0P0Mkwddmz75flyWe4S3HYKg7eIyHBk1btXr+iiWKs4YWC9ulTSyezyA7Z0hX4+GJ78H7GqNKXCX6+TQP5dEpajh9XJEn2T6Cddv+f4/UBRSRhA2CwBTrPGLbJTzVJLAB6HPAg7ImnbhNPqxPRPvE9MgNKEKe0/82D776Kv/7STk0DkWaRbXUmaE0J3jIegHopsyAw/J7HaX50OLtzFzQLw+28vMGBKVeQtheDcCZrO+FhbpkwE1L9Pn6WbqzabMoSvM9L9ztG3j4oyk6+OW5ysf7lyCbasgVO5djS1VvaG+fVVpavZyXhT0X9Uarq5taTwYyHbfjhZPzNQxVy0BLJzYQ+SqL1OhJdlu2ZHIk8a0g1y/d8tLfiLYibMJh5+WZ2xLtQht/H8wmzMC9T29FBOb7T6FuefpIIB5YtLH9ceGD7/Y2swqlNV8ccq2f1M51fxTdnhUgPEyw/kz0jc7Jlx9khxn6/2GUkB/uFG7QvkOsJy/d/1QpCq8j7m497CzpC/eYbUN2Dzh6j6nwP9AduCwn465fSpbF4VewFzsdSQnp39szva3L5oQFdu+462hbYGEzDzvkBHNkYC9U6w43ytGrIjdPC41zHAC+o07gLLq3OqLVAChGy3mIWYQ+zGLekSENRRUJ/dOpRenMnlNW6fgHhqnHHFEqE5VZ3Tjkl5Kkr/rOlHFvEYGFt14DXFnOl9LCOCCdpkIkL3FkUjTNfa2y/yScS+2QuTOUCNosJJ1qf1aWgqwCUmEfIrDujbu3Nx16iwHbm6aK3Z6/05LhWMGJsv7pF9bNOPjW64GKnhndoHC2IiD52S72mQbtD7KBtzV6uw0XXH1k+ZdEZMfPBZi7gqQF2OWtgDYTgQ+KS/dJ1b1rZ9HeerILUkK/79uRE3bmvO6opVHx91PoQInfHhRoWGuYS2b7SI4NceRIOLkW8in8iQcTum3vgroZZLym+wHSOm9i/0T+jBZrgoInuSWgjJIA8UL1sPeRhTjOxh9cNghK8i6/qLMwGedvXJObp0h80H2GmaGaTcvbhdke3+j3T3HAe4uSz86wPqw8S04jqXbs5zuwXlosgmgNTgS3glqMoXLtrHgkHn7NwLl66vV1Sf+GzLlvnvsdPUIzLoOj+yJokysWZ/4cCFVKdl9SHxjC0RUa0MnfIAni5oJviSmsl44P8WNeYDtrQhIyuXcx+sAQTTVNi4jK8re57B2wEaDZwdphn63ocb5/9RT74uReJIUu5mkGaoSpM5gZ9Z83ivD+afcoQT2SBMl1B25YTf4nO61+dK0YlNvHSbPfSbPfSbJ5miYJVSM3XPAqs1XD3f/SLpP/exzjgxzYSJKOCJtEXCXlbS2c0/cgHVMOi9vorklUzYEFeyYlXYmQkBlzl9lGvTQXXRTQ1U25ET7KuE74/Hp4Umwip/OUB0WZcqCW1ICsng0S7jWDU8sPsnfdOuB0/c9CF0CXHH9bCLaSkRJb0DqX93TkXN8SVIy5Wl/+RSUDWbR3nTdKvl3sFOPSG8pEjEObsw0YDrSJSMpNcTBtFh6aM9TEBfWXWO4Yho7nBEppf9gTHirCT2k2IfIz4prrUZNct8zdnI9pd2sNaraTLHih/6DteoDQXXLghhk5EWA7QDjIGTnflu5/BYUYSEDz3UBMXdAvJdJNcex371xXq+w0Oij9v6+j0f7MNs3eeiQgyGPmVyJtiUop5j1AyCjU6ei3RfezZYewFtHSw3NNv6qdR/HIT9OL1ncFi2hn1qQlhIJ1HjaJ4VYh1sTndNmO/LZMTIh8iw3pCrMdwW6vbo5C4PP8fQoTr7Y4bDCG+r5P4FajUyDg2luulVrw1NwscLKTL00cZCiiGWTtwqmpohf5ktlEZeKwJ6nNsYvXwp6NrjTdCP8b5g+Cdine+QnzkwIQbwgnJL9lW/USE+pbiTAOb+VeWW772xK7Cdc4iEibkg7VnCSCukowPJ3BCRsMEpvUrdCaQElL7M3MoSlqNJJKS24Xim51c6/cs7DMwQJp1FZ8JDY/fYEtn/JdEROZUXqSl/ST3NnT/ZXAi5LdhEdOA7IOYtGQc3czF5ejJsednA0pms90wUIVrgY0NP2eyNhw0BLUfPW0M/+sUH6GrnxheA2RMqgUl1OP17pmHuvrLKLKuXtrxRLePUspicOo6mG6/eDUS9365f3GBp3Azz0pkUrZfmrfDRM/qrh4KwWficFrpJ3z7fo7WemA77W8oAGpVNxR4LV7Cd1KVUgB/nmKijAhJfxHB73ay4/LeNKPngIhSIoKDY/vbd1j4tCj6uuxA9NMe4PMDPRJM3qtLOR3c+qzyNIzDN6h9rzhqvwwI/DCnGamMa2iR99ndfcflBOJ7HYwlxgdYQ4nruei5AbZu1J/UcPS4s3esX3+GjSXUNG7PmABKy2VAEi+GvaJXQ2yuo8nTCXVdAT0pJDZZgAAO2TciEJIsxemjyxVu5md/U8JRDPO2GGRVacGawviECIpKx/toTcWQAbWe8b5KOq15txunUBRlOcaAANYIEmTFIh1ALgGD3AAQGY7hTABh9nww0AOMwznzACRZpc38AYmOZMNADiNIt8wAkgbBq/AGH2fDDQA4zDOfMAJFmlzfwBiY5kw0AOI0i3zACSBsGr8AYfZ8MNADjMMv7RT93LE1Zn4XN0+uZIjNZOZB/oyd/rAaiRAHChZsFi2jq1zEf1HkvYRxPzFOCUQVyjDLRW7naAA6y8NVmN9uSI/MXxg4Pshc/YM4SONVDugeLFZ9VZyACX/W7pNpq31uf0a0f/tq3ugg0tq3xN8UH6g0cy3siXDSC3dtqcBG1UwWIc1NlfVtPeHNx3Uy0V8B8xmm5beUux2Ox2Ox2Ox2Ox2Ox2Ox2Ox2Ox2Ox2Ox2Ox2Ox2Ox2MHBdMYLeYH4XWTkbXtyV8vQlQAAAA==",
  AS =
    "data:image/webp;base64,UklGRrQPAABXRUJQVlA4WAoAAAAQAAAASwIAXQEAQUxQSEcBAAABgBzJturmBSKZo3j1g/kZmNnCnZkZlpZ2Vg43kbeywjBdi+HW+XAiYgJcp0dftvjibLdkDKcpdTvGcGg3Be+9fzKGhvfez5nM0ZdVvphMySxOEz87ZnFoLF59MouGV83ky0bpv5wo5vgOJXeZOFdQ8hF1uIQfHTeh5CG15AZKWtHfJRDRm1DykNdE1AAi+jKUlFJL6uhx01ksIhKAoxWpmroMHP92VMrEqUNJCUoc/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X/0H/1H/9F/9B/9R//Rf/Qf/Uf/0X+ZcvI3QEZb1M7UZcg4db0uQcYD/TdYdch461ksfwNMtOXvRs/0ZZg4dYNYgokHuKnDxNtAxNJhAIRP6XBjIDpeBoRjN7wlQLjLOKoDwssQlQDhrmcAVlA4IEYOAADQcgCdASpMAl4BPikUiEMhoSERyHSEGAKEs7dwu1iIz6/qP5Y+JnbPoj7b+Pv5gfOjX/7H+Gvla/b9+fR/k+cef4z8x/899Lf6v/Zv5L+4fyt/Pv+M9wD9LP8t/gP3J/rvci8wH9P/tv+q/yX75/LP6EPQA/kv9l/6PtJ/8f2iPQD/k/9y/8Hs2f6D/t/6D9//pD/r/+e/7f+r+Bv9Wv+R+eHcAdT/09/rHaZ/Z/xT62T1qey/afyn9jfBXaV3cbkH9T7wH+w9D+5E8ADygKA38o/t3oi6JQC32AQvMuKH5EKDDwNuiVePbPcDiWZ70FIez5DNM/Y7L+4vwOYAnfVvmI78XKUbmI5PHz/b6D0m/kPAlUX67zLPSTG9BD6gh9QQ+VZ0D+NyOSbIYlDpm5ZHfC4JDxBU4IoZ5cFPlJrkaWoyPmQObSnvLghBD3Gq+9HEUTKpAcagyMYgc4epZ1Wo+tdgd11ULnj1QuePVC549ULnj1QuePUmKR48P3eSk9WI/YrPiDPmO/Tga1CiyEMjep6szr9Eo9e47pwGBj5bEohVpEpOh3YF1dMo0RnU2n9n5A0psu3iDs8e8sQYT0aEKHL26WAOmob+Pp7UrPecKk9CqVnvOFSehVKvAagcaQXIJHsL8PzubDz98kx9qwqeWFAZnWLnj1QuePVC54oVdN5V9hW+wrfYS+LKg9ne2hs7bf2D1ULs+oIfUEPqCH1BD6gh9Q6p2xJ0eQ8nReTovJ0Xk6LydF5OjIaeGTR0Xk6LydF5Oi8nReTovJ0sOAnjAKQ8nReTovJ0Xk6LydF5PG2xJ8aS7Ct9hW+wrfYVvsK32Fc6/HizXWsbrWN1rG61jdaxutY3YeNpyAm61jdaxutY3WsbrWN1rG96twJ0dF5Oi8nReTovJ0Xk6LydLDgJ4wCkPJ0Xk6LydF5Oi8nReTxtsSfGkuwrfYVvsK32Fb7Ct9hXOvx4s11rG61jdaxutY3WsbrWN2HjacgJutY3WsbrWN1rG61jdaxvercCdHReTovJ0Xk6LydF5Oi8nSw4CeMApDydF5Oi8nReTovJ0Xk8bbEnxpLsK32Fb7Ct9hW+wrfYVzr8eLNdaxutY3WsbrWN1rG61jdh4zimpVEYSLDFjLt7Bi7kdDg269OnFIeTovJ0Xk6IYgYjjOKtyHdngzYBj8VuEmFCqVnvOFSehVKz3nCpPQqlZ7zhUnoVSs95wqT0KpWe84VJ5Oq1hIAA/txldTEYY5xtXOgglZzwMes8xLCKirlLYMPY3wvjsr+iXqVTBo8DP4axScIr5uslFXG39sHG5jAVdDR0qqu3vsj5HZO3tl3oUe+SV5KzMHFuHlBi5LvWbl9ayeY+vF3x/f3mhUUzJcfmo5HsaZkSPHTNBzL9y6oIUP7GdLGK4CMs/Ah8PAuAmO5MY5jZ9CFpTSBluS9hiZDyayDf7qGl63uEtJUu0ZaSRLzmQFdUQrQPjDdZZO0r/9XCPuB1OWG3NoaI9JkF8yUnCIQKtDAf9OKzfcrHGH5RgrHkUM+dZhlp9+HEElBTOHt9W7FaIoxBEHRutvzo4S0BBYIHjkEvkRipCRQfEuYkvI4itmrNlgImnRvCI6fLML5fN4Mhr3n1xdqiYFwIiEzpsTBADmoeRYCX8P+oJXv2y9bG1jrQiuZfuXUZOUfvylstIshUIV3StPHCvkKYeJ+dg+ZfAviaUaUcDcfpO7l3qJUf3X36P9tRZsq4L0QZ+e8kDkUUscba/dnjWC1zsolP6IkbQPzG8r+7uuDjswM/sQgyG2SpvcxOXT9qqMkOOhYiy/SYebxHz3Aetp4nqu2xdT0kF3PqcpYsjYwQZADt9kqi07VOh/kbKy9FWO+hiCmtFrq4niD1KSHuKJhGSYWvuYaIlNzVhHEKFrEZIdYNH932hFSH/9PSLFm7pNBuYW7g+gMShuj9kbmQkyKEUVwZCsIdvTm8qDrK7xoFuiOX4bbSlnlvUm4YIju5YdtqYnh2ETyoXIdG3U5/1r2uEkVczpdFEP+BnQN7/gmr6I1ltMsupnv4HmlY/hmLGFFH/z6Re/NT6a/yH47v4ccCqTxHhQOyh72UKAMEZzen+PS7+lHW7jfvUW9p27jzvP/yh+a9q//9pKR6367+Wch0AX4+MOXNIuA9lNmQGH5ZdjIPY4o5EeOEzpW0jtgQteN6UBjVECnZMEtE+HpMAy0Kgam/nys5bwXh34TkK7aJWnumhOc4fBRgFiaZRmPBXYagTDytl/EUzqmfXBhwjymHv+PaKLOTjcHecpUt8gtCtU72lXwMLR6KSTd492JYJdXZP13cewjNeTL2E6CWqdlszqq8zKy6KHS4PoOXxREq+ZBByoNRQh024USFUlw5yr1HcYVCw6ackl5BJ9xBVy3NbpujvsZLfO6HWWgM7lWhWN1s/oiOYow79PGIhsGdZjm1ZXduoRs7tUVD73NXB7GMmZQx2peMlYsXSlvazJxtadRRFAYewjvro9YDnpR7Keh4GG4mtoRBRGX8pP03odarh//xxF9JBtCY8mTDLEiKtYLC9voz+vY1/q1FHWNnvtXjb22ETq8gury5IsMCLTVU5BUYNAsqThICMF2d/gXRPDpTo6qrJHKUBn9YcOV614IIKAovwaFCiYm09o5YqCoKIa+w2/kcsmVLj1Cumgff7MgM2H+BqXjCmLTSE+ZNZUeAJff/JtS93EngLoxm+V4Dp6RmuzpRIQlf0e0K+yOzfYlScJHX9OtVePPnWwQkY+sFRF9eHOxt4oXeOM0FJB2L1LzXn/M/8uiwiv+pqfU9GKrLSH+BHTfme0EPfDSx6Ajt75Ym7ldLji8flnc84xK/KPupYOTi228/yU33XXmxBURRIiTjBq7xExheNS0SABfq+x7hg8p6foAk8yykdAeFqHOS1xKrbCo5bo9gdiJGh70DJwmgBuzWlRA5VFHBHa8psSGb4gM8+Hyds4CtnGxZk26zGMufHenJPJvu3lFgwF8ns1Gj2GvVYSJRrEjx+eVGBAsL9xy637l6anLoQM5OYIAH80zNOo9tbxXVG7eRSAEjcJWr38OWn3njFlTKf583Px6u2lVjiInjNkmFgtL4mDwnjQsGXQ/UXWSH5BMaup8T0SwazlS7ieOZ76cfcbYzjcKYF/9Hp7yJnPHRgoAGhxM+zqGR6twSwdFAy+dNAV43jmWvNJhSBq6baF9VyEUB+t6BQ+H/BvpugtIKPLWgy50rKuHSMygbikS3oAJUay4KK4LUhzKyq/AzPSGpMmfoD+VUlwLPC9TdtcHVoUcKyaY6i3/6Rdv/7sRV9K5trEqMV4AheVb0zSNOq4ZNH7sgaroe+qda+t0bcw3chWF0TalnthL/9RzNNtqbIrKQBwr8KncCoGYRcbt/br5FJ8C1pIzn34TSVJ/V9I6gsqFf7l5Pky+8026fcsDk2PR3aIhjHE0LxLouR0d46iLYeKC6Jekf4akIKV8lHjTEvTfg2ha9x3yEJ4KptgbWkLTBW8iMLtrT6+7NdoZTs9SCBBPip8999Y3BxJfO3/XUi4Pb9toQaMf/QqTl4HpIPQ1rxYVGs/fg/yskfhTDB7OqzSvN1CCmMmFp5ggnCOoAGqUqkPQ7P/6ojvCGtG44MMwUMzUKzm2y+a6N7wuxYmeFYeSoKE0AIv6Yu7qkiKLzzw0SGzMkv3nodbI6lirov0BhuqcIuOJ4hn+0bYpgWq+Q+IWJIftWjCEuxFpJz/qyQbSSPc4bSWm71Z3dVnLPyij/ZNEGGKdZ+xs6D+tkadYmjZLSsgh2+faNlAULUSUTr4JzlcZNc7+7/mowDJauF9hu/s6iOdQ3dgkeRalpfZIFf7RVNmTqSRl4aE77l3Bo1zNSSEbBYsiwy0ugnVBGX3CY7YuXXA5YlIbaffWbnT/mmkEUp5fIKYWlxohYHYsaS5t0o/+9ck6lqeiewZJChVbIJ+xEsWJW5SHEKkob8ecToppfDqMWXfmrY6dFzU82FIyeLjSjUXrFBnhJvHkUVotRnzoOX46293EFHyetV+JtT/atVNGV/9OWOac3DOxYpI+W3XMFJO69ui9pWBgTwrNjw9IMtw1b8UwMU0QPcLP41LK6/ziWJcTS7xHRBPCLhEzS0hSlApspRojYD+D1wliFHLUMgxfkCTa1P9IO5Q3uN1SDmVhPRX9qaLp9l4eL821HNfGqv6hKoX+OHRH53T8HDj5f/dSs81oWY7gqerI952QUa4/wMSVa5dmwbkgs/viIa8yvKbK6DTKH+KcLCT9dvz+k4PY2EKB4ls64EW9UV/J/D7ulQAA972+4h6ZLso/e+cjclyuK8rpwZHNpqUnuIADna1yrMf/c5LiXT3yZD9q+l/+oobHhJzjPWnrhsZvCoi4IzgjNn8pRS+Sy8bqWkFIK+YETtu4CTc8qVxzAAEJMH5J6NDzN9CePKfsAAt7M/E9OlAB+ej8jOzIATETjtiaZACWGQAeLTIATETjtiaZACWGQAeLTIATETjtiaZACWGQAeLTIATETjtiaZACWGQAeLTIATETjtiaZACWGQAeLTIATETjtiaZACWGQAeLTIATETjth6GizOInWnj7WKlP1NUzp59hJOBL7CR8XCr2MHENULt8Yf376wKlVJDZpz3+2m+nY3DgoJeAC5c/IgCtVOM1zbcmuSRU19DwCeI/fR5mKDqZMknaKGnLlV6VYQ1Ctvc3eRrKe6OoLv3QNTQDm//IIg9B+QcUM7TDrDvNKs32r9vhZFkmiaxfh1uVDJeMw5reu44LRwf026mWn7MPm0J4v7WkdMCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwLAsCwKTjkBl+WXSEfdQLQ+lRQprKwAAA=",
  SS = "/assets/third-card-DvIPF7oU.webp";
var ia = new Map(),
  Oi = new WeakMap(),
  cd = 0,
  TS = void 0;
function CS(e) {
  return e
    ? (Oi.has(e) || ((cd += 1), Oi.set(e, cd.toString())), Oi.get(e))
    : "0";
}
function kS(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === "root" ? CS(e.root) : e[t]}`)
    .toString();
}
function PS(e) {
  const t = kS(e);
  let n = ia.get(t);
  if (!n) {
    const r = new Map();
    let i;
    const s = new IntersectionObserver((o) => {
      o.forEach((l) => {
        var a;
        const u = l.isIntersecting && i.some((c) => l.intersectionRatio >= c);
        e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = u),
          (a = r.get(l.target)) == null ||
            a.forEach((c) => {
              c(u, l);
            });
      });
    }, e);
    (i =
      s.thresholds ||
      (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (n = { id: t, observer: s, elements: r }),
      ia.set(t, n);
  }
  return n;
}
function ES(e, t, n = {}, r = TS) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const a = e.getBoundingClientRect();
    return (
      t(r, {
        isIntersecting: r,
        target: e,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: a,
        intersectionRect: a,
        rootBounds: a,
      }),
      () => {}
    );
  }
  const { id: i, observer: s, elements: o } = PS(n),
    l = o.get(e) || [];
  return (
    o.has(e) || o.set(e, l),
    l.push(t),
    s.observe(e),
    function () {
      l.splice(l.indexOf(t), 1),
        l.length === 0 && (o.delete(e), s.unobserve(e)),
        o.size === 0 && (s.disconnect(), ia.delete(i));
    }
  );
}
function fi({
  threshold: e,
  delay: t,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: s,
  skip: o,
  initialInView: l,
  fallbackInView: a,
  onChange: u,
} = {}) {
  var c;
  const [f, d] = T.useState(null),
    y = T.useRef(),
    [v, x] = T.useState({ inView: !!l, entry: void 0 });
  (y.current = u),
    T.useEffect(() => {
      if (o || !f) return;
      let m;
      return (
        (m = ES(
          f,
          (w, S) => {
            x({ inView: w, entry: S }),
              y.current && y.current(w, S),
              S.isIntersecting && s && m && (m(), (m = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t,
          },
          a
        )),
        () => {
          m && m();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, f, i, r, s, o, n, a, t]);
  const A = (c = v.entry) == null ? void 0 : c.target,
    p = T.useRef();
  !f &&
    A &&
    !s &&
    !o &&
    p.current !== A &&
    ((p.current = A), x({ inView: !!l, entry: void 0 }));
  const h = [d, v.inView, v.entry];
  return (h.ref = h[0]), (h.inView = h[1]), (h.entry = h[2]), h;
}
function MS() {
  const { ref: e, inView: t } = fi({ triggerOnce: !0, threshold: 0.3 });
  return g.jsx("section", {
    id: "about",
    ref: e,
    className: "w-screen h-full relative pt-24 lg:mt-56",
    children: g.jsxs("div", {
      className: "flex flex-col justify-center items-center",
      children: [
        g.jsxs(I.h1, {
          initial: { opacity: 0 },
          animate: { opacity: t ? 1 : 0 },
          transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" },
          style: { textShadow: "5px 5px #dc8e10" },
          className:
            "text-text-secondary text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-pixeloid-bold uppercase text-center leading-[114%]",
          children: ["What is", g.jsx("br", {}), " insider?"],
        }),
        g.jsxs("div", {
          className:
            "2xl:w-[45%] lg:w-[50%] md:w-[60%] sm:w-[70%] w-[80%] h-fit mt-8 relative",
          children: [
            g.jsx(I.img, {
              src: xS,
              alt: "insider",
              initial: { opacity: 0 },
              animate: { opacity: t ? 1 : 0 },
              transition: { duration: 1, delay: 0.3 },
              className: "w-full h-auto",
              draggable: !1,
              style: { userSelect: "none" },
            }),
            g.jsx(I.div, {
              initial: { opacity: 0 },
              animate: { opacity: t ? 1 : 0 },
              transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              className:
                "w-full h-full absolute p-[2rem] top-0 flex justify-center items-center",
              children: g.jsx("p", {
                className:
                  "text-white max-[375px]:text-[10px] text-[12.5px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-pixeloid-bold break-words text-center",
                style: {
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  lineHeight: "1.4",
                  maxWidth: "100%",
                },
                children:
                  "INSIDER is a game which primary focus is to launch Pumpfun projects in order to give its players opportunities for profits. Being an INSIDER means getting in on the action early. You’ll get exclusive access to these plays before anyone else.",
              }),
            }),
          ],
        }),
        g.jsx(I.h2, {
          initial: { opacity: 0 },
          animate: { opacity: t ? 1 : 0 },
          transition: { duration: 0.5, delay: 0.7, ease: "easeInOut" },
          style: { textShadow: "5px 5px #dc8e10" },
          className:
            "text-text-secondary text-3xl sm:text-5xl font-pixeloid-bold uppercase text-center mt-8 md:mt-16",
          children: "The insider ecosystem",
        }),
        g.jsxs("div", {
          className:
            "flex flex-col md:flex-row flex-wrap justify-center items-center px-16 md:max-w-[90%] xl:max-w-[60%] gap-10",
          children: [
            g.jsxs("div", {
              className: "flex flex-col md:grid md:grid-cols-2 gap-10 mt-10",
              children: [
                g.jsxs(I.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: t ? 1 : 0 },
                  transition: { duration: 0.5, delay: 1, ease: "easeInOut" },
                  className: "w-full h-fit relative",
                  children: [
                    g.jsx(I.img, {
                      src: wS,
                      alt: "Reinvest",
                      initial: { opacity: 0 },
                      animate: { opacity: t ? 1 : 0 },
                      transition: { duration: 0.5 },
                      className: "w-full h-auto",
                      draggable: !1,
                      style: { userSelect: "none" },
                    }),
                    g.jsx(I.img, {
                      src: lg,
                      alt: "Insider Logo",
                      initial: { opacity: 0 },
                      animate: { opacity: t ? 1 : 0 },
                      transition: { duration: 1, delay: 1.2 },
                      className:
                        "w-14 md:w-16 h-auto absolute top-[-3%] right-[-5%] md:right-[-5%] md:top-0",
                      draggable: !1,
                      style: { userSelect: "none" },
                    }),
                    g.jsx(I.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: t ? 1 : 0 },
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                      },
                      className:
                        "w-full h-full absolute p-[2rem] top-0 flex justify-center items-center",
                      children: g.jsx("p", {
                        className:
                          "text-white text-sm md:text-base lg:text-xl font-pixeloid-bold text-center",
                        children:
                          "The main project INSIDER, Experienced building community for early access.",
                      }),
                    }),
                  ],
                }),
                g.jsxs(I.div, {
                  className: "w-full h-fit relative",
                  initial: { opacity: 0 },
                  animate: { opacity: t ? 1 : 0 },
                  transition: { duration: 0.5, delay: 1.3, ease: "easeInOut" },
                  children: [
                    g.jsx(I.img, {
                      src: AS,
                      alt: "Reinvest",
                      initial: { opacity: 0 },
                      animate: { opacity: t ? 1 : 0 },
                      transition: { duration: 0.5 },
                      className: "w-full h-auto",
                      draggable: !1,
                      style: { userSelect: "none" },
                    }),
                    g.jsx(I.img, {
                      src: ug,
                      alt: "Pumpfun",
                      initial: { opacity: 0 },
                      animate: { opacity: t ? 1 : 0 },
                      transition: { duration: 1, delay: 1.5 },
                      className:
                        "w-14 md:w-16 h-auto absolute top-[-3%] right-[-5%] md:right-[-5%] md:top-0",
                      draggable: !1,
                      style: {
                        userSelect: "none",
                        transform: "rotate(-90deg)",
                      },
                    }),
                    g.jsx(I.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: t ? 1 : 0 },
                      transition: {
                        duration: 0.5,
                        delay: 0.8,
                        ease: "easeInOut",
                      },
                      className:
                        "w-full h-full absolute p-[2rem] top-0 flex justify-center items-center",
                      children: g.jsx("p", {
                        className:
                          "text-white text-sm md:text-base lg:text-xl font-pixeloid-bold text-center",
                        children:
                          "Team launches Pumpfuns with great budget. Community gets in early.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            g.jsxs(I.div, {
              className: "md:w-[50%] w-full h-fit relative",
              initial: { opacity: 0 },
              animate: { opacity: t ? 1 : 0 },
              transition: { duration: 0.5, delay: 1.5, ease: "easeInOut" },
              children: [
                g.jsx(I.img, {
                  src: SS,
                  alt: "Reinvest",
                  initial: { opacity: 0 },
                  animate: { opacity: t ? 1 : 0 },
                  transition: { duration: 0.5 },
                  className: "w-full h-auto",
                  draggable: !1,
                  style: { userSelect: "none" },
                }),
                g.jsx(I.img, {
                  src: ag,
                  alt: "Cash",
                  initial: { opacity: 0 },
                  animate: { opacity: t ? 1 : 0 },
                  transition: { duration: 1, delay: 1.6 },
                  className:
                    "w-14 md:w-16 h-auto absolute top-[-3%] right-[-5%] md:right-[-5%] md:top-0",
                  draggable: !1,
                  style: { userSelect: "none", transform: "rotate(-9deg)" },
                }),
                g.jsx(I.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: t ? 1 : 0 },
                  transition: { duration: 0.5, delay: 1, ease: "easeInOut" },
                  className:
                    "w-full h-full absolute p-[2rem] top-0 flex justify-center items-center",
                  children: g.jsx("p", {
                    className:
                      "text-white text-sm md:text-base lg:text-xl font-pixeloid-bold text-center",
                    children:
                      "Converting new members into INSIDER. As well as increasing the INSIDER budget.",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const NS = "/assets/HIGH-LjOqzCZG.webp",
  IS = "/assets/SCORES-DMJ_CM77.webp";
function RS({}) {
  const { ref: e, inView: t } = fi({ triggerOnce: !0, threshold: 0.3 }),
    n = [
      { position: "1ST", ath: "000.000", ticker: "Null", color: "#f8e300" },
      { position: "2ND", ath: "000.000", ticker: "Null", color: "#f7bc00" },
      { position: "3RD", ath: "000.000", ticker: "Null", color: "#cf7c16" },
      { position: "4TH", ath: "000.000", ticker: "Null", color: "#7bffce" },
      { position: "5TH", ath: "000.000", ticker: "Null", color: "#3ef4b0" },
      { position: "6TH", ath: "000.000", ticker: "Null", color: "#00cf82" },
      { position: "7TH", ath: "000.000", ticker: "Null", color: "#c967de" },
      { position: "8TH", ath: "000.000", ticker: "Null", color: "#a842be" },
      { position: "9TH", ath: "000.000", ticker: "Null", color: "#901ea9" },
      { position: "10TH", ath: "000.000", ticker: "Null", color: "#7e0199" },
    ];
  return g.jsxs("section", {
    id: "highscores",
    ref: e,
    className: "w-screen overflow-hidden h-full relative mt-20 md:mt-56 pb-20",
    children: [
      g.jsxs(I.div, {
        className: "flex flex-col justify-center items-center",
        children: [
          g.jsx(I.img, {
            initial: { opacity: 0, x: "100rem" },
            animate: t ? { opacity: 1, x: 0 } : { opacity: 0 },
            transition: { duration: 1, ease: "easeInOut", delay: 0.1 },
            src: NS,
            style: { userSelect: "none", willChange: "transform" },
            className: "md:w-[600px] w-[250px] h-auto",
            draggable: !1,
          }),
          g.jsx(I.img, {
            initial: { opacity: 0, x: "-100rem" },
            animate: t ? { opacity: 1, x: 0 } : { opacity: 0 },
            transition: { duration: 1, ease: "easeInOut", delay: 0.2 },
            src: IS,
            style: { userSelect: "none", willChange: "transform" },
            className: "md:w-[700px] w-[350px] h-auto mt-4",
            draggable: !1,
          }),
        ],
      }),
      g.jsxs(I.div, {
        className:
          "w-screen flex justify-center items-center mt-16 md:mt-20 gap-9 md:gap-16",
        children: [
          g.jsxs("div", {
            children: [
              g.jsx(I.p, {
                className:
                  "text-white text-xl md:text-4xl font-pixeloid-bold pb-2 opacity-0",
                initial: { opacity: 0 },
                transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
                children: "P",
              }),
              g.jsx("div", {
                className: "flex flex-col justify-end items-end",
                children: n.map((r, i) =>
                  g.jsx(
                    I.p,
                    {
                      style: { color: r.color, willChange: "opacity" },
                      className:
                        "text-text text-xl md:text-3xl font-pixeloid-bold pb-1",
                      initial: { opacity: 0 },
                      animate: t ? { opacity: 1 } : { opacity: 0 },
                      transition: {
                        duration: 0.25,
                        ease: "easeInOut",
                        delay: 1 + i * 0.1,
                      },
                      children: r.position,
                    },
                    i
                  )
                ),
              }),
            ],
          }),
          g.jsxs("div", {
            children: [
              g.jsx(I.p, {
                className:
                  "text-white text-xl md:text-4xl font-pixeloid-bold pb-2",
                initial: { opacity: 0 },
                animate: t ? { opacity: 1 } : { opacity: 0 },
                transition: { duration: 0.5, ease: "easeInOut", delay: 1.1 },
                children: "ATH",
              }),
              n.map((r, i) =>
                g.jsx(
                  I.p,
                  {
                    style: { color: r.color, willChange: "opacity" },
                    className:
                      "text-text text-xl md:text-3xl font-pixeloid-bold pb-1",
                    initial: { opacity: 0 },
                    animate: t ? { opacity: 1 } : { opacity: 0 },
                    transition: {
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 1 + i * 0.1,
                    },
                    children: r.ath,
                  },
                  i
                )
              ),
            ],
          }),
          g.jsxs("div", {
            children: [
              g.jsx(I.p, {
                className:
                  "text-white text-xl md:text-4xl font-pixeloid-bold pb-2",
                initial: { opacity: 0 },
                animate: t ? { opacity: 1 } : { opacity: 0 },
                transition: { duration: 0.5, ease: "easeInOut", delay: 1.2 },
                children: "TICKER",
              }),
              n.map((r, i) =>
                g.jsx(
                  I.p,
                  {
                    style: { color: r.color, willChange: "opacity" },
                    className:
                      "text-text text-xl md:text-3xl font-pixeloid-bold pb-1",
                    initial: { opacity: 0 },
                    animate: t ? { opacity: 1 } : { opacity: 0 },
                    transition: {
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 1 + i * 0.1,
                    },
                    children: r.ticker,
                  },
                  i
                )
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
const LS = "/assets/TIER-1-Q86arm3Q.webp",
  fd = "/assets/TIER-2-DAFwTTZg.webp",
  DS = "/assets/TIER-3-DaVGZsk4.webp";
function jS() {
  const { ref: e, inView: t } = fi({ triggerOnce: !0, threshold: 0.3 });
  return g.jsxs("div", {
    ref: e,
    className:
      "w-screen min-h-screen relative mt-24 lg:mt-56 overflow-hidden bg-stars",
    children: [
      g.jsx("div", {
        className: "flex flex-col justify-center items-center",
        children: g.jsxs(I.h1, {
          initial: { opacity: 0 },
          animate: { opacity: t ? 1 : 0 },
          transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" },
          style: { textShadow: "5px 5px #32a285" },
          className:
            "text-text-third text-4xl sm:text-5xl md:text-7xl font-pixeloid-bold uppercase text-center leading-[114%] pb-16 z-50",
          children: ["community ", g.jsx("br", {}), " tiers"],
        }),
      }),
      g.jsx("div", {
        className: "w-full h-full flex justify-center items-center",
        children: g.jsxs("div", {
          className:
            "flex flex-col md:flex-row items-center max-w-[85%] md:max-w-[80%] lg:max-w-[80%]",
          children: [
            g.jsxs(I.div, {
              className: "hidden md:block relative",
              initial: { x: "-100rem" },
              animate: { x: t ? 0 : "-100rem" },
              transition: { duration: 1.2, delay: 0.4, ease: "easeInOut" },
              children: [
                g.jsx("img", {
                  src: fd,
                  draggable: !1,
                  style: { userSelect: "none" },
                }),
                g.jsx("div", {
                  className: "w-full h-full p-[4rem] absolute top-0",
                  children: g.jsx("div", {
                    className:
                      "w-full h-full flex justify-center items-center pb-[1rem] lg:pb-[2rem]",
                    children: g.jsxs("p", {
                      className:
                        "text-white max-[400px]:text-[11px] md:text-[10px] lg:text-base 2xl:text-xl font-pixeloid-bold text-center",
                      children: [
                        "- Early information",
                        g.jsx("br", {}),
                        "- Select airdrops, NFTs etc",
                        g.jsx("br", {}),
                        "- Tier 2 group chat",
                      ],
                    }),
                  }),
                }),
              ],
            }),
            g.jsxs("div", {
              className: "flex flex-col",
              children: [
                g.jsxs(I.div, {
                  className: "w-fit h-fit relative",
                  initial: { x: "100rem" },
                  animate: { x: t ? 0 : "100rem" },
                  transition: { duration: 1.2, delay: 0.2, ease: "easeInOut" },
                  children: [
                    g.jsx("img", {
                      src: DS,
                      draggable: !1,
                      style: { userSelect: "none" },
                    }),
                    g.jsx("div", {
                      className:
                        "w-full h-full p-[2.5rem] md:p-[4rem] absolute top-0",
                      children: g.jsx("div", {
                        className:
                          "w-full h-full flex justify-center items-center pb-[1rem] lg:pb-[2rem]",
                        children: g.jsxs("p", {
                          className:
                            "text-white max-[400px]:text-[11px] md:text-[10px] lg:text-base 2xl:text-xl font-pixeloid-bold text-center",
                          children: [
                            "- Genereal market insight",
                            g.jsx("br", {}),
                            "- Opportunities for airdrops, NFTs etc",
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                g.jsxs(I.div, {
                  className: "md:hidden w-fit h-fit relative",
                  initial: { x: "-100rem" },
                  animate: { x: t ? 0 : "-100rem" },
                  transition: { duration: 1.2, delay: 0.4, ease: "easeInOut" },
                  children: [
                    g.jsx("img", {
                      src: fd,
                      draggable: !1,
                      className: "md:hidden",
                      style: { userSelect: "none" },
                    }),
                    g.jsx("div", {
                      className:
                        "w-full h-full p-[2.5rem] md:p-[4rem] absolute top-0",
                      children: g.jsx("div", {
                        className:
                          "w-full h-full flex justify-center items-center pb-[1rem] lg:pb-[2rem]",
                        children: g.jsxs("p", {
                          className:
                            "text-white max-[400px]:text-[11px] md:text-[10px] lg:text-base 2xl:text-xl font-pixeloid-bold text-center",
                          children: [
                            "- Early information",
                            g.jsx("br", {}),
                            "- Select airdrops, NFTs etc",
                            g.jsx("br", {}),
                            "- Tier 2 group chat",
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                g.jsxs(I.div, {
                  className: "w-fit h-fit relative",
                  initial: { x: "100rem" },
                  animate: { x: t ? 0 : "100rem" },
                  transition: { duration: 1.2, delay: 0.6, ease: "easeInOut" },
                  children: [
                    g.jsx("img", {
                      src: LS,
                      draggable: !1,
                      style: { userSelect: "none" },
                    }),
                    g.jsx("div", {
                      className:
                        "w-full h-full p-[2.5rem] md:p-[4rem] absolute top-0",
                      children: g.jsx("div", {
                        className:
                          "w-full h-full flex justify-center items-center pb-[1rem] lg:pb-[2rem]",
                        children: g.jsxs("p", {
                          className:
                            "text-white max-[400px]:text-[11px] md:text-[10px] lg:text-base 2xl:text-xl font-pixeloid-bold text-center",
                          children: [
                            "- Earliest information",
                            g.jsx("br", {}),
                            "- Tier 1 airdrops, NFTs etc",
                            g.jsx("br", {}),
                            "- Tier 1 group chat",
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const OS =
    "data:image/webp;base64,UklGRmIBAABXRUJQVlA4TFYBAAAvrgAoEQ+BoG3b+MDOH1UXGgratpFy/JEcw/1R0LaNlOPP8IDs36qobSPJGv685j0AjmWwDHYD+P//p5ynad0hIBCiG4uwNAsXcumWZmG6Q0BAQI/w3gUHNEiwoNutpp3nKYDYSJIiiZn/D57Bf1djd48zov8TMBvII+eGwQuf88/n3PM55/ypd8nfT3et9R1rfQ9a31K7cphp1z2f0IGYQwdCmv/yX/7Lf/kv/+W//Jf/8l/+y3/5L//lv1Xeh3MooOueV63vT+u70/rOtb4LrY+7J+9K6zvR+h61vqXWt9D6ZtoVxZdzKI7GaP7Lf/kv/+W//Jf/8l/+y3/5L//lv/yX/9ZC79CBmGnXPb9a363Wd8k/gOdU63vS+mba7YZv6EBI81/+y3/5L//lv/yX//Jf/st/+S//5b/8txfizTkU0HXPj9Z3o/VxD+A543Oe+Rz/Zhc=",
  cg =
    "data:image/webp;base64,UklGRvoCAABXRUJQVlA4TO4CAAAveEJhEA/CJrJtJ/dHBWjAMeIoU/Wpfk7AtcE6kmQlg3sApE1wBODy+fw9jE1k206W7AIDmMQC4ugzlFQ5MookSVEu7wk9FXsvEnFWOQDO+kcEAYTSzXgD4wuI7mFApHzwAHATgEKQqB2XwLAATPrMlv6G4h3xIXboVKlqn9s0/wJuouD/keCWkRX4fIi9ajucCL12RcCP4PdHoe9FElvS2T0t6jXgj+D3f7//T+n0mYG4D8WZCYAQcBNFYCjyozyVbTzVvbH2JYMkSZIUSaphZmZmZqb/Pyu8ozKy+uQzu14Z0f8JqNwvoRW3/lPrOZRcPkJ5Zb5t27nP0HfIKBOllMn+0FfIKOO2L/QFUs4zZJRZG/MBqWQeD9uYT/gOSWQC98X3w1dIIuO418bgF8glfZ2HltyFapZW3e3fOIsrMGh/jyuz6Ri0s8mVXWWDLP+PZ8/LNptetnE3b4smu9A6TXahA5pMsAubdESTCTZhk05oMgFu0hFNEs+WO4OBIYiWh+wgb6y7M1haTbjCGwdusvGTzYk7g2i28DfuDXLGlk3SY2Na+AQ5Y936FvCIjWnhD+SMA4t24QwetzHj8BhyBkSbsMJTNqaF55AzTizCHaZtDkfsuQ1rjNqe0DFIH2uwxrcdCf2C9HEJa9zY8dAzSB83sMa9nQq9gPRxB2tc2/HQIw69himm4VRiKtmGvlE4lphK1qDvG34lppJL6LuBZ4mppEDfPbxITCV30IePmBVh+U/+k//kP/lP/pP/5D/5T/6T/+Q/+U/+k//kP/lP/pP/5D/5T/6T/+Q/+U/+k//kP/lP/pP/5D/5T/6T/+Q/+U/+k//kP/lP/pP/5D/5T/6T/2SsU0sopzbq0BLKoU3yaNGVJZQriwrsANGtJZRiUZWQfuApJJFTeO0NOoQkcgjzuYIkcgXzKZBECiQoTCLX9bM45dBmHHJoFo/QdcWhrgJTYNcth7qqYA7i07+HHrwk8uCNcpNI1cj/xgE=",
  fg =
    "data:image/webp;base64,UklGRvACAABXRUJQVlA4TOQCAAAveEJhEDfCOpJkJYPbP8kQFGm7+3sPNg3WkSQrGdxJgTA0/1ScL3fWbW3bSnSeYFUQUwkFUSYxIS24y8xT1EhSVLvSsAKyLh/8scUGoNspY0LgeJT5hPkF6Se0EAAP6EVjQ8CAAGYIgADe1xR7f8x6u/Uxz6eeT1xBRwb+Y/dcfwIoeIYc4N+vmaatr7v5rpMEAQkeBgMeIVl7CEO/MPMAggQEDCWAhEBg/huQQFZ5ez0jFFnFI5TU6nrnAfgrCCe2gPIpx/E2QEGibdtpGwWVMinuqMzMzAz//0/vRpY8fAs3ov8TUIt+yFrj1i+1HrOSy2tWWhmzo+9ZXyChDMFm1gf4uc4jJJQRmOcVUsk4HIR53uCzZZEh2IB58IP9JKYZ3/LRjmpciPaf4LSc8yGEAk6G0HWuXWppkSwr4wNsQh9sUWpulix/JbOfzZT8smkxtipFsL4ZzxnRnxQVRfEjhK5zrRQzPPlzBOibpcEyTyZYtD/TGk8mgDla3vsQQtd7xzYuQNdMCVZ5kqVaznnkXc82b8zEVsGHhAVvLMeyzVosNeVmi+if795ySR3mqcMnyxkzMG4CdmCeDryznLEMwQKuwWGYZxhuWM5Yg6Bn1dYt56yy57wtMQDrWfsgfUzZEtewk/UW0seOLXEGh7NuQvo4siVOYJ5tSB+HtsQ+HMq6yqH7NslwViaZx3H9ti81k0zjuCt7k5pJdnHcqd1KzSSHOO7YbqcmF7hKraCn/Cf/yX/yn/wn/8l/8p/8J//Jf/Kf/Cf/yX/yn/wn/8l/8p/8J//Jf/Kf/Cf/yX/yn/wn/8l/8p/8J//Jf/Kf/Cf/yX/yn/wn/8l/8p/8J//Jf/Lfv58VyCcrMMUlBHuQT/YguMQIgwPIJwcQ1FICzCf7sbS0AklkxVZoD5LInq3QASSRA1shTCL7pT8rWuHQSlzYuD0OjbqwSWDcAYdG1fLG8enXYefRJHIemymeRGo/5bdxAA==",
  dg =
    "data:image/webp;base64,UklGRrgCAABXRUJQVlA4TKsCAAAveEJhENfBNrJtJfejKU2QUjVNWQNkLs/+bcNVJEmKVcdC0Mr5F3G/DO8Nsols28m5932SBjBACf5VQI8B2pwRRJKSHZoQhWgkA4NYRQNg+/ha4CnBv6mLhlwSxE3DxOWQREJ+t13C3Y3yfyfyQQIFB/A8pd3nWq/KKwYk6wX8CJgAltfBtS2QCNkhf0yQUJRfAqLvp9vNnXFpPBgQggRTUNdEK4AECN4SBAZqmAQAPWi/kGjbdtpGjtuqajxRmZmZuf//Z+/2WfLwDdyI/k9A5b4pWnHrWK3rouRyX5RXPj4+Pt6/it5BRnmxddEbOFrnGjLKmy1zD6nkA0/ZMl/wDpLIC667egN5ZTq6A9WE5I4jcKZDiCmlBg5S6ocwQzIxwRrGZJt2qytc+UtZJEt+ajkmK30faz9nLHvZxs1NAfZTGjTNHNfgmGzTboEmf0HrNJlhGeYKERbapskMOFdMcKTObNP8SCkF2E9p0DRzJFPXdUjuWPvZYsFNNutusvF3o+gonlvIJT1bpgevIGcsWN8nfrJlnuAa5Ix1i5ZhhV9smRe4CzkDIty1Hcglr7bMK9xmzyXY4sH2ij5C+piHLS7sc9FLSB/7sMWpfSm6B+njBLY4smW2IH0cwa5tc2i+16JUsgR9D/AxM5XMQ98FvMxMJfvQdwr3MlPJMfThrcxUgnNsM6v8J//Jf/Kf/Cf/yX/yn/wn/8l/8p/8J//Jf/Kf/Cf/yX/yn/wn/8l/8p/8J//Jf/Kf/Cf/yX/yn/wn/8l/8p/8J//Jf/Kf/Cf/yX/yn/wn/8l/8t8/pk1LKJs2y7lFB5ZQDiw6h99ABAnlyFtlHPGzAUlkA3bnEJLIIewOJpGj9uPGNji0E2fQdcihrjOYA7v4tCo8Gc+Zl0TOvKXcJFL9lBPjAAA=",
  hg =
    "data:image/webp;base64,UklGRigCAABXRUJQVlA4TBsCAAAveEJhEF/BOpKsRIN8U+SfEYE45+6XButIkpX0ew/XoImPIPgkALdiFEm2k/7/E87owQHmcYCADKccGEWy1ahJZwxQ378ShGxQEE9bBAin9eIO5IIPF268UAyYei3j/KLrj8qRO//g+KLhTobY+p/b7/d+Pzjh/5GWJaYn8+N+Pqbp+blz7jso0OCCBZ8dt+6m2iqCTaqivxthmwCSI0mKpB5mZmbs/7+worMrd04bAxHR/wlIzDfXhFt/43m40koTPl3vkFBqsOh6g7/d1KHPA1JJE5agzxPeQxapweKfvYX00mqHKeN0B2H7c06apj2H+Yws/9ggO86ELT8apQOYFovtr00zq0t7AIuQRcyfibqwPxj0u91OvhFPvoS9m2/JkxFm4SuteTICjJW2s/ug2263SMbaBe1izu9HIyvbrKxsY+aoyJ9kCtCnAK8hZ4yhrQGr0KcKFyFnrCCY4gTWoE8NrtkTZH7uKcOCawXSxzDMcYFV1w2kj22YYwdrrmsO3YXfvsphJTaTDLHtEm5iM8kW2+CaWkGm/Cf/yX/yn/wn/8l/8p/8J//Jf/Kf/Cf/yX/yn/wn/8l/ksQBnqCgkMAz1LOOUM/aWeU/+U/+k//kP/lP/pP/5D/5T/6T/+Q/+U/+k//kP/lP/pP/5D/5T/6T/+Q/+e//bQ8B5pOddY8RZpkk5rcuTCK73HoDtPFp4isu2EkkeUn9AAA=",
  BS =
    "data:image/webp;base64,UklGRt4BAABXRUJQVlA4TNIBAAAvTcAMEH/BIJKkRk0SgAj8e8AFLyWuDQWRbVPrn0X/AGooocED20iSGjUiAmInHHxywYXXohjFttXm0oywBz94YYmVmlW0RE59AeBw4sOBf3QFrsjgIwA3WtpxAp0jwsAE+QxqSQSP8F33HA1+WmGI4CXC34rCXj39LxGTkpiSgq49EhdvfPlWr3zk43/ymnpJTElkgGXbdtomUtSUmZmZ5j++dyODUvi8J6L/EzBp/ajWi/D/7zreiFeZgYYu45VYlo1dSJErfzc71aO5lmp/F15rDqtHcynVlu3lUORR9WguqqdAjkk2l+dP5O9mF/i2uruHa4bZAfbUo+1nhxLVse0Z6vQMLj3MYVSrtlcIKaoI6kIOQ1S5ctL1T3E+VPEX8Pqm7oHrHnakuH20nx2K7JT8YXsZdQZc9nAoxdqqvUJIspMGJXs4qs2VHvK38yzF3k4USLULvI6keANYQRzYPkQg1Zbt5VDkIEmCOJKC6imQY5KD6KHyfI91MZ0vjOIH4El9Ajvq2/YrocTRJL8A6+rE9qGaAcuEFEejUdW50g3+ct6l2Lb97rbKJrCM2LK9TCiyhRRBTIEsLVuQc3Kl2/7dLLnCsrEkiZaNaeHF+W8B",
  FS =
    "data:image/webp;base64,UklGRuIBAABXRUJQVlA4TNUBAAAvTcATEHfBppEkR3VvERx/RI/CZx+fp8E2kiQn/fpJgPzzIQxlYmtgG0mSk/5Ha2IjVDzSwMUljjs2kW07WZIFOgwkDb9DBOoyGuiQQIcQ2hiAgBgxGsSIEc7DhRffIAtseLH0jzh8uh+JRCJQV9zYg6VN790Ryv8iHNNz/Lu8vf7+UW/9+GX3rPg2pZ/+0x7/ni5LbqIpFnE8z612PwODbNu21bZRmI2CMDP0//9Pq+deyXc06tveEf2fgCpc4yxzHZ2FqyGnvw7p9SXvV/QF6UHScVodPhgr4e+sQzqX9KW0B8zwgnCMvTq8K8m4E56h8x4YOM3BKkxV3uI1WI4FNsW4xj8/9qd6O5hjV1IG+8n2G+1KmuFBsMpItp2BTbY9tcwxZRs3YvsKU6rsI9ASy7HCctT4v6nBcixwXPe2jzjDNY4rnGGGv605luMKhzm1/YbPvCcp2xKH6Ts92wrLUeOUsJ2+YUOXq8FyLLAcN1gO4XQyx8id7UNvRGv74hIjvBG1pPUSi6EVloP/fc5sv5tubR96NC3Ct6QP9ypJNvFo6qiD086WHiW9m25tH7bRw8wn9C3po7eFPbYJ6+gsN/nvVfJ0s4XG/bEeoPppTCPXkNMJAA==",
  zS = ({ inView: e }) =>
    g.jsx("div", {
      className:
        "flex-col lg:flex-row justify-center items-center w-full h-full hidden lg:flex",
      children: g.jsxs("div", {
        className:
          "flex flex-col lg:flex-row justify-center items-start w-fit h-fit",
        children: [
          g.jsxs("div", {
            className: "flex flex-col",
            children: [
              g.jsx(Nt, {
                icon: "clock",
                title: "presale",
                text: `
                        -Fill presale
                        -Launch preparations
                        -Marketing
                        -Animation
                        -Community growth
                        -Launch
                    `,
                backgroundCard: cg,
                delay: 0.5,
                from: "left",
                inView: e,
              }),
              g.jsx(Nt, {
                icon: "clock",
                title: "utilities",
                text: `
                    -NFT collection
                    -List on smaller CEX
                    -X Spaces + KOLS
                    -Multi lingual growth
                    -More launches
                    -Real life marketing
                    `,
                customStyle: "mt-7 lg:mt-[65%]",
                backgroundCard: dg,
                delay: 0.9,
                from: "left",
                inView: e,
              }),
            ],
          }),
          g.jsx(I.img, {
            initial: { opacity: 0 },
            animate: { opacity: e ? 1 : 0 },
            transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
            src: OS,
            className: "w-32 mt-[7.5rem] hidden lg:block",
            draggable: !1,
            style: { userSelect: "none" },
          }),
          g.jsxs("div", {
            className: "flex flex-col mt-7 lg:mt-[28%] ml-[-5px]",
            children: [
              g.jsx(Nt, {
                icon: "clock",
                title: "FIRST LAUNCH",
                text: `
                    -First Pumpfun launch
                    -Tier Giveaways
                    -Collaborations
                    -Marketing push
                    -CMC + CG
                    -Whitelist for NFTs`,
                backgroundCard: fg,
                delay: 0.7,
                from: "right",
                inView: e,
              }),
              g.jsx(Nt, {
                icon: "clock",
                title: "GROW",
                text: `
                    -Ramp up marketing
                    -Major listings
                    -Donations and events
                    -Large Giveaways
                    -Reaching greatness`,
                customStyle: "mt-7 lg:mt-[65%]",
                backgroundCard: hg,
                delay: 1.1,
                from: "right",
                inView: e,
              }),
            ],
          }),
        ],
      }),
    }),
  VS = ({ inView: e }) =>
    g.jsxs("div", {
      className:
        "flex flex-col justify-center items-center w-full h-full lg:hidden",
      children: [
        g.jsx(Nt, {
          icon: "clock",
          title: "presale",
          text: `
                        -Fill presale
                        -Launch preparations
                        -Marketing
                        -Animation
                        -Community growth
                        -Launch
                    `,
          backgroundCard: cg,
          delay: 0.5,
          from: "left",
          inView: e,
        }),
        g.jsx(Nt, {
          icon: "clock",
          title: "FIRST LAUNCH",
          text: `
                    -First Pumpfun launch
                    -Tier Giveaways
                    -Collaborations
                    -Marketing push
                    -CMC + CG
                    -Whitelist for NFTs`,
          customStyle: "mt-7",
          backgroundCard: fg,
          delay: 0.7,
          from: "right",
          inView: e,
        }),
        g.jsx(Nt, {
          icon: "clock",
          title: "utilities",
          text: `
                    -NFT collection
                    -List on smaller CEX
                    -X Spaces + KOLS
                    -Multi lingual growth
                    -More launches
                    -Real life marketing
                    `,
          customStyle: "mt-7",
          backgroundCard: dg,
          delay: 0.9,
          from: "left",
          inView: e,
        }),
        g.jsx(Nt, {
          icon: "clock",
          title: "GROW",
          text: `
                    -Ramp up marketing
                    -Major listings
                    -Donations and events
                    -Large Giveaways
                    -Reaching greatness`,
          customStyle: "mt-7",
          backgroundCard: hg,
          delay: 1.1,
          from: "right",
          inView: e,
        }),
      ],
    }),
  Nt = ({
    customStyle: e,
    icon: t,
    title: n,
    text: r,
    backgroundCard: i,
    delay: s,
    from: o,
    inView: l,
  }) =>
    g.jsxs(I.section, {
      id: "roadmap",
      initial: { opacity: 0, x: o === "left" ? "-100rem" : "100rem" },
      animate: {
        opacity: l ? 1 : 0,
        x: l ? 0 : o === "left" ? "-100rem" : "100rem",
      },
      transition: { duration: 1.1, delay: s, ease: "easeInOut" },
      className: `w-fit h-fit relative ${e}`,
      children: [
        g.jsx("img", {
          src: i,
          className: "w-auto h-[16.5rem] px-8 lg:px-0",
          draggable: !1,
          style: { userSelect: "none" },
        }),
        g.jsxs("div", {
          className: "flex flex-row justify-start items-start px-16 lg:px-10",
          children: [
            g.jsx("h2", {
              style: { textShadow: "4px 4px #000" },
              className:
                "text-text-secondary text-2xl sm:text-3xl font-pixeloid-bold uppercase text-start absolute top-9",
              children: n,
            }),
            g.jsx("img", {
              src: t === "check" ? BS : FS,
              draggable: !1,
              style: { userSelect: "none" },
              width: 60,
              height: "auto",
              className: "absolute right-12 lg:right-5 top-8",
            }),
          ],
        }),
        g.jsx("div", {
          className: "absolute top-1/4 h-2/3 px-16 lg:px-10 pr-16",
          children: g.jsx("p", {
            className:
              "text-white text-[16px] lg:text-[17px] font-pixeloid-bold text-start",
            children: r
              .split(
                `
`
              )
              .map((a, u) =>
                g.jsxs(sn.Fragment, { children: [a, g.jsx("br", {})] }, u)
              ),
          }),
        }),
      ],
    });
function US() {
  const { ref: e, inView: t } = fi({ triggerOnce: !0, threshold: 0.3 });
  return g.jsxs("div", {
    ref: e,
    className: "w-screen min-h-full relative mt-24 lg:mt-56 overflow-hidden",
    children: [
      g.jsx("div", {
        className: "flex flex-col justify-center items-center",
        children: g.jsx(I.h1, {
          initial: { opacity: 0 },
          animate: { opacity: t ? 1 : 0 },
          transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" },
          style: { textShadow: "5px 5px #dc8e10" },
          className:
            "text-text-secondary text-5xl sm:text-5xl lg:text-7xl font-pixeloid-bold uppercase text-center leading-[114%] pb-16 z-50",
          children: "ROADMAP",
        }),
      }),
      g.jsx(zS, { inView: t }),
      g.jsx(VS, { inView: t }),
    ],
  });
}
const QS =
    "data:image/webp;base64,UklGRmIGAABXRUJQVlA4TFUGAAAvbEUuECK68v8pkpv3fxyxtsXMzAwLR3vCHnH6+1efZlamru3NzMw0PtSDmIRbI+g227lDZaYxjl17tZEhZbY3HOP6DFPO7NCxItOUmDOXEKZtm/8f3to1q6TY1rZs2U4sog7AIo3k7lDd3YfgjWbRydBYRO4Pd/ffZShybG079sq2861UtjODv06Vkdh8vxyPwLZKVmz15pi1XXJPQMGeXCRc4OK/c1a4CAXp8cGKk3KRKv8p/8nX1rpOuENSrTpryRrnuAQH5RKp/CghI9nkH8stB7WcpzIhRhnjNuOK0IGSrjZ2tdpXwjlrX75lmX5hOb3IxRWRXFzlYkLOw6hhEDtwyVyWFs65pGiYbpYLFaFcLEmFai/Jwjmblf+U/+RmCYgdsDhKw/SwXOGOCOUSSzIdRj0jwYye18QO/dRcnKR+mq3efat2j8hVu2u1g11covog5KJZfsPY1ngA6i6pQqxx/OZshljOVTB3iTsh1PKq2eC6V87yrB1bnjQbXDd1LI/a4RqfUp3CSD43q6rJzTTuVEWo5QGl7pWx3Ktgyx1K3dR4ugLXeKX8p/yX31RftvsA65yVzaQ3S/Cze0pC1/qFUveqrfFTCa/xA6V+mqzxXQmu9V+6U0lJGC2MfYx12JfJcd+HSQFPDukiR5nalyebQdn0gQ1pteIvWbk7N1bu5i24crfvLf8LR7LpC7gxYyFZAjHTmaExo+FSfN3SEjyc6Zxw3aWwMZMhVcnBs/2yGQwrZy5c3HlVFkNt5wbvIs1kWScmyy4KI6NxLywqAqLJ1UsvSy540aG9QuRiuiBlNVQxvTG/MVuS9yr/Kf/lO5YqqDKsxc2ihijBylxGfVwcBjIsjftC+U/5Ly+xBJkQd8e8xi4erjuMDpT6g0cs28TypIQt97izaekLIxAHrZNTwm9wQthqk0Pjh4kDnDwMWQju3n/xcwsaezRn0yubbjibNit29SZ3vPYp5mJFzqKJIz8NhwCXbbKw6YbewC5B+8TumPmwh3mGeG92xllOVTAXv2QvIz6BsfvJXtBN7M962ITanM047pTyn/Kf8l/uyBTjQpE45FN+AiabEsE1T+D/fy7i/ksgZ/J2xy5+7UQZBqM/hLhaxtWSi2NZ05jgajxoqRro/UwJDA5KGrvKf8p/ea8N//QB9iVY0eG9xEh+ZbyAaCRY9lf+U/5T/sspZknzBHH+wy3ifiDoIlHPfsifytStPeFiTXWJ21rkT+ST23QT+8p/yn/5pB3wsUvxiZ/NaQKiBOrQv3vh1KGN4HbtJU4MjxAj+ZPx8PbdhLj+4GF/X4h7I5BAEb2fKYHBQUljV/lP+U/5b8vHOzoAxKFLIL96xdX4+6ryn/Jfnmujgh/iYsPlHDxxmlJ/OYc79oXYlzRFXaeJYz+HZzxgy7APwW35Fh8eH04Tz8mZjBcQDx3wsUvQPvGzfwKikTSRT27TTey3GLsr/yn/Kf9tXozfxOHfH68Z2ybsxKROYmyXZuKhxkz9tZz95uI35uKbnIVRgRnl/RjvDxy/bhNzCKcuPxMS+OsQsdkeQecv2J2hZXmtq0IuKjAX5XKWAvEPjX3bED1KHBi7B64m9mK6IGXdcuvHtFyLMa38p/xnn30h3ibBiqYMr+DdkfzKeAHRSLAcVflP+S/PrW0/RsScVY7wCUkNo4wxxhiCCZIh6/WjePgS5KhyV9ujcNgyeL0bvF4Rh6ynQ1fEg4ipEpMl4tlPHLTiZ3jwiukSPxJZc8URX/wMD1lxUsRrPpJvJsu7ZOlKliGcLKMU8qkYd1ZzVNTqxziMhfZEZPC322K8LTIiq7fGOHzlnJFwFpr8KY3P5qxHXI1dLdQnhRqHgooau+OC8p/yXz5TxYaDJ9ZRyp7Q6qQhJvh9ILQHKNMfN4T4hnNi+i0h9l+RkjBSxlHcnzMzh2mD0BlD5CDleU3XKZHTh5Hf/QSHvoO/j4mvY+O90NHxPlXeJ8t7PK+9f+c8fufPd0Vmyvvx8f48HhPvpz/v0+X9u/LNZPnddFRGjS+WLVUHiSYMN/hC+7JUkPI+rsW+5ih3xlooY0n5T/kvf7COyDlrir0yIUbu94xBof3IPNrmoAPXfkbHpSIZw4wGOY9oRuI6aYK0ID1+Qzvplcp/yn/Kf1uUjEbNeO+cjB+MeakOAA==",
  bS = "/assets/gradient-kfESmdpO.webp",
  gr =
    "data:image/webp;base64,UklGRn4AAABXRUJQVlA4THIAAAAvVoAYEFDUtpHEn9Ae5TEILgCrgZHvrBS2bdv8/7GSDipkIwkqwfpTLME9agraNnL4H4IwvPUDQibAE57jSWTP9+ARepZ5v7xfodvTXug2tBF66IgJMRHag0for50KFaFtYUvoBQuhBULooUOEOCKRxQc=",
  Ho =
    "data:image/webp;base64,UklGRpIAAABXRUJQVlA4TIYAAAAvV4AYEH+gKJLUqLGEf0H8IcnrsKGgkdRo+YwhCq1oQAO0CCLb0I6AymokgQDcKWjbyAmM449xr/84Wf/x+fvwQSgkbM9IdQMKCXtZyUoiAgIgim0bv8Kv8CvoIoFRQQVdJDAqqKCCCvZ3+ywi+p+lgjmkedCHXrk5mtD4+gxt6Ea73OYCBw==",
  HS =
    "data:image/webp;base64,UklGRo4AAABXRUJQVlA4TIEAAAAvV4AYEBmAIAb8J2uI6H/qJgQCKQ5hhAUCKQ5ghfsfQMEDAEaRJEUqTlEYQik+UICBvQzUdzYIBCHihP9zvDLTto1bAuVPbkh2KGkkSaqliz//xpafipuA+TtI4AwFCwGC5rHR6i2tDyC6XZ7WBa0E8Ne3BK0jtHbQqgDRLTz4UlAA",
  WS =
    "data:image/webp;base64,UklGRogAAABXRUJQVlA4THwAAAAvVoAYEBkxacJ++0c2Q0T/g2ZDJm0T6l/y3nmI6H+OHNREkhQNFyELDfjEG9EXYWDSo8y0beO/WIumYPdNihpJimpP3vh3gw7EkAlDTP+iIvhMQAMUKMOANByksr2XVU2yeg/IZMewuodVAfjYDctq+aymxyocIJWFOkEA",
  KS =
    "data:image/webp;base64,UklGRvYAAABXRUJQVlA4WAoAAAAQAAAAtwAAzwAAQUxQSF8AAAABcFvbthL9CnAKsMYohRBid++AToiJvQSLYPxFzHoRMQHm0r/24AlUvePVIvrv/41WF6fhlS4qThuKAPhKTq6i/9B/6D/0H/oP/Yf+u9VodQO81jVY38utkL6mSJBWAQBWUDggcAAAAHALAJ0BKrgA0AA+KRSJQ6GhIRAkABgChLS3cLtYjaAJ7Xoq4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIH4AA/v/yTAAAAAAAAAA=",
  XS =
    "data:image/webp;base64,UklGRnwBAABXRUJQVlA4WAoAAAAQAAAA1wAAcgEAQUxQSJQAAAABcFtr25N8JRv8MBtUbBPMWtnlXDmDC2TdIGfbVJHho/p9I2ICXruQTzni+i/0Ovz3/9ao6dqYehk23Tsm27waXgRlSvgP/oP/4D/4D/6D/+A/qV7N4m8xJiyW6ei/d9hevu/0j5SiiZDp7mFFIvXVKEXw5mFG2RL+g//gP/gP/oP/4D+A6t4as3cSExZL4bY7Tt8AVlA4IMIAAAAwFQCdASrYAHMBPikUiUOhoSEQFAAYAoS0t3C7sI2gBPYB77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZMQAAP7/+SYAAAAAAAAAAAAAAA==",
  YS =
    "data:image/webp;base64,UklGRkIBAABXRUJQVlA4WAoAAAAQAAAAzQAAcgEAQUxQSGUAAAABcBvZttr8joShSlMnyhQzM9l1OFYDDili5hMRE7CYTh2K+3q5PfUc//0/Y9m7030Ke09T3Ov6PobYF//hP/yH//Af/sN/+A//4T/8h//wH/7Df/jvm1jv3OvNfo/g7yhpM93/KwBWUDggtgAAANATAJ0BKs4AcwE+KRSJQ6GhIRAUABgChLS3cLuwjaAE9gHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIbwAP7/+SYAAAAAAAAAAAAA",
  JS =
    "data:image/webp;base64,UklGRvIAAABXRUJQVlA4WAoAAAAQAAAAuAAAzwAAQUxQSFsAAAABYBrZtpPfxdfQFM0w6NzAl+RMTSgcBWSVw1OfuRExAUN3ca8zsq6Xm/Df/0/jb4t2j/A3E40uu+s9jNjwH/wH/8F/8B/8B/9JNQyLvt5ZJJbSlctE6X1cIbUKAFZQOCBwAAAAcAsAnQEquQDQAD4pFIlDoaEhECQAGAKEtLdwu1iNoAnteirhBkENVSa7bRcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLhBkENVSa7bRcIMgfgAD+//JMAAAAAAAAAA==",
  ZS = ({ inView: e }) =>
    g.jsxs("div", {
      className:
        "mt-[2rem] md:mt-[7rem] w-full px-16 lg:px-[calc(50%-29.5rem)] hidden lg:block",
      children: [
        g.jsxs("div", {
          className: "relative flex justify-center items-center",
          children: [
            g.jsx(I.img, {
              initial: { opacity: 0 },
              animate: { opacity: e ? 1 : 0 },
              transition: { duration: 0.5, delay: 1, ease: "easeInOut" },
              src: QS,
              draggable: !1,
              className: "absolute w-full h-auto z-10",
              style: { userSelect: "none" },
            }),
            g.jsx(I.img, {
              initial: { opacity: 0 },
              animate: { opacity: e ? 1 : 0 },
              transition: { duration: 0.5, delay: 4.8, ease: "easeInOut" },
              src: bS,
              draggable: !1,
              className:
                "absolute ml-[4rem] min-w-[110%] h-auto lg:max-h-[14rem] z-0",
              style: { userSelect: "none" },
            }),
            g.jsx("div", {
              className:
                "flex flex-row justify-center items-center pl-[2.2rem] md:pl-[6.9rem] lg:pl-[7rem] gap-1 md:gap-[0.9rem] lg:gap-[1.25rem]",
              children: GS.map((t, n) =>
                g.jsx(
                  I.img,
                  {
                    src: t.src,
                    draggable: !1,
                    initial: { opacity: 0 },
                    animate: { opacity: e ? 1 : 0 },
                    transition: { duration: 0.5, delay: t.delay },
                    className:
                      "w-[1.35rem] md:w-auto h-[1.4rem] md:h-[4.3rem] z-20",
                    style: { userSelect: "none" },
                  },
                  n
                )
              ),
            }),
          ],
        }),
        g.jsx("div", {
          className: "w-full h-[20rem] pl-[13.3%] z-50",
          children: g.jsxs("div", {
            className: "w-full h-full z-50 flex flex-row",
            children: [
              g.jsxs(I.div, {
                initial: { opacity: 0 },
                animate: { opacity: e ? 1 : 0 },
                transition: { duration: 0.5, delay: 1.2, ease: "easeInOut" },
                className: "mt-[-1.55rem] ml-2 relative z-50",
                children: [
                  g.jsx("img", {
                    src: KS,
                    className: "w-[6.5rem] md:w-[8.5rem] absolute p-0",
                    draggable: !1,
                    style: { userSelect: "none" },
                  }),
                  g.jsxs("div", {
                    className:
                      "pt-[2.5rem] px-[1.5rem] md:p-[2rem] md:pt-[4rem]",
                    children: [
                      g.jsx("h1", {
                        className:
                          "text-white text-xl md:text-2xl font-pixeloid-bold z-50",
                        children: "PRESALE",
                      }),
                      g.jsx("p", {
                        className:
                          "text-text-secondary text-xl md:text-2xl font-pixeloid-bold z-50",
                        children: "50%",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs(I.div, {
                initial: { opacity: 0 },
                animate: { opacity: e ? 1 : 0 },
                transition: { duration: 0.5, delay: 3.3, ease: "easeInOut" },
                className:
                  "mt-[-1.3rem] relative ml-[calc(25%-4rem)] lg:ml-[25.6%] z-50",
                children: [
                  g.jsx("img", {
                    src: XS,
                    className: "w-[6.5rem] md:w-[8.5rem] absolute p-0",
                    draggable: !1,
                    style: { userSelect: "none" },
                  }),
                  g.jsxs("div", {
                    className:
                      "pt-[1.7rem] px-[1.5rem] md:p-[2rem] md:pt-[3rem]",
                    children: [
                      g.jsx("h1", {
                        className:
                          "text-white text-xl md:text-2xl font-pixeloid-bold z-50 uppercase",
                        children: "marketing",
                      }),
                      g.jsx("p", {
                        className:
                          "text-white text-xl md:text-2xl font-pixeloid-bold z-50",
                        children: "15%",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "pt-[1.5rem] pl-[3rem] md:pt-0",
                    children: [
                      g.jsx("h1", {
                        className:
                          "text-white text-xl md:text-2xl font-pixeloid-bold z-50 uppercase",
                        children: "cex",
                      }),
                      g.jsx("p", {
                        className:
                          "text-white text-xl md:text-2xl font-pixeloid-bold z-50",
                        children: "10%",
                      }),
                    ],
                  }),
                  g.jsx("div", {
                    className: "pt-[1.5rem] pl-[4rem] md:pt-[2.1rem]",
                    children: g.jsx("p", {
                      className:
                        "text-text-third text-xl md:text-2xl font-pixeloid-bold z-50",
                      children: "25%",
                    }),
                  }),
                ],
              }),
              g.jsxs(I.div, {
                initial: { opacity: 0 },
                animate: { opacity: e ? 1 : 0 },
                transition: { duration: 0.5, delay: 4.4, ease: "easeInOut" },
                className: "mt-[-1.4rem] ml-[0.5rem] relative z-50",
                children: [
                  g.jsx("img", {
                    src: YS,
                    className: "w-[6.5rem] md:w-[8.5rem] absolute p-0 z-20",
                    draggable: !1,
                    style: { userSelect: "none" },
                  }),
                  g.jsxs("div", {
                    className:
                      "pt-[7.5rem] px-[1.5rem] md:p-[2rem] md:pt-[10rem] z-50",
                    children: [
                      g.jsx("h1", {
                        className:
                          "text-white text-xl md:text-2xl font-pixeloid-bold z-50 uppercase",
                        children: "devs",
                      }),
                      g.jsx("p", {
                        className:
                          "text-purple-400 text-xl md:text-2xl font-pixeloid-bold z-50",
                        children: "10%",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs(I.div, {
                initial: { opacity: 0 },
                animate: { opacity: e ? 1 : 0 },
                transition: { duration: 0.5, delay: 4.9, ease: "easeInOut" },
                className: "mt-[-1.3rem] ml-[45.9rem] absolute z-50",
                children: [
                  g.jsx("img", {
                    src: JS,
                    className: "w-[6.5rem] md:w-[8.5rem] absolute p-0 z-20",
                    draggable: !1,
                    style: { userSelect: "none" },
                  }),
                  g.jsxs("div", {
                    className:
                      "pt-[2rem] px-[1.5rem] md:p-[2rem] md:pt-[3rem] z-50",
                    children: [
                      g.jsx("h1", {
                        className:
                          "text-white text-xl md:text-2xl font-pixeloid-bold z-50 uppercase",
                        children: "MM",
                      }),
                      g.jsx("p", {
                        className:
                          "text-blue-800 text-xl md:text-2xl font-pixeloid-bold z-50",
                        children: "10%",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  GS = [gr, gr, gr, gr, gr, Ho, Ho, Ho, HS, WS].map((e, t) => ({
    src: e,
    delay: 1.2 + t * 0.4,
  }));
function qS() {
  const { ref: e, inView: t } = fi({ triggerOnce: !0, threshold: 0.4 });
  return g.jsxs("section", {
    id: "tokenomics",
    ref: e,
    className:
      "w-screen h-full relative mt-24 lg:mt-56 overflow-visible flex flex-col items-center justify-start sm:pb-40 pt-10 max-lg:hidden",
    children: [
      g.jsx(I.h1, {
        initial: { opacity: 0 },
        animate: { opacity: t ? 1 : 0 },
        transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" },
        className:
          "text-white text-4xl md:text-7xl lg:text-8xl font-pixeloid-bold uppercase text-center leading-[114%] pb-4 z-50",
        children: "Tokenomics",
      }),
      g.jsxs("div", {
        className:
          "flex flex-row w-[65%] md:w-[70%] lg:w-[45%] h-[3.54rem] items-center justify-center gap-[1rem]",
        children: [
          g.jsx(I.div, {
            initial: { width: 0 },
            animate: { width: t ? "100%" : 0 },
            transition: { duration: 1.5, delay: 0.6, ease: "easeInOut" },
            className: "bg-white/50 w-full h-1 md:h-2",
          }),
          g.jsx(I.p, {
            initial: { opacity: 0 },
            animate: { opacity: t ? 1 : 0 },
            transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
            className:
              "text-white/60 text-3xl md:text-4xl font-pixeloid-bold uppercase",
            children: "supply",
          }),
          g.jsx(I.div, {
            initial: { width: 0 },
            animate: { width: t ? "100%" : 0 },
            transition: { duration: 1.5, delay: 0.6, ease: "easeInOut" },
            className: "bg-white/50 w-full h-1 md:h-2",
          }),
        ],
      }),
      g.jsx(I.h1, {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: t ? 1 : 0, y: 0 },
        transition: { duration: 0.8, delay: 1.5, ease: "easeInOut" },
        className:
          "text-white/60 text-4xl md:text-7xl lg:text-8xl font-pixeloid-bold uppercase",
        children: "1.000.000.000",
      }),
      g.jsx(ZS, { inView: t }),
    ],
  });
}
const _S = "/assets/moon-DWZMIXF7.webp",
  $S = "/assets/moon-mobile-Dtfptm-L.webp",
  eT =
    "data:image/webp;base64,UklGRrQBAABXRUJQVlA4WAoAAAAQAAAAUAAALAAAQUxQSF8BAAABkGzbtmlX59zYtm3bqKeWD2ApLaWUbOsPbNu2jWfb9jsI12rn7pvHUkRMAEXi82OkCnU5bvHQK8VLYvsf2R7inSyCJo1WMTaEtWeegE+PTA1hMzXCRNHNNXBdUkzsxTEJVbU1F1cPRovIkq7gj5FOFKzMHCOzpQkrZTAeNKT1DZNOWgnKE6H95R+TlGDfSKOR0sUMj8TxyHRpGhYJphgSEX5xaGTB+iw4c8cWoT42PwvuZfmGw1EyQplv37xx8c1r6ea2oI23AgVL29jZgnp592+A1z9oCmXHHCPTRZTYC7ljpJZQNu8QTIq0+AoYEt7/y6KRpt94ZAYBRQwPH6vRSErP2hK0CLpyB76dKCW+5Nt34IdulrC1YeX1ffBgytcVdHPVocWn7+UKurjM78M3a/qOkS+lKYn9fIxc6uAQN9Ql5zVmBnVT7X+Kbh5xR4LeY+bbOBbkrkvQCxY+ngQAVlA4IC4AAACQAwCdASpRAC0APikUiUMhoSEQ5AAYAoS0gAAG2saD3ZigLg0AAP76Q4AAAAAA",
  tT = "/assets/BUY-BOTTON-npxY3ANW.webp",
  nT = "/assets/BUY-BOTTON-2-B0h3Qzx_.webp",
  rT = "/assets/X2-DPCY_Esk.webp",
  iT = "/assets/X1-BNBABrov.webp",
  sT = "/assets/T2-D7nLcViJ.webp",
  oT = "/assets/Telegram-iEvr6Hbg.webp";
function lT() {
  const [e, t] = T.useState(!1),
    [n, r] = T.useState(!1),
    [i, s] = T.useState(!1),
    [o, l] = T.useState(!1);
  return g.jsx("div", {
    className: "relative h-dvh w-screen mt-10",
    children: g.jsxs("div", {
      className:
        "flex flex-col justify-end items-center relative w-full h-full md:mt-[20rem] lg:mt-0",
      children: [
        g.jsxs("div", {
          className: "pb-[22rem] md:pb-[32rem]",
          children: [
            g.jsxs(I.h1, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" },
              style: { textShadow: "5px 5px #32a285" },
              className:
                "text-text-third text-[50px] sm:text-6xl md:text-7xl font-pixeloid-bold uppercase text-center leading-[134%] z-50",
              children: ["become an", g.jsx("br", {}), "insider"],
            }),
            g.jsxs("div", {
              className: "flex flex-col z-50 justify-center items-center",
              children: [
                g.jsx(I.button, {
                  className: "z-50 w-fit h-fit md:pb-[10rem]",
                  onMouseEnter: () => r(!0),
                  onMouseLeave: () => r(!1),
                  initial: { opacity: 0, scale: 1 },
                  whileTap: { scale: 0.9 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.2, ease: "easeInOut" },
                  children: g.jsx(I.img, {
                    initial: { opacity: 0, scale: 1 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.2, ease: "easeInOut" },
                    src: n ? nT : tT,
                    className: "w-auto lg:h-[19rem] z-50",
                    draggable: !1,
                    style: { userSelect: "none" },
                  }),
                }),
                g.jsxs("div", {
                  className:
                    "flex flex-row h-[1rem] lg:gap-x-[35rem] mt-[-3rem] md:mt-[-13rem]",
                  children: [
                    g.jsx(I.button, {
                      className: "z-50 w-fit h-fit lg:mt-[-7rem]",
                      onMouseEnter: () => l(!0),
                      onMouseLeave: () => l(!1),
                      initial: { opacity: 0, scale: 1 },
                      whileTap: { scale: 0.9 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.2, ease: "easeInOut" },
                      children: g.jsx(I.img, {
                        initial: { opacity: 0, scale: 1 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.2, ease: "easeInOut" },
                        src: o ? sT : oT,
                        className: "w-auto h-[6rem] md:h-[11rem] z-50",
                        draggable: !1,
                        style: { userSelect: "none" },
                      }),
                    }),
                    g.jsx(I.button, {
                      className: "z-50 w-fit h-fit lg:mt-[-7rem]",
                      onMouseEnter: () => s(!0),
                      onMouseLeave: () => s(!1),
                      initial: { opacity: 0, scale: 1 },
                      whileTap: { scale: 0.9 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.2, ease: "easeInOut" },
                      children: g.jsx(I.img, {
                        initial: { opacity: 0, scale: 1 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.2, ease: "easeInOut" },
                        src: i ? rT : iT,
                        className: "w-auto h-[6rem] md:h-[11rem] z-50",
                        draggable: !1,
                        style: { userSelect: "none" },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g.jsx("img", {
          src: _S,
          className: "absolute bottom-0 hidden lg:block w-screen object-cover",
          draggable: !1,
          style: { userSelect: "none" },
          alt: "moon",
        }),
        g.jsx("img", {
          src: $S,
          className:
            "absolute bottom-0 lg:hidden object-cover w-screen h-[15rem]",
          draggable: !1,
          style: { userSelect: "none" },
          alt: "moon",
        }),
        g.jsxs("button", {
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          onMouseEnter: () => t(!0),
          onMouseLeave: () => t(!1),
          className:
            "font-pixeloid-bold text-[#484444] text-2xl md:text-4xl absolute bottom-5 flex flex-row gap-3",
          children: [
            "BACK TO TOP",
            g.jsx(I.img, {
              initial: { y: 0 },
              animate: { y: e ? [0, -10] : 0 },
              transition: { duration: 1, repeat: 1 / 0, repeatType: "reverse" },
              src: eT,
              className: "w-auto  h-5 md:h-7",
              draggable: !1,
              style: { userSelect: "none", willChange: "transform" },
            }),
          ],
        }),
      ],
    }),
  });
}
function aT() {
  return g.jsxs("div", {
    className: " min-h-screen w-screen overflow-x-hidden z-0",
    children: [
      g.jsx(uS, {}),
      g.jsx(vS, {}),
      g.jsx(MS, {}),
      g.jsx(RS, {}),
      g.jsx(jS, {}),
      g.jsx(US, {}),
      g.jsx(qS, {}),
      g.jsx(lT, {}),
    ],
  });
}
function uT() {
  return g.jsxs("div", {
    className: "min-h-screen overflow-hidden",
    children: [
      g.jsx(F0, {}),
      g.jsx(C0, { children: g.jsx(Lp, { path: "/", element: g.jsx(aT, {}) }) }),
    ],
  });
}
Wo.createRoot(document.getElementById("root")).render(
  g.jsx(E0, { children: g.jsx(uT, {}) })
);
