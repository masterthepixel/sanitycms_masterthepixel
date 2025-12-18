(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse
]);
function parse(path) {
    return path.split(/[[.\]]/g).filter(Boolean).map((seg)=>seg.includes("==") ? parseSegment(seg) : coerce(seg));
}
const IS_NUMERIC = /^-?\d+$/;
function unquote(str) {
    return str.replace(/^['"]/, "").replace(/['"]$/, "");
}
function parseSegment(segment) {
    const [key, value] = segment.split("==");
    if (key !== "_key") throw new Error('Currently only "_key" is supported as path segment. Found '.concat(key));
    if (typeof value > "u") throw new Error('Invalid path segment, expected `key=="value"`');
    return {
        _key: unquote(value)
    };
}
function coerce(segment) {
    return IS_NUMERIC.test(segment) ? Number(segment) : segment;
}
;
 //# sourceMappingURL=parse.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/stringify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArrayElement",
    ()=>isArrayElement,
    "isElementEqual",
    ()=>isElementEqual,
    "isEqual",
    ()=>isEqual,
    "isIndexElement",
    ()=>isIndexElement,
    "isKeyElement",
    ()=>isKeyElement,
    "isKeyedElement",
    ()=>isKeyedElement,
    "isPropertyElement",
    ()=>isPropertyElement,
    "startsWith",
    ()=>startsWith,
    "stringify",
    ()=>stringify
]);
function safeGetElementAt(array, index) {
    if (index < 0 || index >= array.length) throw new Error("Index out of bounds");
    return array[index];
}
function startsWith(parentPath, path) {
    return parentPath.length <= path.length && parentPath.every((segment, i)=>isElementEqual(segment, safeGetElementAt(path, i)));
}
function isEqual(path, otherPath) {
    return path.length === otherPath.length && path.every((segment, i)=>isElementEqual(segment, safeGetElementAt(path, i)));
}
function isElementEqual(segmentA, segmentB) {
    return isKeyElement(segmentA) && isKeyElement(segmentB) ? segmentA._key === segmentB._key : isIndexElement(segmentA) ? Number(segmentA) === Number(segmentB) : segmentA === segmentB;
}
function isKeyElement(segment) {
    return typeof (segment === null || segment === void 0 ? void 0 : segment._key) == "string";
}
function isIndexElement(segment) {
    return typeof segment == "number";
}
function isKeyedElement(element) {
    return typeof element == "object" && "_key" in element && typeof element._key == "string";
}
function isArrayElement(element) {
    return typeof element == "number" || isKeyedElement(element);
}
function isPropertyElement(element) {
    return typeof element == "string";
}
const IS_DOTTABLE = /^[a-z_$]+/;
function stringifySegment(segment, hasLeading) {
    return Array.isArray(segment) ? "[".concat(segment[0], ":").concat(segment[1] || "", "]") : typeof segment == "number" ? "[".concat(segment, "]") : isKeyedElement(segment) ? "[_key==".concat(JSON.stringify(segment._key), "]") : typeof segment == "string" && IS_DOTTABLE.test(segment) ? hasLeading ? segment : ".".concat(segment) : "['".concat(segment, "']");
}
function stringify(pathArray) {
    return pathArray.map((segment, i)=>stringifySegment(segment, i === 0)).join("");
}
;
 //# sourceMappingURL=stringify.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/decode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "decodeAll",
    ()=>decodeAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/parse.js [app-client] (ecmascript)");
;
function isCreateIfNotExistsMutation(sanityMutation) {
    return "createIfNotExists" in sanityMutation;
}
function isCreateOrReplaceMutation(sanityMutation) {
    return "createOrReplace" in sanityMutation;
}
function isCreateMutation(sanityMutation) {
    return "create" in sanityMutation;
}
function isDeleteMutation(sanityMutation) {
    return "delete" in sanityMutation;
}
function isPatchMutation(sanityMutation) {
    return "patch" in sanityMutation;
}
function isSetPatch(sanityPatch) {
    return "set" in sanityPatch;
}
function isSetIfMissingPatch(sanityPatch) {
    return "setIfMissing" in sanityPatch;
}
function isUnsetPatch(sanityPatch) {
    return "unset" in sanityPatch;
}
function isIncPatch(sanityPatch) {
    return "inc" in sanityPatch;
}
function isDecPatch(sanityPatch) {
    return "inc" in sanityPatch;
}
function isInsertPatch(sanityPatch) {
    return "insert" in sanityPatch;
}
function decodeAll(sanityMutations) {
    return sanityMutations.map(decodeMutation);
}
function decode(encodedMutation) {
    return decodeMutation(encodedMutation);
}
function decodeMutation(encodedMutation) {
    if (isCreateIfNotExistsMutation(encodedMutation)) return {
        type: "createIfNotExists",
        document: encodedMutation.createIfNotExists
    };
    if (isCreateOrReplaceMutation(encodedMutation)) return {
        type: "createOrReplace",
        document: encodedMutation.createOrReplace
    };
    if (isCreateMutation(encodedMutation)) return {
        type: "create",
        document: encodedMutation.create
    };
    if (isDeleteMutation(encodedMutation)) return {
        id: encodedMutation.delete.id,
        type: "delete"
    };
    if (isPatchMutation(encodedMutation)) return {
        type: "patch",
        id: encodedMutation.patch.id,
        patches: decodeNodePatches(encodedMutation.patch)
    };
    throw new Error("Unknown mutation: ".concat(JSON.stringify(encodedMutation)));
}
const POSITION_KEYS = [
    "before",
    "replace",
    "after"
];
function getInsertPosition(insert) {
    const positions = POSITION_KEYS.filter((k)=>k in insert);
    if (positions.length > 1) throw new Error("Insert patch is ambiguous. Should only contain one of: ".concat(POSITION_KEYS.join(", "), ", instead found ").concat(positions.join(", ")));
    return positions[0];
}
function decodeNodePatches(patch) {
    return [
        ...getSetPatches(patch),
        ...getSetIfMissingPatches(patch),
        ...getUnsetPatches(patch),
        ...getIncPatches(patch),
        ...getDecPatches(patch),
        ...getInsertPatches(patch)
    ];
}
function getSetPatches(patch) {
    return isSetPatch(patch) ? Object.keys(patch.set).map((path)=>({
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(path),
            op: {
                type: "set",
                value: patch.set[path]
            }
        })) : [];
}
function getSetIfMissingPatches(patch) {
    return isSetIfMissingPatch(patch) ? Object.keys(patch.setIfMissing).map((path)=>({
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(path),
            op: {
                type: "setIfMissing",
                value: patch.setIfMissing[path]
            }
        })) : [];
}
function getUnsetPatches(patch) {
    return isUnsetPatch(patch) ? patch.unset.map((path)=>({
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(path),
            op: {
                type: "unset"
            }
        })) : [];
}
function getIncPatches(patch) {
    return isIncPatch(patch) ? Object.keys(patch.inc).map((path)=>({
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(path),
            op: {
                type: "inc",
                amount: patch.inc[path]
            }
        })) : [];
}
function getDecPatches(patch) {
    return isDecPatch(patch) ? Object.keys(patch.dec).map((path)=>({
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(path),
            op: {
                type: "dec",
                amount: patch.dec[path]
            }
        })) : [];
}
function getInsertPatches(patch) {
    if (!isInsertPatch(patch)) return [];
    const position = getInsertPosition(patch.insert);
    if (!position) throw new Error("Insert patch missing position");
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(patch.insert[position]), referenceItem = path.pop(), op = position === "replace" ? {
        type: "insert",
        position,
        referenceItem,
        items: patch.insert.items
    } : {
        type: "insert",
        position,
        referenceItem,
        items: patch.insert.items
    };
    return [
        {
            path,
            op
        }
    ];
}
;
 //# sourceMappingURL=decode.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/encode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encode",
    ()=>encode,
    "encodeAll",
    ()=>encodeAll,
    "encodeMutation",
    ()=>encodeMutation,
    "encodeTransaction",
    ()=>encodeTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/stringify.js [app-client] (ecmascript)");
;
function encode(mutation) {
    return encodeMutation(mutation);
}
function encodeAll(mutations) {
    return mutations.flatMap(encode);
}
function encodeTransaction(transaction) {
    return {
        transactionId: transaction.id,
        mutations: encodeAll(transaction.mutations)
    };
}
function encodeMutation(mutation) {
    var _mutation_options;
    if (mutation.type === "create" || mutation.type === "createIfNotExists" || mutation.type === "createOrReplace") return {
        [mutation.type]: mutation.document
    };
    if (mutation.type === "delete") return {
        delete: {
            id: mutation.id
        }
    };
    const ifRevisionID = (_mutation_options = mutation.options) === null || _mutation_options === void 0 ? void 0 : _mutation_options.ifRevision;
    return mutation.patches.map((patch)=>({
            patch: {
                id: mutation.id,
                ...ifRevisionID && {
                    ifRevisionID
                },
                ...patchToSanity(patch)
            }
        }));
}
function patchToSanity(patch) {
    const { path, op } = patch;
    if (op.type === "unset") return {
        unset: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path)
        ]
    };
    if (op.type === "insert") return {
        insert: {
            [op.position]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
                ...path,
                op.referenceItem
            ]),
            items: op.items
        }
    };
    if (op.type === "diffMatchPatch") return {
        diffMatchPatch: {
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path)]: op.value
        }
    };
    if (op.type === "inc") return {
        inc: {
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path)]: op.amount
        }
    };
    if (op.type === "dec") return {
        dec: {
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path)]: op.amount
        }
    };
    if (op.type === "set" || op.type === "setIfMissing") return {
        [op.type]: {
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path)]: op.value
        }
    };
    if (op.type === "truncate") {
        const range = [
            op.startIndex,
            typeof op.endIndex == "number" ? op.endIndex : ""
        ].join(":");
        return {
            unset: [
                "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path), "[").concat(range, "]")
            ]
        };
    }
    if (op.type === "upsert") return {
        unset: op.items.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
                ...path,
                {
                    _key: item._key
                }
            ])),
        insert: {
            [op.position]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
                ...path,
                op.referenceItem
            ]),
            items: op.items
        }
    };
    if (op.type === "assign") return {
        set: Object.fromEntries(Object.keys(op.value).map((key)=>[
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path.concat(key)),
                op.value[key]
            ]))
    };
    if (op.type === "unassign") return {
        unset: op.keys.map((key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path.concat(key)))
    };
    if (op.type === "replace") return {
        insert: {
            replace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path.concat(op.referenceItem)),
            items: op.items
        }
    };
    if (op.type === "remove") return {
        unset: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(path.concat(op.referenceItem))
        ]
    };
    throw new Error("Unknown operation type ".concat(op.type));
}
;
 //# sourceMappingURL=encode.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/isObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(val) {
    return val !== null && typeof val == "object" && !Array.isArray(val);
}
;
 //# sourceMappingURL=isObject.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/arrify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrify",
    ()=>arrify
]);
function arrify(val) {
    return Array.isArray(val) ? val : [
        val
    ];
}
;
 //# sourceMappingURL=arrify.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactEncoder",
    ()=>index$1,
    "CompactFormatter",
    ()=>compact,
    "SanityEncoder",
    ()=>index,
    "append",
    ()=>append,
    "assign",
    ()=>assign,
    "at",
    ()=>at,
    "autoKeys",
    ()=>autoKeys,
    "create",
    ()=>create,
    "createIfNotExists",
    ()=>createIfNotExists,
    "createOrReplace",
    ()=>createOrReplace,
    "dec",
    ()=>dec,
    "del",
    ()=>del,
    "delete_",
    ()=>delete_,
    "destroy",
    ()=>destroy,
    "diffMatchPatch",
    ()=>diffMatchPatch,
    "inc",
    ()=>inc,
    "insert",
    ()=>insert,
    "insertAfter",
    ()=>insertAfter,
    "insertBefore",
    ()=>insertBefore,
    "patch",
    ()=>patch,
    "prepend",
    ()=>prepend,
    "remove",
    ()=>remove,
    "replace",
    ()=>replace,
    "set",
    ()=>set,
    "setIfMissing",
    ()=>setIfMissing,
    "truncate",
    ()=>truncate,
    "unassign",
    ()=>unassign,
    "unset",
    ()=>unset,
    "upsert",
    ()=>upsert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/decode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/encode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/isObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$arrify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_chunks-es/arrify.js [app-client] (ecmascript)");
;
;
;
;
;
;
function decode(mutations) {
    return mutations.map(decodeMutation);
}
function decodeMutation(mutation) {
    const [type] = mutation;
    if (type === "delete") {
        const [, id] = mutation;
        return {
            id,
            type
        };
    } else if (type === "create") {
        const [, document] = mutation;
        return {
            type,
            document
        };
    } else if (type === "createIfNotExists") {
        const [, document] = mutation;
        return {
            type,
            document
        };
    } else if (type === "createOrReplace") {
        const [, document] = mutation;
        return {
            type,
            document
        };
    } else if (type === "patch") return decodePatchMutation(mutation);
    throw new Error("Unrecognized mutation: ".concat(JSON.stringify(mutation)));
}
function decodePatchMutation(mutation) {
    const [, type, id, serializedPath, , revisionId] = mutation, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(serializedPath);
    if (type === "dec" || type === "inc") {
        const [, , , , [amount]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "inc",
                        amount
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "unset") return {
        type: "patch",
        id,
        patches: [
            {
                path,
                op: {
                    type: "unset"
                }
            }
        ],
        ...createOpts(revisionId)
    };
    if (type === "insert") {
        const [, , , , [position, ref, items]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "insert",
                        position,
                        items,
                        referenceItem: typeof ref == "string" ? {
                            _key: ref
                        } : ref
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "set") {
        const [, , , , [value]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "set",
                        value
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "setIfMissing") {
        const [, , , , [value]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "setIfMissing",
                        value
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "diffMatchPatch") {
        const [, , , , [value]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "diffMatchPatch",
                        value
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "truncate") {
        const [, , , , [startIndex, endIndex]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "truncate",
                        startIndex,
                        endIndex
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "assign") {
        const [, , , , [value]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "assign",
                        value
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "replace") {
        const [, , , , [ref, items]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "replace",
                        items,
                        referenceItem: decodeItemRef(ref)
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    if (type === "upsert") {
        const [, , , , [position, referenceItem, items]] = mutation;
        return {
            type: "patch",
            id,
            patches: [
                {
                    path,
                    op: {
                        type: "upsert",
                        items,
                        referenceItem: decodeItemRef(referenceItem),
                        position
                    }
                }
            ],
            ...createOpts(revisionId)
        };
    }
    throw new Error("Invalid mutation type: ".concat(type));
}
function decodeItemRef(ref) {
    return typeof ref == "string" ? {
        _key: ref
    } : ref;
}
function createOpts(revisionId) {
    return revisionId ? {
        options: {
            ifRevision: revisionId
        }
    } : null;
}
function encode(mutations) {
    return mutations.flatMap((m)=>encodeMutation$1(m));
}
function encodeItemRef$1(ref) {
    return typeof ref == "number" ? ref : ref._key;
}
function encodeMutation$1(mutation) {
    if (mutation.type === "create" || mutation.type === "createIfNotExists" || mutation.type === "createOrReplace") return [
        [
            mutation.type,
            mutation.document
        ]
    ];
    if (mutation.type === "delete") return [
        [
            "delete",
            mutation.id
        ]
    ];
    if (mutation.type === "patch") return mutation.patches.map((patch2)=>{
        var _mutation_options;
        return maybeAddRevision((_mutation_options = mutation.options) === null || _mutation_options === void 0 ? void 0 : _mutation_options.ifRevision, encodePatchMutation(mutation.id, patch2));
    });
    throw new Error("Invalid mutation type: ".concat(mutation.type));
}
function encodePatchMutation(id, patch2) {
    const { op } = patch2, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(patch2.path);
    if (op.type === "unset") return [
        "patch",
        "unset",
        id,
        path,
        []
    ];
    if (op.type === "diffMatchPatch") return [
        "patch",
        "diffMatchPatch",
        id,
        path,
        [
            op.value
        ]
    ];
    if (op.type === "inc" || op.type === "dec") return [
        "patch",
        op.type,
        id,
        path,
        [
            op.amount
        ]
    ];
    if (op.type === "set") return [
        "patch",
        op.type,
        id,
        path,
        [
            op.value
        ]
    ];
    if (op.type === "setIfMissing") return [
        "patch",
        op.type,
        id,
        path,
        [
            op.value
        ]
    ];
    if (op.type === "insert") return [
        "patch",
        "insert",
        id,
        path,
        [
            op.position,
            encodeItemRef$1(op.referenceItem),
            op.items
        ]
    ];
    if (op.type === "upsert") return [
        "patch",
        "upsert",
        id,
        path,
        [
            op.position,
            encodeItemRef$1(op.referenceItem),
            op.items
        ]
    ];
    if (op.type === "assign") return [
        "patch",
        "assign",
        id,
        path,
        [
            op.value
        ]
    ];
    if (op.type === "unassign") return [
        "patch",
        "assign",
        id,
        path,
        [
            op.keys
        ]
    ];
    if (op.type === "replace") return [
        "patch",
        "replace",
        id,
        path,
        [
            encodeItemRef$1(op.referenceItem),
            op.items
        ]
    ];
    if (op.type === "truncate") return [
        "patch",
        "truncate",
        id,
        path,
        [
            op.startIndex,
            op.endIndex
        ]
    ];
    if (op.type === "remove") return [
        "patch",
        "remove",
        id,
        path,
        [
            encodeItemRef$1(op.referenceItem)
        ]
    ];
    throw new Error("Invalid operation type: ".concat(op.type));
}
function maybeAddRevision(revision, mut) {
    const [mutType, patchType, id, path, args] = mut;
    return revision ? [
        mutType,
        patchType,
        id,
        path,
        args,
        revision
    ] : mut;
}
var index$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    decode,
    encode
}), index = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    decode: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"],
    decodeAll: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeAll"],
    encode: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"],
    encodeAll: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAll"],
    encodeMutation: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeMutation"],
    encodeTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$encode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeTransaction"]
});
function format(mutations) {
    return mutations.flatMap((m)=>encodeMutation(m)).join("\n");
}
function encodeItemRef(ref) {
    return typeof ref == "number" ? ref : ref._key;
}
function encodeMutation(mutation) {
    if (mutation.type === "create" || mutation.type === "createIfNotExists" || mutation.type === "createOrReplace") return [
        mutation.type,
        ": ",
        JSON.stringify(mutation.document)
    ].join("");
    if (mutation.type === "delete") return [
        "delete ",
        mutation.id
    ].join(": ");
    if (mutation.type === "patch") {
        var _mutation_options;
        const ifRevision = (_mutation_options = mutation.options) === null || _mutation_options === void 0 ? void 0 : _mutation_options.ifRevision;
        return [
            "patch",
            " ",
            "id=".concat(mutation.id),
            ifRevision ? " (if revision==".concat(ifRevision, ")") : "",
            ":\n",
            mutation.patches.map((nodePatch)=>"  ".concat(formatPatchMutation(nodePatch))).join("\n")
        ].join("");
    }
    throw new Error("Invalid mutation type: ".concat(mutation.type));
}
function formatPatchMutation(patch2) {
    const { op } = patch2, path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(patch2.path);
    if (op.type === "unset") return [
        path,
        "unset()"
    ].join(": ");
    if (op.type === "diffMatchPatch") return [
        path,
        "diffMatchPatch(".concat(op.value, ")")
    ].join(": ");
    if (op.type === "inc" || op.type === "dec") return [
        path,
        "".concat(op.type, "(").concat(op.amount, ")")
    ].join(": ");
    if (op.type === "set" || op.type === "setIfMissing") return [
        path,
        "".concat(op.type, "(").concat(JSON.stringify(op.value), ")")
    ].join(": ");
    if (op.type === "assign") return [
        path,
        "".concat(op.type, "(").concat(JSON.stringify(op.value), ")")
    ].join(": ");
    if (op.type === "unassign") return [
        path,
        "".concat(op.type, "(").concat(JSON.stringify(op.keys), ")")
    ].join(": ");
    if (op.type === "insert" || op.type === "upsert") return [
        path,
        "".concat(op.type, "(").concat(op.position, ", ").concat(encodeItemRef(op.referenceItem), ", ").concat(JSON.stringify(op.items), ")")
    ].join(": ");
    if (op.type === "replace") return [
        path,
        "replace(".concat(encodeItemRef(op.referenceItem), ", ").concat(JSON.stringify(op.items), ")")
    ].join(": ");
    if (op.type === "truncate") return [
        path,
        "truncate(".concat(op.startIndex, ", ").concat(op.endIndex)
    ].join(": ");
    if (op.type === "remove") return [
        path,
        "remove(".concat(encodeItemRef(op.referenceItem), ")")
    ].join(": ");
    throw new Error("Invalid operation type: ".concat(op.type));
}
var compact = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    format
});
const set = (value)=>({
        type: "set",
        value
    }), assign = (value)=>({
        type: "assign",
        value
    }), unassign = (keys)=>({
        type: "unassign",
        keys
    }), setIfMissing = (value)=>({
        type: "setIfMissing",
        value
    }), unset = ()=>({
        type: "unset"
    }), inc = function() {
    let amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    return {
        type: "inc",
        amount
    };
}, dec = function() {
    let amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    return {
        type: "dec",
        amount
    };
}, diffMatchPatch = (value)=>({
        type: "diffMatchPatch",
        value
    });
function insert(items, position, indexOrReferenceItem) {
    return {
        type: "insert",
        referenceItem: indexOrReferenceItem,
        position,
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$arrify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrify"])(items)
    };
}
function append(items) {
    return insert(items, "after", -1);
}
function prepend(items) {
    return insert(items, "before", 0);
}
function insertBefore(items, indexOrReferenceItem) {
    return insert(items, "before", indexOrReferenceItem);
}
const insertAfter = (items, indexOrReferenceItem)=>insert(items, "after", indexOrReferenceItem);
function truncate(startIndex, endIndex) {
    return {
        type: "truncate",
        startIndex,
        endIndex
    };
}
function replace(items, referenceItem) {
    return {
        type: "replace",
        referenceItem,
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$arrify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrify"])(items)
    };
}
function remove(referenceItem) {
    return {
        type: "remove",
        referenceItem
    };
}
function upsert(items, position, referenceItem) {
    return {
        type: "upsert",
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$arrify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrify"])(items),
        referenceItem,
        position
    };
}
function autoKeys(generateKey) {
    const ensureKeys = createEnsureKeys(generateKey), insert$1 = (position, referenceItem, items)=>insert(ensureKeys(items), position, referenceItem), upsert$1 = (items, position, referenceItem)=>upsert(ensureKeys(items), position, referenceItem), replace$1 = (items, position, referenceItem)=>replace(ensureKeys(items), referenceItem), insertBefore2 = (ref, items)=>insert$1("before", ref, items);
    return {
        insert: insert$1,
        upsert: upsert$1,
        replace: replace$1,
        insertBefore: insertBefore2,
        prepend: (items)=>insertBefore2(0, items),
        insertAfter: (ref, items)=>insert$1("after", ref, items),
        append: (items)=>insert$1("after", -1, items)
    };
}
function hasKey(item) {
    return "_key" in item;
}
function createEnsureKeys(generateKey) {
    return (array)=>{
        let didModify = !1;
        const withKeys = array.map((item)=>needsKey(item) ? (didModify = !0, {
                ...item,
                _key: generateKey(item)
            }) : item);
        return didModify ? withKeys : array;
    };
}
function needsKey(arrayItem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(arrayItem) && !hasKey(arrayItem);
}
function create(document) {
    return {
        type: "create",
        document
    };
}
function patch(id, patches, options) {
    return {
        type: "patch",
        id,
        patches: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$arrify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrify"])(patches),
        ...options ? {
            options
        } : {}
    };
}
function at(path, operation) {
    return {
        path: typeof path == "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_chunks$2d$es$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(path) : path,
        op: operation
    };
}
function createIfNotExists(document) {
    return {
        type: "createIfNotExists",
        document
    };
}
function createOrReplace(document) {
    return {
        type: "createOrReplace",
        document
    };
}
function delete_(id) {
    return {
        type: "delete",
        id
    };
}
const del = delete_, destroy = delete_;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_unstable_machine.browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyMutations",
    ()=>applyMutations,
    "commit",
    ()=>commit,
    "createSharedListener",
    ()=>createSharedListener,
    "documentMutatorMachine",
    ()=>documentMutatorMachine,
    "rebase",
    ()=>rebase,
    "squashDMPStrings",
    ()=>squashDMPStrings,
    "squashMutationGroups",
    ()=>squashMutationGroups,
    "toTransactions",
    ()=>toTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$diff$2d$match$2d$patch$40$3$2e$2$2e$0$2f$node_modules$2f40$sanity$2f$diff$2d$match$2d$patch$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+diff-match-patch@3.2.0/node_modules/@sanity/diff-match-patch/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$22$2f$node_modules$2f$lodash$2d$es$2f$groupBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__groupBy$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/lodash-es@4.17.22/node_modules/lodash-es/groupBy.js [app-client] (ecmascript) <export default as groupBy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$mendoza$40$3$2e$0$2e$8$2f$node_modules$2f$mendoza$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/mendoza@3.0.8/node_modules/mendoza/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/share.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$shareReplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$defer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/defer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/scheduler/asap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/xstate.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/assign-ef1b62f6.development.esm.js [app-client] (ecmascript) <export a as assign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export r as raise>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__spawnChild$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export b as spawnChild>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export s as stopChild>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/log-3eec9346.development.esm.js [app-client] (ecmascript) <export e as enqueueActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__sendParent$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/log-3eec9346.development.esm.js [app-client] (ecmascript) <export b as sendParent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
;
;
;
;
;
function getMutationDocumentId(mutation) {
    if (mutation.type === "patch") return mutation.id;
    if (mutation.type === "create") return mutation.document._id;
    if (mutation.type === "delete") return mutation.id;
    if (mutation.type === "createIfNotExists" || mutation.type === "createOrReplace") return mutation.document._id;
    throw new Error("Invalid mutation type");
}
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid = function() {
    let size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 21;
    let id = "", bytes = crypto.getRandomValues(new Uint8Array(size));
    for(; size--;)id += urlAlphabet[bytes[size] & 63];
    return id;
};
function safeGetElementAt(array, index) {
    if (index < 0 || index >= array.length) throw new Error("Index out of bounds");
    return array[index];
}
function startsWith(parentPath, path) {
    return parentPath.length <= path.length && parentPath.every((segment, i)=>isElementEqual(segment, safeGetElementAt(path, i)));
}
function isElementEqual(segmentA, segmentB) {
    return isKeyElement(segmentA) && isKeyElement(segmentB) ? segmentA._key === segmentB._key : isIndexElement(segmentA) ? Number(segmentA) === Number(segmentB) : segmentA === segmentB;
}
function isKeyElement(segment) {
    return typeof (segment === null || segment === void 0 ? void 0 : segment._key) == "string";
}
function isIndexElement(segment) {
    return typeof segment == "number";
}
function isKeyedElement(element) {
    return typeof element == "object" && "_key" in element && typeof element._key == "string";
}
function isArrayElement(element) {
    return typeof element == "number" || isKeyedElement(element);
}
function isPropertyElement(element) {
    return typeof element == "string";
}
function getAtPath(path, value) {
    if (path.length === 0) return value;
    let current = value;
    for (const head of path){
        if (isArrayElement(head)) {
            if (!Array.isArray(current)) return;
            if (isKeyedElement(head)) {
                current = current.find((item)=>item._key === head._key);
                continue;
            }
            current = current[head];
            continue;
        }
        current = current[head];
    }
    return current;
}
const IS_DOTTABLE = /^[a-z_$]+/;
function stringifySegment(segment, hasLeading) {
    return Array.isArray(segment) ? "[".concat(segment[0], ":").concat(segment[1] || "", "]") : typeof segment == "number" ? "[".concat(segment, "]") : isKeyedElement(segment) ? "[_key==".concat(JSON.stringify(segment._key), "]") : typeof segment == "string" && IS_DOTTABLE.test(segment) ? hasLeading ? segment : ".".concat(segment) : "['".concat(segment, "']");
}
function stringify(pathArray) {
    return pathArray.map((segment, i)=>stringifySegment(segment, i === 0)).join("");
}
function isObject(val) {
    return val !== null && typeof val == "object" && !Array.isArray(val);
}
function keyOf(value) {
    return value !== null && typeof value == "object" && typeof value._key == "string" && value._key || null;
}
function findTargetIndex(array, pathSegment) {
    if (typeof pathSegment == "number") return normalizeIndex(array.length, pathSegment);
    if (isKeyedElement(pathSegment)) {
        const idx = array.findIndex((value)=>keyOf(value) === pathSegment._key);
        return idx === -1 ? null : idx;
    }
    throw new Error("Expected path segment to be addressing a single array item either by numeric index or by '_key'. Instead saw ".concat(JSON.stringify(pathSegment)));
}
function getTargetIdx(position, index) {
    return position === "before" ? index : index + 1;
}
function normalizeIndex(length, index) {
    if (length === 0 && (index === -1 || index === 0)) return 0;
    const normalized = index < 0 ? length + index : index;
    return normalized >= length || normalized < 0 ? null : normalized;
}
function splice(arr, start, deleteCount, items) {
    const copy = arr.slice();
    return copy.splice(start, deleteCount, ...items || []), copy;
}
function insert(op, currentValue) {
    if (!Array.isArray(currentValue)) throw new TypeError('Cannot apply "insert()" on non-array value');
    const index = findTargetIndex(currentValue, op.referenceItem);
    if (index === null) throw new Error("Found no matching array element to insert ".concat(op.position));
    return currentValue.length === 0 ? op.items : splice(currentValue, getTargetIdx(op.position, index), 0, op.items);
}
function upsert(op, currentValue) {
    if (!Array.isArray(currentValue)) throw new TypeError('Cannot apply "upsert()" on non-array value');
    if (op.items.length === 0) return currentValue;
    const replaceItemsMap = [], insertItems = [];
    if (op.items.forEach((itemToBeUpserted, i)=>{
        const existingIndex = currentValue.findIndex((existingItem)=>(existingItem === null || existingItem === void 0 ? void 0 : existingItem._key) === itemToBeUpserted._key);
        existingIndex >= 0 ? replaceItemsMap[existingIndex] = i : insertItems.push(itemToBeUpserted);
    }), replaceItemsMap.length === 0 && insertItems.length == 0) return currentValue;
    const next = [
        ...currentValue
    ];
    for (const i of replaceItemsMap)next[i] = op.items[replaceItemsMap[i]];
    return insert({
        type: "insert",
        items: insertItems,
        referenceItem: op.referenceItem,
        position: op.position
    }, next);
}
function replace(op, currentValue) {
    if (!Array.isArray(currentValue)) throw new TypeError('Cannot apply "replace()" on non-array value');
    const index = findTargetIndex(currentValue, op.referenceItem);
    if (index === null) throw new Error("Found no matching array element to replace");
    return splice(currentValue, index, op.items.length, op.items);
}
function remove(op, currentValue) {
    if (!Array.isArray(currentValue)) throw new TypeError('Cannot apply "remove()" on non-array value');
    const index = findTargetIndex(currentValue, op.referenceItem);
    if (index === null) throw new Error("Found no matching array element to replace");
    return splice(currentValue, index, 1, []);
}
function truncate(op, currentValue) {
    if (!Array.isArray(currentValue)) throw new TypeError('Cannot apply "truncate()" on non-array value');
    return typeof op.endIndex == "number" ? currentValue.slice(0, op.startIndex).concat(currentValue.slice(op.endIndex)) : currentValue.slice(0, op.startIndex);
}
function set(op, currentValue) {
    return op.value;
}
function setIfMissing(op, currentValue) {
    return currentValue !== null && currentValue !== void 0 ? currentValue : op.value;
}
function unset(op) {}
function inc(op, currentValue) {
    if (typeof currentValue != "number") throw new TypeError('Cannot apply "inc()" on non-numeric value');
    return currentValue + op.amount;
}
function dec(op, currentValue) {
    if (typeof currentValue != "number") throw new TypeError('Cannot apply "dec()" on non-numeric value');
    return currentValue - op.amount;
}
const hasOwn = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
function isEmpty(v) {
    for(const key in v)if (hasOwn(v, key)) return !1;
    return !0;
}
function omit(val, props) {
    const copy = {
        ...val
    };
    for (const prop of props)delete copy[prop];
    return copy;
}
function unassign(op, currentValue) {
    if (!isObject(currentValue)) throw new TypeError('Cannot apply "unassign()" on non-object value');
    return op.keys.length === 0 ? currentValue : omit(currentValue, op.keys);
}
function assign(op, currentValue) {
    if (!isObject(currentValue)) throw new TypeError('Cannot apply "assign()" on non-object value');
    return isEmpty(op.value) ? currentValue : {
        ...currentValue,
        ...op.value
    };
}
function diffMatchPatch(op, currentValue) {
    if (typeof currentValue != "string") throw new TypeError('Cannot apply "diffMatchPatch()" on non-string value');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$diff$2d$match$2d$patch$40$3$2e$2$2e$0$2f$node_modules$2f40$sanity$2f$diff$2d$match$2d$patch$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPatches"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$diff$2d$match$2d$patch$40$3$2e$2$2e$0$2f$node_modules$2f40$sanity$2f$diff$2d$match$2d$patch$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePatch"])(op.value), currentValue)[0];
}
var operations = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    assign,
    dec,
    diffMatchPatch,
    inc,
    insert,
    remove,
    replace,
    set,
    setIfMissing,
    truncate,
    unassign,
    unset,
    upsert
});
function applyOp(op, currentValue) {
    if (!(op.type in operations)) throw new Error('Invalid operation type: "'.concat(op.type, '"'));
    return operations[op.type](op, currentValue);
}
function applyPatches(patches, document) {
    return patches.reduce((prev, patch2)=>applyNodePatch(patch2, prev), document);
}
function applyNodePatch(patch2, document) {
    return applyAtPath(patch2.path, patch2.op, document);
}
function applyAtPath(path, op, value) {
    if (!isNonEmptyArray(path)) return applyOp(op, value);
    const [head, ...tail] = path;
    if (isArrayElement(head) && Array.isArray(value)) return applyInArray(head, tail, op, value);
    if (isPropertyElement(head) && isObject(value)) return applyInObject(head, tail, op, value);
    throw new Error('Cannot apply operation of type "'.concat(op.type, '" to path ').concat(stringify(path), " on ").concat(typeof value, " value"));
}
function applyInObject(head, tail, op, object) {
    const current = object[head];
    if (current === void 0 && tail.length > 0) return object;
    const patchedValue = applyAtPath(tail, op, current);
    return patchedValue === current ? object : {
        ...object,
        [head]: patchedValue
    };
}
function applyInArray(head, tail, op, value) {
    const index = findTargetIndex(value, head);
    if (index === null || index === -1) return value;
    const current = value[index], patchedItem = applyAtPath(tail, op, current);
    return patchedItem === current ? value : splice(value, index, 1, [
        patchedItem
    ]);
}
function isNonEmptyArray(a) {
    return a.length > 0;
}
function applyPatchMutation(mutation, document) {
    var _mutation_options;
    if (((_mutation_options = mutation.options) === null || _mutation_options === void 0 ? void 0 : _mutation_options.ifRevision) && document._rev !== mutation.options.ifRevision) throw new Error("Revision mismatch");
    if (mutation.id !== document._id) throw new Error('Document id mismatch. Refusing to apply mutation for document with id="'.concat(mutation.id, '" on the given document with id="').concat(document._id, '"'));
    return applyPatches(mutation.patches, document);
}
function hasId(doc) {
    return "_id" in doc;
}
function assignId(doc, generateId) {
    return hasId(doc) ? doc : {
        ...doc,
        _id: generateId()
    };
}
function applyAll(current, mutation) {
    return mutation.reduce((doc, m)=>{
        const res = applyDocumentMutation(doc, m);
        if (res.status === "error") throw new Error(res.message);
        return res.status === "noop" ? doc : res.after;
    }, current);
}
function applyDocumentMutation(document, mutation) {
    if (mutation.type === "create") return create(document, mutation);
    if (mutation.type === "createIfNotExists") return createIfNotExists(document, mutation);
    if (mutation.type === "delete") return del(document, mutation);
    if (mutation.type === "createOrReplace") return createOrReplace(document, mutation);
    if (mutation.type === "patch") return patch(document, mutation);
    throw new Error("Invalid mutation type: ".concat(mutation.type));
}
function create(document, mutation) {
    if (document) return {
        status: "error",
        message: "Document already exist"
    };
    const result = assignId(mutation.document, nanoid);
    return {
        status: "created",
        id: result._id,
        after: result
    };
}
function createIfNotExists(document, mutation) {
    return hasId(mutation.document) ? document ? {
        status: "noop"
    } : {
        status: "created",
        id: mutation.document._id,
        after: mutation.document
    } : {
        status: "error",
        message: "Cannot createIfNotExists on document without _id"
    };
}
function createOrReplace(document, mutation) {
    return hasId(mutation.document) ? document ? {
        status: "updated",
        id: mutation.document._id,
        before: document,
        after: mutation.document
    } : {
        status: "created",
        id: mutation.document._id,
        after: mutation.document
    } : {
        status: "error",
        message: "Cannot createIfNotExists on document without _id"
    };
}
function del(document, mutation) {
    return document ? mutation.id !== document._id ? {
        status: "error",
        message: "Delete mutation targeted wrong document"
    } : {
        status: "deleted",
        id: mutation.id,
        before: document,
        after: void 0
    } : {
        status: "noop"
    };
}
function patch(document, mutation) {
    if (!document) return {
        status: "error",
        message: "Cannot apply patch on nonexistent document"
    };
    const next = applyPatchMutation(mutation, document);
    return document === next ? {
        status: "noop"
    } : {
        status: "updated",
        id: mutation.id,
        before: document,
        after: next
    };
}
function applyMutations(mutations, dataset) {
    const updatedDocs = /* @__PURE__ */ Object.create(null);
    for (const mutation of mutations){
        var _updatedDocs_documentId;
        const documentId = getMutationDocumentId(mutation);
        if (!documentId) throw new Error("Unable to get document id from mutation");
        const before = ((_updatedDocs_documentId = updatedDocs[documentId]) === null || _updatedDocs_documentId === void 0 ? void 0 : _updatedDocs_documentId.after) || dataset.get(documentId), res = applyDocumentMutation(before, mutation);
        if (res.status === "error") throw new Error(res.message);
        res.status !== "noop" && (res.status === "updated" || res.status === "created" || res.status === "deleted") && (documentId in updatedDocs || (updatedDocs[documentId] = {
            before,
            after: void 0,
            muts: []
        }), updatedDocs[documentId].after = res.after);
    }
    return Object.entries(updatedDocs).map(// eslint-disable-next-line no-shadow
    (param)=>{
        let [id, { before, after, muts }] = param;
        return {
            id,
            status: after ? before ? "updated" : "created" : "deleted",
            mutations: muts,
            before,
            after
        };
    });
}
function commit(results, dataset) {
    results.forEach((result)=>{
        (result.status === "created" || result.status === "updated") && dataset.set(result.id, result.after), result.status === "deleted" && dataset.delete(result.id);
    });
}
function takeUntilRight(arr, predicate, opts) {
    const result = [];
    for (const item of arr.slice().reverse()){
        if (predicate(item)) return result;
        result.push(item);
    }
    return result.reverse();
}
function isEqualPath(p1, p2) {
    return stringify(p1) === stringify(p2);
}
function supersedes(later, earlier) {
    return (earlier.type === "set" || earlier.type === "unset") && (later.type === "set" || later.type === "unset");
}
function squashNodePatches(patches) {
    return compactSetIfMissingPatches(compactSetPatches(compactUnsetPatches(patches)));
}
function compactUnsetPatches(patches) {
    return patches.reduce((earlierPatches, laterPatch)=>{
        if (laterPatch.op.type !== "unset") return earlierPatches.push(laterPatch), earlierPatches;
        const unaffected = earlierPatches.filter((earlierPatch)=>!startsWith(laterPatch.path, earlierPatch.path));
        return unaffected.push(laterPatch), unaffected;
    }, []);
}
function compactSetPatches(patches) {
    return patches.reduceRight((laterPatches, earlierPatch)=>(laterPatches.find((later)=>supersedes(later.op, earlierPatch.op) && isEqualPath(later.path, earlierPatch.path)) || laterPatches.unshift(earlierPatch), laterPatches), []);
}
function compactSetIfMissingPatches(patches) {
    return patches.reduce((previousPatches, laterPatch)=>laterPatch.op.type !== "setIfMissing" ? (previousPatches.push(laterPatch), previousPatches) : (takeUntilRight(previousPatches, (patch2)=>patch2.op.type === "unset").find((precedingPatch)=>precedingPatch.op.type === "setIfMissing" && isEqualPath(precedingPatch.path, laterPatch.path)) || previousPatches.push(laterPatch), previousPatches), []);
}
function compactDMPSetPatches(base, patches) {
    let edge = base;
    return patches.reduce((earlierPatches, laterPatch)=>{
        const before = edge;
        if (edge = applyNodePatch(laterPatch, edge), laterPatch.op.type === "set" && typeof laterPatch.op.value == "string") {
            const current = getAtPath(laterPatch.path, before);
            if (typeof current == "string") {
                const replaced = {
                    ...laterPatch,
                    op: {
                        type: "diffMatchPatch",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$diff$2d$match$2d$patch$40$3$2e$2$2e$0$2f$node_modules$2f40$sanity$2f$diff$2d$match$2d$patch$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPatches"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$diff$2d$match$2d$patch$40$3$2e$2$2e$0$2f$node_modules$2f40$sanity$2f$diff$2d$match$2d$patch$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makePatches"])(current, laterPatch.op.value))
                    }
                };
                return earlierPatches.flatMap((ep)=>isEqualPath(ep.path, laterPatch.path) && ep.op.type === "diffMatchPatch" ? [] : ep).concat(replaced);
            }
        }
        return earlierPatches.push(laterPatch), earlierPatches;
    }, []);
}
function squashDMPStrings(remote, mutationGroups) {
    return mutationGroups.map((mutationGroup)=>({
            ...mutationGroup,
            mutations: dmpIfyMutations(remote, mutationGroup.mutations)
        }));
}
function dmpIfyMutations(store, mutations) {
    return mutations.map((mutation, i)=>mutation.type === "patch" ? dmpifyPatchMutation(store.get(mutation.id), mutation) : mutation);
}
function dmpifyPatchMutation(base, mutation) {
    return base ? {
        ...mutation,
        patches: compactDMPSetPatches(base, mutation.patches)
    } : mutation;
}
function mergeMutationGroups(mutationGroups) {
    return chunkWhile(mutationGroups, (group)=>!group.transaction).flatMap((chunk)=>({
            ...chunk[0],
            mutations: chunk.flatMap((c)=>c.mutations)
        }));
}
function chunkWhile(arr, predicate) {
    const res = [];
    let currentChunk = [];
    return arr.forEach((item)=>{
        predicate(item) ? currentChunk.push(item) : (currentChunk.length > 0 && res.push(currentChunk), currentChunk = [], res.push([
            item
        ]));
    }), currentChunk.length > 0 && res.push(currentChunk), res;
}
function squashMutationGroups(staged) {
    return mergeMutationGroups(staged).map((transaction)=>({
            ...transaction,
            mutations: squashMutations(transaction.mutations)
        })).map((transaction)=>({
            ...transaction,
            mutations: transaction.mutations.map((mutation)=>mutation.type !== "patch" ? mutation : {
                    ...mutation,
                    patches: squashNodePatches(mutation.patches)
                })
        }));
}
function squashMutations(mutations) {
    const byDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$lodash$2d$es$40$4$2e$17$2e$22$2f$node_modules$2f$lodash$2d$es$2f$groupBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__groupBy$3e$__["groupBy"])(mutations, getMutationDocumentId);
    return Object.values(byDocument).flatMap((documentMutations)=>squashCreateIfNotExists(squashDelete(documentMutations)).flat().reduce((acc, docMutation)=>{
            const prev = acc[acc.length - 1];
            return (!prev || prev.type === "patch") && docMutation.type === "patch" ? acc.slice(0, -1).concat({
                ...docMutation,
                patches: ((prev === null || prev === void 0 ? void 0 : prev.patches) || []).concat(docMutation.patches)
            }) : acc.concat(docMutation);
        }, []));
}
function squashCreateIfNotExists(mutations) {
    return mutations.length === 0 ? mutations : mutations.reduce((previousMuts, laterMut)=>laterMut.type !== "createIfNotExists" ? (previousMuts.push(laterMut), previousMuts) : (takeUntilRight(previousMuts, (m)=>m.type === "delete").find((precedingPatch)=>precedingPatch.type === "createIfNotExists") || previousMuts.push(laterMut), previousMuts), []);
}
function squashDelete(mutations) {
    return mutations.length === 0 ? mutations : mutations.reduce((previousMuts, laterMut)=>laterMut.type === "delete" ? [
            laterMut
        ] : (previousMuts.push(laterMut), previousMuts), []);
}
function rebase(documentId, oldBase, newBase, stagedMutations) {
    let edge = oldBase;
    const dmpified = stagedMutations.map((transaction)=>{
        const mutations = transaction.mutations.flatMap((mut)=>{
            if (getMutationDocumentId(mut) !== documentId) return [];
            const before = edge;
            return edge = applyAll(edge, [
                mut
            ]), !before || mut.type !== "patch" ? mut : {
                type: "dmpified",
                mutation: {
                    ...mut,
                    // Todo: make compactDMPSetPatches return pairs of patches that was dmpified with their
                    //  original as dmpPatches and original is not 1:1 (e..g some of the original may not be dmpified)
                    dmpPatches: compactDMPSetPatches(before, mut.patches),
                    original: mut.patches
                }
            };
        });
        return {
            ...transaction,
            mutations
        };
    });
    let newBaseWithDMPForOldBaseApplied = newBase;
    return dmpified.map((transaction)=>{
        const applied = [];
        return transaction.mutations.forEach((mut)=>{
            if (mut.type === "dmpified") try {
                newBaseWithDMPForOldBaseApplied = applyPatches(mut.mutation.dmpPatches, newBaseWithDMPForOldBaseApplied), applied.push(mut);
            } catch (e) {
                console.warn("Failed to apply dmp patch, falling back to original");
                try {
                    newBaseWithDMPForOldBaseApplied = applyPatches(mut.mutation.original, newBaseWithDMPForOldBaseApplied), applied.push(mut);
                } catch (second) {
                    throw new Error('Failed to apply patch for document "'.concat(documentId, '": ').concat(second.message));
                }
            }
            else newBaseWithDMPForOldBaseApplied = applyAll(newBaseWithDMPForOldBaseApplied, [
                mut
            ]);
        });
    }), [
        stagedMutations.map((transaction)=>({
                ...transaction,
                mutations: transaction.mutations.map((mut)=>mut.type !== "patch" || getMutationDocumentId(mut) !== documentId ? mut : {
                        ...mut,
                        patches: mut.patches.map((patch2)=>patch2.op.type !== "set" ? patch2 : {
                                ...patch2,
                                op: {
                                    ...patch2.op,
                                    value: getAtPath(patch2.path, newBaseWithDMPForOldBaseApplied)
                                }
                            })
                    })
            })),
        newBaseWithDMPForOldBaseApplied
    ];
}
function toTransactions(groups) {
    return groups.map((group)=>group.transaction && group.id !== void 0 ? {
            id: group.id,
            mutations: group.mutations
        } : {
            mutations: group.mutations
        });
}
function encode(mutation) {
    return encodeMutation(mutation);
}
function encodeAll(mutations) {
    return mutations.flatMap(encode);
}
function encodeTransaction(transaction) {
    return {
        transactionId: transaction.id,
        mutations: encodeAll(transaction.mutations)
    };
}
function encodeMutation(mutation) {
    var _mutation_options;
    if (mutation.type === "create" || mutation.type === "createIfNotExists" || mutation.type === "createOrReplace") return {
        [mutation.type]: mutation.document
    };
    if (mutation.type === "delete") return {
        delete: {
            id: mutation.id
        }
    };
    const ifRevisionID = (_mutation_options = mutation.options) === null || _mutation_options === void 0 ? void 0 : _mutation_options.ifRevision;
    return mutation.patches.map((patch2)=>({
            patch: {
                id: mutation.id,
                ...ifRevisionID && {
                    ifRevisionID
                },
                ...patchToSanity(patch2)
            }
        }));
}
function patchToSanity(patch2) {
    const { path, op } = patch2;
    if (op.type === "unset") return {
        unset: [
            stringify(path)
        ]
    };
    if (op.type === "insert") return {
        insert: {
            [op.position]: stringify([
                ...path,
                op.referenceItem
            ]),
            items: op.items
        }
    };
    if (op.type === "diffMatchPatch") return {
        diffMatchPatch: {
            [stringify(path)]: op.value
        }
    };
    if (op.type === "inc") return {
        inc: {
            [stringify(path)]: op.amount
        }
    };
    if (op.type === "dec") return {
        dec: {
            [stringify(path)]: op.amount
        }
    };
    if (op.type === "set" || op.type === "setIfMissing") return {
        [op.type]: {
            [stringify(path)]: op.value
        }
    };
    if (op.type === "truncate") {
        const range = [
            op.startIndex,
            typeof op.endIndex == "number" ? op.endIndex : ""
        ].join(":");
        return {
            unset: [
                "".concat(stringify(path), "[").concat(range, "]")
            ]
        };
    }
    if (op.type === "upsert") return {
        unset: op.items.map((item)=>stringify([
                ...path,
                {
                    _key: item._key
                }
            ])),
        insert: {
            [op.position]: stringify([
                ...path,
                op.referenceItem
            ]),
            items: op.items
        }
    };
    if (op.type === "assign") return {
        set: Object.fromEntries(Object.keys(op.value).map((key)=>[
                stringify(path.concat(key)),
                op.value[key]
            ]))
    };
    if (op.type === "unassign") return {
        unset: op.keys.map((key)=>stringify(path.concat(key)))
    };
    if (op.type === "replace") return {
        insert: {
            replace: stringify(path.concat(op.referenceItem)),
            items: op.items
        }
    };
    if (op.type === "remove") return {
        unset: [
            stringify(path.concat(op.referenceItem))
        ]
    };
    throw new Error("Unknown operation type ".concat(op.type));
}
function createSharedListener(client) {
    const allEvents$ = client.listen('*[!(_id in path("_.**"))]', {}, {
        events: [
            "welcome",
            "mutation",
            "reconnect"
        ],
        includeResult: !1,
        includePreviousRevision: !1,
        visibility: "transaction",
        effectFormat: "mendoza",
        includeMutations: !1
    }).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["share"])({
        resetOnRefCountZero: !0
    })), reconnect = allEvents$.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((event)=>event.type === "reconnect")), welcome = allEvents$.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((event)=>event.type === "welcome")), mutations = allEvents$.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((event)=>event.type === "mutation")), replayWelcome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(welcome, reconnect).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$shareReplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareReplay"])({
        bufferSize: 1,
        refCount: !0
    })).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((latestConnectionEvent)=>latestConnectionEvent.type === "welcome"));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(replayWelcome, mutations, reconnect);
}
const documentMutatorMachine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
    types: {},
    actions: {
        "assign error to context": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            error: (param)=>{
                let { event } = param;
                return event;
            }
        }),
        "clear error from context": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            error: void 0
        }),
        "connect to server-sent events": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__r__as__raise$3e$__["raise"])({
            type: "connect"
        }),
        "listen to server-sent events": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__spawnChild$3e$__["spawnChild"])("server-sent events", {
            id: "listener",
            input: (param)=>{
                let { context } = param;
                return {
                    listener: context.sharedListener || createSharedListener(context.client),
                    id: context.id
                };
            }
        }),
        "stop listening to server-sent events": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__["stopChild"])("listener"),
        "buffer remote mutation events": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            mutationEvents: (param)=>{
                let { event, context } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutation"), [
                    ...context.mutationEvents,
                    event
                ];
            }
        }),
        "restore stashed changes": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            stagedChanges: (param)=>{
                let { event, context } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "xstate.done.actor.submitTransactions"), context.stashedChanges;
            },
            stashedChanges: []
        }),
        "rebase fetched remote snapshot": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
            let { enqueue } = param;
            enqueue.assign((param)=>{
                let { event, context } = param;
                var _patch2_effects;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "xstate.done.actor.getDocument");
                const previousRemote = context.remote;
                let nextRemote = event.output, seenCurrentRev = !1;
                for (const patch2 of context.mutationEvents)!((_patch2_effects = patch2.effects) === null || _patch2_effects === void 0 ? void 0 : _patch2_effects.apply) || !patch2.previousRev && patch2.transition !== "appear" || (!seenCurrentRev && patch2.previousRev === (nextRemote === null || nextRemote === void 0 ? void 0 : nextRemote._rev) && (seenCurrentRev = !0), seenCurrentRev && (nextRemote = applyMendozaPatch(nextRemote, patch2.effects.apply, patch2.resultRev)));
                context.cache && // If the shared cache don't have the document already we can just set it
                (!context.cache.has(context.id) || // But when it's in the cache, make sure it's necessary to update it
                context.cache.get(context.id)._rev !== (nextRemote === null || nextRemote === void 0 ? void 0 : nextRemote._rev)) && context.cache.set(context.id, nextRemote);
                const [stagedChanges, local] = rebase(context.id, // It's annoying to convert between null and undefined, reach consensus
                previousRemote === null ? void 0 : previousRemote, nextRemote === null ? void 0 : nextRemote, context.stagedChanges);
                return {
                    remote: nextRemote,
                    local,
                    stagedChanges,
                    // Since the snapshot handler applies all the patches they are no longer needed, allow GC
                    mutationEvents: []
                };
            }), enqueue.sendParent((param)=>{
                let { context } = param;
                return {
                    type: "rebased.remote",
                    id: context.id,
                    document: context.remote
                };
            });
        }),
        "apply mendoza patch": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])((param)=>{
            let { event, context } = param;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutation");
            const previousRemote = context.remote;
            if (event.transactionId === (previousRemote === null || previousRemote === void 0 ? void 0 : previousRemote._rev)) return {};
            const nextRemote = applyMendozaPatch(previousRemote, event.effects.apply, event.resultRev);
            context.cache && // If the shared cache don't have the document already we can just set it
            (!context.cache.has(context.id) || // But when it's in the cache, make sure it's necessary to update it
            context.cache.get(context.id)._rev !== (nextRemote === null || nextRemote === void 0 ? void 0 : nextRemote._rev)) && context.cache.set(context.id, nextRemote);
            const [stagedChanges, local] = rebase(context.id, // It's annoying to convert between null and undefined, reach consensus
            previousRemote === null ? void 0 : previousRemote, nextRemote === null ? void 0 : nextRemote, context.stagedChanges);
            return {
                remote: nextRemote,
                local,
                stagedChanges
            };
        }),
        "increment fetch attempts": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            fetchRemoteSnapshotAttempts: (param)=>{
                let { context } = param;
                return context.fetchRemoteSnapshotAttempts + 1;
            }
        }),
        "reset fetch attempts": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            fetchRemoteSnapshotAttempts: 0
        }),
        "increment submit attempts": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            submitTransactionsAttempts: (param)=>{
                let { context } = param;
                return context.submitTransactionsAttempts + 1;
            }
        }),
        "reset submit attempts": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            submitTransactionsAttempts: 0
        }),
        "stage mutation": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            stagedChanges: (param)=>{
                let { event, context } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutate"), [
                    ...context.stagedChanges,
                    {
                        transaction: !1,
                        mutations: event.mutations
                    }
                ];
            }
        }),
        "stash mutation": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            stashedChanges: (param)=>{
                let { event, context } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutate"), [
                    ...context.stashedChanges,
                    {
                        transaction: !1,
                        mutations: event.mutations
                    }
                ];
            }
        }),
        "rebase local snapshot": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
            let { enqueue } = param;
            enqueue.assign({
                local: (param)=>{
                    let { event, context } = param;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutate");
                    const localDataset = /* @__PURE__ */ new Map();
                    context.local && localDataset.set(context.id, context.local);
                    const results = applyMutations(event.mutations, localDataset);
                    return commit(results, localDataset), localDataset.get(context.id);
                }
            }), enqueue.sendParent((param)=>{
                let { context } = param;
                return {
                    type: "rebased.local",
                    id: context.id,
                    document: context.local
                };
            });
        }),
        "send pristine event to parent": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__sendParent$3e$__["sendParent"])((param)=>{
            let { context } = param;
            return {
                type: "pristine",
                id: context.id
            };
        }),
        "send sync event to parent": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__sendParent$3e$__["sendParent"])((param)=>{
            let { context } = param;
            return {
                type: "sync",
                id: context.id,
                document: context.remote
            };
        }),
        "send mutation event to parent": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__sendParent$3e$__["sendParent"])((param)=>{
            let { context, event } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutation"), {
                type: "mutation",
                id: context.id,
                previousRev: event.previousRev,
                resultRev: event.resultRev,
                effects: event.effects
            };
        })
    },
    actors: {
        "server-sent events": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEventObservable"])((param)=>{
            let { input } = param;
            const { listener, id } = input;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$defer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defer"])(()=>listener).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])((event)=>event.type === "welcome" || event.type === "reconnect" || event.type === "mutation" && event.documentId === id), // This is necessary to avoid sync emitted events from `shareReplay` from happening before the actor is ready to receive them
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeOn"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asapScheduler"]));
        }),
        "fetch remote snapshot": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPromise"])(async (param)=>{
            let { input, signal } = param;
            const { client, id } = input;
            return await client.getDocument(id, {
                signal
            }).catch((e)=>{
                if (!(e instanceof Error && e.name === "AbortError")) throw e;
            });
        }),
        "submit mutations as transactions": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPromise"])(async (param)=>{
            let { input, signal } = param;
            const { client, transactions } = input;
            for (const transaction of transactions){
                if (signal.aborted) return;
                await client.dataRequest("mutate", encodeTransaction(transaction), {
                    visibility: "async",
                    returnDocuments: !1,
                    signal
                }).catch((e)=>{
                    if (!(e instanceof Error && e.name === "AbortError")) throw e;
                });
            }
        })
    },
    delays: {
        // Exponential backoff delay function
        fetchRemoteSnapshotTimeout: (param)=>{
            let { context } = param;
            return Math.pow(2, context.fetchRemoteSnapshotAttempts) * 1e3;
        },
        submitTransactionsTimeout: (param)=>{
            let { context } = param;
            return Math.pow(2, context.submitTransactionsAttempts) * 1e3;
        }
    }
}).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QQPYGMCuBbMA7ALgLRYb4CG+KATgMQnn5gDaADALqKgAOKsAlvj4pcnEAA9EADhYAWAHQA2GSwUBmAKwBOaQEZJkhQBoQAT0Q6ATAF8rx1JhwFipCtTkQ+sNMNxg0jCBpvXF9-Vg4kEB5+QWFRCQQLFhY5PQB2dRU1SQsdGSVjMwRlHTkWNM00nR1VKryKmzt0bDwielcqOWDQwVwoGgB3MAAbbxxw0WiBIRFIhPUKuQ1NVU0tTU0WFdVCxAt1dTlNhX2WdRltGUk061sQexandspO7r9e-qo-H3eJyKnYrNQPNJJollpVutNttdghVCo5MoTgoMpo8jIkqpGvdmo42i4Xl0fv4+H0aGAqFRqH9uLxpnE5ogFrCLFd5CtNBYFJkdOpuaosXcHnjnAw3G9-AAxMh8YYYL5BYn4GlROmA+KIFEs1R6ORpZYWHIXGR6bHC1qijpyL4Sj6DEZjZjsSZqmYaxK1ORcvlc-ZqSoyNKwnRpGTyK4WDK5BQ6BQ5BRm3EW55uG1K0n9ClUqgqgFuxketJe7nIv2rUNB0x7LmSL2qGMsSySevcmSJhzJgnipWQOgEma510M4HmcqHZYyWqaOMqTQyWGh0osVSGiwC5uGyftx74sWvHuBNMhX7O-5DoHiPae72lvnlwPBydFlRVS7qPIl7cilP74-+SByMMKBkB4ZKoL4cikgAbigADWYByDA+AACJJgQg4xPmI7FHkZQrKGsjqKcCiaMG9YpJOxySBiCiyPoX6dnuRJ-gEgHAaBmaUm4XDDBQABm1BYIhYAoWhyqnrSmHDpeCAKCicjUbU6g6nkFichYsJrLWVxaPsk7KdICZCmJlqEraAFASBvbPAOEmqlJF4JJURbVDcy4Yvk1GVkUsabApMjKZGqjNg2kgMU8Xa-j0FnsQBXBUJ4vRgH2DBOhEkn0o5TLKV6y6WDG6lhkYVYIDoKzyBkeR8pUDZqOFu5WuZEBsVZzUeFQ+AmDQsAYAARlgAgYZl7o6I2tYLJINSSO+3JaMGlQpGkhFhryo2jW2xkdhFTFNS1EAAT1-UCHa4EIdBcEIYdA34AAKlQZC4LAZAksIsBDeqBbrdpym8iuByxlcLK5BYqQLBUZyTcFvL1aZ3YsTFrVyFdx0ZuSXGdDx-GCUjfXXXdD1PS9j3vVhMnrWCFRxtNaRLdcfIsiwuS5fkgZaOUlhpDDP7MdFzWWftzXI-gdrPGlLoOSNyiHFstRySisjcgzahyFoUYBbRsac5tO6w1F7wIwLONHfg0qyvKyVfPgVAmCT0kJGt41pJD02xgcpElUkcZ6rI+q5JcckbU0W0NWZB57QduMCKbcoKmIsCpXIZB8YwVAABRC-jj3PYCsA3XwOAoKQACUNDmttjVh-zEfG9H5u21lpVjSrTtTTNbsstUYJJAFWgA37XORTz+t8+xtcKpb1v1+6KJFopGQqRi6nBlstYcqNK5riusYDztlejzKMfJXHCdJynqd8SJaAABYAEpgFgKCMAAyrgZBcLAV+P3nBfF6XJnc7tfmY8xZnglgWGe-klILzUhYDSJVRpnCONNOcWxWRKBRDYO4uAUD7XgJEMuIdqDi2GgWQgOhgxMyRKyFc8IuQkXUDvK0HgvAHmIR9bCD4SoeSWCoLkoZpxrmXIw0OLEMxsNJgkSc418KhnrHyG4oZYTcPhMifhJx4SCiDjrABSpgHiLtogAUhwW77DRIGXkk55wexKCrJQsg1jBTnPsYRqZviiL6PohuORgyhhBhGKMsZYzxhcXrf8EBPHulUJOPCtRlABWIu7IoORVBIIhMpNYGJyghKHmEvaYjQEkOwhkxQrJtBES0JDOBPlkgKD1JYZSjZORyTXNkwBsVwkFPYTJVYS58JxPKbOYM0gUj7FjGcEMOpciaJxMHXWOTWJV2avFRKpIwARILJRGJBF4mZBIkDE0KtIxLSSDkDYGhWl70Ru1Tq6zsLURBkoLyWRmz8PmlUZmcY1zXDKdMghcy2mIyFh8W5ZN4RFmOFyKaZwiLeT2GVJcy5pBrguCiMK2tvyDwBYbIWejOkSMQBkeQORJq0RNCUDIDNondxuGpPQmRqIXPhiPECuKMpdMkbILZ-SEnLxyjqOJMZsj1jRTYIAA */ id: "document-mutator",
    context: (param)=>{
        let { input } = param;
        return {
            client: input.client.withConfig({
                allowReconfigure: !1
            }),
            sharedListener: input.sharedListener,
            id: input.id,
            remote: void 0,
            local: void 0,
            mutationEvents: [],
            stagedChanges: [],
            stashedChanges: [],
            error: void 0,
            fetchRemoteSnapshotAttempts: 0,
            submitTransactionsAttempts: 0,
            cache: input.cache
        };
    },
    // Auto start the connection by default
    entry: [
        "connect to server-sent events"
    ],
    on: {
        mutate: {
            actions: [
                "rebase local snapshot",
                "stage mutation"
            ]
        }
    },
    initial: "disconnected",
    states: {
        disconnected: {
            on: {
                connect: {
                    target: "connecting",
                    actions: [
                        "listen to server-sent events"
                    ]
                }
            }
        },
        connecting: {
            on: {
                welcome: "connected",
                reconnect: "reconnecting",
                error: "connectFailure"
            },
            tags: [
                "busy"
            ]
        },
        connectFailure: {
            on: {
                connect: {
                    target: "connecting",
                    actions: [
                        "listen to server-sent events"
                    ]
                }
            },
            entry: [
                "stop listening to server-sent events",
                "assign error to context"
            ],
            exit: [
                "clear error from context"
            ],
            tags: [
                "error"
            ]
        },
        reconnecting: {
            on: {
                welcome: {
                    target: "connected"
                },
                error: {
                    target: "connectFailure"
                }
            },
            tags: [
                "busy",
                "error"
            ]
        },
        connected: {
            on: {
                mutation: {
                    actions: [
                        "buffer remote mutation events"
                    ]
                },
                reconnect: "reconnecting"
            },
            entry: [
                "clear error from context"
            ],
            initial: "loading",
            states: {
                loading: {
                    invoke: {
                        src: "fetch remote snapshot",
                        id: "getDocument",
                        input: (param)=>{
                            let { context } = param;
                            return {
                                client: context.client,
                                id: context.id
                            };
                        },
                        onError: {
                            target: "loadFailure"
                        },
                        onDone: {
                            target: "loaded",
                            actions: [
                                "rebase fetched remote snapshot",
                                "reset fetch attempts"
                            ]
                        }
                    },
                    tags: [
                        "busy"
                    ]
                },
                loaded: {
                    entry: [
                        "send sync event to parent"
                    ],
                    on: {
                        mutation: {
                            actions: [
                                "apply mendoza patch",
                                "send mutation event to parent"
                            ]
                        }
                    },
                    initial: "pristine",
                    states: {
                        pristine: {
                            on: {
                                mutate: {
                                    actions: [
                                        "rebase local snapshot",
                                        "stage mutation"
                                    ],
                                    target: "dirty"
                                }
                            },
                            tags: [
                                "ready"
                            ]
                        },
                        dirty: {
                            on: {
                                submit: "submitting"
                            },
                            tags: [
                                "ready"
                            ]
                        },
                        submitting: {
                            on: {
                                mutate: {
                                    actions: [
                                        "rebase local snapshot",
                                        "stash mutation"
                                    ]
                                }
                            },
                            invoke: {
                                src: "submit mutations as transactions",
                                id: "submitTransactions",
                                input: (param)=>{
                                    let { context } = param;
                                    const remoteDataset = /* @__PURE__ */ new Map();
                                    return remoteDataset.set(context.id, context.remote), {
                                        client: context.client,
                                        transactions: toTransactions(// Squashing DMP strings is the last thing we do before submitting
                                        squashDMPStrings(remoteDataset, squashMutationGroups(context.stagedChanges)))
                                    };
                                },
                                onError: {
                                    target: "submitFailure"
                                },
                                onDone: {
                                    target: "pristine",
                                    actions: [
                                        "restore stashed changes",
                                        "reset submit attempts",
                                        "send pristine event to parent"
                                    ]
                                }
                            },
                            /**
               * 'busy' means we should show a spinner, 'ready' means we can still accept mutations, they'll be applied optimistically right away, and queued for submissions after the current submission settles
               */ tags: [
                                "busy",
                                "ready"
                            ]
                        },
                        submitFailure: {
                            exit: [
                                "clear error from context"
                            ],
                            after: {
                                submitTransactionsTimeout: {
                                    actions: [
                                        "increment submit attempts"
                                    ],
                                    target: "submitting"
                                }
                            },
                            on: {
                                retry: "submitting"
                            },
                            /**
               * How can it be both `ready` and `error`? `ready` means it can receive mutations, optimistically apply them, and queue them for submission. `error` means it failed to submit previously applied mutations.
               * It's completely fine to keep queueing up more mutations and applying them optimistically, while showing UI that notifies that mutations didn't submit, and show a count down until the next automatic retry.
               */ tags: [
                                "error",
                                "ready"
                            ]
                        }
                    }
                },
                loadFailure: {
                    exit: [
                        "clear error from context"
                    ],
                    after: {
                        fetchRemoteSnapshotTimeout: {
                            actions: [
                                "increment fetch attempts"
                            ],
                            target: "loading"
                        }
                    },
                    on: {
                        retry: "loading"
                    },
                    tags: [
                        "error"
                    ]
                }
            }
        }
    }
});
function applyMendozaPatch(document, patch2, nextRevision) {
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$mendoza$40$3$2e$0$2e$8$2f$node_modules$2f$mendoza$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPatch"])(omitRev(document), patch2);
    return next ? Object.assign(next, {
        _rev: nextRevision
    }) : null;
}
function omitRev(document) {
    if (!document) return null;
    const { _rev, ...doc } = document;
    return doc;
}
;
 //# sourceMappingURL=_unstable_machine.browser.js.map
}),
]);

//# sourceMappingURL=91862_%40sanity_mutate_dist_8b6ea6f6._.js.map