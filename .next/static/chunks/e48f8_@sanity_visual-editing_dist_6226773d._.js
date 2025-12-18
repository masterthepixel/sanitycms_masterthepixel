(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actor",
    ()=>actor,
    "emptyActor",
    ()=>emptyActor,
    "isEmptyActor",
    ()=>isEmptyActor,
    "listeners",
    ()=>listeners,
    "setActor",
    ()=>setActor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
;
const emptyActor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyActor"])();
let actor = emptyActor;
const listeners = /* @__PURE__ */ new Set();
function isEmptyActor(actor2) {
    return actor2 === emptyActor;
}
function setActor(nextActor) {
    actor = nextActor;
    for (const onActorChange of listeners)onActorChange();
}
;
 //# sourceMappingURL=context.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get,
    "getArrayDuplicatePatches",
    ()=>getArrayDuplicatePatches,
    "getArrayInsertPatches",
    ()=>getArrayInsertPatches,
    "getArrayItemKeyAndParentPath",
    ()=>getArrayItemKeyAndParentPath,
    "getArrayMovePatches",
    ()=>getArrayMovePatches,
    "getArrayRemovePatches",
    ()=>getArrayRemovePatches,
    "useDocuments",
    ()=>useDocuments,
    "useOptimisticActor",
    ()=>useOptimisticActor,
    "useOptimisticActorReady",
    ()=>useOptimisticActorReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/react-compiler-runtime@1.0.0_react@19.0.0/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+client@7.13.2_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$0$2e$1_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+presentation-comlink@2.0.1_@sanity+client@7.13.2_@sanity+types@4.22.0_@types+react@19.0.1_/node_modules/@sanity/presentation-comlink/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
const reKeySegment$1 = /_key\s*==\s*['"](.*)['"]/, reIndexTuple = /^\d*:\d*$/;
function isIndexSegment(segment) {
    return typeof segment == "number" || typeof segment == "string" && /^\[\d+\]$/.test(segment);
}
function isKeySegment(segment) {
    return typeof segment == "string" ? reKeySegment$1.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function isIndexTuple(segment) {
    if (typeof segment == "string" && reIndexTuple.test(segment)) return !0;
    if (!Array.isArray(segment) || segment.length !== 2) return !1;
    const [from, to] = segment;
    return (typeof from == "number" || from === "") && (typeof to == "number" || to === "");
}
const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reKeySegment = /_key\s*==\s*['"](.*)['"]/;
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
function fromString(path) {
    if (typeof path != "string") throw new Error("Path is not a string");
    const segments = path.match(rePropName);
    if (!segments) throw new Error("Invalid path string");
    return segments.map(normalizePathSegment);
}
function normalizePathSegment(segment) {
    return isIndexSegment(segment) ? normalizeIndexSegment(segment) : isKeySegment(segment) ? normalizeKeySegment(segment) : isIndexTuple(segment) ? normalizeIndexTupleSegment(segment) : segment;
}
function normalizeIndexSegment(segment) {
    return Number(segment.replace(/[^\d]/g, ""));
}
function normalizeKeySegment(segment) {
    return {
        _key: segment.match(reKeySegment)[1]
    };
}
function normalizeIndexTupleSegment(segment) {
    const [from, to] = segment.split(":").map((seg)=>seg === "" ? seg : Number(seg));
    return [
        from,
        to
    ];
}
function useOptimisticActor() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(_temp, _temp2, _temp3);
}
function _temp3() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyActor"];
}
function _temp2() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["actor"];
}
function _temp(listener) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listeners"].add(listener), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listeners"].delete(listener);
}
function useOptimisticActorReady() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2), actor2 = useOptimisticActor();
    let t0;
    return $[0] !== actor2 ? (t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyActor"])(actor2), $[0] = actor2, $[1] = t0) : t0 = $[1], !t0;
}
function debounce(fn, timeout) {
    let timer;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timer), timer = setTimeout(()=>{
            fn.apply(fn, args);
        }, timeout);
    };
}
function getDocumentsAndSnapshot(id, actor2) {
    var _actor2_getSnapshot_context, _draftDoc_getSnapshot_context, _publishedDoc_getSnapshot_context;
    const inFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$0$2e$1_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewIframe"])(), inPopUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$0$2e$1_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewWindow"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyActor"])(actor2) || !inFrame && !inPopUp) throw new Error("The `useDocuments` hook cannot be used in this context");
    const draftId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(id), publishedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(id), documents = (_actor2_getSnapshot_context = actor2.getSnapshot().context) === null || _actor2_getSnapshot_context === void 0 ? void 0 : _actor2_getSnapshot_context.documents, draftDoc = documents === null || documents === void 0 ? void 0 : documents[draftId], publishedDoc = documents === null || documents === void 0 ? void 0 : documents[publishedId], doc = draftDoc || publishedDoc;
    if (!doc) throw new Error('Document "'.concat(id, '" not found'));
    const snapshot = ((_draftDoc_getSnapshot_context = draftDoc.getSnapshot().context) === null || _draftDoc_getSnapshot_context === void 0 ? void 0 : _draftDoc_getSnapshot_context.local) || ((_publishedDoc_getSnapshot_context = publishedDoc.getSnapshot().context) === null || _publishedDoc_getSnapshot_context === void 0 ? void 0 : _publishedDoc_getSnapshot_context.local), snapshotPromise = new Promise((resolve)=>{
        if (snapshot) resolve(snapshot);
        else {
            const subscriber = doc.on("ready", (event)=>{
                const { snapshot: snapshot2 } = event;
                resolve(snapshot2 || null), subscriber.unsubscribe();
            });
        }
    });
    return {
        draftDoc,
        draftId,
        getSnapshot: ()=>snapshotPromise,
        publishedDoc,
        publishedId,
        /**
     * @deprecated - use `getSnapshot` instead
     */ get snapshot () {
            if (!snapshot) throw new Error('Snapshot for document "'.concat(id, '" not found'));
            return snapshot;
        }
    };
}
function createDocumentCommit(id, actor2) {
    return ()=>{
        const { draftDoc } = getDocumentsAndSnapshot(id, actor2);
        draftDoc.send({
            type: "submit"
        });
    };
}
function createDocumentGet(id, actor2) {
    return (path)=>{
        const { snapshot } = getDocumentsAndSnapshot(id, actor2);
        return path ? get(snapshot, path) : snapshot;
    };
}
function createDocumentGetSnapshot(id, actor2) {
    const { getSnapshot } = getDocumentsAndSnapshot(id, actor2);
    return getSnapshot;
}
function createDocumentPatch(id, actor2) {
    return async (patches, options)=>{
        const result = getDocumentsAndSnapshot(id, actor2), { draftDoc, draftId, getSnapshot, publishedId } = result, { commit = !0 } = options || {}, resolvedPatches = await (typeof patches == "function" ? patches({
            draftId,
            publishedId,
            /**
       * @deprecated - use `getSnapshot` instead
       */ get snapshot () {
                return result.snapshot;
            },
            getSnapshot
        }) : patches), _snapshot = await getSnapshot();
        if (!_snapshot) throw new Error('Snapshot for document "'.concat(id, '" not found'));
        draftDoc.send({
            type: "mutate",
            mutations: [
                // Attempt to create the draft document, it might not exist if the
                // snapshot was from the published document
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIfNotExists"])({
                    ..._snapshot,
                    _id: draftId
                }),
                // Patch the draft document with the resolved patches
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patch"])(draftId, resolvedPatches)
            ]
        }), commit && (typeof commit == "object" && "debounce" in commit ? debounce(()=>draftDoc.send({
                type: "submit"
            }), commit.debounce)() : draftDoc.send({
            type: "submit"
        }));
    };
}
function useDocuments() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), actor2 = useOptimisticActor();
    let t0;
    $[0] !== actor2 ? (t0 = (documentId)=>({
            id: documentId,
            commit: createDocumentCommit(documentId, actor2),
            get: createDocumentGet(documentId, actor2),
            getSnapshot: createDocumentGetSnapshot(documentId, actor2),
            patch: createDocumentPatch(documentId, actor2)
        }), $[0] = actor2, $[1] = t0) : t0 = $[1];
    const getDocument = t0;
    let t1;
    $[2] !== actor2 ? (t1 = (id, mutations, options)=>{
        const { draftDoc } = getDocumentsAndSnapshot(id, actor2), { commit: t22 } = options || {}, commit = t22 === void 0 ? !0 : t22;
        draftDoc.send({
            type: "mutate",
            mutations
        }), commit && (typeof commit == "object" && "debounce" in commit ? debounce(()=>draftDoc.send({
                type: "submit"
            }), commit.debounce)() : draftDoc.send({
            type: "submit"
        }));
    }, $[2] = actor2, $[3] = t1) : t1 = $[3];
    const mutateDocument = t1;
    let t2;
    return $[4] !== getDocument || $[5] !== mutateDocument ? (t2 = {
        getDocument,
        mutateDocument
    }, $[4] = getDocument, $[5] = mutateDocument, $[6] = t2) : t2 = $[6], t2;
}
function whatwgRNG() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16;
    const rnds8 = new Uint8Array(length);
    return crypto.getRandomValues(rnds8), rnds8;
}
const getByteHexTable = /* @__PURE__ */ (()=>{
    let table;
    return ()=>{
        if (table) return table;
        table = [];
        for(let i = 0; i < 256; ++i)table[i] = (i + 256).toString(16).slice(1);
        return table;
    };
})();
function randomKey(length) {
    const table = getByteHexTable();
    return whatwgRNG(length).reduce((str, n)=>str + table[n], "").slice(0, length);
}
function getArrayItemKeyAndParentPath(pathOrNode) {
    const elementPath = typeof pathOrNode == "string" ? pathOrNode : pathOrNode.path, lastDotIndex = elementPath.lastIndexOf("."), lastPathItem = elementPath.substring(lastDotIndex + 1, elementPath.length);
    if (!lastPathItem.indexOf("[")) throw new Error("Invalid path: not an array");
    const lastArrayIndex = elementPath.lastIndexOf("["), path = elementPath.substring(0, lastArrayIndex);
    let key, hasExplicitKey;
    if (lastPathItem.includes("_key")) {
        const startIndex = lastPathItem.indexOf('"') + 1, endIndex = lastPathItem.indexOf('"', startIndex);
        key = lastPathItem.substring(startIndex, endIndex), hasExplicitKey = !0;
    } else {
        const startIndex = lastPathItem.indexOf("[") + 1, endIndex = lastPathItem.indexOf("]", startIndex);
        key = lastPathItem.substring(startIndex, endIndex), hasExplicitKey = !1;
    }
    if (!path || !key) throw new Error("Invalid path");
    return {
        path,
        key,
        hasExplicitKey
    };
}
function getArrayDuplicatePatches(node, snapshot) {
    let position = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "after";
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), duplicate = {
        ...get(snapshot, node.path),
        _key: randomKey()
    };
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(duplicate, position, {
            _key: itemKey
        }))
    ];
}
function getArrayRemovePatches(node, snapshot) {
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), currentIndex = get(snapshot, arrayPath).findIndex((item)=>item._key === itemKey);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(currentIndex, currentIndex + 1))
    ];
}
function getArrayInsertPatches(node, insertType, position) {
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), insertKey = randomKey();
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
            {
                _type: insertType,
                _key: insertKey
            }
        ], position, {
            _key: itemKey
        }))
    ];
}
async function getArrayMovePatches(node, doc, moveTo) {
    if (!node.type) throw new Error("Node type is missing");
    const { path: arrayPath, key: itemKey } = getArrayItemKeyAndParentPath(node), snapshot = await doc.getSnapshot(), array = get(snapshot, arrayPath), item = get(snapshot, node.path), currentIndex = array.findIndex((item2)=>item2._key === itemKey);
    let nextIndex = -1, position = "before";
    if (moveTo === "first") {
        if (currentIndex === 0) return [];
        nextIndex = 0, position = "before";
    } else if (moveTo === "last") {
        if (currentIndex === array.length - 1) return [];
        nextIndex = -1, position = "after";
    } else if (moveTo === "next") {
        if (currentIndex === array.length - 1) return [];
        nextIndex = currentIndex, position = "after";
    } else if (moveTo === "previous") {
        if (currentIndex === 0) return [];
        nextIndex = currentIndex - 1, position = "before";
    }
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(currentIndex, currentIndex + 1)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(item, position, nextIndex))
    ];
}
;
 //# sourceMappingURL=mutations.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/SharedStateContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SharedStateContext",
    ()=>SharedStateContext,
    "createOverlayController",
    ()=>createOverlayController,
    "sanityNodesExistInSameArray",
    ()=>sanityNodesExistInSameArray,
    "useOptimistic",
    ()=>useOptimistic,
    "v4",
    ()=>v4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/react-compiler-runtime@1.0.0_react@19.0.0/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+client@7.13.2_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$2$2e$0$2e$26_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing-csm@2.0.26_@sanity+client@7.13.2_@sanity+types@4.22.0_@types+react@19.0.1__typescript@5.9.3/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@vercel+stega@1.0.0/node_modules/@vercel/stega/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
function useOptimistic(passthrough, reducer) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17), [pristine, setPristine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), [optimistic, setOptimistic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(passthrough), [lastEvent, setLastEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [lastPassthrough, setLastPassthrough] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(passthrough), actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActor"])(), reduceStateFromActionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0, t1;
    $[0] !== reducer ? (t0 = ()=>{
        reduceStateFromActionRef.current = (action, prevState)=>(Array.isArray(reducer) ? reducer : [
                reducer
            ]).reduce((acc, reducer_0)=>reducer_0(acc, {
                    document: action.document,
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(action.id),
                    originalId: action.id,
                    type: action.type
                }), prevState);
    }, t1 = [
        reducer
    ], $[0] = reducer, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])(t0, t1);
    let t2;
    $[3] !== passthrough ? (t2 = ()=>setLastPassthrough(passthrough), $[3] = passthrough, $[4] = t2) : t2 = $[4];
    const updateLastPassthroughRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    let t3, t4;
    $[5] !== passthrough ? (t3 = ()=>{
        updateLastPassthroughRef.current = ()=>setLastPassthrough(passthrough);
    }, t4 = [
        passthrough
    ], $[5] = passthrough, $[6] = t3, $[7] = t4) : (t3 = $[6], t4 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])(t3, t4);
    let t5, t6;
    $[8] !== actor ? (t5 = ()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyActor"])(actor)) return;
        let pristineTimeout;
        const rebasedSub = actor.on("rebased.local", (_event)=>{
            const event = {
                document: _event.document,
                id: _event.id,
                originalId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(_event.id),
                type: "mutate"
            };
            setOptimistic((prevState_0)=>reduceStateFromActionRef.current ? reduceStateFromActionRef.current(event, prevState_0) : prevState_0), setLastEvent(event), updateLastPassthroughRef.current(), setPristine(!1), clearTimeout(pristineTimeout);
        }), pristineSub = actor.on("pristine", ()=>{
            pristineTimeout = setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPristine(!0));
            }, 15e3);
        });
        return ()=>{
            rebasedSub.unsubscribe(), pristineSub.unsubscribe();
        };
    }, t6 = [
        actor
    ], $[8] = actor, $[9] = t5, $[10] = t6) : (t5 = $[9], t6 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7, t8;
    return $[11] !== lastEvent || $[12] !== lastPassthrough || $[13] !== passthrough || $[14] !== pristine ? (t7 = ()=>{
        if (!pristine) {
            if (!lastEvent) throw new Error("No last event found when syncing passthrough");
            lastPassthrough !== passthrough && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setOptimistic(reduceStateFromActionRef.current ? reduceStateFromActionRef.current(lastEvent, passthrough) : passthrough), setLastPassthrough(passthrough);
            });
        }
    }, t8 = [
        lastEvent,
        lastPassthrough,
        passthrough,
        pristine
    ], $[11] = lastEvent, $[12] = lastPassthrough, $[13] = passthrough, $[14] = pristine, $[15] = t7, $[16] = t8) : (t7 = $[15], t8 = $[16]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8), pristine ? passthrough : optimistic;
}
const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 256).toString(16).slice(1));
function unsafeStringify(arr) {
    let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}
const randomUUID = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
    randomUUID
};
function v4(options, buf, offset) {
    var _options_rng;
    if (native.randomUUID && !options) return native.randomUUID();
    options = options || {};
    var _options_random, _ref;
    const rnds = (_ref = (_options_random = options.random) !== null && _options_random !== void 0 ? _options_random : (_options_rng = options.rng) === null || _options_rng === void 0 ? void 0 : _options_rng.call(options)) !== null && _ref !== void 0 ? _ref : rng();
    if (rnds.length < 16) throw new Error("Random bytes length must be >= 16");
    return rnds[6] = rnds[6] & 15 | 64, rnds[8] = rnds[8] & 63 | 128, unsafeStringify(rnds);
}
function getRect(element) {
    const domRect = element.getBoundingClientRect();
    return {
        x: domRect.x + scrollX,
        y: domRect.y + scrollY,
        w: domRect.width,
        h: domRect.height
    };
}
function offsetRect(rect, px, axis) {
    return axis === "x" ? {
        x: rect.x + px,
        y: rect.y,
        w: rect.w - 2 * px,
        h: rect.h
    } : {
        x: rect.x,
        y: rect.y + px,
        w: rect.w,
        h: rect.h - 2 * px
    };
}
function rayIntersect(l1, l2) {
    const { x1, y1, x2, y2 } = l1, { x1: x3, y1: y3, x2: x4, y2: y4 } = l2;
    if (x1 === x2 && y1 === y2 || x3 === x4 && y3 === y4) return !1;
    const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denominator === 0) return !1;
    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator, ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return !1;
    const x = x1 + ua * (x2 - x1), y = y1 + ua * (y2 - y1);
    return {
        x,
        y
    };
}
function rectEqual(r1, r2) {
    return r1.x === r2.x && r1.y === r2.y && r1.w === r2.w && r1.h === r2.h;
}
function rayRectIntersections(line, rect) {
    const rectLines = [
        {
            x1: rect.x,
            y1: rect.y,
            x2: rect.x + rect.w,
            y2: rect.y
        },
        {
            x1: rect.x + rect.w,
            y1: rect.y,
            x2: rect.x + rect.w,
            y2: rect.y + rect.h
        },
        {
            x1: rect.x + rect.w,
            y1: rect.y + rect.h,
            x2: rect.x,
            y2: rect.y + rect.h
        },
        {
            x1: rect.x,
            y1: rect.y + rect.h,
            x2: rect.x,
            y2: rect.y
        }
    ], intersections = [];
    for(let i = 0; i < rectLines.length; i++){
        const intersection = rayIntersect(line, rectLines[i]);
        if (intersection) {
            let isDuplicate = !1;
            for(let j = 0; j < intersections.length; j++)intersections[j].x === intersection.x && intersections[j].y === intersection.y && (isDuplicate = !0);
            isDuplicate || intersections.push(intersection);
        }
    }
    return intersections.length === 0 ? !1 : intersections.sort((a, b)=>pointDist(a, {
            x: line.x1,
            y: line.y1
        }) - pointDist(b, {
            x: line.x1,
            y: line.y1
        }));
}
function pointDist(p1, p2) {
    const a = p1.x - p2.x, b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
}
function pointInBounds(point, bounds) {
    const withinX = point.x >= bounds.x && point.x <= bounds.x + bounds.w, withinY = point.y >= bounds.y && point.y <= bounds.y + bounds.h;
    return withinX && withinY;
}
function findClosestIntersection(ray, targets, flow) {
    const rayOrigin = {
        x: ray.x1,
        y: ray.y1
    };
    if (targets.some((t)=>pointInBounds(rayOrigin, offsetRect(t, Math.min(t.w, t.h) / 10, flow === "horizontal" ? "x" : "y")))) return null;
    let closestIntersection, closestRect;
    for (const target of targets){
        const intersections = rayRectIntersections(ray, offsetRect(target, Math.min(target.w, target.h) / 10, flow === "horizontal" ? "x" : "y"));
        if (intersections) {
            const firstIntersection = intersections[0];
            closestIntersection ? pointDist(rayOrigin, firstIntersection) < pointDist(rayOrigin, closestIntersection) && (closestIntersection = firstIntersection, closestRect = target) : (closestIntersection = firstIntersection, closestRect = target);
        }
    }
    return closestRect || null;
}
function scaleRect(rect, scale, origin) {
    const { x, y, w, h } = rect, { x: originX, y: originY } = origin, newX = originX + (x - originX) * scale, newY = originY + (y - originY) * scale, newWidth = w * scale, newHeight = h * scale;
    return {
        x: newX,
        y: newY,
        w: newWidth,
        h: newHeight
    };
}
function getRectGroupXExtent(rects) {
    const minGroupX = Math.max(0, Math.min(...rects.map((r)=>r.x))), maxGroupX = Math.min(document.body.offsetWidth, Math.max(...rects.map((r)=>r.x + r.w)));
    return {
        min: minGroupX,
        max: maxGroupX,
        width: maxGroupX - minGroupX
    };
}
function getRectGroupYExtent(rects) {
    const minGroupY = Math.max(0, Math.min(...rects.map((r)=>r.y))), maxGroupY = Math.min(document.body.scrollHeight, Math.max(...rects.map((r)=>r.y + r.h)));
    return {
        min: minGroupY,
        max: maxGroupY,
        height: maxGroupY - minGroupY
    };
}
function calcTargetFlow(targets) {
    return targets.some((t1)=>targets.filter((t2)=>!rectEqual(t1, t2)).some((t2)=>t1.y === t2.y)) ? "horizontal" : "vertical";
}
function calcInsertPosition(origin, targets, flow) {
    if (flow === "horizontal") {
        const rayLeft = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x - 1e8,
            y2: origin.y
        }, rayRight = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x + 1e8,
            y2: origin.y
        };
        return {
            left: findClosestIntersection(rayLeft, targets, flow),
            right: findClosestIntersection(rayRight, targets, flow)
        };
    } else {
        const rayTop = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x,
            y2: origin.y - 1e8
        }, rayBottom = {
            x1: origin.x,
            y1: origin.y,
            x2: origin.x,
            y2: origin.y + 1e8
        };
        return {
            top: findClosestIntersection(rayTop, targets, flow),
            bottom: findClosestIntersection(rayBottom, targets, flow)
        };
    }
}
function findRectSanityData(rect, overlayGroup) {
    var _overlayGroup_find;
    return (_overlayGroup_find = overlayGroup.find((e)=>rectEqual(getRect(e.elements.element), rect))) === null || _overlayGroup_find === void 0 ? void 0 : _overlayGroup_find.sanity;
}
function resolveInsertPosition(overlayGroup, insertPosition, flow) {
    return Object.values(insertPosition).every((v)=>v === null) ? null : flow === "horizontal" ? {
        left: insertPosition.left ? {
            rect: insertPosition.left,
            sanity: findRectSanityData(insertPosition.left, overlayGroup)
        } : null,
        right: insertPosition.right ? {
            rect: insertPosition.right,
            sanity: findRectSanityData(insertPosition.right, overlayGroup)
        } : null
    } : {
        top: insertPosition.top ? {
            rect: insertPosition.top,
            sanity: findRectSanityData(insertPosition.top, overlayGroup)
        } : null,
        bottom: insertPosition.bottom ? {
            rect: insertPosition.bottom,
            sanity: findRectSanityData(insertPosition.bottom, overlayGroup)
        } : null
    };
}
function calcMousePos(e) {
    const bodyBounds = document.body.getBoundingClientRect();
    return {
        x: Math.max(bodyBounds.x, Math.min(e.clientX, bodyBounds.x + bodyBounds.width)),
        y: e.clientY + window.scrollY
    };
}
function calcMousePosInverseTransform(mousePos2) {
    const body = document.body, transform = window.getComputedStyle(body).transform;
    if (transform === "none") return {
        x: mousePos2.x,
        y: mousePos2.y
    };
    const inverseMatrix = new DOMMatrix(transform).inverse(), transformedPoint = new DOMPoint(mousePos2.x, mousePos2.y).matrixTransform(inverseMatrix);
    return {
        x: transformedPoint.x,
        y: transformedPoint.y
    };
}
function buildPreviewSkeleton(mousePos2, element, scaleFactor) {
    const bounds = getRect(element), children = [
        ...element.querySelectorAll(":where(h1, h2, h3, h4, p, a, img, span, button):not(:has(*))")
    ];
    mousePos2.x <= bounds.x && (mousePos2.x = bounds.x), mousePos2.x >= bounds.x + bounds.w && (mousePos2.x = bounds.x + bounds.w), mousePos2.y >= bounds.y + bounds.h && (mousePos2.y = bounds.y + bounds.h), mousePos2.y <= bounds.y && (mousePos2.y = bounds.y);
    const childRects = children.map((child)=>{
        const rect = scaleRect(getRect(child), scaleFactor, {
            x: bounds.x,
            y: bounds.y
        });
        return {
            x: rect.x - bounds.x,
            y: rect.y - bounds.y,
            w: rect.w,
            h: rect.h,
            tagName: child.tagName
        };
    });
    return {
        offsetX: (bounds.x - mousePos2.x) * scaleFactor,
        offsetY: (bounds.y - mousePos2.y) * scaleFactor,
        w: bounds.w * scaleFactor,
        h: bounds.h * scaleFactor,
        maxWidth: bounds.w * scaleFactor * 0.75,
        childRects
    };
}
const minDragDelta = 4;
async function applyMinimapWrapperTransform(target, scaleFactor, minYScaled, handler, rectUpdateFrequency) {
    return new Promise((resolve)=>{
        target.addEventListener("transitionend", ()=>{
            setTimeout(()=>{
                handler({
                    type: "overlay/dragEndMinimapTransition"
                });
            }, rectUpdateFrequency * 2), resolve();
        }, {
            once: !0
        }), handler({
            type: "overlay/dragStartMinimapTransition"
        }), handler({
            type: "overlay/dragToggleMinimap",
            display: !0
        }), document.body.style.overflow = "hidden", document.body.style.height = "100%", document.documentElement.style.overflow = "initial", document.documentElement.style.height = "100%", setTimeout(()=>{
            target.style.transformOrigin = "50% 0px", target.style.transition = "transform 150ms ease", target.style.transform = "translate3d(0px, ".concat(-minYScaled + scrollY, "px, 0px) scale(").concat(scaleFactor, ")");
        }, 25);
    });
}
function calcMinimapTransformValues(rects, groupHeightOverride) {
    let groupHeight = groupHeightOverride || getRectGroupYExtent(rects).height;
    const padding = 100;
    groupHeight += padding * 2;
    const scaleFactor = groupHeight > window.innerHeight ? window.innerHeight / groupHeight : 1, scaledRects = rects.map((r)=>scaleRect(r, scaleFactor, {
            x: window.innerWidth / 2,
            y: 0
        })), { min: minYScaled } = getRectGroupYExtent(scaledRects);
    return {
        scaleFactor,
        minYScaled: minYScaled - padding * scaleFactor
    };
}
function calcGroupBoundsPreview(rects) {
    const groupBoundsX = getRectGroupXExtent(rects), groupBoundsY = getRectGroupYExtent(rects), offsetDist = 8, canOffsetX = groupBoundsX.min > offsetDist && groupBoundsX.min + groupBoundsX.width <= window.innerWidth - offsetDist, canOffsetY = groupBoundsY.min > offsetDist && groupBoundsY.min + groupBoundsY.height <= document.body.scrollHeight - offsetDist, canOffset = canOffsetX && canOffsetY;
    return {
        x: canOffset ? groupBoundsX.min - offsetDist : groupBoundsX.min,
        y: canOffset ? groupBoundsY.min - offsetDist : groupBoundsY.min,
        w: canOffset ? groupBoundsX.width + offsetDist * 2 : groupBoundsX.width,
        h: canOffset ? groupBoundsY.height + offsetDist * 2 : groupBoundsY.height
    };
}
async function resetMinimapWrapperTransform(endYOrigin, target, prescaleHeight2, handler, rectUpdateFrequency, previousRootStyleValues2) {
    return new Promise((resolve)=>{
        const transform = window.getComputedStyle(target).transform;
        if (new DOMMatrix(transform).a === 1) return;
        const maxScroll = prescaleHeight2 - window.innerHeight, prevScrollY = scrollY;
        endYOrigin -= window.innerHeight / 2, endYOrigin < 0 && (endYOrigin = 0), target.addEventListener("transitionend", ()=>{
            target.style.transition = "none", target.style.transform = "none", scrollTo({
                top: endYOrigin,
                behavior: "instant"
            }), setTimeout(()=>{
                handler({
                    type: "overlay/dragEndMinimapTransition"
                }), handler({
                    type: "overlay/dragToggleMinimap",
                    display: !1
                });
            }, rectUpdateFrequency * 2), resolve();
        }, {
            once: !0
        }), handler({
            type: "overlay/dragStartMinimapTransition"
        }), target.style.transform = "translateY(".concat(Math.max(prevScrollY - endYOrigin, -maxScroll + prevScrollY), "px) scale(1)"), previousRootStyleValues2 && (document.body.style.overflow = previousRootStyleValues2.body.overflow, document.body.style.height = previousRootStyleValues2.body.height, document.documentElement.style.overflow = previousRootStyleValues2.documentElement.overflow, document.documentElement.style.height = previousRootStyleValues2.documentElement.height);
    });
}
let minimapScaleApplied = !1, mousePosInverseTransform = {
    y: 0
}, mousePos = {
    x: 0,
    y: 0
}, prescaleHeight = typeof document > "u" ? 0 : document.documentElement.scrollHeight, previousRootStyleValues = null;
function handleOverlayDrag(opts) {
    const { mouseEvent, element, overlayGroup, handler, target, onSequenceStart, onSequenceEnd } = opts;
    if (mouseEvent.button !== 0) return;
    window.focus();
    const rectUpdateFrequency = 150;
    let rects = overlayGroup.map((e)=>getRect(e.elements.element));
    const flow = element.getAttribute("data-sanity-drag-flow") || calcTargetFlow(rects), dragGroup = element.getAttribute("data-sanity-drag-group"), disableMinimap = !!element.getAttribute("data-sanity-drag-minimap-disable"), preventInsertDefault = !!element.getAttribute("data-sanity-drag-prevent-default"), documentHeightOverride = element.getAttribute("data-unstable_sanity-drag-document-height"), groupHeightOverride = element.getAttribute("data-unstable_sanity-drag-group-height");
    let insertPosition = null;
    const initialMousePos = calcMousePos(mouseEvent), scaleTarget = document.body, { minYScaled, scaleFactor } = calcMinimapTransformValues(rects, groupHeightOverride ? ~~groupHeightOverride : null);
    let sequenceStarted = !1, minimapPromptShown = !1, mousedown = !0;
    minimapScaleApplied || (previousRootStyleValues = {
        body: {
            overflow: window.getComputedStyle(document.body).overflow,
            height: window.getComputedStyle(document.body).height
        },
        documentElement: {
            overflow: window.getComputedStyle(document.documentElement).overflow,
            height: window.getComputedStyle(document.documentElement).height
        }
    }, prescaleHeight = documentHeightOverride ? ~~documentHeightOverride : document.documentElement.scrollHeight);
    const rectsInterval = setInterval(()=>{
        rects = overlayGroup.map((e)=>getRect(e.elements.element));
    }, rectUpdateFrequency), applyMinimap = ()=>{
        if (scaleFactor >= 1) return;
        const skeleton = buildPreviewSkeleton(mousePos, element, scaleFactor);
        handler({
            type: "overlay/dragUpdateSkeleton",
            skeleton
        }), handler({
            type: "overlay/dragToggleMinimapPrompt",
            display: !1
        }), applyMinimapWrapperTransform(scaleTarget, scaleFactor, minYScaled, handler, rectUpdateFrequency).then(()=>{
            setTimeout(()=>{
                handler({
                    type: "overlay/dragUpdateGroupRect",
                    groupRect: calcGroupBoundsPreview(rects)
                });
            }, rectUpdateFrequency * 2);
        });
    }, handleScroll = (e)=>{
        Math.abs(e.deltaY) >= 10 && scaleFactor < 1 && !minimapScaleApplied && !minimapPromptShown && !disableMinimap && mousedown && (handler({
            type: "overlay/dragToggleMinimapPrompt",
            display: !0
        }), minimapPromptShown = !0), e.shiftKey && !minimapScaleApplied && !disableMinimap && (window.dispatchEvent(new CustomEvent("unstable_sanity/dragApplyMinimap")), minimapScaleApplied = !0, setTimeout(()=>{
            applyMinimap();
        }, 50));
    }, handleMouseMove = (e)=>{
        if (e.preventDefault(), mousePos = calcMousePos(e), mousePosInverseTransform = calcMousePosInverseTransform(mousePos), Math.abs(pointDist(mousePos, initialMousePos)) < minDragDelta) return;
        if (!sequenceStarted) {
            const groupRect = calcGroupBoundsPreview(rects), skeleton = buildPreviewSkeleton(mousePos, element, 1);
            handler({
                type: "overlay/dragStart",
                flow
            }), handler({
                type: "overlay/dragUpdateSkeleton",
                skeleton
            }), handler({
                type: "overlay/dragUpdateGroupRect",
                groupRect
            }), sequenceStarted = !0, onSequenceStart();
        }
        handler({
            type: "overlay/dragUpdateCursorPosition",
            x: mousePos.x,
            y: mousePos.y
        }), e.shiftKey && !minimapScaleApplied && !disableMinimap && (window.dispatchEvent(new CustomEvent("unstable_sanity/dragApplyMinimap")), minimapScaleApplied = !0, setTimeout(()=>{
            applyMinimap();
        }, 50));
        const newInsertPosition = calcInsertPosition(mousePos, rects, flow);
        JSON.stringify(insertPosition) !== JSON.stringify(newInsertPosition) && (insertPosition = newInsertPosition, handler({
            type: "overlay/dragUpdateInsertPosition",
            insertPosition: resolveInsertPosition(overlayGroup, insertPosition, flow)
        }));
    }, handleMouseUp = ()=>{
        mousedown = !1, handler({
            type: "overlay/dragEnd",
            target,
            insertPosition: insertPosition ? resolveInsertPosition(overlayGroup, insertPosition, flow) : null,
            dragGroup,
            flow,
            preventInsertDefault
        }), minimapPromptShown && handler({
            type: "overlay/dragToggleMinimapPrompt",
            display: !1
        }), minimapScaleApplied || (clearInterval(rectsInterval), onSequenceEnd(), removeFrameListeners(), removeKeyListeners()), removeMouseListeners();
    }, handleKeyup = (e)=>{
        if (e.key === "Shift" && minimapScaleApplied) {
            minimapScaleApplied = !1;
            const skeleton = buildPreviewSkeleton(mousePos, element, 1 / scaleFactor);
            handler({
                type: "overlay/dragUpdateSkeleton",
                skeleton
            }), window.dispatchEvent(new CustomEvent("unstable_sanity/dragResetMinimap")), setTimeout(()=>{
                resetMinimapWrapperTransform(mousePosInverseTransform.y, scaleTarget, prescaleHeight, handler, rectUpdateFrequency, previousRootStyleValues);
            }, 50), handler({
                type: "overlay/dragUpdateGroupRect",
                groupRect: null
            }), mousedown || (clearInterval(rectsInterval), removeMouseListeners(), removeFrameListeners(), removeKeyListeners(), onSequenceEnd());
        }
    }, handleBlur = ()=>{
        handler({
            type: "overlay/dragUpdateGroupRect",
            groupRect: null
        }), window.dispatchEvent(new CustomEvent("unstable_sanity/dragResetMinimap")), setTimeout(()=>{
            resetMinimapWrapperTransform(mousePosInverseTransform.y, scaleTarget, prescaleHeight, handler, rectUpdateFrequency, previousRootStyleValues).then(()=>{
                minimapScaleApplied = !1;
            });
        }, 50), clearInterval(rectsInterval), removeMouseListeners(), removeFrameListeners(), removeKeyListeners(), onSequenceEnd();
    }, removeMouseListeners = ()=>{
        window.removeEventListener("mousemove", handleMouseMove), window.removeEventListener("wheel", handleScroll), window.removeEventListener("mouseup", handleMouseUp);
    }, removeKeyListeners = ()=>{
        window.removeEventListener("keyup", handleKeyup);
    }, removeFrameListeners = ()=>{
        window.removeEventListener("blur", handleBlur);
    };
    window.addEventListener("blur", handleBlur), window.addEventListener("keyup", handleKeyup), window.addEventListener("wheel", handleScroll), window.addEventListener("mousemove", handleMouseMove), window.addEventListener("mouseup", handleMouseUp);
}
const isElementNode$1 = (target)=>target instanceof HTMLElement || target instanceof SVGElement;
function findNonInlineElement(element) {
    const { display } = window.getComputedStyle(element);
    if (display !== "inline") return element;
    const parent = element.parentElement;
    return parent ? findNonInlineElement(parent) : null;
}
const findOverlayElement = (el)=>{
    var _el_dataset;
    return !el || !isElementNode$1(el) ? null : ((_el_dataset = el.dataset) === null || _el_dataset === void 0 ? void 0 : _el_dataset.sanityOverlayElement) ? el : findOverlayElement(el.parentElement);
};
function testVercelStegaRegex(input) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"].lastIndex = 0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"].test(input);
}
function decodeStega(str) {
    let isAltText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    try {
        var _decoded_href;
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$stega$40$1$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vercelStegaDecode"])(str);
        return !decoded || decoded.origin !== "sanity.io" ? null : (isAltText && (decoded.href = (_decoded_href = decoded.href) === null || _decoded_href === void 0 ? void 0 : _decoded_href.replace(".alt", "")), decoded);
    } catch (err) {
        return console.error("Failed to decode stega for string: ", str, "with the original error: ", err), null;
    }
}
function testAndDecodeStega(str) {
    let isAltText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return testVercelStegaRegex(str) ? decodeStega(str, isAltText) : null;
}
const isElementNode = (node)=>node.nodeType === Node.ELEMENT_NODE, isImgElement = (el)=>el.tagName === "IMG", isTimeElement = (el)=>el.tagName === "TIME", isSvgRootElement = (el)=>el.tagName.toUpperCase() === "SVG";
function isSanityNode(node) {
    return "path" in node;
}
function findCommonPath(first, second) {
    let firstParts = first.split("."), secondParts = second.split(".");
    const maxLength = Math.min(firstParts.length, secondParts.length);
    return firstParts = firstParts.slice(0, maxLength).reverse(), secondParts = secondParts.slice(0, maxLength).reverse(), firstParts.reduce((parts, part, i)=>part === secondParts[i] ? [
            ...parts,
            part
        ] : [], []).reverse().join(".");
}
function findCommonSanityData(nodes) {
    if (!nodes.length || !nodes.map((n)=>isSanityNode(n)).every((n, _i, arr)=>n === arr[0])) return;
    if (!isSanityNode(nodes[0])) return nodes[0];
    const sanityNodes = nodes.filter(isSanityNode);
    let common = nodes[0];
    const consistentValueKeys = [
        "projectId",
        "dataset",
        "id",
        "baseUrl",
        "workspace",
        "tool"
    ];
    for(let i = 1; i < sanityNodes.length; i++){
        const node = sanityNodes[i];
        if (consistentValueKeys.some((key)=>node[key] !== (common === null || common === void 0 ? void 0 : common[key]))) {
            common = void 0;
            break;
        }
        common = {
            ...common,
            path: findCommonPath(common.path, node.path)
        };
    }
    return common;
}
function findSanityNodes(el) {
    const mainResults = [];
    function createResolvedElement(element, data, reason, preventGrouping) {
        const sanity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$2$2e$0$2e$26_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeSanityNodeData"])(data);
        if (!sanity) return;
        const measureElement = findNonInlineElement(element);
        if (measureElement) return {
            elements: {
                element,
                measureElement
            },
            sanity,
            reason,
            preventGrouping
        };
    }
    function resolveNode(node) {
        var _node_dataset;
        const { nodeType, parentElement, textContent } = node;
        if (isElementNode(node) && ((_node_dataset = node.dataset) === null || _node_dataset === void 0 ? void 0 : _node_dataset.sanityEditTarget) !== void 0) {
            const nodesInTarget = findSanityNodes(node), commonData = findCommonSanityData(nodesInTarget.map((node2)=>node2.type === "element" ? node2.commonSanity : void 0).filter((n)=>n !== void 0));
            if (commonData) return {
                reason: "edit-target",
                elements: {
                    element: node,
                    measureElement: node
                },
                sanity: commonData
            };
        } else if (nodeType === Node.TEXT_NODE && parentElement && textContent) {
            const data = testAndDecodeStega(textContent);
            return data ? createResolvedElement(parentElement, data, "stega-text", !0) : void 0;
        } else if (isElementNode(node)) {
            var _node_dataset1, _node_dataset2;
            if (node.tagName === "SCRIPT" || node.tagName === "SANITY-VISUAL-EDITING") return;
            if ((_node_dataset1 = node.dataset) === null || _node_dataset1 === void 0 ? void 0 : _node_dataset1.sanity) return createResolvedElement(node, node.dataset.sanity, "data-attribute", !!(node.textContent && testVercelStegaRegex(node.textContent)));
            if ((_node_dataset2 = node.dataset) === null || _node_dataset2 === void 0 ? void 0 : _node_dataset2.sanityEditInfo) return createResolvedElement(node, node.dataset.sanityEditInfo, "data-attribute", !!(node.textContent && testVercelStegaRegex(node.textContent)));
            if (isImgElement(node)) {
                const data = testAndDecodeStega(node.alt, !0);
                return data ? createResolvedElement(node, data, "stega-attribute") : void 0;
            } else if (isTimeElement(node)) {
                const data = testAndDecodeStega(node.dateTime, !0);
                return data ? createResolvedElement(node, data, "stega-attribute") : void 0;
            } else if (isSvgRootElement(node)) {
                if (!node.ariaLabel) return;
                const data = testAndDecodeStega(node.ariaLabel, !0);
                return data ? createResolvedElement(node, data, "stega-attribute") : void 0;
            }
        }
    }
    function processNode(node, _parentGroup) {
        var _node_dataset;
        const resolvedElement = resolveNode(node);
        let parentGroup = _parentGroup;
        if (isElementNode(node) && ((_node_dataset = node.dataset) === null || _node_dataset === void 0 ? void 0 : _node_dataset.sanityEditGroup) !== void 0 && (parentGroup = {
            type: "group",
            elements: {
                element: node,
                measureElement: node
            },
            targets: []
        }, mainResults.push(parentGroup)), resolvedElement) {
            const target = {
                elements: resolvedElement.elements,
                sanity: resolvedElement.sanity,
                reason: resolvedElement.reason
            };
            parentGroup && !resolvedElement.preventGrouping ? parentGroup.targets.push(target) : mainResults.push({
                elements: resolvedElement.elements,
                type: "element",
                targets: [
                    target
                ]
            });
        }
        if (isElementNode(node) && !isImgElement(node) && !(node.tagName === "SCRIPT" || node.tagName === "SANITY-VISUAL-EDITING")) for (const childNode of node.childNodes)processNode(childNode, parentGroup);
    }
    if (el) for (const node of el.childNodes)processNode(node, void 0);
    return mainResults.map((node)=>{
        if (node.targets.length === 0 && node.type === "group") return {
            ...node,
            commonSanity: void 0
        };
        const commonSanity = node.targets.length === 1 ? node.targets[0].sanity : findCommonSanityData(node.targets.map((param)=>{
            let { sanity } = param;
            return sanity;
        }).filter((n)=>n !== void 0)) || node.targets[0].sanity;
        return commonSanity ? {
            ...node,
            commonSanity
        } : null;
    }).filter((node)=>node !== null);
}
function isSanityArrayPath(path) {
    const lastDotIndex = path.lastIndexOf(".");
    return path.substring(lastDotIndex, path.length).includes("[");
}
function getSanityNodeArrayPath(path) {
    if (!isSanityArrayPath(path)) return null;
    const split = path.split(".");
    return split[split.length - 1] = split[split.length - 1].replace(/\[.*?\]/g, "[]"), split.join(".");
}
function sanityNodesExistInSameArray(sanityNode1, sanityNode2) {
    return !isSanityArrayPath(sanityNode1.path) || !isSanityArrayPath(sanityNode2.path) ? !1 : getSanityNodeArrayPath(sanityNode1.path) === getSanityNodeArrayPath(sanityNode2.path);
}
function resolveDragAndDropGroup(element, sanity, elementSet, elementsMap) {
    if (!element.getAttribute("data-sanity") || element.getAttribute("data-sanity-drag-disable") || !sanity || !isSanityNode(sanity) || !isSanityArrayPath(sanity.path)) return null;
    const targetDragGroup = element.getAttribute("data-sanity-drag-group"), group = [
        ...elementSet
    ].reduce((acc, el)=>{
        const elData = elementsMap.get(el), elDragDisabled = el.getAttribute("data-sanity-drag-disable"), elDragGroup = el.getAttribute("data-sanity-drag-group"), elHasSanityAttribution = el.getAttribute("data-sanity") !== null, sharedDragGroup = targetDragGroup !== null ? targetDragGroup === elDragGroup : !0;
        return (elData === null || elData === void 0 ? void 0 : elData.sanity) && !elDragDisabled && isSanityNode(elData.sanity) && sanityNodesExistInSameArray(sanity, elData.sanity) && sharedDragGroup && elHasSanityAttribution && acc.push(elData), acc;
    }, []);
    return group.length <= 1 ? null : group;
}
function createOverlayController(param) {
    let { handler, overlayElement, inFrame, inPopUp, optimisticActorReady } = param;
    let activated = !1;
    const elementIdMap = /* @__PURE__ */ new Map(), elementsMap = /* @__PURE__ */ new WeakMap(), elementSet = /* @__PURE__ */ new Set(), measureElements = /* @__PURE__ */ new WeakMap(), cursorMap = /* @__PURE__ */ new WeakMap();
    let ro, io, mo, activeDragSequence = !1, hoverStack = [];
    const getHoveredElement = ()=>hoverStack[hoverStack.length - 1];
    function addEventHandlers(el, handlers) {
        el.addEventListener("click", handlers.click, {
            capture: !0
        }), el.addEventListener("contextmenu", handlers.contextmenu, {
            capture: !0
        }), el.addEventListener("mousemove", handlers.mousemove, {
            once: !0,
            capture: !0
        }), el.addEventListener("mousedown", handlers.mousedown, {
            capture: !0
        });
    }
    function removeEventHandlers(el, handlers) {
        el.removeEventListener("click", handlers.click, {
            capture: !0
        }), el.removeEventListener("contextmenu", handlers.contextmenu, {
            capture: !0
        }), el.removeEventListener("mousemove", handlers.mousemove, {
            capture: !0
        }), el.removeEventListener("mousedown", handlers.mousedown, {
            capture: !0
        }), el.removeEventListener("mouseenter", handlers.mouseenter), el.removeEventListener("mouseleave", handlers.mouseleave);
    }
    function activateElement(param) {
        let { id, elements, handlers } = param;
        const { element, measureElement } = elements;
        addEventHandlers(element, handlers), ro.observe(measureElement), handler({
            type: "element/activate",
            id
        });
    }
    function deactivateElement(param) {
        let { id, elements, handlers } = param;
        const { element, measureElement } = elements;
        removeEventHandlers(element, handlers), ro.unobserve(measureElement), hoverStack = hoverStack.filter((el)=>el !== element), handler({
            type: "element/deactivate",
            id
        });
    }
    function setOverlayCursor(element) {
        if (!(!inFrame && !inPopUp || !optimisticActorReady)) for (const hoverstackElement of hoverStack){
            if (element === hoverstackElement) {
                var _elementsMap_get;
                const targetSanityData = (_elementsMap_get = elementsMap.get(element)) === null || _elementsMap_get === void 0 ? void 0 : _elementsMap_get.sanity;
                if (!targetSanityData || !isSanityNode(targetSanityData)) return;
                if (resolveDragAndDropGroup(element, targetSanityData, elementSet, elementsMap)) {
                    const existingCursor = element.style.cursor;
                    existingCursor && cursorMap.set(element, existingCursor), handler({
                        type: "overlay/setCursor",
                        element,
                        cursor: "move"
                    });
                    continue;
                }
            }
            restoreOverlayCursor(hoverstackElement);
        }
    }
    function restoreOverlayCursor(element) {
        const previousCursor = cursorMap.get(element);
        handler({
            type: "overlay/setCursor",
            element,
            cursor: previousCursor
        });
    }
    function registerElement(param) {
        let { type, elements, commonSanity, targets } = param;
        const { element, measureElement } = elements, eventHandlers = {
            click (event) {
                const target = event.target;
                if (element === getHoveredElement() && element.contains(target)) {
                    var _elementsMap_get;
                    inFrame && (event.preventDefault(), event.stopPropagation());
                    const sanity = (_elementsMap_get = elementsMap.get(element)) === null || _elementsMap_get === void 0 ? void 0 : _elementsMap_get.sanity;
                    sanity && !activeDragSequence && handler({
                        type: "element/click",
                        id,
                        sanity
                    });
                }
            },
            contextmenu (event) {
                var _commonSanity_path_split_pop;
                if (!("path" in commonSanity) || !inFrame && !inPopUp || !optimisticActorReady || !((_commonSanity_path_split_pop = commonSanity.path.split(".").pop()) === null || _commonSanity_path_split_pop === void 0 ? void 0 : _commonSanity_path_split_pop.includes("[_key=="))) return;
                const target = event.target;
                element === getHoveredElement() && element.contains(target) && ((inFrame || inPopUp) && (event.preventDefault(), event.stopPropagation()), handler({
                    type: "element/contextmenu",
                    id,
                    position: {
                        x: event.clientX,
                        y: event.clientY
                    },
                    sanity: commonSanity
                }));
            },
            mousedown (event) {
                var _elementsMap_get;
                if (event.preventDefault(), event.currentTarget !== hoverStack.at(-1) || element.getAttribute("data-sanity-drag-disable") || !inFrame && !inPopUp || !optimisticActorReady) return;
                const targetSanityData = (_elementsMap_get = elementsMap.get(element)) === null || _elementsMap_get === void 0 ? void 0 : _elementsMap_get.sanity;
                if (!targetSanityData || !isSanityNode(targetSanityData) || !isSanityArrayPath(targetSanityData.path)) return;
                const dragGroup = resolveDragAndDropGroup(element, commonSanity, elementSet, elementsMap);
                dragGroup && handleOverlayDrag({
                    element,
                    handler,
                    mouseEvent: event,
                    overlayGroup: dragGroup,
                    target: targetSanityData,
                    onSequenceStart: ()=>{
                        activeDragSequence = !0;
                    },
                    onSequenceEnd: ()=>{
                        setTimeout(()=>{
                            activeDragSequence = !1;
                        }, 250);
                    }
                });
            },
            mousemove (event) {
                eventHandlers.mouseenter(event);
                const el = event.currentTarget;
                el && (el.addEventListener("mouseenter", eventHandlers.mouseenter), el.addEventListener("mouseleave", eventHandlers.mouseleave));
            },
            mouseenter () {
                document.querySelector("vercel-live-feedback") && element.closest("[data-vercel-edit-info]") || element.closest("[data-vercel-edit-target]") || (hoverStack.push(element), handler({
                    type: "element/mouseenter",
                    id,
                    rect: getRect(element)
                }), setOverlayCursor(element));
            },
            mouseleave (e) {
                function leave() {
                    hoverStack.pop();
                    const hoveredElement = getHoveredElement();
                    if (handler({
                        type: "element/mouseleave",
                        id
                    }), hoveredElement) {
                        setOverlayCursor(hoveredElement);
                        const overlayElement2 = elementsMap.get(hoveredElement);
                        overlayElement2 && handler({
                            type: "element/mouseenter",
                            id: overlayElement2.id,
                            rect: getRect(hoveredElement)
                        });
                    }
                    restoreOverlayCursor(element);
                }
                function addDeferredLeave(el) {
                    const deferredLeave = (e2)=>{
                        const { relatedTarget: relatedTarget2 } = e2;
                        findOverlayElement(relatedTarget2) ? relatedTarget2 && isElementNode$1(relatedTarget2) && (el.removeEventListener("mouseleave", deferredLeave), addDeferredLeave(relatedTarget2)) : (el.removeEventListener("mouseleave", deferredLeave), leave());
                    };
                    el.addEventListener("mouseleave", deferredLeave);
                }
                const { relatedTarget } = e, container = findOverlayElement(relatedTarget), isInteractiveOverlayElement = overlayElement.contains(container);
                if (isElementNode$1(container) && isInteractiveOverlayElement) return addDeferredLeave(container);
                leave();
            }
        }, id = v4(), sanityNode = {
            type,
            id,
            elements,
            sanity: commonSanity,
            handlers: eventHandlers
        };
        elementSet.add(element), measureElements.set(measureElement, element), elementIdMap.set(id, element), elementsMap.set(element, sanityNode), io === null || io === void 0 ? void 0 : io.observe(element), handler({
            type: "element/register",
            elementType: type,
            id,
            element,
            rect: getRect(element),
            sanity: commonSanity,
            dragDisabled: !!element.getAttribute("data-sanity-drag-disable"),
            targets: targets.map((target)=>({
                    sanity: target.sanity,
                    element: target.elements.element
                }))
        }), activated && activateElement(sanityNode);
    }
    function updateElement(resolvedElement) {
        const { element } = resolvedElement.elements, overlayElement2 = elementsMap.get(element);
        overlayElement2 && (elementsMap.set(element, {
            ...overlayElement2,
            sanity: resolvedElement.commonSanity
        }), handler({
            type: "element/update",
            elementType: overlayElement2.type,
            id: overlayElement2.id,
            rect: getRect(element),
            sanity: resolvedElement.commonSanity,
            targets: resolvedElement.targets.map((target)=>({
                    sanity: target.sanity,
                    element: target.elements.element
                }))
        }));
    }
    function parseElements(node) {
        const sanityNodes = findSanityNodes(node);
        for (const sanityNode of sanityNodes){
            if (sanityNode.type === "group") {
                for (const target of sanityNode.targets){
                    const overlayElement2 = elementsMap.get(target.elements.element);
                    overlayElement2 && overlayElement2.type === "element" && unregisterElement(target.elements.element);
                }
                sanityNode.targets.length === 0 && unregisterElement(sanityNode.elements.element);
            }
            if (!sanityNode.commonSanity) continue;
            const { element } = sanityNode.elements;
            elementsMap.has(element) ? updateElement(sanityNode) : registerElement(sanityNode);
        }
    }
    function unregisterElement(element) {
        const overlayElement2 = elementsMap.get(element);
        if (overlayElement2) {
            const { id, handlers } = overlayElement2;
            removeEventHandlers(element, handlers), ro.unobserve(element), elementsMap.delete(element), elementSet.delete(element), elementIdMap.delete(id), handler({
                type: "element/unregister",
                id
            });
        }
    }
    function handleMutation(mutations) {
        var _elementsMap_get;
        let mutationWasInScope = !1;
        for (const mutation of mutations){
            const { target, type } = mutation, node = type === "characterData" ? target.parentElement : target;
            if (!(node === overlayElement || overlayElement.contains(node)) && (mutationWasInScope = !0, isElementNode$1(node))) {
                var _node_parentElement;
                const possibleGroupParent = ((_node_parentElement = node.parentElement) === null || _node_parentElement === void 0 ? void 0 : _node_parentElement.closest("[data-sanity-edit-group]")) || null, updateNodeTarget = isElementNode$1(possibleGroupParent) ? possibleGroupParent : node;
                parseElements({
                    childNodes: [
                        updateNodeTarget
                    ]
                });
            }
        }
        if (mutationWasInScope) for (const element of elementSet)element.isConnected || unregisterElement(element), ((_elementsMap_get = elementsMap.get(element)) === null || _elementsMap_get === void 0 ? void 0 : _elementsMap_get.type) === "group" && !element.hasAttribute("data-sanity-edit-group") && unregisterElement(element);
    }
    function updateRect(el) {
        const overlayElement2 = elementsMap.get(el);
        overlayElement2 && handler({
            type: "element/updateRect",
            id: overlayElement2.id,
            rect: getRect(el)
        });
    }
    function handleResize(entries) {
        for (const entry of entries){
            const target = entry.target;
            if (isElementNode$1(target)) {
                const element = measureElements.get(target);
                if (!element) return;
                updateRect(element);
            }
        }
    }
    function handleIntersection(entries) {
        if (activated) for (const entry of entries){
            const { target } = entry, match = isElementNode$1(target) && elementsMap.get(target);
            match && (entry.isIntersecting ? activateElement(match) : deactivateElement(match));
        }
    }
    function handleBlur(event) {
        const element = findOverlayElement(event.target);
        if (element) {
            element.dataset.sanityOverlayElement === "capture" && (event.preventDefault(), event.stopPropagation());
            return;
        }
        hoverStack = [], handler({
            type: "overlay/blur"
        });
    }
    function handleExclusivePluginClosed() {
        hoverStack = [], handler({
            type: "overlay/reset-mouse-state"
        });
    }
    function handleWindowResize() {
        for (const element of elementSet)updateRect(element);
    }
    function handleKeydown(event) {
        event.key === "Escape" && (hoverStack = [], handler({
            type: "overlay/blur"
        }));
    }
    function handleWindowScroll(event) {
        const { target } = event;
        if (!(target === window.document || !isElementNode$1(target))) for (const element of elementSet)target.contains(element) && updateRect(element);
    }
    function activate() {
        activated || (io = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        }), elementSet.forEach((element)=>io.observe(element)), handler({
            type: "overlay/activate"
        }), activated = !0);
    }
    function deactivate() {
        activated && (io === null || io === void 0 ? void 0 : io.disconnect(), elementSet.forEach((element)=>{
            const overlayElement2 = elementsMap.get(element);
            overlayElement2 && deactivateElement(overlayElement2);
        }), handler({
            type: "overlay/deactivate"
        }), activated = !1);
    }
    function handleHeaderClick(event) {
        var _elementsMap_get;
        const { id } = event.detail, element = elementIdMap.get(id);
        if (!element) return;
        const sanity = (_elementsMap_get = elementsMap.get(element)) === null || _elementsMap_get === void 0 ? void 0 : _elementsMap_get.sanity;
        sanity && handler({
            type: "element/click",
            id,
            sanity
        });
    }
    function destroy() {
        window.removeEventListener("click", handleBlur), window.removeEventListener("contextmenu", handleBlur), window.removeEventListener("sanity-overlay/exclusive-plugin-closed", handleExclusivePluginClosed), window.removeEventListener("sanity-overlay/label-click", handleHeaderClick), window.removeEventListener("keydown", handleKeydown), window.removeEventListener("resize", handleWindowResize), window.removeEventListener("scroll", handleWindowScroll), mo.disconnect(), ro.disconnect(), elementSet.forEach((element)=>{
            unregisterElement(element);
        }), elementIdMap.clear(), elementSet.clear(), hoverStack = [], deactivate();
    }
    function create() {
        window.addEventListener("click", handleBlur), window.addEventListener("contextmenu", handleBlur), window.addEventListener("sanity-overlay/exclusive-plugin-closed", handleExclusivePluginClosed), window.addEventListener("sanity-overlay/label-click", handleHeaderClick), window.addEventListener("keydown", handleKeydown), window.addEventListener("resize", handleWindowResize), window.addEventListener("scroll", handleWindowScroll, {
            capture: !0,
            passive: !0
        }), ro = new ResizeObserver(handleResize), mo = new MutationObserver(handleMutation), mo.observe(document.body, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        }), parseElements(document.body), activate();
    }
    return window.document.fonts.ready.then(()=>{
        for (const element of elementSet)updateRect(element);
    }), create(), {
        activate,
        deactivate,
        destroy
    };
}
const SharedStateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
 //# sourceMappingURL=SharedStateContext.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/PointerEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InsertMenu",
    ()=>InsertMenu,
    "InsertMenuPopover",
    ()=>InsertMenuPopover,
    "PointerEvents",
    ()=>PointerEvents,
    "PopoverBackground",
    ()=>PopoverBackground,
    "PopoverPortal",
    ()=>PopoverPortal,
    "TelemetryContext",
    ()=>TelemetryContext,
    "events",
    ()=>events,
    "getNodeIcon",
    ()=>getNodeIcon,
    "useTelemetry",
    ()=>useTelemetry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/react-compiler-runtime@1.0.0_react@19.0.0/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$insert$2d$menu$40$2$2e$1$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$reac_9b13773aad83753c128722984708b020$2f$node_modules$2f40$sanity$2f$insert$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+insert-menu@2.1.0_@emotion+is-prop-valid@1.2.2_@sanity+types@4.22.0_@types+reac_9b13773aad83753c128722984708b020/node_modules/@sanity/insert-menu/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+ui@3.1.11_@emotion+is-prop-valid@1.2.2_react-dom@19.0.0_react@19.0.0__react-is@_e999df3d4a862f99f5c43858f72aab2f/node_modules/@sanity/ui/dist/_chunks-es/_visual-editing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/styled-components@6.1.19_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+icons@3.7.4_react@19.0.0/node_modules/@sanity/icons/dist/index.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  overflow-y: scroll;\n  overscroll-behavior: contain;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &:before {\n    content: '';\n    display: block;\n    height: calc(100% + 1px);\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: -1;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  height: 100%;\n  inset: 0;\n  pointer-events: all;\n  position: fixed;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ",
        "\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: transparent;\n  height: 100%;\n  inset: 0;\n  position: absolute;\n  width: 100%;\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
;
;
;
;
;
;
;
function getNodeIcon(option) {
    if (!option) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeIcon"], {});
    if (option.type === "string") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringIcon"], {});
    if (option.type === "number") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberIcon"], {});
    const { value: node } = option;
    if ("icon" in option && option.icon) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        dangerouslySetInnerHTML: {
            __html: option.icon
        }
    });
    const { type } = node;
    if (type === "string") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringIcon"], {});
    if (type === "boolean") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircleIcon"], {});
    if (type === "number") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberIcon"], {});
    if (type === "array" || type === "union") return (Array.isArray(node.of) ? node.of : [
        node.of
    ]).some((n)=>"name" in n && n.name === "block") ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockContentIcon"], {}) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThListIcon"], {});
    if (type === "object") {
        if (option.name === "image") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageIcon"], {});
        if (option.name === "block") return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringIcon"], {});
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeIcon"], {});
}
const scrollBlockStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject()), PortalContainer = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(_templateObject1(), (props)=>props.$blockScroll && scrollBlockStyles), PortalBackground = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(_templateObject2()), PopoverPortal = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    let t0;
    return $[0] !== props ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverBackground, {
            ...props
        })
    }), $[0] = props, $[1] = t0) : t0 = $[1], t0;
}, PopoverBackground = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), { children, onDismiss, setBoundaryElement, blockScroll: t0 } = props, blockScroll = t0 === void 0 ? !0 : t0, handleClick = _temp$1;
    let t1;
    $[0] !== onDismiss ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalBackground, {
        onMouseDownCapture: ()=>{
            onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
        }
    }), $[0] = onDismiss, $[1] = t1) : t1 = $[1];
    let t2;
    return $[2] !== blockScroll || $[3] !== children || $[4] !== setBoundaryElement || $[5] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(PortalContainer, {
        "data-sanity-overlay-element": !0,
        ref: setBoundaryElement,
        onClick: handleClick,
        $blockScroll: blockScroll,
        children: [
            t1,
            children
        ]
    }), $[2] = blockScroll, $[3] = children, $[4] = setBoundaryElement, $[5] = t1, $[6] = t2) : t2 = $[6], t2;
};
function _temp$1(event) {
    event.stopPropagation();
}
function defineEvent(options) {
    return {
        type: "log",
        name: options.name,
        version: options.version,
        description: options.description,
        maxSampleRate: options.maxSampleRate,
        schema: void 0
    };
}
const events = {
    "Visual Editing Drag Sequence Completed": defineEvent({
        name: "Visual Editing Drag Sequence Completed",
        description: "An array is successfully reordered using drag and drop.",
        version: 1
    }),
    "Visual Editing Drag Minimap Enabled": defineEvent({
        name: "Visual Editing Drag Minimap Enabled",
        description: "The zoomed-out minimap view is enabled during a drag sequence.",
        version: 1
    }),
    "Visual Editing Context Menu Item Removed": defineEvent({
        name: "Visual Editing Context Menu Item Removed",
        description: "An item is removed using the Context Menu.",
        version: 1
    }),
    "Visual Editing Context Menu Item Duplicated": defineEvent({
        name: "Visual Editing Context Menu Item Duplicated",
        description: "An item is duplicated using the Context Menu.",
        version: 1
    }),
    "Visual Editing Context Menu Item Moved": defineEvent({
        name: "Visual Editing Context Menu Item Moved",
        description: "An item is moved using the Context Menu.",
        version: 1
    }),
    "Visual Editing Context Menu Item Inserted": defineEvent({
        name: "Visual Editing Context Menu Item Inserted",
        description: "An item is inserted using the Context Menu.",
        version: 1
    }),
    "Visual Editing Insert Menu Item Inserted": defineEvent({
        name: "Visual Editing Insert Menu Item Inserted",
        description: "An item is inserted using the Insert Menu.",
        version: 1
    }),
    "Visual Editing Overlay Clicked": defineEvent({
        name: "Visual Editing Overlay Clicked",
        description: "An Overlay is clicked.",
        version: 1
    })
}, TelemetryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useTelemetry() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TelemetryContext);
    if (!context) throw new Error("Telemetry context is missing");
    return context;
}
const labels = {
    "insert-menu.filter.all-items": "All",
    "insert-menu.search.no-results": "No results",
    "insert-menu.search.placeholder": "Filter types\u2026",
    "insert-menu.toggle-grid-view.tooltip": "Toggle grid view",
    "insert-menu.toggle-list-view.tooltip": "Toggle list view"
}, InsertMenu = (props)=>{
    var _node_options, _node_options1, _node_options2, _insertMenuOptions_views;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { node, onSelect } = props;
    let t0;
    $[0] !== ((_node_options = node.options) === null || _node_options === void 0 ? void 0 : _node_options.insertMenu) ? (t0 = ((_node_options1 = node.options) === null || _node_options1 === void 0 ? void 0 : _node_options1.insertMenu) || {}, $[0] = (_node_options2 = node.options) === null || _node_options2 === void 0 ? void 0 : _node_options2.insertMenu, $[1] = t0) : t0 = $[1];
    const insertMenuOptions = t0;
    let t1;
    $[2] !== insertMenuOptions.views ? (t1 = (_insertMenuOptions_views = insertMenuOptions.views) === null || _insertMenuOptions_views === void 0 ? void 0 : _insertMenuOptions_views.map(_temp), $[2] = insertMenuOptions.views, $[3] = t1) : t1 = $[3];
    const views = t1;
    let t2;
    $[4] !== node.of ? (t2 = node.of.map(_temp2), $[4] = node.of, $[5] = t2) : t2 = $[5];
    let t3;
    return $[6] !== insertMenuOptions || $[7] !== onSelect || $[8] !== t2 || $[9] !== views ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$insert$2d$menu$40$2$2e$1$2e$0_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$reac_9b13773aad83753c128722984708b020$2f$node_modules$2f40$sanity$2f$insert$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertMenu"], {
        ...insertMenuOptions,
        labels,
        schemaTypes: t2,
        onSelect,
        views
    }), $[6] = insertMenuOptions, $[7] = onSelect, $[8] = t2, $[9] = views, $[10] = t3) : t3 = $[10], t3;
}, InsertMenuPopover = (props)=>{
    var _views, _node_options;
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { node, onDismiss, onSelect, referenceElement } = props;
    let t0;
    $[0] !== node || $[1] !== onSelect ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InsertMenu, {
        node,
        onSelect
    }), $[0] = node, $[1] = onSelect, $[2] = t0) : t0 = $[2];
    const popoverContent = t0, width = ((_views = (((_node_options = node.options) === null || _node_options === void 0 ? void 0 : _node_options.insertMenu) || {}).views) === null || _views === void 0 ? void 0 : _views.some(_temp3)) ? 0 : void 0;
    let t1;
    $[3] === Symbol.for("react.memo_cache_sentinel") ? (t1 = [
        "bottom"
    ], $[3] = t1) : t1 = $[3];
    let t2;
    $[4] !== popoverContent || $[5] !== referenceElement || $[6] !== width ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        animate: !0,
        constrainSize: !0,
        content: popoverContent,
        fallbackPlacements: t1,
        open: !0,
        placement: "top",
        preventOverflow: !0,
        referenceElement,
        width
    }), $[4] = popoverContent, $[5] = referenceElement, $[6] = width, $[7] = t2) : t2 = $[7];
    let t3;
    return $[8] !== onDismiss || $[9] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverPortal, {
        onDismiss,
        children: t2
    }), $[8] = onDismiss, $[9] = t2, $[10] = t3) : t3 = $[10], t3;
};
function _temp(view) {
    return view.name === "grid" ? {
        ...view,
        previewImageUrl: (name)=>{
            var _view_previewImageUrls;
            return (_view_previewImageUrls = view.previewImageUrls) === null || _view_previewImageUrls === void 0 ? void 0 : _view_previewImageUrls[name];
        }
    } : view;
}
function _temp2(type) {
    return {
        ...type,
        icon: getNodeIcon(type)
    };
}
function _temp3(view) {
    return view.name === "grid";
}
const PointerEvents = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    let children, rest, style;
    $[0] !== t0 ? ({ children, style, ...rest } = t0, $[0] = t0, $[1] = children, $[2] = rest, $[3] = style) : (children = $[1], rest = $[2], style = $[3]);
    let t1;
    $[4] !== style ? (t1 = {
        ...style,
        pointerEvents: "all"
    }, $[4] = style, $[5] = t1) : t1 = $[5];
    let t2;
    return $[6] !== children || $[7] !== rest || $[8] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: t1,
        "data-sanity-overlay-element": !0,
        ...rest,
        children
    }), $[6] = children, $[7] = rest, $[8] = t1, $[9] = t2) : t2 = $[9], t2;
};
;
 //# sourceMappingURL=PointerEvents.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/optimistic/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDatasetMutator",
    ()=>createDatasetMutator,
    "createDocumentMutator",
    ()=>createDocumentMutator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/_unstable_machine.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/actors/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/log-3eec9346.development.esm.js [app-client] (ecmascript) <export e as enqueueActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/xstate.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/assign-ef1b62f6.development.esm.js [app-client] (ecmascript) <export a as assign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export s as stopChild>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/log-3eec9346.development.esm.js [app-client] (ecmascript) <export a as emit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)");
;
;
;
;
const createDocumentMutator = (comlink)=>{
    const fetchSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPromise"])(async (param)=>{
        let { input, signal } = param;
        const { id } = input, { snapshot } = await comlink.fetch("visual-editing/fetch-snapshot", {
            documentId: id
        }, {
            signal
        });
        return snapshot;
    }), submitMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromPromise"])(async (param)=>{
        let { input } = param;
        const { transactions } = input;
        for (const transaction of transactions){
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityEncoder"].encodeTransaction(transaction);
            return comlink.post("visual-editing/mutate", data);
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentMutatorMachine"].provide({
        actions: {
            "send sync event to parent": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__enqueueActions$3e$__["enqueueActions"])((param)=>{
                let { enqueue } = param;
                enqueue.sendParent((param)=>{
                    let { context } = param;
                    return {
                        type: "sync",
                        id: context.id,
                        document: context.remote
                    };
                }), enqueue.emit((param)=>{
                    let { context } = param;
                    return {
                        type: "ready",
                        snapshot: context.local
                    };
                });
            })
        },
        actors: {
            "fetch remote snapshot": fetchSnapshot,
            "submit mutations as transactions": submitMutations
        }
    });
}, datasetMutatorMachine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
    types: {},
    actions: {
        "emit sync event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])((param)=>{
            let { event } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "sync"), event;
        }),
        "emit mutation event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])((param)=>{
            let { event } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "mutation"), event;
        }),
        "emit rebased event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])((param)=>{
            let { event } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                "rebased.local",
                "rebased.remote"
            ]), event;
        }),
        "emit pristine event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$log$2d$3eec9346$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__emit$3e$__["emit"])((param)=>{
            let { event } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, [
                "pristine"
            ]), event;
        }),
        "add document actor": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            documents: (param)=>{
                let { context, event, spawn } = param;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "observe");
                const id = event.documentId;
                return context.documents[id] ? context.documents : {
                    ...context.documents,
                    [id]: spawn("documentMutatorMachine", {
                        input: {
                            id,
                            client: context.client,
                            sharedListener: context.sharedListener || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSharedListener"])(context.client)
                        },
                        id
                    })
                };
            }
        }),
        "stop remote snapshot": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__stopChild$3e$__["stopChild"])((param)=>{
            let { context, event } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "unobserve"), context.documents[event.documentId];
        }),
        "remove remote snapshot from context": (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$assign$2d$ef1b62f6$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            documents: (param)=>{
                let { context, event } = param;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(event, "unobserve"), !context.documents[event.documentId]) return context.documents;
                const { [event.documentId]: _, ...documents } = context.documents;
                return documents;
            }
        })
    },
    actors: {
        documentMutatorMachine: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentMutatorMachine"]
    }
}).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBsD2BjAhsgIhgrgLZgB2ALgMTICWsZpA2gAwC6ioADqrNWdaiXYgAHogC0ADgBMAOgkA2ACyKArBICcTdfKXSANCACeiFQHYZpgMxWV800yYqp6gIyn5AXw8G0WXAWJyCnwSGjpGViEuHj4BIVEEKUt5OSlFU1smFwkFW0sDY0T1GRUXRXkXKVN7HSYJJkUvHwxsPHQiUjIZDgAnWj4SMApCfDJMemY2JBBo3n5BaYSXeVlbKRUsiXdFSxcXfKNERSqZTbr1zVMJNyaQX1aAzpkIah6yQwp0VEJCXkmo7hzOKLRDLFwyFxaSzXKTOKQudSKCQFRDOczqCSWJjwjbHCQqRFebwgEioCBwIT3fztQJkAExebxcQuFEIZaWGRIrF7dSXKTyFSNYlUtodcjdPp0aiDelAhagBLpVmWAmc46mNwSZTyLQuFS3EWPcUvN6FTiA2LykSoq6c6wbCqVUzparKioyRFVfkq1zqNSWIkeIA */ id: "dataset-mutator",
    context: (param)=>{
        let { input } = param;
        return {
            documents: {},
            client: input.client,
            sharedListener: input.sharedListener
        };
    },
    on: {
        sync: {
            actions: [
                "emit sync event"
            ]
        },
        mutation: {
            actions: [
                "emit mutation event"
            ]
        },
        "rebased.*": {
            actions: [
                "emit rebased event"
            ]
        },
        pristine: {
            actions: [
                "emit pristine event"
            ]
        },
        observe: {
            actions: [
                "add document actor"
            ]
        },
        unobserve: {
            actions: [
                "stop remote snapshot",
                "remove remote snapshot from context"
            ]
        }
    },
    initial: "pristine",
    states: {
        pristine: {}
    }
}), createDatasetMutator = (comlink)=>datasetMutatorMachine.provide({
        actors: {
            documentMutatorMachine: createDocumentMutator(comlink)
        }
    });
;
 //# sourceMappingURL=index.js.map
}),
"[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/react/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualEditing",
    ()=>VisualEditing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/react-compiler-runtime@1.0.0_react@19.0.0/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$0$2e$1_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+presentation-comlink@2.0.1_@sanity+client@7.13.2_@sanity+types@4.22.0_@types+react@19.0.1_/node_modules/@sanity/presentation-comlink/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/next@15.5.9_@babel+core@7.28.5_@playwright+test@1.57.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+client@7.13.2_debug@4.4.3/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+ui@3.1.11_@emotion+is-prop-valid@1.2.2_react-dom@19.0.0_react@19.0.0__react-is@_e999df3d4a862f99f5c43858f72aab2f/node_modules/@sanity/ui/dist/_chunks-es/_visual-editing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/styled-components@6.1.19_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/SharedStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+mutate@0.11.0-canary.4_xstate@5.25.0/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/PointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+icons@3.7.4_react@19.0.0/node_modules/@sanity/icons/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+ui@3.1.11_@emotion+is-prop-valid@1.2.2_react-dom@19.0.0_react@19.0.0__react-is@_e999df3d4a862f99f5c43858f72aab2f/node_modules/@sanity/ui/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$2$2e$0$2e$26_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing-csm@2.0.26_@sanity+client@7.13.2_@sanity+types@4.22.0_@types+react@19.0.1__typescript@5.9.3/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+comlink@4.0.1/node_modules/@sanity/comlink/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__createActor$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/xstate@5.25.0/node_modules/xstate/dist/raise-235fa0c7.development.esm.js [app-client] (ecmascript) <export c as createActor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/_chunks-es/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$ReplaySubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/Subject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/observable/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$optimistic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/projects/masterthepixel/node_modules/.pnpm/@sanity+visual-editing@4.0.3_@emotion+is-prop-valid@1.2.2_@sanity+client@7.13.2_@sanity_dc52865a9402a3b2b7ef4b545655571f/node_modules/@sanity/visual-editing/dist/optimistic/index.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background-color: var(--overlay-bg);\n  border-radius: 3px;\n  pointer-events: none;\n  position: absolute;\n  will-change: transform;\n  box-shadow: var(--overlay-box-shadow);\n  transition: none;\n\n  --overlay-bg: transparent;\n  --overlay-box-shadow: inset 0 0 0 1px transparent;\n\n  [data-overlays] & {\n    --overlay-bg: color-mix(in srgb, transparent 95%, var(--card-focus-ring-color));\n    --overlay-box-shadow: inset 0 0 0 2px\n      color-mix(in srgb, transparent 50%, var(--card-focus-ring-color));\n  }\n\n  [data-fading-out] & {\n    transition:\n      box-shadow 1550ms,\n      background-color 1550ms;\n\n    --overlay-bg: rgba(0, 0, 255, 0);\n    --overlay-box-shadow: inset 0 0 0 1px transparent;\n  }\n\n  &[data-focused] {\n    --overlay-box-shadow: inset 0 0 0 1px var(--card-focus-ring-color);\n  }\n\n  &[data-hovered]:not([data-focused]) {\n    transition: none;\n    --overlay-box-shadow: inset 0 0 0 2px var(--card-focus-ring-color);\n  }\n\n  /* [data-unmounted] & {\n    --overlay-box-shadow: inset 0 0 0 1px var(--card-focus-ring-color);\n  } */\n\n  :link {\n    text-decoration: none;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  bottom: 100%;\n  cursor: pointer;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n\n  [data-hovered]:not([data-menu-open]) & {\n    pointer-events: all;\n  }\n\n  [data-flipped] & {\n    bottom: auto;\n    top: 100%;\n  }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  top: 100%;\n  cursor: pointer;\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n\n  gap: 4px;\n  padding: 4px 0;\n  flex-wrap: wrap;\n\n  [data-hovered]:not([data-menu-open]) & {\n    pointer-events: all;\n  }\n\n  [data-flipped] & {\n    top: calc(100% + 2rem);\n  }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: -0.5rem;\n\n  [data-hovered]:not([data-menu-open]) & {\n    pointer-events: all;\n  }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  bottom: 100%;\n  cursor: pointer;\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n\n  [data-hovered]:not([data-menu-open]) & {\n    pointer-events: all;\n  }\n\n  [data-flipped] & {\n    bottom: auto;\n    top: 100%;\n  }\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  cursor: pointer;\n  background-color: var(--card-focus-ring-color);\n  right: 0;\n  border-radius: 3px;\n\n  & [data-ui='Text'] {\n    color: #fff;\n    white-space: nowrap;\n  }\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  align-items: center;\n  background-color: var(--card-focus-ring-color);\n  right: 0;\n  border-radius: 3px;\n  & [data-ui='Text'],\n  & [data-sanity-icon] {\n    color: #fff;\n    white-space: nowrap;\n  }\n"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  inset: 0;\n  pointer-events: all;\n"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  --drag-preview-opacity: 0.98;\n  --drag-preview-skeleton-stroke: #ffffff;\n\n  @media (prefers-color-scheme: dark) {\n    --drag-preview-skeleton-stroke: #383d51;\n  }\n\n  position: fixed;\n  display: grid;\n  transform: ",
        ";\n  width: ",
        ";\n  height: ",
        ";\n  z-index: 9999999;\n  opacity: var(--drag-preview-opacity);\n  cursor: move;\n\n  .drag-preview-content-wrapper {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    container-type: inline-size;\n  }\n\n  [data-ui='card'] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n\n  .drag-preview-skeleton {\n    position: absolute;\n    inset: 0;\n\n    rect {\n      stroke: var(--drag-preview-skeleton-stroke);\n    }\n  }\n\n  .drag-preview-handle {\n    position: absolute;\n    top: 4cqmin;\n    left: 4cqmin;\n    width: 6cqmin;\n    fill: var(--drag-preview-handle-fill);\n  }\n"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;\n  bottom: 2rem;\n  left: 2rem;\n"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background-color: transparent;\n  direction: ltr;\n  inset: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: ",
        ";\n"
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const History = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { comlink, history } = props;
    let t0, t1;
    $[0] !== comlink || $[1] !== history ? (t0 = ()=>comlink === null || comlink === void 0 ? void 0 : comlink.on("presentation/navigate", (data)=>{
            history === null || history === void 0 ? void 0 : history.update(data);
        }), t1 = [
        comlink,
        history
    ], $[0] = comlink, $[1] = history, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2, t3;
    return $[4] !== comlink || $[5] !== history ? (t2 = ()=>{
        if (history) return history.subscribe((update)=>{
            update.title = update.title || document.title, comlink === null || comlink === void 0 ? void 0 : comlink.post("visual-editing/navigate", update);
        });
    }, t3 = [
        comlink,
        history
    ], $[4] = comlink, $[5] = history, $[6] = t2, $[7] = t3) : (t2 = $[6], t3 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3), null;
}, Meta = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), { comlink } = props;
    let t0, t1;
    return $[0] !== comlink ? (t0 = ()=>{
        const sendMeta = ()=>{
            comlink.post("visual-editing/meta", {
                title: document.title
            });
        }, observer = new MutationObserver((t2)=>{
            const [mutation] = t2;
            mutation.target.nodeName === "TITLE" && sendMeta();
        });
        return observer.observe(document.head, {
            subtree: !0,
            characterData: !0,
            childList: !0
        }), sendMeta(), ()=>observer.disconnect();
    }, t1 = [
        comlink
    ], $[0] = comlink, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
};
function getReferenceNodeAndInsertPosition(position) {
    if (position) {
        const { top, right, bottom, left } = position;
        if (left || top) return {
            node: (left !== null && left !== void 0 ? left : top).sanity,
            position: "after"
        };
        if (right || bottom) return {
            node: (right !== null && right !== void 0 ? right : bottom).sanity,
            position: "before"
        };
    }
}
function useDragEndEvents() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), { getDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocuments"])();
    let t0, t1;
    $[0] !== getDocument ? (t0 = ()=>{
        const handler = (e)=>{
            const { insertPosition, target, preventInsertDefault } = e.detail;
            if (preventInsertDefault) return;
            const reference = getReferenceNodeAndInsertPosition(insertPosition);
            if (reference) {
                const doc = getDocument(target.id), { node, position } = reference, { key: targetKey, hasExplicitKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayItemKeyAndParentPath"])(target), { path: arrayPath, key: referenceItemKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayItemKeyAndParentPath"])(node);
                arrayPath && referenceItemKey && referenceItemKey !== targetKey && doc.patch(async (t22)=>{
                    const { getSnapshot } = t22, snapshot = await getSnapshot(), elementValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(snapshot, target.path);
                    return hasExplicitKey ? [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])({
                            _key: targetKey
                        })),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(elementValue, position, {
                            _key: referenceItemKey
                        }))
                    ] : [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])(~~targetKey)),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(arrayPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$mutate$40$0$2e$11$2e$0$2d$canary$2e$4_xstate$40$5$2e$25$2e$0$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(elementValue, position, referenceItemKey > targetKey ? ~~referenceItemKey - 1 : ~~referenceItemKey))
                    ];
                });
            }
        };
        return window.addEventListener("sanity/dragEnd", handler), ()=>{
            window.removeEventListener("sanity/dragEnd", handler);
        };
    }, t1 = [
        getDocument
    ], $[0] = getDocument, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const dispatchDragEndEvent = _temp$9;
    let t2;
    return $[3] === Symbol.for("react.memo_cache_sentinel") ? (t2 = {
        dispatchDragEndEvent
    }, $[3] = t2) : t2 = $[3], t2;
}
function _temp$9(event) {
    const customEvent = new CustomEvent("sanity/dragEnd", {
        detail: event,
        cancelable: !0
    });
    window.dispatchEvent(customEvent);
}
const SchemaContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useSchema() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SchemaContext);
    if (!context) throw new Error("Schema context is missing");
    return context;
}
function getArrayRemoveAction(node, doc) {
    if (!node.type) throw new Error("Node type is missing");
    return ()=>doc.patch(async (param)=>{
            let { getSnapshot } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayRemovePatches"])(node, await getSnapshot());
        });
}
function getArrayInsertAction(node, doc, insertType, position) {
    if (!node.type) throw new Error("Node type is missing");
    return ()=>doc.patch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayInsertPatches"])(node, insertType, position));
}
function getDuplicateAction(node, doc) {
    if (!node.type) throw new Error("Node type is missing");
    return ()=>doc.patch(async (param)=>{
            let { getSnapshot } = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayDuplicatePatches"])(node, await getSnapshot());
        });
}
function getContextMenuItems(context) {
    const { node, field, parent, doc } = context;
    return (field === null || field === void 0 ? void 0 : field.type) === "arrayItem" ? getContextMenuArrayItems({
        node,
        field,
        doc
    }) : (parent === null || parent === void 0 ? void 0 : parent.type) === "union" ? getContextMenuUnionItems({
        node,
        parent,
        doc
    }) : Promise.resolve([]);
}
function getDuplicateItem(context) {
    const { node, doc } = context;
    return doc ? [
        {
            type: "action",
            label: "Duplicate",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyIcon"],
            action: getDuplicateAction(node, doc),
            telemetryEvent: "Visual Editing Context Menu Item Duplicated"
        }
    ] : [];
}
function getRemoveItems(context) {
    const { node, doc } = context;
    return doc ? [
        {
            type: "action",
            label: "Remove",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveIcon"],
            action: getArrayRemoveAction(node, doc),
            telemetryEvent: "Visual Editing Context Menu Item Removed"
        }
    ] : [];
}
async function getMoveItems(context) {
    let withDivider = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const { node, doc } = context;
    if (!doc) return [];
    const items = [], groupItems = [], [moveUpPatches, moveDownPatches, moveFirstPatches, moveLastPatches] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "previous"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "next"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "first"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayMovePatches"])(node, doc, "last")
    ]);
    return moveFirstPatches.length && groupItems.push({
        type: "action",
        label: "To top",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublishIcon"],
        action: ()=>doc.patch(moveFirstPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), moveUpPatches.length && groupItems.push({
        type: "action",
        label: "Up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowUpIcon"],
        action: ()=>doc.patch(moveUpPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), moveDownPatches.length && groupItems.push({
        type: "action",
        label: "Down",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDownIcon"],
        action: ()=>doc.patch(moveDownPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), moveLastPatches.length && groupItems.push({
        type: "action",
        label: "To bottom",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnpublishIcon"],
        action: ()=>doc.patch(moveLastPatches),
        telemetryEvent: "Visual Editing Context Menu Item Moved"
    }), groupItems.length && (items.push({
        type: "group",
        label: "Move",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortIcon"],
        items: groupItems
    }), withDivider && items.push({
        type: "divider"
    })), items;
}
async function getContextMenuArrayItems(context) {
    const { node, field, doc } = context, items = [];
    return items.push(...getDuplicateItem(context)), items.push(...getRemoveItems(context)), items.push(...await getMoveItems(context)), items.push({
        type: "action",
        label: "Insert before",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertAboveIcon"],
        action: getArrayInsertAction(node, doc, field.name, "before"),
        telemetryEvent: "Visual Editing Context Menu Item Inserted"
    }), items.push({
        type: "action",
        label: "Insert after",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertBelowIcon"],
        action: getArrayInsertAction(node, doc, field.name, "after"),
        telemetryEvent: "Visual Editing Context Menu Item Inserted"
    }), items;
}
const InsertMenuWrapper = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12), { label, parent, width, onSelect, boundaryElement } = props;
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = [
        "left-start",
        "right",
        "left",
        "right-end",
        "left-end",
        "bottom",
        "top"
    ], $[0] = t0) : t0 = $[0];
    let t1;
    $[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = [
        4,
        4,
        4,
        4
    ], $[1] = t1) : t1 = $[1];
    let t2;
    $[2] !== boundaryElement || $[3] !== width ? (t2 = {
        arrow: !1,
        constrainSize: !0,
        floatingBoundary: boundaryElement,
        padding: 0,
        placement: "right-start",
        fallbackPlacements: t0,
        preventOverflow: !0,
        width,
        __unstable_margins: t1
    }, $[2] = boundaryElement, $[3] = width, $[4] = t2) : t2 = $[4];
    let t3;
    $[5] !== onSelect || $[6] !== parent ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertMenu"], {
        node: parent,
        onSelect
    }), $[5] = onSelect, $[6] = parent, $[7] = t3) : t3 = $[7];
    let t4;
    return $[8] !== label || $[9] !== t2 || $[10] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuGroup"], {
        fontSize: 1,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertBelowIcon"],
        padding: 2,
        popover: t2,
        space: 2,
        text: label,
        children: t3
    }), $[8] = label, $[9] = t2, $[10] = t3, $[11] = t4) : t4 = $[11], t4;
};
async function getContextMenuUnionItems(context) {
    var _parent_options;
    const { doc, node, parent } = context, items = [];
    if (items.push(...getDuplicateItem(context)), items.push(...getRemoveItems(context)), items.push(...await getMoveItems(context)), (_parent_options = parent.options) === null || _parent_options === void 0 ? void 0 : _parent_options.insertMenu) {
        var _views;
        const width = ((_views = (parent.options.insertMenu || {}).views) === null || _views === void 0 ? void 0 : _views.some((view)=>view.name === "grid")) ? 0 : void 0;
        items.push({
            type: "custom",
            component: (param)=>{
                let { boundaryElement, sendTelemetry } = param;
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InsertMenuWrapper, {
                    label: "Insert before",
                    onSelect: (schemaType)=>{
                        getArrayInsertAction(node, doc, schemaType.name, "before")(), sendTelemetry("Visual Editing Context Menu Item Inserted", null);
                    },
                    parent,
                    width,
                    boundaryElement
                });
            }
        }), items.push({
            type: "custom",
            component: (param)=>{
                let { boundaryElement, sendTelemetry } = param;
                return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(InsertMenuWrapper, {
                    label: "Insert after",
                    onSelect: (schemaType)=>{
                        getArrayInsertAction(node, doc, schemaType.name, "after")(), sendTelemetry("Visual Editing Context Menu Item Inserted", null);
                    },
                    parent,
                    width,
                    boundaryElement
                });
            }
        });
    } else items.push({
        type: "group",
        label: "Insert before",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertAboveIcon"],
        items: parent.of.filter((item)=>item.type === "unionOption").map((t)=>({
                type: "action",
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeIcon"])(t),
                label: t.name === "block" ? "Paragraph" : t.title || t.name,
                action: getArrayInsertAction(node, doc, t.name, "before"),
                telemetryEvent: "Visual Editing Context Menu Item Inserted"
            }))
    }), items.push({
        type: "group",
        label: "Insert after",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InsertBelowIcon"],
        items: parent.of.filter((item)=>item.type === "unionOption").map((t)=>({
                type: "action",
                label: t.name === "block" ? "Paragraph" : t.title || t.name,
                icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeIcon"])(t),
                action: getArrayInsertAction(node, doc, t.name, "after"),
                telemetryEvent: "Visual Editing Context Menu Item Inserted"
            }))
    });
    return items;
}
const POPOVER_MARGINS = [
    -4,
    4,
    -4,
    4
];
function ContextMenuItem(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27), { node, onDismiss, boundaryElement } = props, sendTelemetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelemetry"])();
    let t0;
    $[0] !== node || $[1] !== onDismiss || $[2] !== sendTelemetry ? (t0 = ()=>{
        var _node_action;
        node.type === "action" && ((_node_action = node.action) === null || _node_action === void 0 ? void 0 : _node_action.call(node), onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss(), node.telemetryEvent && sendTelemetry(node.telemetryEvent, null));
    }, $[0] = node, $[1] = onDismiss, $[2] = sendTelemetry, $[3] = t0) : t0 = $[3];
    const onClick = t0;
    if (node.type === "divider") {
        let t1;
        return $[4] === Symbol.for("react.memo_cache_sentinel") ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuDivider"], {}), $[4] = t1) : t1 = $[4], t1;
    }
    if (node.type === "action") {
        const t1 = !node.action;
        let t2;
        return $[5] !== node.hotkeys || $[6] !== node.icon || $[7] !== node.label || $[8] !== onClick || $[9] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
            fontSize: 1,
            hotkeys: node.hotkeys,
            icon: node.icon,
            padding: 2,
            space: 2,
            text: node.label,
            disabled: t1,
            onClick
        }), $[5] = node.hotkeys, $[6] = node.icon, $[7] = node.label, $[8] = onClick, $[9] = t1, $[10] = t2) : t2 = $[10], t2;
    }
    if (node.type === "group") {
        const t1 = node.icon;
        let t2;
        $[11] === Symbol.for("react.memo_cache_sentinel") ? (t2 = {
            arrow: !1,
            constrainSize: !0,
            placement: "right-start",
            fallbackPlacements: [
                "left-start",
                "right",
                "left",
                "right-end",
                "left-end",
                "bottom",
                "top"
            ],
            preventOverflow: !0,
            __unstable_margins: POPOVER_MARGINS
        }, $[11] = t2) : t2 = $[11];
        const t3 = node.label;
        let t4;
        if ($[12] !== boundaryElement || $[13] !== node.items || $[14] !== onDismiss) {
            let t52;
            $[16] !== boundaryElement || $[17] !== onDismiss ? (t52 = (item, itemIndex)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContextMenuItem, {
                    node: item,
                    onDismiss,
                    boundaryElement
                }, itemIndex), $[16] = boundaryElement, $[17] = onDismiss, $[18] = t52) : t52 = $[18], t4 = node.items.map(t52), $[12] = boundaryElement, $[13] = node.items, $[14] = onDismiss, $[15] = t4;
        } else t4 = $[15];
        let t5;
        return $[19] !== node.icon || $[20] !== node.label || $[21] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuGroup"], {
            fontSize: 1,
            icon: t1,
            padding: 2,
            popover: t2,
            space: 2,
            text: t3,
            children: t4
        }), $[19] = node.icon, $[20] = node.label, $[21] = t4, $[22] = t5) : t5 = $[22], t5;
    }
    if (node.type === "custom") {
        const { component: Component } = node;
        let t1;
        return $[23] !== Component || $[24] !== boundaryElement || $[25] !== sendTelemetry ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            boundaryElement,
            sendTelemetry
        }), $[23] = Component, $[24] = boundaryElement, $[25] = sendTelemetry, $[26] = t1) : t1 = $[26], t1;
    }
    return null;
}
const ContextMenu = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43), { node, onDismiss, position: t0 } = props, { x, y } = t0, [boundaryElement, setBoundaryElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), { getField } = useSchema(), { getDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocuments"])();
    let t1;
    $[0] !== getField || $[1] !== node ? (t1 = getField(node), $[0] = getField, $[1] = node, $[2] = t1) : t1 = $[2];
    const { field, parent } = t1, title = (field === null || field === void 0 ? void 0 : field.title) || (field === null || field === void 0 ? void 0 : field.name) || "Unknown type", [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0);
    let t2, t3;
    $[3] !== field || $[4] !== getDocument || $[5] !== node || $[6] !== parent ? (t2 = ()=>{
        (async ()=>{
            const doc = getDocument(node.id);
            if (!doc) return;
            const items_0 = await getContextMenuItems({
                node,
                field,
                parent,
                doc
            });
            setItems(items_0);
        })();
    }, t3 = [
        field,
        node,
        parent,
        getDocument
    ], $[3] = field, $[4] = getDocument, $[5] = node, $[6] = parent, $[7] = t2, $[8] = t3) : (t2 = $[7], t3 = $[8]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    $[9] !== x || $[10] !== y ? (t4 = {
        getBoundingClientRect: ()=>({
                bottom: y,
                left: x,
                right: x,
                top: y,
                width: 0,
                height: 0
            })
    }, $[9] = x, $[10] = y, $[11] = t4) : t4 = $[11];
    const contextMenuReferenceElement = t4;
    let t5;
    $[12] !== field ? (t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeIcon"])(field), $[12] = field, $[13] = t5) : t5 = $[13];
    const icon = t5;
    let t6;
    $[14] === Symbol.for("react.memo_cache_sentinel") ? (t6 = {
        minWidth: 120,
        maxWidth: 160
    }, $[14] = t6) : t6 = $[14];
    let t7;
    $[15] !== icon || $[16] !== items ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        flex: "none",
        children: items ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            size: 1,
            children: icon
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
            size: 1
        })
    }), $[15] = icon, $[16] = items, $[17] = t7) : t7 = $[17];
    const t8 = items ? title : "Loading...";
    let t9;
    $[18] !== t8 ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        flex: 1,
        space: 2,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            size: 1,
            weight: "semibold",
            children: t8
        })
    }), $[18] = t8, $[19] = t9) : t9 = $[19];
    let t10;
    $[20] !== t7 || $[21] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        gap: 2,
        padding: 2,
        children: [
            t7,
            t9
        ]
    }), $[20] = t7, $[21] = t9, $[22] = t10) : t10 = $[22];
    let t11;
    $[23] !== boundaryElement || $[24] !== items || $[25] !== onDismiss ? (t11 = items && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuDivider"], {}),
            items.map((item, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContextMenuItem, {
                    node: item,
                    onDismiss,
                    boundaryElement
                }, i))
        ]
    }), $[23] = boundaryElement, $[24] = items, $[25] = onDismiss, $[26] = t11) : t11 = $[26];
    let t12;
    $[27] !== t10 || $[28] !== t11 ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
        style: t6,
        children: [
            t10,
            t11
        ]
    }), $[27] = t10, $[28] = t11, $[29] = t12) : t12 = $[29];
    const t13 = "".concat(x, "-").concat(y);
    let t14;
    $[30] !== x || $[31] !== y ? (t14 = {
        position: "absolute",
        left: x,
        top: y
    }, $[30] = x, $[31] = y, $[32] = t14) : t14 = $[32];
    let t15;
    $[33] !== t13 || $[34] !== t14 ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: t14
    }, t13), $[33] = t13, $[34] = t14, $[35] = t15) : t15 = $[35];
    let t16;
    $[36] !== contextMenuReferenceElement || $[37] !== t12 || $[38] !== t15 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        __unstable_margins: POPOVER_MARGINS,
        arrow: !1,
        open: !0,
        placement: "right-start",
        referenceElement: contextMenuReferenceElement,
        content: t12,
        children: t15
    }), $[36] = contextMenuReferenceElement, $[37] = t12, $[38] = t15, $[39] = t16) : t16 = $[39];
    let t17;
    return $[40] !== onDismiss || $[41] !== t16 ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverPortal"], {
        setBoundaryElement,
        onDismiss,
        children: t16
    }), $[40] = onDismiss, $[41] = t16, $[42] = t17) : t17 = $[42], t17;
};
function getLinkHref(href, referer) {
    try {
        const parsed = new URL(href, typeof location > "u" ? void 0 : location.origin);
        if (parsed.hash) {
            const hash = new URL(getLinkHref(parsed.hash.slice(1), referer));
            return "".concat(parsed.origin).concat(parsed.pathname).concat(parsed.search, "#").concat(hash.pathname).concat(hash.search);
        }
        return parsed.searchParams.set("preview", referer), parsed.toString();
    } catch (e) {
        return href;
    }
}
const PreviewSnapshotsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function usePreviewSnapshots() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PreviewSnapshotsContext);
    if (!context) throw new Error("Preview Snapshots context is missing");
    return context;
}
const isReactElementOverlayComponent = (component)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(component), Root$3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"])(_templateObject()), Actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"])(_templateObject1()), HUD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"])(_templateObject2()), MenuWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"])(_templateObject3()), Tab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"])(_templateObject4()), ActionOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"])(_templateObject5()), Labels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"])(_templateObject6()), ExclusivePluginContainer = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(_templateObject7());
function createIntentLink(node) {
    const { id, type, path, baseUrl, tool, workspace, perspective } = node, [url, search] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEditUrl"])({
        baseUrl,
        workspace,
        tool,
        type,
        id,
        path: path ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$2d$csm$40$2$2e$0$2e$26_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$5f$typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pathToUrlString"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].fromString(path)) : []
    }).split("?"), searchParams = new URLSearchParams(search), resolvedPerspective = perspective || searchParams.get("perspective");
    return resolvedPerspective === "drafts" ? searchParams.delete("perspective") : resolvedPerspective && searchParams.set("perspective", resolvedPerspective), "".concat(url, "?").concat(searchParams);
}
const ElementOverlayInner = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60), { id, element, focused, componentResolver, node, showActions, draggable, targets, elementType, comlink, onActivateExclusivePlugin, onMenuOpenChange, inFrame } = props, { getField, getType } = useSchema();
    let t0;
    $[0] !== getType || $[1] !== node ? (t0 = getType(node), $[0] = getType, $[1] = node, $[2] = t0) : t0 = $[2];
    const schemaType = t0;
    let t1;
    $[3] !== node ? (t1 = "path" in node ? createIntentLink(node) : node.href, $[3] = node, $[4] = t1) : t1 = $[4];
    const href = t1, previewSnapshots = usePreviewSnapshots();
    let t2;
    bb0: {
        var _previewSnapshots_find;
        if (!("path" in node)) {
            t2 = void 0;
            break bb0;
        }
        let t32;
        $[5] !== node || $[6] !== previewSnapshots ? (t32 = (_previewSnapshots_find = previewSnapshots.find((snapshot)=>snapshot._id === node.id)) === null || _previewSnapshots_find === void 0 ? void 0 : _previewSnapshots_find.title, $[5] = node, $[6] = previewSnapshots, $[7] = t32) : t32 = $[7], t2 = t32;
    }
    const title = t2;
    let t3;
    $[8] !== element || $[9] !== focused || $[10] !== getField || $[11] !== getType ? (t3 = function(node_0, nodeElement) {
        const schemaType_0 = getType(node_0), { field, parent } = getField(node_0);
        if (!("id" in node_0) || !field || !schemaType_0) return;
        const type = field.value.type;
        return {
            document: schemaType_0,
            element,
            targetElement: nodeElement || element,
            field,
            focused: !!focused,
            node: node_0,
            parent,
            type
        };
    }, $[8] = element, $[9] = focused, $[10] = getField, $[11] = getType, $[12] = t3) : t3 = $[12];
    const getContext = t3;
    let t4;
    $[13] !== elementType || $[14] !== getContext || $[15] !== node ? (t4 = elementType === "element" ? getContext(node) : void 0, $[13] = elementType, $[14] = getContext, $[15] = node, $[16] = t4) : t4 = $[16];
    let t5;
    if ($[17] !== getContext || $[18] !== targets) {
        let t62;
        $[20] !== getContext ? (t62 = (target)=>getContext(target.sanity, target.element), $[20] = getContext, $[21] = t62) : t62 = $[21], t5 = targets.map(t62).filter(_temp$8), $[17] = getContext, $[18] = targets, $[19] = t5;
    } else t5 = $[19];
    let t6;
    $[22] !== t4 || $[23] !== t5 ? (t6 = {
        legacyComponentContext: t4,
        pluginContexts: t5
    }, $[22] = t4, $[23] = t5, $[24] = t6) : t6 = $[24];
    const resolverContexts = t6, customComponents = useCustomComponents(resolverContexts.legacyComponentContext, componentResolver), nodePluginCollections = useResolvedNodePlugins(resolverContexts.pluginContexts, props.plugins);
    let t7;
    $[25] !== schemaType ? (t7 = (schemaType === null || schemaType === void 0 ? void 0 : schemaType.icon) ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        dangerouslySetInnerHTML: {
            __html: schemaType.icon
        }
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentIcon"], {}), $[25] = schemaType, $[26] = t7) : t7 = $[26];
    const icon = t7, menuId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let t8;
    $[27] !== nodePluginCollections ? (t8 = nodePluginCollections === null || nodePluginCollections === void 0 ? void 0 : nodePluginCollections.some(_temp2$5), $[27] = nodePluginCollections, $[28] = t8) : t8 = $[28];
    const showMenu = t8 || (nodePluginCollections === null || nodePluginCollections === void 0 ? void 0 : nodePluginCollections.length) > 1;
    let t9;
    $[29] !== id ? (t9 = ()=>{
        window.dispatchEvent(new CustomEvent("sanity-overlay/label-click", {
            detail: {
                id
            }
        }));
    }, $[29] = id, $[30] = t9) : t9 = $[30];
    const handleLabelClick = t9;
    let t10;
    $[31] !== href || $[32] !== inFrame || $[33] !== showActions ? (t10 = showActions ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Actions, {
        gap: 1,
        paddingY: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Link, {
            inFrame,
            href
        })
    }) : null, $[31] = href, $[32] = inFrame, $[33] = showActions, $[34] = t10) : t10 = $[34];
    let t11;
    $[35] !== comlink || $[36] !== draggable || $[37] !== handleLabelClick || $[38] !== icon || $[39] !== menuId || $[40] !== nodePluginCollections || $[41] !== onActivateExclusivePlugin || $[42] !== onMenuOpenChange || $[43] !== showMenu || $[44] !== title ? (t11 = (title || showMenu) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Tab, {
        gap: 1,
        paddingY: 1,
        onClick: handleLabelClick,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Labels, {
            gap: 2,
            padding: 2,
            children: [
                draggable && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    marginRight: 1,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        className: "drag-handle",
                        size: 0,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragHandleIcon"], {})
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    size: 0,
                    children: icon
                }),
                title && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    size: 1,
                    weight: "medium",
                    children: title
                }),
                showMenu && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    paddingLeft: 2,
                    onClick: _temp3$2,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuWrapper, {
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MenuButton"], {
                            id: menuId,
                            popover: {
                                animate: !0,
                                placement: "bottom-start",
                                constrainSize: !0,
                                tone: "default"
                            },
                            onOpen: ()=>{
                                onMenuOpenChange === null || onMenuOpenChange === void 0 ? void 0 : onMenuOpenChange(!0);
                            },
                            onClose: ()=>{
                                onMenuOpenChange === null || onMenuOpenChange === void 0 ? void 0 : onMenuOpenChange(!1);
                            },
                            button: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EllipsisVerticalIcon"],
                                tone: "primary",
                                padding: 2
                            }),
                            menu: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
                                paddingY: 0,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEvents"], {
                                    children: nodePluginCollections === null || nodePluginCollections === void 0 ? void 0 : nodePluginCollections.map((nodePluginCollection_0, index)=>{
                                        var _nodePluginCollection_0_context_field;
                                        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                                    role: "group",
                                                    paddingY: 1,
                                                    space: 0,
                                                    children: [
                                                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                                                            paddingY: 2,
                                                            text: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                                                paddingY: 2,
                                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                    muted: !0,
                                                                    size: 1,
                                                                    style: {
                                                                        textTransform: "capitalize"
                                                                    },
                                                                    children: "".concat(nodePluginCollection_0.context.document.name, ": ").concat((_nodePluginCollection_0_context_field = nodePluginCollection_0.context.field) === null || _nodePluginCollection_0_context_field === void 0 ? void 0 : _nodePluginCollection_0_context_field.name)
                                                                })
                                                            }),
                                                            onClick: ()=>{
                                                                nodePluginCollection_0.context.node && (comlink === null || comlink === void 0 ? void 0 : comlink.post("visual-editing/focus", nodePluginCollection_0.context.node));
                                                            }
                                                        }),
                                                        nodePluginCollection_0.exclusive.map((exclusive)=>exclusive.component ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                                                                paddingY: 2,
                                                                icon: exclusive.icon || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlugIcon"], {}),
                                                                text: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                                                    paddingY: 2,
                                                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                        size: 1,
                                                                        children: exclusive.title || exclusive.name
                                                                    })
                                                                }),
                                                                onClick: ()=>onActivateExclusivePlugin === null || onActivateExclusivePlugin === void 0 ? void 0 : onActivateExclusivePlugin(exclusive, nodePluginCollection_0.context)
                                                            }, exclusive.name) : null)
                                                    ]
                                                }),
                                                index < nodePluginCollections.length - 1 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuDivider"], {})
                                            ]
                                        }, nodePluginCollection_0.id);
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    }), $[35] = comlink, $[36] = draggable, $[37] = handleLabelClick, $[38] = icon, $[39] = menuId, $[40] = nodePluginCollections, $[41] = onActivateExclusivePlugin, $[42] = onMenuOpenChange, $[43] = showMenu, $[44] = title, $[45] = t11) : t11 = $[45];
    let t12;
    $[46] !== nodePluginCollections ? (t12 = nodePluginCollections === null || nodePluginCollections === void 0 ? void 0 : nodePluginCollections.map(_temp4$1), $[46] = nodePluginCollections, $[47] = t12) : t12 = $[47];
    let t13;
    $[48] !== t12 ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(HUD, {
        children: t12
    }), $[48] = t12, $[49] = t13) : t13 = $[49];
    let t14;
    $[50] !== t10 || $[51] !== t11 || $[52] !== t13 ? (t14 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEvents"], {
        children: [
            t10,
            t11,
            t13
        ]
    }), $[50] = t10, $[51] = t11, $[52] = t13, $[53] = t14) : t14 = $[53];
    let t15;
    $[54] !== customComponents || $[55] !== resolverContexts.legacyComponentContext ? (t15 = Array.isArray(customComponents) ? customComponents.map((t162, i)=>{
        const { component: Component_1, props: props_0 } = t162;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component_1, {
            PointerEvents: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEvents"],
            ...resolverContexts.legacyComponentContext,
            ...props_0
        }, i);
    }) : customComponents, $[54] = customComponents, $[55] = resolverContexts.legacyComponentContext, $[56] = t15) : t15 = $[56];
    let t16;
    return $[57] !== t14 || $[58] !== t15 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t14,
            t15
        ]
    }), $[57] = t14, $[58] = t15, $[59] = t16) : t16 = $[59], t16;
}, ElementOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39), { draggable, focused, hovered, rect, wasMaybeCollapsed, enableScrollIntoView, inFrame } = props, ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), scrolledIntoViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), t0 = "".concat(rect.w, "px"), t1 = "".concat(rect.h, "px"), t2 = "translate(".concat(rect.x, "px, ").concat(rect.y, "px)");
    let t3;
    $[0] !== t0 || $[1] !== t1 || $[2] !== t2 ? (t3 = {
        width: t0,
        height: t1,
        transform: t2
    }, $[0] = t0, $[1] = t1, $[2] = t2, $[3] = t3) : t3 = $[3];
    const style = t3;
    let t4, t5;
    $[4] !== enableScrollIntoView || $[5] !== focused || $[6] !== wasMaybeCollapsed ? (t4 = ()=>{
        if (!scrolledIntoViewRef.current && !wasMaybeCollapsed && focused === !0 && ref.current && enableScrollIntoView) {
            const target = ref.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$scroll$2d$into$2d$view$2d$if$2d$needed$40$3$2e$1$2e$0$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref.current, {
                behavior: (actions)=>{
                    actions.length !== 0 && target.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest"
                    });
                },
                scrollMode: "if-needed",
                block: "center",
                inline: "nearest"
            });
        }
        scrolledIntoViewRef.current = focused === !0;
    }, t5 = [
        focused,
        wasMaybeCollapsed,
        enableScrollIntoView
    ], $[4] = enableScrollIntoView, $[5] = focused, $[6] = wasMaybeCollapsed, $[7] = t4, $[8] = t5) : (t4 = $[7], t5 = $[8]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const [isNearTop, setIsNearTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    let t6;
    $[9] !== hovered ? (t6 = ()=>{
        if (!ref.current || !hovered) return;
        const io = new IntersectionObserver((t72)=>{
            const [intersection] = t72;
            setIsNearTop(intersection.boundingClientRect.top < 0);
        }, {
            threshold: 1
        });
        return io.observe(ref.current), ()=>io.disconnect();
    }, $[9] = hovered, $[10] = t6) : t6 = $[10];
    let t7;
    $[11] !== hovered || $[12] !== isNearTop ? (t7 = [
        hovered,
        isNearTop
    ], $[11] = hovered, $[12] = isNearTop, $[13] = t7) : t7 = $[13], (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const [activeExclusivePlugin, setActiveExclusivePlugin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t8;
    $[14] === Symbol.for("react.memo_cache_sentinel") ? (t8 = ()=>{
        setActiveExclusivePlugin(null), window.dispatchEvent(new CustomEvent("sanity-overlay/exclusive-plugin-closed"));
    }, $[14] = t8) : t8 = $[14];
    const closeExclusivePluginView = t8;
    let t9;
    $[15] === Symbol.for("react.memo_cache_sentinel") ? (t9 = (plugin, context)=>{
        setActiveExclusivePlugin({
            plugin,
            context
        });
    }, $[15] = t9) : t9 = $[15];
    const onActivateExclusivePlugin = t9, handleExclusivePluginClick = _temp5$1, ExclusivePluginComponent = activeExclusivePlugin === null || activeExclusivePlugin === void 0 ? void 0 : activeExclusivePlugin.plugin.component, [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    let t10;
    $[16] === Symbol.for("react.memo_cache_sentinel") ? (t10 = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setMenuOpen(!1));
    }, $[16] = t10) : t10 = $[16];
    let t11;
    $[17] !== hovered ? (t11 = [
        hovered
    ], $[17] = hovered, $[18] = t11) : t11 = $[18], (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    $[19] !== ExclusivePluginComponent || $[20] !== menuOpen ? (t12 = menuOpen || ExclusivePluginComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverBackground"], {
        onDismiss: closeExclusivePluginView,
        blockScroll: menuOpen
    }) : null, $[19] = ExclusivePluginComponent, $[20] = menuOpen, $[21] = t12) : t12 = $[21];
    const t13 = focused ? "" : void 0, t14 = hovered ? "" : void 0, t15 = isNearTop ? "" : void 0, t16 = draggable ? "" : void 0, t17 = menuOpen ? "" : void 0;
    let t18;
    $[22] !== ExclusivePluginComponent || $[23] !== activeExclusivePlugin || $[24] !== hovered || $[25] !== inFrame || $[26] !== props ? (t18 = ExclusivePluginComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ExclusivePluginContainer, {
        "data-sanity-overlay-element": !0,
        onClick: handleExclusivePluginClick,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ExclusivePluginComponent, {
            ...activeExclusivePlugin.context,
            closeExclusiveView: closeExclusivePluginView
        })
    }) : hovered ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ElementOverlayInner, {
        ...props,
        inFrame,
        onActivateExclusivePlugin,
        onMenuOpenChange: setMenuOpen
    }) : null, $[22] = ExclusivePluginComponent, $[23] = activeExclusivePlugin, $[24] = hovered, $[25] = inFrame, $[26] = props, $[27] = t18) : t18 = $[27];
    let t19;
    $[28] !== style || $[29] !== t13 || $[30] !== t14 || $[31] !== t15 || $[32] !== t16 || $[33] !== t17 || $[34] !== t18 ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$3, {
        "data-focused": t13,
        "data-hovered": t14,
        "data-flipped": t15,
        "data-draggable": t16,
        "data-menu-open": t17,
        ref,
        style,
        children: t18
    }), $[28] = style, $[29] = t13, $[30] = t14, $[31] = t15, $[32] = t16, $[33] = t17, $[34] = t18, $[35] = t19) : t19 = $[35];
    let t20;
    return $[36] !== t12 || $[37] !== t19 ? (t20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t12,
            t19
        ]
    }), $[36] = t12, $[37] = t19, $[38] = t20) : t20 = $[38], t20;
});
function useResolvedNodePlugins(componentContexts, plugins) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    let t0;
    if ($[0] !== componentContexts || $[1] !== plugins) {
        let t1;
        $[3] !== plugins ? (t1 = (componentContext)=>{
            const instance = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v4"])(),
                context: componentContext,
                hud: [],
                exclusive: []
            };
            return plugins === null || plugins === void 0 ? void 0 : plugins.forEach((plugin)=>{
                var _plugin_guard;
                ((_plugin_guard = plugin.guard) === null || _plugin_guard === void 0 ? void 0 : _plugin_guard.call(plugin, componentContext)) && (plugin.type === "hud" && instance.hud.push(plugin), plugin.type === "exclusive" && instance.exclusive.push(plugin));
            }), instance;
        }, $[3] = plugins, $[4] = t1) : t1 = $[4], t0 = componentContexts.map(t1), $[0] = componentContexts, $[1] = plugins, $[2] = t0;
    } else t0 = $[2];
    return t0;
}
function useCustomComponents(componentContext, componentResolver) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    let t0;
    if ($[0] !== componentContext || $[1] !== componentResolver) {
        bb0: {
            if (!componentContext) {
                t0 = void 0;
                break bb0;
            }
            const resolved = componentResolver === null || componentResolver === void 0 ? void 0 : componentResolver(componentContext);
            if (!resolved) {
                t0 = void 0;
                break bb0;
            }
            if (isReactElementOverlayComponent(resolved)) {
                t0 = resolved;
                break bb0;
            }
            t0 = (Array.isArray(resolved) ? resolved : [
                resolved
            ]).map(_temp6$1);
        }
        $[0] = componentContext, $[1] = componentResolver, $[2] = t0;
    } else t0 = $[2];
    return t0;
}
function _temp6$1(component) {
    return typeof component == "object" && "component" in component ? component : {
        component,
        props: {}
    };
}
const Link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { inFrame } = props, referer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(_temp7$1, _temp8$1);
    let t0;
    $[0] !== props.href || $[1] !== referer ? (t0 = getLinkHref(props.href, referer), $[0] = props.href, $[1] = referer, $[2] = t0) : t0 = $[2];
    const href = t0, t1 = inFrame ? void 0 : "_blank", t2 = inFrame ? "noopener" : "noopener noreferrer";
    let t3;
    $[3] === Symbol.for("react.memo_cache_sentinel") ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ActionOpen, {
        padding: 2,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            size: 1,
            weight: "medium",
            children: "Open in Studio"
        })
    }), $[3] = t3) : t3 = $[3];
    let t4;
    return $[4] !== href || $[5] !== t1 || $[6] !== t2 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        as: "a",
        href,
        target: t1,
        rel: t2,
        children: t3
    }), $[4] = href, $[5] = t1, $[6] = t2, $[7] = t4) : t4 = $[7], t4;
});
function _temp$8(ctx) {
    return ctx !== void 0;
}
function _temp2$5(nodePluginCollection) {
    return nodePluginCollection.exclusive.length > 0;
}
function _temp3$2(e) {
    e.stopPropagation();
}
function _temp4$1(nodePluginCollection_1) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: nodePluginCollection_1.hud.map((hud)=>{
            const Component_0 = hud.component;
            return Component_0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component_0, {
                ...nodePluginCollection_1.context
            }, hud.name) : null;
        })
    }, nodePluginCollection_1.id);
}
function _temp5$1(event) {
    event.stopPropagation();
}
function _temp7$1(onStoreChange) {
    const handlePopState = ()=>onStoreChange();
    return window.addEventListener("popstate", handlePopState), ()=>window.removeEventListener("popstate", handlePopState);
}
function _temp8$1() {
    return window.location.href;
}
const OverlayDragGroupRect = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), { dragGroupRect } = t0, t1 = "".concat(dragGroupRect.y, "px"), t2 = "".concat(dragGroupRect.x, "px"), t3 = "".concat(dragGroupRect.w - 1, "px"), t4 = "".concat(dragGroupRect.h - 1, "px");
    let t5;
    return $[0] !== t1 || $[1] !== t2 || $[2] !== t3 || $[3] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: "absolute",
            top: t1,
            left: t2,
            width: t3,
            height: t4,
            border: "1px dashed #f0709b",
            pointerEvents: "none"
        }
    }), $[0] = t1, $[1] = t2, $[2] = t3, $[3] = t4, $[4] = t5) : t5 = $[4], t5;
}, markerThickness = 6;
function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}
const OverlayDragInsertMarker = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), { dragInsertPosition } = t0;
    if (dragInsertPosition === null) return;
    const flow = (dragInsertPosition === null || dragInsertPosition === void 0 ? void 0 : dragInsertPosition.left) || (dragInsertPosition === null || dragInsertPosition === void 0 ? void 0 : dragInsertPosition.right) ? "horizontal" : "vertical";
    let x = 0, y = 0, width = 0, height = 0;
    if (flow === "horizontal") {
        const { left, right } = dragInsertPosition;
        if (width = markerThickness, right && left) {
            const startX = left.rect.x + left.rect.w, endX = right.rect.x, offset = Math.min(right.rect.h, left.rect.h) * 0.0125;
            x = lerp(startX, endX, 0.5) - markerThickness / 2, y = left.rect.y + offset, height = Math.min(right.rect.h, left.rect.h) - offset * 2;
        } else if (right && !left) {
            const offset_0 = right.rect.h * 0.0125;
            x = right.rect.x - markerThickness / 2, y = right.rect.y + offset_0, height = right.rect.h - offset_0 * 2;
        } else if (left && !right) {
            const offset_1 = left.rect.h * 0.0125;
            x = left.rect.x + left.rect.w - markerThickness / 2, y = left.rect.y + offset_1, height = left.rect.h - offset_1 * 2;
        }
    } else {
        const { bottom, top } = dragInsertPosition;
        if (bottom && top) {
            const startX_0 = Math.min(top.rect.x, bottom.rect.x), startY = top.rect.y + top.rect.h, endY = bottom.rect.y, offset_2 = Math.min(bottom.rect.w, top.rect.w) * 0.0125;
            height = markerThickness, x = startX_0 + offset_2, y = lerp(startY, endY, 0.5) - markerThickness / 2, width = Math.max(bottom.rect.w, top.rect.w) - offset_2 * 2;
        } else if (bottom && !top) {
            const offset_3 = bottom.rect.w * 0.0125;
            x = bottom.rect.x + offset_3, y = bottom.rect.y - markerThickness / 2, width = bottom.rect.w - offset_3 * 2, height = markerThickness;
        } else if (top && !bottom) {
            const offset_4 = top.rect.w * 0.0125;
            x = top.rect.x + offset_4, y = top.rect.y + top.rect.h - markerThickness / 2, width = top.rect.w - offset_4 * 2, height = markerThickness;
        }
    }
    const t1 = "".concat(width, "px"), t2 = "".concat(height, "px"), t3 = "translate(".concat(x, "px, ").concat(y, "px)");
    let t4;
    return $[0] !== t1 || $[1] !== t2 || $[2] !== t3 ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            position: "absolute",
            width: t1,
            height: t2,
            transform: t3,
            background: "#556bfc",
            border: "2px solid white",
            borderRadius: "999px",
            zIndex: "999999"
        }
    }), $[0] = t1, $[1] = t2, $[2] = t3, $[3] = t4) : t4 = $[3], t4;
}, Root$2 = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(_templateObject8(), (param)=>{
    let { $scaleFactor, $width, $height } = param;
    return "translate(calc(var(--drag-preview-x) - ".concat($width / 2, "px), calc(var(--drag-preview-y) - ").concat($height / 2, "px)) scale(").concat($scaleFactor, ")");
}, (param)=>{
    let { $width } = param;
    return "".concat($width, "px");
}, (param)=>{
    let { $height } = param;
    return "".concat($height, "px");
});
function clamp(number, min, max) {
    return number < min ? min : number > max ? max : number;
}
function map(number, inMin, inMax, outMin, outMax) {
    const mapped = (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    return clamp(mapped, outMin, outMax);
}
const OverlayDragPreview = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50), { skeleton } = t0, maxSkeletonWidth = Math.min(skeleton.maxWidth, window.innerWidth / 2), scaleFactor = skeleton.w > maxSkeletonWidth ? maxSkeletonWidth / skeleton.w : 1, offsetX = skeleton.offsetX * scaleFactor, offsetY = skeleton.offsetY * scaleFactor, prefersDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersDark"])(), theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme_v2"])(), radius = theme.radius[~~map(skeleton.w, 0, 1920, 1, theme.radius.length - 2)];
    let T0, T1, t1, t10, t11, t12, t13, t14, t2, t3, t4, t5, t6, t7, t8, t9;
    if ($[0] !== offsetX || $[1] !== offsetY || $[2] !== prefersDark || $[3] !== radius || $[4] !== scaleFactor || $[5] !== skeleton.childRects || $[6] !== skeleton.h || $[7] !== skeleton.w) {
        const imageRects = skeleton.childRects.filter(_temp$7), textRects = skeleton.childRects.filter(_temp2$4);
        T1 = Root$2, t10 = skeleton.w, t11 = skeleton.h, t12 = offsetX, t13 = offsetY, t14 = scaleFactor, T0 = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], t5 = radius, t6 = 4, t7 = "hidden", t8 = "transparent", t9 = prefersDark ? "dark" : "light", t4 = "drag-preview-content-wrapper", t2 = "drag-preview-skeleton", t3 = "0 0 ".concat(skeleton.w, " ").concat(skeleton.h), t1 = [
            ...imageRects,
            ...textRects
        ], $[0] = offsetX, $[1] = offsetY, $[2] = prefersDark, $[3] = radius, $[4] = scaleFactor, $[5] = skeleton.childRects, $[6] = skeleton.h, $[7] = skeleton.w, $[8] = T0, $[9] = T1, $[10] = t1, $[11] = t10, $[12] = t11, $[13] = t12, $[14] = t13, $[15] = t14, $[16] = t2, $[17] = t3, $[18] = t4, $[19] = t5, $[20] = t6, $[21] = t7, $[22] = t8, $[23] = t9;
    } else T0 = $[8], T1 = $[9], t1 = $[10], t10 = $[11], t11 = $[12], t12 = $[13], t13 = $[14], t14 = $[15], t2 = $[16], t3 = $[17], t4 = $[18], t5 = $[19], t6 = $[20], t7 = $[21], t8 = $[22], t9 = $[23];
    let t15;
    $[24] !== t1 || $[25] !== theme.color ? (t15 = t1.map((r_1, i)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
            x: r_1.x,
            y: r_1.y,
            width: r_1.w,
            height: r_1.h,
            fill: theme.color.skeleton.from
        }, i)), $[24] = t1, $[25] = theme.color, $[26] = t15) : t15 = $[26];
    let t16;
    $[27] !== t15 || $[28] !== t2 || $[29] !== t3 ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        className: t2,
        viewBox: t3,
        children: t15
    }), $[27] = t15, $[28] = t2, $[29] = t3, $[30] = t16) : t16 = $[30];
    let t17;
    $[31] !== t16 || $[32] !== t4 ? (t17 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: t4,
        children: t16
    }), $[31] = t16, $[32] = t4, $[33] = t17) : t17 = $[33];
    let t18;
    $[34] !== T0 || $[35] !== t17 || $[36] !== t5 || $[37] !== t6 || $[38] !== t7 || $[39] !== t8 || $[40] !== t9 ? (t18 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T0, {
        radius: t5,
        shadow: t6,
        overflow: t7,
        tone: t8,
        scheme: t9,
        children: t17
    }), $[34] = T0, $[35] = t17, $[36] = t5, $[37] = t6, $[38] = t7, $[39] = t8, $[40] = t9, $[41] = t18) : t18 = $[41];
    let t19;
    return $[42] !== T1 || $[43] !== t10 || $[44] !== t11 || $[45] !== t12 || $[46] !== t13 || $[47] !== t14 || $[48] !== t18 ? (t19 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(T1, {
        $width: t10,
        $height: t11,
        $offsetX: t12,
        $offsetY: t13,
        $scaleFactor: t14,
        children: t18
    }), $[42] = T1, $[43] = t10, $[44] = t11, $[45] = t12, $[46] = t13, $[47] = t14, $[48] = t18, $[49] = t19) : t19 = $[49], t19;
};
function _temp$7(r) {
    return r.tagName === "IMG";
}
function _temp2$4(r_0) {
    return r_0.tagName !== "IMG";
}
const Root$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"])(_templateObject9()), OverlayMinimapPrompt = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = {
        zIndex: "999999"
    }, $[0] = t0) : t0 = $[0];
    let t1;
    return $[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root$1, {
        padding: 2,
        shadow: 2,
        radius: 2,
        style: t0,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            align: "center",
            gap: 2,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"], {
                    keys: [
                        "Shift"
                    ]
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    size: 1,
                    children: "Zoom Out"
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$icons$40$3$2e$7$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpandIcon"], {})
            ]
        })
    }), $[1] = t1) : t1 = $[1], t1;
}, elementsReducer = (elements, message)=>{
    const { type } = message;
    switch(type){
        case "element/register":
            return elements.find((e)=>e.id === message.id) ? elements : [
                ...elements,
                {
                    id: message.id,
                    activated: !1,
                    element: message.element,
                    focused: !1,
                    hovered: !1,
                    rect: message.rect,
                    sanity: message.sanity,
                    dragDisabled: message.dragDisabled,
                    targets: message.targets,
                    elementType: message.elementType
                }
            ];
        case "element/activate":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    activated: !0
                } : e);
        case "element/update":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    sanity: message.sanity,
                    rect: message.rect,
                    targets: message.targets,
                    elementType: message.elementType
                } : e);
        case "element/unregister":
            return elements.filter((e)=>e.id !== message.id);
        case "element/deactivate":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    activated: !1,
                    hovered: !1
                } : e);
        case "element/mouseenter":
            return elements.map((e)=>e.id === message.id ? {
                    ...e,
                    rect: message.rect,
                    hovered: !0
                } : {
                    ...e,
                    hovered: !1
                });
        case "element/mouseleave":
            return elements.map((element)=>element.id === message.id ? {
                    ...element,
                    hovered: !1
                } : element);
        case "element/updateRect":
            return elements.map((element)=>element.id === message.id ? {
                    ...element,
                    rect: message.rect
                } : element);
        case "element/click":
            return elements.map((e)=>({
                    ...e,
                    focused: e.id === message.id && "clicked"
                }));
        case "overlay/reset-mouse-state":
            return elements.map((e)=>({
                    ...e,
                    focused: !1,
                    hovered: !1
                }));
        case "overlay/blur":
            return elements.map((e)=>({
                    ...e,
                    focused: !1
                }));
        case "presentation/blur":
            return elements.map((e)=>({
                    ...e,
                    focused: !1
                }));
        case "presentation/focus":
            {
                const clickedElement = elements.find((e)=>e.focused === "clicked");
                return elements.map((e)=>{
                    const focused = "path" in e.sanity && e.sanity.id === message.data.id && e.sanity.path === message.data.path;
                    return clickedElement && e === clickedElement && focused ? e : {
                        ...e,
                        // Mark as a dupe if another matching item has been clicked to prevent
                        // scrolling, otherwise just set focus as a boolean
                        focused: focused && clickedElement ? "duplicate" : focused
                    };
                });
            }
        default:
            return elements;
    }
};
function overlayStateReducer(state, message) {
    const { type } = message;
    let { contextMenu, focusPath, perspective, isDragging, dragInsertPosition, dragShowMinimap, dragShowMinimapPrompt, dragSkeleton, dragMinimapTransition, dragGroupRect } = state, wasMaybeCollapsed = !1;
    if (type === "presentation/focus") {
        const prevFocusPath = state.focusPath;
        focusPath = message.data.path, prevFocusPath !== focusPath && (wasMaybeCollapsed = prevFocusPath.slice(focusPath.length).startsWith("["));
    }
    return type === "presentation/perspective" && (perspective = message.data.perspective), type === "element/contextmenu" && ("sanity" in message ? contextMenu = {
        node: message.sanity,
        position: message.position
    } : contextMenu = null), (type === "element/click" || type === "element/mouseleave" || type === "overlay/blur" || type === "presentation/blur" || type === "presentation/focus") && (contextMenu = null), type === "overlay/dragUpdateInsertPosition" && (dragInsertPosition = message.insertPosition), type === "overlay/dragStart" && (isDragging = !0), message.type === "overlay/dragUpdateSkeleton" && (dragSkeleton = message.skeleton), type === "overlay/dragEnd" && (isDragging = !1), message.type === "overlay/dragToggleMinimapPrompt" && (dragShowMinimapPrompt = message.display), type === "overlay/dragStartMinimapTransition" && (dragMinimapTransition = !0), type === "overlay/dragEndMinimapTransition" && (dragMinimapTransition = !1), type === "overlay/dragUpdateGroupRect" && (dragGroupRect = message.groupRect), type === "overlay/dragToggleMinimap" && (dragShowMinimap = message.display), {
        ...state,
        contextMenu,
        elements: elementsReducer(state.elements, message),
        dragInsertPosition,
        dragSkeleton,
        dragGroupRect,
        isDragging,
        focusPath,
        perspective,
        wasMaybeCollapsed,
        dragShowMinimap,
        dragShowMinimapPrompt,
        dragMinimapTransition
    };
}
const PreviewSnapshotsProvider = function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13), { comlink, children } = props;
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = [], $[0] = t0) : t0 = $[0];
    const [previewSnapshots, setPreviewSnapshots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    $[1] !== comlink ? (t1 = async (signal)=>{
        if (comlink) try {
            const response = await comlink.fetch("visual-editing/preview-snapshots", void 0, {
                signal,
                suppressWarnings: !0
            });
            setPreviewSnapshots(response.snapshots);
        } catch (e) {}
    }, $[1] = comlink, $[2] = t1) : t1 = $[2];
    const fetchPreviewSnapshots = t1;
    let t2, t3;
    $[3] !== comlink || $[4] !== fetchPreviewSnapshots ? (t2 = ()=>{
        if (!comlink) return;
        const previewSapshotsFetch = new AbortController(), unsub = comlink.onStatus(()=>{
            fetchPreviewSnapshots(previewSapshotsFetch.signal);
        }, "connected");
        return ()=>{
            previewSapshotsFetch.abort(), unsub();
        };
    }, t3 = [
        comlink,
        fetchPreviewSnapshots
    ], $[3] = comlink, $[4] = fetchPreviewSnapshots, $[5] = t2, $[6] = t3) : (t2 = $[5], t3 = $[6]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4, t5;
    $[7] !== comlink ? (t4 = ()=>comlink === null || comlink === void 0 ? void 0 : comlink.on("presentation/preview-snapshots", (data)=>{
            setPreviewSnapshots(data.snapshots);
        }), t5 = [
        comlink
    ], $[7] = comlink, $[8] = t4, $[9] = t5) : (t4 = $[8], t5 = $[9]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const context = previewSnapshots;
    let t6;
    return $[10] !== children || $[11] !== context ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PreviewSnapshotsContext.Provider, {
        value: context,
        children
    }), $[10] = children, $[11] = context, $[12] = t6) : t6 = $[12], t6;
};
function isSanityNode(node) {
    return "path" in node;
}
function isDocumentSchemaType(type) {
    return type.type === "document";
}
function isTypeSchemaType(type) {
    return type.type === "type";
}
function popUnkeyedPathSegments(path) {
    return path.split(".").toReversed().reduce((acc, part)=>acc.length ? [
            part,
            ...acc
        ] : part.includes("[_key==") ? [
            part
        ] : [], []).join(".");
}
function getPathsWithUnresolvedTypes(elements) {
    return elements.reduce((acc, element)=>{
        const { sanity } = element;
        if (!("id" in sanity) || !sanity.path.includes("[_key==")) return acc;
        const path = popUnkeyedPathSegments(sanity.path);
        return acc.find((item)=>item.id === sanity.id && item.path === path) || acc.push({
            id: sanity.id,
            path
        }), acc;
    }, []);
}
const SchemaProvider = function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22), { comlink, children, elements } = props;
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ new Map(), $[0] = t0) : t0 = $[0];
    const [resolvedTypes, setResolvedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0), [schema, setSchema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1, t2;
    $[1] !== comlink ? (t1 = ()=>{
        if (!comlink) return;
        const fetchSchema = async function(signal) {
            if (comlink) try {
                const response = await comlink.fetch("visual-editing/schema", void 0, {
                    signal,
                    suppressWarnings: !0
                });
                setSchema(response.schema);
            } catch (e) {}
        }, schemaFetch = new AbortController(), unsub = comlink.onStatus(()=>{
            fetchSchema(schemaFetch.signal);
        }, "connected");
        return ()=>{
            schemaFetch.abort(), unsub();
        };
    }, t2 = [
        comlink
    ], $[1] = comlink, $[2] = t1, $[3] = t2) : (t1 = $[2], t2 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    $[4] === Symbol.for("react.memo_cache_sentinel") ? (t3 = [], $[4] = t3) : t3 = $[4];
    const reportedPathsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t3), t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(elements);
    let t5;
    $[5] !== t4 ? (t5 = getPathsWithUnresolvedTypes(t4), $[5] = t4, $[6] = t5) : t5 = $[6];
    const paths = t5, controllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t6, t7;
    $[7] !== comlink || $[8] !== paths ? (t6 = ()=>{
        var _controllerRef_current;
        if (!paths.length || !comlink) return;
        const reportPaths = async (paths_0, signal_0)=>{
            const initialReportedPaths = reportedPathsRef.current;
            try {
                reportedPathsRef.current = paths_0;
                const response_0 = await comlink.fetch("visual-editing/schema-union-types", {
                    paths: paths_0
                }, {
                    signal: signal_0,
                    suppressWarnings: !0
                });
                if (signal_0.aborted) return;
                setResolvedTypes(response_0.types), controllerRef.current = null;
            } catch (e) {}
            signal_0.aborted && (reportedPathsRef.current = initialReportedPaths);
        };
        paths.some((p)=>!reportedPathsRef.current.find((t82)=>{
                const { id, path } = t82;
                return id === p.id && path === p.path;
            })) && ((_controllerRef_current = controllerRef.current) === null || _controllerRef_current === void 0 ? void 0 : _controllerRef_current.abort(), controllerRef.current = new AbortController(), reportPaths(paths, controllerRef.current.signal));
    }, t7 = [
        comlink,
        paths
    ], $[7] = comlink, $[8] = paths, $[9] = t6, $[10] = t7) : (t6 = $[9], t7 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    $[11] !== schema ? (t8 = (node, _type)=>{
        const type = _type || "document";
        if (!schema || typeof node != "string" && (!isSanityNode(node) || !Array.isArray(schema))) return;
        const name = typeof node == "string" ? node : node.type, filter = type === "document" ? isDocumentSchemaType : isTypeSchemaType;
        return schema.filter(filter).find((schemaType)=>schemaType.name === name);
    }, $[11] = schema, $[12] = t8) : t8 = $[12];
    const getType = t8;
    let t9;
    $[13] !== getType || $[14] !== resolvedTypes ? (t9 = (node_0)=>{
        if (!isSanityNode(node_0)) return {
            field: void 0,
            parent: void 0
        };
        const schemaType_0 = getType(node_0);
        if (!schemaType_0) return {
            field: void 0,
            parent: void 0
        };
        function fieldFromPath(schemaType_1, path_0, parent, t102) {
            const prevPath = t102 === void 0 ? [] : t102;
            if (!schemaType_1) return {
                field: void 0,
                parent: void 0
            };
            const [next, ...rest] = path_0;
            if ("fields" in schemaType_1) {
                const objectField = schemaType_1.fields[next];
                if (!objectField && "rest" in schemaType_1) return fieldFromPath(schemaType_1.rest, path_0, schemaType_1, prevPath);
                if (!rest.length) return {
                    field: objectField,
                    parent
                };
                if (!objectField) throw new Error('[@sanity/visual-editing] No field could be resolved at path: "'.concat([
                    ...prevPath,
                    ...path_0
                ].join("."), '"'));
                return fieldFromPath(objectField.value, rest, schemaType_1, [
                    ...prevPath,
                    next
                ]);
            } else {
                if (schemaType_1.type === "array") return fieldFromPath(schemaType_1.of, path_0, schemaType_1, prevPath);
                if (schemaType_1.type === "arrayItem") return rest.length ? fieldFromPath(schemaType_1.value, rest, schemaType_1, [
                    ...prevPath,
                    next
                ]) : {
                    field: schemaType_1,
                    parent
                };
                if (schemaType_1.type === "union") {
                    var _resolvedTypes_get;
                    const name_0 = next.startsWith("[_key==") ? resolvedTypes === null || resolvedTypes === void 0 ? void 0 : (_resolvedTypes_get = resolvedTypes.get(node_0.id)) === null || _resolvedTypes_get === void 0 ? void 0 : _resolvedTypes_get.get([
                        prevPath.join("."),
                        next
                    ].filter(Boolean).join("")) : next;
                    return fieldFromPath(schemaType_1.of.find((item)=>item.type === "unionOption" ? item.name === name_0 : item), rest, schemaType_1, [
                        ...prevPath,
                        next
                    ]);
                } else {
                    if (schemaType_1.type === "unionOption") return next ? fieldFromPath(schemaType_1.value, path_0, schemaType_1, prevPath) : {
                        field: schemaType_1,
                        parent
                    };
                    if (schemaType_1.type === "inline") {
                        const type_0 = getType(schemaType_1.name, "type");
                        return fieldFromPath(type_0.value, path_0, schemaType_1, prevPath);
                    }
                }
            }
            throw new Error('[@sanity/visual-editing] No field could be resolved at path: "'.concat([
                ...prevPath,
                ...path_0
            ].join("."), '"'));
        }
        const nodePath = node_0.path.split(".").flatMap(_temp$6);
        try {
            return fieldFromPath(schemaType_0, nodePath, void 0);
        } catch (t112) {
            const e = t112;
            return e instanceof Error && console.warn(e.message), {
                field: void 0,
                parent: void 0
            };
        }
    }, $[13] = getType, $[14] = resolvedTypes, $[15] = t9) : t9 = $[15];
    const getField = t9;
    let t10;
    $[16] !== getField || $[17] !== getType ? (t10 = {
        getField,
        getType
    }, $[16] = getField, $[17] = getType, $[18] = t10) : t10 = $[18];
    const context = t10;
    let t11;
    return $[19] !== children || $[20] !== context ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SchemaContext.Provider, {
        value: context,
        children
    }), $[19] = children, $[20] = context, $[21] = t11) : t11 = $[21], t11;
};
function _temp$6(part) {
    return part.includes("[") ? part.split(/(\[.+\])/, 2) : [
        part
    ];
}
const createStore = (initialState)=>{
    let state = initialState;
    const getState = ()=>state, listeners = /* @__PURE__ */ new Set();
    return {
        getState,
        setState: (fn)=>{
            state = fn(state), listeners.forEach((l)=>l());
        },
        subscribe: (listener)=>(listeners.add(listener), ()=>listeners.delete(listener))
    };
}, store = createStore({}), SharedStateProvider = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { comlink, children } = props;
    let t0, t1;
    $[0] !== comlink ? (t0 = ()=>comlink === null || comlink === void 0 ? void 0 : comlink.on("presentation/shared-state", _temp$5), t1 = [
        comlink
    ], $[0] = comlink, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2, t3;
    $[3] !== comlink ? (t2 = ()=>{
        (async function() {
            const value = await (comlink === null || comlink === void 0 ? void 0 : comlink.fetch("visual-editing/shared-state", void 0, {
                suppressWarnings: !0
            }));
            value && store.setState(()=>value.state);
        })().catch(_temp2$3);
    }, t3 = [
        comlink
    ], $[3] = comlink, $[4] = t2, $[5] = t3) : (t2 = $[4], t3 = $[5]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    $[6] !== comlink ? (t4 = {
        comlink,
        store
    }, $[6] = comlink, $[7] = t4) : t4 = $[7];
    const value_0 = t4;
    let t5;
    return $[8] !== children || $[9] !== value_0 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SharedStateContext"].Provider, {
        value: value_0,
        children
    }), $[8] = children, $[9] = value_0, $[10] = t5) : t5 = $[10], t5;
};
function _temp$5(data) {
    "value" in data ? store.setState((prev)=>({
            ...prev,
            [data.key]: data.value
        })) : store.setState((prev_0)=>Object.fromEntries(Object.entries(prev_0).filter((t0)=>{
            const [key] = t0;
            return key !== data.key;
        })));
}
function _temp2$3(reason) {
    console.debug(reason), console.warn("[@sanity/visual-editing]: Failed to fetch shared state. Check your version of `sanity` is up-to-date");
}
const TelemetryProvider = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), { children, comlink } = t0;
    let t1;
    $[0] !== comlink ? (t1 = (name, data)=>{
        if (!comlink) return;
        const event = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["events"][name];
        if (event) comlink.post("visual-editing/telemetry-log", {
            event,
            data
        });
        else throw new Error("Telemetry event: ".concat(name, " does not exist"));
    }, $[0] = comlink, $[1] = t1) : t1 = $[1];
    const log = t1;
    let t2;
    return $[2] !== children || $[3] !== log ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelemetryContext"].Provider, {
        value: log,
        children
    }), $[2] = children, $[3] = log, $[4] = t2) : t2 = $[4], t2;
};
function useController(element, handler, inFrame, inPopUp) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), overlayController = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0), optimisticActorReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActorReady"])();
    let t0, t1;
    return $[0] !== element || $[1] !== handler || $[2] !== inFrame || $[3] !== inPopUp || $[4] !== optimisticActorReady ? (t0 = ()=>{
        if (element) return overlayController.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOverlayController"])({
            handler,
            overlayElement: element,
            inFrame,
            inPopUp,
            optimisticActorReady
        }), ()=>{
            var _overlayController_current;
            (_overlayController_current = overlayController.current) === null || _overlayController_current === void 0 ? void 0 : _overlayController_current.destroy(), overlayController.current = void 0;
        };
    }, t1 = [
        element,
        handler,
        inFrame,
        inPopUp,
        optimisticActorReady
    ], $[0] = element, $[1] = handler, $[2] = inFrame, $[3] = inPopUp, $[4] = optimisticActorReady, $[5] = t0, $[6] = t1) : (t0 = $[5], t1 = $[6]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), overlayController;
}
function usePerspectiveSync(comlink, dispatch) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    let t0, t1;
    $[0] !== comlink || $[1] !== dispatch ? (t0 = ()=>{
        const controller = new AbortController();
        comlink === null || comlink === void 0 ? void 0 : comlink.fetch("visual-editing/fetch-perspective", void 0, {
            signal: controller.signal,
            suppressWarnings: !0
        }).then((data)=>{
            dispatch({
                type: "presentation/perspective",
                data
            });
        }).catch(_temp$4);
        const unsub = comlink === null || comlink === void 0 ? void 0 : comlink.on("presentation/perspective", (data_0)=>{
            dispatch({
                type: "presentation/perspective",
                data: data_0
            });
        });
        return ()=>{
            unsub === null || unsub === void 0 ? void 0 : unsub(), controller.abort();
        };
    }, t1 = [
        comlink,
        dispatch
    ], $[0] = comlink, $[1] = dispatch, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
function _temp$4() {}
function isEqualSets(a, b) {
    if (a === b) return !0;
    if (a.size !== b.size) return !1;
    for (const value of a)if (!b.has(value)) return !1;
    return !0;
}
function useReportDocuments(comlink, elements, perspective) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), lastReported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    let t0;
    $[0] !== comlink ? (t0 = (documents, perspective_0)=>{
        comlink === null || comlink === void 0 ? void 0 : comlink.post("visual-editing/documents", {
            documents,
            perspective: perspective_0
        });
    }, $[0] = comlink, $[1] = t0) : t0 = $[1];
    const reportDocuments = t0;
    let t1, t2;
    $[2] !== elements || $[3] !== perspective || $[4] !== reportDocuments ? (t1 = ()=>{
        const nodes = elements.map(_temp$3).filter(_temp2$2), nodeIds = new Set(nodes.map(_temp3$1));
        if (!lastReported.current || !isEqualSets(nodeIds, lastReported.current.nodeIds) || perspective !== lastReported.current.perspective) {
            const documentsOnPage = Array.from(nodeIds).map((_id)=>{
                const node_0 = nodes.find((node)=>node.id === _id), { type, projectId: _projectId, dataset: _dataset } = node_0;
                return _projectId && _dataset ? {
                    _id,
                    _type: type,
                    _projectId,
                    _dataset
                } : {
                    _id,
                    _type: type
                };
            });
            lastReported.current = {
                nodeIds,
                perspective
            }, reportDocuments(documentsOnPage, perspective);
        }
    }, t2 = [
        elements,
        perspective,
        reportDocuments
    ], $[2] = elements, $[3] = perspective, $[4] = reportDocuments, $[5] = t1, $[6] = t2) : (t1 = $[5], t2 = $[6]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
}
function _temp3$1(e_0) {
    return e_0.id;
}
function _temp2$2(s) {
    return !!s;
}
function _temp$3(e) {
    const { sanity } = e;
    return !sanity || !("id" in sanity) ? null : sanity;
}
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$styled$2d$components$40$6$2e$1$2e$19_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(_templateObject10(), (param)=>{
    let { $zIndex } = param;
    return $zIndex !== null && $zIndex !== void 0 ? $zIndex : "9999999";
});
function raf2(fn) {
    let r0, r1;
    return r0 = requestAnimationFrame(()=>{
        r1 = requestAnimationFrame(fn);
    }), ()=>{
        r0 !== void 0 && cancelAnimationFrame(r0), r1 !== void 0 && cancelAnimationFrame(r1);
    };
}
const DocumentReporter = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { documentIds } = props;
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = [], $[0] = t0) : t0 = $[0];
    const [uniqueIds, setUniqueIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1, t2;
    $[1] !== documentIds ? (t1 = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setUniqueIds((prev)=>{
                var _prev_reduce;
                const next = Array.from(new Set(documentIds));
                return prev.length === next.length && ((_prev_reduce = prev.reduce(_temp$2, next)) === null || _prev_reduce === void 0 ? void 0 : _prev_reduce.length) === 0 ? prev : next;
            }));
    }, t2 = [
        documentIds
    ], $[1] = documentIds, $[2] = t1, $[3] = t2) : (t1 = $[2], t2 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const actor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActor"])();
    let t3, t4;
    return $[4] !== actor || $[5] !== uniqueIds ? (t3 = ()=>{
        for (const id_0 of uniqueIds)actor.send({
            type: "observe",
            documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(id_0)
        }), actor.send({
            type: "observe",
            documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(id_0)
        });
        return ()=>{
            for (const id_1 of uniqueIds)actor.send({
                type: "unobserve",
                documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDraftId"])(id_1)
            }), actor.send({
                type: "unobserve",
                documentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$client$40$7$2e$13$2e$2_debug$40$4$2e$4$2e$3$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(id_1)
            });
        };
    }, t4 = [
        actor,
        uniqueIds
    ], $[4] = actor, $[5] = uniqueIds, $[6] = t3, $[7] = t4) : (t3 = $[6], t4 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4), null;
}, OverlaysController = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12), { comlink, dispatch, inFrame, inPopUp, onDrag, overlayEnabled, rootElement } = props, { dispatchDragEndEvent } = useDragEndEvents(), sendTelemetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$PointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelemetry"])();
    let t0;
    $[0] !== comlink || $[1] !== dispatch || $[2] !== dispatchDragEndEvent || $[3] !== onDrag || $[4] !== sendTelemetry ? (t0 = (message)=>{
        if (message.type === "element/click") {
            const { sanity } = message;
            comlink === null || comlink === void 0 ? void 0 : comlink.post("visual-editing/focus", sanity), sendTelemetry("Visual Editing Overlay Clicked", null);
        } else if (message.type === "overlay/activate") comlink === null || comlink === void 0 ? void 0 : comlink.post("visual-editing/toggle", {
            enabled: !0
        });
        else if (message.type === "overlay/deactivate") comlink === null || comlink === void 0 ? void 0 : comlink.post("visual-editing/toggle", {
            enabled: !1
        });
        else if (message.type === "overlay/dragEnd") {
            const { insertPosition, target, dragGroup, flow, preventInsertDefault } = message;
            dispatchDragEndEvent({
                insertPosition,
                target,
                dragGroup,
                flow,
                preventInsertDefault
            }), insertPosition && sendTelemetry("Visual Editing Drag Sequence Completed", null);
        } else if (message.type === "overlay/dragUpdateCursorPosition") {
            onDrag(message.x, message.y);
            return;
        } else if (message.type === "overlay/dragToggleMinimap" && message.display === !0) sendTelemetry("Visual Editing Drag Minimap Enabled", null);
        else if (message.type === "overlay/setCursor") {
            const { element, cursor } = message;
            cursor ? element.style.cursor = cursor : element.style.removeProperty("cursor");
        }
        dispatch(message);
    }, $[0] = comlink, $[1] = dispatch, $[2] = dispatchDragEndEvent, $[3] = onDrag, $[4] = sendTelemetry, $[5] = t0) : t0 = $[5];
    const controller = useController(rootElement, t0, inFrame, inPopUp);
    let t1;
    $[6] !== controller.current || $[7] !== overlayEnabled ? (t1 = ()=>{
        var _controller_current, _controller_current1;
        overlayEnabled ? (_controller_current = controller.current) === null || _controller_current === void 0 ? void 0 : _controller_current.activate() : (_controller_current1 = controller.current) === null || _controller_current1 === void 0 ? void 0 : _controller_current1.deactivate();
    }, $[6] = controller.current, $[7] = overlayEnabled, $[8] = t1) : t1 = $[8];
    let t2;
    return $[9] !== controller || $[10] !== overlayEnabled ? (t2 = [
        controller,
        overlayEnabled
    ], $[9] = controller, $[10] = overlayEnabled, $[11] = t2) : t2 = $[11], (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2), null;
};
function Overlays(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77), { comlink, comlinkStatus, componentResolver: _componentResolver, inFrame, inPopUp, zIndex } = props, prefersDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersDark"])();
    let t0;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = {
        contextMenu: null,
        dragInsertPosition: null,
        dragShowMinimap: !1,
        dragShowMinimapPrompt: !1,
        dragSkeleton: null,
        elements: [],
        focusPath: "",
        isDragging: !1,
        perspective: "published",
        wasMaybeCollapsed: !1,
        dragMinimapTransition: !1,
        dragGroupRect: null
    }, $[0] = t0) : t0 = $[0];
    const [t1, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(overlayStateReducer, t0), { contextMenu, dragInsertPosition, dragShowMinimap, dragShowMinimapPrompt, dragSkeleton, elements, isDragging, perspective, wasMaybeCollapsed, dragMinimapTransition, dragGroupRect } = t1, [rootElement, setRootElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [overlayEnabled, setOverlayEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0);
    let t2, t3;
    $[1] !== comlink ? (t2 = ()=>{
        const unsubs = [
            comlink === null || comlink === void 0 ? void 0 : comlink.on("presentation/focus", (data)=>{
                dispatch({
                    type: "presentation/focus",
                    data
                });
            }),
            comlink === null || comlink === void 0 ? void 0 : comlink.on("presentation/blur", (data_0)=>{
                dispatch({
                    type: "presentation/blur",
                    data: data_0
                });
            }),
            comlink === null || comlink === void 0 ? void 0 : comlink.on("presentation/toggle-overlay", ()=>{
                setOverlayEnabled(_temp2$1);
            })
        ].filter(Boolean);
        return ()=>unsubs.forEach(_temp3);
    }, t3 = [
        comlink
    ], $[1] = comlink, $[2] = t2, $[3] = t3) : (t2 = $[2], t3 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3), usePerspectiveSync(comlink, dispatch), useReportDocuments(comlink, elements, perspective);
    let t4;
    $[4] !== rootElement ? (t4 = (x, y)=>{
        rootElement && (rootElement.style.setProperty("--drag-preview-x", "".concat(x, "px")), rootElement.style.setProperty("--drag-preview-y", "".concat(y - window.scrollY, "px")));
    }, $[4] = rootElement, $[5] = t4) : t4 = $[5];
    const updateDragPreviewCustomProps = t4;
    let t5, t6;
    $[6] === Symbol.for("react.memo_cache_sentinel") ? (t5 = ()=>{
        const handleClick = _temp4;
        let altPressed = !1;
        const handleKeyUp = (e)=>{
            isAltKey(e) && altPressed && (altPressed = !1, setOverlayEnabled(_temp5));
        }, handleKeydown = (e_0)=>{
            if (isAltKey(e_0)) {
                if (e_0.ctrlKey || e_0.metaKey || e_0.shiftKey) return;
                altPressed || (altPressed = !0, setOverlayEnabled(_temp6));
            }
            isHotkey([
                "mod",
                "\\"
            ], e_0) && setOverlayEnabled(_temp7);
        }, handleWindowBlur = ()=>{
            altPressed && (altPressed = !1, setOverlayEnabled(_temp8));
        };
        return window.addEventListener("click", handleClick), window.addEventListener("keydown", handleKeydown), window.addEventListener("keyup", handleKeyUp), window.addEventListener("blur", handleWindowBlur), ()=>{
            window.removeEventListener("click", handleClick), window.removeEventListener("keydown", handleKeydown), window.removeEventListener("keyup", handleKeyUp), window.removeEventListener("blur", handleWindowBlur);
        };
    }, t6 = [
        setOverlayEnabled
    ], $[6] = t5, $[7] = t6) : (t5 = $[6], t6 = $[7]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const [overlaysFlash, setOverlaysFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [fadingOut, setFadingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), fadeOutTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    let t7, t8;
    $[8] !== overlayEnabled ? (t7 = ()=>{
        if (overlayEnabled) return raf2(()=>{
            setOverlaysFlash(!0), raf2(()=>{
                setFadingOut(!0), fadeOutTimeoutRef.current = setTimeout(()=>{
                    setFadingOut(!1), setOverlaysFlash(!1);
                }, 1500);
            });
        });
        fadeOutTimeoutRef.current && (clearTimeout(fadeOutTimeoutRef.current), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            setOverlaysFlash(!1), setFadingOut(!1);
        }));
    }, t8 = [
        overlayEnabled
    ], $[8] = overlayEnabled, $[9] = t7, $[10] = t8) : (t7 = $[9], t8 = $[10]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    $[11] !== elements ? (t9 = elements.flatMap(_temp9), $[11] = elements, $[12] = t9) : t9 = $[12];
    const documentIds = t9;
    let t10;
    $[13] === Symbol.for("react.memo_cache_sentinel") ? (t10 = ()=>{
        dispatch({
            type: "overlay/blur"
        });
    }, $[13] = t10) : t10 = $[13];
    const closeContextMenu = t10, optimisticActorReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimisticActorReady"])(), componentResolver = optimisticActorReady ? _componentResolver : void 0, [shouldHideActions, setShouldHideActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1);
    !shouldHideActions && inFrame && comlinkStatus === "connected" && setShouldHideActions(!0);
    let t11;
    bb0: {
        if (isDragging) {
            let t123;
            $[14] === Symbol.for("react.memo_cache_sentinel") ? (t123 = [], $[14] = t123) : t123 = $[14], t11 = t123;
            break bb0;
        }
        let t122;
        $[15] !== comlink || $[16] !== componentResolver || $[17] !== dragMinimapTransition || $[18] !== dragShowMinimap || $[19] !== elements || $[20] !== inFrame || $[21] !== isDragging || $[22] !== optimisticActorReady || $[23] !== props.plugins || $[24] !== shouldHideActions || $[25] !== wasMaybeCollapsed ? (t122 = elements.filter(_temp0).map((t132)=>{
            const { id, element: element_0, focused, hovered, rect, sanity, dragDisabled, targets, elementType } = t132, draggable = !dragDisabled && !!element_0.getAttribute("data-sanity") && optimisticActorReady && elements.some((e_2)=>"id" in e_2.sanity && "id" in sanity ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanityNodesExistInSameArray"])(e_2.sanity, sanity) && e_2.sanity.path !== sanity.path : !1);
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ElementOverlay, {
                comlink,
                componentResolver,
                plugins: props.plugins,
                element: element_0,
                enableScrollIntoView: !isDragging && !dragMinimapTransition && !dragShowMinimap,
                id,
                focused,
                hovered,
                node: sanity,
                rect,
                showActions: !shouldHideActions,
                draggable,
                isDragging: isDragging || dragMinimapTransition,
                wasMaybeCollapsed: focused && wasMaybeCollapsed,
                targets,
                elementType,
                inFrame
            }, id);
        }), $[15] = comlink, $[16] = componentResolver, $[17] = dragMinimapTransition, $[18] = dragShowMinimap, $[19] = elements, $[20] = inFrame, $[21] = isDragging, $[22] = optimisticActorReady, $[23] = props.plugins, $[24] = shouldHideActions, $[25] = wasMaybeCollapsed, $[26] = t122) : t122 = $[26], t11 = t122;
    }
    const elementsToRender = t11, t12 = prefersDark ? "dark" : "light", t13 = fadingOut ? "" : void 0, t14 = overlaysFlash ? "" : void 0;
    let t15;
    $[27] !== documentIds || $[28] !== perspective ? (t15 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DocumentReporter, {
        documentIds,
        perspective
    }), $[27] = documentIds, $[28] = perspective, $[29] = t15) : t15 = $[29];
    let t16;
    $[30] !== comlink || $[31] !== inFrame || $[32] !== inPopUp || $[33] !== overlayEnabled || $[34] !== rootElement || $[35] !== updateDragPreviewCustomProps ? (t16 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlaysController, {
        comlink,
        dispatch,
        inFrame,
        inPopUp,
        onDrag: updateDragPreviewCustomProps,
        overlayEnabled,
        rootElement
    }), $[30] = comlink, $[31] = inFrame, $[32] = inPopUp, $[33] = overlayEnabled, $[34] = rootElement, $[35] = updateDragPreviewCustomProps, $[36] = t16) : t16 = $[36];
    let t17;
    $[37] !== contextMenu ? (t17 = contextMenu && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContextMenu, {
        ...contextMenu,
        onDismiss: closeContextMenu
    }), $[37] = contextMenu, $[38] = t17) : t17 = $[38];
    let t18;
    $[39] !== dragGroupRect || $[40] !== dragInsertPosition || $[41] !== dragMinimapTransition || $[42] !== dragShowMinimapPrompt || $[43] !== isDragging ? (t18 = isDragging && !dragMinimapTransition && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            dragInsertPosition && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayDragInsertMarker, {
                dragInsertPosition
            }),
            dragShowMinimapPrompt && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayMinimapPrompt, {}),
            dragGroupRect && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayDragGroupRect, {
                dragGroupRect
            })
        ]
    }), $[39] = dragGroupRect, $[40] = dragInsertPosition, $[41] = dragMinimapTransition, $[42] = dragShowMinimapPrompt, $[43] = isDragging, $[44] = t18) : t18 = $[44];
    let t19;
    $[45] !== dragSkeleton || $[46] !== isDragging ? (t19 = isDragging && dragSkeleton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(OverlayDragPreview, {
        skeleton: dragSkeleton
    }), $[45] = dragSkeleton, $[46] = isDragging, $[47] = t19) : t19 = $[47];
    let t20;
    $[48] !== elementsToRender || $[49] !== t13 || $[50] !== t14 || $[51] !== t15 || $[52] !== t16 || $[53] !== t17 || $[54] !== t18 || $[55] !== t19 || $[56] !== zIndex ? (t20 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Root, {
        "data-fading-out": t13,
        "data-overlays": t14,
        ref: setRootElement,
        $zIndex: zIndex,
        children: [
            t15,
            t16,
            t17,
            elementsToRender,
            t18,
            t19
        ]
    }), $[48] = elementsToRender, $[49] = t13, $[50] = t14, $[51] = t15, $[52] = t16, $[53] = t17, $[54] = t18, $[55] = t19, $[56] = zIndex, $[57] = t20) : t20 = $[57];
    let t21;
    $[58] !== comlink || $[59] !== t20 ? (t21 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SharedStateProvider, {
        comlink,
        children: t20
    }), $[58] = comlink, $[59] = t20, $[60] = t21) : t21 = $[60];
    let t22;
    $[61] !== comlink || $[62] !== t21 ? (t22 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PreviewSnapshotsProvider, {
        comlink,
        children: t21
    }), $[61] = comlink, $[62] = t21, $[63] = t22) : t22 = $[63];
    let t23;
    $[64] !== comlink || $[65] !== elements || $[66] !== t22 ? (t23 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SchemaProvider, {
        comlink,
        elements,
        children: t22
    }), $[64] = comlink, $[65] = elements, $[66] = t22, $[67] = t23) : t23 = $[67];
    let t24;
    $[68] !== rootElement || $[69] !== t23 ? (t24 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerProvider"], {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortalProvider"], {
            element: rootElement,
            children: t23
        })
    }), $[68] = rootElement, $[69] = t23, $[70] = t24) : t24 = $[70];
    let t25;
    $[71] !== t12 || $[72] !== t24 ? (t25 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        scheme: t12,
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioTheme"],
        tone: "transparent",
        children: t24
    }), $[71] = t12, $[72] = t24, $[73] = t25) : t25 = $[73];
    let t26;
    return $[74] !== comlink || $[75] !== t25 ? (t26 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TelemetryProvider, {
        comlink,
        children: t25
    }), $[74] = comlink, $[75] = t25, $[76] = t26) : t26 = $[76], t26;
}
function _temp0(e_1) {
    return e_1.activated || e_1.focused;
}
function _temp9(element) {
    return "id" in element.sanity ? [
        element.sanity.id
    ] : [];
}
function _temp8(enabled_3) {
    return !enabled_3;
}
function _temp7(enabled_2) {
    return !enabled_2;
}
function _temp6(enabled_1) {
    return !enabled_1;
}
function _temp5(enabled_0) {
    return !enabled_0;
}
function _temp4(event) {
    const target = event.target;
    if (((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLAnchorElement"])(target) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$ui$40$3$2e$1$2e$11_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$2d$is$40$_e999df3d4a862f99f5c43858f72aab2f$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(target) && target.closest("a")) && event.altKey) {
        var _event_target;
        event.preventDefault(), event.stopPropagation();
        const newEvent = new MouseEvent(event.type, {
            ...event,
            altKey: !1,
            bubbles: !0,
            cancelable: !0
        });
        (_event_target = event.target) === null || _event_target === void 0 ? void 0 : _event_target.dispatchEvent(newEvent);
    }
}
function _temp3(unsub) {
    return unsub();
}
function _temp2$1(enabled) {
    return !enabled;
}
const IS_MAC = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), MODIFIERS = {
    alt: "altKey",
    ctrl: "ctrlKey",
    mod: IS_MAC ? "metaKey" : "ctrlKey",
    shift: "shiftKey"
};
function isHotkey(keys, event) {
    return keys.every((key)=>MODIFIERS[key] ? event[MODIFIERS[key]] : event.key === key.toUpperCase());
}
function isAltKey(event) {
    return event.key === "Alt";
}
function _temp$2(acc, prevId) {
    return acc.filter((id)=>id !== prevId);
}
const Refresh = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4), { comlink, refresh } = props, manualRefreshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), mutationRefreshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t0, t1;
    return $[0] !== comlink || $[1] !== refresh ? (t0 = ()=>comlink.on("presentation/refresh", (data)=>{
            if (data.source === "manual") {
                var _promise_finally;
                clearTimeout(manualRefreshRef.current);
                const promise = refresh(data);
                if (promise === !1) return;
                comlink.post("visual-editing/refreshing", data);
                let timedOut = !1;
                manualRefreshRef.current = window.setTimeout(()=>{
                    comlink.post("visual-editing/refreshed", data), timedOut = !0;
                }, 3e3), promise === null || promise === void 0 ? void 0 : (_promise_finally = promise.finally) === null || _promise_finally === void 0 ? void 0 : _promise_finally.call(promise, ()=>{
                    timedOut || (clearTimeout(manualRefreshRef.current), comlink.post("visual-editing/refreshed", data));
                });
            } else if (data.source === "mutation") {
                var _promise_0_finally;
                clearTimeout(mutationRefreshRef.current);
                const promise_0 = refresh(data);
                if (promise_0 === !1) return;
                comlink.post("visual-editing/refreshing", data), mutationRefreshRef.current = window.setTimeout(()=>{
                    var _promise_1_finally;
                    const promise_1 = refresh(data);
                    promise_1 !== !1 && (comlink.post("visual-editing/refreshing", data), (promise_1 === null || promise_1 === void 0 ? void 0 : (_promise_1_finally = promise_1.finally) === null || _promise_1_finally === void 0 ? void 0 : _promise_1_finally.call(promise_1, ()=>{
                        comlink.post("visual-editing/refreshed", data);
                    })) || comlink.post("visual-editing/refreshed", data));
                }, 1e3), (promise_0 === null || promise_0 === void 0 ? void 0 : (_promise_0_finally = promise_0.finally) === null || _promise_0_finally === void 0 ? void 0 : _promise_0_finally.call(promise_0, ()=>{
                    comlink.post("visual-editing/refreshed", data);
                })) || comlink.post("visual-editing/refreshed", data);
            }
        }), t1 = [
        comlink,
        refresh
    ], $[0] = comlink, $[1] = refresh, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1), null;
};
function useComlink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9), active = t0 === void 0 ? !0 : t0, [node, setNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    let t1, t2;
    $[0] !== active ? (t1 = ()=>{
        if (!active) return;
        const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNode"])({
            name: "visual-editing",
            connectTo: "presentation"
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$comlink$40$4$2e$0$2e$1$2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeMachine"])().provide({
            actors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$0$2e$1_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createCompatibilityActors"])()
        })), unsub = instance.onStatus(()=>setStatus("connected"), "connected");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setNode(instance));
        const stop = instance.start();
        return ()=>{
            unsub(), stop(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setNode(void 0));
        };
    }, t2 = [
        active
    ], $[0] = active, $[1] = t1, $[2] = t2) : (t1 = $[1], t2 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3, t4;
    $[3] !== status ? (t3 = ()=>{
        if (status === "connected") return;
        const controller = new AbortController();
        return window.addEventListener("message", _temp$1, {
            signal: controller.signal
        }), ()=>{
            controller.abort();
        };
    }, t4 = [
        status
    ], $[3] = status, $[4] = t3, $[5] = t4) : (t3 = $[4], t4 = $[5]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    return $[6] !== node || $[7] !== status ? (t5 = [
        node,
        status
    ], $[6] = node, $[7] = status, $[8] = t5) : t5 = $[8], t5;
}
function _temp$1(t0) {
    const { data, origin } = t0;
    data && typeof data == "object" && "domain" in data && data.domain === "sanity/channels" && "from" in data && data.from === "presentation" && "type" in data && data.type === "presentation/status" && window.parent.postMessage({
        domain: "sanity/channels",
        type: "visual-editing/status",
        data: {
            origin: location.origin
        }
    }, origin);
}
function createSharedListener(comlink) {
    const incomingConnection$ = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$ReplaySubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaySubject"](1), incomingMutations$ = new __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subject"]();
    return comlink.fetch("visual-editing/snapshot-welcome", void 0, {
        suppressWarnings: !0
    }).then((data)=>{
        incomingConnection$.next(data.event);
    }).catch(()=>{}), comlink.on("presentation/snapshot-event", (data)=>{
        data.event.type === "reconnect" && incomingConnection$.next(data.event), data.event.type === "mutation" && incomingMutations$.next(data.event);
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$observable$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(incomingConnection$, incomingMutations$);
}
function useDatasetMutator(comlink) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    let t0, t1;
    $[0] !== comlink ? (t0 = ()=>{
        if (!comlink) return;
        const listener = createSharedListener(comlink), datasetMutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$optimistic$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDatasetMutator"])(comlink), mutator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$xstate$40$5$2e$25$2e$0$2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$235fa0c7$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__createActor$3e$__["createActor"])(datasetMutator, {
            input: {
                client: {
                    withConfig: _temp
                },
                sharedListener: listener
            }
        });
        mutator.start();
        const featuresFetch = new AbortController();
        return comlink.fetch("visual-editing/features", void 0, {
            signal: featuresFetch.signal,
            suppressWarnings: !0
        }).then((data)=>{
            data.features.optimistic && (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$visual$2d$editing$40$4$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$2$2e$2_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity_dc52865a9402a3b2b7ef4b545655571f$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActor"])(mutator);
        }).catch(_temp2), ()=>{
            mutator.stop(), featuresFetch.abort();
        };
    }, t1 = [
        comlink
    ], $[0] = comlink, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
function _temp2() {
    console.warn("[@sanity/visual-editing] Package version mismatch detected: Please update your Sanity studio to prevent potential compatibility issues.");
}
function _temp() {}
const VisualEditing = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$1$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23), { components, plugins, history, portal: t0, refresh, zIndex } = props, portal = t0 === void 0 ? !0 : t0, [inFrame, setInFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [inPopUp, setInPopUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1, t2;
    $[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
            setInFrame((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$0$2e$1_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewIframe"])()), setInPopUp((0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f40$sanity$2b$presentation$2d$comlink$40$2$2e$0$2e$1_$40$sanity$2b$client$40$7$2e$13$2e$2_$40$sanity$2b$types$40$4$2e$22$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_$2f$node_modules$2f40$sanity$2f$presentation$2d$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaybePreviewWindow"])());
        });
    }, t2 = [], $[0] = t1, $[1] = t2) : (t1 = $[0], t2 = $[1]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const [portalElement, setPortalElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t3, t4;
    $[2] !== portal ? (t3 = ()=>{
        if (portal === !1) return;
        const node = document.createElement("sanity-visual-editing");
        return document.documentElement.appendChild(node), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPortalElement(node)), ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPortalElement(null)), document.documentElement.contains(node) && document.documentElement.removeChild(node);
        };
    }, t4 = [
        portal
    ], $[2] = portal, $[3] = t3, $[4] = t4) : (t3 = $[3], t4 = $[4]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const [comlink, comlinkStatus] = useComlink(inFrame === !0 || inPopUp === !0);
    useDatasetMutator(comlinkStatus === "connected" ? comlink : void 0);
    let t5;
    $[5] !== comlink || $[6] !== comlinkStatus || $[7] !== components || $[8] !== inFrame || $[9] !== inPopUp || $[10] !== plugins || $[11] !== zIndex ? (t5 = inFrame !== null && inPopUp !== null && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Overlays, {
        comlink,
        comlinkStatus,
        componentResolver: components,
        plugins,
        inFrame,
        inPopUp,
        zIndex
    }), $[5] = comlink, $[6] = comlinkStatus, $[7] = components, $[8] = inFrame, $[9] = inPopUp, $[10] = plugins, $[11] = zIndex, $[12] = t5) : t5 = $[12];
    let t6;
    $[13] !== comlink || $[14] !== history || $[15] !== refresh ? (t6 = comlink && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(History, {
                comlink,
                history
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Meta, {
                comlink
            }),
            refresh && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Refresh, {
                comlink,
                refresh
            })
        ]
    }), $[13] = comlink, $[14] = history, $[15] = refresh, $[16] = t6) : t6 = $[16];
    let t7;
    $[17] !== t5 || $[18] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            t5,
            t6
        ]
    }), $[17] = t5, $[18] = t6, $[19] = t7) : t7 = $[19];
    const children = t7;
    if (portal === !1 || !portalElement) return children;
    let t8;
    return $[20] !== children || $[21] !== portalElement ? (t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$masterthepixel$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$9_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$57$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(children, portalElement), $[20] = children, $[21] = portalElement, $[22] = t8) : t8 = $[22], t8;
};
VisualEditing.displayName = "VisualEditing";
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=e48f8_%40sanity_visual-editing_dist_6226773d._.js.map