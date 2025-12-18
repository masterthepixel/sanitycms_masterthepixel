(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_tagged_template_literal
]);
function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/react-compiler-runtime@1.0.0_react@19.0.0/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @lightSyntaxTransform
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 */ var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var index_exports = {};
__export(index_exports, {
    $dispatcherGuard: ()=>$dispatcherGuard,
    $makeReadOnly: ()=>$makeReadOnly,
    $reset: ()=>$reset,
    $structuralCheck: ()=>$structuralCheck,
    c: ()=>c,
    clearRenderCounterRegistry: ()=>clearRenderCounterRegistry,
    renderCounterRegistry: ()=>renderCounterRegistry,
    useRenderCounter: ()=>useRenderCounter
});
module.exports = __toCommonJS(index_exports);
var React = __toESM(__turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var { useRef, useEffect, isValidElement } = React;
var _a;
var ReactSecretInternals = //@ts-ignore
(_a = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) != null ? _a : React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var $empty = Symbol.for("react.memo_cache_sentinel");
var _a2;
var c = // @ts-expect-error
typeof ((_a2 = React.__COMPILER_RUNTIME) == null ? void 0 : _a2.c) === "function" ? // @ts-expect-error
React.__COMPILER_RUNTIME.c : function c2(size) {
    return React.useMemo({
        "c2.useMemo": ()=>{
            const $ = new Array(size);
            for(let ii = 0; ii < size; ii++){
                $[ii] = $empty;
            }
            $[$empty] = true;
            return $;
        }
    }["c2.useMemo"], []);
};
var LazyGuardDispatcher = {};
[
    "readContext",
    "useCallback",
    "useContext",
    "useEffect",
    "useImperativeHandle",
    "useInsertionEffect",
    "useLayoutEffect",
    "useMemo",
    "useReducer",
    "useRef",
    "useState",
    "useDebugValue",
    "useDeferredValue",
    "useTransition",
    "useMutableSource",
    "useSyncExternalStore",
    "useId",
    "unstable_isNewReconciler",
    "getCacheSignal",
    "getCacheForType",
    "useCacheRefresh"
].forEach((name)=>{
    LazyGuardDispatcher[name] = ()=>{
        throw new Error("[React] Unexpected React hook call (".concat(name, ") from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') "));
    };
});
var originalDispatcher = null;
LazyGuardDispatcher["useMemoCache"] = (count)=>{
    if (originalDispatcher == null) {
        throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");
    } else {
        return originalDispatcher.useMemoCache(count);
    }
};
function setCurrent(newDispatcher) {
    ReactSecretInternals.ReactCurrentDispatcher.current = newDispatcher;
    return ReactSecretInternals.ReactCurrentDispatcher.current;
}
var guardFrames = [];
function $dispatcherGuard(kind) {
    const curr = ReactSecretInternals.ReactCurrentDispatcher.current;
    if (kind === 0 /* PushGuardContext */ ) {
        guardFrames.push(curr);
        if (guardFrames.length === 1) {
            originalDispatcher = curr;
        }
        if (curr === LazyGuardDispatcher) {
            throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");
        }
        setCurrent(LazyGuardDispatcher);
    } else if (kind === 1 /* PopGuardContext */ ) {
        const lastFrame = guardFrames.pop();
        if (lastFrame == null) {
            throw new Error("React Compiler internal error: unexpected null in guard stack");
        }
        if (guardFrames.length === 0) {
            originalDispatcher = null;
        }
        setCurrent(lastFrame);
    } else if (kind === 2 /* PushExpectHook */ ) {
        guardFrames.push(curr);
        setCurrent(originalDispatcher);
    } else if (kind === 3 /* PopExpectHook */ ) {
        const lastFrame = guardFrames.pop();
        if (lastFrame == null) {
            throw new Error("React Compiler internal error: unexpected null in guard stack");
        }
        setCurrent(lastFrame);
    } else {
        throw new Error("React Compiler internal error: unreachable block" + kind);
    }
}
function $reset($) {
    for(let ii = 0; ii < $.length; ii++){
        $[ii] = $empty;
    }
}
function $makeReadOnly() {
    throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime");
}
var renderCounterRegistry = /* @__PURE__ */ new Map();
function clearRenderCounterRegistry() {
    for (const counters of renderCounterRegistry.values()){
        counters.forEach((counter)=>{
            counter.count = 0;
        });
    }
}
function registerRenderCounter(name, val) {
    let counters = renderCounterRegistry.get(name);
    if (counters == null) {
        counters = /* @__PURE__ */ new Set();
        renderCounterRegistry.set(name, counters);
    }
    counters.add(val);
}
function removeRenderCounter(name, val) {
    const counters = renderCounterRegistry.get(name);
    if (counters == null) {
        return;
    }
    counters.delete(val);
}
function useRenderCounter(name) {
    const val = useRef(null);
    if (val.current != null) {
        val.current.count += 1;
    }
    useEffect({
        "useRenderCounter.useEffect": ()=>{
            if (val.current == null) {
                const counter = {
                    count: 0
                };
                registerRenderCounter(name, counter);
                val.current = counter;
            }
            return ({
                "useRenderCounter.useEffect": ()=>{
                    if (val.current !== null) {
                        removeRenderCounter(name, val.current);
                    }
                }
            })["useRenderCounter.useEffect"];
        }
    }["useRenderCounter.useEffect"]);
}
var seenErrors = /* @__PURE__ */ new Set();
function $structuralCheck(oldValue, newValue, variableName, fnName, kind, loc) {
    function error(l, r, path, depth) {
        const str = "".concat(fnName, ":").concat(loc, " [").concat(kind, "] ").concat(variableName).concat(path, " changed from ").concat(l, " to ").concat(r, " at depth ").concat(depth);
        if (seenErrors.has(str)) {
            return;
        }
        seenErrors.add(str);
        console.error(str);
    }
    const depthLimit = 2;
    function recur(oldValue2, newValue2, path, depth) {
        if (depth > depthLimit) {
            return;
        } else if (oldValue2 === newValue2) {
            return;
        } else if (typeof oldValue2 !== typeof newValue2) {
            error("type ".concat(typeof oldValue2), "type ".concat(typeof newValue2), path, depth);
        } else if (typeof oldValue2 === "object") {
            const oldArray = Array.isArray(oldValue2);
            const newArray = Array.isArray(newValue2);
            if (oldValue2 === null && newValue2 !== null) {
                error("null", "type ".concat(typeof newValue2), path, depth);
            } else if (newValue2 === null) {
                error("type ".concat(typeof oldValue2), "null", path, depth);
            } else if (oldValue2 instanceof Map) {
                if (!(newValue2 instanceof Map)) {
                    error("Map instance", "other value", path, depth);
                } else if (oldValue2.size !== newValue2.size) {
                    error("Map instance with size ".concat(oldValue2.size), "Map instance with size ".concat(newValue2.size), path, depth);
                } else {
                    for (const [k, v] of oldValue2){
                        if (!newValue2.has(k)) {
                            error("Map instance with key ".concat(k), "Map instance without key ".concat(k), path, depth);
                        } else {
                            recur(v, newValue2.get(k), "".concat(path, ".get(").concat(k, ")"), depth + 1);
                        }
                    }
                }
            } else if (newValue2 instanceof Map) {
                error("other value", "Map instance", path, depth);
            } else if (oldValue2 instanceof Set) {
                if (!(newValue2 instanceof Set)) {
                    error("Set instance", "other value", path, depth);
                } else if (oldValue2.size !== newValue2.size) {
                    error("Set instance with size ".concat(oldValue2.size), "Set instance with size ".concat(newValue2.size), path, depth);
                } else {
                    for (const v of newValue2){
                        if (!oldValue2.has(v)) {
                            error("Set instance without element ".concat(v), "Set instance with element ".concat(v), path, depth);
                        }
                    }
                }
            } else if (newValue2 instanceof Set) {
                error("other value", "Set instance", path, depth);
            } else if (oldArray || newArray) {
                if (oldArray !== newArray) {
                    error("type ".concat(oldArray ? "array" : "object"), "type ".concat(newArray ? "array" : "object"), path, depth);
                } else if (oldValue2.length !== newValue2.length) {
                    error("array with length ".concat(oldValue2.length), "array with length ".concat(newValue2.length), path, depth);
                } else {
                    for(let ii = 0; ii < oldValue2.length; ii++){
                        recur(oldValue2[ii], newValue2[ii], "".concat(path, "[").concat(ii, "]"), depth + 1);
                    }
                }
            } else if (isValidElement(oldValue2) || isValidElement(newValue2)) {
                if (isValidElement(oldValue2) !== isValidElement(newValue2)) {
                    error("type ".concat(isValidElement(oldValue2) ? "React element" : "object"), "type ".concat(isValidElement(newValue2) ? "React element" : "object"), path, depth);
                } else if (oldValue2.type !== newValue2.type) {
                    error("React element of type ".concat(oldValue2.type), "React element of type ".concat(newValue2.type), path, depth);
                } else {
                    recur(oldValue2.props, newValue2.props, "[props of ".concat(path, "]"), depth + 1);
                }
            } else {
                for(const key in newValue2){
                    if (!(key in oldValue2)) {
                        error("object without key ".concat(key), "object with key ".concat(key), path, depth);
                    }
                }
                for(const key in oldValue2){
                    if (!(key in newValue2)) {
                        error("object with key ".concat(key), "object without key ".concat(key), path, depth);
                    } else {
                        recur(oldValue2[key], newValue2[key], "".concat(path, ".").concat(key), depth + 1);
                    }
                }
            }
        } else if (typeof oldValue2 === "function") {
            return;
        } else if (isNaN(oldValue2) || isNaN(newValue2)) {
            if (isNaN(oldValue2) !== isNaN(newValue2)) {
                error("".concat(isNaN(oldValue2) ? "NaN" : "non-NaN value"), "".concat(isNaN(newValue2) ? "NaN" : "non-NaN value"), path, depth);
            }
        } else if (oldValue2 !== newValue2) {
            error(oldValue2, newValue2, path, depth);
        }
    }
    recur(oldValue, newValue, "", 0);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    $dispatcherGuard,
    $makeReadOnly,
    $reset,
    $structuralCheck,
    c,
    clearRenderCounterRegistry,
    renderCounterRegistry,
    useRenderCounter
}); //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/native.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const __TURBOPACK__default__export__ = {
    randomUUID
};
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/rng.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/validate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/regex.js [app-client] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/stringify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/validate.js [app-client] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr) {
    let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr) {
    let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/v4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/native.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/rng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/stringify.js [app-client] (ecmascript)");
;
;
;
function _v4(options, buf, offset) {
    var _options_rng;
    options = options || {};
    var _options_random, _ref;
    const rnds = (_ref = (_options_random = options.random) !== null && _options_random !== void 0 ? _options_random : (_options_rng = options.rng) === null || _options_rng === void 0 ? void 0 : _options_rng.call(options)) !== null && _ref !== void 0 ? _ref : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError("UUID byte range ".concat(offset, ":").concat(offset + 15, " is out of buffer bounds"));
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    return _v4(options, buf, offset);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/v4.js [app-client] (ecmascript)");
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
};
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+comlink@4.0.1/node_modules/@sanity/comlink/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOMAIN",
    ()=>DOMAIN,
    "FETCH_TIMEOUT_DEFAULT",
    ()=>FETCH_TIMEOUT_DEFAULT,
    "HANDSHAKE_INTERVAL",
    ()=>HANDSHAKE_INTERVAL,
    "HANDSHAKE_MSG_TYPES",
    ()=>HANDSHAKE_MSG_TYPES,
    "HEARTBEAT_INTERVAL",
    ()=>HEARTBEAT_INTERVAL,
    "INTERNAL_MSG_TYPES",
    ()=>INTERNAL_MSG_TYPES,
    "MSG_DISCONNECT",
    ()=>MSG_DISCONNECT,
    "MSG_HANDSHAKE_ACK",
    ()=>MSG_HANDSHAKE_ACK,
    "MSG_HANDSHAKE_SYN",
    ()=>MSG_HANDSHAKE_SYN,
    "MSG_HANDSHAKE_SYN_ACK",
    ()=>MSG_HANDSHAKE_SYN_ACK,
    "MSG_HEARTBEAT",
    ()=>MSG_HEARTBEAT,
    "MSG_RESPONSE",
    ()=>MSG_RESPONSE,
    "RESPONSE_TIMEOUT_DEFAULT",
    ()=>RESPONSE_TIMEOUT_DEFAULT,
    "createConnection",
    ()=>createConnection,
    "createConnectionMachine",
    ()=>createConnectionMachine,
    "createController",
    ()=>createController,
    "createListenLogic",
    ()=>createListenLogic,
    "createNode",
    ()=>createNode,
    "createNodeMachine",
    ()=>createNodeMachine,
    "createRequestMachine",
    ()=>createRequestMachine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/xstate.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sendTo$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/log-3eec9346.development.esm.js [app-client] (ecmascript) <export s as sendTo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/assign-ef1b62f6.development.esm.js [app-client] (ecmascript) <export a as assign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__createActor$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export c as createActor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/log-3eec9346.development.esm.js [app-client] (ecmascript) <export e as enqueueActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export r as raise>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/log-3eec9346.development.esm.js [app-client] (ecmascript) <export a as emit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export s as stopChild>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$defer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/defer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$fromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/util/pipe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$bufferCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/bufferCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$concatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/concatMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$take$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/take.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$takeUntil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js [app-client] (ecmascript)");
;
;
;
const listenInputFromContext = (config)=>(param)=>{
        let { context } = param;
        const { count, include, exclude, responseType = "message.received" } = config;
        return {
            count,
            domain: context.domain,
            from: context.connectTo,
            include: include ? Array.isArray(include) ? include : [
                include
            ] : [],
            exclude: exclude ? Array.isArray(exclude) ? exclude : [
                exclude
            ] : [],
            responseType,
            target: context.target,
            to: context.name
        };
    }, listenFilter = (input)=>(event)=>{
        const { data } = event;
        return (input.include.length ? input.include.includes(data.type) : !0) && (input.exclude.length ? !input.exclude.includes(data.type) : !0) && data.domain === input.domain && data.from === input.from && data.to === input.to && (!input.target || event.source === input.target);
    }, eventToMessage = (type)=>(event)=>({
            type,
            message: event
        }), messageEvents$ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$defer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defer"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$fromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEvent"])(window, "message")), createListenLogic = (compatMap)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEventObservable"])((param)=>{
        let { input } = param;
        return messageEvents$.pipe(compatMap ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(compatMap) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(listenFilter(input)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(eventToMessage(input.responseType)), input.count ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$bufferCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bufferCount"])(input.count), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$concatMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatMap"])((arr)=>arr), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$take$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["take"])(input.count)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$pipe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])());
    }), DOMAIN = "sanity/comlink", RESPONSE_TIMEOUT_DEFAULT = 3e3, FETCH_TIMEOUT_DEFAULT = 1e4, HEARTBEAT_INTERVAL = 1e3, HANDSHAKE_INTERVAL = 500, MSG_RESPONSE = "comlink/response", MSG_HEARTBEAT = "comlink/heartbeat", MSG_DISCONNECT = "comlink/disconnect", MSG_HANDSHAKE_SYN = "comlink/handshake/syn", MSG_HANDSHAKE_SYN_ACK = "comlink/handshake/syn-ack", MSG_HANDSHAKE_ACK = "comlink/handshake/ack", HANDSHAKE_MSG_TYPES = [
    MSG_HANDSHAKE_SYN,
    MSG_HANDSHAKE_SYN_ACK,
    MSG_HANDSHAKE_ACK
], INTERNAL_MSG_TYPES = [
    MSG_RESPONSE,
    MSG_DISCONNECT,
    MSG_HEARTBEAT,
    ...HANDSHAKE_MSG_TYPES
], throwOnEvent = (message)=>(source)=>source.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$take$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["take"])(1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(()=>{
            throw new Error(message);
        })), createRequestMachine = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
        types: {},
        actors: {
            listen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEventObservable"])((param)=>{
                let { input } = param;
                const abortSignal$ = input.signal ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$fromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEvent"])(input.signal, "abort").pipe(throwOnEvent("Request ".concat(input.requestId, " aborted"))) : __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY"], messageFilter = (event)=>{
                    var _event_data, _event_data1;
                    return ((_event_data = event.data) === null || _event_data === void 0 ? void 0 : _event_data.type) === MSG_RESPONSE && ((_event_data1 = event.data) === null || _event_data1 === void 0 ? void 0 : _event_data1.responseTo) === input.requestId && !!event.source && input.sources.has(event.source);
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$fromEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEvent"])(window, "message").pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(messageFilter), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$take$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["take"])(input.sources.size), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$takeUntil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["takeUntil"])(abortSignal$));
            })
        },
        actions: {
            "send message": (param, params)=>{
                let { context } = param;
                const { sources, targetOrigin } = context, { message } = params;
                sources.forEach((source)=>{
                    source.postMessage(message, {
                        targetOrigin
                    });
                });
            },
            "on success": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sendTo$3e$__["sendTo"])((param)=>{
                let { context } = param;
                return context.parentRef;
            }, (param)=>{
                let { context, self } = param;
                var _context_resolvable;
                return context.response && ((_context_resolvable = context.resolvable) === null || _context_resolvable === void 0 ? void 0 : _context_resolvable.resolve(context.response)), {
                    type: "request.success",
                    requestId: self.id,
                    response: context.response,
                    responseTo: context.responseTo
                };
            }),
            "on fail": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sendTo$3e$__["sendTo"])((param)=>{
                let { context } = param;
                return context.parentRef;
            }, (param)=>{
                let { context, self } = param;
                var _context_resolvable;
                return context.suppressWarnings || console.warn("[@sanity/comlink] Received no response to message '".concat(context.type, "' on client '").concat(context.from, "' (ID: '").concat(context.id, "').")), (_context_resolvable = context.resolvable) === null || _context_resolvable === void 0 ? void 0 : _context_resolvable.reject(new Error("No response received")), {
                    type: "request.failed",
                    requestId: self.id
                };
            }),
            "on abort": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__sendTo$3e$__["sendTo"])((param)=>{
                let { context } = param;
                return context.parentRef;
            }, (param)=>{
                let { context, self } = param;
                var _context_resolvable;
                return (_context_resolvable = context.resolvable) === null || _context_resolvable === void 0 ? void 0 : _context_resolvable.reject(new Error("Request aborted")), {
                    type: "request.aborted",
                    requestId: self.id
                };
            })
        },
        guards: {
            expectsResponse: (param)=>{
                let { context } = param;
                return context.expectResponse;
            }
        },
        delays: {
            initialTimeout: 0,
            responseTimeout: (param)=>{
                let { context } = param;
                var _context_responseTimeout;
                return (_context_responseTimeout = context.responseTimeout) !== null && _context_responseTimeout !== void 0 ? _context_responseTimeout : RESPONSE_TIMEOUT_DEFAULT;
            }
        }
    }).createMachine({
        /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOlwgBswBiAD1gBd0GwT0AzFgJ2QNwdzoKAFVyowAewCuDItTRY8hUuSoBtAAwBdRKAAOE2P1wT8ukLUQBGAEwBWEgBYAnK+eOAzB7sB2DzY8rABoQAE9rDQc3V0cNTw8fAA4NHwBfVJCFHAJiElgwfAgCKGpNHSQQAyMBU3NLBDsrDxI7DTaAjQA2OOcNDxDwhHsNJx9Ou0TOq2cJxP9HdMyMbOU8gqL8ErUrcv1DY1qK+sbm1vaPLp6+gcRnGydo9wDGycWQLKVc9AB3dGNN6jiWCwdAwMrmKoHMxHRCJRKOEiJHwuZKBZwXKzBMKIGyYkhtAkXOweTqOHw2RJvD45Ug-P4CAH0JgsNicMA8LhwAz4fKicTSWTyZafWm-f5QcEVSE1aGgepwhFIlF9aYYrGDC4+JzEppjGzOUkeGbpDIgfASCBwczU5QQ-YyuqIAC0nRuCBd+IJXu9KSpwppZEoYDt1RMsosiEcNjdVjiJEeGisiSTHkcVgWpptuXyhWKIahjqGzi1BqRJINnVcdkcbuTLS9VYC8ISfsUAbp4vzDphCHJIyjBvJNlxNmRNexQ3sJGH43GPj8jWJrZWuXYfyoEC7YcLsbrgRsjkcvkmdgNbopVhIPhVfnsh8ClMz-tWsCkmEwcHgUvt257u8v+6Hse4xnhOdZnImVidPqCRNB4JqpEAA */ context: (param)=>{
            let { input } = param;
            var _input_expectResponse;
            return {
                channelId: input.channelId,
                data: input.data,
                domain: input.domain,
                expectResponse: (_input_expectResponse = input.expectResponse) !== null && _input_expectResponse !== void 0 ? _input_expectResponse : !1,
                from: input.from,
                id: "msg-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()),
                parentRef: input.parentRef,
                resolvable: input.resolvable,
                response: null,
                responseTimeout: input.responseTimeout,
                responseTo: input.responseTo,
                signal: input.signal,
                sources: input.sources instanceof Set ? input.sources : /* @__PURE__ */ new Set([
                    input.sources
                ]),
                suppressWarnings: input.suppressWarnings,
                targetOrigin: input.targetOrigin,
                to: input.to,
                type: input.type
            };
        },
        initial: "idle",
        on: {
            abort: ".aborted"
        },
        states: {
            idle: {
                after: {
                    initialTimeout: [
                        {
                            target: "sending"
                        }
                    ]
                }
            },
            sending: {
                entry: {
                    type: "send message",
                    params: (param)=>{
                        let { context } = param;
                        const { channelId, data, domain, from, id, responseTo, to, type } = context;
                        return {
                            message: {
                                channelId,
                                data,
                                domain,
                                from,
                                id,
                                to,
                                type,
                                responseTo
                            }
                        };
                    }
                },
                always: [
                    {
                        guard: "expectsResponse",
                        target: "awaiting"
                    },
                    "success"
                ]
            },
            awaiting: {
                invoke: {
                    id: "listen for response",
                    src: "listen",
                    input: (param)=>{
                        let { context } = param;
                        return {
                            requestId: context.id,
                            sources: context.sources,
                            signal: context.signal
                        };
                    },
                    onError: "aborted"
                },
                after: {
                    responseTimeout: "failed"
                },
                on: {
                    message: {
                        actions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                            response: (param)=>{
                                let { event } = param;
                                return event.data.data;
                            },
                            responseTo: (param)=>{
                                let { event } = param;
                                return event.data.responseTo;
                            }
                        }),
                        target: "success"
                    }
                }
            },
            failed: {
                type: "final",
                entry: "on fail"
            },
            success: {
                type: "final",
                entry: "on success"
            },
            aborted: {
                type: "final",
                entry: "on abort"
            }
        },
        output: (param)=>{
            let { context, self } = param;
            return {
                requestId: self.id,
                response: context.response,
                responseTo: context.responseTo
            };
        }
    }), sendBackAtInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromCallback"])((param)=>{
    let { sendBack, input } = param;
    const send = ()=>{
        sendBack(input.event);
    };
    input.immediate && send();
    const interval = setInterval(send, input.interval);
    return ()=>{
        clearInterval(interval);
    };
}), createConnectionMachine = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
        types: {},
        actors: {
            requestMachine: createRequestMachine(),
            listen: createListenLogic(),
            sendBackAtInterval
        },
        actions: {
            "buffer message": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { enqueue } = param;
                enqueue.assign({
                    buffer: (param)=>{
                        let { event, context } = param;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "post"), [
                            ...context.buffer,
                            event.data
                        ];
                    }
                }), enqueue.emit((param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "post"), {
                        type: "buffer.added",
                        message: event.data
                    };
                });
            }),
            "create request": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                requests: (param)=>{
                    let { context, event, self, spawn } = param;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "request");
                    const requests = (Array.isArray(event.data) ? event.data : [
                        event.data
                    ]).map((request)=>{
                        const id = "req-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])());
                        return spawn("requestMachine", {
                            id,
                            input: {
                                channelId: context.channelId,
                                data: request.data,
                                domain: context.domain,
                                expectResponse: request.expectResponse,
                                from: context.name,
                                parentRef: self,
                                responseTo: request.responseTo,
                                sources: context.target,
                                targetOrigin: context.targetOrigin,
                                to: context.connectTo,
                                type: request.type
                            }
                        });
                    });
                    return [
                        ...context.requests,
                        ...requests
                    ];
                }
            }),
            "emit received message": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { enqueue } = param;
                enqueue.emit((param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "message.received"), {
                        type: "message",
                        message: event.message.data
                    };
                });
            }),
            "emit status": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])((_, params)=>({
                    type: "status",
                    status: params.status
                })),
            "post message": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])((param)=>{
                let { event } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "post"), {
                    type: "request",
                    data: {
                        data: event.data.data,
                        expectResponse: !0,
                        type: event.data.type
                    }
                };
            }),
            "remove request": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { context, enqueue, event } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                    "request.success",
                    "request.failed",
                    "request.aborted"
                ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__["stopChild"])(event.requestId), enqueue.assign({
                    requests: context.requests.filter((param)=>{
                        let { id } = param;
                        return id !== event.requestId;
                    })
                });
            }),
            respond: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])((param)=>{
                let { event } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "response"), {
                    type: "request",
                    data: {
                        data: event.data,
                        type: MSG_RESPONSE,
                        responseTo: event.respondTo
                    }
                };
            }),
            "send handshake ack": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])({
                type: "request",
                data: {
                    type: MSG_HANDSHAKE_ACK
                }
            }),
            "send disconnect": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])(()=>({
                    type: "request",
                    data: {
                        type: MSG_DISCONNECT
                    }
                })),
            "send handshake syn": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])({
                type: "request",
                data: {
                    type: MSG_HANDSHAKE_SYN
                }
            }),
            "send pending messages": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { enqueue } = param;
                enqueue.raise((param)=>{
                    let { context } = param;
                    return {
                        type: "request",
                        data: context.buffer.map((param)=>{
                            let { data, type } = param;
                            return {
                                data,
                                type
                            };
                        })
                    };
                }), enqueue.emit((param)=>{
                    let { context } = param;
                    return {
                        type: "buffer.flushed",
                        messages: context.buffer
                    };
                }), enqueue.assign({
                    buffer: []
                });
            }),
            "set target": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                target: (param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "target.set"), event.target;
                }
            })
        },
        guards: {
            "has target": (param)=>{
                let { context } = param;
                return !!context.target;
            },
            "should send heartbeats": (param)=>{
                let { context } = param;
                return context.heartbeat;
            }
        }
    }).createMachine({
        /** @xstate-layout N4IgpgJg5mDOIC5QGMAWBDAdpsAbAxAC7oBOMhAdLGIQNoAMAuoqAA4D2sAloV+5ixAAPRAHZRAJgoAWABz0ArHICMy2QGZZCgJwAaEAE9EE+tIrb6ANgkLl46fTuj1AXxf60WHARJgAjgCucJSwAcjIcLAMzEggHNy8-IIiCKLS2hQS6qb2yurisrL6RgjK9LIyCuqq0g7WstZuHhjYePi+gcEUAGboXLiQ0YLxPHwCsSmiCgoykpayDtqS6trqxYjKEk0gnq24FFwQA-jI-DjIdEzDnKNJExuOZpZ12eq29OrSCuupypYUojUaTKCnm5Wk2123gORzA+HilxibBuiXGoBSGnUAIU4gU9FWamUtR+lmUM1EllBEkslMUEnpkJa0JaEFgGAA1lxMFB8LADJghrERqjkhtshk3mTtNo5OpqpYfqCKhTptoqpY1WUtu4dky8BQWWz0Jzue1-EFYIjrgkxqLSupqRRPpoPqJtLI0hIioZENJJE7NnJ8ZYHVk1YyvPrDRyuTyEYLkTa7uixVlMh81KGFhS1j6EPkZlpVjTphr8mkI3sDVhWTHTQBbSLoGAUXwRLgAN0GVyFKNt91KimUFEKXvKC2s9R+6X+jipnzJeSqEJ1UKjNaNJp5EC4sFOrQuCbifeTwg2cgoym0RPxDtqkj0eaB9Ao8zSolMEivZVcq71+33c5CEgeFOCtXskzRM8EDxKRpmkSw3QJbQsmpH5tHmV8JHSbJpDsakV2aSMALOMALhAjoLXAxNbiglI-SxWw1Vw0QNDw0Qfg9KQ7EJSxHHxApK2hQCyOAiAzVgDhMGoI9hX7FMEHSF8cWkelpHURCbBsb481xAEgT9BQJCmWQsiE-URPI8TG1gWBmzAVsyLATtuyRY9ILtWoKmlL82Kqd0tAVJ91LMHFZDKIkVlkNVZHMkiDzE-Adz3UjDx7GiRQHCKnheD53k+HSSkDDIwpBVTqQwuKKEssSDTAUhCAAI3qyg0DIrd8Fkk86MQUMnVM+RynoegTDJH48hGp0vR-FDRqqKqasgOqGua9AQjATAd1NSiul6fpXOtWi7Wy19cslD4vnG7IX3oVjVDUVYEJQqrksW8SdstLqPKy0wKgG1RhtMWogqKhoMjkWp6XxUyFBe3c3tAz70vco6fq+V8PTkGUFzdQqNnELEM2yClrwwzQ4ZShKQJqr7UYU98AS0W9pT4z5pHG0yXwMkNNTyGk3B1TB2AgOBBDXXBDsyhSFG9EovQqN5i1JeRcKqw4Bkl+ToMx8x0j+EaqQ9XMSkBURMgMkEwQWKro2NWNNdPFJAzN0lJGM4slDxhBEJfXyplBd03wW1KxIdnrBxBh4JAyW75C8rJpmDqmIGWkgmpasPjqUcaHooMLHA0uU1UkJOgKW1B6rT1bWor5At0zgcTAkK7hrz1irB0D8cW0UvRPLyv07WqgNq2qAG+l9SnXUz0UOXD5xuMs3Y4+DVJBX7UiKrV6Q8gcfoJO54rFefLLqfJYX1WKYNLxL4NO1NwgA */ id: "connection",
        context: (param)=>{
            let { input } = param;
            var _input_domain, _input_heartbeat;
            return {
                id: input.id || "".concat(input.name, "-").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()),
                buffer: [],
                channelId: "chn-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()),
                connectTo: input.connectTo,
                domain: (_input_domain = input.domain) !== null && _input_domain !== void 0 ? _input_domain : DOMAIN,
                heartbeat: (_input_heartbeat = input.heartbeat) !== null && _input_heartbeat !== void 0 ? _input_heartbeat : !1,
                name: input.name,
                requests: [],
                target: input.target,
                targetOrigin: input.targetOrigin
            };
        },
        on: {
            "target.set": {
                actions: "set target"
            },
            "request.success": {
                actions: "remove request"
            },
            "request.failed": {
                actions: "remove request"
            }
        },
        initial: "idle",
        states: {
            idle: {
                entry: [
                    {
                        type: "emit status",
                        params: {
                            status: "idle"
                        }
                    }
                ],
                on: {
                    connect: {
                        target: "handshaking",
                        guard: "has target"
                    },
                    post: {
                        actions: "buffer message"
                    }
                }
            },
            handshaking: {
                id: "handshaking",
                entry: [
                    {
                        type: "emit status",
                        params: {
                            status: "handshaking"
                        }
                    }
                ],
                invoke: [
                    {
                        id: "send syn",
                        src: "sendBackAtInterval",
                        input: ()=>({
                                event: {
                                    type: "syn"
                                },
                                interval: HANDSHAKE_INTERVAL,
                                immediate: !0
                            })
                    },
                    {
                        id: "listen for handshake",
                        src: "listen",
                        input: (input)=>listenInputFromContext({
                                include: MSG_HANDSHAKE_SYN_ACK,
                                count: 1
                            })(input)
                    }
                ],
                on: {
                    syn: {
                        actions: "send handshake syn"
                    },
                    request: {
                        actions: "create request"
                    },
                    post: {
                        actions: "buffer message"
                    },
                    "message.received": {
                        target: "connected"
                    },
                    disconnect: {
                        target: "disconnected"
                    }
                },
                exit: "send handshake ack"
            },
            connected: {
                entry: [
                    "send pending messages",
                    {
                        type: "emit status",
                        params: {
                            status: "connected"
                        }
                    }
                ],
                invoke: {
                    id: "listen for messages",
                    src: "listen",
                    input: listenInputFromContext({
                        exclude: [
                            MSG_RESPONSE,
                            MSG_HEARTBEAT
                        ]
                    })
                },
                on: {
                    post: {
                        actions: "post message"
                    },
                    request: {
                        actions: "create request"
                    },
                    response: {
                        actions: "respond"
                    },
                    "message.received": {
                        actions: "emit received message"
                    },
                    disconnect: {
                        target: "disconnected"
                    }
                },
                initial: "heartbeat",
                states: {
                    heartbeat: {
                        initial: "checking",
                        states: {
                            checking: {
                                always: {
                                    guard: "should send heartbeats",
                                    target: "sending"
                                }
                            },
                            sending: {
                                on: {
                                    "request.failed": {
                                        target: "#handshaking"
                                    }
                                },
                                invoke: {
                                    id: "send heartbeat",
                                    src: "sendBackAtInterval",
                                    input: ()=>({
                                            event: {
                                                type: "post",
                                                data: {
                                                    type: MSG_HEARTBEAT,
                                                    data: void 0
                                                }
                                            },
                                            interval: 2e3,
                                            immediate: !1
                                        })
                                }
                            }
                        }
                    }
                }
            },
            disconnected: {
                id: "disconnected",
                entry: [
                    "send disconnect",
                    {
                        type: "emit status",
                        params: {
                            status: "disconnected"
                        }
                    }
                ],
                on: {
                    request: {
                        actions: "create request"
                    },
                    post: {
                        actions: "buffer message"
                    },
                    connect: {
                        target: "handshaking",
                        guard: "has target"
                    }
                }
            }
        }
    }), createConnection = function(input) {
    let machine = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : createConnectionMachine();
    const id = input.id || "".concat(input.name, "-").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()), actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__createActor$3e$__["createActor"])(machine, {
        input: {
            ...input,
            id
        }
    }), eventHandlers = /* @__PURE__ */ new Map(), unhandledMessages = /* @__PURE__ */ new Map(), on = (type, handler, options)=>{
        const handlers = eventHandlers.get(type) || /* @__PURE__ */ new Set();
        eventHandlers.has(type) || eventHandlers.set(type, handlers), handlers.add(handler);
        const unhandledMessagesForType = unhandledMessages.get(type);
        if (unhandledMessagesForType) {
            var _options_replay;
            const replayCount = (_options_replay = options === null || options === void 0 ? void 0 : options.replay) !== null && _options_replay !== void 0 ? _options_replay : 1;
            Array.from(unhandledMessagesForType).slice(-replayCount).forEach(async (param)=>{
                let { data, id: id2 } = param;
                const response = await handler(data);
                response && actor.send({
                    type: "response",
                    respondTo: id2,
                    data: response
                });
            }), unhandledMessages.delete(type);
        }
        return ()=>{
            handlers.delete(handler);
        };
    }, connect = ()=>{
        actor.send({
            type: "connect"
        });
    }, disconnect = ()=>{
        actor.send({
            type: "disconnect"
        });
    }, onStatus = (handler, filter2)=>{
        const subscription = actor.on("status", (event)=>{
            filter2 && event.status !== filter2 || handler(event.status);
        });
        return ()=>subscription.unsubscribe();
    }, setTarget = (target)=>{
        actor.send({
            type: "target.set",
            target
        });
    }, post = (type, data)=>{
        const _data = {
            type,
            data
        };
        actor.send({
            type: "post",
            data: _data
        });
    };
    actor.on("message", async (param)=>{
        let { message } = param;
        const handlers = eventHandlers.get(message.type);
        if (handlers) {
            handlers.forEach(async (handler)=>{
                const response = await handler(message.data);
                response && actor.send({
                    type: "response",
                    respondTo: message.id,
                    data: response
                });
            });
            return;
        }
        const unhandledMessagesForType = unhandledMessages.get(message.type);
        unhandledMessagesForType ? unhandledMessagesForType.add(message) : unhandledMessages.set(message.type, /* @__PURE__ */ new Set([
            message
        ]));
    });
    const stop = ()=>{
        actor.stop();
    }, start = ()=>(actor.start(), stop);
    return {
        actor,
        connect,
        disconnect,
        id,
        name: input.name,
        machine,
        on,
        onStatus,
        post,
        setTarget,
        start,
        stop,
        get target () {
            return actor.getSnapshot().context.target;
        }
    };
}, cleanupConnection = (connection)=>{
    connection.disconnect(), setTimeout(()=>{
        connection.stop();
    }, 0);
}, noop = ()=>{}, createController = (input)=>{
    const { targetOrigin } = input, targets = /* @__PURE__ */ new Set(), channels = /* @__PURE__ */ new Set();
    return {
        addTarget: (target)=>{
            if (targets.has(target)) return noop;
            if (!targets.size || !channels.size) return targets.add(target), channels.forEach((channel)=>{
                channel.connections.forEach((connection)=>{
                    connection.setTarget(target), connection.connect();
                });
            }), ()=>{
                targets.delete(target), channels.forEach((channel)=>{
                    channel.connections.forEach((connection)=>{
                        connection.target === target && connection.disconnect();
                    });
                });
            };
            targets.add(target);
            const targetConnections = /* @__PURE__ */ new Set();
            return channels.forEach((channel)=>{
                const connection = createConnection({
                    ...channel.input,
                    target,
                    targetOrigin
                }, channel.machine);
                targetConnections.add(connection), channel.connections.add(connection), channel.subscribers.forEach((param)=>{
                    let { type, handler, unsubscribers } = param;
                    unsubscribers.push(connection.on(type, handler));
                }), channel.internalEventSubscribers.forEach((param)=>{
                    let { type, handler, unsubscribers } = param;
                    const subscription = connection.actor.on(type, handler);
                    unsubscribers.push(()=>subscription.unsubscribe());
                }), channel.statusSubscribers.forEach((param)=>{
                    let { handler, unsubscribers } = param;
                    unsubscribers.push(connection.onStatus((status)=>handler({
                            connection: connection.id,
                            status
                        })));
                }), connection.start(), connection.connect();
            }), ()=>{
                targets.delete(target), targetConnections.forEach((connection)=>{
                    cleanupConnection(connection), channels.forEach((channel)=>{
                        channel.connections.delete(connection);
                    });
                });
            };
        },
        createChannel: function(input2) {
            let machine = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : createConnectionMachine();
            const channel = {
                connections: /* @__PURE__ */ new Set(),
                input: input2,
                internalEventSubscribers: /* @__PURE__ */ new Set(),
                machine,
                statusSubscribers: /* @__PURE__ */ new Set(),
                subscribers: /* @__PURE__ */ new Set()
            };
            channels.add(channel);
            const { connections, internalEventSubscribers, statusSubscribers, subscribers } = channel;
            if (targets.size) targets.forEach((target)=>{
                const connection = createConnection({
                    ...input2,
                    target,
                    targetOrigin
                }, machine);
                connections.add(connection);
            });
            else {
                const connection = createConnection({
                    ...input2,
                    targetOrigin
                }, machine);
                connections.add(connection);
            }
            const post = function() {
                for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
                    params[_key] = arguments[_key];
                }
                const [type, data] = params;
                connections.forEach((connection)=>{
                    connection.post(type, data);
                });
            }, on = (type, handler)=>{
                const unsubscribers = [];
                connections.forEach((connection)=>{
                    unsubscribers.push(connection.on(type, handler));
                });
                const subscriber = {
                    type,
                    handler,
                    unsubscribers
                };
                return subscribers.add(subscriber), ()=>{
                    unsubscribers.forEach((unsub)=>unsub()), subscribers.delete(subscriber);
                };
            }, onInternalEvent = (type, handler)=>{
                const unsubscribers = [];
                connections.forEach((connection)=>{
                    const subscription = connection.actor.on(type, handler);
                    unsubscribers.push(()=>subscription.unsubscribe());
                });
                const subscriber = {
                    type,
                    handler,
                    unsubscribers
                };
                return internalEventSubscribers.add(subscriber), ()=>{
                    unsubscribers.forEach((unsub)=>unsub()), internalEventSubscribers.delete(subscriber);
                };
            }, onStatus = (handler)=>{
                const unsubscribers = [];
                connections.forEach((connection)=>{
                    unsubscribers.push(connection.onStatus((status)=>handler({
                            connection: connection.id,
                            status
                        })));
                });
                const subscriber = {
                    handler,
                    unsubscribers
                };
                return statusSubscribers.add(subscriber), ()=>{
                    unsubscribers.forEach((unsub)=>unsub()), statusSubscribers.delete(subscriber);
                };
            }, stop = ()=>{
                const connections2 = channel.connections;
                connections2.forEach(cleanupConnection), connections2.clear(), channels.delete(channel);
            };
            return {
                on,
                onInternalEvent,
                onStatus,
                post,
                start: ()=>(connections.forEach((connection)=>{
                        connection.start(), connection.connect();
                    }), stop),
                stop
            };
        },
        destroy: ()=>{
            channels.forEach((param)=>{
                let { connections } = param;
                connections.forEach(cleanupConnection), connections.clear();
            }), channels.clear(), targets.clear();
        }
    };
};
function createPromiseWithResolvers() {
    if (typeof Promise.withResolvers == "function") return Promise.withResolvers();
    let resolve, reject;
    return {
        promise: new Promise((res, rej)=>{
            resolve = res, reject = rej;
        }),
        resolve,
        reject
    };
}
const createNodeMachine = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
        types: {},
        actors: {
            requestMachine: createRequestMachine(),
            listen: createListenLogic()
        },
        actions: {
            "buffer handshake": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                handshakeBuffer: (param)=>{
                    let { event, context } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "message.received"), [
                        ...context.handshakeBuffer,
                        event
                    ];
                }
            }),
            "buffer message": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { enqueue } = param;
                enqueue.assign({
                    buffer: (param)=>{
                        let { event, context } = param;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "post"), [
                            ...context.buffer,
                            {
                                data: event.data,
                                resolvable: event.resolvable,
                                options: event.options
                            }
                        ];
                    }
                }), enqueue.emit((param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "post"), {
                        type: "buffer.added",
                        message: event.data
                    };
                });
            }),
            "create request": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                requests: (param)=>{
                    let { context, event, self, spawn } = param;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "request");
                    const requests = (Array.isArray(event.data) ? event.data : [
                        event.data
                    ]).map((request)=>{
                        var _request_options, _request_options1, _request_options2;
                        const id = "req-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])());
                        return spawn("requestMachine", {
                            id,
                            input: {
                                channelId: context.channelId,
                                data: request.data,
                                domain: context.domain,
                                expectResponse: request.expectResponse,
                                from: context.name,
                                parentRef: self,
                                resolvable: request.resolvable,
                                responseTimeout: (_request_options = request.options) === null || _request_options === void 0 ? void 0 : _request_options.responseTimeout,
                                responseTo: request.responseTo,
                                signal: (_request_options1 = request.options) === null || _request_options1 === void 0 ? void 0 : _request_options1.signal,
                                sources: context.target,
                                suppressWarnings: (_request_options2 = request.options) === null || _request_options2 === void 0 ? void 0 : _request_options2.suppressWarnings,
                                targetOrigin: context.targetOrigin,
                                to: context.connectTo,
                                type: request.type
                            }
                        });
                    });
                    return [
                        ...context.requests,
                        ...requests
                    ];
                }
            }),
            "emit heartbeat": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])(()=>({
                    type: "heartbeat"
                })),
            "emit received message": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { enqueue } = param;
                enqueue.emit((param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "message.received"), {
                        type: "message",
                        message: event.message.data
                    };
                });
            }),
            "emit status": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])((_, params)=>({
                    type: "status",
                    status: params.status
                })),
            "post message": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])((param)=>{
                let { event } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "post"), {
                    type: "request",
                    data: {
                        data: event.data.data,
                        expectResponse: !!event.resolvable,
                        type: event.data.type,
                        resolvable: event.resolvable,
                        options: event.options
                    }
                };
            }),
            "process pending handshakes": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { context, enqueue } = param;
                context.handshakeBuffer.forEach((event)=>enqueue.raise(event)), enqueue.assign({
                    handshakeBuffer: []
                });
            }),
            "remove request": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { context, enqueue, event } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                    "request.success",
                    "request.failed",
                    "request.aborted"
                ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__["stopChild"])(event.requestId), enqueue.assign({
                    requests: context.requests.filter((param)=>{
                        let { id } = param;
                        return id !== event.requestId;
                    })
                });
            }),
            "send response": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])((param)=>{
                let { event } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                    "message.received",
                    "heartbeat.received"
                ]), {
                    type: "request",
                    data: {
                        type: MSG_RESPONSE,
                        responseTo: event.message.data.id,
                        data: void 0
                    }
                };
            }),
            "send handshake syn ack": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])({
                type: "request",
                data: {
                    type: MSG_HANDSHAKE_SYN_ACK
                }
            }),
            "send pending messages": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { enqueue } = param;
                enqueue.raise((param)=>{
                    let { context } = param;
                    return {
                        type: "request",
                        data: context.buffer.map((param)=>{
                            let { data, resolvable, options } = param;
                            return {
                                data: data.data,
                                type: data.type,
                                expectResponse: !!resolvable,
                                resolvable,
                                options
                            };
                        })
                    };
                }), enqueue.emit((param)=>{
                    let { context } = param;
                    return {
                        type: "buffer.flushed",
                        messages: context.buffer.map((param)=>{
                            let { data } = param;
                            return data;
                        })
                    };
                }), enqueue.assign({
                    buffer: []
                });
            }),
            "set connection config": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
                channelId: (param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "handshake.syn"), event.message.data.channelId;
                },
                target: (param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "handshake.syn"), event.message.source || void 0;
                },
                targetOrigin: (param)=>{
                    let { event } = param;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "handshake.syn"), event.message.origin;
                }
            })
        },
        guards: {
            hasSource: (param)=>{
                let { context } = param;
                return context.target !== null;
            }
        }
    }).createMachine({
        /** @xstate-layout N4IgpgJg5mDOIC5QDsD2EwGIBOYCOArnAC4B0sBAxpXLANoAMAuoqAA6qwCWxXqyrEAA9EAVgYAWUgEYJDUQA4JAZmUSJC0coDsAGhABPRNIYLSErdOkBOAGzbx227YUBfV-rQYc+IrDIAZgCGXAA2kIwsSCAc3Lz8giIIoiakqgBMDKbp2tYS0srp+kYI0ununuhgpFwQ4ZgQ-NVcyABuqADW1V7NdWAILe2UQfHIkZGCsTx8AtFJ6aKipAzWOtrpC7Z5BUWGiNoK6aS26RLW2tLaqkqqFSA9NX2YALa0QTCkuDRcrRHMk5xpgk5ogJLZSNZIVDoVCFLZiohbIVSLkXLZRHZDgxbHcHrV6rFiBNolNRolEVJbCsdGUzsoyhiEcllOC1DowelVmVrOUPPcqqQABZBZAQWDCjotKANJo1NqdboC4Wi8VBSXIKADeXDUbjf4kwFkkEILbg8RZMHKOzWKzKJkHJa086Xa4qZS4pUisUSqU+QgkYnsQ0zcnJaRLDbpZwKNQSBYspm2MEyC5KTnaDSSd18h7K71q32EwMxYPA0BJFLKY5yZxIrKSURM0RnFHSBTrQqQ9babQejBCr2q9XSiBcWCUfjIMCUIn6oNxEPGtTWFFR0RUy7iGzt+3Ip0XURXVZKPvVCfIKczyB+vyzqLzoGzcuIG0MGTyCztjRtjaJjbHVMNAUTdu1PUhz0vYhryLOcSwXMthBfK0ZGsLQGBZekCi0Jso1IdI23WG04zOE4wIg6coIgBox3Imdi1JRdnxNOxSHNSQkWtW0mTjMxMQ7fDzgcbNKn7WjKJeN4Pi+MAfj+e84MfUMFHbZZwxOHZNDyO09gQOQjmAhZJCM9IMjIycKOvQUwCCbBiAAI2sshpNkiB6NLJ9EIQBQbWOdJlMhYCUjbJkchXGsFmsJQMVsWl3BzKp4GiHoAXgjykgAWmkZZ6xy3LZF2EobCy6xsQWJQ42kE4FjA-EwBSxTjSRUhDgqkzgO2BxdykU4AvXFQ-KjMC8yHKV6qNJi6WOdcypcZsXGxe0JG0XySKjM5lKsMyLwsiAxsYzylDfONznUEqrmi+1ThkHqXDONbULi1wgA */ id: "node",
        context: (param)=>{
            let { input } = param;
            var _input_domain;
            return {
                buffer: [],
                channelId: null,
                connectTo: input.connectTo,
                domain: (_input_domain = input.domain) !== null && _input_domain !== void 0 ? _input_domain : DOMAIN,
                handshakeBuffer: [],
                name: input.name,
                requests: [],
                target: void 0,
                targetOrigin: null
            };
        },
        // Always listen for handshake syn messages. The channel could have
        // disconnected without being able to notify the node, and so need to
        // re-establish the connection.
        invoke: {
            id: "listen for handshake syn",
            src: "listen",
            input: listenInputFromContext({
                include: MSG_HANDSHAKE_SYN,
                responseType: "handshake.syn"
            })
        },
        on: {
            "request.success": {
                actions: "remove request"
            },
            "request.failed": {
                actions: "remove request"
            },
            "request.aborted": {
                actions: "remove request"
            },
            "handshake.syn": {
                actions: "set connection config",
                target: ".handshaking"
            }
        },
        initial: "idle",
        states: {
            idle: {
                entry: [
                    {
                        type: "emit status",
                        params: {
                            status: "idle"
                        }
                    }
                ],
                on: {
                    post: {
                        actions: "buffer message"
                    }
                }
            },
            handshaking: {
                guard: "hasSource",
                entry: [
                    "send handshake syn ack",
                    {
                        type: "emit status",
                        params: {
                            status: "handshaking"
                        }
                    }
                ],
                invoke: [
                    {
                        id: "listen for handshake ack",
                        src: "listen",
                        input: listenInputFromContext({
                            include: MSG_HANDSHAKE_ACK,
                            count: 1,
                            // Override the default `message.received` responseType to prevent
                            // buffering the ack message. We transition to the connected state
                            // using onDone instead of listening to this event using `on`
                            responseType: "handshake.complete"
                        }),
                        onDone: "connected"
                    },
                    {
                        id: "listen for disconnect",
                        src: "listen",
                        input: listenInputFromContext({
                            include: MSG_DISCONNECT,
                            count: 1,
                            responseType: "disconnect"
                        })
                    },
                    {
                        id: "listen for messages",
                        src: "listen",
                        input: listenInputFromContext({
                            exclude: [
                                MSG_DISCONNECT,
                                MSG_HANDSHAKE_SYN,
                                MSG_HANDSHAKE_ACK,
                                MSG_HEARTBEAT,
                                MSG_RESPONSE
                            ]
                        })
                    }
                ],
                on: {
                    request: {
                        actions: "create request"
                    },
                    post: {
                        actions: "buffer message"
                    },
                    "message.received": {
                        actions: "buffer handshake"
                    },
                    disconnect: {
                        target: "idle"
                    }
                }
            },
            connected: {
                entry: [
                    "process pending handshakes",
                    "send pending messages",
                    {
                        type: "emit status",
                        params: {
                            status: "connected"
                        }
                    }
                ],
                invoke: [
                    {
                        id: "listen for messages",
                        src: "listen",
                        input: listenInputFromContext({
                            exclude: [
                                MSG_DISCONNECT,
                                MSG_HANDSHAKE_SYN,
                                MSG_HANDSHAKE_ACK,
                                MSG_HEARTBEAT,
                                MSG_RESPONSE
                            ]
                        })
                    },
                    {
                        id: "listen for heartbeat",
                        src: "listen",
                        input: listenInputFromContext({
                            include: MSG_HEARTBEAT,
                            responseType: "heartbeat.received"
                        })
                    },
                    {
                        id: "listen for disconnect",
                        src: "listen",
                        input: listenInputFromContext({
                            include: MSG_DISCONNECT,
                            count: 1,
                            responseType: "disconnect"
                        })
                    }
                ],
                on: {
                    request: {
                        actions: "create request"
                    },
                    post: {
                        actions: "post message"
                    },
                    disconnect: {
                        target: "idle"
                    },
                    "message.received": {
                        actions: [
                            "send response",
                            "emit received message"
                        ]
                    },
                    "heartbeat.received": {
                        actions: [
                            "send response",
                            "emit heartbeat"
                        ]
                    }
                }
            }
        }
    }), createNode = function(input) {
    let machine = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : createNodeMachine();
    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__createActor$3e$__["createActor"])(machine, {
        input
    }), eventHandlers = /* @__PURE__ */ new Map(), unhandledMessages = /* @__PURE__ */ new Map(), on = (type, handler, options)=>{
        const handlers = eventHandlers.get(type) || /* @__PURE__ */ new Set();
        eventHandlers.has(type) || eventHandlers.set(type, handlers), handlers.add(handler);
        const unhandledMessagesForType = unhandledMessages.get(type);
        if (unhandledMessagesForType) {
            var _options_replay;
            const replayCount = (_options_replay = options === null || options === void 0 ? void 0 : options.replay) !== null && _options_replay !== void 0 ? _options_replay : 1;
            Array.from(unhandledMessagesForType).slice(-replayCount).forEach((param)=>{
                let { data } = param;
                return handler(data);
            }), unhandledMessages.delete(type);
        }
        return ()=>{
            handlers.delete(handler);
        };
    };
    let cachedStatus;
    const onStatus = (handler, filter2)=>{
        const subscription = actor.on("status", (event)=>{
            cachedStatus = event.status, !(filter2 && event.status !== filter2) && handler(event.status);
        });
        return cachedStatus && handler(cachedStatus), ()=>subscription.unsubscribe();
    }, post = (type, data)=>{
        const _data = {
            type,
            data
        };
        actor.send({
            type: "post",
            data: _data
        });
    }, fetch = (type, data, options)=>{
        const { responseTimeout = FETCH_TIMEOUT_DEFAULT, signal, suppressWarnings } = options || {}, resolvable = createPromiseWithResolvers(), _data = {
            type,
            data
        };
        return actor.send({
            type: "post",
            data: _data,
            resolvable,
            options: {
                responseTimeout,
                signal,
                suppressWarnings
            }
        }), resolvable.promise;
    };
    actor.on("message", (param)=>{
        let { message } = param;
        const handlers = eventHandlers.get(message.type);
        if (handlers) {
            handlers.forEach((handler)=>handler(message.data));
            return;
        }
        const unhandledMessagesForType = unhandledMessages.get(message.type);
        unhandledMessagesForType ? unhandledMessagesForType.add(message) : unhandledMessages.set(message.type, /* @__PURE__ */ new Set([
            message
        ]));
    });
    const stop = ()=>{
        actor.stop();
    };
    return {
        actor,
        fetch,
        machine,
        on,
        onStatus,
        post,
        start: ()=>(actor.start(), stop),
        stop
    };
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+presentation-comlink@2.0.1_@sanity+client@7.13.2_@sanity+types@4.22.0_@types+react@19.0.1_/node_modules/@sanity/presentation-comlink/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCompatibilityActors",
    ()=>createCompatibilityActors,
    "isMaybePresentation",
    ()=>isMaybePresentation,
    "isMaybePreviewIframe",
    ()=>isMaybePreviewIframe,
    "isMaybePreviewWindow",
    ()=>isMaybePreviewWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+comlink@4.0.1/node_modules/@sanity/comlink/dist/index.js [app-client] (ecmascript)");
;
;
const channelsToComlinkMap = {
    "handshake/syn": __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN"],
    "handshake/syn-ack": __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN_ACK"],
    "handshake/ack": __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_ACK"],
    "channel/response": __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_RESPONSE"],
    "channel/heartbeat": __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HEARTBEAT"],
    "channel/disconnect": __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_DISCONNECT"],
    "overlay/focus": "visual-editing/focus",
    "overlay/navigate": "visual-editing/navigate",
    "overlay/toggle": "visual-editing/toggle",
    "presentation/toggleOverlay": "presentation/toggle-overlay"
}, comlinkToChannelsMap = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN"]]: "handshake/syn",
    [__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN_ACK"]]: "handshake/syn-ack",
    [__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_ACK"]]: "handshake/ack",
    [__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_RESPONSE"]]: "channel/response",
    [__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HEARTBEAT"]]: "channel/heartbeat",
    [__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_DISCONNECT"]]: "channel/disconnect",
    "visual-editing/focus": "overlay/focus",
    "visual-editing/navigate": "overlay/navigate",
    "visual-editing/toggle": "overlay/toggle",
    "presentation/toggle-overlay": "presentation/toggleOverlay"
}, convertToComlinkEvent = (event)=>{
    const { data } = event;
    var _channelsToComlinkMap_data_type;
    return data && typeof data == "object" && "domain" in data && "type" in data && "from" in data && "to" in data && (data.domain === "sanity/channels" && (data.domain = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"]), data.to === "overlays" && (data.to = "visual-editing"), data.from === "overlays" && (data.from = "visual-editing"), data.channelId = data.connectionId, delete data.connectionId, data.type = (_channelsToComlinkMap_data_type = channelsToComlinkMap[data.type]) !== null && _channelsToComlinkMap_data_type !== void 0 ? _channelsToComlinkMap_data_type : data.type), event;
}, convertToChannelsMessage = (comlinkMessage)=>{
    const { channelId, ...rest } = comlinkMessage, message = {
        ...rest,
        connectionId: channelId
    };
    var _comlinkToChannelsMap_message_type;
    return message.domain === __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"] && (message.domain = "sanity/channels"), message.to === "visual-editing" && (message.to = "overlays"), message.from === "visual-editing" && (message.from = "overlays"), message.type = (_comlinkToChannelsMap_message_type = comlinkToChannelsMap[message.type]) !== null && _comlinkToChannelsMap_message_type !== void 0 ? _comlinkToChannelsMap_message_type : message.type, message.type === "channel/response" && message.responseTo && !message.data && (message.data = {
        responseTo: message.responseTo
    }), (message.type === "handshake/syn" || message.type === "handshake/syn-ack" || message.type === "handshake/ack") && (message.data = {
        id: message.connectionId
    }), message;
}, sendAsChannelsMessage = (param, params)=>{
    let { context } = param;
    const { sources, targetOrigin } = context, message = convertToChannelsMessage(params.message);
    sources.forEach((source)=>{
        source.postMessage(message, {
            targetOrigin
        });
    });
}, createCompatibilityActors = ()=>({
        listen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createListenLogic"])(convertToComlinkEvent),
        requestMachine: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestMachine"])().provide({
            actions: {
                "send message": sendAsChannelsMessage
            }
        })
    });
function isMaybePreviewIframe() {
    return window.self !== window.top;
}
function isMaybePreviewWindow() {
    return !!window.opener;
}
function isMaybePresentation() {
    return isMaybePreviewIframe() || isMaybePreviewWindow();
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+client@7.13.2_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/isRecord.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRecord",
    ()=>isRecord
]);
function isRecord(value) {
    return typeof value == "object" && value !== null && !Array.isArray(value);
}
;
 //# sourceMappingURL=isRecord.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+client@7.13.2_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRAFTS_FOLDER",
    ()=>DRAFTS_FOLDER,
    "VERSION_FOLDER",
    ()=>VERSION_FOLDER,
    "createEditUrl",
    ()=>createEditUrl,
    "get",
    ()=>get,
    "getDraftId",
    ()=>getDraftId,
    "getPublishedId",
    ()=>getPublishedId,
    "getVersionFromId",
    ()=>getVersionFromId,
    "getVersionId",
    ()=>getVersionId,
    "isDraftId",
    ()=>isDraftId,
    "isPublishedId",
    ()=>isPublishedId,
    "isVersionId",
    ()=>isVersionId,
    "jsonPath",
    ()=>jsonPath,
    "jsonPathToStudioPath",
    ()=>jsonPathToStudioPath,
    "parseJsonPath",
    ()=>parseJsonPath,
    "reKeySegment",
    ()=>reKeySegment,
    "resolveEditInfo",
    ()=>resolveEditInfo,
    "resolveMapping",
    ()=>resolveMapping,
    "resolveStudioBaseRoute",
    ()=>resolveStudioBaseRoute,
    "studioPath",
    ()=>studioPath,
    "studioPathToJsonPath",
    ()=>studioPathToJsonPath,
    "toString",
    ()=>toString,
    "walkMap",
    ()=>walkMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$isRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+client@7.13.2_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/isRecord.js [app-client] (ecmascript)");
;
const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reKeySegment = /_key\s*==\s*['"](.*)['"]/, reIndexTuple = /^\d*:\d*$/;
function isIndexSegment(segment) {
    return typeof segment == "number" || typeof segment == "string" && /^\[\d+\]$/.test(segment);
}
function isKeySegment(segment) {
    return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function isIndexTuple(segment) {
    if (typeof segment == "string" && reIndexTuple.test(segment)) return !0;
    if (!Array.isArray(segment) || segment.length !== 2) return !1;
    const [from, to] = segment;
    return (typeof from == "number" || from === "") && (typeof to == "number" || to === "");
}
function get(obj, path, defaultVal) {
    const select = typeof path == "string" ? fromString(path) : path;
    if (!Array.isArray(select)) throw new Error("Path must be an array or a string");
    let acc = obj;
    for(let i = 0; i < select.length; i++){
        const segment = select[i];
        if (isIndexSegment(segment)) {
            if (!Array.isArray(acc)) return defaultVal;
            acc = acc[segment];
        }
        if (isKeySegment(segment)) {
            if (!Array.isArray(acc)) return defaultVal;
            acc = acc.find((item)=>item._key === segment._key);
        }
        if (typeof segment == "string" && (acc = typeof acc == "object" && acc !== null ? acc[segment] : void 0), typeof acc > "u") return defaultVal;
    }
    return acc;
}
function toString(path) {
    if (!Array.isArray(path)) throw new Error("Path is not an array");
    return path.reduce((target, segment, i)=>{
        const segmentType = typeof segment;
        if (segmentType === "number") return "".concat(target, "[").concat(segment, "]");
        if (segmentType === "string") return "".concat(target).concat(i === 0 ? "" : ".").concat(segment);
        if (isKeySegment(segment) && segment._key) return "".concat(target, '[_key=="').concat(segment._key, '"]');
        if (Array.isArray(segment)) {
            const [from, to] = segment;
            return "".concat(target, "[").concat(from, ":").concat(to, "]");
        }
        throw new Error("Unsupported path segment `".concat(JSON.stringify(segment), "`"));
    }, "");
}
function fromString(path) {
    if (typeof path != "string") throw new Error("Path is not a string");
    const segments = path.match(rePropName);
    if (!segments) throw new Error("Invalid path string");
    return segments.map(parsePathSegment);
}
function parsePathSegment(segment) {
    return isIndexSegment(segment) ? parseIndexSegment(segment) : isKeySegment(segment) ? parseKeySegment(segment) : isIndexTuple(segment) ? parseIndexTupleSegment(segment) : segment;
}
function parseIndexSegment(segment) {
    return Number(segment.replace(/[^\d]/g, ""));
}
function parseKeySegment(segment) {
    return {
        _key: segment.match(reKeySegment)[1]
    };
}
function parseIndexTupleSegment(segment) {
    const [from, to] = segment.split(":").map((seg)=>seg === "" ? seg : Number(seg));
    return [
        from,
        to
    ];
}
var studioPath = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    fromString,
    get,
    isIndexSegment,
    isIndexTuple,
    isKeySegment,
    reKeySegment,
    toString
});
const DRAFTS_FOLDER = "drafts", VERSION_FOLDER = "versions", PATH_SEPARATOR = ".", DRAFTS_PREFIX = "".concat(DRAFTS_FOLDER).concat(PATH_SEPARATOR), VERSION_PREFIX = "".concat(VERSION_FOLDER).concat(PATH_SEPARATOR);
function isDraftId(id) {
    return id.startsWith(DRAFTS_PREFIX);
}
function isVersionId(id) {
    return id.startsWith(VERSION_PREFIX);
}
function isPublishedId(id) {
    return !isDraftId(id) && !isVersionId(id);
}
function getDraftId(id) {
    if (isVersionId(id)) {
        const publishedId = getPublishedId(id);
        return DRAFTS_PREFIX + publishedId;
    }
    return isDraftId(id) ? id : DRAFTS_PREFIX + id;
}
function getVersionId(id, version) {
    if (version === "drafts" || version === "published") throw new Error('Version can not be "published" or "drafts"');
    return "".concat(VERSION_PREFIX).concat(version).concat(PATH_SEPARATOR).concat(getPublishedId(id));
}
function getVersionFromId(id) {
    if (!isVersionId(id)) return;
    const [_versionPrefix, versionId, ..._publishedId] = id.split(PATH_SEPARATOR);
    return versionId;
}
function getPublishedId(id) {
    return isVersionId(id) ? id.split(PATH_SEPARATOR).slice(2).join(PATH_SEPARATOR) : isDraftId(id) ? id.slice(DRAFTS_PREFIX.length) : id;
}
const ESCAPE = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
}, UNESCAPE = {
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
};
function jsonPath(path) {
    return "$".concat(path.map((segment)=>typeof segment == "string" ? "['".concat(segment.replace(/[\f\n\r\t'\\]/g, (match)=>ESCAPE[match]), "']") : typeof segment == "number" ? "[".concat(segment, "]") : segment._key !== "" ? "[?(@._key=='".concat(segment._key.replace(/['\\]/g, (match)=>ESCAPE[match]), "')]") : "[".concat(segment._index, "]")).join(""));
}
function jsonPathArray(path) {
    return path.map((segment)=>typeof segment == "string" ? "['".concat(segment.replace(/[\f\n\r\t'\\]/g, (match)=>ESCAPE[match]), "']") : typeof segment == "number" ? "[".concat(segment, "]") : segment._key !== "" ? "[?(@._key=='".concat(segment._key.replace(/['\\]/g, (match)=>ESCAPE[match]), "')]") : "[".concat(segment._index, "]"));
}
function parseJsonPath(path) {
    const parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
    let match;
    for(; (match = parseRe.exec(path)) !== null;){
        if (match[1] !== void 0) {
            const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m)=>UNESCAPE[m]);
            parsed.push(key);
            continue;
        }
        if (match[2] !== void 0) {
            parsed.push(parseInt(match[2], 10));
            continue;
        }
        if (match[3] !== void 0) {
            const _key = match[3].replace(/\\(\\')/g, (m)=>UNESCAPE[m]);
            parsed.push({
                _key,
                _index: -1
            });
            continue;
        }
    }
    return parsed;
}
function jsonPathToStudioPath(path) {
    return path.map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (segment._key !== "") return {
            _key: segment._key
        };
        if (segment._index !== -1) return segment._index;
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function studioPathToJsonPath(path) {
    return (typeof path == "string" ? fromString(path) : path).map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (Array.isArray(segment)) throw new Error("IndexTuple segments aren't supported:".concat(JSON.stringify(segment)));
        if (isContentSourceMapParsedPathKeyedSegment(segment)) return segment;
        if (segment._key) return {
            _key: segment._key,
            _index: -1
        };
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function isContentSourceMapParsedPathKeyedSegment(segment) {
    return typeof segment == "object" && "_key" in segment && "_index" in segment;
}
function jsonPathToMappingPath(path) {
    return path.map((segment)=>{
        if (typeof segment == "string" || typeof segment == "number") return segment;
        if (segment._index !== -1) return segment._index;
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function resolveMapping(resultPath, csm) {
    if (!(csm === null || csm === void 0 ? void 0 : csm.mappings)) return;
    const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
    if (csm.mappings[resultMappingPath] !== void 0) return {
        mapping: csm.mappings[resultMappingPath],
        matchedPath: resultMappingPath,
        pathSuffix: ""
    };
    const resultMappingPathArray = jsonPathArray(jsonPathToMappingPath(resultPath));
    for(let i = resultMappingPathArray.length - 1; i >= 0; i--){
        const key = "$".concat(resultMappingPathArray.slice(0, i).join("")), mappingFound = csm.mappings[key];
        if (mappingFound) {
            const pathSuffix = resultMappingPath.substring(key.length);
            return {
                mapping: mappingFound,
                matchedPath: key,
                pathSuffix
            };
        }
    }
}
function isArray(value) {
    return value !== null && Array.isArray(value);
}
function walkMap(value, mappingFn) {
    let path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (isArray(value)) return value.map((v, idx)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$isRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(v)) {
            const _key = v._key;
            if (typeof _key == "string") return walkMap(v, mappingFn, path.concat({
                _key,
                _index: idx
            }));
        }
        return walkMap(v, mappingFn, path.concat(idx));
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$isRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecord"])(value)) {
        if (value._type === "block" || value._type === "span") {
            const result = {
                ...value
            };
            return value._type === "block" ? result.children = walkMap(value.children, mappingFn, path.concat("children")) : value._type === "span" && (result.text = walkMap(value.text, mappingFn, path.concat("text"))), result;
        }
        return Object.fromEntries(Object.entries(value).map((param)=>{
            let [k, v] = param;
            return [
                k,
                walkMap(v, mappingFn, path.concat(k))
            ];
        }));
    }
    return mappingFn(value, path);
}
function createEditUrl(options) {
    const { baseUrl, workspace: _workspace = "default", tool: _tool = "default", id: _id, type, path, projectId, dataset } = options;
    if (!baseUrl) throw new Error("baseUrl is required");
    if (!path) throw new Error("path is required");
    if (!_id) throw new Error("id is required");
    if (baseUrl !== "/" && baseUrl.endsWith("/")) throw new Error("baseUrl must not end with a slash");
    const workspace = _workspace === "default" ? void 0 : _workspace, tool = _tool === "default" ? void 0 : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
        baseUrl,
        id,
        type,
        path: stringifiedPath
    });
    if (workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId && searchParams.set("projectId", projectId), dataset && searchParams.set("dataset", dataset), isPublishedId(_id)) searchParams.set("perspective", "published");
    else if (isVersionId(_id)) {
        const versionId = getVersionFromId(_id);
        searchParams.set("perspective", versionId);
    }
    const segments = [
        baseUrl === "/" ? "" : baseUrl
    ];
    workspace && segments.push(workspace);
    const routerParams = [
        "mode=presentation",
        "id=".concat(id),
        "type=".concat(type),
        "path=".concat(encodeURIComponent(stringifiedPath))
    ];
    return tool && routerParams.push("tool=".concat(tool)), segments.push("intent", "edit", "".concat(routerParams.join(";"), "?").concat(searchParams)), segments.join("/");
}
function resolveEditInfo(options) {
    const { resultSourceMap: csm, resultPath } = options, { mapping, pathSuffix } = resolveMapping(resultPath, csm) || {};
    if (!mapping || mapping.source.type === "literal" || mapping.source.type === "unknown") return;
    const sourceDoc = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path];
    if (sourceDoc && sourcePath) {
        const { baseUrl, workspace, tool } = resolveStudioBaseRoute(typeof options.studioUrl == "function" ? options.studioUrl(sourceDoc) : options.studioUrl);
        if (!baseUrl) return;
        const { _id, _type, _projectId, _dataset } = sourceDoc;
        return {
            baseUrl,
            workspace,
            tool,
            id: _id,
            type: _type,
            path: parseJsonPath(sourcePath + pathSuffix),
            projectId: _projectId,
            dataset: _dataset
        };
    }
}
function resolveStudioBaseRoute(studioUrl) {
    let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
    return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? {
        baseUrl
    } : {
        ...studioUrl,
        baseUrl
    };
}
;
 //# sourceMappingURL=resolveEditInfo.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+color@3.0.6/node_modules/@sanity/color/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLOR_HUES",
    ()=>COLOR_HUES,
    "COLOR_TINTS",
    ()=>COLOR_TINTS,
    "black",
    ()=>black,
    "blue",
    ()=>blue,
    "buildTints",
    ()=>buildTints,
    "color",
    ()=>color,
    "config",
    ()=>config,
    "cyan",
    ()=>cyan,
    "darken",
    ()=>darken,
    "gray",
    ()=>gray,
    "green",
    ()=>green,
    "hexToRgb",
    ()=>hexToRgb,
    "hslToRgb",
    ()=>hslToRgb,
    "hues",
    ()=>hues,
    "limit",
    ()=>limit,
    "magenta",
    ()=>magenta,
    "orange",
    ()=>orange,
    "purple",
    ()=>purple,
    "red",
    ()=>red,
    "rgbToHex",
    ()=>rgbToHex,
    "rgbToHsl",
    ()=>rgbToHsl,
    "screen",
    ()=>screen,
    "white",
    ()=>white,
    "yellow",
    ()=>yellow
]);
const COLOR_HUES = [
    "gray",
    "blue",
    "purple",
    "magenta",
    "red",
    "orange",
    "yellow",
    "green",
    "cyan"
], COLOR_TINTS = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950"
];
function hslToRgb(hsl) {
    const h = hsl[0], s = hsl[1] / 100, l = hsl[2] / 100, k = (n)=>(n + h / 30) % 12, a = s * Math.min(l, 1 - l), f = (n)=>l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [
        255 * f(0),
        255 * f(8),
        255 * f(4)
    ];
}
function rgbToHex(param) {
    let [r, g, b] = param;
    const _r = Math.round(r), _g = Math.round(g), _b = Math.round(b);
    return "#" + ((1 << 24) + (_r << 16) + (_g << 8) + _b).toString(16).slice(1);
}
function buildTints(options) {
    const { hueKey, color: color2 } = options;
    return COLOR_TINTS.reduce((acc, tintKey)=>{
        const tint = Number(tintKey), rgb = hslToRgb(color2.tints[tintKey].hsl), hex = rgbToHex([
            Math.round(rgb[0]),
            Math.round(rgb[1]),
            Math.round(rgb[2])
        ]);
        return acc[tintKey] = {
            title: "".concat(hueKey.slice(0, 1).toUpperCase()).concat(hueKey.slice(1), " ").concat(tint),
            hex
        }, acc;
    }, {});
}
const black = {
    title: "Black",
    hex: "#0d0e12"
}, white = {
    title: "White",
    hex: "#ffffff"
}, gray = {
    50: {
        title: "Gray 50",
        hex: "#f6f6f8"
    },
    100: {
        title: "Gray 100",
        hex: "#eeeef1"
    },
    200: {
        title: "Gray 200",
        hex: "#e3e4e8"
    },
    300: {
        title: "Gray 300",
        hex: "#bbbdc9"
    },
    400: {
        title: "Gray 400",
        hex: "#9499ad"
    },
    500: {
        title: "Gray 500",
        hex: "#727892"
    },
    600: {
        title: "Gray 600",
        hex: "#515870"
    },
    700: {
        title: "Gray 700",
        hex: "#383d51"
    },
    800: {
        title: "Gray 800",
        hex: "#252837"
    },
    900: {
        title: "Gray 900",
        hex: "#1b1d27"
    },
    950: {
        title: "Gray 950",
        hex: "#13141b"
    }
}, blue = {
    50: {
        title: "Blue 50",
        hex: "#f5f8ff"
    },
    100: {
        title: "Blue 100",
        hex: "#e5edff"
    },
    200: {
        title: "Blue 200",
        hex: "#dbe5ff"
    },
    300: {
        title: "Blue 300",
        hex: "#a8bfff"
    },
    400: {
        title: "Blue 400",
        hex: "#7595ff"
    },
    500: {
        title: "Blue 500",
        hex: "#556bfc"
    },
    600: {
        title: "Blue 600",
        hex: "#4043e7"
    },
    700: {
        title: "Blue 700",
        hex: "#2927aa"
    },
    800: {
        title: "Blue 800",
        hex: "#192457"
    },
    900: {
        title: "Blue 900",
        hex: "#161a41"
    },
    950: {
        title: "Blue 950",
        hex: "#101228"
    }
}, purple = {
    50: {
        title: "Purple 50",
        hex: "#f8f5ff"
    },
    100: {
        title: "Purple 100",
        hex: "#f1ebff"
    },
    200: {
        title: "Purple 200",
        hex: "#ece1fe"
    },
    300: {
        title: "Purple 300",
        hex: "#ccb1fc"
    },
    400: {
        title: "Purple 400",
        hex: "#b087f7"
    },
    500: {
        title: "Purple 500",
        hex: "#8f57ef"
    },
    600: {
        title: "Purple 600",
        hex: "#721fe5"
    },
    700: {
        title: "Purple 700",
        hex: "#4c1a9e"
    },
    800: {
        title: "Purple 800",
        hex: "#2f1862"
    },
    900: {
        title: "Purple 900",
        hex: "#23173f"
    },
    950: {
        title: "Purple 950",
        hex: "#181128"
    }
}, magenta = {
    50: {
        title: "Magenta 50",
        hex: "#fef6f9"
    },
    100: {
        title: "Magenta 100",
        hex: "#fde8ef"
    },
    200: {
        title: "Magenta 200",
        hex: "#fcdee9"
    },
    300: {
        title: "Magenta 300",
        hex: "#f7abc5"
    },
    400: {
        title: "Magenta 400",
        hex: "#f0709b"
    },
    500: {
        title: "Magenta 500",
        hex: "#e72767"
    },
    600: {
        title: "Magenta 600",
        hex: "#b11651"
    },
    700: {
        title: "Magenta 700",
        hex: "#7c1342"
    },
    800: {
        title: "Magenta 800",
        hex: "#4b1130"
    },
    900: {
        title: "Magenta 900",
        hex: "#341325"
    },
    950: {
        title: "Magenta 950",
        hex: "#1f0f14"
    }
}, red = {
    50: {
        title: "Red 50",
        hex: "#fff6f5"
    },
    100: {
        title: "Red 100",
        hex: "#ffe7e5"
    },
    200: {
        title: "Red 200",
        hex: "#ffdedc"
    },
    300: {
        title: "Red 300",
        hex: "#fdada5"
    },
    400: {
        title: "Red 400",
        hex: "#f77769"
    },
    500: {
        title: "Red 500",
        hex: "#ef4434"
    },
    600: {
        title: "Red 600",
        hex: "#cc2819"
    },
    700: {
        title: "Red 700",
        hex: "#8b2018"
    },
    800: {
        title: "Red 800",
        hex: "#4d1714"
    },
    900: {
        title: "Red 900",
        hex: "#321615"
    },
    950: {
        title: "Red 950",
        hex: "#1e1011"
    }
}, orange = {
    50: {
        title: "Orange 50",
        hex: "#fff7f0"
    },
    100: {
        title: "Orange 100",
        hex: "#ffeadb"
    },
    200: {
        title: "Orange 200",
        hex: "#ffddc7"
    },
    300: {
        title: "Orange 300",
        hex: "#ffb685"
    },
    400: {
        title: "Orange 400",
        hex: "#ff8e42"
    },
    500: {
        title: "Orange 500",
        hex: "#fa6400"
    },
    600: {
        title: "Orange 600",
        hex: "#b14802"
    },
    700: {
        title: "Orange 700",
        hex: "#7c3404"
    },
    800: {
        title: "Orange 800",
        hex: "#461e07"
    },
    900: {
        title: "Orange 900",
        hex: "#32160b"
    },
    950: {
        title: "Orange 950",
        hex: "#21120d"
    }
}, yellow = {
    50: {
        title: "Yellow 50",
        hex: "#fefae1"
    },
    100: {
        title: "Yellow 100",
        hex: "#fcf3bb"
    },
    200: {
        title: "Yellow 200",
        hex: "#f9e994"
    },
    300: {
        title: "Yellow 300",
        hex: "#f7d455"
    },
    400: {
        title: "Yellow 400",
        hex: "#f9bc15"
    },
    500: {
        title: "Yellow 500",
        hex: "#d28a04"
    },
    600: {
        title: "Yellow 600",
        hex: "#965908"
    },
    700: {
        title: "Yellow 700",
        hex: "#653a0b"
    },
    800: {
        title: "Yellow 800",
        hex: "#3b220c"
    },
    900: {
        title: "Yellow 900",
        hex: "#271a11"
    },
    950: {
        title: "Yellow 950",
        hex: "#181410"
    }
}, green = {
    50: {
        title: "Green 50",
        hex: "#e7fef5"
    },
    100: {
        title: "Green 100",
        hex: "#c5fce8"
    },
    200: {
        title: "Green 200",
        hex: "#a9f9dc"
    },
    300: {
        title: "Green 300",
        hex: "#59f3ba"
    },
    400: {
        title: "Green 400",
        hex: "#0ff0a1"
    },
    500: {
        title: "Green 500",
        hex: "#04b97a"
    },
    600: {
        title: "Green 600",
        hex: "#01794f"
    },
    700: {
        title: "Green 700",
        hex: "#015133"
    },
    800: {
        title: "Green 800",
        hex: "#023120"
    },
    900: {
        title: "Green 900",
        hex: "#06231a"
    },
    950: {
        title: "Green 950",
        hex: "#071715"
    }
}, cyan = {
    50: {
        title: "Cyan 50",
        hex: "#e7fefe"
    },
    100: {
        title: "Cyan 100",
        hex: "#c5fcfc"
    },
    200: {
        title: "Cyan 200",
        hex: "#96f8f8"
    },
    300: {
        title: "Cyan 300",
        hex: "#62efef"
    },
    400: {
        title: "Cyan 400",
        hex: "#18e2e2"
    },
    500: {
        title: "Cyan 500",
        hex: "#04b8be"
    },
    600: {
        title: "Cyan 600",
        hex: "#037782"
    },
    700: {
        title: "Cyan 700",
        hex: "#024950"
    },
    800: {
        title: "Cyan 800",
        hex: "#042f34"
    },
    900: {
        title: "Cyan 900",
        hex: "#072227"
    },
    950: {
        title: "Cyan 950",
        hex: "#0d181c"
    }
}, hues = {
    gray,
    blue,
    purple,
    magenta,
    red,
    orange,
    yellow,
    green,
    cyan
}, color = {
    black,
    white,
    ...hues
}, config = {
    black: {
        title: "Black",
        hsl: [
            225,
            16,
            6
        ]
    },
    white: {
        title: "White",
        hsl: [
            0,
            0,
            100
        ]
    },
    gray: {
        title: "Gray",
        tints: {
            50: {
                title: "Gray 50",
                hsl: [
                    240,
                    12,
                    97
                ]
            },
            100: {
                title: "Gray 100",
                hsl: [
                    240,
                    10,
                    94
                ]
            },
            200: {
                title: "Gray 200",
                hsl: [
                    231,
                    10,
                    90
                ]
            },
            300: {
                title: "Gray 300",
                hsl: [
                    232,
                    11,
                    76
                ]
            },
            400: {
                title: "Gray 400",
                hsl: [
                    228,
                    13,
                    63
                ]
            },
            500: {
                title: "Gray 500",
                hsl: [
                    229,
                    13,
                    51
                ]
            },
            600: {
                title: "Gray 600",
                hsl: [
                    228,
                    16,
                    38
                ]
            },
            700: {
                title: "Gray 700",
                hsl: [
                    229,
                    18,
                    27
                ]
            },
            800: {
                title: "Gray 800",
                hsl: [
                    229,
                    19,
                    18
                ]
            },
            900: {
                title: "Gray 900",
                hsl: [
                    228,
                    19,
                    13
                ]
            },
            950: {
                title: "Gray 950",
                hsl: [
                    233,
                    17,
                    9
                ]
            }
        }
    },
    blue: {
        title: "Blue",
        tints: {
            50: {
                title: "Blue 50",
                hsl: [
                    222,
                    100,
                    98
                ]
            },
            100: {
                title: "Blue 100",
                hsl: [
                    222,
                    100,
                    95
                ]
            },
            200: {
                title: "Blue 200",
                hsl: [
                    223,
                    100,
                    93
                ]
            },
            300: {
                title: "Blue 300",
                hsl: [
                    224,
                    100,
                    83
                ]
            },
            400: {
                title: "Blue 400",
                hsl: [
                    226,
                    100,
                    73
                ]
            },
            500: {
                title: "Blue 500",
                hsl: [
                    232,
                    96,
                    66
                ]
            },
            600: {
                title: "Blue 600",
                hsl: [
                    239,
                    78,
                    58
                ]
            },
            700: {
                title: "Blue 700",
                hsl: [
                    241,
                    63,
                    41
                ]
            },
            800: {
                title: "Blue 800",
                hsl: [
                    230,
                    55,
                    22
                ]
            },
            900: {
                title: "Blue 900",
                hsl: [
                    234,
                    49,
                    17
                ]
            },
            950: {
                title: "Blue 950",
                hsl: [
                    235,
                    43,
                    11
                ]
            }
        }
    },
    purple: {
        title: "Purple",
        tints: {
            50: {
                title: "Purple 50",
                hsl: [
                    260,
                    95,
                    98
                ]
            },
            100: {
                title: "Purple 100",
                hsl: [
                    260,
                    98,
                    96
                ]
            },
            200: {
                title: "Purple 200",
                hsl: [
                    263,
                    96,
                    94
                ]
            },
            300: {
                title: "Purple 300",
                hsl: [
                    262,
                    92,
                    84
                ]
            },
            400: {
                title: "Purple 400",
                hsl: [
                    262,
                    88,
                    75
                ]
            },
            500: {
                title: "Purple 500",
                hsl: [
                    262,
                    83,
                    64
                ]
            },
            600: {
                title: "Purple 600",
                hsl: [
                    265,
                    79,
                    51
                ]
            },
            700: {
                title: "Purple 700",
                hsl: [
                    263,
                    72,
                    36
                ]
            },
            800: {
                title: "Purple 800",
                hsl: [
                    258,
                    60,
                    24
                ]
            },
            900: {
                title: "Purple 900",
                hsl: [
                    257,
                    46,
                    17
                ]
            },
            950: {
                title: "Purple 950",
                hsl: [
                    260,
                    41,
                    11
                ]
            }
        }
    },
    magenta: {
        title: "Magenta",
        tints: {
            50: {
                title: "Magenta 50",
                hsl: [
                    340,
                    82,
                    98
                ]
            },
            100: {
                title: "Magenta 100",
                hsl: [
                    339,
                    83,
                    95
                ]
            },
            200: {
                title: "Magenta 200",
                hsl: [
                    339,
                    83,
                    93
                ]
            },
            300: {
                title: "Magenta 300",
                hsl: [
                    340,
                    82,
                    82
                ]
            },
            400: {
                title: "Magenta 400",
                hsl: [
                    340,
                    81,
                    69
                ]
            },
            500: {
                title: "Magenta 500",
                hsl: [
                    340,
                    80,
                    53
                ]
            },
            600: {
                title: "Magenta 600",
                hsl: [
                    337,
                    78,
                    39
                ]
            },
            700: {
                title: "Magenta 700",
                hsl: [
                    333,
                    73,
                    28
                ]
            },
            800: {
                title: "Magenta 800",
                hsl: [
                    328,
                    63,
                    18
                ]
            },
            900: {
                title: "Magenta 900",
                hsl: [
                    327,
                    46,
                    14
                ]
            },
            950: {
                title: "Magenta 950",
                hsl: [
                    341,
                    35,
                    9
                ]
            }
        }
    },
    red: {
        title: "Red",
        tints: {
            50: {
                title: "Red 50",
                hsl: [
                    5,
                    100,
                    98
                ]
            },
            100: {
                title: "Red 100",
                hsl: [
                    4,
                    100,
                    95
                ]
            },
            200: {
                title: "Red 200",
                hsl: [
                    4,
                    98,
                    93
                ]
            },
            300: {
                title: "Red 300",
                hsl: [
                    5,
                    95,
                    82
                ]
            },
            400: {
                title: "Red 400",
                hsl: [
                    6,
                    90,
                    69
                ]
            },
            500: {
                title: "Red 500",
                hsl: [
                    5,
                    85,
                    57
                ]
            },
            600: {
                title: "Red 600",
                hsl: [
                    5,
                    78,
                    45
                ]
            },
            700: {
                title: "Red 700",
                hsl: [
                    4,
                    70,
                    32
                ]
            },
            800: {
                title: "Red 800",
                hsl: [
                    3,
                    58,
                    19
                ]
            },
            900: {
                title: "Red 900",
                hsl: [
                    2,
                    41,
                    14
                ]
            },
            950: {
                title: "Red 950",
                hsl: [
                    356,
                    30,
                    9
                ]
            }
        }
    },
    orange: {
        title: "Orange",
        tints: {
            50: {
                title: "Orange 50",
                hsl: [
                    28,
                    100,
                    97
                ]
            },
            100: {
                title: "Orange 100",
                hsl: [
                    25,
                    100,
                    93
                ]
            },
            200: {
                title: "Orange 200",
                hsl: [
                    24,
                    100,
                    89
                ]
            },
            300: {
                title: "Orange 300",
                hsl: [
                    24,
                    100,
                    76
                ]
            },
            400: {
                title: "Orange 400",
                hsl: [
                    24,
                    100,
                    63
                ]
            },
            500: {
                title: "Orange 500",
                hsl: [
                    24,
                    100,
                    49
                ]
            },
            600: {
                title: "Orange 600",
                hsl: [
                    24,
                    98,
                    35
                ]
            },
            700: {
                title: "Orange 700",
                hsl: [
                    24,
                    94,
                    25
                ]
            },
            800: {
                title: "Orange 800",
                hsl: [
                    22,
                    82,
                    15
                ]
            },
            900: {
                title: "Orange 900",
                hsl: [
                    17,
                    65,
                    12
                ]
            },
            950: {
                title: "Orange 950",
                hsl: [
                    14,
                    43,
                    9
                ]
            }
        }
    },
    yellow: {
        title: "Yellow",
        tints: {
            50: {
                title: "Yellow 50",
                hsl: [
                    51,
                    94,
                    94
                ]
            },
            100: {
                title: "Yellow 100",
                hsl: [
                    52,
                    91,
                    86
                ]
            },
            200: {
                title: "Yellow 200",
                hsl: [
                    50,
                    90,
                    78
                ]
            },
            300: {
                title: "Yellow 300",
                hsl: [
                    47,
                    91,
                    65
                ]
            },
            400: {
                title: "Yellow 400",
                hsl: [
                    44,
                    95,
                    53
                ]
            },
            500: {
                title: "Yellow 500",
                hsl: [
                    39,
                    96,
                    42
                ]
            },
            600: {
                title: "Yellow 600",
                hsl: [
                    34,
                    90,
                    31
                ]
            },
            700: {
                title: "Yellow 700",
                hsl: [
                    31,
                    80,
                    22
                ]
            },
            800: {
                title: "Yellow 800",
                hsl: [
                    28,
                    66,
                    14
                ]
            },
            900: {
                title: "Yellow 900",
                hsl: [
                    24,
                    40,
                    11
                ]
            },
            950: {
                title: "Yellow 950",
                hsl: [
                    24,
                    20,
                    8
                ]
            }
        }
    },
    green: {
        title: "Green",
        tints: {
            50: {
                title: "Green 50",
                hsl: [
                    157,
                    89,
                    95
                ]
            },
            100: {
                title: "Green 100",
                hsl: [
                    158,
                    89,
                    88
                ]
            },
            200: {
                title: "Green 200",
                hsl: [
                    158,
                    87,
                    82
                ]
            },
            300: {
                title: "Green 300",
                hsl: [
                    158,
                    86,
                    65
                ]
            },
            400: {
                title: "Green 400",
                hsl: [
                    159,
                    88,
                    50
                ]
            },
            500: {
                title: "Green 500",
                hsl: [
                    159,
                    96,
                    37
                ]
            },
            600: {
                title: "Green 600",
                hsl: [
                    159,
                    98,
                    24
                ]
            },
            700: {
                title: "Green 700",
                hsl: [
                    158,
                    98,
                    16
                ]
            },
            800: {
                title: "Green 800",
                hsl: [
                    158,
                    91,
                    10
                ]
            },
            900: {
                title: "Green 900",
                hsl: [
                    162,
                    72,
                    8
                ]
            },
            950: {
                title: "Green 950",
                hsl: [
                    172,
                    51,
                    6
                ]
            }
        }
    },
    cyan: {
        title: "Cyan",
        tints: {
            50: {
                title: "Cyan 50",
                hsl: [
                    180,
                    92,
                    95
                ]
            },
            100: {
                title: "Cyan 100",
                hsl: [
                    180,
                    91,
                    88
                ]
            },
            200: {
                title: "Cyan 200",
                hsl: [
                    180,
                    87,
                    78
                ]
            },
            300: {
                title: "Cyan 300",
                hsl: [
                    180,
                    81,
                    66
                ]
            },
            400: {
                title: "Cyan 400",
                hsl: [
                    180,
                    81,
                    49
                ]
            },
            500: {
                title: "Cyan 500",
                hsl: [
                    182,
                    96,
                    38
                ]
            },
            600: {
                title: "Cyan 600",
                hsl: [
                    185,
                    96,
                    26
                ]
            },
            700: {
                title: "Cyan 700",
                hsl: [
                    185,
                    95,
                    16
                ]
            },
            800: {
                title: "Cyan 800",
                hsl: [
                    187,
                    86,
                    11
                ]
            },
            900: {
                title: "Cyan 900",
                hsl: [
                    188,
                    68,
                    9
                ]
            },
            950: {
                title: "Cyan 950",
                hsl: [
                    196,
                    37,
                    8
                ]
            }
        }
    }
};
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) throw new Error("input is not valid hex");
    return [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ];
}
function rgbToHsl(param) {
    let [r, g, b] = param;
    r /= 255, g /= 255, b /= 255;
    const cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin;
    let h = 0, s = 0, l = 0;
    return delta == 0 ? h = 0 : cmax == r ? h = (g - b) / delta % 6 : cmax == g ? h = (b - r) / delta + 2 : h = (r - g) / delta + 4, h = Math.round(h * 60), h < 0 && (h += 360), l = (cmax + cmin) / 2, s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)), s = +(s * 100).toFixed(0), l = +(l * 100).toFixed(0), [
        h,
        s,
        l
    ];
}
function clamp(num) {
    return Math.max(Math.min(num, 255), 0);
}
function darkenChannel(backdrop, source) {
    return Math.min(backdrop, source);
}
function darken(b, s) {
    return [
        Math.round(clamp(darkenChannel(b[0] / 255, s[0] / 255) * 255)),
        Math.round(clamp(darkenChannel(b[1] / 255, s[1] / 255) * 255)),
        Math.round(clamp(darkenChannel(b[2] / 255, s[2] / 255) * 255))
    ];
}
function interpolate(min, max, val) {
    const size = max - min;
    return min + size * val;
}
function limit(darkest, lightest, source) {
    const r = Math.round(interpolate(darkest[0], lightest[0], source[0] / 255)), g = Math.round(interpolate(darkest[1], lightest[1], source[1] / 255)), b = Math.round(interpolate(darkest[2], lightest[2], source[2] / 255));
    return [
        r,
        g,
        b
    ];
}
function screenChannel(backdrop, source) {
    return backdrop + source - backdrop * source;
}
function screen(b, s) {
    return [
        Math.round(clamp(screenChannel(b[0] / 255, s[0] / 255) * 255)),
        Math.round(clamp(screenChannel(b[1] / 255, s[1] / 255) * 255)),
        Math.round(clamp(screenChannel(b[2] / 255, s[2] / 255) * 255))
    ];
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoize
]);
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPropValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$8$2e$1$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)");
;
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$memoize$40$0$2e$8$2e$1$2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
        return !!ret;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
};
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARSET",
    ()=>CHARSET,
    "COMMENT",
    ()=>COMMENT,
    "COUNTER_STYLE",
    ()=>COUNTER_STYLE,
    "DECLARATION",
    ()=>DECLARATION,
    "DOCUMENT",
    ()=>DOCUMENT,
    "FONT_FACE",
    ()=>FONT_FACE,
    "FONT_FEATURE_VALUES",
    ()=>FONT_FEATURE_VALUES,
    "IMPORT",
    ()=>IMPORT,
    "KEYFRAMES",
    ()=>KEYFRAMES,
    "LAYER",
    ()=>LAYER,
    "MEDIA",
    ()=>MEDIA,
    "MOZ",
    ()=>MOZ,
    "MS",
    ()=>MS,
    "NAMESPACE",
    ()=>NAMESPACE,
    "PAGE",
    ()=>PAGE,
    "RULESET",
    ()=>RULESET,
    "SCOPE",
    ()=>SCOPE,
    "SUPPORTS",
    ()=>SUPPORTS,
    "VIEWPORT",
    ()=>VIEWPORT,
    "WEBKIT",
    ()=>WEBKIT
]);
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {number}
 * @return {number}
 */ __turbopack_context__.s([
    "abs",
    ()=>abs,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "charat",
    ()=>charat,
    "combine",
    ()=>combine,
    "filter",
    ()=>filter,
    "from",
    ()=>from,
    "hash",
    ()=>hash,
    "indexof",
    ()=>indexof,
    "match",
    ()=>match,
    "replace",
    ()=>replace,
    "sizeof",
    ()=>sizeof,
    "strlen",
    ()=>strlen,
    "substr",
    ()=>substr,
    "trim",
    ()=>trim
]);
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search, position) {
    return value.indexOf(search, position);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
function filter(array, pattern) {
    return array.filter(function(value) {
        return !match(value, pattern);
    });
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Tokenizer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "caret",
    ()=>caret,
    "char",
    ()=>char,
    "character",
    ()=>character,
    "characters",
    ()=>characters,
    "column",
    ()=>column,
    "commenter",
    ()=>commenter,
    "copy",
    ()=>copy,
    "dealloc",
    ()=>dealloc,
    "delimit",
    ()=>delimit,
    "delimiter",
    ()=>delimiter,
    "escaping",
    ()=>escaping,
    "identifier",
    ()=>identifier,
    "length",
    ()=>length,
    "lift",
    ()=>lift,
    "line",
    ()=>line,
    "next",
    ()=>next,
    "node",
    ()=>node,
    "peek",
    ()=>peek,
    "position",
    ()=>position,
    "prev",
    ()=>prev,
    "slice",
    ()=>slice,
    "token",
    ()=>token,
    "tokenize",
    ()=>tokenize,
    "tokenizer",
    ()=>tokenizer,
    "whitespace",
    ()=>whitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length, siblings) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: '',
        siblings: siblings
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0, root.siblings), root, {
        length: -root.length
    }, props);
}
function lift(root) {
    while(root.root)root = copy(root.root, {
        children: [
            root
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(root, root.siblings);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Serializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    for(var i = 0; i < children.length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"]:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(element.value = element.props.join(','))) return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Prefixer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefix",
    ()=>prefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
;
;
function prefix(value, length, children) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // tab-size
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') + (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') : '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/g, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // justify-self
        case 4200:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-column-align' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, length) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'template-', '') + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-end/);
            })) {
                return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(value + (children = children[length].value), 'span', 0) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(children, 'span', 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) : +(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-end', '-span'), 'span ', '') + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch', 0) ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        // position: sticky
        case 4949:
            // stick(y)?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 6) === 121) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Middleware.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware,
    "namespace",
    ()=>namespace,
    "prefixer",
    ()=>prefixer,
    "rulesheet",
    ()=>rulesheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Tokenizer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Prefixer.js [app-client] (ecmascript)");
;
;
;
;
;
function middleware(collection) {
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element.return = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefix"])(element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combine"])(children = element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, callback = /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    value
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"])(element, {
                                props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(children, callback)
                            });
                            break;
                        // :placeholder
                        case '::placeholder':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    value
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"])(element, {
                                props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(children, callback)
                            });
                            break;
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combine"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenize"])(value), function(value, index, children) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, 0)){
                        // \f
                        case 12:
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(value));
                        // \0 ( + > ~
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        // :
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(children[index], index = 1, -1);
                        // \s
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(children) > 1 ? '' : value;
                                case index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Parser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comment",
    ()=>comment,
    "compile",
    ()=>compile,
    "declaration",
    ()=>declaration,
    "parse",
    ()=>parse,
    "ruleset",
    ()=>ruleset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Tokenizer.js [app-client] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f', (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"])(index ? points[index - 1] : 0)) != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caret"])()), root, parent, declarations), declarations);
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(atrule === 99 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110 ? 100 : atrule){
                        // d l m s
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length, siblings);
}
function comment(value, root, parent, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length, siblings);
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>unitlessKeys
]);
var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/styled-components@6.1.19_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerStyleSheet",
    ()=>vt,
    "StyleSheetConsumer",
    ()=>Be,
    "StyleSheetContext",
    ()=>$e,
    "StyleSheetManager",
    ()=>Ye,
    "ThemeConsumer",
    ()=>tt,
    "ThemeContext",
    ()=>et,
    "ThemeProvider",
    ()=>ot,
    "__PRIVATE__",
    ()=>gt,
    "createGlobalStyle",
    ()=>ft,
    "css",
    ()=>lt,
    "default",
    ()=>dt,
    "isStyledComponent",
    ()=>se,
    "keyframes",
    ()=>mt,
    "styled",
    ()=>dt,
    "useTheme",
    ()=>nt,
    "version",
    ()=>v,
    "withTheme",
    ()=>yt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$shallowequal$40$1$2e$1$2e$0$2f$node_modules$2f$shallowequal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/shallowequal@1.1.0/node_modules/shallowequal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Middleware.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$unitless$40$0$2e$8$2e$1$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
var f = "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && (__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_ATTR || __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_ATTR) || "data-styled", m = "active", y = "data-styled-version", v = "6.1.19", g = "/*!sc*/\n", S = "undefined" != typeof window && "undefined" != typeof document, w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY && "" !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY && "" !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY ? "false" !== __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY : "production" !== ("TURBOPACK compile-time value", "development")), b = {}, E = /invalid hook call/i, N = new Set, P = function(t, n) {
    if ("TURBOPACK compile-time truthy", 1) {
        var o = n ? ' with the id of "'.concat(n, '"') : "", s = "The component ".concat(t).concat(o, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n", i = console.error;
        try {
            var a = !0;
            console.error = function(t) {
                for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
                E.test(t) ? (a = !1, N.delete(s)) : i.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    t
                ], n, !1));
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), a && !N.has(s) && (console.warn(s), N.add(s));
        } catch (e) {
            E.test(e.message) && N.delete(s);
        } finally{
            console.error = i;
        }
    }
}, _ = Object.freeze([]), C = Object.freeze({});
function I(e, t, n) {
    return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
function R(e) {
    return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi, k = 52, j = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x(e) {
    var t, n = "";
    for(t = Math.abs(e); t > k; t = t / k | 0)n = j(t % k) + n;
    return (j(t % k) + n).replace(T, "$1-$2");
}
var V, F = 5381, M = function(e, t) {
    for(var n = t.length; n;)e = 33 * e ^ t.charCodeAt(--n);
    return e;
}, z = function(e) {
    return M(F, e);
};
function $(e) {
    return x(z(e) >>> 0);
}
function B(e) {
    return "production" !== ("TURBOPACK compile-time value", "development") && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
    return "string" == typeof e && ("production" === ("TURBOPACK compile-time value", "development") || e.charAt(0) === e.charAt(0).toLowerCase());
}
var G = "function" == typeof Symbol && Symbol.for, Y = G ? Symbol.for("react.memo") : 60115, W = G ? Symbol.for("react.forward_ref") : 60112, q = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}, H = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}, U = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}, J = ((V = {})[W] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, V[Y] = U, V);
function X(e) {
    return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : q;
    //TURBOPACK unreachable
    ;
    var t;
}
var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
function oe(e, t, n) {
    if ("string" != typeof t) {
        if (ne) {
            var o = te(t);
            o && o !== ne && oe(e, o, n);
        }
        var r = K(t);
        Q && (r = r.concat(Q(t)));
        for(var s = X(e), i = X(t), a = 0; a < r.length; ++a){
            var c = r[a];
            if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
                var l = ee(t, c);
                try {
                    Z(e, c, l);
                } catch (e) {}
            }
        }
    }
    return e;
}
function re(e) {
    return "function" == typeof e;
}
function se(e) {
    return "object" == typeof e && "styledComponentId" in e;
}
function ie(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
    if (0 === e.length) return "";
    for(var n = e[0], o = 1; o < e.length; o++)n += t ? t + e[o] : e[o];
    return n;
}
function ce(e) {
    return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
    if (void 0 === n && (n = !1), !n && !ce(e) && !Array.isArray(e)) return t;
    if (Array.isArray(t)) for(var o = 0; o < t.length; o++)e[o] = le(e[o], t[o]);
    else if (ce(t)) for(var o in t)e[o] = le(e[o], t[o]);
    return e;
}
function ue(e, t) {
    Object.defineProperty(e, "toString", {
        value: t
    });
}
var pe = ("TURBOPACK compile-time truthy", 1) ? {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
    18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"
} : "TURBOPACK unreachable";
function de() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    for(var n = e[0], o = [], r = 1, s = e.length; r < s; r += 1)o.push(e[r]);
    return o.forEach(function(e) {
        n = n.replace(/%[a-z]/, e);
    }), n;
}
function he(t) {
    for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
    return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : new Error(de.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        pe[t]
    ], n, !1)).trim());
}
var fe = function() {
    function e(e) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    return e.prototype.indexOfGroup = function(e) {
        for(var t = 0, n = 0; n < e; n++)t += this.groupSizes[n];
        return t;
    }, e.prototype.insertRules = function(e, t) {
        if (e >= this.groupSizes.length) {
            for(var n = this.groupSizes, o = n.length, r = o; e >= r;)if ((r <<= 1) < 0) throw he(16, "".concat(e));
            this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
            for(var s = o; s < r; s++)this.groupSizes[s] = 0;
        }
        for(var i = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++)this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
    }, e.prototype.clearGroup = function(e) {
        if (e < this.length) {
            var t = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t;
            this.groupSizes[e] = 0;
            for(var r = n; r < o; r++)this.tag.deleteRule(n);
        }
    }, e.prototype.getGroup = function(e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for(var n = this.groupSizes[e], o = this.indexOfGroup(e), r = o + n, s = o; s < r; s++)t += "".concat(this.tag.getRule(s)).concat(g);
        return t;
    }, e;
}(), me = 1 << 30, ye = new Map, ve = new Map, ge = 1, Se = function(e) {
    if (ye.has(e)) return ye.get(e);
    for(; ve.has(ge);)ge++;
    var t = ge++;
    if ("production" !== ("TURBOPACK compile-time value", "development") && ((0 | t) < 0 || t > me)) throw he(16, "".concat(t));
    return ye.set(e, t), ve.set(t, e), t;
}, we = function(e, t) {
    ge = t + 1, ye.set(e, t), ve.set(t, e);
}, be = "style[".concat(f, "][").concat(y, '="').concat(v, '"]'), Ee = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ne = function(e, t, n) {
    for(var o, r = n.split(","), s = 0, i = r.length; s < i; s++)(o = r[s]) && e.registerName(t, o);
}, Pe = function(e, t) {
    for(var n, o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o.length; s < i; s++){
        var a = o[s].trim();
        if (a) {
            var c = a.match(Ee);
            if (c) {
                var l = 0 | parseInt(c[1], 10), u = c[2];
                0 !== l && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
            } else r.push(a);
        }
    }
}, _e = function(e) {
    for(var t = document.querySelectorAll(be), n = 0, o = t.length; n < o; n++){
        var r = t[n];
        r && r.getAttribute(f) !== m && (Pe(e, r), r.parentNode && r.parentNode.removeChild(r));
    }
};
function Ce() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie = function(e) {
    var t = document.head, n = e || t, o = document.createElement("style"), r = function(e) {
        var t = Array.from(e.querySelectorAll("style[".concat(f, "]")));
        return t[t.length - 1];
    }(n), s = void 0 !== r ? r.nextSibling : null;
    o.setAttribute(f, m), o.setAttribute(y, v);
    var i = Ce();
    return i && o.setAttribute("nonce", i), n.insertBefore(o, s), o;
}, Ae = function() {
    function e(e) {
        this.element = Ie(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
            if (e.sheet) return e.sheet;
            for(var t = document.styleSheets, n = 0, o = t.length; n < o; n++){
                var r = t[n];
                if (r.ownerNode === e) return r;
            }
            throw he(17);
        }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        try {
            return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
            return !1;
        }
    }, e.prototype.deleteRule = function(e) {
        this.sheet.deleteRule(e), this.length--;
    }, e.prototype.getRule = function(e) {
        var t = this.sheet.cssRules[e];
        return t && t.cssText ? t.cssText : "";
    }, e;
}(), Oe = function() {
    function e(e) {
        this.element = Ie(e), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t);
            return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
        }
        return !1;
    }, e.prototype.deleteRule = function(e) {
        this.element.removeChild(this.nodes[e]), this.length--;
    }, e.prototype.getRule = function(e) {
        return e < this.length ? this.nodes[e].textContent : "";
    }, e;
}(), De = function() {
    function e(e) {
        this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, e.prototype.deleteRule = function(e) {
        this.rules.splice(e, 1), this.length--;
    }, e.prototype.getRule = function(e) {
        return e < this.length ? this.rules[e] : "";
    }, e;
}(), Re = S, Te = {
    isServer: !S,
    useCSSOMInjection: !w
}, ke = function() {
    function e(e, n, o) {
        void 0 === e && (e = C), void 0 === n && (n = {});
        var r = this;
        this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, Te), e), this.gs = n, this.names = new Map(o), this.server = !!e.isServer, !this.server && S && Re && (Re = !1, _e(this)), ue(this, function() {
            return function(e) {
                for(var t = e.getTag(), n = t.length, o = "", r = function(n) {
                    var r = function(e) {
                        return ve.get(e);
                    }(n);
                    if (void 0 === r) return "continue";
                    var s = e.names.get(r), i = t.getGroup(n);
                    if (void 0 === s || !s.size || 0 === i.length) return "continue";
                    var a = "".concat(f, ".g").concat(n, '[id="').concat(r, '"]'), c = "";
                    void 0 !== s && s.forEach(function(e) {
                        e.length > 0 && (c += "".concat(e, ","));
                    }), o += "".concat(i).concat(a, '{content:"').concat(c, '"}').concat(g);
                }, s = 0; s < n; s++)r(s);
                return o;
            }(r);
        });
    }
    return e.registerId = function(e) {
        return Se(e);
    }, e.prototype.rehydrate = function() {
        !this.server && S && _e(this);
    }, e.prototype.reconstructWithOptions = function(n, o) {
        return void 0 === o && (o = !0), new e((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, this.options), n), this.gs, o && this.names || void 0);
    }, e.prototype.allocateGSInstance = function(e) {
        return this.gs[e] = (this.gs[e] || 0) + 1;
    }, e.prototype.getTag = function() {
        return this.tag || (this.tag = (e = function(e) {
            var t = e.useCSSOMInjection, n = e.target;
            return e.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
        }(this.options), new fe(e)));
        //TURBOPACK unreachable
        ;
        var e;
    }, e.prototype.hasNameForId = function(e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
    }, e.prototype.registerName = function(e, t) {
        if (Se(e), this.names.has(e)) this.names.get(e).add(t);
        else {
            var n = new Set;
            n.add(t), this.names.set(e, n);
        }
    }, e.prototype.insertRules = function(e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(Se(e), n);
    }, e.prototype.clearNames = function(e) {
        this.names.has(e) && this.names.get(e).clear();
    }, e.prototype.clearRules = function(e) {
        this.getTag().clearGroup(Se(e)), this.clearNames(e);
    }, e.prototype.clearTag = function() {
        this.tag = void 0;
    }, e;
}(), je = /&/g, xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
    return e.map(function(e) {
        return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(e) {
            return "".concat(t, " ").concat(e);
        })), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Ve(e.children, t)), e;
    });
}
function Fe(e) {
    var t, n, o, r = void 0 === e ? C : e, s = r.options, i = void 0 === s ? C : s, a = r.plugins, c = void 0 === a ? _ : a, l = function(e, o, r) {
        return r.startsWith(n) && r.endsWith(n) && r.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
    }, u = c.slice();
    u.push(function(e) {
        e.type === __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"] && e.value.includes("&") && (e.props[0] = e.props[0].replace(je, n).replace(o, l));
    }), i.prefix && u.push(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixer"]), u.push(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"]);
    var p = function(e, r, s, a) {
        void 0 === r && (r = ""), void 0 === s && (s = ""), void 0 === a && (a = "&"), t = a, n = r, o = new RegExp("\\".concat(n, "\\b"), "g");
        var c = e.replace(xe, ""), l = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compile"](s || r ? "".concat(s, " ").concat(r, " { ").concat(c, " }") : c);
        i.namespace && (l = Ve(l, i.namespace));
        var p = [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"](l, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["middleware"](u.concat(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$stylis$40$4$2e$3$2e$2$2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rulesheet"](function(e) {
            return p.push(e);
        })))), p;
    };
    return p.hash = c.length ? c.reduce(function(e, t) {
        return t.name || he(15), M(e, t.name);
    }, F).toString() : "", p;
}
var Me = new ke, ze = Fe(), $e = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    shouldForwardProp: void 0,
    styleSheet: Me,
    stylis: ze
}), Be = $e.Consumer, Le = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
function Ge() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($e);
}
function Ye(e) {
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e.stylisPlugins), n = t[0], r = t[1], c = Ge().styleSheet, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var t = c;
        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
            target: e.target
        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
            useCSSOMInjection: !1
        })), t;
    }, [
        e.disableCSSOMInjection,
        e.sheet,
        e.target,
        c
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return Fe({
            options: {
                namespace: e.namespace,
                prefix: e.enableVendorPrefixes
            },
            plugins: n
        });
    }, [
        e.enableVendorPrefixes,
        e.namespace,
        n
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$shallowequal$40$1$2e$1$2e$0$2f$node_modules$2f$shallowequal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(n, e.stylisPlugins) || r(e.stylisPlugins);
    }, [
        e.stylisPlugins
    ]);
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return {
            shouldForwardProp: e.shouldForwardProp,
            styleSheet: l,
            stylis: u
        };
    }, [
        e.shouldForwardProp,
        l,
        u
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($e.Provider, {
        value: d
    }, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Le.Provider, {
        value: u
    }, e.children));
}
var We = function() {
    function e(e, t) {
        var n = this;
        this.inject = function(e, t) {
            void 0 === t && (t = ze);
            var o = n.name + t.hash;
            e.hasNameForId(n.id, o) || e.insertRules(n.id, o, t(n.rules, o, "@keyframes"));
        }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ue(this, function() {
            throw he(12, String(n.name));
        });
    }
    return e.prototype.getName = function(e) {
        return void 0 === e && (e = ze), this.name + e.hash;
    }, e;
}(), qe = function(e) {
    return e >= "A" && e <= "Z";
};
function He(e) {
    for(var t = "", n = 0; n < e.length; n++){
        var o = e[n];
        if (1 === n && "-" === o && "-" === e[0]) return e;
        qe(o) ? t += "-" + o.toLowerCase() : t += o;
    }
    return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function(e) {
    return null == e || !1 === e || "" === e;
}, Je = function(t) {
    var n, o, r = [];
    for(var s in t){
        var i = t[s];
        t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || re(i) ? r.push("".concat(He(s), ":"), i, ";") : ce(i) ? r.push.apply(r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            "".concat(s, " {")
        ], Je(i), !1), [
            "}"
        ], !1)) : r.push("".concat(He(s), ": ").concat((n = s, null == (o = i) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || n in __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$unitless$40$0$2e$8$2e$1$2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || n.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
    }
    return r;
};
function Xe(e, t, n, o) {
    if (Ue(e)) return [];
    if (se(e)) return [
        ".".concat(e.styledComponentId)
    ];
    if (re(e)) {
        if (!re(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [
            e
        ];
        var r = e(t);
        return "production" === ("TURBOPACK compile-time value", "development") || "object" != typeof r || Array.isArray(r) || r instanceof We || ce(r) || null === r || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(r, t, n, o);
    }
    var s;
    return e instanceof We ? n ? (e.inject(n, o), [
        e.getName(o)
    ]) : [
        e
    ] : ce(e) ? Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e) {
        return Xe(e, t, n, o);
    })) : [
        e.toString()
    ];
}
function Ze(e) {
    for(var t = 0; t < e.length; t += 1){
        var n = e[t];
        if (re(n) && !se(n)) return !1;
    }
    return !0;
}
var Ke = z(v), Qe = function() {
    function e(e, t, n) {
        this.rules = e, this.staticRulesId = "", this.isStatic = "production" === ("TURBOPACK compile-time value", "development") && (void 0 === n || n.isStatic) && Ze(e), this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e, t, n) {
        var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
        if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = ie(o, this.staticRulesId);
        else {
            var r = ae(Xe(this.rules, e, t, n)), s = x(M(this.baseHash, r) >>> 0);
            if (!t.hasNameForId(this.componentId, s)) {
                var i = n(r, ".".concat(s), void 0, this.componentId);
                t.insertRules(this.componentId, s, i);
            }
            o = ie(o, s), this.staticRulesId = s;
        }
        else {
            for(var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++){
                var u = this.rules[l];
                if ("string" == typeof u) c += u, "production" !== ("TURBOPACK compile-time value", "development") && (a = M(a, u));
                else if (u) {
                    var p = ae(Xe(u, e, t, n));
                    a = M(a, p + l), c += p;
                }
            }
            if (c) {
                var d = x(a >>> 0);
                t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), o = ie(o, d);
            }
        }
        return o;
    }, e;
}(), et = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0), tt = et.Consumer;
function nt() {
    var e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(et);
    if (!e) throw he(18);
    return e;
}
function ot(e) {
    var n = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return function(e, n) {
            if (!e) throw he(14);
            if (re(e)) {
                var o = e(n);
                if ("production" !== ("TURBOPACK compile-time value", "development") && (null === o || Array.isArray(o) || "object" != typeof o)) throw he(7);
                return o;
            }
            if (Array.isArray(e) || "object" != typeof e) throw he(8);
            return n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n), e) : e;
        }(e.theme, n);
    }, [
        e.theme,
        n
    ]);
    return e.children ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(et.Provider, {
        value: r
    }, e.children) : null;
}
var rt = {}, st = new Set;
function it(e, r, s) {
    var i = se(e), a = e, c = !L(e), p = r.attrs, d = void 0 === p ? _ : p, h = r.componentId, f = void 0 === h ? function(e, t) {
        var n = "string" != typeof e ? "sc" : R(e);
        rt[n] = (rt[n] || 0) + 1;
        var o = "".concat(n, "-").concat($(v + n + rt[n]));
        return t ? "".concat(t, "-").concat(o) : o;
    }(r.displayName, r.parentComponentId) : h, m = r.displayName, y = void 0 === m ? function(e) {
        return L(e) ? "styled.".concat(e) : "Styled(".concat(B(e), ")");
    }(e) : m, g = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f, S = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, w = r.shouldForwardProp;
    if (i && a.shouldForwardProp) {
        var b = a.shouldForwardProp;
        if (r.shouldForwardProp) {
            var E = r.shouldForwardProp;
            w = function(e, t) {
                return b(e, t) && E(e, t);
            };
        } else w = b;
    }
    var N = new Qe(s, g, i ? a.componentStyle : void 0);
    function O(e, r) {
        return function(e, r, s) {
            var i = e.attrs, a = e.componentStyle, c = e.defaultProps, p = e.foldedComponentIds, d = e.styledComponentId, h = e.target, f = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), m = Ge(), y = e.shouldForwardProp || m.shouldForwardProp;
            "production" !== ("TURBOPACK compile-time value", "development") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(d);
            var v = I(r, f, c) || C, g = function(e, n, o) {
                for(var r, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n), {
                    className: void 0,
                    theme: o
                }), i = 0; i < e.length; i += 1){
                    var a = re(r = e[i]) ? r(s) : r;
                    for(var c in a)s[c] = "className" === c ? ie(s[c], a[c]) : "style" === c ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, s[c]), a[c]) : a[c];
                }
                return n.className && (s.className = ie(s.className, n.className)), s;
            }(i, r, v), S = g.as || h, w = {};
            for(var b in g)void 0 === g[b] || "$" === b[0] || "as" === b || "theme" === b && g.theme === v || ("forwardedAs" === b ? w.as = g.forwardedAs : y && !y(b, S) || (w[b] = g[b], y || "development" !== ("TURBOPACK compile-time value", "development") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2$2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(b) || st.has(b) || !A.has(S) || (st.add(b), console.warn('styled-components: it looks like an unknown prop "'.concat(b, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
            var E = function(e, t) {
                var n = Ge(), o = e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
                return "production" !== ("TURBOPACK compile-time value", "development") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(o), o;
            }(a, g);
            "production" !== ("TURBOPACK compile-time value", "development") && e.warnTooManyClasses && e.warnTooManyClasses(E);
            var N = ie(p, d);
            return E && (N += " " + E), g.className && (N += " " + g.className), w[L(S) && !A.has(S) ? "class" : "className"] = N, s && (w.ref = s), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(S, w);
        }(D, e, r);
    }
    O.displayName = y;
    var D = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(O);
    return D.attrs = S, D.componentStyle = N, D.displayName = y, D.shouldForwardProp = w, D.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = g, D.target = i ? a.target : e, Object.defineProperty(D, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps;
        },
        set: function(e) {
            this._foldedDefaultProps = i ? function(e) {
                for(var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                for(var o = 0, r = t; o < r.length; o++)le(e, r[o], !0);
                return e;
            }({}, a.defaultProps, e) : e;
        }
    }), "production" !== ("TURBOPACK compile-time value", "development") && (P(y, g), D.warnTooManyClasses = function(e, t) {
        var n = {}, o = !1;
        return function(r) {
            if (!o && (n[r] = !0, Object.keys(n).length >= 200)) {
                var s = t ? ' with the id of "'.concat(t, '"') : "";
                console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(s, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o = !0, n = {};
            }
        };
    }(y, g)), ue(D, function() {
        return ".".concat(D.styledComponentId);
    }), c && oe(D, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }), D;
}
function at(e, t) {
    for(var n = [
        e[0]
    ], o = 0, r = t.length; o < r; o += 1)n.push(t[o], e[o + 1]);
    return n;
}
var ct = function(e) {
    return Object.assign(e, {
        isCss: !0
    });
};
function lt(t) {
    for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
    if (re(t) || ce(t)) return ct(Xe(at(_, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        t
    ], n, !0))));
    var r = t;
    return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Xe(r) : ct(Xe(at(r, n)));
}
function ut(n, o, r) {
    if (void 0 === r && (r = C), !o) throw he(1, o);
    var s = function(t) {
        for(var s = [], i = 1; i < arguments.length; i++)s[i - 1] = arguments[i];
        return n(o, r, lt.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            t
        ], s, !1)));
    };
    return s.attrs = function(e) {
        return ut(n, o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, r), {
            attrs: Array.prototype.concat(r.attrs, e).filter(Boolean)
        }));
    }, s.withConfig = function(e) {
        return ut(n, o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, r), e));
    }, s;
}
var pt = function(e) {
    return ut(it, e);
}, dt = pt;
A.forEach(function(e) {
    dt[e] = pt(e);
});
var ht = function() {
    function e(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = Ze(e), ke.registerId(this.componentId + 1);
    }
    return e.prototype.createStyles = function(e, t, n, o) {
        var r = o(ae(Xe(this.rules, t, n, o)), ""), s = this.componentId + e;
        n.insertRules(s, s, r);
    }, e.prototype.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e);
    }, e.prototype.renderStyles = function(e, t, n, o) {
        e > 2 && ke.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, o);
    }, e;
}();
function ft(n) {
    for(var r = [], s = 1; s < arguments.length; s++)r[s - 1] = arguments[s];
    var i = lt.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        n
    ], r, !1)), a = "sc-global-".concat($(JSON.stringify(i))), c = new ht(i, a);
    "production" !== ("TURBOPACK compile-time value", "development") && P(a);
    var l = function(e) {
        var t = Ge(), n = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), r = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(t.styleSheet.allocateGSInstance(a)).current;
        return "production" !== ("TURBOPACK compile-time value", "development") && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(e.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), "production" !== ("TURBOPACK compile-time value", "development") && i.some(function(e) {
            return "string" == typeof e && -1 !== e.indexOf("@import");
        }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t.styleSheet.server && u(r, e, t.styleSheet, n, t.stylis), __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
            "ft.l.useLayoutEffect": function() {
                if (!t.styleSheet.server) return u(r, e, t.styleSheet, n, t.stylis), ({
                    "ft.l.useLayoutEffect": function() {
                        return c.removeStyles(r, t.styleSheet);
                    }
                })["ft.l.useLayoutEffect"];
            }
        }["ft.l.useLayoutEffect"], [
            r,
            e,
            t.styleSheet,
            n,
            t.stylis
        ]), null;
    };
    function u(e, n, o, r, s) {
        if (c.isStatic) c.renderStyles(e, b, o, s);
        else {
            var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n), {
                theme: I(n, r, l.defaultProps)
            });
            c.renderStyles(e, i, o, s);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(l);
}
function mt(t) {
    for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
    "production" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
    var r = ae(lt.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        t
    ], n, !1))), s = $(r);
    return new We(s, r);
}
function yt(e) {
    var n = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(n, r) {
        var s = I(n, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), e.defaultProps);
        return "production" !== ("TURBOPACK compile-time value", "development") && void 0 === s && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(B(e), '"')), __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n, {
            theme: s,
            ref: r
        }));
    });
    return n.displayName = "WithTheme(".concat(B(e), ")"), oe(n, e);
}
var vt = function() {
    function e() {
        var e = this;
        this._emitSheetCSS = function() {
            var t = e.instance.toString();
            if (!t) return "";
            var n = Ce(), o = ae([
                n && 'nonce="'.concat(n, '"'),
                "".concat(f, '="true"'),
                "".concat(y, '="').concat(v, '"')
            ].filter(Boolean), " ");
            return "<style ".concat(o, ">").concat(t, "</style>");
        }, this.getStyleTags = function() {
            if (e.sealed) throw he(2);
            return e._emitSheetCSS();
        }, this.getStyleElement = function() {
            var n;
            if (e.sealed) throw he(2);
            var r = e.instance.toString();
            if (!r) return [];
            var s = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = {
                __html: r
            }, n), i = Ce();
            return i && (s.nonce = i), [
                __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$6$2e$2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, s, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            e.sealed = !0;
        }, this.instance = new ke({
            isServer: !0
        }), this.sealed = !1;
    }
    return e.prototype.collectStyles = function(e) {
        if (this.sealed) throw he(2);
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Ye, {
            sheet: this.instance
        }, e);
    }, e.prototype.interleaveWithNodeStream = function(e) {
        throw he(3);
    }, e;
}(), gt = {
    StyleSheet: ke,
    mainSheet: Me
};
"production" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var St = "__sc-".concat(f, "__");
"production" !== ("TURBOPACK compile-time value", "development") && "test" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof window && (window[St] || (window[St] = 0), 1 === window[St] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[St] += 1);
;
 //# sourceMappingURL=styled-components.browser.esm.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/react-is@19.2.3/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function typeOf(object) {
        if ("object" === typeof object && null !== object) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    switch(object = object.type, object){
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                        case REACT_VIEW_TRANSITION_TYPE:
                            return object;
                        default:
                            switch(object = object && object.$$typeof, object){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                    return object;
                                case REACT_CONSUMER_TYPE:
                                    return object;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    exports.ContextConsumer = REACT_CONSUMER_TYPE;
    exports.ContextProvider = REACT_CONTEXT_TYPE;
    exports.Element = REACT_ELEMENT_TYPE;
    exports.ForwardRef = REACT_FORWARD_REF_TYPE;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Lazy = REACT_LAZY_TYPE;
    exports.Memo = REACT_MEMO_TYPE;
    exports.Portal = REACT_PORTAL_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
    };
    exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    };
    exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    };
    exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    };
    exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    };
    exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    };
    exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    };
    exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    };
    exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    };
    exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    };
    exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
    };
    exports.typeOf = typeOf;
}();
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/react-is@19.2.3/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/react-is@19.2.3/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ __turbopack_context__.s([
    "alignments",
    ()=>alignments,
    "clamp",
    ()=>clamp,
    "createCoords",
    ()=>createCoords,
    "evaluate",
    ()=>evaluate,
    "expandPaddingObject",
    ()=>expandPaddingObject,
    "floor",
    ()=>floor,
    "getAlignment",
    ()=>getAlignment,
    "getAlignmentAxis",
    ()=>getAlignmentAxis,
    "getAlignmentSides",
    ()=>getAlignmentSides,
    "getAxisLength",
    ()=>getAxisLength,
    "getExpandedPlacements",
    ()=>getExpandedPlacements,
    "getOppositeAlignmentPlacement",
    ()=>getOppositeAlignmentPlacement,
    "getOppositeAxis",
    ()=>getOppositeAxis,
    "getOppositeAxisPlacements",
    ()=>getOppositeAxisPlacements,
    "getOppositePlacement",
    ()=>getOppositePlacement,
    "getPaddingObject",
    ()=>getPaddingObject,
    "getSide",
    ()=>getSide,
    "getSideAxis",
    ()=>getSideAxis,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "placements",
    ()=>placements,
    "rectToClientRect",
    ()=>rectToClientRect,
    "round",
    ()=>round,
    "sides",
    ()=>sides
]);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+core@1.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
    const alignmentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
    const alignLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(alignmentAxis);
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment || (autoAlignment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAlignmentPlacement"])(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"], autoAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"] ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const initialSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(initialPlacement);
            const isBasePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositePlacement"])(initialPlacement)
            ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpandedPlacements"])(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxisPlacements"])(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sides"].some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.left));
    const minY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.top));
    const maxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.right));
    const maxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(nativeClientRects));
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'left';
                    const maxRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
    const isVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
            const isYAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, 0);
                const xMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.right, 0);
                const yMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, 0);
                const yMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "autoUpdate",
    ()=>autoUpdate,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "platform",
    ()=>platform,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+core@1.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(width) !== offsetWidth || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domElement)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.width) : rect.width) / width;
    let y = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(body).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? getScale(element) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(top);
        const insetRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientWidth - (left + width));
        const insetBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientHeight - (top + height));
        const insetLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(referenceEl) : [],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$10$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"];
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"];
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"];
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"];
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"];
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"];
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"];
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"];
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"];
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"];
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$core$40$1$2e$7$2e$3$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+react-dom@2.1.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size,
    "useFloating",
    ()=>useFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === 'undefined') {
        return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const setReference = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setReference]": (node)=>{
            if (node !== referenceRef.current) {
                referenceRef.current = node;
                _setReference(node);
            }
        }
    }["useFloating.useCallback[setReference]"], []);
    const setFloating = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setFloating]": (node)=>{
            if (node !== floatingRef.current) {
                floatingRef.current = node;
                _setFloating(node);
            }
        }
    }["useFloating.useCallback[setFloating]"], []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[update]": ()=>{
            if (!referenceRef.current || !floatingRef.current) {
                return;
            }
            const config = {
                placement,
                strategy,
                middleware: latestMiddleware
            };
            if (platformRef.current) {
                config.platform = platformRef.current;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(referenceRef.current, floatingRef.current, config).then({
                "useFloating.useCallback[update]": (data)=>{
                    const fullData = {
                        ...data,
                        // The floating element's position may be recomputed while it's closed
                        // but still mounted (such as when transitioning out). To ensure
                        // `isPositioned` will be `false` initially on the next open, avoid
                        // setting it to `true` when `open === false` (must be specified).
                        isPositioned: openRef.current !== false
                    };
                    if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                        dataRef.current = fullData;
                        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useFloating.useCallback[update]": ()=>{
                                setData(fullData);
                            }
                        }["useFloating.useCallback[update]"]);
                    }
                }
            }["useFloating.useCallback[update]"]);
        }
    }["useFloating.useCallback[update]"], [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[refs]": ()=>({
                reference: referenceRef,
                floating: floatingRef,
                setReference,
                setFloating
            })
    }["useFloating.useMemo[refs]"], [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[elements]": ()=>({
                reference: referenceEl,
                floating: floatingEl
            })
    }["useFloating.useMemo[elements]"], [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[floatingStyles]": ()=>{
            const initialStyles = {
                position: strategy,
                left: 0,
                top: 0
            };
            if (!elements.floating) {
                return initialStyles;
            }
            const x = roundByDPR(elements.floating, data.x);
            const y = roundByDPR(elements.floating, data.y);
            if (transform) {
                return {
                    ...initialStyles,
                    transform: "translate(" + x + "px, " + y + "px)",
                    ...getDPR(elements.floating) >= 1.5 && {
                        willChange: 'transform'
                    }
                };
            }
            return {
                position: strategy,
                left: x,
                top: y
            };
        }
    }["useFloating.useMemo[floatingStyles]"], [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo": ()=>({
                ...data,
                update,
                refs,
                elements,
                floatingStyles
            })
    }["useFloating.useMemo"], [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value) {
        return ({}).hasOwnProperty.call(value, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$7$2e$4$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options, deps)=>({
        ...arrow$1(options),
        options: [
            options,
            deps
        ]
    });
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? "".concat(message, ". For more information and steps for solving, visit https://motion.dev/troubleshooting/").concat(errorCode) : message;
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/format-error-message.mjs [app-client] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem(param, fromIndex, toIndex) {
    let [...arr] = param;
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class SubscriptionManager {
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
    constructor(){
        this.subscriptions = [];
    }
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = function() {
    for(var _len = arguments.length, transformers = new Array(_len), _key = 0; _key < _len; _key++){
        transformers[_key] = arguments[_key];
    }
    return transformers.reduce(combineFunctions);
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$12$2e$23$2e$6$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, "Invalid easing type '".concat(definition, "'"), "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeObservers",
    ()=>resizeObservers
]);
var resizeObservers = [];
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasActiveObservations",
    ()=>hasActiveObservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [app-client] (ecmascript)");
;
var hasActiveObservations = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeObservers"].some(function(ro) {
        return ro.activeTargets.length > 0;
    });
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasSkippedObservations",
    ()=>hasSkippedObservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [app-client] (ecmascript)");
;
var hasSkippedObservations = function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeObservers"].some(function(ro) {
        return ro.skippedTargets.length > 0;
    });
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deliverResizeLoopError",
    ()=>deliverResizeLoopError
]);
var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function() {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    } else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverBoxOptions",
    ()=>ResizeObserverBoxOptions
]);
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/freeze.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "freeze",
    ()=>freeze
]);
var freeze = function(obj) {
    return Object.freeze(obj);
};
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverSize",
    ()=>ResizeObserverSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/freeze.js [app-client] (ecmascript)");
;
var ResizeObserverSize = function() {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freeze"])(this);
    }
    return ResizeObserverSize;
}();
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOMRectReadOnly",
    ()=>DOMRectReadOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/freeze.js [app-client] (ecmascript)");
;
var DOMRectReadOnly = function() {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freeze"])(this);
    }
    DOMRectReadOnly.prototype.toJSON = function() {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return {
            x: x,
            y: y,
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            width: width,
            height: height
        };
    };
    DOMRectReadOnly.fromRect = function(rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}();
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElement",
    ()=>isElement,
    "isHidden",
    ()=>isHidden,
    "isReplacedElement",
    ()=>isReplacedElement,
    "isSVG",
    ()=>isSVG
]);
var isSVG = function(target) {
    return target instanceof SVGElement && 'getBBox' in target;
};
var isHidden = function(target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
    var _a;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
    switch(target.tagName){
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/global.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "global",
    ()=>global
]);
var global = typeof window !== 'undefined' ? window : {};
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBoxSize",
    ()=>calculateBoxSize,
    "calculateBoxSizes",
    ()=>calculateBoxSizes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$DOMRectReadOnly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/freeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/global.js [app-client] (ecmascript)");
;
;
;
;
;
;
var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["global"].navigator && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["global"].navigator.userAgent);
var parseDimension = function(pixel) {
    return parseFloat(pixel || '0');
};
var size = function(inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) {
        inlineSize = 0;
    }
    if (blockSize === void 0) {
        blockSize = 0;
    }
    if (switchSizes === void 0) {
        switchSizes = false;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverSize"]((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freeze"])({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$DOMRectReadOnly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectReadOnly"](0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
    if (forceRecalculation === void 0) {
        forceRecalculation = false;
    }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHidden"])(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVG"])(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freeze"])({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$DOMRectReadOnly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMRectReadOnly"](paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch(observedBox){
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverBoxOptions"].DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverBoxOptions"].BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverEntry",
    ()=>ResizeObserverEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/freeze.js [app-client] (ecmascript)");
;
;
var ResizeObserverEntry = function() {
    function ResizeObserverEntry(target) {
        var boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBoxSizes"])(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freeze"])([
            boxes.borderBoxSize
        ]);
        this.contentBoxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freeze"])([
            boxes.contentBoxSize
        ]);
        this.devicePixelContentBoxSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$freeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["freeze"])([
            boxes.devicePixelContentBoxSize
        ]);
    }
    return ResizeObserverEntry;
}();
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateDepthForNode",
    ()=>calculateDepthForNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/element.js [app-client] (ecmascript)");
;
var calculateDepthForNode = function(node) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHidden"])(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while(parent){
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "broadcastActiveObservations",
    ()=>broadcastActiveObservations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [app-client] (ecmascript)");
;
;
;
;
var broadcastActiveObservations = function() {
    var shallowestDepth = Infinity;
    var callbacks = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeObservers"].forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverEntry"](ot.target);
            var targetDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDepthForNode"])(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBoxSize"])(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for(var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++){
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gatherActiveObservationsAtDepth",
    ()=>gatherActiveObservationsAtDepth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js [app-client] (ecmascript)");
;
;
var gatherActiveObservationsAtDepth = function(depth) {
    __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeObservers"].forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateDepthForNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDepthForNode"])(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                } else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/process.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "process",
    ()=>process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasActiveObservations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasSkippedObservations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$deliverResizeLoopError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$broadcastActiveObservations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$gatherActiveObservationsAtDepth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js [app-client] (ecmascript)");
;
;
;
;
;
var process = function() {
    var depth = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$gatherActiveObservationsAtDepth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gatherActiveObservationsAtDepth"])(depth);
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasActiveObservations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasActiveObservations"])()){
        depth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$broadcastActiveObservations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["broadcastActiveObservations"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$gatherActiveObservationsAtDepth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gatherActiveObservationsAtDepth"])(depth);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$hasSkippedObservations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSkippedObservations"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$deliverResizeLoopError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deliverResizeLoopError"])();
    }
    return depth > 0;
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queueMicroTask",
    ()=>queueMicroTask
]);
var trigger;
var callbacks = [];
var notify = function() {
    return callbacks.splice(0).forEach(function(cb) {
        return cb();
    });
};
var queueMicroTask = function(callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = {
            characterData: true
        };
        new MutationObserver(function() {
            return notify();
        }).observe(el_1, config);
        trigger = function() {
            el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
        };
    }
    callbacks.push(callback);
    trigger();
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queueResizeObserver",
    ()=>queueResizeObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueMicroTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js [app-client] (ecmascript)");
;
var queueResizeObserver = function(cb) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueMicroTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queueMicroTask"])(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/scheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduler",
    ()=>scheduler,
    "updateCount",
    ()=>updateCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/global.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js [app-client] (ecmascript)");
;
;
;
var watching = 0;
var isWatching = function() {
    return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function(timeout) {
    if (timeout === void 0) {
        timeout = 0;
    }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function() {
            return _this.schedule();
        };
    }
    Scheduler.prototype.run = function(timeout) {
        var _this = this;
        if (timeout === void 0) {
            timeout = CATCH_PERIOD;
        }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$queueResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queueResizeObserver"])(function() {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["process"])();
            } finally{
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                } else if (timeout > 0) {
                    _this.run(timeout);
                } else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function() {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function() {
        var _this = this;
        var cb = function() {
            return _this.observer && _this.observer.observe(document.body, observerConfig);
        };
        document.body ? cb() : __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["global"].addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function() {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function(name) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["global"].addEventListener(name, _this.listener, true);
            });
        }
    };
    Scheduler.prototype.stop = function() {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function(name) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["global"].removeEventListener(name, _this.listener, true);
            });
            this.stopped = true;
        }
    };
    return Scheduler;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObservation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObservation",
    ()=>ResizeObservation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/element.js [app-client] (ecmascript)");
;
;
;
var skipNotifyOnElement = function(target) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVG"])(target) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReplacedElement"])(target) && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = function() {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverBoxOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverBoxOptions"].CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function() {
        var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$algorithms$2f$calculateBoxSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBoxSize"])(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}();
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverDetail",
    ()=>ResizeObserverDetail
]);
var ResizeObserverDetail = function() {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}();
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserverController",
    ()=>ResizeObserverController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/scheduler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObservation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObservation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverDetail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js [app-client] (ecmascript)");
;
;
;
;
var observerMap = new WeakMap();
var getObservationIndex = function(observationTargets, target) {
    for(var i = 0; i < observationTargets.length; i += 1){
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = function() {
    function ResizeObserverController() {}
    ResizeObserverController.connect = function(resizeObserver, callback) {
        var detail = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverDetail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverDetail"](resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function(resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeObservers"].push(detail);
            detail.observationTargets.push(new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObservation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObservation"](target, options && options.box));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCount"])(1);
            __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduler"].schedule();
        }
    };
    ResizeObserverController.unobserve = function(resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeObservers"].splice(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$resizeObservers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeObservers"].indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCount"])(-1);
        }
    };
    ResizeObserverController.disconnect = function(resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function(ot) {
            return _this.unobserve(resizeObserver, ot.target);
        });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}();
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeObserver",
    ()=>ResizeObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/element.js [app-client] (ecmascript)");
;
;
var ResizeObserver = function() {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].connect(this, callback);
    }
    ResizeObserver.prototype.observe = function(target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function(target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function() {
        __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserverController"].disconnect(this);
    };
    ResizeObserver.toString = function() {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}();
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/exports/resize-observer.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverEntry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$juggle$2b$resize$2d$observer$40$3$2e$4$2e$0$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserverSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/use-effect-event@2.0.3_react@19.0.0/node_modules/use-effect-event/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEffectEvent",
    ()=>useEffectEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const context = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(!0);
function forbiddenInRender() {
    throw new Error("A function wrapped in useEffectEvent can't be called during rendering.");
}
const isInvalidExecutionContextForEventFunction = "use" in __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? ()=>{
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(context);
    } catch (e) {
        return !1;
    }
} : ()=>!1;
function useEffectEvent(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(forbiddenInRender);
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useInsertionEffect({
        "useEffectEvent.useInsertionEffect": ()=>{
            ref.current = fn;
        }
    }["useEffectEvent.useInsertionEffect"], [
        fn
    ]), function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        isInvalidExecutionContextForEventFunction() && forbiddenInRender();
        const latestFn = ref.current;
        return latestFn(...args);
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing-csm@2.0.26_@sanity+client@7.13.2_@sanity+types@4.22.0_@types+react@19.0.1__typescript@5.9.3/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDataAttribute",
    ()=>createDataAttribute,
    "decodeSanityNodeData",
    ()=>decodeSanityNodeData,
    "encodeSanityNodeData",
    ()=>encodeSanityNodeData,
    "pathToUrlString",
    ()=>pathToUrlString,
    "urlStringToPath",
    ()=>urlStringToPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+client@7.13.2_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/valibot@1.2.0_typescript@5.9.3/node_modules/valibot/dist/index.mjs [app-client] (ecmascript)");
;
;
const lengthyStr$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minLength"])(1)), optionalLengthyStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])(lengthyStr$1), sanityNodeSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    baseUrl: lengthyStr$1,
    dataset: optionalLengthyStr,
    id: lengthyStr$1,
    path: lengthyStr$1,
    projectId: optionalLengthyStr,
    tool: optionalLengthyStr,
    type: optionalLengthyStr,
    workspace: optionalLengthyStr,
    perspective: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), "drafts")
});
function isValidSanityNode(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(sanityNodeSchema, node);
}
function isArray(value) {
    return value !== null && Array.isArray(value);
}
function pathToUrlString(path) {
    let str = "";
    for (const segment of path){
        if (typeof segment == "string") {
            str && (str += "."), str += segment;
            continue;
        }
        if (typeof segment == "number") {
            str && (str += ":"), str += "".concat(segment);
            continue;
        }
        if (isArray(segment)) {
            str && (str += ":"), str += "".concat(segment.join(","), "}");
            continue;
        }
        if (segment._key) {
            str && (str += ":"), str += "".concat(segment._key);
            continue;
        }
    }
    return str;
}
function encodeSanityNodeData(node) {
    const { id: _id, path, baseUrl, tool, workspace, type } = node;
    return isValidSanityNode(node) ? [
        [
            "id",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(_id)
        ],
        [
            "type",
            type
        ],
        [
            "path",
            pathToUrlString(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].fromString(path))
        ],
        [
            "base",
            encodeURIComponent(baseUrl)
        ],
        [
            "workspace",
            workspace
        ],
        [
            "tool",
            tool
        ]
    ].filter((param)=>{
        let [, value] = param;
        return !!value;
    }).map((part)=>part.join("=")).join(";") : void 0;
}
function createDataAttribute(props) {
    function normalizePath(path) {
        return path ? typeof path == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].fromString(path) : path : [];
    }
    function toString(props2) {
        if (!props2.id) throw new Error("`id` is required to create a data attribute");
        if (!props2.type) throw new Error("`type` is required to create a data attribute");
        if (!props2.path || !props2.path.length) throw new Error("`path` is required to create a data attribute");
        const attrs = {
            baseUrl: props2.baseUrl || "/",
            workspace: props2.workspace,
            tool: props2.tool,
            type: props2.type,
            id: props2.id,
            path: typeof props2.path == "string" ? props2.path : __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].toString(props2.path),
            perspective: props2.perspective
        };
        return encodeSanityNodeData(attrs);
    }
    const DataAttribute = (path)=>toString({
            ...props,
            path: [
                ...normalizePath(props.path),
                ...normalizePath(path)
            ]
        });
    return DataAttribute.toString = function() {
        return toString(props);
    }, DataAttribute.combine = function(attrs) {
        return createDataAttribute({
            ...props,
            ...attrs
        });
    }, DataAttribute.scope = function(path) {
        return createDataAttribute({
            ...props,
            path: [
                ...normalizePath(props.path),
                ...normalizePath(path)
            ]
        });
    }, DataAttribute;
}
const RE_SEGMENT_WITH_INDEX = /^([\w-]+):(0|[1-9][0-9]*)$/, RE_SEGMENT_WITH_TUPLE = /^([\w-]+):([0-9]+),([0-9]+)$/, RE_SEGMENT_WITH_KEY = /^([\w-]+):([\w-]+)$/;
function urlStringToPath(str) {
    const path = [];
    for (const segment of str.split(".")){
        const withIndex = RE_SEGMENT_WITH_INDEX.exec(segment);
        if (withIndex) {
            path.push(withIndex[1], Number(withIndex[2]));
            continue;
        }
        const withTuple = RE_SEGMENT_WITH_TUPLE.exec(segment);
        if (withTuple) {
            path.push(withTuple[1], [
                Number(withTuple[2]),
                Number(withTuple[3])
            ]);
            continue;
        }
        const withKey = RE_SEGMENT_WITH_KEY.exec(segment);
        if (withKey) {
            path.push(withKey[1], {
                _key: withKey[2]
            });
            continue;
        }
        path.push(segment);
    }
    return path;
}
const lengthyStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minLength"])(1)), sanityLegacyNodeSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    origin: lengthyStr,
    href: lengthyStr,
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])()))
});
function decodeSanityString(str) {
    const data = str.split(";").reduce((acc, segment)=>{
        const [key, value] = segment.split("=");
        if (!key || segment.includes("=") && !value) return acc;
        switch(key){
            case "id":
                acc.id = value;
                break;
            case "type":
                acc.type = value;
                break;
            case "path":
                acc.path = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].toString(urlStringToPath(value));
                break;
            case "base":
                acc.baseUrl = decodeURIComponent(value);
                break;
            case "perspective":
                acc.perspective = value;
                break;
            case "tool":
                acc.tool = value;
                break;
            case "workspace":
                acc.workspace = value;
                break;
            case "projectId":
                acc.projectId = value;
                break;
            case "dataset":
                acc.dataset = value;
                break;
        }
        return acc;
    }, {});
    if (isValidSanityNode(data)) return data;
}
function decodeSanityObject(data) {
    const sanityNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(sanityNodeSchema, data);
    if (sanityNode.success) return sanityNode.output;
    const sanityLegacyNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(sanityLegacyNodeSchema, data);
    if (sanityLegacyNode.success) try {
        const url = new URL(sanityLegacyNode.output.href, typeof document > "u" ? "https://example.com" : location.origin);
        return url.searchParams.size > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$valibot$40$1$2e$2$2e$0_typescript$40$5$2e$9$2e$3$2f$node_modules$2f$valibot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(sanityNodeSchema, Object.fromEntries(url.searchParams.entries())) : sanityLegacyNode.output;
    } catch (err) {
        return console.error("Failed to parse sanity node", err), sanityLegacyNode.output;
    }
}
function decodeSanityNodeData(data) {
    if (typeof data == "object" && data !== null) return decodeSanityObject(data);
    try {
        const obj = JSON.parse(data);
        return decodeSanityObject(obj);
    } catch (e) {
        return decodeSanityString(data);
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@vercel+stega@1.0.0/node_modules/@vercel/stega/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERCEL_STEGA_REGEX",
    ()=>u,
    "legacyStegaEncode",
    ()=>C,
    "vercelStegaClean",
    ()=>M,
    "vercelStegaCombine",
    ()=>b,
    "vercelStegaDecode",
    ()=>X,
    "vercelStegaDecodeAll",
    ()=>w,
    "vercelStegaEncode",
    ()=>A,
    "vercelStegaSplit",
    ()=>D
]);
var l = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162
}, d = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 65279
}, a = {
    0: String.fromCodePoint(d[0]),
    1: String.fromCodePoint(d[1]),
    2: String.fromCodePoint(d[2]),
    3: String.fromCodePoint(d[3])
}, p = new Array(4).fill(String.fromCodePoint(d[0])).join(""), m = String.fromCharCode(0);
function A(t) {
    let e = JSON.stringify(t), r = new TextEncoder().encode(e), n = "";
    for(let i = 0; i < r.length; i++){
        let c = r[i];
        n += a[c >> 6 & 3] + a[c >> 4 & 3] + a[c >> 2 & 3] + a[c & 3];
    }
    return p + n;
}
function C(t) {
    let e = JSON.stringify(t);
    return Array.from(e).map((r)=>{
        let n = r.charCodeAt(0);
        if (n > 255) throw new Error("Only ASCII edit info can be encoded. Error attempting to encode ".concat(e, " on character ").concat(r, " (").concat(n, ")"));
        return Array.from(n.toString(16).padStart(2, "0")).map((i)=>String.fromCodePoint(l[i])).join("");
    }).join("");
}
function h(t) {
    return !Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t) ? !1 : !!Date.parse(t);
}
function S(t) {
    try {
        new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
    } catch (e) {
        return !1;
    }
    return !0;
}
function b(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
    return r === !0 || r === "auto" && (h(t) || S(t)) ? t : "".concat(t).concat(A(e));
}
var g = Object.fromEntries(Object.entries(a).map((t)=>[
        t[1],
        +t[0]
    ])), T = Object.fromEntries(Object.entries(l).map((t)=>t.reverse())), _ = "".concat(Object.values(l).map((t)=>"\\u{".concat(t.toString(16), "}")).join("")), u = new RegExp("[".concat(_, "]{4,}"), "gu");
function X(t) {
    let e = t.match(u);
    if (e) return x(e[0], !0)[0];
}
function w(t) {
    let e = t.match(u);
    if (e) return e.map((r)=>x(r)).flat();
}
function x(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    let r = Array.from(t);
    if (r.length % 2 === 0) {
        if (r.length % 4 || !t.startsWith(p)) return I(r, e);
    } else throw new Error("Encoded data has invalid length");
    let n = r.slice(4), i = new Uint8Array(n.length / 4);
    for(let o = 0; o < i.length; o++)i[o] = g[n[o * 4]] << 6 | g[n[o * 4 + 1]] << 4 | g[n[o * 4 + 2]] << 2 | g[n[o * 4 + 3]];
    let c = new TextDecoder().decode(i);
    if (e) {
        let o = c.indexOf(m);
        return o === -1 && (o = c.length), [
            JSON.parse(c.slice(0, o))
        ];
    }
    return c.split(m).filter(Boolean).map((o)=>JSON.parse(o));
}
function I(t, e) {
    var o;
    let r = [];
    for(let s = t.length * .5; s--;){
        let f = "".concat(T[t[s * 2].codePointAt(0)]).concat(T[t[s * 2 + 1].codePointAt(0)]);
        r.unshift(String.fromCharCode(parseInt(f, 16)));
    }
    let n = [], i = [
        r.join("")
    ], c = 10;
    for(; i.length;){
        let s = i.shift();
        try {
            if (n.push(JSON.parse(s)), e) return n;
        } catch (f) {
            if (!c--) throw f;
            let E = +((o = f.message.match(/\sposition\s(\d+)$/)) == null ? void 0 : o[1]);
            if (!E) throw f;
            i.unshift(s.substring(0, E), s.substring(E));
        }
    }
    return n;
}
function D(t) {
    var e;
    return {
        cleaned: t.replace(u, ""),
        encoded: ((e = t.match(u)) == null ? void 0 : e[0]) || ""
    };
}
function M(t) {
    return t && JSON.parse(D(JSON.stringify(t)).cleaned);
}
;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayReduce.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) {
        accumulator = array[++index];
    }
    while(++index < length){
        accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
}
module.exports = arrayReduce;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyOf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyOf(object) {
    return function(key) {
        return object == null ? undefined : object[key];
    };
}
module.exports = basePropertyOf;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_deburrLetter.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var basePropertyOf = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyOf.js [app-client] (ecmascript)");
/** Used to map Latin Unicode letters to basic Latin letters. */ var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcc': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xec': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',
    '\u0102': 'A',
    '\u0104': 'A',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u0105': 'a',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010a': 'C',
    '\u010c': 'C',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010b': 'c',
    '\u010d': 'c',
    '\u010e': 'D',
    '\u0110': 'D',
    '\u010f': 'd',
    '\u0111': 'd',
    '\u0112': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u0118': 'E',
    '\u011a': 'E',
    '\u0113': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u0119': 'e',
    '\u011b': 'e',
    '\u011c': 'G',
    '\u011e': 'G',
    '\u0120': 'G',
    '\u0122': 'G',
    '\u011d': 'g',
    '\u011f': 'g',
    '\u0121': 'g',
    '\u0123': 'g',
    '\u0124': 'H',
    '\u0126': 'H',
    '\u0125': 'h',
    '\u0127': 'h',
    '\u0128': 'I',
    '\u012a': 'I',
    '\u012c': 'I',
    '\u012e': 'I',
    '\u0130': 'I',
    '\u0129': 'i',
    '\u012b': 'i',
    '\u012d': 'i',
    '\u012f': 'i',
    '\u0131': 'i',
    '\u0134': 'J',
    '\u0135': 'j',
    '\u0136': 'K',
    '\u0137': 'k',
    '\u0138': 'k',
    '\u0139': 'L',
    '\u013b': 'L',
    '\u013d': 'L',
    '\u013f': 'L',
    '\u0141': 'L',
    '\u013a': 'l',
    '\u013c': 'l',
    '\u013e': 'l',
    '\u0140': 'l',
    '\u0142': 'l',
    '\u0143': 'N',
    '\u0145': 'N',
    '\u0147': 'N',
    '\u014a': 'N',
    '\u0144': 'n',
    '\u0146': 'n',
    '\u0148': 'n',
    '\u014b': 'n',
    '\u014c': 'O',
    '\u014e': 'O',
    '\u0150': 'O',
    '\u014d': 'o',
    '\u014f': 'o',
    '\u0151': 'o',
    '\u0154': 'R',
    '\u0156': 'R',
    '\u0158': 'R',
    '\u0155': 'r',
    '\u0157': 'r',
    '\u0159': 'r',
    '\u015a': 'S',
    '\u015c': 'S',
    '\u015e': 'S',
    '\u0160': 'S',
    '\u015b': 's',
    '\u015d': 's',
    '\u015f': 's',
    '\u0161': 's',
    '\u0162': 'T',
    '\u0164': 'T',
    '\u0166': 'T',
    '\u0163': 't',
    '\u0165': 't',
    '\u0167': 't',
    '\u0168': 'U',
    '\u016a': 'U',
    '\u016c': 'U',
    '\u016e': 'U',
    '\u0170': 'U',
    '\u0172': 'U',
    '\u0169': 'u',
    '\u016b': 'u',
    '\u016d': 'u',
    '\u016f': 'u',
    '\u0171': 'u',
    '\u0173': 'u',
    '\u0174': 'W',
    '\u0175': 'w',
    '\u0176': 'Y',
    '\u0177': 'y',
    '\u0178': 'Y',
    '\u0179': 'Z',
    '\u017b': 'Z',
    '\u017d': 'Z',
    '\u017a': 'z',
    '\u017c': 'z',
    '\u017e': 'z',
    '\u0132': 'IJ',
    '\u0133': 'ij',
    '\u0152': 'Oe',
    '\u0153': 'oe',
    '\u0149': "'n",
    '\u017f': 's'
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */ var deburrLetter = basePropertyOf(deburredLetters);
module.exports = deburrLetter;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
module.exports = freeGlobal;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var freeGlobal = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js [app-client] (ecmascript)");
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var root = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js [app-client] (ecmascript)");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
module.exports = arrayMap;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js [app-client] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
module.exports = getRawTag;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js [app-client] (ecmascript)"), getRawTag = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js [app-client] (ecmascript)"), objectToString = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseGetTag = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js [app-client] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js [app-client] (ecmascript)");
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Symbol = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js [app-client] (ecmascript)"), arrayMap = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js [app-client] (ecmascript)"), isArray = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js [app-client] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js [app-client] (ecmascript)");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseToString = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js [app-client] (ecmascript)");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/deburr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var deburrLetter = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_deburrLetter.js [app-client] (ecmascript)"), toString = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js [app-client] (ecmascript)");
/** Used to match Latin Unicode letters (excluding mathematical operators). */ var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */ var rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
/** Used to compose unicode capture groups. */ var rsCombo = '[' + rsComboRange + ']';
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */ var reComboMark = RegExp(rsCombo, 'g');
/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */ function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}
module.exports = deburr;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiWords.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used to match words composed of alphanumeric characters. */ var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function asciiWords(string) {
    return string.match(reAsciiWord) || [];
}
module.exports = asciiWords;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicodeWord.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used to detect strings that need a more robust regexp to match words. */ var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */ function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
}
module.exports = hasUnicodeWord;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeWords.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = '\\u2700-\\u27bf', rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff', rsMathOpRange = '\\xac\\xb1\\xd7\\xf7', rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf', rsPunctuationRange = '\\u2000-\\u206f', rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000', rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde', rsVarRange = '\\ufe0e\\ufe0f', rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */ var rsApos = "['\u2019]", rsBreak = '[' + rsBreakRange + ']', rsCombo = '[' + rsComboRange + ']', rsDigits = '\\d+', rsDingbat = '[' + rsDingbatRange + ']', rsLower = '[' + rsLowerRange + ']', rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsUpper = '[' + rsUpperRange + ']', rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')', rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')', rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?', rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?', reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsOptVar + reOptMod + ')*', rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])', rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = '(?:' + [
    rsDingbat,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsSeq;
/** Used to match complex or compound words. */ var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [
        rsBreak,
        rsUpper,
        '$'
    ].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [
        rsBreak,
        rsUpper + rsMiscLower,
        '$'
    ].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
].join('|'), 'g');
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
}
module.exports = unicodeWords;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/words.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var asciiWords = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiWords.js [app-client] (ecmascript)"), hasUnicodeWord = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicodeWord.js [app-client] (ecmascript)"), toString = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js [app-client] (ecmascript)"), unicodeWords = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeWords.js [app-client] (ecmascript)");
/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */ function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
}
module.exports = words;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCompounder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var arrayReduce = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayReduce.js [app-client] (ecmascript)"), deburr = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/deburr.js [app-client] (ecmascript)"), words = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/words.js [app-client] (ecmascript)");
/** Used to compose unicode capture groups. */ var rsApos = "['\u2019]";
/** Used to match apostrophes. */ var reApos = RegExp(rsApos, 'g');
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */ function createCompounder(callback) {
    return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
}
module.exports = createCompounder;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length){
        result[index] = array[index + start];
    }
    return result;
}
module.exports = baseSlice;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castSlice.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var baseSlice = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSlice.js [app-client] (ecmascript)");
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
}
module.exports = castSlice;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var rsZWJ = '\\u200d';
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
module.exports = hasUnicode;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiToArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function asciiToArray(string) {
    return string.split('');
}
module.exports = asciiToArray;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeToArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/** Used to compose unicode character classes. */ var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */ var rsAstral = '[' + rsAstralRange + ']', rsCombo = '[' + rsComboRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsZWJ = '\\u200d';
/** Used to compose unicode regexes. */ var reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join('|') + ')' + rsOptVar + reOptMod + ')*', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = '(?:' + [
    rsNonAstral + rsCombo + '?',
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
module.exports = unicodeToArray;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToArray.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var asciiToArray = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiToArray.js [app-client] (ecmascript)"), hasUnicode = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicode.js [app-client] (ecmascript)"), unicodeToArray = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeToArray.js [app-client] (ecmascript)");
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
module.exports = stringToArray;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCaseFirst.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var castSlice = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castSlice.js [app-client] (ecmascript)"), hasUnicode = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicode.js [app-client] (ecmascript)"), stringToArray = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToArray.js [app-client] (ecmascript)"), toString = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js [app-client] (ecmascript)");
/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function createCaseFirst(methodName) {
    return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
module.exports = createCaseFirst;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/upperFirst.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var createCaseFirst = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCaseFirst.js [app-client] (ecmascript)");
/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */ var upperFirst = createCaseFirst('toUpperCase');
module.exports = upperFirst;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/startCase.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var createCompounder = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCompounder.js [app-client] (ecmascript)"), upperFirst = __turbopack_context__.r("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/upperFirst.js [app-client] (ecmascript)");
/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */ var startCase = createCompounder(function(result, word, index) {
    return result + (index ? ' ' : '') + upperFirst(word);
});
module.exports = startCase;
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+insert-menu@2.1.0_@emotion+is-prop-valid@1.2.2_@sanity+types@4.22.0_@types+reac_9b13773aad83753c128722984708b020/node_modules/@sanity/insert-menu/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InsertMenu",
    ()=>InsertMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/react-compiler-runtime@1.0.0_react@19.0.0/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+icons@3.7.4_react@19.0.0/node_modules/@sanity/icons/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+ui@3.1.11_@emotion+is-prop-valid@1.2.2_react-dom@19.0.0_react@19.0.0__react-is@_e999df3d4a862f99f5c43858f72aab2f/node_modules/@sanity/ui/dist/_chunks-es/_visual-editing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/startCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/react-is@19.2.3/node_modules/react-is/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function getSchemaTypeIcon(schemaType) {
    var _schemaType_type;
    var _schemaType_to;
    const referenceIcon = isReferenceSchemaType(schemaType) && ((_schemaType_to = schemaType.to) !== null && _schemaType_to !== void 0 ? _schemaType_to : []).length === 1 ? schemaType.to[0].icon : void 0;
    var _schemaType_icon, _ref;
    return (_ref = (_schemaType_icon = schemaType.icon) !== null && _schemaType_icon !== void 0 ? _schemaType_icon : (_schemaType_type = schemaType.type) === null || _schemaType_type === void 0 ? void 0 : _schemaType_type.icon) !== null && _ref !== void 0 ? _ref : referenceIcon;
}
function isReferenceSchemaType(type) {
    return isRecord(type) && (type.name === "reference" || isReferenceSchemaType(type.type));
}
function isRecord(value) {
    return !!value && (typeof value == "object" || typeof value == "function");
}
function fullInsertMenuReducer(state, event) {
    return {
        query: event.type === "change query" ? event.query : state.query,
        groups: event.type === "select group" ? state.groups.map((group)=>({
                ...group,
                selected: event.name === group.name
            })) : state.groups,
        views: event.type === "toggle view" ? state.views.map((view)=>({
                ...view,
                selected: event.name === view.name
            })) : state.views
    };
}
const ALL_ITEMS_GROUP_NAME = "all-items", gridStyle = {
    gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
    alignItems: "start"
};
function InsertMenu(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54), showIcons = props.showIcons === void 0 ? !0 : props.showIcons, showFilter = props.filter === void 0 || props.filter === "auto" ? props.schemaTypes.length > 5 : props.filter;
    let t0;
    $[0] !== props.groups || $[1] !== props.labels ? (t0 = props.groups ? [
        {
            name: ALL_ITEMS_GROUP_NAME,
            title: props.labels["insert-menu.filter.all-items"],
            selected: !0
        },
        ...props.groups.map(_temp)
    ] : [], $[0] = props.groups, $[1] = props.labels, $[2] = t0) : t0 = $[2];
    let t1;
    var _props_views;
    $[3] !== props.views ? (t1 = (_props_views = props.views) !== null && _props_views !== void 0 ? _props_views : [
        {
            name: "list"
        }
    ], $[3] = props.views, $[4] = t1) : t1 = $[4];
    let t2;
    $[5] !== t1 ? (t2 = t1.map(_temp2), $[5] = t1, $[6] = t2) : t2 = $[6];
    let t3;
    $[7] !== t0 || $[8] !== t2 ? (t3 = {
        query: "",
        groups: t0,
        views: t2
    }, $[7] = t0, $[8] = t2, $[9] = t3) : t3 = $[9];
    const [state, send] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(fullInsertMenuReducer, t3);
    let T0, T1, T2, t4, t5, t6, t7, t8, t9;
    if ($[10] !== props || $[11] !== showFilter || $[12] !== showIcons || $[13] !== state.groups || $[14] !== state.query || $[15] !== state.views) {
        const filteredSchemaTypes = filterSchemaTypes(props.schemaTypes, state.query, state.groups), selectedView = state.views.find(_temp3), showingFilterOrViews = showFilter || state.views.length > 1, showingTabs = state.groups && state.groups.length > 0, showingAnyOptions = showingFilterOrViews || showingTabs;
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], t9 = 0, T1 = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], t6 = "column", t7 = "fill";
        let t102;
        $[25] !== showingAnyOptions ? (t102 = showingAnyOptions ? {
            style: {
                borderBottom: "1px solid var(--card-border-color)"
            },
            paddingBottom: 1
        } : {}, $[25] = showingAnyOptions, $[26] = t102) : t102 = $[26];
        let t112;
        $[27] !== props.labels || $[28] !== showFilter || $[29] !== showingFilterOrViews || $[30] !== state.query || $[31] !== state.views ? (t112 = showingFilterOrViews ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            flex: "none",
            align: "center",
            paddingTop: 1,
            paddingX: 1,
            gap: 1,
            children: [
                showFilter ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    flex: 1,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        autoFocus: !0,
                        border: !1,
                        fontSize: 1,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"],
                        onChange: (event)=>{
                            send({
                                type: "change query",
                                query: event.target.value
                            });
                        },
                        placeholder: props.labels["insert-menu.search.placeholder"],
                        value: state.query
                    })
                }) : null,
                state.views.length > 1 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    flex: "none",
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ViewToggle, {
                        views: state.views,
                        onToggle: (name)=>{
                            send({
                                type: "toggle view",
                                name
                            });
                        },
                        labels: props.labels
                    })
                }) : null
            ]
        }) : null, $[27] = props.labels, $[28] = showFilter, $[29] = showingFilterOrViews, $[30] = state.query, $[31] = state.views, $[32] = t112) : t112 = $[32];
        let t122;
        $[33] !== showingTabs || $[34] !== state.groups ? (t122 = showingTabs ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            paddingTop: 1,
            paddingX: 1,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabList"], {
                space: 1,
                children: state.groups.map((group_0)=>{
                    var _group_0_title;
                    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tab"], {
                        id: "".concat(group_0.name, "-tab"),
                        "aria-controls": "".concat(group_0.name, "-panel"),
                        label: (_group_0_title = group_0.title) !== null && _group_0_title !== void 0 ? _group_0_title : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(group_0.name),
                        selected: group_0.selected,
                        onClick: ()=>{
                            send({
                                type: "select group",
                                name: group_0.name
                            });
                        }
                    }, group_0.name);
                })
            })
        }) : null, $[33] = showingTabs, $[34] = state.groups, $[35] = t122) : t122 = $[35], $[36] !== t102 || $[37] !== t112 || $[38] !== t122 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...t102,
            children: [
                t112,
                t122
            ]
        }), $[36] = t102, $[37] = t112, $[38] = t122, $[39] = t8) : t8 = $[39], T0 = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], t4 = 1, t5 = filteredSchemaTypes.length === 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            padding: 2,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                muted: !0,
                size: 1,
                children: props.labels["insert-menu.search.no-results"]
            })
        }) : selectedView ? selectedView.name === "grid" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
            autoRows: "auto",
            flex: 1,
            gap: 1,
            style: gridStyle,
            children: filteredSchemaTypes.map((schemaType)=>{
                var _selectedView_previewImageUrl;
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(GridMenuItem, {
                    icon: showIcons ? getSchemaTypeIcon(schemaType) : void 0,
                    onClick: ()=>{
                        props.onSelect(schemaType);
                    },
                    previewImageUrl: (_selectedView_previewImageUrl = selectedView.previewImageUrl) === null || _selectedView_previewImageUrl === void 0 ? void 0 : _selectedView_previewImageUrl.call(selectedView, schemaType.name),
                    schemaType
                }, schemaType.name);
            })
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
            flex: 1,
            space: 1,
            children: filteredSchemaTypes.map((schemaType_0)=>{
                var _schemaType_0_title;
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                    icon: showIcons ? getSchemaTypeIcon(schemaType_0) : void 0,
                    onClick: ()=>{
                        props.onSelect(schemaType_0);
                    },
                    text: (_schemaType_0_title = schemaType_0.title) !== null && _schemaType_0_title !== void 0 ? _schemaType_0_title : (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$startCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(schemaType_0.name)
                }, schemaType_0.name);
            })
        }) : null, $[10] = props, $[11] = showFilter, $[12] = showIcons, $[13] = state.groups, $[14] = state.query, $[15] = state.views, $[16] = T0, $[17] = T1, $[18] = T2, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7, $[23] = t8, $[24] = t9;
    } else T0 = $[16], T1 = $[17], T2 = $[18], t4 = $[19], t5 = $[20], t6 = $[21], t7 = $[22], t8 = $[23], t9 = $[24];
    let t10;
    $[40] !== T0 || $[41] !== t4 || $[42] !== t5 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T0, {
        padding: t4,
        children: t5
    }), $[40] = T0, $[41] = t4, $[42] = t5, $[43] = t10) : t10 = $[43];
    let t11;
    $[44] !== T1 || $[45] !== t10 || $[46] !== t6 || $[47] !== t7 || $[48] !== t8 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(T1, {
        direction: t6,
        height: t7,
        children: [
            t8,
            t10
        ]
    }), $[44] = T1, $[45] = t10, $[46] = t6, $[47] = t7, $[48] = t8, $[49] = t11) : t11 = $[49];
    let t12;
    return $[50] !== T2 || $[51] !== t11 || $[52] !== t9 ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T2, {
        padding: t9,
        children: t11
    }), $[50] = T2, $[51] = t11, $[52] = t9, $[53] = t12) : t12 = $[53], t12;
}
function _temp3(view_0) {
    return view_0.selected;
}
function _temp2(view, index) {
    return {
        ...view,
        selected: index === 0
    };
}
function _temp(group) {
    return {
        ...group,
        selected: !1
    };
}
const viewToggleIcon = {
    grid: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThLargeIcon"],
    list: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UlistIcon"]
}, viewToggleTooltip = {
    grid: "insert-menu.toggle-grid-view.tooltip",
    list: "insert-menu.toggle-list-view.tooltip"
};
function ViewToggle(props) {
    var _props_views_;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), viewIndex = props.views.findIndex(_temp4), nextView = (_props_views_ = props.views[viewIndex + 1]) !== null && _props_views_ !== void 0 ? _props_views_ : props.views[0], t0 = props.labels[viewToggleTooltip[nextView.name]];
    let t1;
    $[0] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        size: 1,
        children: t0
    }), $[0] = t0, $[1] = t1) : t1 = $[1];
    const t2 = viewToggleIcon[nextView.name];
    let t3;
    $[2] !== nextView.name || $[3] !== props ? (t3 = ()=>{
        props.onToggle(nextView.name);
    }, $[2] = nextView.name, $[3] = props, $[4] = t3) : t3 = $[4];
    let t4;
    $[5] !== t2 || $[6] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        mode: "bleed",
        icon: t2,
        onClick: t3
    }), $[5] = t2, $[6] = t3, $[7] = t4) : t4 = $[7];
    let t5;
    return $[8] !== t1 || $[9] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        content: t1,
        placement: "top",
        portal: !0,
        children: t4
    }), $[8] = t1, $[9] = t4, $[10] = t5) : t5 = $[10], t5;
}
function _temp4(view) {
    return view.selected;
}
function GridMenuItem(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19), [failedToLoad, setFailedToLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), Icon = props.icon;
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = {
        overflow: "hidden"
    }, $[0] = t0) : t0 = $[0];
    let t1;
    $[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = {
        backgroundColor: "var(--card-muted-bg-color)",
        paddingBottom: "66.6%",
        position: "relative"
    }, $[1] = t1) : t1 = $[1];
    let t2;
    $[2] !== Icon ? (t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$is$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(Icon) ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        align: "center",
        justify: "center",
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            size: 1,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Icon, {})
        })
    }) : null, $[2] = Icon, $[3] = t2) : t2 = $[3];
    let t3;
    $[4] !== failedToLoad || $[5] !== props.previewImageUrl ? (t3 = !props.previewImageUrl || failedToLoad ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
        src: props.previewImageUrl,
        style: {
            objectFit: "contain",
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0
        },
        onError: ()=>{
            setFailedToLoad(!0);
        }
    }), $[4] = failedToLoad, $[5] = props.previewImageUrl, $[6] = t3) : t3 = $[6];
    let t4;
    $[7] === Symbol.for("react.memo_cache_sentinel") ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            boxShadow: "inset 0 0 0 0.5px var(--card-fg-color)",
            opacity: 0.1
        }
    }), $[7] = t4) : t4 = $[7];
    let t5;
    $[8] !== t2 || $[9] !== t3 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        flex: "none",
        style: t1,
        children: [
            t2,
            t3,
            t4
        ]
    }), $[8] = t2, $[9] = t3, $[10] = t5) : t5 = $[10];
    var _props_schemaType_title;
    const t6 = (_props_schemaType_title = props.schemaType.title) !== null && _props_schemaType_title !== void 0 ? _props_schemaType_title : props.schemaType.name;
    let t7;
    $[11] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        flex: 1,
        padding: 2,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            size: 1,
            weight: "medium",
            children: t6
        })
    }), $[11] = t6, $[12] = t7) : t7 = $[12];
    let t8;
    $[13] !== t5 || $[14] !== t7 ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column",
        gap: 1,
        padding: 1,
        children: [
            t5,
            t7
        ]
    }), $[13] = t5, $[14] = t7, $[15] = t8) : t8 = $[15];
    let t9;
    return $[16] !== props.onClick || $[17] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
        padding: 0,
        radius: 2,
        onClick: props.onClick,
        style: t0,
        children: t8
    }), $[16] = props.onClick, $[17] = t8, $[18] = t9) : t9 = $[18], t9;
}
function filterSchemaTypes(schemaTypes, query, groups) {
    return schemaTypes.filter((schemaType)=>passesGroupFilter(schemaType, groups) && passesQueryFilter(schemaType, query));
}
function passesQueryFilter(schemaType, query) {
    var _schemaType_title;
    const sanitizedQuery = query.trim().toLowerCase();
    return schemaType.title ? (_schemaType_title = schemaType.title) === null || _schemaType_title === void 0 ? void 0 : _schemaType_title.toLowerCase().includes(sanitizedQuery) : schemaType.name.includes(sanitizedQuery);
}
function passesGroupFilter(schemaType, groups) {
    var _selectedGroup_of;
    const selectedGroup = groups.find((group)=>group.selected);
    return selectedGroup ? selectedGroup.name === ALL_ITEMS_GROUP_NAME ? !0 : (_selectedGroup_of = selectedGroup.of) === null || _selectedGroup_of === void 0 ? void 0 : _selectedGroup_of.includes(schemaType.name) : !0;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/compute-scroll-into-view@3.1.1/node_modules/compute-scroll-into-view/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compute",
    ()=>r
]);
const t = (t)=>"object" == typeof t && null != t && 1 === t.nodeType, e = (t, e)=>(!e || "hidden" !== t) && "visible" !== t && "clip" !== t, n = (t, n)=>{
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
        const o = getComputedStyle(t, null);
        return e(o.overflowY, n) || e(o.overflowX, n) || ((t)=>{
            const e = ((t)=>{
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t) {
                    return null;
                }
            })(t);
            return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
        })(t);
    }
    return !1;
}, o = (t, e, n, o, l, r, i, s)=>r < t && i > e || r > t && i < e ? 0 : r <= t && s <= n || i >= e && s >= n ? r - t - o : i > e && s < n || r < t && s > n ? i - e + l : 0, l = (t)=>{
    const e = t.parentElement;
    return null == e ? t.getRootNode().host || null : e;
}, r = (e, r)=>{
    var i, s, d, h;
    if ("undefined" == typeof document) return [];
    const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t)=>t !== a;
    if (!t(e)) throw new TypeError("Invalid target");
    const m = document.scrollingElement || document.documentElement, w = [];
    let W = e;
    for(; t(W) && p(W);){
        if (W = l(W), W === m) {
            w.push(W);
            break;
        }
        null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
    }
    const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t)=>{
        const e = window.getComputedStyle(t);
        return {
            top: parseFloat(e.scrollMarginTop) || 0,
            right: parseFloat(e.scrollMarginRight) || 0,
            bottom: parseFloat(e.scrollMarginBottom) || 0,
            left: parseFloat(e.scrollMarginLeft) || 0
        };
    })(e);
    let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
    const L = [];
    for(let t = 0; t < w.length; t++){
        const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: h } = e.getBoundingClientRect();
        if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !n(e) || x >= i && I <= d && R >= h && C <= s)) return L;
        const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
        let B = 0, F = 0;
        const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, X = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, Y = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
        if (m === e) B = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
        else {
            B = "start" === f ? k - i - p : "end" === f ? k - d + T + S : "nearest" === f ? o(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === u ? D - h - g : "center" === u ? D - (h + r / 2) + V / 2 : "end" === u ? D - s + W + V : o(h, s, r, g, W + V, D, D + E, E);
            const { scrollLeft: t, scrollTop: n } = e;
            B = 0 === Y ? 0 : Math.max(0, Math.min(n + B / Y, e.scrollHeight - l / Y + S)), F = 0 === X ? 0 : Math.max(0, Math.min(t + F / X, e.scrollWidth - r / X + V)), k += n - B, D += t - F;
        }
        L.push({
            el: e,
            top: B,
            left: F
        });
    }
    return L;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$compute$2d$scroll$2d$into$2d$view$40$3$2e$1$2e$1$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/compute-scroll-into-view@3.1.1/node_modules/compute-scroll-into-view/dist/index.js [app-client] (ecmascript)");
;
const o = (t)=>!1 === t ? {
        block: "end",
        inline: "nearest"
    } : ((t)=>t === Object(t) && 0 !== Object.keys(t).length)(t) ? t : {
        block: "start",
        inline: "nearest"
    };
function e(e, r) {
    if (!e.isConnected || !((t)=>{
        let o = t;
        for(; o && o.parentNode;){
            if (o.parentNode === document) return !0;
            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
        }
        return !1;
    })(e)) return;
    const n = ((t)=>{
        const o = window.getComputedStyle(t);
        return {
            top: parseFloat(o.scrollMarginTop) || 0,
            right: parseFloat(o.scrollMarginRight) || 0,
            bottom: parseFloat(o.scrollMarginBottom) || 0,
            left: parseFloat(o.scrollMarginLeft) || 0
        };
    })(e);
    if (((t)=>"object" == typeof t && "function" == typeof t.behavior)(r)) return r.behavior((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$compute$2d$scroll$2d$into$2d$view$40$3$2e$1$2e$1$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compute"])(e, r));
    const l = "boolean" == typeof r || null == r ? void 0 : r.behavior;
    for (const { el: a, top: i, left: s } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$compute$2d$scroll$2d$into$2d$view$40$3$2e$1$2e$1$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compute"])(e, o(r))){
        const t = i - n.top + n.bottom, o = s - n.left + n.right;
        a.scroll({
            top: t,
            left: o,
            behavior: l
        });
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+diff-match-patch@3.2.0/node_modules/@sanity/diff-match-patch/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIFF_DELETE",
    ()=>DIFF_DELETE,
    "DIFF_EQUAL",
    ()=>DIFF_EQUAL,
    "DIFF_INSERT",
    ()=>DIFF_INSERT,
    "adjustIndiciesToUcs2",
    ()=>adjustIndiciesToUcs2,
    "applyPatches",
    ()=>apply,
    "cleanupEfficiency",
    ()=>cleanupEfficiency,
    "cleanupSemantic",
    ()=>cleanupSemantic,
    "makeDiff",
    ()=>diff,
    "makePatches",
    ()=>make,
    "match",
    ()=>match,
    "parsePatch",
    ()=>parse,
    "stringifyPatch",
    ()=>stringifyPatch,
    "stringifyPatches",
    ()=>stringify,
    "xIndex",
    ()=>xIndex
]);
function cloneDiff(diff2) {
    const [type, patch] = diff2;
    return [
        type,
        patch
    ];
}
function getCommonOverlap(textA, textB) {
    let text1 = textA, text2 = textB;
    const text1Length = text1.length, text2Length = text2.length;
    if (text1Length === 0 || text2Length === 0) return 0;
    text1Length > text2Length ? text1 = text1.substring(text1Length - text2Length) : text1Length < text2Length && (text2 = text2.substring(0, text1Length));
    const textLength = Math.min(text1Length, text2Length);
    if (text1 === text2) return textLength;
    let best = 0, length = 1;
    for(let found = 0; found !== -1;){
        const pattern = text1.substring(textLength - length);
        if (found = text2.indexOf(pattern), found === -1) return best;
        length += found, (found === 0 || text1.substring(textLength - length) === text2.substring(0, length)) && (best = length, length++);
    }
    return best;
}
function getCommonPrefix(text1, text2) {
    if (!text1 || !text2 || text1[0] !== text2[0]) return 0;
    let pointerMin = 0, pointerMax = Math.min(text1.length, text2.length), pointerMid = pointerMax, pointerStart = 0;
    for(; pointerMin < pointerMid;)text1.substring(pointerStart, pointerMid) === text2.substring(pointerStart, pointerMid) ? (pointerMin = pointerMid, pointerStart = pointerMin) : pointerMax = pointerMid, pointerMid = Math.floor((pointerMax - pointerMin) / 2 + pointerMin);
    return pointerMid;
}
function getCommonSuffix(text1, text2) {
    if (!text1 || !text2 || text1[text1.length - 1] !== text2[text2.length - 1]) return 0;
    let pointerMin = 0, pointerMax = Math.min(text1.length, text2.length), pointerMid = pointerMax, pointerEnd = 0;
    for(; pointerMin < pointerMid;)text1.substring(text1.length - pointerMid, text1.length - pointerEnd) === text2.substring(text2.length - pointerMid, text2.length - pointerEnd) ? (pointerMin = pointerMid, pointerEnd = pointerMin) : pointerMax = pointerMid, pointerMid = Math.floor((pointerMax - pointerMin) / 2 + pointerMin);
    return pointerMid;
}
function isHighSurrogate(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 55296 && charCode <= 56319;
}
function isLowSurrogate(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 56320 && charCode <= 57343;
}
function bisect(text1, text2, deadline) {
    const text1Length = text1.length, text2Length = text2.length, maxD = Math.ceil((text1Length + text2Length) / 2), vOffset = maxD, vLength = 2 * maxD, v1 = new Array(vLength), v2 = new Array(vLength);
    for(let x = 0; x < vLength; x++)v1[x] = -1, v2[x] = -1;
    v1[vOffset + 1] = 0, v2[vOffset + 1] = 0;
    const delta = text1Length - text2Length, front = delta % 2 !== 0;
    let k1start = 0, k1end = 0, k2start = 0, k2end = 0;
    for(let d = 0; d < maxD && !(Date.now() > deadline); d++){
        for(let k1 = -d + k1start; k1 <= d - k1end; k1 += 2){
            const k1Offset = vOffset + k1;
            let x1;
            k1 === -d || k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1] ? x1 = v1[k1Offset + 1] : x1 = v1[k1Offset - 1] + 1;
            let y1 = x1 - k1;
            for(; x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1);)x1++, y1++;
            if (v1[k1Offset] = x1, x1 > text1Length) k1end += 2;
            else if (y1 > text2Length) k1start += 2;
            else if (front) {
                const k2Offset = vOffset + delta - k1;
                if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {
                    const x2 = text1Length - v2[k2Offset];
                    if (x1 >= x2) return bisectSplit(text1, text2, x1, y1, deadline);
                }
            }
        }
        for(let k2 = -d + k2start; k2 <= d - k2end; k2 += 2){
            const k2Offset = vOffset + k2;
            let x2;
            k2 === -d || k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1] ? x2 = v2[k2Offset + 1] : x2 = v2[k2Offset - 1] + 1;
            let y2 = x2 - k2;
            for(; x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1);)x2++, y2++;
            if (v2[k2Offset] = x2, x2 > text1Length) k2end += 2;
            else if (y2 > text2Length) k2start += 2;
            else if (!front) {
                const k1Offset = vOffset + delta - k2;
                if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
                    const x1 = v1[k1Offset], y1 = vOffset + x1 - k1Offset;
                    if (x2 = text1Length - x2, x1 >= x2) return bisectSplit(text1, text2, x1, y1, deadline);
                }
            }
        }
    }
    return [
        [
            DIFF_DELETE,
            text1
        ],
        [
            DIFF_INSERT,
            text2
        ]
    ];
}
function bisectSplit(text1, text2, x, y, deadline) {
    const text1a = text1.substring(0, x), text2a = text2.substring(0, y), text1b = text1.substring(x), text2b = text2.substring(y), diffs = doDiff(text1a, text2a, {
        checkLines: !1,
        deadline
    }), diffsb = doDiff(text1b, text2b, {
        checkLines: !1,
        deadline
    });
    return diffs.concat(diffsb);
}
function findHalfMatch(text1, text2) {
    let timeout = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    if (timeout <= 0) return null;
    const longText = text1.length > text2.length ? text1 : text2, shortText = text1.length > text2.length ? text2 : text1;
    if (longText.length < 4 || shortText.length * 2 < longText.length) return null;
    const halfMatch1 = halfMatchI(longText, shortText, Math.ceil(longText.length / 4)), halfMatch2 = halfMatchI(longText, shortText, Math.ceil(longText.length / 2));
    let halfMatch;
    if (halfMatch1 && halfMatch2) halfMatch = halfMatch1[4].length > halfMatch2[4].length ? halfMatch1 : halfMatch2;
    else {
        if (!halfMatch1 && !halfMatch2) return null;
        halfMatch2 ? halfMatch1 || (halfMatch = halfMatch2) : halfMatch = halfMatch1;
    }
    if (!halfMatch) throw new Error("Unable to find a half match.");
    let text1A, text1B, text2A, text2B;
    text1.length > text2.length ? (text1A = halfMatch[0], text1B = halfMatch[1], text2A = halfMatch[2], text2B = halfMatch[3]) : (text2A = halfMatch[0], text2B = halfMatch[1], text1A = halfMatch[2], text1B = halfMatch[3]);
    const midCommon = halfMatch[4];
    return [
        text1A,
        text1B,
        text2A,
        text2B,
        midCommon
    ];
}
function halfMatchI(longText, shortText, i) {
    const seed = longText.slice(i, i + Math.floor(longText.length / 4));
    let j = -1, bestCommon = "", bestLongTextA, bestLongTextB, bestShortTextA, bestShortTextB;
    for(; (j = shortText.indexOf(seed, j + 1)) !== -1;){
        const prefixLength = getCommonPrefix(longText.slice(i), shortText.slice(j)), suffixLength = getCommonSuffix(longText.slice(0, i), shortText.slice(0, j));
        bestCommon.length < suffixLength + prefixLength && (bestCommon = shortText.slice(j - suffixLength, j) + shortText.slice(j, j + prefixLength), bestLongTextA = longText.slice(0, i - suffixLength), bestLongTextB = longText.slice(i + prefixLength), bestShortTextA = shortText.slice(0, j - suffixLength), bestShortTextB = shortText.slice(j + prefixLength));
    }
    return bestCommon.length * 2 >= longText.length ? [
        bestLongTextA || "",
        bestLongTextB || "",
        bestShortTextA || "",
        bestShortTextB || "",
        bestCommon || ""
    ] : null;
}
function charsToLines(diffs, lineArray) {
    for(let x = 0; x < diffs.length; x++){
        const chars = diffs[x][1], text = [];
        for(let y = 0; y < chars.length; y++)text[y] = lineArray[chars.charCodeAt(y)];
        diffs[x][1] = text.join("");
    }
}
function linesToChars(textA, textB) {
    const lineArray = [], lineHash = {};
    lineArray[0] = "";
    function diffLinesToMunge(text) {
        let chars = "", lineStart = 0, lineEnd = -1, lineArrayLength = lineArray.length;
        for(; lineEnd < text.length - 1;){
            lineEnd = text.indexOf("\n", lineStart), lineEnd === -1 && (lineEnd = text.length - 1);
            let line = text.slice(lineStart, lineEnd + 1);
            (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== void 0) ? chars += String.fromCharCode(lineHash[line]) : (lineArrayLength === maxLines && (line = text.slice(lineStart), lineEnd = text.length), chars += String.fromCharCode(lineArrayLength), lineHash[line] = lineArrayLength, lineArray[lineArrayLength++] = line), lineStart = lineEnd + 1;
        }
        return chars;
    }
    let maxLines = 4e4;
    const chars1 = diffLinesToMunge(textA);
    maxLines = 65535;
    const chars2 = diffLinesToMunge(textB);
    return {
        chars1,
        chars2,
        lineArray
    };
}
function doLineModeDiff(textA, textB, opts) {
    let text1 = textA, text2 = textB;
    const a = linesToChars(text1, text2);
    text1 = a.chars1, text2 = a.chars2;
    const linearray = a.lineArray;
    let diffs = doDiff(text1, text2, {
        checkLines: !1,
        deadline: opts.deadline
    });
    charsToLines(diffs, linearray), diffs = cleanupSemantic(diffs), diffs.push([
        DIFF_EQUAL,
        ""
    ]);
    let pointer = 0, countDelete = 0, countInsert = 0, textDelete = "", textInsert = "";
    for(; pointer < diffs.length;){
        switch(diffs[pointer][0]){
            case DIFF_INSERT:
                countInsert++, textInsert += diffs[pointer][1];
                break;
            case DIFF_DELETE:
                countDelete++, textDelete += diffs[pointer][1];
                break;
            case DIFF_EQUAL:
                if (countDelete >= 1 && countInsert >= 1) {
                    diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert), pointer = pointer - countDelete - countInsert;
                    const aa = doDiff(textDelete, textInsert, {
                        checkLines: !1,
                        deadline: opts.deadline
                    });
                    for(let j = aa.length - 1; j >= 0; j--)diffs.splice(pointer, 0, aa[j]);
                    pointer += aa.length;
                }
                countInsert = 0, countDelete = 0, textDelete = "", textInsert = "";
                break;
            default:
                throw new Error("Unknown diff operation.");
        }
        pointer++;
    }
    return diffs.pop(), diffs;
}
function computeDiff(text1, text2, opts) {
    let diffs;
    if (!text1) return [
        [
            DIFF_INSERT,
            text2
        ]
    ];
    if (!text2) return [
        [
            DIFF_DELETE,
            text1
        ]
    ];
    const longtext = text1.length > text2.length ? text1 : text2, shorttext = text1.length > text2.length ? text2 : text1, i = longtext.indexOf(shorttext);
    if (i !== -1) return diffs = [
        [
            DIFF_INSERT,
            longtext.substring(0, i)
        ],
        [
            DIFF_EQUAL,
            shorttext
        ],
        [
            DIFF_INSERT,
            longtext.substring(i + shorttext.length)
        ]
    ], text1.length > text2.length && (diffs[0][0] = DIFF_DELETE, diffs[2][0] = DIFF_DELETE), diffs;
    if (shorttext.length === 1) return [
        [
            DIFF_DELETE,
            text1
        ],
        [
            DIFF_INSERT,
            text2
        ]
    ];
    const halfMatch = findHalfMatch(text1, text2);
    if (halfMatch) {
        const text1A = halfMatch[0], text1B = halfMatch[1], text2A = halfMatch[2], text2B = halfMatch[3], midCommon = halfMatch[4], diffsA = doDiff(text1A, text2A, opts), diffsB = doDiff(text1B, text2B, opts);
        return diffsA.concat([
            [
                DIFF_EQUAL,
                midCommon
            ]
        ], diffsB);
    }
    return opts.checkLines && text1.length > 100 && text2.length > 100 ? doLineModeDiff(text1, text2, opts) : bisect(text1, text2, opts.deadline);
}
var __defProp$2 = Object.defineProperty, __getOwnPropSymbols$2 = Object.getOwnPropertySymbols, __hasOwnProp$2 = Object.prototype.hasOwnProperty, __propIsEnum$2 = Object.prototype.propertyIsEnumerable, __defNormalProp$2 = (obj, key, value)=>key in obj ? __defProp$2(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$2 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(b))__propIsEnum$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
    return a;
};
const DIFF_DELETE = -1, DIFF_INSERT = 1, DIFF_EQUAL = 0;
function diff(textA, textB, opts) {
    if (textA === null || textB === null) throw new Error("Null input. (diff)");
    const diffs = doDiff(textA, textB, createInternalOpts(opts || {}));
    return adjustDiffForSurrogatePairs(diffs), diffs;
}
function doDiff(textA, textB, options) {
    let text1 = textA, text2 = textB;
    if (text1 === text2) return text1 ? [
        [
            DIFF_EQUAL,
            text1
        ]
    ] : [];
    let commonlength = getCommonPrefix(text1, text2);
    const commonprefix = text1.substring(0, commonlength);
    text1 = text1.substring(commonlength), text2 = text2.substring(commonlength), commonlength = getCommonSuffix(text1, text2);
    const commonsuffix = text1.substring(text1.length - commonlength);
    text1 = text1.substring(0, text1.length - commonlength), text2 = text2.substring(0, text2.length - commonlength);
    let diffs = computeDiff(text1, text2, options);
    return commonprefix && diffs.unshift([
        DIFF_EQUAL,
        commonprefix
    ]), commonsuffix && diffs.push([
        DIFF_EQUAL,
        commonsuffix
    ]), diffs = cleanupMerge(diffs), diffs;
}
function createDeadLine(timeout) {
    let t = 1;
    return typeof timeout < "u" && (t = timeout <= 0 ? Number.MAX_VALUE : timeout), Date.now() + t * 1e3;
}
function createInternalOpts(opts) {
    return __spreadValues$2({
        checkLines: !0,
        deadline: createDeadLine(opts.timeout || 1)
    }, opts);
}
function combineChar(data, char, dir) {
    return dir === 1 ? data + char : char + data;
}
function splitChar(data, dir) {
    return dir === 1 ? [
        data.substring(0, data.length - 1),
        data[data.length - 1]
    ] : [
        data.substring(1),
        data[0]
    ];
}
function hasSharedChar(diffs, i, j, dir) {
    return dir === 1 ? diffs[i][1][diffs[i][1].length - 1] === diffs[j][1][diffs[j][1].length - 1] : diffs[i][1][0] === diffs[j][1][0];
}
function deisolateChar(diffs, i, dir) {
    const inv = dir === 1 ? -1 : 1;
    let insertIdx = null, deleteIdx = null, j = i + dir;
    for(; j >= 0 && j < diffs.length && (insertIdx === null || deleteIdx === null); j += dir){
        const [op, text2] = diffs[j];
        if (text2.length !== 0) {
            if (op === DIFF_INSERT) {
                insertIdx === null && (insertIdx = j);
                continue;
            } else if (op === DIFF_DELETE) {
                deleteIdx === null && (deleteIdx = j);
                continue;
            } else if (op === DIFF_EQUAL) {
                if (insertIdx === null && deleteIdx === null) {
                    const [rest, char2] = splitChar(diffs[i][1], dir);
                    diffs[i][1] = rest, diffs[j][1] = combineChar(diffs[j][1], char2, inv);
                    return;
                }
                break;
            }
        }
    }
    if (insertIdx !== null && deleteIdx !== null && hasSharedChar(diffs, insertIdx, deleteIdx, dir)) {
        const [insertText, insertChar] = splitChar(diffs[insertIdx][1], inv), [deleteText] = splitChar(diffs[deleteIdx][1], inv);
        diffs[insertIdx][1] = insertText, diffs[deleteIdx][1] = deleteText, diffs[i][1] = combineChar(diffs[i][1], insertChar, dir);
        return;
    }
    const [text, char] = splitChar(diffs[i][1], dir);
    diffs[i][1] = text, insertIdx === null ? (diffs.splice(j, 0, [
        DIFF_INSERT,
        char
    ]), deleteIdx !== null && deleteIdx >= j && deleteIdx++) : diffs[insertIdx][1] = combineChar(diffs[insertIdx][1], char, inv), deleteIdx === null ? diffs.splice(j, 0, [
        DIFF_DELETE,
        char
    ]) : diffs[deleteIdx][1] = combineChar(diffs[deleteIdx][1], char, inv);
}
function adjustDiffForSurrogatePairs(diffs) {
    for(let i = 0; i < diffs.length; i++){
        const [diffType, diffText] = diffs[i];
        if (diffText.length === 0) continue;
        const firstChar = diffText[0], lastChar = diffText[diffText.length - 1];
        isHighSurrogate(lastChar) && diffType === DIFF_EQUAL && deisolateChar(diffs, i, 1), isLowSurrogate(firstChar) && diffType === DIFF_EQUAL && deisolateChar(diffs, i, -1);
    }
    for(let i = 0; i < diffs.length; i++)diffs[i][1].length === 0 && diffs.splice(i, 1);
}
function cleanupSemantic(rawDiffs) {
    let diffs = rawDiffs.map((diff2)=>cloneDiff(diff2)), hasChanges = !1;
    const equalities = [];
    let equalitiesLength = 0, lastEquality = null, pointer = 0, lengthInsertions1 = 0, lengthDeletions1 = 0, lengthInsertions2 = 0, lengthDeletions2 = 0;
    for(; pointer < diffs.length;)diffs[pointer][0] === DIFF_EQUAL ? (equalities[equalitiesLength++] = pointer, lengthInsertions1 = lengthInsertions2, lengthDeletions1 = lengthDeletions2, lengthInsertions2 = 0, lengthDeletions2 = 0, lastEquality = diffs[pointer][1]) : (diffs[pointer][0] === DIFF_INSERT ? lengthInsertions2 += diffs[pointer][1].length : lengthDeletions2 += diffs[pointer][1].length, lastEquality && lastEquality.length <= Math.max(lengthInsertions1, lengthDeletions1) && lastEquality.length <= Math.max(lengthInsertions2, lengthDeletions2) && (diffs.splice(equalities[equalitiesLength - 1], 0, [
        DIFF_DELETE,
        lastEquality
    ]), diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT, equalitiesLength--, equalitiesLength--, pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1, lengthInsertions1 = 0, lengthDeletions1 = 0, lengthInsertions2 = 0, lengthDeletions2 = 0, lastEquality = null, hasChanges = !0)), pointer++;
    for(hasChanges && (diffs = cleanupMerge(diffs)), diffs = cleanupSemanticLossless(diffs), pointer = 1; pointer < diffs.length;){
        if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
            const deletion = diffs[pointer - 1][1], insertion = diffs[pointer][1], overlapLength1 = getCommonOverlap(deletion, insertion), overlapLength2 = getCommonOverlap(insertion, deletion);
            overlapLength1 >= overlapLength2 ? (overlapLength1 >= deletion.length / 2 || overlapLength1 >= insertion.length / 2) && (diffs.splice(pointer, 0, [
                DIFF_EQUAL,
                insertion.substring(0, overlapLength1)
            ]), diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlapLength1), diffs[pointer + 1][1] = insertion.substring(overlapLength1), pointer++) : (overlapLength2 >= deletion.length / 2 || overlapLength2 >= insertion.length / 2) && (diffs.splice(pointer, 0, [
                DIFF_EQUAL,
                deletion.substring(0, overlapLength2)
            ]), diffs[pointer - 1][0] = DIFF_INSERT, diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlapLength2), diffs[pointer + 1][0] = DIFF_DELETE, diffs[pointer + 1][1] = deletion.substring(overlapLength2), pointer++), pointer++;
        }
        pointer++;
    }
    return diffs;
}
const nonAlphaNumericRegex = /[^a-zA-Z0-9]/, whitespaceRegex = /\s/, linebreakRegex = /[\r\n]/, blanklineEndRegex = /\n\r?\n$/, blanklineStartRegex = /^\r?\n\r?\n/;
function cleanupSemanticLossless(rawDiffs) {
    const diffs = rawDiffs.map((diff2)=>cloneDiff(diff2));
    function diffCleanupSemanticScore(one, two) {
        if (!one || !two) return 6;
        const char1 = one.charAt(one.length - 1), char2 = two.charAt(0), nonAlphaNumeric1 = char1.match(nonAlphaNumericRegex), nonAlphaNumeric2 = char2.match(nonAlphaNumericRegex), whitespace1 = nonAlphaNumeric1 && char1.match(whitespaceRegex), whitespace2 = nonAlphaNumeric2 && char2.match(whitespaceRegex), lineBreak1 = whitespace1 && char1.match(linebreakRegex), lineBreak2 = whitespace2 && char2.match(linebreakRegex), blankLine1 = lineBreak1 && one.match(blanklineEndRegex), blankLine2 = lineBreak2 && two.match(blanklineStartRegex);
        return blankLine1 || blankLine2 ? 5 : lineBreak1 || lineBreak2 ? 4 : nonAlphaNumeric1 && !whitespace1 && whitespace2 ? 3 : whitespace1 || whitespace2 ? 2 : nonAlphaNumeric1 || nonAlphaNumeric2 ? 1 : 0;
    }
    let pointer = 1;
    for(; pointer < diffs.length - 1;){
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
            let equality1 = diffs[pointer - 1][1], edit = diffs[pointer][1], equality2 = diffs[pointer + 1][1];
            const commonOffset = getCommonSuffix(equality1, edit);
            if (commonOffset) {
                const commonString = edit.substring(edit.length - commonOffset);
                equality1 = equality1.substring(0, equality1.length - commonOffset), edit = commonString + edit.substring(0, edit.length - commonOffset), equality2 = commonString + equality2;
            }
            let bestEquality1 = equality1, bestEdit = edit, bestEquality2 = equality2, bestScore = diffCleanupSemanticScore(equality1, edit) + diffCleanupSemanticScore(edit, equality2);
            for(; edit.charAt(0) === equality2.charAt(0);){
                equality1 += edit.charAt(0), edit = edit.substring(1) + equality2.charAt(0), equality2 = equality2.substring(1);
                const score = diffCleanupSemanticScore(equality1, edit) + diffCleanupSemanticScore(edit, equality2);
                score >= bestScore && (bestScore = score, bestEquality1 = equality1, bestEdit = edit, bestEquality2 = equality2);
            }
            diffs[pointer - 1][1] !== bestEquality1 && (bestEquality1 ? diffs[pointer - 1][1] = bestEquality1 : (diffs.splice(pointer - 1, 1), pointer--), diffs[pointer][1] = bestEdit, bestEquality2 ? diffs[pointer + 1][1] = bestEquality2 : (diffs.splice(pointer + 1, 1), pointer--));
        }
        pointer++;
    }
    return diffs;
}
function cleanupMerge(rawDiffs) {
    let diffs = rawDiffs.map((diff2)=>cloneDiff(diff2));
    diffs.push([
        DIFF_EQUAL,
        ""
    ]);
    let pointer = 0, countDelete = 0, countInsert = 0, textDelete = "", textInsert = "", commonlength;
    for(; pointer < diffs.length;)switch(diffs[pointer][0]){
        case DIFF_INSERT:
            countInsert++, textInsert += diffs[pointer][1], pointer++;
            break;
        case DIFF_DELETE:
            countDelete++, textDelete += diffs[pointer][1], pointer++;
            break;
        case DIFF_EQUAL:
            countDelete + countInsert > 1 ? (countDelete !== 0 && countInsert !== 0 && (commonlength = getCommonPrefix(textInsert, textDelete), commonlength !== 0 && (pointer - countDelete - countInsert > 0 && diffs[pointer - countDelete - countInsert - 1][0] === DIFF_EQUAL ? diffs[pointer - countDelete - countInsert - 1][1] += textInsert.substring(0, commonlength) : (diffs.splice(0, 0, [
                DIFF_EQUAL,
                textInsert.substring(0, commonlength)
            ]), pointer++), textInsert = textInsert.substring(commonlength), textDelete = textDelete.substring(commonlength)), commonlength = getCommonSuffix(textInsert, textDelete), commonlength !== 0 && (diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1], textInsert = textInsert.substring(0, textInsert.length - commonlength), textDelete = textDelete.substring(0, textDelete.length - commonlength))), pointer -= countDelete + countInsert, diffs.splice(pointer, countDelete + countInsert), textDelete.length && (diffs.splice(pointer, 0, [
                DIFF_DELETE,
                textDelete
            ]), pointer++), textInsert.length && (diffs.splice(pointer, 0, [
                DIFF_INSERT,
                textInsert
            ]), pointer++), pointer++) : pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL ? (diffs[pointer - 1][1] += diffs[pointer][1], diffs.splice(pointer, 1)) : pointer++, countInsert = 0, countDelete = 0, textDelete = "", textInsert = "";
            break;
        default:
            throw new Error("Unknown diff operation");
    }
    diffs[diffs.length - 1][1] === "" && diffs.pop();
    let hasChanges = !1;
    for(pointer = 1; pointer < diffs.length - 1;)diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL && (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1] ? (diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length), diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1], diffs.splice(pointer - 1, 1), hasChanges = !0) : diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1] && (diffs[pointer - 1][1] += diffs[pointer + 1][1], diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1], diffs.splice(pointer + 1, 1), hasChanges = !0)), pointer++;
    return hasChanges && (diffs = cleanupMerge(diffs)), diffs;
}
function trueCount() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.reduce((n, bool)=>n + (bool ? 1 : 0), 0);
}
function cleanupEfficiency(rawDiffs) {
    let editCost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
    let diffs = rawDiffs.map((diff2)=>cloneDiff(diff2)), hasChanges = !1;
    const equalities = [];
    let equalitiesLength = 0, lastEquality = null, pointer = 0, preIns = !1, preDel = !1, postIns = !1, postDel = !1;
    for(; pointer < diffs.length;)diffs[pointer][0] === DIFF_EQUAL ? (diffs[pointer][1].length < editCost && (postIns || postDel) ? (equalities[equalitiesLength++] = pointer, preIns = postIns, preDel = postDel, lastEquality = diffs[pointer][1]) : (equalitiesLength = 0, lastEquality = null), postIns = !1, postDel = !1) : (diffs[pointer][0] === DIFF_DELETE ? postDel = !0 : postIns = !0, lastEquality && (preIns && preDel && postIns && postDel || lastEquality.length < editCost / 2 && trueCount(preIns, preDel, postIns, postDel) === 3) && (diffs.splice(equalities[equalitiesLength - 1], 0, [
        DIFF_DELETE,
        lastEquality
    ]), diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT, equalitiesLength--, lastEquality = null, preIns && preDel ? (postIns = !0, postDel = !0, equalitiesLength = 0) : (equalitiesLength--, pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1, postIns = !1, postDel = !1), hasChanges = !0)), pointer++;
    return hasChanges && (diffs = cleanupMerge(diffs)), diffs;
}
var __defProp$1 = Object.defineProperty, __getOwnPropSymbols$1 = Object.getOwnPropertySymbols, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __propIsEnum$1 = Object.prototype.propertyIsEnumerable, __defNormalProp$1 = (obj, key, value)=>key in obj ? __defProp$1(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues$1 = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b))__propIsEnum$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
    return a;
};
const DEFAULT_OPTIONS = {
    /**
   * At what point is no match declared (0.0 = perfection, 1.0 = very loose).
   */ threshold: 0.5,
    /**
   * How far to search for a match (0 = exact location, 1000+ = broad match).
   * A match this many characters away from the expected location will add
   * 1.0 to the score (0.0 is a perfect match).
   */ distance: 1e3
};
function applyDefaults(options) {
    return __spreadValues$1(__spreadValues$1({}, DEFAULT_OPTIONS), options);
}
const MAX_BITS$1 = 32;
function bitap(text, pattern, loc) {
    let opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (pattern.length > MAX_BITS$1) throw new Error("Pattern too long for this browser.");
    const options = applyDefaults(opts), s = getAlphabetFromPattern(pattern);
    function getBitapScore(e, x) {
        const accuracy = e / pattern.length, proximity = Math.abs(loc - x);
        return options.distance ? accuracy + proximity / options.distance : proximity ? 1 : accuracy;
    }
    let scoreThreshold = options.threshold, bestLoc = text.indexOf(pattern, loc);
    bestLoc !== -1 && (scoreThreshold = Math.min(getBitapScore(0, bestLoc), scoreThreshold), bestLoc = text.lastIndexOf(pattern, loc + pattern.length), bestLoc !== -1 && (scoreThreshold = Math.min(getBitapScore(0, bestLoc), scoreThreshold)));
    const matchmask = 1 << pattern.length - 1;
    bestLoc = -1;
    let binMin, binMid, binMax = pattern.length + text.length, lastRd = [];
    for(let d = 0; d < pattern.length; d++){
        for(binMin = 0, binMid = binMax; binMin < binMid;)getBitapScore(d, loc + binMid) <= scoreThreshold ? binMin = binMid : binMax = binMid, binMid = Math.floor((binMax - binMin) / 2 + binMin);
        binMax = binMid;
        let start = Math.max(1, loc - binMid + 1);
        const finish = Math.min(loc + binMid, text.length) + pattern.length, rd = new Array(finish + 2);
        rd[finish + 1] = (1 << d) - 1;
        for(let j = finish; j >= start; j--){
            const charMatch = s[text.charAt(j - 1)];
            if (d === 0 ? rd[j] = (rd[j + 1] << 1 | 1) & charMatch : rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((lastRd[j + 1] | lastRd[j]) << 1 | 1) | lastRd[j + 1], rd[j] & matchmask) {
                const score = getBitapScore(d, j - 1);
                if (score <= scoreThreshold) if (scoreThreshold = score, bestLoc = j - 1, bestLoc > loc) start = Math.max(1, 2 * loc - bestLoc);
                else break;
            }
        }
        if (getBitapScore(d + 1, loc) > scoreThreshold) break;
        lastRd = rd;
    }
    return bestLoc;
}
function getAlphabetFromPattern(pattern) {
    const s = {};
    for(let i = 0; i < pattern.length; i++)s[pattern.charAt(i)] = 0;
    for(let i = 0; i < pattern.length; i++)s[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
    return s;
}
function match(text, pattern, searchLocation) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (text === null || pattern === null || searchLocation === null) throw new Error("Null input. (match())");
    const loc = Math.max(0, Math.min(searchLocation, text.length));
    if (text === pattern) return 0;
    if (text.length) {
        if (text.substring(loc, loc + pattern.length) === pattern) return loc;
    } else return -1;
    return bitap(text, pattern, loc, options);
}
function diffText1(diffs) {
    const text = [];
    for(let x = 0; x < diffs.length; x++)diffs[x][0] !== DIFF_INSERT && (text[x] = diffs[x][1]);
    return text.join("");
}
function diffText2(diffs) {
    const text = [];
    for(let x = 0; x < diffs.length; x++)diffs[x][0] !== DIFF_DELETE && (text[x] = diffs[x][1]);
    return text.join("");
}
function levenshtein(diffs) {
    let leven = 0, insertions = 0, deletions = 0;
    for(let x = 0; x < diffs.length; x++){
        const op = diffs[x][0], data = diffs[x][1];
        switch(op){
            case DIFF_INSERT:
                insertions += data.length;
                break;
            case DIFF_DELETE:
                deletions += data.length;
                break;
            case DIFF_EQUAL:
                leven += Math.max(insertions, deletions), insertions = 0, deletions = 0;
                break;
            default:
                throw new Error("Unknown diff operation.");
        }
    }
    return leven += Math.max(insertions, deletions), leven;
}
function xIndex(diffs, location) {
    let chars1 = 0, chars2 = 0, lastChars1 = 0, lastChars2 = 0, x;
    for(x = 0; x < diffs.length && (diffs[x][0] !== DIFF_INSERT && (chars1 += diffs[x][1].length), diffs[x][0] !== DIFF_DELETE && (chars2 += diffs[x][1].length), !(chars1 > location)); x++)lastChars1 = chars1, lastChars2 = chars2;
    return diffs.length !== x && diffs[x][0] === DIFF_DELETE ? lastChars2 : lastChars2 + (location - lastChars1);
}
function countUtf8Bytes(str) {
    let bytes = 0;
    for(let i = 0; i < str.length; i++){
        const codePoint = str.codePointAt(i);
        if (typeof codePoint > "u") throw new Error("Failed to get codepoint");
        bytes += utf8len(codePoint);
    }
    return bytes;
}
function adjustIndiciesToUcs2(patches, base) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let byteOffset = 0, idx = 0;
    function advanceTo(target) {
        for(; byteOffset < target;){
            const codePoint = base.codePointAt(idx);
            if (typeof codePoint > "u") return idx;
            byteOffset += utf8len(codePoint), codePoint > 65535 ? idx += 2 : idx += 1;
        }
        if (!options.allowExceedingIndices && byteOffset !== target) throw new Error("Failed to determine byte offset");
        return idx;
    }
    const adjusted = [];
    for (const patch of patches)adjusted.push({
        diffs: patch.diffs.map((diff2)=>cloneDiff(diff2)),
        start1: advanceTo(patch.start1),
        start2: advanceTo(patch.start2),
        utf8Start1: patch.utf8Start1,
        utf8Start2: patch.utf8Start2,
        length1: patch.length1,
        length2: patch.length2,
        utf8Length1: patch.utf8Length1,
        utf8Length2: patch.utf8Length2
    });
    return adjusted;
}
function utf8len(codePoint) {
    return codePoint <= 127 ? 1 : codePoint <= 2047 ? 2 : codePoint <= 65535 ? 3 : 4;
}
const MAX_BITS = 32, DEFAULT_MARGIN = 4;
function addPadding(patches) {
    let margin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_MARGIN;
    const paddingLength = margin;
    let nullPadding = "";
    for(let x = 1; x <= paddingLength; x++)nullPadding += String.fromCharCode(x);
    for (const p of patches)p.start1 += paddingLength, p.start2 += paddingLength, p.utf8Start1 += paddingLength, p.utf8Start2 += paddingLength;
    let patch = patches[0], diffs = patch.diffs;
    if (diffs.length === 0 || diffs[0][0] !== DIFF_EQUAL) diffs.unshift([
        DIFF_EQUAL,
        nullPadding
    ]), patch.start1 -= paddingLength, patch.start2 -= paddingLength, patch.utf8Start1 -= paddingLength, patch.utf8Start2 -= paddingLength, patch.length1 += paddingLength, patch.length2 += paddingLength, patch.utf8Length1 += paddingLength, patch.utf8Length2 += paddingLength;
    else if (paddingLength > diffs[0][1].length) {
        const firstDiffLength = diffs[0][1].length, extraLength = paddingLength - firstDiffLength;
        diffs[0][1] = nullPadding.substring(firstDiffLength) + diffs[0][1], patch.start1 -= extraLength, patch.start2 -= extraLength, patch.utf8Start1 -= extraLength, patch.utf8Start2 -= extraLength, patch.length1 += extraLength, patch.length2 += extraLength, patch.utf8Length1 += extraLength, patch.utf8Length2 += extraLength;
    }
    if (patch = patches[patches.length - 1], diffs = patch.diffs, diffs.length === 0 || diffs[diffs.length - 1][0] !== DIFF_EQUAL) diffs.push([
        DIFF_EQUAL,
        nullPadding
    ]), patch.length1 += paddingLength, patch.length2 += paddingLength, patch.utf8Length1 += paddingLength, patch.utf8Length2 += paddingLength;
    else if (paddingLength > diffs[diffs.length - 1][1].length) {
        const extraLength = paddingLength - diffs[diffs.length - 1][1].length;
        diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength), patch.length1 += extraLength, patch.length2 += extraLength, patch.utf8Length1 += extraLength, patch.utf8Length2 += extraLength;
    }
    return nullPadding;
}
function createPatchObject(start1, start2) {
    return {
        diffs: [],
        start1,
        start2,
        utf8Start1: start1,
        utf8Start2: start2,
        length1: 0,
        length2: 0,
        utf8Length1: 0,
        utf8Length2: 0
    };
}
function splitMax(patches) {
    let margin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_MARGIN;
    const patchSize = MAX_BITS;
    for(let x = 0; x < patches.length; x++){
        if (patches[x].length1 <= patchSize) continue;
        const bigpatch = patches[x];
        patches.splice(x--, 1);
        let start1 = bigpatch.start1, start2 = bigpatch.start2, preContext = "";
        for(; bigpatch.diffs.length !== 0;){
            const patch = createPatchObject(start1 - preContext.length, start2 - preContext.length);
            let empty = !0;
            if (preContext !== "") {
                const precontextByteCount = countUtf8Bytes(preContext);
                patch.length1 = preContext.length, patch.utf8Length1 = precontextByteCount, patch.length2 = preContext.length, patch.utf8Length2 = precontextByteCount, patch.diffs.push([
                    DIFF_EQUAL,
                    preContext
                ]);
            }
            for(; bigpatch.diffs.length !== 0 && patch.length1 < patchSize - margin;){
                const diffType = bigpatch.diffs[0][0];
                let diffText = bigpatch.diffs[0][1], diffTextByteCount = countUtf8Bytes(diffText);
                if (diffType === DIFF_INSERT) {
                    patch.length2 += diffText.length, patch.utf8Length2 += diffTextByteCount, start2 += diffText.length;
                    const diff2 = bigpatch.diffs.shift();
                    diff2 && patch.diffs.push(diff2), empty = !1;
                } else diffType === DIFF_DELETE && patch.diffs.length === 1 && patch.diffs[0][0] === DIFF_EQUAL && diffText.length > 2 * patchSize ? (patch.length1 += diffText.length, patch.utf8Length1 += diffTextByteCount, start1 += diffText.length, empty = !1, patch.diffs.push([
                    diffType,
                    diffText
                ]), bigpatch.diffs.shift()) : (diffText = diffText.substring(0, patchSize - patch.length1 - margin), diffTextByteCount = countUtf8Bytes(diffText), patch.length1 += diffText.length, patch.utf8Length1 += diffTextByteCount, start1 += diffText.length, diffType === DIFF_EQUAL ? (patch.length2 += diffText.length, patch.utf8Length2 += diffTextByteCount, start2 += diffText.length) : empty = !1, patch.diffs.push([
                    diffType,
                    diffText
                ]), diffText === bigpatch.diffs[0][1] ? bigpatch.diffs.shift() : bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diffText.length));
            }
            preContext = diffText2(patch.diffs), preContext = preContext.substring(preContext.length - margin);
            const postContext = diffText1(bigpatch.diffs).substring(0, margin), postContextByteCount = countUtf8Bytes(postContext);
            postContext !== "" && (patch.length1 += postContext.length, patch.length2 += postContext.length, patch.utf8Length1 += postContextByteCount, patch.utf8Length2 += postContextByteCount, patch.diffs.length !== 0 && patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL ? patch.diffs[patch.diffs.length - 1][1] += postContext : patch.diffs.push([
                DIFF_EQUAL,
                postContext
            ])), empty || patches.splice(++x, 0, patch);
        }
    }
}
function apply(patches, originalText) {
    let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof patches == "string") throw new Error("Patches must be an array - pass the patch to `parsePatch()` first");
    let text = originalText;
    if (patches.length === 0) return [
        text,
        []
    ];
    const parsed = adjustIndiciesToUcs2(patches, text, {
        allowExceedingIndices: opts.allowExceedingIndices
    }), margin = opts.margin || DEFAULT_MARGIN, deleteThreshold = opts.deleteThreshold || 0.4, nullPadding = addPadding(parsed, margin);
    text = nullPadding + text + nullPadding, splitMax(parsed, margin);
    let delta = 0;
    const results = [];
    for(let x = 0; x < parsed.length; x++){
        const expectedLoc = parsed[x].start2 + delta, text1 = diffText1(parsed[x].diffs);
        let startLoc, endLoc = -1;
        if (text1.length > MAX_BITS ? (startLoc = match(text, text1.substring(0, MAX_BITS), expectedLoc), startLoc !== -1 && (endLoc = match(text, text1.substring(text1.length - MAX_BITS), expectedLoc + text1.length - MAX_BITS), (endLoc === -1 || startLoc >= endLoc) && (startLoc = -1))) : startLoc = match(text, text1, expectedLoc), startLoc === -1) results[x] = !1, delta -= parsed[x].length2 - parsed[x].length1;
        else {
            results[x] = !0, delta = startLoc - expectedLoc;
            let text2;
            if (endLoc === -1 ? text2 = text.substring(startLoc, startLoc + text1.length) : text2 = text.substring(startLoc, endLoc + MAX_BITS), text1 === text2) text = text.substring(0, startLoc) + diffText2(parsed[x].diffs) + text.substring(startLoc + text1.length);
            else {
                let diffs = diff(text1, text2, {
                    checkLines: !1
                });
                if (text1.length > MAX_BITS && levenshtein(diffs) / text1.length > deleteThreshold) results[x] = !1;
                else {
                    diffs = cleanupSemanticLossless(diffs);
                    let index1 = 0, index2 = 0;
                    for(let y = 0; y < parsed[x].diffs.length; y++){
                        const mod = parsed[x].diffs[y];
                        mod[0] !== DIFF_EQUAL && (index2 = xIndex(diffs, index1)), mod[0] === DIFF_INSERT ? text = text.substring(0, startLoc + index2) + mod[1] + text.substring(startLoc + index2) : mod[0] === DIFF_DELETE && (text = text.substring(0, startLoc + index2) + text.substring(startLoc + xIndex(diffs, index1 + mod[1].length))), mod[0] !== DIFF_DELETE && (index1 += mod[1].length);
                    }
                }
            }
        }
    }
    return text = text.substring(nullPadding.length, text.length - nullPadding.length), [
        text,
        results
    ];
}
var __defProp = Object.defineProperty, __getOwnPropSymbols = Object.getOwnPropertySymbols, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable, __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value, __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))__hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b))__propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
    return a;
};
const DEFAULT_OPTS = {
    margin: 4
};
function getDefaultOpts() {
    let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return __spreadValues(__spreadValues({}, DEFAULT_OPTS), opts);
}
function make(a, b, options) {
    if (typeof a == "string" && typeof b == "string") {
        let diffs = diff(a, b, {
            checkLines: !0
        });
        return diffs.length > 2 && (diffs = cleanupSemantic(diffs), diffs = cleanupEfficiency(diffs)), _make(a, diffs, getDefaultOpts(options));
    }
    if (a && Array.isArray(a) && typeof b > "u") return _make(diffText1(a), a, getDefaultOpts(options));
    if (typeof a == "string" && b && Array.isArray(b)) return _make(a, b, getDefaultOpts(options));
    throw new Error("Unknown call format to make()");
}
function _make(textA, diffs, options) {
    if (diffs.length === 0) return [];
    const patches = [];
    let patch = createPatchObject(0, 0), patchDiffLength = 0, charCount1 = 0, charCount2 = 0, utf8Count1 = 0, utf8Count2 = 0, prepatchText = textA, postpatchText = textA;
    for(let x = 0; x < diffs.length; x++){
        const currentDiff = diffs[x], [diffType, diffText] = currentDiff, diffTextLength = diffText.length, diffByteLength = countUtf8Bytes(diffText);
        switch(!patchDiffLength && diffType !== DIFF_EQUAL && (patch.start1 = charCount1, patch.start2 = charCount2, patch.utf8Start1 = utf8Count1, patch.utf8Start2 = utf8Count2), diffType){
            case DIFF_INSERT:
                patch.diffs[patchDiffLength++] = currentDiff, patch.length2 += diffTextLength, patch.utf8Length2 += diffByteLength, postpatchText = postpatchText.substring(0, charCount2) + diffText + postpatchText.substring(charCount2);
                break;
            case DIFF_DELETE:
                patch.length1 += diffTextLength, patch.utf8Length1 += diffByteLength, patch.diffs[patchDiffLength++] = currentDiff, postpatchText = postpatchText.substring(0, charCount2) + postpatchText.substring(charCount2 + diffTextLength);
                break;
            case DIFF_EQUAL:
                diffTextLength <= 2 * options.margin && patchDiffLength && diffs.length !== x + 1 ? (patch.diffs[patchDiffLength++] = currentDiff, patch.length1 += diffTextLength, patch.length2 += diffTextLength, patch.utf8Length1 += diffByteLength, patch.utf8Length2 += diffByteLength) : diffTextLength >= 2 * options.margin && patchDiffLength && (addContext(patch, prepatchText, options), patches.push(patch), patch = createPatchObject(-1, -1), patchDiffLength = 0, prepatchText = postpatchText, charCount1 = charCount2, utf8Count1 = utf8Count2);
                break;
            default:
                throw new Error("Unknown diff type");
        }
        diffType !== DIFF_INSERT && (charCount1 += diffTextLength, utf8Count1 += diffByteLength), diffType !== DIFF_DELETE && (charCount2 += diffTextLength, utf8Count2 += diffByteLength);
    }
    return patchDiffLength && (addContext(patch, prepatchText, options), patches.push(patch)), patches;
}
function addContext(patch, text, opts) {
    if (text.length === 0) return;
    let pattern = text.substring(patch.start2, patch.start2 + patch.length1), padding = 0;
    for(; text.indexOf(pattern) !== text.lastIndexOf(pattern) && pattern.length < MAX_BITS - opts.margin - opts.margin;)padding += opts.margin, pattern = text.substring(patch.start2 - padding, patch.start2 + patch.length1 + padding);
    padding += opts.margin;
    let prefixStart = patch.start2 - padding;
    prefixStart >= 1 && isLowSurrogate(text[prefixStart]) && prefixStart--;
    const prefix = text.substring(prefixStart, patch.start2);
    prefix && patch.diffs.unshift([
        DIFF_EQUAL,
        prefix
    ]);
    const prefixLength = prefix.length, prefixUtf8Length = countUtf8Bytes(prefix);
    let suffixEnd = patch.start2 + patch.length1 + padding;
    suffixEnd < text.length && isLowSurrogate(text[suffixEnd]) && suffixEnd++;
    const suffix = text.substring(patch.start2 + patch.length1, suffixEnd);
    suffix && patch.diffs.push([
        DIFF_EQUAL,
        suffix
    ]);
    const suffixLength = suffix.length, suffixUtf8Length = countUtf8Bytes(suffix);
    patch.start1 -= prefixLength, patch.start2 -= prefixLength, patch.utf8Start1 -= prefixUtf8Length, patch.utf8Start2 -= prefixUtf8Length, patch.length1 += prefixLength + suffixLength, patch.length2 += prefixLength + suffixLength, patch.utf8Length1 += prefixUtf8Length + suffixUtf8Length, patch.utf8Length2 += prefixUtf8Length + suffixUtf8Length;
}
const patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
function parse(textline) {
    if (!textline) return [];
    const patches = [], lines = textline.split("\n");
    let textPointer = 0;
    for(; textPointer < lines.length;){
        const m = lines[textPointer].match(patchHeader);
        if (!m) throw new Error("Invalid patch string: ".concat(lines[textPointer]));
        const patch = createPatchObject(toInt(m[1]), toInt(m[3]));
        for(patches.push(patch), m[2] === "" ? (patch.start1--, patch.utf8Start1--, patch.length1 = 1, patch.utf8Length1 = 1) : m[2] === "0" ? (patch.length1 = 0, patch.utf8Length1 = 0) : (patch.start1--, patch.utf8Start1--, patch.utf8Length1 = toInt(m[2]), patch.length1 = patch.utf8Length1), m[4] === "" ? (patch.start2--, patch.utf8Start2--, patch.length2 = 1, patch.utf8Length2 = 1) : m[4] === "0" ? (patch.length2 = 0, patch.utf8Length2 = 0) : (patch.start2--, patch.utf8Start2--, patch.utf8Length2 = toInt(m[4]), patch.length2 = patch.utf8Length2), textPointer++; textPointer < lines.length;){
            const currentLine = lines[textPointer], sign = currentLine.charAt(0);
            if (sign === "@") break;
            if (sign === "") {
                textPointer++;
                continue;
            }
            let line;
            try {
                line = decodeURI(currentLine.slice(1));
            } catch (ex) {
                throw new Error("Illegal escape in parse: ".concat(currentLine));
            }
            const utf8Diff = countUtf8Bytes(line) - line.length;
            if (sign === "-") patch.diffs.push([
                DIFF_DELETE,
                line
            ]), patch.length1 -= utf8Diff;
            else if (sign === "+") patch.diffs.push([
                DIFF_INSERT,
                line
            ]), patch.length2 -= utf8Diff;
            else if (sign === " ") patch.diffs.push([
                DIFF_EQUAL,
                line
            ]), patch.length1 -= utf8Diff, patch.length2 -= utf8Diff;
            else throw new Error('Invalid patch mode "'.concat(sign, '" in: ').concat(line));
            textPointer++;
        }
    }
    return patches;
}
function toInt(num) {
    return parseInt(num, 10);
}
function stringify(patches) {
    return patches.map(stringifyPatch).join("");
}
function stringifyPatch(patch) {
    const { utf8Length1, utf8Length2, utf8Start1, utf8Start2, diffs } = patch;
    let coords1;
    utf8Length1 === 0 ? coords1 = "".concat(utf8Start1, ",0") : utf8Length1 === 1 ? coords1 = "".concat(utf8Start1 + 1) : coords1 = "".concat(utf8Start1 + 1, ",").concat(utf8Length1);
    let coords2;
    utf8Length2 === 0 ? coords2 = "".concat(utf8Start2, ",0") : utf8Length2 === 1 ? coords2 = "".concat(utf8Start2 + 1) : coords2 = "".concat(utf8Start2 + 1, ",").concat(utf8Length2);
    const text = [
        "@@ -".concat(coords1, " +").concat(coords2, " @@\n")
    ];
    let op;
    for(let x = 0; x < diffs.length; x++){
        switch(diffs[x][0]){
            case DIFF_INSERT:
                op = "+";
                break;
            case DIFF_DELETE:
                op = "-";
                break;
            case DIFF_EQUAL:
                op = " ";
                break;
            default:
                throw new Error("Unknown patch operation.");
        }
        text[x + 1] = "".concat(op + encodeURI(diffs[x][1]), "\n");
    }
    return text.join("").replace(/%20/g, " ");
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/mendoza@3.0.8/node_modules/mendoza/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyPatch",
    ()=>applyPatch,
    "incremental",
    ()=>incrementalPatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
const OPS = [
    "Value",
    "Copy",
    "Blank",
    "ReturnIntoArray",
    "ReturnIntoObject",
    "ReturnIntoObjectSameKey",
    "PushField",
    "PushElement",
    "PushParent",
    "Pop",
    "PushFieldCopy",
    "PushFieldBlank",
    "PushElementCopy",
    "PushElementBlank",
    "ReturnIntoObjectPop",
    "ReturnIntoObjectSameKeyPop",
    "ReturnIntoArrayPop",
    "ObjectSetFieldValue",
    "ObjectCopyField",
    "ObjectDeleteField",
    "ArrayAppendValue",
    "ArrayAppendSlice",
    "StringAppendString",
    "StringAppendSlice"
];
class Patcher {
    read() {
        return this.patch[this.i++];
    }
    process() {
        for(this.inputStack.push({
            value: this.root
        }), this.outputStack.push({
            value: this.root
        }); this.i < this.patch.length;){
            let opcode = this.read(), op = OPS[opcode];
            if (!op) throw new Error("Unknown opcode: ".concat(opcode));
            let processor = "process".concat(op);
            this[processor].apply(this);
        }
        let entry = this.outputStack.pop();
        return this.finalizeOutput(entry);
    }
    inputEntry() {
        return this.inputStack[this.inputStack.length - 1];
    }
    inputKey(entry, idx) {
        return entry.keys || (entry.keys = this.model.objectGetKeys(entry.value).sort()), entry.keys[idx];
    }
    outputEntry() {
        return this.outputStack[this.outputStack.length - 1];
    }
    outputArray() {
        let entry = this.outputEntry();
        return entry.writeValue || (entry.writeValue = this.model.copyArray(entry.value)), entry.writeValue;
    }
    outputObject() {
        let entry = this.outputEntry();
        return entry.writeValue || (entry.writeValue = this.model.copyObject(entry.value)), entry.writeValue;
    }
    outputString() {
        let entry = this.outputEntry();
        return entry.writeValue || (entry.writeValue = this.model.copyString(entry.value)), entry.writeValue;
    }
    finalizeOutput(entry) {
        return entry.writeValue ? this.model.finalize(entry.writeValue) : entry.value;
    }
    // Processors:
    processValue() {
        let value = this.model.wrap(this.read());
        this.outputStack.push({
            value
        });
    }
    processCopy() {
        let input = this.inputEntry();
        this.outputStack.push({
            value: input.value
        });
    }
    processBlank() {
        this.outputStack.push({
            value: null
        });
    }
    processReturnIntoArray() {
        let entry = this.outputStack.pop(), result = this.finalizeOutput(entry), arr = this.outputArray();
        this.model.arrayAppendValue(arr, result);
    }
    processReturnIntoObject() {
        let key = this.read(), entry = this.outputStack.pop(), result = this.finalizeOutput(entry);
        result = this.model.markChanged(result);
        let obj = this.outputObject();
        this.model.objectSetField(obj, key, result);
    }
    processReturnIntoObjectSameKey() {
        let input = this.inputEntry(), entry = this.outputStack.pop(), result = this.finalizeOutput(entry), obj = this.outputObject();
        this.model.objectSetField(obj, input.key, result);
    }
    processPushField() {
        let idx = this.read(), entry = this.inputEntry(), key = this.inputKey(entry, idx), value = this.model.objectGetField(entry.value, key);
        this.inputStack.push({
            value,
            key
        });
    }
    processPushElement() {
        let idx = this.read(), entry = this.inputEntry(), value = this.model.arrayGetElement(entry.value, idx);
        this.inputStack.push({
            value
        });
    }
    processPop() {
        this.inputStack.pop();
    }
    processPushFieldCopy() {
        this.processPushField(), this.processCopy();
    }
    processPushFieldBlank() {
        this.processPushField(), this.processBlank();
    }
    processPushElementCopy() {
        this.processPushElement(), this.processCopy();
    }
    processPushElementBlank() {
        this.processPushElement(), this.processBlank();
    }
    processReturnIntoObjectPop() {
        this.processReturnIntoObject(), this.processPop();
    }
    processReturnIntoObjectSameKeyPop() {
        this.processReturnIntoObjectSameKey(), this.processPop();
    }
    processReturnIntoArrayPop() {
        this.processReturnIntoArray(), this.processPop();
    }
    processObjectSetFieldValue() {
        this.processValue(), this.processReturnIntoObject();
    }
    processObjectCopyField() {
        this.processPushField(), this.processCopy(), this.processReturnIntoObjectSameKey(), this.processPop();
    }
    processObjectDeleteField() {
        let idx = this.read(), entry = this.inputEntry(), key = this.inputKey(entry, idx), obj = this.outputObject();
        this.model.objectDeleteField(obj, key);
    }
    processArrayAppendValue() {
        let value = this.model.wrap(this.read()), arr = this.outputArray();
        this.model.arrayAppendValue(arr, value);
    }
    processArrayAppendSlice() {
        let left = this.read(), right = this.read(), str = this.outputArray(), val = this.inputEntry().value;
        this.model.arrayAppendSlice(str, val, left, right);
    }
    processStringAppendString() {
        let value = this.model.wrap(this.read()), str = this.outputString();
        this.model.stringAppendValue(str, value);
    }
    processStringAppendSlice() {
        let left = this.read(), right = this.read(), str = this.outputString(), val = this.inputEntry().value;
        this.model.stringAppendSlice(str, val, left, right);
    }
    constructor(model, root, patch){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "model", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "root", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "patch", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "i", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "inputStack", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "outputStack", void 0);
        this.model = model, this.root = root, this.patch = patch, this.i = 0, this.inputStack = [], this.outputStack = [];
    }
}
function utf8charSize(code) {
    return code >> 16 ? 4 : code >> 11 ? 3 : code >> 7 ? 2 : 1;
}
function utf8stringSize(str) {
    let b = 0;
    for(let i = 0; i < str.length; i++){
        let code = str.codePointAt(i), size = utf8charSize(code);
        size == 4 && i++, b += size;
    }
    return b;
}
function utf8resolveIndex(str, idx) {
    let start = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let byteCount = start, ucsIdx = 0;
    for(ucsIdx = start; byteCount < idx; ucsIdx++){
        let code = str.codePointAt(ucsIdx), size = utf8charSize(code);
        size === 4 && ucsIdx++, byteCount += size;
    }
    return ucsIdx;
}
function commonPrefix(str, str2) {
    let len = Math.min(str.length, str2.length), b = 0;
    for(let i = 0; i < len;){
        let aPoint = str.codePointAt(i), bPoint = str2.codePointAt(i);
        if (aPoint !== bPoint) return b;
        let size = utf8charSize(aPoint);
        b += size, i += size === 4 ? 2 : 1;
    }
    return b;
}
function commonSuffix(str, str2) {
    let prefix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let len = Math.min(str.length, str2.length) - prefix, b = 0;
    for(let i = 0; i < len;){
        let aPoint = str.codePointAt(str.length - 1 - i), bPoint = str2.codePointAt(str2.length - 1 - i);
        if (aPoint !== bPoint) return b;
        let size = utf8charSize(aPoint);
        b += size, i += size === 4 ? 2 : 1;
    }
    return b;
}
class IncrementalModel {
    wrap(data) {
        return this.wrapWithMeta(data, this.meta, this.meta);
    }
    wrapWithMeta(data, startMeta) {
        let endMeta = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.meta;
        return {
            data,
            startMeta,
            endMeta
        };
    }
    asObject(value) {
        if (!value.content) {
            let fields = {};
            for (let [key, val] of Object.entries(value.data))fields[key] = this.wrapWithMeta(val, value.startMeta);
            value.content = {
                type: "object",
                fields
            };
        }
        return value.content;
    }
    asArray(value) {
        if (!value.content) {
            let elements = value.data.map((item)=>this.wrapWithMeta(item, value.startMeta)), metas = elements.map(()=>this.meta);
            value.content = {
                type: "array",
                elements,
                metas
            };
        }
        return value.content;
    }
    asString(value) {
        if (!value.content) {
            let str = value.data, part = {
                value: str,
                utf8size: utf8stringSize(str),
                uses: [],
                startMeta: value.startMeta,
                endMeta: value.endMeta
            };
            value.content = this.stringFromParts([
                part
            ]);
        }
        return value.content;
    }
    stringFromParts(parts) {
        let str = {
            type: "string",
            parts
        };
        for (let part of parts)part.uses.push(str);
        return str;
    }
    objectGetKeys(value) {
        return value.content ? Object.keys(value.content.fields) : Object.keys(value.data);
    }
    objectGetField(value, key) {
        return this.asObject(value).fields[key];
    }
    arrayGetElement(value, idx) {
        return this.asArray(value).elements[idx];
    }
    finalize(content) {
        return this.updateEndMeta(content), {
            content,
            startMeta: this.meta,
            endMeta: this.meta
        };
    }
    markChanged(value) {
        return this.wrap(unwrap(value));
    }
    updateEndMeta(content) {
        if (content.type == "string") for (let part of content.parts)part.endMeta = this.meta;
        else if (content.type === "array") for (let val of content.elements)val.content && val.endMeta !== this.meta && this.updateEndMeta(val.content), val.endMeta = this.meta;
        else for (let val of Object.values(content.fields))val.content && val.endMeta !== this.meta && this.updateEndMeta(val.content), val.endMeta = this.meta;
    }
    copyString(value) {
        if (value) {
            let other = this.asString(value);
            return this.stringFromParts(other.parts.slice());
        } else return {
            type: "string",
            parts: []
        };
    }
    copyObject(value) {
        let obj = {
            type: "object",
            fields: {}
        };
        if (value) {
            let other = this.asObject(value);
            Object.assign(obj.fields, other.fields);
        }
        return obj;
    }
    copyArray(value) {
        let arr = value ? this.asArray(value) : null, elements = arr ? arr.elements : [], metas = arr ? arr.metas : [];
        return {
            type: "array",
            elements,
            metas
        };
    }
    objectSetField(target, key, value) {
        target.fields[key] = value;
    }
    objectDeleteField(target, key) {
        delete target.fields[key];
    }
    arrayAppendValue(target, value) {
        target.elements.push(value), target.metas.push(this.meta);
    }
    arrayAppendSlice(target, source, left, right) {
        let arr = this.asArray(source), samePosition = arr.elements.length === left;
        if (target.elements.push(...arr.elements.slice(left, right)), samePosition) target.metas.push(...arr.metas.slice(left, right));
        else for(let i = left; i < right; i++)target.metas.push(this.meta);
    }
    stringAppendValue(target, value) {
        let str = this.asString(value);
        for (let part of str.parts)this.stringAppendPart(target, part);
    }
    stringAppendPart(target, part) {
        target.parts.push(part), part.uses.push(target);
    }
    resolveStringPart(str, from, len) {
        if (len === 0) return from;
        for(let i = from; i < str.parts.length; i++){
            let part = str.parts[i];
            if (len === part.utf8size) return i + 1;
            if (len < part.utf8size) return this.splitString(part, len), i + 1;
            len -= part.utf8size;
        }
        throw new Error("splitting string out of bounds");
    }
    splitString(part, idx) {
        let leftValue, rightValue, leftSize = idx, rightSize = part.utf8size - leftSize;
        if (part.utf8size !== part.value.length) {
            let byteCount = 0;
            for(idx = 0; byteCount < leftSize; idx++){
                let code = part.value.codePointAt(idx), size = utf8charSize(code);
                size === 4 && idx++, byteCount += size;
            }
        }
        leftValue = part.value.slice(0, idx), rightValue = part.value.slice(idx);
        let newPart = {
            value: rightValue,
            utf8size: rightSize,
            uses: part.uses.slice(),
            startMeta: part.startMeta,
            endMeta: part.endMeta
        };
        part.value = leftValue, part.utf8size = leftSize;
        for (let use of part.uses){
            let ndx = use.parts.indexOf(part);
            if (ndx === -1) throw new Error("bug: mismatch between string parts and use.");
            use.parts.splice(ndx + 1, 0, newPart);
        }
    }
    stringAppendSlice(target, source, left, right) {
        let str = this.asString(source), firstPart = this.resolveStringPart(str, 0, left), lastPart = this.resolveStringPart(str, firstPart, right - left);
        for(let i = firstPart; i < lastPart; i++){
            let part = str.parts[i];
            this.stringAppendPart(target, part);
        }
    }
    constructor(meta){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "meta", void 0);
        this.meta = meta;
    }
}
function wrap(data, meta) {
    return {
        data,
        startMeta: meta,
        endMeta: meta
    };
}
function unwrap(value) {
    if (typeof value.data < "u") return value.data;
    let result, content = value.content;
    switch(content.type){
        case "string":
            result = content.parts.map((part)=>part.value).join("");
            break;
        case "array":
            result = content.elements.map((val)=>unwrap(val));
            break;
        case "object":
            {
                result = {};
                for (let [key, val] of Object.entries(content.fields))result[key] = unwrap(val);
            }
    }
    return value.data = result, result;
}
function getType(value) {
    return value.content ? value.content.type : Array.isArray(value.data) ? "array" : value.data === null ? "null" : typeof value.data;
}
function rebaseValue(left, right) {
    let leftType = getType(left), rightType = getType(right);
    if (leftType !== rightType) return right;
    let leftModel = new IncrementalModel(left.endMeta), rightModel = new IncrementalModel(right.endMeta);
    switch(leftType){
        case "object":
            {
                let leftObj = leftModel.asObject(left), rightObj = rightModel.asObject(right), identicalFieldCount = 0, leftFieldCount = Object.keys(leftObj.fields).length, rightFieldCount = Object.keys(rightObj.fields).length;
                for (let [key, rightVal] of Object.entries(rightObj.fields)){
                    let leftVal = leftObj.fields[key];
                    leftVal && (rightObj.fields[key] = rebaseValue(leftVal, rightVal), rightObj.fields[key] === leftVal && identicalFieldCount++);
                }
                return leftFieldCount === rightFieldCount && leftFieldCount === identicalFieldCount ? left : right;
            }
        case "array":
            {
                let leftArr = leftModel.asArray(left), rightArr = rightModel.asArray(right);
                if (leftArr.elements.length !== rightArr.elements.length) break;
                let numRebased = 0;
                for(let i = 0; i < rightArr.elements.length; i++)rightArr.elements[i] = rebaseValue(leftArr.elements[i], rightArr.elements[i]), rightArr.elements[i] !== leftArr.elements[i] && numRebased++;
                return numRebased === 0 ? left : right;
            }
        case "null":
        case "boolean":
        case "number":
            {
                if (unwrap(left) === unwrap(right)) return left;
                break;
            }
        case "string":
            {
                let leftRaw = unwrap(left), rightRaw = unwrap(right);
                if (leftRaw === rightRaw) return left;
                let result = rightModel.copyString(null), prefix = commonPrefix(leftRaw, rightRaw), suffix = commonSuffix(leftRaw, rightRaw, prefix), rightLen = utf8stringSize(rightRaw), leftLen = utf8stringSize(leftRaw);
                0 < prefix && rightModel.stringAppendSlice(result, left, 0, prefix), prefix < rightLen - suffix && rightModel.stringAppendSlice(result, right, prefix, rightLen - suffix), leftLen - suffix < leftLen && rightModel.stringAppendSlice(result, left, leftLen - suffix, leftLen);
                let value = rightModel.finalize(result);
                if (unwrap(value) !== rightRaw) throw new Error("incorrect string rebase");
                return value;
            }
    }
    return right;
}
function applyPatch$1(left, patch, startMeta) {
    let model = new IncrementalModel(startMeta);
    return new Patcher(model, left, patch).process();
}
var incrementalPatcher = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    applyPatch: applyPatch$1,
    getType,
    rebaseValue,
    unwrap,
    wrap
});
class SimpleModel {
    wrap(data) {
        return data;
    }
    finalize(b) {
        return Array.isArray(b) ? b : b.data;
    }
    markChanged(value) {
        return value;
    }
    objectGetKeys(value) {
        return Object.keys(value);
    }
    objectGetField(value, key) {
        return value[key];
    }
    arrayGetElement(value, idx) {
        return value[idx];
    }
    copyObject(value) {
        let res = {
            type: "object",
            data: {}
        };
        if (value !== null) for (let [key, val] of Object.entries(value))res.data[key] = val;
        return res;
    }
    copyArray(value) {
        return value === null ? [] : value.slice();
    }
    copyString(value) {
        return {
            type: "string",
            data: value === null ? "" : value
        };
    }
    objectSetField(target, key, value) {
        target.data[key] = value;
    }
    objectDeleteField(target, key) {
        delete target.data[key];
    }
    arrayAppendValue(target, value) {
        target.push(value);
    }
    arrayAppendSlice(target, source, left, right) {
        target.push(...source.slice(left, right));
    }
    stringAppendSlice(target, source, left, right) {
        const sourceString = source, leftPos = utf8resolveIndex(sourceString, left), rightPos = utf8resolveIndex(sourceString, right, leftPos);
        target.data += sourceString.slice(leftPos, rightPos);
    }
    stringAppendValue(target, value) {
        target.data += value;
    }
}
function applyPatch(left, patch) {
    let root = left;
    return new Patcher(new SimpleModel(), root, patch).process();
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/next-sanity@11.6.12_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity+icons@3._3899177b1cf90f0c876ea99efee95abd/node_modules/next-sanity/dist/visual-editing/server-actions/data:b4b6a8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f1dd1caa8af9a57749e89642b48034606cf760963":"revalidateRootLayout"},"projects/masterthepixel/node_modules/.pnpm/next-sanity@11.6.12_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity+icons@3._3899177b1cf90f0c876ea99efee95abd/node_modules/next-sanity/dist/visual-editing/server-actions/index.js",""] */ __turbopack_context__.s([
    "revalidateRootLayout",
    ()=>revalidateRootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var revalidateRootLayout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f1dd1caa8af9a57749e89642b48034606cf760963", __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "revalidateRootLayout"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5pbXBvcnQgeyBkcmFmdE1vZGUgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5hc3luYyBmdW5jdGlvbiByZXZhbGlkYXRlUm9vdExheW91dCgpIHtcblx0aWYgKCEoYXdhaXQgZHJhZnRNb2RlKCkpLmlzRW5hYmxlZCkge1xuXHRcdGNvbnNvbGUud2FybihcIlNraXBwZWQgcmV2YWxpZGF0ZVBhdGggcmVxdWVzdCBiZWNhdXNlIGRyYWZ0IG1vZGUgaXMgbm90IGVuYWJsZWRcIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGF3YWl0IHJldmFsaWRhdGVQYXRoKFwiL1wiLCBcImxheW91dFwiKTtcbn1cbmV4cG9ydCB7IHJldmFsaWRhdGVSb290TGF5b3V0IH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic2ZBVVMifQ==
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/next-sanity@11.6.12_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity+icons@3._3899177b1cf90f0c876ea99efee95abd/node_modules/next-sanity/dist/VisualEditing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisualEditing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$11$2e$6$2e$12_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$icons$40$3$2e$_3899177b1cf90f0c876ea99efee95abd$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$visual$2d$editing$2f$server$2d$actions$2f$data$3a$b4b6a8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next-sanity@11.6.12_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity+icons@3._3899177b1cf90f0c876ea99efee95abd/node_modules/next-sanity/dist/visual-editing/server-actions/data:b4b6a8 [app-client] (ecmascript) <text/javascript>");
;
;
;
;
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") return false;
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith("".concat(prefix, "/"));
}
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) return {
        pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
        query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
        hash: hashIndex > -1 ? path.slice(hashIndex) : ""
    };
    return {
        pathname: path,
        query: "",
        hash: ""
    };
}
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) return path;
    if (path === "/" && prefix) return prefix;
    const { pathname, query, hash } = parsePath(path);
    return "".concat(prefix).concat(pathname).concat(query).concat(hash);
}
function removePathPrefix(path, prefix) {
    if (!pathHasPrefix(path, prefix)) return path;
    const withoutPrefix = path.slice(prefix.length);
    if (withoutPrefix.startsWith("/")) return withoutPrefix;
    return "/".concat(withoutPrefix);
}
const normalizePathTrailingSlash = (path, trailingSlash)=>{
    const { pathname, query, hash } = parsePath(path);
    if (trailingSlash) {
        if (pathname.endsWith("/")) return "".concat(pathname).concat(query).concat(hash);
        return "".concat(pathname, "/").concat(query).concat(hash);
    }
    return "".concat(removeTrailingSlash(pathname)).concat(query).concat(hash);
};
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
}
function VisualEditing(props) {
    const { basePath = "", plugins, components, refresh, trailingSlash = false, zIndex } = props;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const routerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(router);
    const [navigate, setNavigate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisualEditing.useEffect": ()=>{
            routerRef.current = router;
        }
    }["VisualEditing.useEffect"], [
        router
    ]);
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VisualEditing.useMemo[history]": ()=>({
                subscribe: ({
                    "VisualEditing.useMemo[history]": (_navigate)=>{
                        setNavigate({
                            "VisualEditing.useMemo[history]": ()=>_navigate
                        }["VisualEditing.useMemo[history]"]);
                        return ({
                            "VisualEditing.useMemo[history]": ()=>setNavigate(void 0)
                        })["VisualEditing.useMemo[history]"];
                    }
                })["VisualEditing.useMemo[history]"],
                update: ({
                    "VisualEditing.useMemo[history]": (update)=>{
                        switch(update.type){
                            case "push":
                                return routerRef.current.push(removePathPrefix(update.url, basePath));
                            case "pop":
                                return routerRef.current.back();
                            case "replace":
                                return routerRef.current.replace(removePathPrefix(update.url, basePath));
                            default:
                                throw new Error("Unknown update type: ".concat(update.type));
                        }
                    }
                })["VisualEditing.useMemo[history]"]
            })
    }["VisualEditing.useMemo[history]"], [
        basePath
    ]);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisualEditing.useEffect": ()=>{
            if (navigate) navigate({
                type: "push",
                url: normalizePathTrailingSlash(addPathPrefix("".concat(pathname).concat((searchParams === null || searchParams === void 0 ? void 0 : searchParams.size) ? "?".concat(searchParams) : ""), basePath), trailingSlash)
            });
        }
    }["VisualEditing.useEffect"], [
        basePath,
        navigate,
        pathname,
        searchParams,
        trailingSlash
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["VisualEditing"], {
        plugins,
        components,
        history,
        portal: true,
        refresh: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "VisualEditing.useCallback": (payload)=>{
                if (refresh) return refresh(payload);
                const manualFastRefresh = {
                    "VisualEditing.useCallback.manualFastRefresh": ()=>{
                        console.debug("Live preview is setup, calling router.refresh() to refresh the server components without refetching cached data");
                        routerRef.current.refresh();
                        return Promise.resolve();
                    }
                }["VisualEditing.useCallback.manualFastRefresh"];
                const manualFallbackRefresh = {
                    "VisualEditing.useCallback.manualFallbackRefresh": ()=>{
                        console.debug("No loaders in live mode detected, or preview kit setup, revalidating root layout");
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$11$2e$6$2e$12_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$icons$40$3$2e$_3899177b1cf90f0c876ea99efee95abd$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$visual$2d$editing$2f$server$2d$actions$2f$data$3a$b4b6a8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateRootLayout"])();
                    }
                }["VisualEditing.useCallback.manualFallbackRefresh"];
                const mutationFallbackRefresh = {
                    "VisualEditing.useCallback.mutationFallbackRefresh": ()=>{
                        console.debug("No loaders in live mode detected, or preview kit setup, revalidating root layout");
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$2d$sanity$40$11$2e$6$2e$12_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$icons$40$3$2e$_3899177b1cf90f0c876ea99efee95abd$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$visual$2d$editing$2f$server$2d$actions$2f$data$3a$b4b6a8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateRootLayout"])();
                    }
                }["VisualEditing.useCallback.mutationFallbackRefresh"];
                switch(payload.source){
                    case "manual":
                        return payload.livePreviewEnabled ? manualFastRefresh() : manualFallbackRefresh();
                    case "mutation":
                        return payload.livePreviewEnabled ? mutationFastRefresh() : mutationFallbackRefresh();
                    default:
                        throw new Error("Unknown refresh source", {
                            cause: payload
                        });
                }
            }
        }["VisualEditing.useCallback"], [
            refresh
        ]),
        zIndex
    });
}
function mutationFastRefresh() {
    console.debug("Live preview is setup, mutation is skipped assuming its handled by the live preview");
    return false;
}
;
 //# sourceMappingURL=VisualEditing.js.map
}),
]);

//# sourceMappingURL=8efa0__pnpm_e5c0498f._.js.map