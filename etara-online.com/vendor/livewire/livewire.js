! function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : (global = global || self).Livewire = factory()
}(this, (function() {
    "use strict";

    function _typeof(obj) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        })(obj)
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor
    }

    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter((function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable
            }))), keys.push.apply(keys, symbols)
        }
        return keys
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                _defineProperty(target, key, source[key])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
            }))
        }
        return target
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass)
    }

    function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
            return o.__proto__ || Object.getPrototypeOf(o)
        })(o)
    }

    function _setPrototypeOf(o, p) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
            return o.__proto__ = p, o
        })(o, p)
    }

    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function _assertThisInitialized(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self
    }

    function _possibleConstructorReturn(self, call) {
        return !call || "object" != typeof call && "function" != typeof call ? _assertThisInitialized(self) : call
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function() {
            var result, Super = _getPrototypeOf(Derived);
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget)
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result)
        }
    }

    function _superPropBase(object, property) {
        for (; !Object.prototype.hasOwnProperty.call(object, property) && null !== (object = _getPrototypeOf(object)););
        return object
    }

    function _get(target, property, receiver) {
        return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (base) {
                var desc = Object.getOwnPropertyDescriptor(base, property);
                return desc.get ? desc.get.call(receiver) : desc.value
            }
        })(target, property, receiver || target)
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
    }

    function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest()
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread()
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr)
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr
    }

    function _iterableToArray(iter) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter)
    }

    function _iterableToArrayLimit(arr, i) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
            var _arr = [],
                _n = !0,
                _d = !1,
                _e = void 0;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
            } catch (err) {
                _d = !0, _e = err
            } finally {
                try {
                    _n || null == _i.return || _i.return()
                } finally {
                    if (_d) throw _e
                }
            }
            return _arr
        }
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (o) {
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0
        }
    }

    function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var ceil = Math.ceil,
        floor = Math.floor,
        toInteger = function(argument) {
            return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument)
        },
        requireObjectCoercible = function(it) {
            if (null == it) throw TypeError("Can't call method on " + it);
            return it
        },
        createMethod = function(CONVERT_TO_STRING) {
            return function($this, pos) {
                var first, second, S = String(requireObjectCoercible($this)),
                    position = toInteger(pos),
                    size = S.length;
                return position < 0 || position >= size ? CONVERT_TO_STRING ? "" : void 0 : (first = S.charCodeAt(position)) < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : second - 56320 + (first - 55296 << 10) + 65536
            }
        },
        stringMultibyte = {
            codeAt: createMethod(!1),
            charAt: createMethod(!0)
        },
        commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule(fn, module) {
        return fn(module = {
            exports: {}
        }, module.exports), module.exports
    }
    var check = function(it) {
            return it && it.Math == Math && it
        },
        global_1 = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof commonjsGlobal && commonjsGlobal) || Function("return this")(),
        fails = function(exec) {
            try {
                return !!exec()
            } catch (error) {
                return !0
            }
        },
        descriptors = !fails((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        isObject = function(it) {
            return "object" == typeof it ? null !== it : "function" == typeof it
        },
        document$1 = global_1.document,
        EXISTS = isObject(document$1) && isObject(document$1.createElement),
        documentCreateElement = function(it) {
            return EXISTS ? document$1.createElement(it) : {}
        },
        ie8DomDefine = !descriptors && !fails((function() {
            return 7 != Object.defineProperty(documentCreateElement("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        anObject = function(it) {
            if (!isObject(it)) throw TypeError(String(it) + " is not an object");
            return it
        },
        toPrimitive = function(input, PREFERRED_STRING) {
            if (!isObject(input)) return input;
            var fn, val;
            if (PREFERRED_STRING && "function" == typeof(fn = input.toString) && !isObject(val = fn.call(input))) return val;
            if ("function" == typeof(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
            if (!PREFERRED_STRING && "function" == typeof(fn = input.toString) && !isObject(val = fn.call(input))) return val;
            throw TypeError("Can't convert object to primitive value")
        },
        nativeDefineProperty = Object.defineProperty,
        f = descriptors ? nativeDefineProperty : function(O, P, Attributes) {
            if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), ie8DomDefine) try {
                return nativeDefineProperty(O, P, Attributes)
            } catch (error) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
            return "value" in Attributes && (O[P] = Attributes.value), O
        },
        objectDefineProperty = {
            f: f
        },
        createPropertyDescriptor = function(bitmap, value) {
            return {
                enumerable: !(1 & bitmap),
                configurable: !(2 & bitmap),
                writable: !(4 & bitmap),
                value: value
            }
        },
        createNonEnumerableProperty = descriptors ? function(object, key, value) {
            return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value))
        } : function(object, key, value) {
            return object[key] = value, object
        },
        setGlobal = function(key, value) {
            try {
                createNonEnumerableProperty(global_1, key, value)
            } catch (error) {
                global_1[key] = value
            }
            return value
        },
        SHARED = "__core-js_shared__",
        store = global_1[SHARED] || setGlobal(SHARED, {}),
        sharedStore = store,
        functionToString = Function.toString;
    "function" != typeof sharedStore.inspectSource && (sharedStore.inspectSource = function(it) {
        return functionToString.call(it)
    });
    var inspectSource = sharedStore.inspectSource,
        WeakMap = global_1.WeakMap,
        nativeWeakMap = "function" == typeof WeakMap && /native code/.test(inspectSource(WeakMap)),
        hasOwnProperty = {}.hasOwnProperty,
        has = function(it, key) {
            return hasOwnProperty.call(it, key)
        },
        shared = createCommonjsModule((function(module) {
            (module.exports = function(key, value) {
                return sharedStore[key] || (sharedStore[key] = void 0 !== value ? value : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        id = 0,
        postfix = Math.random(),
        uid = function(key) {
            return "Symbol(" + String(void 0 === key ? "" : key) + ")_" + (++id + postfix).toString(36)
        },
        keys = shared("keys"),
        sharedKey = function(key) {
            return keys[key] || (keys[key] = uid(key))
        },
        hiddenKeys = {},
        WeakMap$1 = global_1.WeakMap,
        set, get, has$1, enforce = function(it) {
            return has$1(it) ? get(it) : set(it, {})
        },
        getterFor = function(TYPE) {
            return function(it) {
                var state;
                if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                return state
            }
        };
    if (nativeWeakMap) {
        var store$1 = new WeakMap$1,
            wmget = store$1.get,
            wmhas = store$1.has,
            wmset = store$1.set;
        set = function(it, metadata) {
            return wmset.call(store$1, it, metadata), metadata
        }, get = function(it) {
            return wmget.call(store$1, it) || {}
        }, has$1 = function(it) {
            return wmhas.call(store$1, it)
        }
    } else {
        var STATE = sharedKey("state");
        hiddenKeys[STATE] = !0, set = function(it, metadata) {
            return createNonEnumerableProperty(it, STATE, metadata), metadata
        }, get = function(it) {
            return has(it, STATE) ? it[STATE] : {}
        }, has$1 = function(it) {
            return has(it, STATE)
        }
    }
    var internalState = {
            set: set,
            get: get,
            has: has$1,
            enforce: enforce,
            getterFor: getterFor
        },
        nativePropertyIsEnumerable = {}.propertyIsEnumerable,
        getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
        NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
            1: 2
        }, 1),
        f$1 = NASHORN_BUG ? function(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable
        } : nativePropertyIsEnumerable,
        objectPropertyIsEnumerable = {
            f: f$1
        },
        toString = {}.toString,
        classofRaw = function(it) {
            return toString.call(it).slice(8, -1)
        },
        split = "".split,
        indexedObject = fails((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(it) {
            return "String" == classofRaw(it) ? split.call(it, "") : Object(it)
        } : Object,
        toIndexedObject = function(it) {
            return indexedObject(requireObjectCoercible(it))
        },
        nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
        f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function(O, P) {
            if (O = toIndexedObject(O), P = toPrimitive(P, !0), ie8DomDefine) try {
                return nativeGetOwnPropertyDescriptor(O, P)
            } catch (error) {}
            if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P])
        },
        objectGetOwnPropertyDescriptor = {
            f: f$2
        },
        redefine = createCommonjsModule((function(module) {
            var getInternalState = internalState.get,
                enforceInternalState = internalState.enforce,
                TEMPLATE = String(String).split("String");
            (module.exports = function(O, key, value, options) {
                var unsafe = !!options && !!options.unsafe,
                    simple = !!options && !!options.enumerable,
                    noTargetGet = !!options && !!options.noTargetGet;
                "function" == typeof value && ("string" != typeof key || has(value, "name") || createNonEnumerableProperty(value, "name", key), enforceInternalState(value).source = TEMPLATE.join("string" == typeof key ? key : "")), O !== global_1 ? (unsafe ? !noTargetGet && O[key] && (simple = !0) : delete O[key], simple ? O[key] = value : createNonEnumerableProperty(O, key, value)) : simple ? O[key] = value : setGlobal(key, value)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && getInternalState(this).source || inspectSource(this)
            }))
        })),
        path = global_1,
        aFunction = function(variable) {
            return "function" == typeof variable ? variable : void 0
        },
        getBuiltIn = function(namespace, method) {
            return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method]
        },
        min = Math.min,
        toLength = function(argument) {
            return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0
        },
        max = Math.max,
        min$1 = Math.min,
        toAbsoluteIndex = function(index, length) {
            var integer = toInteger(index);
            return integer < 0 ? max(integer + length, 0) : min$1(integer, length)
        },
        createMethod$1 = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var value, O = toIndexedObject($this),
                    length = toLength(O.length),
                    index = toAbsoluteIndex(fromIndex, length);
                if (IS_INCLUDES && el != el) {
                    for (; length > index;)
                        if ((value = O[index++]) != value) return !0
                } else
                    for (; length > index; index++)
                        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                return !IS_INCLUDES && -1
            }
        },
        arrayIncludes = {
            includes: createMethod$1(!0),
            indexOf: createMethod$1(!1)
        },
        indexOf = arrayIncludes.indexOf,
        objectKeysInternal = function(object, names) {
            var key, O = toIndexedObject(object),
                i = 0,
                result = [];
            for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
            for (; names.length > i;) has(O, key = names[i++]) && (~indexOf(result, key) || result.push(key));
            return result
        },
        enumBugKeys = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        hiddenKeys$1 = enumBugKeys.concat("length", "prototype"),
        f$3 = Object.getOwnPropertyNames || function(O) {
            return objectKeysInternal(O, hiddenKeys$1)
        },
        objectGetOwnPropertyNames = {
            f: f$3
        },
        f$4 = Object.getOwnPropertySymbols,
        objectGetOwnPropertySymbols = {
            f: f$4
        },
        ownKeys$1 = getBuiltIn("Reflect", "ownKeys") || function(it) {
            var keys = objectGetOwnPropertyNames.f(anObject(it)),
                getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
            return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys
        },
        copyConstructorProperties = function(target, source) {
            for (var keys = ownKeys$1(source), defineProperty = objectDefineProperty.f, getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f, i = 0; i < keys.length; i++) {
                var key = keys[i];
                has(target, key) || defineProperty(target, key, getOwnPropertyDescriptor(source, key))
            }
        },
        replacement = /#|\.prototype\./,
        isForced = function(feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL || value != NATIVE && ("function" == typeof detection ? fails(detection) : !!detection)
        },
        normalize = isForced.normalize = function(string) {
            return String(string).replace(replacement, ".").toLowerCase()
        },
        data = isForced.data = {},
        NATIVE = isForced.NATIVE = "N",
        POLYFILL = isForced.POLYFILL = "P",
        isForced_1 = isForced,
        getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f,
        _export = function(options, source) {
            var target, key, targetProperty, sourceProperty, descriptor, TARGET = options.target,
                GLOBAL = options.global,
                STATIC = options.stat;
            if (target = GLOBAL ? global_1 : STATIC ? global_1[TARGET] || setGlobal(TARGET, {}) : (global_1[TARGET] || {}).prototype)
                for (key in source) {
                    if (sourceProperty = source[key], targetProperty = options.noTargetGet ? (descriptor = getOwnPropertyDescriptor$1(target, key)) && descriptor.value : target[key], !isForced_1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced) && void 0 !== targetProperty) {
                        if (typeof sourceProperty == typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty)
                    }(options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), redefine(target, key, sourceProperty, options)
                }
        },
        toObject = function(argument) {
            return Object(requireObjectCoercible(argument))
        },
        correctPrototypeGetter = !fails((function() {
            function F() {}
            return F.prototype.constructor = null, Object.getPrototypeOf(new F) !== F.prototype
        })),
        IE_PROTO = sharedKey("IE_PROTO"),
        ObjectPrototype = Object.prototype,
        objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function(O) {
            return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectPrototype : null
        },
        nativeSymbol = !!Object.getOwnPropertySymbols && !fails((function() {
            return !String(Symbol())
        })),
        useSymbolAsUid = nativeSymbol && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        WellKnownSymbolsStore = shared("wks"),
        Symbol$1 = global_1.Symbol,
        createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid,
        wellKnownSymbol = function(name) {
            return has(WellKnownSymbolsStore, name) || (nativeSymbol && has(Symbol$1, name) ? WellKnownSymbolsStore[name] = Symbol$1[name] : WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name)), WellKnownSymbolsStore[name]
        },
        ITERATOR = wellKnownSymbol("iterator"),
        BUGGY_SAFARI_ITERATORS = !1,
        returnThis = function() {
            return this
        },
        IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
    [].keys && (arrayIterator = [].keys(), "next" in arrayIterator ? (PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)), PrototypeOfArrayIteratorPrototype !== Object.prototype && (IteratorPrototype = PrototypeOfArrayIteratorPrototype)) : BUGGY_SAFARI_ITERATORS = !0), null == IteratorPrototype && (IteratorPrototype = {}), has(IteratorPrototype, ITERATOR) || createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
    var iteratorsCore = {
            IteratorPrototype: IteratorPrototype,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
        },
        objectKeys = Object.keys || function(O) {
            return objectKeysInternal(O, enumBugKeys)
        },
        objectDefineProperties = descriptors ? Object.defineProperties : function(O, Properties) {
            anObject(O);
            for (var key, keys = objectKeys(Properties), length = keys.length, index = 0; length > index;) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
            return O
        },
        html = getBuiltIn("document", "documentElement"),
        GT = ">",
        LT = "<",
        PROTOTYPE = "prototype",
        SCRIPT = "script",
        IE_PROTO$1 = sharedKey("IE_PROTO"),
        EmptyConstructor = function() {},
        scriptTag = function(content) {
            return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT
        },
        NullProtoObjectViaActiveX = function(activeXDocument) {
            activeXDocument.write(scriptTag("")), activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            return activeXDocument = null, temp
        },
        NullProtoObjectViaIFrame = function() {
            var iframeDocument, iframe = documentCreateElement("iframe"),
                JS = "java" + SCRIPT + ":";
            return iframe.style.display = "none", html.appendChild(iframe), iframe.src = String(JS), (iframeDocument = iframe.contentWindow.document).open(), iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F
        },
        activeXDocument, NullProtoObject = function() {
            try {
                activeXDocument = document.domain && new ActiveXObject("htmlfile")
            } catch (error) {}
            NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
            for (var length = enumBugKeys.length; length--;) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            return NullProtoObject()
        };
    hiddenKeys[IE_PROTO$1] = !0;
    var objectCreate = Object.create || function(O, Properties) {
            var result;
            return null !== O ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor, EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO$1] = O) : result = NullProtoObject(), void 0 === Properties ? result : objectDefineProperties(result, Properties)
        },
        defineProperty = objectDefineProperty.f,
        TO_STRING_TAG = wellKnownSymbol("toStringTag"),
        setToStringTag = function(it, TAG, STATIC) {
            it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG) && defineProperty(it, TO_STRING_TAG, {
                configurable: !0,
                value: TAG
            })
        },
        iterators = {},
        IteratorPrototype$1 = iteratorsCore.IteratorPrototype,
        returnThis$1 = function() {
            return this
        },
        createIteratorConstructor = function(IteratorConstructor, NAME, next) {
            var TO_STRING_TAG = NAME + " Iterator";
            return IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
                next: createPropertyDescriptor(1, next)
            }), setToStringTag(IteratorConstructor, TO_STRING_TAG, !1), iterators[TO_STRING_TAG] = returnThis$1, IteratorConstructor
        },
        aPossiblePrototype = function(it) {
            if (!isObject(it) && null !== it) throw TypeError("Can't set " + String(it) + " as a prototype");
            return it
        },
        objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var setter, CORRECT_SETTER = !1,
                test = {};
            try {
                (setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(test, []), CORRECT_SETTER = test instanceof Array
            } catch (error) {}
            return function(O, proto) {
                return anObject(O), aPossiblePrototype(proto), CORRECT_SETTER ? setter.call(O, proto) : O.__proto__ = proto, O
            }
        }() : void 0),
        IteratorPrototype$2 = iteratorsCore.IteratorPrototype,
        BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS,
        ITERATOR$1 = wellKnownSymbol("iterator"),
        KEYS = "keys",
        VALUES = "values",
        ENTRIES = "entries",
        returnThis$2 = function() {
            return this
        },
        defineIterator = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);
            var CurrentIteratorPrototype, methods, KEY, getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch (KIND) {
                        case KEYS:
                        case VALUES:
                        case ENTRIES:
                            return function() {
                                return new IteratorConstructor(this, KIND)
                            }
                    }
                    return function() {
                        return new IteratorConstructor(this)
                    }
                },
                TO_STRING_TAG = NAME + " Iterator",
                INCORRECT_VALUES_NAME = !1,
                IterablePrototype = Iterable.prototype,
                nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT],
                defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT),
                anyNativeIterator = "Array" == NAME && IterablePrototype.entries || nativeIterator;
            if (anyNativeIterator && (CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable)), IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next && (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2 && (objectSetPrototypeOf ? objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2) : "function" != typeof CurrentIteratorPrototype[ITERATOR$1] && createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2)), setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, !0))), DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES && (INCORRECT_VALUES_NAME = !0, defaultIterator = function() {
                    return nativeIterator.call(this)
                }), IterablePrototype[ITERATOR$1] !== defaultIterator && createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator), iterators[NAME] = defaultIterator, DEFAULT)
                if (methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    }, FORCED)
                    for (KEY in methods) !BUGGY_SAFARI_ITERATORS$1 && !INCORRECT_VALUES_NAME && KEY in IterablePrototype || redefine(IterablePrototype, KEY, methods[KEY]);
                else _export({
                    target: NAME,
                    proto: !0,
                    forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
                }, methods);
            return methods
        },
        charAt = stringMultibyte.charAt,
        STRING_ITERATOR = "String Iterator",
        setInternalState = internalState.set,
        getInternalState = internalState.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", (function(iterated) {
        setInternalState(this, {
            type: STRING_ITERATOR,
            string: String(iterated),
            index: 0
        })
    }), (function() {
        var point, state = getInternalState(this),
            string = state.string,
            index = state.index;
        return index >= string.length ? {
            value: void 0,
            done: !0
        } : (point = charAt(string, index), state.index += point.length, {
            value: point,
            done: !1
        })
    }));
    var aFunction$1 = function(it) {
            if ("function" != typeof it) throw TypeError(String(it) + " is not a function");
            return it
        },
        functionBindContext = function(fn, that, length) {
            if (aFunction$1(fn), void 0 === that) return fn;
            switch (length) {
                case 0:
                    return function() {
                        return fn.call(that)
                    };
                case 1:
                    return function(a) {
                        return fn.call(that, a)
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b)
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c)
                    }
            }
            return function() {
                return fn.apply(that, arguments)
            }
        },
        callWithSafeIterationClosing = function(iterator, fn, value, ENTRIES) {
            try {
                return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value)
            } catch (error) {
                var returnMethod = iterator.return;
                throw void 0 !== returnMethod && anObject(returnMethod.call(iterator)), error
            }
        },
        ITERATOR$2 = wellKnownSymbol("iterator"),
        ArrayPrototype = Array.prototype,
        isArrayIteratorMethod = function(it) {
            return void 0 !== it && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it)
        },
        createProperty = function(object, key, value) {
            var propertyKey = toPrimitive(key);
            propertyKey in object ? objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value)) : object[propertyKey] = value
        },
        TO_STRING_TAG$1 = wellKnownSymbol("toStringTag"),
        test = {};
    test[TO_STRING_TAG$1] = "z";
    var toStringTagSupport = "[object z]" === String(test),
        TO_STRING_TAG$2 = wellKnownSymbol("toStringTag"),
        CORRECT_ARGUMENTS = "Arguments" == classofRaw(function() {
            return arguments
        }()),
        tryGet = function(it, key) {
            try {
                return it[key]
            } catch (error) {}
        },
        classof = toStringTagSupport ? classofRaw : function(it) {
            var O, tag, result;
            return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof(tag = tryGet(O = Object(it), TO_STRING_TAG$2)) ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : "Object" == (result = classofRaw(O)) && "function" == typeof O.callee ? "Arguments" : result
        },
        ITERATOR$3 = wellKnownSymbol("iterator"),
        getIteratorMethod = function(it) {
            if (null != it) return it[ITERATOR$3] || it["@@iterator"] || iterators[classof(it)]
        },
        arrayFrom = function(arrayLike) {
            var length, result, step, iterator, next, value, O = toObject(arrayLike),
                C = "function" == typeof this ? this : Array,
                argumentsLength = arguments.length,
                mapfn = argumentsLength > 1 ? arguments[1] : void 0,
                mapping = void 0 !== mapfn,
                iteratorMethod = getIteratorMethod(O),
                index = 0;
            if (mapping && (mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2)), null == iteratorMethod || C == Array && isArrayIteratorMethod(iteratorMethod))
                for (result = new C(length = toLength(O.length)); length > index; index++) value = mapping ? mapfn(O[index], index) : O[index], createProperty(result, index, value);
            else
                for (next = (iterator = iteratorMethod.call(O)).next, result = new C; !(step = next.call(iterator)).done; index++) value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], !0) : step.value, createProperty(result, index, value);
            return result.length = index, result
        },
        ITERATOR$4 = wellKnownSymbol("iterator"),
        SAFE_CLOSING = !1;
    try {
        var called = 0,
            iteratorWithReturn = {
                next: function() {
                    return {
                        done: !!called++
                    }
                },
                return: function() {
                    SAFE_CLOSING = !0
                }
            };
        iteratorWithReturn[ITERATOR$4] = function() {
            return this
        }, Array.from(iteratorWithReturn, (function() {
            throw 2
        }))
    } catch (error) {}
    var checkCorrectnessOfIteration = function(exec, SKIP_CLOSING) {
            if (!SKIP_CLOSING && !SAFE_CLOSING) return !1;
            var ITERATION_SUPPORT = !1;
            try {
                var object = {};
                object[ITERATOR$4] = function() {
                    return {
                        next: function() {
                            return {
                                done: ITERATION_SUPPORT = !0
                            }
                        }
                    }
                }, exec(object)
            } catch (error) {}
            return ITERATION_SUPPORT
        },
        INCORRECT_ITERATION = !checkCorrectnessOfIteration((function(iterable) {
            Array.from(iterable)
        }));
    _export({
        target: "Array",
        stat: !0,
        forced: INCORRECT_ITERATION
    }, {
        from: arrayFrom
    });
    var from_1 = path.Array.from,
        UNSCOPABLES = wellKnownSymbol("unscopables"),
        ArrayPrototype$1 = Array.prototype;
    null == ArrayPrototype$1[UNSCOPABLES] && objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
        configurable: !0,
        value: objectCreate(null)
    });
    var addToUnscopables = function(key) {
            ArrayPrototype$1[UNSCOPABLES][key] = !0
        },
        defineProperty$1 = Object.defineProperty,
        cache = {},
        thrower = function(it) {
            throw it
        },
        arrayMethodUsesToLength = function(METHOD_NAME, options) {
            if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
            options || (options = {});
            var method = [][METHOD_NAME],
                ACCESSORS = !!has(options, "ACCESSORS") && options.ACCESSORS,
                argument0 = has(options, 0) ? options[0] : thrower,
                argument1 = has(options, 1) ? options[1] : void 0;
            return cache[METHOD_NAME] = !!method && !fails((function() {
                if (ACCESSORS && !descriptors) return !0;
                var O = {
                    length: -1
                };
                ACCESSORS ? defineProperty$1(O, 1, {
                    enumerable: !0,
                    get: thrower
                }) : O[1] = 1, method.call(O, argument0, argument1)
            }))
        },
        $includes = arrayIncludes.includes,
        USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    _export({
        target: "Array",
        proto: !0,
        forced: !USES_TO_LENGTH
    }, {
        includes: function(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), addToUnscopables("includes");
    var call = Function.call,
        entryUnbind = function(CONSTRUCTOR, METHOD, length) {
            return functionBindContext(call, global_1[CONSTRUCTOR].prototype[METHOD], length)
        },
        includes = entryUnbind("Array", "includes"),
        isArray = Array.isArray || function(arg) {
            return "Array" == classofRaw(arg)
        },
        flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
            for (var element, targetIndex = start, sourceIndex = 0, mapFn = !!mapper && functionBindContext(mapper, thisArg, 3); sourceIndex < sourceLen;) {
                if (sourceIndex in source) {
                    if (element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex], depth > 0 && isArray(element)) targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
                    else {
                        if (targetIndex >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                        target[targetIndex] = element
                    }
                    targetIndex++
                }
                sourceIndex++
            }
            return targetIndex
        },
        flattenIntoArray_1 = flattenIntoArray,
        SPECIES = wellKnownSymbol("species"),
        arraySpeciesCreate = function(originalArray, length) {
            var C;
            return isArray(originalArray) && ("function" != typeof(C = originalArray.constructor) || C !== Array && !isArray(C.prototype) ? isObject(C) && null === (C = C[SPECIES]) && (C = void 0) : C = void 0), new(void 0 === C ? Array : C)(0 === length ? 0 : length)
        };
    _export({
        target: "Array",
        proto: !0
    }, {
        flat: function() {
            var depthArg = arguments.length ? arguments[0] : void 0,
                O = toObject(this),
                sourceLen = toLength(O.length),
                A = arraySpeciesCreate(O, 0);
            return A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, void 0 === depthArg ? 1 : toInteger(depthArg)), A
        }
    }), addToUnscopables("flat");
    var flat = entryUnbind("Array", "flat"),
        push = [].push,
        createMethod$2 = function(TYPE) {
            var IS_MAP = 1 == TYPE,
                IS_FILTER = 2 == TYPE,
                IS_SOME = 3 == TYPE,
                IS_EVERY = 4 == TYPE,
                IS_FIND_INDEX = 6 == TYPE,
                NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
            return function($this, callbackfn, that, specificCreate) {
                for (var value, result, O = toObject($this), self = indexedObject(O), boundFunction = functionBindContext(callbackfn, that, 3), length = toLength(self.length), index = 0, create = specificCreate || arraySpeciesCreate, target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0; length > index; index++)
                    if ((NO_HOLES || index in self) && (result = boundFunction(value = self[index], index, O), TYPE))
                        if (IS_MAP) target[index] = result;
                        else if (result) switch (TYPE) {
                    case 3:
                        return !0;
                    case 5:
                        return value;
                    case 6:
                        return index;
                    case 2:
                        push.call(target, value)
                } else if (IS_EVERY) return !1;
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
            }
        },
        arrayIteration = {
            forEach: createMethod$2(0),
            map: createMethod$2(1),
            filter: createMethod$2(2),
            some: createMethod$2(3),
            every: createMethod$2(4),
            find: createMethod$2(5),
            findIndex: createMethod$2(6)
        },
        $find = arrayIteration.find,
        FIND = "find",
        SKIPS_HOLES = !0,
        USES_TO_LENGTH$1 = arrayMethodUsesToLength(FIND);
    FIND in [] && Array(1)[FIND]((function() {
        SKIPS_HOLES = !1
    })), _export({
        target: "Array",
        proto: !0,
        forced: SKIPS_HOLES || !USES_TO_LENGTH$1
    }, {
        find: function(callbackfn) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), addToUnscopables(FIND);
    var find = entryUnbind("Array", "find"),
        nativeAssign = Object.assign,
        defineProperty$2 = Object.defineProperty,
        objectAssign = !nativeAssign || fails((function() {
            if (descriptors && 1 !== nativeAssign({
                    b: 1
                }, nativeAssign(defineProperty$2({}, "a", {
                    enumerable: !0,
                    get: function() {
                        defineProperty$2(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var A = {},
                B = {},
                symbol = Symbol();
            return A[symbol] = 7, "abcdefghijklmnopqrst".split("").forEach((function(chr) {
                B[chr] = chr
            })), 7 != nativeAssign({}, A)[symbol] || "abcdefghijklmnopqrst" != objectKeys(nativeAssign({}, B)).join("")
        })) ? function(target, source) {
            for (var T = toObject(target), argumentsLength = arguments.length, index = 1, getOwnPropertySymbols = objectGetOwnPropertySymbols.f, propertyIsEnumerable = objectPropertyIsEnumerable.f; argumentsLength > index;)
                for (var key, S = indexedObject(arguments[index++]), keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S), length = keys.length, j = 0; length > j;) key = keys[j++], descriptors && !propertyIsEnumerable.call(S, key) || (T[key] = S[key]);
            return T
        } : nativeAssign;
    _export({
        target: "Object",
        stat: !0,
        forced: Object.assign !== objectAssign
    }, {
        assign: objectAssign
    });
    var assign = path.Object.assign,
        objectToString = toStringTagSupport ? {}.toString : function() {
            return "[object " + classof(this) + "]"
        };
    toStringTagSupport || redefine(Object.prototype, "toString", objectToString, {
        unsafe: !0
    });
    var domIterables = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        ARRAY_ITERATOR = "Array Iterator",
        setInternalState$1 = internalState.set,
        getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR),
        es_array_iterator = defineIterator(Array, "Array", (function(iterated, kind) {
            setInternalState$1(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated),
                index: 0,
                kind: kind
            })
        }), (function() {
            var state = getInternalState$1(this),
                target = state.target,
                kind = state.kind,
                index = state.index++;
            return !target || index >= target.length ? (state.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == kind ? {
                value: index,
                done: !1
            } : "values" == kind ? {
                value: target[index],
                done: !1
            } : {
                value: [index, target[index]],
                done: !1
            }
        }), "values");
    iterators.Arguments = iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), addToUnscopables("entries");
    var ITERATOR$5 = wellKnownSymbol("iterator"),
        TO_STRING_TAG$3 = wellKnownSymbol("toStringTag"),
        ArrayValues = es_array_iterator.values;
    for (var COLLECTION_NAME in domIterables) {
        var Collection = global_1[COLLECTION_NAME],
            CollectionPrototype = Collection && Collection.prototype;
        if (CollectionPrototype) {
            if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
                createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues)
            } catch (error) {
                CollectionPrototype[ITERATOR$5] = ArrayValues
            }
            if (CollectionPrototype[TO_STRING_TAG$3] || createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME), domIterables[COLLECTION_NAME])
                for (var METHOD_NAME in es_array_iterator)
                    if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
                        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME])
                    } catch (error) {
                        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME]
                    }
        }
    }
    var nativePromiseConstructor = global_1.Promise,
        redefineAll = function(target, src, options) {
            for (var key in src) redefine(target, key, src[key], options);
            return target
        },
        SPECIES$1 = wellKnownSymbol("species"),
        setSpecies = function(CONSTRUCTOR_NAME) {
            var Constructor = getBuiltIn(CONSTRUCTOR_NAME),
                defineProperty = objectDefineProperty.f;
            descriptors && Constructor && !Constructor[SPECIES$1] && defineProperty(Constructor, SPECIES$1, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        anInstance = function(it, Constructor, name) {
            if (!(it instanceof Constructor)) throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
            return it
        },
        iterate_1 = createCommonjsModule((function(module) {
            var Result = function(stopped, result) {
                this.stopped = stopped, this.result = result
            };
            (module.exports = function(iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
                var iterator, iterFn, index, length, result, next, step, boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
                if (IS_ITERATOR) iterator = iterable;
                else {
                    if ("function" != typeof(iterFn = getIteratorMethod(iterable))) throw TypeError("Target is not iterable");
                    if (isArrayIteratorMethod(iterFn)) {
                        for (index = 0, length = toLength(iterable.length); length > index; index++)
                            if ((result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index])) && result instanceof Result) return result;
                        return new Result(!1)
                    }
                    iterator = iterFn.call(iterable)
                }
                for (next = iterator.next; !(step = next.call(iterator)).done;)
                    if ("object" == typeof(result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES)) && result && result instanceof Result) return result;
                return new Result(!1)
            }).stop = function(result) {
                return new Result(!0, result)
            }
        })),
        SPECIES$2 = wellKnownSymbol("species"),
        speciesConstructor = function(O, defaultConstructor) {
            var S, C = anObject(O).constructor;
            return void 0 === C || null == (S = anObject(C)[SPECIES$2]) ? defaultConstructor : aFunction$1(S)
        },
        engineUserAgent = getBuiltIn("navigator", "userAgent") || "",
        engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent),
        location = global_1.location,
        set$1 = global_1.setImmediate,
        clear = global_1.clearImmediate,
        process = global_1.process,
        MessageChannel = global_1.MessageChannel,
        Dispatch = global_1.Dispatch,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = "onreadystatechange",
        defer, channel, port, run = function(id) {
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id], fn()
            }
        },
        runner = function(id) {
            return function() {
                run(id)
            }
        },
        listener = function(event) {
            run(event.data)
        },
        post = function(id) {
            global_1.postMessage(id + "", location.protocol + "//" + location.host)
        };
    set$1 && clear || (set$1 = function(fn) {
        for (var args = [], i = 1; arguments.length > i;) args.push(arguments[i++]);
        return queue[++counter] = function() {
            ("function" == typeof fn ? fn : Function(fn)).apply(void 0, args)
        }, defer(counter), counter
    }, clear = function(id) {
        delete queue[id]
    }, "process" == classofRaw(process) ? defer = function(id) {
        process.nextTick(runner(id))
    } : Dispatch && Dispatch.now ? defer = function(id) {
        Dispatch.now(runner(id))
    } : MessageChannel && !engineIsIos ? (channel = new MessageChannel, port = channel.port2, channel.port1.onmessage = listener, defer = functionBindContext(port.postMessage, port, 1)) : !global_1.addEventListener || "function" != typeof postMessage || global_1.importScripts || fails(post) || "file:" === location.protocol ? defer = ONREADYSTATECHANGE in documentCreateElement("script") ? function(id) {
        html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this), run(id)
        }
    } : function(id) {
        setTimeout(runner(id), 0)
    } : (defer = post, global_1.addEventListener("message", listener, !1)));
    var task = {
            set: set$1,
            clear: clear
        },
        getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f,
        macrotask = task.set,
        MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver,
        process$1 = global_1.process,
        Promise$1 = global_1.Promise,
        IS_NODE = "process" == classofRaw(process$1),
        queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, "queueMicrotask"),
        queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value,
        flush, head, last, notify, toggle, node, promise, then;
    queueMicrotask || (flush = function() {
        var parent, fn;
        for (IS_NODE && (parent = process$1.domain) && parent.exit(); head;) {
            fn = head.fn, head = head.next;
            try {
                fn()
            } catch (error) {
                throw head ? notify() : last = void 0, error
            }
        }
        last = void 0, parent && parent.enter()
    }, IS_NODE ? notify = function() {
        process$1.nextTick(flush)
    } : MutationObserver && !engineIsIos ? (toggle = !0, node = document.createTextNode(""), new MutationObserver(flush).observe(node, {
        characterData: !0
    }), notify = function() {
        node.data = toggle = !toggle
    }) : Promise$1 && Promise$1.resolve ? (promise = Promise$1.resolve(void 0), then = promise.then, notify = function() {
        then.call(promise, flush)
    }) : notify = function() {
        macrotask.call(global_1, flush)
    });
    var microtask = queueMicrotask || function(fn) {
            var task = {
                fn: fn,
                next: void 0
            };
            last && (last.next = task), head || (head = task, notify()), last = task
        },
        PromiseCapability = function(C) {
            var resolve, reject;
            this.promise = new C((function($$resolve, $$reject) {
                if (void 0 !== resolve || void 0 !== reject) throw TypeError("Bad Promise constructor");
                resolve = $$resolve, reject = $$reject
            })), this.resolve = aFunction$1(resolve), this.reject = aFunction$1(reject)
        },
        f$5 = function(C) {
            return new PromiseCapability(C)
        },
        newPromiseCapability = {
            f: f$5
        },
        promiseResolve = function(C, x) {
            if (anObject(C), isObject(x) && x.constructor === C) return x;
            var promiseCapability = newPromiseCapability.f(C);
            return (0, promiseCapability.resolve)(x), promiseCapability.promise
        },
        hostReportErrors = function(a, b) {
            var console = global_1.console;
            console && console.error && (1 === arguments.length ? console.error(a) : console.error(a, b))
        },
        perform = function(exec) {
            try {
                return {
                    error: !1,
                    value: exec()
                }
            } catch (error) {
                return {
                    error: !0,
                    value: error
                }
            }
        },
        process$2 = global_1.process,
        versions = process$2 && process$2.versions,
        v8 = versions && versions.v8,
        match, version;
    v8 ? (match = v8.split("."), version = match[0] + match[1]) : engineUserAgent && (match = engineUserAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = engineUserAgent.match(/Chrome\/(\d+)/), match && (version = match[1])));
    var engineV8Version = version && +version,
        task$1 = task.set,
        SPECIES$3 = wellKnownSymbol("species"),
        PROMISE = "Promise",
        getInternalState$2 = internalState.get,
        setInternalState$2 = internalState.set,
        getInternalPromiseState = internalState.getterFor(PROMISE),
        PromiseConstructor = nativePromiseConstructor,
        TypeError$1 = global_1.TypeError,
        document$2 = global_1.document,
        process$3 = global_1.process,
        $fetch = getBuiltIn("fetch"),
        newPromiseCapability$1 = newPromiseCapability.f,
        newGenericPromiseCapability = newPromiseCapability$1,
        IS_NODE$1 = "process" == classofRaw(process$3),
        DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent),
        UNHANDLED_REJECTION = "unhandledrejection",
        REJECTION_HANDLED = "rejectionhandled",
        PENDING = 0,
        FULFILLED = 1,
        REJECTED = 2,
        HANDLED = 1,
        UNHANDLED = 2,
        Internal, OwnPromiseCapability, PromiseWrapper, nativeThen, FORCED = isForced_1(PROMISE, (function() {
            if (!(inspectSource(PromiseConstructor) !== String(PromiseConstructor))) {
                if (66 === engineV8Version) return !0;
                if (!IS_NODE$1 && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return !1;
            var promise = PromiseConstructor.resolve(1),
                FakePromise = function(exec) {
                    exec((function() {}), (function() {}))
                };
            return (promise.constructor = {})[SPECIES$3] = FakePromise, !(promise.then((function() {})) instanceof FakePromise)
        })),
        INCORRECT_ITERATION$1 = FORCED || !checkCorrectnessOfIteration((function(iterable) {
            PromiseConstructor.all(iterable).catch((function() {}))
        })),
        isThenable = function(it) {
            var then;
            return !(!isObject(it) || "function" != typeof(then = it.then)) && then
        },
        notify$1 = function(promise, state, isReject) {
            if (!state.notified) {
                state.notified = !0;
                var chain = state.reactions;
                microtask((function() {
                    for (var value = state.value, ok = state.state == FULFILLED, index = 0; chain.length > index;) {
                        var result, then, exited, reaction = chain[index++],
                            handler = ok ? reaction.ok : reaction.fail,
                            resolve = reaction.resolve,
                            reject = reaction.reject,
                            domain = reaction.domain;
                        try {
                            handler ? (ok || (state.rejection === UNHANDLED && onHandleUnhandled(promise, state), state.rejection = HANDLED), !0 === handler ? result = value : (domain && domain.enter(), result = handler(value), domain && (domain.exit(), exited = !0)), result === reaction.promise ? reject(TypeError$1("Promise-chain cycle")) : (then = isThenable(result)) ? then.call(result, resolve, reject) : resolve(result)) : reject(value)
                        } catch (error) {
                            domain && !exited && domain.exit(), reject(error)
                        }
                    }
                    state.reactions = [], state.notified = !1, isReject && !state.rejection && onUnhandled(promise, state)
                }))
            }
        },
        dispatchEvent = function(name, promise, reason) {
            var event, handler;
            DISPATCH_EVENT ? ((event = document$2.createEvent("Event")).promise = promise, event.reason = reason, event.initEvent(name, !1, !0), global_1.dispatchEvent(event)) : event = {
                promise: promise,
                reason: reason
            }, (handler = global_1["on" + name]) ? handler(event) : name === UNHANDLED_REJECTION && hostReportErrors("Unhandled promise rejection", reason)
        },
        onUnhandled = function(promise, state) {
            task$1.call(global_1, (function() {
                var result, value = state.value;
                if (isUnhandled(state) && (result = perform((function() {
                        IS_NODE$1 ? process$3.emit("unhandledRejection", value, promise) : dispatchEvent(UNHANDLED_REJECTION, promise, value)
                    })), state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED, result.error)) throw result.value
            }))
        },
        isUnhandled = function(state) {
            return state.rejection !== HANDLED && !state.parent
        },
        onHandleUnhandled = function(promise, state) {
            task$1.call(global_1, (function() {
                IS_NODE$1 ? process$3.emit("rejectionHandled", promise) : dispatchEvent(REJECTION_HANDLED, promise, state.value)
            }))
        },
        bind = function(fn, promise, state, unwrap) {
            return function(value) {
                fn(promise, state, value, unwrap)
            }
        },
        internalReject = function(promise, state, value, unwrap) {
            state.done || (state.done = !0, unwrap && (state = unwrap), state.value = value, state.state = REJECTED, notify$1(promise, state, !0))
        },
        internalResolve = function(promise, state, value, unwrap) {
            if (!state.done) {
                state.done = !0, unwrap && (state = unwrap);
                try {
                    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
                    var then = isThenable(value);
                    then ? microtask((function() {
                        var wrapper = {
                            done: !1
                        };
                        try {
                            then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state))
                        } catch (error) {
                            internalReject(promise, wrapper, error, state)
                        }
                    })) : (state.value = value, state.state = FULFILLED, notify$1(promise, state, !1))
                } catch (error) {
                    internalReject(promise, {
                        done: !1
                    }, error, state)
                }
            }
        };
    FORCED && (PromiseConstructor = function(executor) {
        anInstance(this, PromiseConstructor, PROMISE), aFunction$1(executor), Internal.call(this);
        var state = getInternalState$2(this);
        try {
            executor(bind(internalResolve, this, state), bind(internalReject, this, state))
        } catch (error) {
            internalReject(this, state, error)
        }
    }, Internal = function(executor) {
        setInternalState$2(this, {
            type: PROMISE,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: PENDING,
            value: void 0
        })
    }, Internal.prototype = redefineAll(PromiseConstructor.prototype, {
        then: function(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this),
                reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
            return reaction.ok = "function" != typeof onFulfilled || onFulfilled, reaction.fail = "function" == typeof onRejected && onRejected, reaction.domain = IS_NODE$1 ? process$3.domain : void 0, state.parent = !0, state.reactions.push(reaction), state.state != PENDING && notify$1(this, state, !1), reaction.promise
        },
        catch: function(onRejected) {
            return this.then(void 0, onRejected)
        }
    }), OwnPromiseCapability = function() {
        var promise = new Internal,
            state = getInternalState$2(promise);
        this.promise = promise, this.resolve = bind(internalResolve, promise, state), this.reject = bind(internalReject, promise, state)
    }, newPromiseCapability.f = newPromiseCapability$1 = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C)
    }, "function" == typeof nativePromiseConstructor && (nativeThen = nativePromiseConstructor.prototype.then, redefine(nativePromiseConstructor.prototype, "then", (function(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor((function(resolve, reject) {
            nativeThen.call(that, resolve, reject)
        })).then(onFulfilled, onRejected)
    }), {
        unsafe: !0
    }), "function" == typeof $fetch && _export({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(input) {
            return promiseResolve(PromiseConstructor, $fetch.apply(global_1, arguments))
        }
    }))), _export({
        global: !0,
        wrap: !0,
        forced: FORCED
    }, {
        Promise: PromiseConstructor
    }), setToStringTag(PromiseConstructor, PROMISE, !1), setSpecies(PROMISE), PromiseWrapper = getBuiltIn(PROMISE), _export({
        target: PROMISE,
        stat: !0,
        forced: FORCED
    }, {
        reject: function(r) {
            var capability = newPromiseCapability$1(this);
            return capability.reject.call(void 0, r), capability.promise
        }
    }), _export({
        target: PROMISE,
        stat: !0,
        forced: FORCED
    }, {
        resolve: function(x) {
            return promiseResolve(this, x)
        }
    }), _export({
        target: PROMISE,
        stat: !0,
        forced: INCORRECT_ITERATION$1
    }, {
        all: function(iterable) {
            var C = this,
                capability = newPromiseCapability$1(C),
                resolve = capability.resolve,
                reject = capability.reject,
                result = perform((function() {
                    var $promiseResolve = aFunction$1(C.resolve),
                        values = [],
                        counter = 0,
                        remaining = 1;
                    iterate_1(iterable, (function(promise) {
                        var index = counter++,
                            alreadyCalled = !1;
                        values.push(void 0), remaining++, $promiseResolve.call(C, promise).then((function(value) {
                            alreadyCalled || (alreadyCalled = !0, values[index] = value, --remaining || resolve(values))
                        }), reject)
                    })), --remaining || resolve(values)
                }));
            return result.error && reject(result.value), capability.promise
        },
        race: function(iterable) {
            var C = this,
                capability = newPromiseCapability$1(C),
                reject = capability.reject,
                result = perform((function() {
                    var $promiseResolve = aFunction$1(C.resolve);
                    iterate_1(iterable, (function(promise) {
                        $promiseResolve.call(C, promise).then(capability.resolve, reject)
                    }))
                }));
            return result.error && reject(result.value), capability.promise
        }
    }), _export({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(iterable) {
            var C = this,
                capability = newPromiseCapability.f(C),
                resolve = capability.resolve,
                reject = capability.reject,
                result = perform((function() {
                    var promiseResolve = aFunction$1(C.resolve),
                        values = [],
                        counter = 0,
                        remaining = 1;
                    iterate_1(iterable, (function(promise) {
                        var index = counter++,
                            alreadyCalled = !1;
                        values.push(void 0), remaining++, promiseResolve.call(C, promise).then((function(value) {
                            alreadyCalled || (alreadyCalled = !0, values[index] = {
                                status: "fulfilled",
                                value: value
                            }, --remaining || resolve(values))
                        }), (function(e) {
                            alreadyCalled || (alreadyCalled = !0, values[index] = {
                                status: "rejected",
                                reason: e
                            }, --remaining || resolve(values))
                        }))
                    })), --remaining || resolve(values)
                }));
            return result.error && reject(result.value), capability.promise
        }
    });
    var NON_GENERIC = !!nativePromiseConstructor && fails((function() {
        nativePromiseConstructor.prototype.finally.call({
            then: function() {}
        }, (function() {}))
    }));
    _export({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: NON_GENERIC
    }, {
        finally: function(onFinally) {
            var C = speciesConstructor(this, getBuiltIn("Promise")),
                isFunction = "function" == typeof onFinally;
            return this.then(isFunction ? function(x) {
                return promiseResolve(C, onFinally()).then((function() {
                    return x
                }))
            } : onFinally, isFunction ? function(e) {
                return promiseResolve(C, onFinally()).then((function() {
                    throw e
                }))
            } : onFinally)
        }
    }), "function" != typeof nativePromiseConstructor || nativePromiseConstructor.prototype.finally || redefine(nativePromiseConstructor.prototype, "finally", getBuiltIn("Promise").prototype.finally);
    var promise$1 = path.Promise,
        setInternalState$3 = internalState.set,
        getInternalAggregateErrorState = internalState.getterFor("AggregateError"),
        $AggregateError = function(errors, message) {
            var that = this;
            if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
            objectSetPrototypeOf && (that = objectSetPrototypeOf(new Error(message), objectGetPrototypeOf(that)));
            var errorsArray = [];
            return iterate_1(errors, errorsArray.push, errorsArray), descriptors ? setInternalState$3(that, {
                errors: errorsArray,
                type: "AggregateError"
            }) : that.errors = errorsArray, void 0 !== message && createNonEnumerableProperty(that, "message", String(message)), that
        };
    $AggregateError.prototype = objectCreate(Error.prototype, {
        constructor: createPropertyDescriptor(5, $AggregateError),
        message: createPropertyDescriptor(5, ""),
        name: createPropertyDescriptor(5, "AggregateError")
    }), descriptors && objectDefineProperty.f($AggregateError.prototype, "errors", {
        get: function() {
            return getInternalAggregateErrorState(this).errors
        },
        configurable: !0
    }), _export({
        global: !0
    }, {
        AggregateError: $AggregateError
    }), _export({
        target: "Promise",
        stat: !0
    }, {
        try: function(callbackfn) {
            var promiseCapability = newPromiseCapability.f(this),
                result = perform(callbackfn);
            return (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value), promiseCapability.promise
        }
    });
    var PROMISE_ANY_ERROR = "No one promise resolved";
    _export({
        target: "Promise",
        stat: !0
    }, {
        any: function(iterable) {
            var C = this,
                capability = newPromiseCapability.f(C),
                resolve = capability.resolve,
                reject = capability.reject,
                result = perform((function() {
                    var promiseResolve = aFunction$1(C.resolve),
                        errors = [],
                        counter = 0,
                        remaining = 1,
                        alreadyResolved = !1;
                    iterate_1(iterable, (function(promise) {
                        var index = counter++,
                            alreadyRejected = !1;
                        errors.push(void 0), remaining++, promiseResolve.call(C, promise).then((function(value) {
                            alreadyRejected || alreadyResolved || (alreadyResolved = !0, resolve(value))
                        }), (function(e) {
                            alreadyRejected || alreadyResolved || (alreadyRejected = !0, errors[index] = e, --remaining || reject(new(getBuiltIn("AggregateError"))(errors, PROMISE_ANY_ERROR)))
                        }))
                    })), --remaining || reject(new(getBuiltIn("AggregateError"))(errors, PROMISE_ANY_ERROR))
                }));
            return result.error && reject(result.value), capability.promise
        }
    });
    var MATCH = wellKnownSymbol("match"),
        isRegexp = function(it) {
            var isRegExp;
            return isObject(it) && (void 0 !== (isRegExp = it[MATCH]) ? !!isRegExp : "RegExp" == classofRaw(it))
        },
        notARegexp = function(it) {
            if (isRegexp(it)) throw TypeError("The method doesn't accept regular expressions");
            return it
        },
        MATCH$1 = wellKnownSymbol("match"),
        correctIsRegexpLogic = function(METHOD_NAME) {
            var regexp = /./;
            try {
                "/./" [METHOD_NAME](regexp)
            } catch (e) {
                try {
                    return regexp[MATCH$1] = !1, "/./" [METHOD_NAME](regexp)
                } catch (f) {}
            }
            return !1
        },
        getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f,
        nativeStartsWith = "".startsWith,
        min$2 = Math.min,
        CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic("startsWith"),
        MDN_POLYFILL_BUG = !(CORRECT_IS_REGEXP_LOGIC || (descriptor = getOwnPropertyDescriptor$3(String.prototype, "startsWith"), !descriptor || descriptor.writable)),
        descriptor;
    _export({
        target: "String",
        proto: !0,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
    }, {
        startsWith: function(searchString) {
            var that = String(requireObjectCoercible(this));
            notARegexp(searchString);
            var index = toLength(min$2(arguments.length > 1 ? arguments[1] : void 0, that.length)),
                search = String(searchString);
            return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search
        }
    });
    var startsWith = entryUnbind("String", "startsWith"),
        global$1 = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== global$1 && global$1,
        support = {
            searchParams: "URLSearchParams" in global$1,
            iterable: "Symbol" in global$1 && "iterator" in Symbol,
            blob: "FileReader" in global$1 && "Blob" in global$1 && function() {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            formData: "FormData" in global$1,
            arrayBuffer: "ArrayBuffer" in global$1
        };

    function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj)
    }
    if (support.arrayBuffer) var viewClasses = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
        };

    function normalizeName(name) {
        if ("string" != typeof name && (name = String(name)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || "" === name) throw new TypeError("Invalid character in header field name");
        return name.toLowerCase()
    }

    function normalizeValue(value) {
        return "string" != typeof value && (value = String(value)), value
    }

    function iteratorFor(items) {
        var iterator = {
            next: function() {
                var value = items.shift();
                return {
                    done: void 0 === value,
                    value: value
                }
            }
        };
        return support.iterable && (iterator[Symbol.iterator] = function() {
            return iterator
        }), iterator
    }

    function Headers(headers) {
        this.map = {}, headers instanceof Headers ? headers.forEach((function(value, name) {
            this.append(name, value)
        }), this) : Array.isArray(headers) ? headers.forEach((function(header) {
            this.append(header[0], header[1])
        }), this) : headers && Object.getOwnPropertyNames(headers).forEach((function(name) {
            this.append(name, headers[name])
        }), this)
    }

    function consumed(body) {
        if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
        body.bodyUsed = !0
    }

    function fileReaderReady(reader) {
        return new Promise((function(resolve, reject) {
            reader.onload = function() {
                resolve(reader.result)
            }, reader.onerror = function() {
                reject(reader.error)
            }
        }))
    }

    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader,
            promise = fileReaderReady(reader);
        return reader.readAsArrayBuffer(blob), promise
    }

    function readBlobAsText(blob) {
        var reader = new FileReader,
            promise = fileReaderReady(reader);
        return reader.readAsText(blob), promise
    }

    function readArrayBufferAsText(buf) {
        for (var view = new Uint8Array(buf), chars = new Array(view.length), i = 0; i < view.length; i++) chars[i] = String.fromCharCode(view[i]);
        return chars.join("")
    }

    function bufferClone(buf) {
        if (buf.slice) return buf.slice(0);
        var view = new Uint8Array(buf.byteLength);
        return view.set(new Uint8Array(buf)), view.buffer
    }

    function Body() {
        return this.bodyUsed = !1, this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = body, body ? "string" == typeof body ? this._bodyText = body : support.blob && Blob.prototype.isPrototypeOf(body) ? this._bodyBlob = body : support.formData && FormData.prototype.isPrototypeOf(body) ? this._bodyFormData = body : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) ? this._bodyText = body.toString() : support.arrayBuffer && support.blob && isDataView(body) ? (this._bodyArrayBuffer = bufferClone(body.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body)) ? this._bodyArrayBuffer = bufferClone(body) : this._bodyText = body = Object.prototype.toString.call(body) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof body ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, support.blob && (this.blob = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var isConsumed = consumed(this);
                return isConsumed || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(readBlobAsArrayBuffer)
        }), this.text = function() {
            var rejected = consumed(this);
            if (rejected) return rejected;
            if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, support.formData && (this.formData = function() {
            return this.text().then(decode)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    Headers.prototype.append = function(name, value) {
        name = normalizeName(name), value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value
    }, Headers.prototype.delete = function(name) {
        delete this.map[normalizeName(name)]
    }, Headers.prototype.get = function(name) {
        return name = normalizeName(name), this.has(name) ? this.map[name] : null
    }, Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name))
    }, Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value)
    }, Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) this.map.hasOwnProperty(name) && callback.call(thisArg, this.map[name], name, this)
    }, Headers.prototype.keys = function() {
        var items = [];
        return this.forEach((function(value, name) {
            items.push(name)
        })), iteratorFor(items)
    }, Headers.prototype.values = function() {
        var items = [];
        return this.forEach((function(value) {
            items.push(value)
        })), iteratorFor(items)
    }, Headers.prototype.entries = function() {
        var items = [];
        return this.forEach((function(value, name) {
            items.push([name, value])
        })), iteratorFor(items)
    }, support.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
    var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method
    }

    function Request(input, options) {
        if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var body = (options = options || {}).body;
        if (input instanceof Request) {
            if (input.bodyUsed) throw new TypeError("Already read");
            this.url = input.url, this.credentials = input.credentials, options.headers || (this.headers = new Headers(input.headers)), this.method = input.method, this.mode = input.mode, this.signal = input.signal, body || null == input._bodyInit || (body = input._bodyInit, input.bodyUsed = !0)
        } else this.url = String(input);
        if (this.credentials = options.credentials || this.credentials || "same-origin", !options.headers && this.headers || (this.headers = new Headers(options.headers)), this.method = normalizeMethod(options.method || this.method || "GET"), this.mode = options.mode || this.mode || null, this.signal = options.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && body) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(body), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== options.cache && "no-cache" !== options.cache)) {
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) this.url = this.url.replace(reParamSearch, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }

    function decode(body) {
        var form = new FormData;
        return body.trim().split("&").forEach((function(bytes) {
            if (bytes) {
                var split = bytes.split("="),
                    name = split.shift().replace(/\+/g, " "),
                    value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name), decodeURIComponent(value))
            }
        })), form
    }

    function parseHeaders(rawHeaders) {
        var headers = new Headers;
        return rawHeaders.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(line) {
            var parts = line.split(":"),
                key = parts.shift().trim();
            if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value)
            }
        })), headers
    }

    function Response(bodyInit, options) {
        if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        options || (options = {}), this.type = "default", this.status = void 0 === options.status ? 200 : options.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in options ? options.statusText : "", this.headers = new Headers(options.headers), this.url = options.url || "", this._initBody(bodyInit)
    }
    Request.prototype.clone = function() {
        return new Request(this, {
            body: this._bodyInit
        })
    }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        })
    }, Response.error = function() {
        var response = new Response(null, {
            status: 0,
            statusText: ""
        });
        return response.type = "error", response
    };
    var redirectStatuses = [301, 302, 303, 307, 308];
    Response.redirect = function(url, status) {
        if (-1 === redirectStatuses.indexOf(status)) throw new RangeError("Invalid status code");
        return new Response(null, {
            status: status,
            headers: {
                location: url
            }
        })
    };
    var DOMException = global$1.DOMException;
    try {
        new DOMException
    } catch (err) {
        DOMException = function(message, name) {
            this.message = message, this.name = name;
            var error = Error(message);
            this.stack = error.stack
        }, DOMException.prototype = Object.create(Error.prototype), DOMException.prototype.constructor = DOMException
    }

    function fetch$1(input, init) {
        return new Promise((function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
            var xhr = new XMLHttpRequest;

            function abortXhr() {
                xhr.abort()
            }
            xhr.onload = function() {
                var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                setTimeout((function() {
                    resolve(new Response(body, options))
                }), 0)
            }, xhr.onerror = function() {
                setTimeout((function() {
                    reject(new TypeError("Network request failed"))
                }), 0)
            }, xhr.ontimeout = function() {
                setTimeout((function() {
                    reject(new TypeError("Network request failed"))
                }), 0)
            }, xhr.onabort = function() {
                setTimeout((function() {
                    reject(new DOMException("Aborted", "AbortError"))
                }), 0)
            }, xhr.open(request.method, function(url) {
                try {
                    return "" === url && global$1.location.href ? global$1.location.href : url
                } catch (e) {
                    return url
                }
            }(request.url), !0), "include" === request.credentials ? xhr.withCredentials = !0 : "omit" === request.credentials && (xhr.withCredentials = !1), "responseType" in xhr && (support.blob ? xhr.responseType = "blob" : support.arrayBuffer && request.headers.get("Content-Type") && -1 !== request.headers.get("Content-Type").indexOf("application/octet-stream") && (xhr.responseType = "arraybuffer")), !init || "object" != typeof init.headers || init.headers instanceof Headers ? request.headers.forEach((function(value, name) {
                xhr.setRequestHeader(name, value)
            })) : Object.getOwnPropertyNames(init.headers).forEach((function(name) {
                xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
            })), request.signal && (request.signal.addEventListener("abort", abortXhr), xhr.onreadystatechange = function() {
                4 === xhr.readyState && request.signal.removeEventListener("abort", abortXhr)
            }), xhr.send(void 0 === request._bodyInit ? null : request._bodyInit)
        }))
    }
    fetch$1.polyfill = !0, global$1.fetch || (global$1.fetch = fetch$1, global$1.Headers = Headers, global$1.Request = Request, global$1.Response = Response), null == Element.prototype.getAttributeNames && (Element.prototype.getAttributeNames = function() {
        for (var attributes = this.attributes, length = attributes.length, result = new Array(length), i = 0; i < length; i++) result[i] = attributes[i].name;
        return result
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
        for (var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length; --i >= 0 && matches.item(i) !== this;);
        return i > -1
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode
        } while (null !== el && 1 === el.nodeType);
        return null
    });
    var _default = function() {
            function _default(el) {
                _classCallCheck(this, _default), this.el = el
            }
            return _createClass(_default, [{
                key: "toId",
                value: function() {
                    return btoa(encodeURIComponent(this.el.el.outerHTML))
                }
            }, {
                key: "ref",
                get: function() {
                    return this.el ? this.el.ref : null
                }
            }]), _default
        }(),
        _default$1 = function(_Action) {
            _inherits(_default, _Action);
            var _super = _createSuper(_default);

            function _default(event, params, el) {
                var _this;
                return _classCallCheck(this, _default), (_this = _super.call(this, el)).type = "fireEvent", _this.payload = {
                    event: event,
                    params: params
                }, _this
            }
            return _createClass(_default, [{
                key: "toId",
                value: function() {
                    return btoa(encodeURIComponent(this.type, this.payload.event, JSON.stringify(this.payload.params)))
                }
            }]), _default
        }(_default),
        MessageBus = function() {
            function MessageBus() {
                _classCallCheck(this, MessageBus), this.listeners = {}
            }
            return _createClass(MessageBus, [{
                key: "register",
                value: function(name, callback) {
                    this.listeners[name] || (this.listeners[name] = []), this.listeners[name].push(callback)
                }
            }, {
                key: "call",
                value: function(name) {
                    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                    (this.listeners[name] || []).forEach((function(callback) {
                        callback.apply(void 0, params)
                    }))
                }
            }, {
                key: "has",
                value: function(name) {
                    return Object.keys(this.listeners).includes(name)
                }
            }]), MessageBus
        }(),
        HookManager = {
            availableHooks: ["componentInitialized", "elementInitialized", "elementRemoved", "messageSent", "messageFailed", "responseReceived", "beforeDomUpdate", "beforeElementUpdate", "afterElementUpdate", "afterDomUpdate", "interceptWireModelSetValue", "interceptWireModelAttachListener"],
            bus: new MessageBus,
            register: function(name, callback) {
                if (!this.availableHooks.includes(name)) throw "Livewire: Referencing unknown hook: [".concat(name, "]");
                this.bus.register(name, callback)
            },
            call: function(name) {
                for (var _this$bus, _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                (_this$bus = this.bus).call.apply(_this$bus, [name].concat(params))
            }
        },
        DirectiveManager = {
            directives: new MessageBus,
            register: function(name, callback) {
                if (this.has(name)) throw "Livewire: Directive already registered: [".concat(name, "]");
                this.directives.register(name, callback)
            },
            call: function(name, el, directive, component) {
                this.directives.call(name, el, directive, component)
            },
            has: function(name) {
                return this.directives.has(name)
            }
        },
        store$2 = {
            componentsById: {},
            listeners: new MessageBus,
            initialRenderIsFinished: !1,
            livewireIsInBackground: !1,
            livewireIsOffline: !1,
            sessionHasExpired: !1,
            hooks: HookManager,
            directives: DirectiveManager,
            onErrorCallback: function() {},
            components: function() {
                var _this = this;
                return Object.keys(this.componentsById).map((function(key) {
                    return _this.componentsById[key]
                }))
            },
            addComponent: function(component) {
                return this.componentsById[component.id] = component
            },
            findComponent: function(id) {
                return this.componentsById[id]
            },
            getComponentsByName: function(name) {
                return this.components().filter((function(component) {
                    return component.name === name
                }))
            },
            hasComponent: function(id) {
                return !!this.componentsById[id]
            },
            tearDownComponents: function() {
                var _this2 = this;
                this.components().forEach((function(component) {
                    _this2.removeComponent(component)
                }))
            },
            on: function(event, callback) {
                this.listeners.register(event, callback)
            },
            emit: function(event) {
                for (var _this$listeners, _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                (_this$listeners = this.listeners).call.apply(_this$listeners, [event].concat(params)), this.componentsListeningForEvent(event).forEach((function(component) {
                    return component.addAction(new _default$1(event, params))
                }))
            },
            emitUp: function(el, event) {
                for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) params[_key2 - 2] = arguments[_key2];
                this.componentsListeningForEventThatAreTreeAncestors(el, event).forEach((function(component) {
                    return component.addAction(new _default$1(event, params))
                }))
            },
            emitSelf: function(componentId, event) {
                var component = this.findComponent(componentId);
                if (component.events.includes(event)) {
                    for (var _len3 = arguments.length, params = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) params[_key3 - 2] = arguments[_key3];
                    component.addAction(new _default$1(event, params))
                }
            },
            emitTo: function(componentName, event) {
                for (var _len4 = arguments.length, params = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) params[_key4 - 2] = arguments[_key4];
                var components = this.getComponentsByName(componentName);
                components.forEach((function(component) {
                    component.events.includes(event) && component.addAction(new _default$1(event, params))
                }))
            },
            componentsListeningForEventThatAreTreeAncestors: function(el, event) {
                for (var parentIds = [], parent = el.rawNode().parentElement.closest("[wire\\:id]"); parent;) parentIds.push(parent.getAttribute("wire:id")), parent = parent.parentElement.closest("[wire\\:id]");
                return this.components().filter((function(component) {
                    return component.events.includes(event) && parentIds.includes(component.id)
                }))
            },
            componentsListeningForEvent: function(event) {
                return this.components().filter((function(component) {
                    return component.events.includes(event)
                }))
            },
            registerDirective: function(name, callback) {
                this.directives.register(name, callback)
            },
            registerHook: function(name, callback) {
                this.hooks.register(name, callback)
            },
            callHook: function(name) {
                for (var _this$hooks, _len5 = arguments.length, params = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) params[_key5 - 1] = arguments[_key5];
                (_this$hooks = this.hooks).call.apply(_this$hooks, [name].concat(params))
            },
            removeComponent: function(component) {
                component.tearDown(), delete this.componentsById[component.id]
            },
            onError: function(callback) {
                this.onErrorCallback = callback
            }
        },
        _default$2 = function() {
            function _default(type, modifiers, rawName, el) {
                _classCallCheck(this, _default), this.type = type, this.modifiers = modifiers, this.rawName = rawName, this.el = el, this.eventContext
            }
            return _createClass(_default, [{
                key: "setEventContext",
                value: function(context) {
                    this.eventContext = context
                }
            }, {
                key: "durationOr",
                value: function(defaultDuration) {
                    var durationInMilliSeconds, durationInMilliSecondsString = this.modifiers.find((function(mod) {
                            return mod.match(/([0-9]+)ms/)
                        })),
                        durationInSecondsString = this.modifiers.find((function(mod) {
                            return mod.match(/([0-9]+)s/)
                        }));
                    return durationInMilliSecondsString ? durationInMilliSeconds = Number(durationInMilliSecondsString.replace("ms", "")) : durationInSecondsString && (durationInMilliSeconds = 1e3 * Number(durationInSecondsString.replace("s", ""))), durationInMilliSeconds || defaultDuration
                }
            }, {
                key: "parseOutMethodAndParams",
                value: function parseOutMethodAndParams(rawMethod) {
                    var method = rawMethod,
                        params = [],
                        methodAndParamString = method.match(/(.*?)\((.*)\)/);
                    if (methodAndParamString) {
                        var $event = this.eventContext;
                        method = methodAndParamString[1], params = eval("(function () {\n                for (var l=arguments.length, p=new Array(l), k=0; k<l; k++) {\n                    p[k] = arguments[k];\n                }\n                return [].concat(p);\n            })(".concat(methodAndParamString[2], ")"))
                    }
                    return {
                        method: method,
                        params: params
                    }
                }
            }, {
                key: "cardinalDirectionOr",
                value: function() {
                    var fallback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "right";
                    return this.modifiers.includes("up") ? "up" : this.modifiers.includes("down") ? "down" : this.modifiers.includes("left") ? "left" : this.modifiers.includes("right") ? "right" : fallback
                }
            }, {
                key: "value",
                get: function() {
                    return this.el.getAttribute(this.rawName)
                }
            }, {
                key: "method",
                get: function() {
                    return this.parseOutMethodAndParams(this.value).method
                }
            }, {
                key: "params",
                get: function() {
                    return this.parseOutMethodAndParams(this.value).params
                }
            }]), _default
        }(),
        _default$3 = function() {
            function _default(el) {
                _classCallCheck(this, _default), this.el = el, this.directives = this.extractTypeModifiersAndValue()
            }
            return _createClass(_default, [{
                key: "all",
                value: function() {
                    return this.directives
                }
            }, {
                key: "has",
                value: function(type) {
                    return this.directives.map((function(directive) {
                        return directive.type
                    })).includes(type)
                }
            }, {
                key: "missing",
                value: function(type) {
                    return !this.has(type)
                }
            }, {
                key: "get",
                value: function(type) {
                    return this.directives.find((function(directive) {
                        return directive.type === type
                    }))
                }
            }, {
                key: "extractTypeModifiersAndValue",
                value: function() {
                    var _this = this;
                    return Array.from(this.el.getAttributeNames().filter((function(name) {
                        return name.match(new RegExp("wire:"))
                    })).map((function(name) {
                        var _name$replace$split2 = _toArray(name.replace(new RegExp("wire:"), "").split(".")),
                            type = _name$replace$split2[0],
                            modifiers = _name$replace$split2.slice(1);
                        return new _default$2(type, modifiers, name, _this.el)
                    })))
                }
            }]), _default
        }(),
        isobject = function(val) {
            return null != val && "object" == typeof val && !1 === Array.isArray(val)
        },
        getValue = function(target, path, options) {
            if (isobject(options) || (options = {
                    default: options
                }), !isValidObject(target)) return void 0 !== options.default ? options.default : target;
            "number" == typeof path && (path = String(path));
            const isArray = Array.isArray(path),
                isString = "string" == typeof path,
                splitChar = options.separator || ".",
                joinChar = options.joinChar || ("string" == typeof splitChar ? splitChar : ".");
            if (!isString && !isArray) return target;
            if (isString && path in target) return isValid(path, target, options) ? target[path] : options.default;
            let segs = isArray ? path : split$1(path, splitChar, options),
                len = segs.length,
                idx = 0;
            do {
                let prop = segs[idx];
                for ("number" == typeof prop && (prop = String(prop)); prop && "\\" === prop.slice(-1);) prop = join([prop.slice(0, -1), segs[++idx] || ""], joinChar, options);
                if (prop in target) {
                    if (!isValid(prop, target, options)) return options.default;
                    target = target[prop]
                } else {
                    let hasProp = !1,
                        n = idx + 1;
                    for (; n < len;)
                        if (prop = join([prop, segs[n++]], joinChar, options), hasProp = prop in target) {
                            if (!isValid(prop, target, options)) return options.default;
                            target = target[prop], idx = n - 1;
                            break
                        }
                    if (!hasProp) return options.default
                }
            } while (++idx < len && isValidObject(target));
            return idx === len ? target : options.default
        };

    function join(segs, joinChar, options) {
        return "function" == typeof options.join ? options.join(segs) : segs[0] + joinChar + segs[1]
    }

    function split$1(path, splitChar, options) {
        return "function" == typeof options.split ? options.split(path) : path.split(splitChar)
    }

    function isValid(key, target, options) {
        return "function" != typeof options.isValid || options.isValid(key, target)
    }

    function isValidObject(val) {
        return isobject(val) || Array.isArray(val) || "function" == typeof val
    }
    var DOMElement = function() {
            function DOMElement(el) {
                _classCallCheck(this, DOMElement), this.el = el, this.directives = new _default$3(el)
            }
            return _createClass(DOMElement, [{
                key: "nextFrame",
                value: function(fn) {
                    var _this = this;
                    requestAnimationFrame((function() {
                        requestAnimationFrame(fn.bind(_this))
                    }))
                }
            }, {
                key: "rawNode",
                value: function() {
                    return this.el
                }
            }, {
                key: "closestRoot",
                value: function() {
                    return this.closestByAttribute("id")
                }
            }, {
                key: "closestByAttribute",
                value: function(attribute) {
                    var closestEl = this.el.closest("[wire\\:".concat(attribute, "]"));
                    if (!closestEl) throw "\nLivewire Error:\n\nCannot find parent element in DOM tree containing attribute: [wire:".concat(attribute, "].\n\nUsually this is caused by Livewire's DOM-differ not being able to properly track changes.\n\nReference the following guide for common causes: https://laravel-livewire.com/docs/troubleshooting \n\nReferenced element:\n\n").concat(this.el.outerHTML, "\n");
                    return new DOMElement(closestEl)
                }
            }, {
                key: "isComponentRootEl",
                value: function() {
                    return this.hasAttribute("id")
                }
            }, {
                key: "hasAttribute",
                value: function(attribute) {
                    return this.el.hasAttribute("wire:".concat(attribute))
                }
            }, {
                key: "getAttribute",
                value: function(attribute) {
                    return this.el.getAttribute("wire:".concat(attribute))
                }
            }, {
                key: "removeAttribute",
                value: function(attribute) {
                    return this.el.removeAttribute("wire:".concat(attribute))
                }
            }, {
                key: "setAttribute",
                value: function(attribute, value) {
                    return this.el.setAttribute("wire:".concat(attribute), value)
                }
            }, {
                key: "isFocused",
                value: function() {
                    return this.el === document.activeElement
                }
            }, {
                key: "hasFocus",
                value: function() {
                    return this.el === document.activeElement
                }
            }, {
                key: "isInput",
                value: function() {
                    return ["INPUT", "TEXTAREA", "SELECT"].includes(this.el.tagName.toUpperCase())
                }
            }, {
                key: "isTextInput",
                value: function() {
                    return ["INPUT", "TEXTAREA"].includes(this.el.tagName.toUpperCase()) && !["checkbox", "radio"].includes(this.el.type)
                }
            }, {
                key: "valueFromInput",
                value: function(component) {
                    var _this2 = this;
                    if ("checkbox" === this.el.type) {
                        var modelName = this.directives.get("model").value,
                            modelValue = getValue(component.data, modelName);
                        return Array.isArray(modelValue) ? modelValue = this.el.checked ? modelValue.includes(this.el.value) ? modelValue : modelValue.concat(this.el.value) : modelValue.filter((function(item) {
                            return item !== _this2.el.value
                        })) : !!this.el.checked && (this.el.getAttribute("value") || !0)
                    }
                    return "SELECT" === this.el.tagName && this.el.multiple ? this.getSelectValues() : this.el.value
                }
            }, {
                key: "setInputValueFromModel",
                value: function(component) {
                    var modelString = this.directives.get("model").value,
                        modelValue = getValue(component.data, modelString);
                    void 0 !== modelValue && ("input" === this.el.tagName.toLowerCase() && "file" === this.el.type || this.setInputValue(modelValue))
                }
            }, {
                key: "setInputValue",
                value: function(value) {
                    var _this3 = this;
                    if (store$2.callHook("interceptWireModelSetValue", this, value), "radio" === this.el.type) this.el.checked = this.el.value == value;
                    else if ("checkbox" === this.el.type)
                        if (Array.isArray(value)) {
                            var valueFound = !1;
                            value.forEach((function(val) {
                                val == _this3.el.value && (valueFound = !0)
                            })), this.el.checked = valueFound
                        } else this.el.checked = !!value;
                    else "SELECT" === this.el.tagName ? this.updateSelect(value) : this.el.value = value
                }
            }, {
                key: "getSelectValues",
                value: function() {
                    return Array.from(this.el.options).filter((function(option) {
                        return option.selected
                    })).map((function(option) {
                        return option.value || option.text
                    }))
                }
            }, {
                key: "updateSelect",
                value: function(value) {
                    var arrayWrappedValue = [].concat(value).map((function(value) {
                        return value + ""
                    }));
                    Array.from(this.el.options).forEach((function(option) {
                        option.selected = arrayWrappedValue.includes(option.value)
                    }))
                }
            }, {
                key: "isSameNode",
                value: function(el) {
                    return "function" == typeof el.rawNode ? this.el.isSameNode(el.rawNode()) : this.el.isSameNode(el)
                }
            }, {
                key: "getAttributeNames",
                value: function() {
                    var _this$el;
                    return (_this$el = this.el).getAttributeNames.apply(_this$el, arguments)
                }
            }, {
                key: "addEventListener",
                value: function() {
                    var _this$el2;
                    return (_this$el2 = this.el).addEventListener.apply(_this$el2, arguments)
                }
            }, {
                key: "removeEventListener",
                value: function() {
                    var _this$el3;
                    return (_this$el3 = this.el).removeEventListener.apply(_this$el3, arguments)
                }
            }, {
                key: "querySelector",
                value: function() {
                    var _this$el4;
                    return (_this$el4 = this.el).querySelector.apply(_this$el4, arguments)
                }
            }, {
                key: "querySelectorAll",
                value: function() {
                    var _this$el5;
                    return (_this$el5 = this.el).querySelectorAll.apply(_this$el5, arguments)
                }
            }, {
                key: "ref",
                get: function() {
                    return this.directives.has("ref") ? this.directives.get("ref").value : null
                }
            }, {
                key: "classList",
                get: function() {
                    return this.el.classList
                }
            }]), DOMElement
        }(),
        DOM = function() {
            function DOM() {
                _classCallCheck(this, DOM)
            }
            return _createClass(DOM, null, [{
                key: "rootComponentElements",
                value: function() {
                    return Array.from(document.querySelectorAll("[wire\\:id]")).map((function(el) {
                        return new DOMElement(el)
                    }))
                }
            }, {
                key: "rootComponentElementsWithNoParents",
                value: function() {
                    var allEls = Array.from(document.querySelectorAll("[wire\\:id]")),
                        onlyChildEls = Array.from(document.querySelectorAll("[wire\\:id] [wire\\:id]"));
                    return allEls.filter((function(el) {
                        return !onlyChildEls.includes(el)
                    })).map((function(el) {
                        return new DOMElement(el)
                    }))
                }
            }, {
                key: "allModelElementsInside",
                value: function(root) {
                    return Array.from(root.querySelectorAll("[wire\\:model]")).map((function(el) {
                        return new DOMElement(el)
                    }))
                }
            }, {
                key: "getByAttributeAndValue",
                value: function(attribute, value) {
                    return new DOMElement(document.querySelector("[wire\\:".concat(attribute, '="').concat(value, '"]')))
                }
            }]), DOM
        }(),
        _default$4 = function() {
            function _default(component, actionQueue) {
                _classCallCheck(this, _default), this.component = component, this.actionQueue = actionQueue
            }
            return _createClass(_default, [{
                key: "payload",
                value: function() {
                    var payload = {
                        id: this.component.id,
                        data: this.component.data,
                        name: this.component.name,
                        checksum: this.component.checksum,
                        locale: this.component.locale,
                        children: this.component.children,
                        actionQueue: this.actionQueue.map((function(action) {
                            return {
                                type: action.type,
                                payload: action.payload
                            }
                        }))
                    };
                    return Object.keys(this.component.errorBag).length > 0 && (payload.errorBag = this.component.errorBag), payload
                }
            }, {
                key: "storeResponse",
                value: function(payload) {
                    return this.response = {
                        id: payload.id,
                        dom: payload.dom,
                        checksum: payload.checksum,
                        locale: payload.locale,
                        children: payload.children,
                        dirtyInputs: payload.dirtyInputs,
                        eventQueue: payload.eventQueue,
                        dispatchQueue: payload.dispatchQueue,
                        events: payload.events,
                        data: payload.data,
                        redirectTo: payload.redirectTo,
                        errorBag: payload.errorBag || {},
                        updatesQueryString: payload.updatesQueryString
                    }
                }
            }, {
                key: "refs",
                get: function() {
                    return this.actionQueue.map((function(action) {
                        return action.ref
                    })).filter((function(ref) {
                        return ref
                    }))
                }
            }]), _default
        }(),
        _default$5 = function(_Message) {
            _inherits(_default, _Message);
            var _super = _createSuper(_default);

            function _default(component, action) {
                return _classCallCheck(this, _default), _super.call(this, component, [action])
            }
            return _createClass(_default, [{
                key: "payload",
                value: function() {
                    return _objectSpread2({
                        fromPrefetch: this.prefetchId
                    }, _get(_getPrototypeOf(_default.prototype), "payload", this).call(this))
                }
            }, {
                key: "storeResponse",
                value: function(payload) {
                    return _get(_getPrototypeOf(_default.prototype), "storeResponse", this).call(this, payload), this.response.fromPrefetch = payload.fromPrefetch, this.response
                }
            }, {
                key: "prefetchId",
                get: function() {
                    return this.actionQueue[0].toId()
                }
            }]), _default
        }(_default$4);

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments,
                later = function() {
                    timeout = null, immediate || func.apply(context, args)
                },
                callNow = immediate && !timeout;
            clearTimeout(timeout), timeout = setTimeout(later, wait), callNow && func.apply(context, args)
        }
    }

    function walk(root, callback) {
        if (!1 !== callback(root))
            for (var node = root.firstElementChild; node;) walk(node, callback), node = node.nextElementSibling
    }

    function dispatch(eventName) {
        var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            target = _ref.target,
            cancelable = _ref.cancelable,
            data = _ref.data,
            event = document.createEvent("Events");
        if (event.initEvent(eventName, !0, 1 == cancelable), event.data = data || {}, event.cancelable && !preventDefaultSupported) {
            var preventDefault = event.preventDefault;
            event.preventDefault = function() {
                this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                }), preventDefault.call(this)
            }
        }
        return (target || document).dispatchEvent(event), event
    }
    var preventDefaultSupported = (event = document.createEvent("Events"), event.initEvent("test", !0, !0), event.preventDefault(), event.defaultPrevented),
        event, range;

    function getCsrfToken() {
        var token, tokenTag = document.head.querySelector('meta[name="csrf-token"]');
        if (tokenTag) token = tokenTag.content;
        else {
            if (!window.livewire_token) throw new Error('Whoops, looks like you haven\'t added a "csrf-token" meta tag');
            token = window.livewire_token
        }
        return token
    }

    function kebabCase(subject) {
        return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
    }

    function morphAttrs(fromNode, toNode) {
        var i, attr, attrName, attrNamespaceURI, attrValue, attrs = toNode.attributes;
        for (i = attrs.length - 1; i >= 0; --i) attrName = (attr = attrs[i]).name, attrNamespaceURI = attr.namespaceURI, attrValue = attr.value, attrNamespaceURI ? (attrName = attr.localName || attrName, fromNode.getAttributeNS(attrNamespaceURI, attrName) !== attrValue && ("xmlns" === attr.prefix && (attrName = attr.name), fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue))) : fromNode.getAttribute(attrName) !== attrValue && fromNode.setAttribute(attrName, attrValue);
        for (i = (attrs = fromNode.attributes).length - 1; i >= 0; --i) !1 !== (attr = attrs[i]).specified && (attrName = attr.name, (attrNamespaceURI = attr.namespaceURI) ? (attrName = attr.localName || attrName, toNode.hasAttributeNS(attrNamespaceURI, attrName) || fromNode.removeAttributeNS(attrNamespaceURI, attrName)) : toNode.hasAttribute(attrName) || fromNode.removeAttribute(attrName))
    }
    var NS_XHTML = "http://www.w3.org/1999/xhtml",
        doc = "undefined" == typeof document ? void 0 : document,
        HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template"),
        HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();

    function createFragmentFromTemplate(str) {
        var template = doc.createElement("template");
        return template.innerHTML = str, template.content.childNodes[0]
    }

    function createFragmentFromRange(str) {
        return range || (range = doc.createRange()).selectNode(doc.body), range.createContextualFragment(str).childNodes[0]
    }

    function createFragmentFromWrap(str) {
        var fragment = doc.createElement("body");
        return fragment.innerHTML = str, fragment.childNodes[0]
    }

    function toElement(str) {
        return str = str.trim(), HAS_TEMPLATE_SUPPORT ? createFragmentFromTemplate(str) : HAS_RANGE_SUPPORT ? createFragmentFromRange(str) : createFragmentFromWrap(str)
    }

    function compareNodeNames(fromEl, toEl) {
        var fromNodeName = fromEl.nodeName,
            toNodeName = toEl.nodeName;
        return fromNodeName === toNodeName || !!(toEl.actualize && fromNodeName.charCodeAt(0) < 91 && toNodeName.charCodeAt(0) > 90) && fromNodeName === toNodeName.toUpperCase()
    }

    function createElementNS(name, namespaceURI) {
        return namespaceURI && namespaceURI !== NS_XHTML ? doc.createElementNS(namespaceURI, name) : doc.createElement(name)
    }

    function moveChildren(fromEl, toEl) {
        for (var curChild = fromEl.firstChild; curChild;) {
            var nextChild = curChild.nextSibling;
            toEl.appendChild(curChild), curChild = nextChild
        }
        return toEl
    }

    function syncBooleanAttrProp(fromEl, toEl, name) {
        fromEl[name] !== toEl[name] && (fromEl[name] = toEl[name], fromEl[name] ? fromEl.setAttribute(name, "") : fromEl.removeAttribute(name))
    }
    var specialElHandlers = {
            OPTION: function(fromEl, toEl) {
                var parentNode = fromEl.parentNode;
                if (parentNode) {
                    var parentName = parentNode.nodeName.toUpperCase();
                    "OPTGROUP" === parentName && (parentName = (parentNode = parentNode.parentNode) && parentNode.nodeName.toUpperCase()), "SELECT" !== parentName || parentNode.hasAttribute("multiple") || (fromEl.hasAttribute("selected") && !toEl.selected && (fromEl.setAttribute("selected", "selected"), fromEl.removeAttribute("selected")), parentNode.selectedIndex = -1)
                }
                syncBooleanAttrProp(fromEl, toEl, "selected")
            },
            INPUT: function(fromEl, toEl) {
                syncBooleanAttrProp(fromEl, toEl, "checked"), syncBooleanAttrProp(fromEl, toEl, "disabled"), fromEl.value !== toEl.value && (fromEl.value = toEl.value), toEl.hasAttribute("value") || fromEl.removeAttribute("value")
            },
            TEXTAREA: function(fromEl, toEl) {
                var newValue = toEl.value;
                fromEl.value !== newValue && (fromEl.value = newValue);
                var firstChild = fromEl.firstChild;
                if (firstChild) {
                    var oldValue = firstChild.nodeValue;
                    if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) return;
                    firstChild.nodeValue = newValue
                }
            },
            SELECT: function(fromEl, toEl) {
                if (!toEl.hasAttribute("multiple")) {
                    for (var optgroup, nodeName, selectedIndex = -1, i = 0, curChild = fromEl.firstChild; curChild;)
                        if ("OPTGROUP" === (nodeName = curChild.nodeName && curChild.nodeName.toUpperCase())) curChild = (optgroup = curChild).firstChild;
                        else {
                            if ("OPTION" === nodeName) {
                                if (curChild.hasAttribute("selected")) {
                                    selectedIndex = i;
                                    break
                                }
                                i++
                            }!(curChild = curChild.nextSibling) && optgroup && (curChild = optgroup.nextSibling, optgroup = null)
                        }
                    fromEl.selectedIndex = selectedIndex
                }
            }
        },
        ELEMENT_NODE = 1,
        DOCUMENT_FRAGMENT_NODE = 11,
        TEXT_NODE = 3,
        COMMENT_NODE = 8;

    function noop() {}

    function defaultGetNodeKey(node) {
        return node.id
    }

    function callHook(hook) {
        "getNodeKey" !== hook.name && hook.name;
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
        if ("function" == typeof params[0].hasAttribute) return hook.apply(void 0, params)
    }

    function morphdomFactory(morphAttrs) {
        return function(fromNode, toNode, options) {
            if (options || (options = {}), "string" == typeof toNode)
                if ("#document" === fromNode.nodeName || "HTML" === fromNode.nodeName) {
                    var toNodeHtml = toNode;
                    (toNode = doc.createElement("html")).innerHTML = toNodeHtml
                } else toNode = toElement(toNode);
            var getNodeKey = options.getNodeKey || defaultGetNodeKey,
                onBeforeNodeAdded = options.onBeforeNodeAdded || noop,
                onNodeAdded = options.onNodeAdded || noop,
                onBeforeElUpdated = options.onBeforeElUpdated || noop,
                onElUpdated = options.onElUpdated || noop,
                onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop,
                onNodeDiscarded = options.onNodeDiscarded || noop,
                onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop,
                childrenOnly = !0 === options.childrenOnly,
                fromNodesLookup = Object.create(null),
                keyedRemovalList = [];

            function addKeyedRemoval(key) {
                keyedRemovalList.push(key)
            }

            function removeNode(node, parentNode, skipKeyedNodes) {
                !1 !== callHook(onBeforeNodeDiscarded, node) && (parentNode && parentNode.removeChild(node), callHook(onNodeDiscarded, node), function walkDiscardedChildNodes(node, skipKeyedNodes) {
                    if (node.nodeType === ELEMENT_NODE)
                        for (var curChild = node.firstChild; curChild;) {
                            var key = void 0;
                            skipKeyedNodes && (key = callHook(getNodeKey, curChild)) ? addKeyedRemoval(key) : (callHook(onNodeDiscarded, curChild), curChild.firstChild && walkDiscardedChildNodes(curChild, skipKeyedNodes)), curChild = curChild.nextSibling
                        }
                }(node, skipKeyedNodes))
            }

            function handleNodeAdded(el) {
                if (callHook(onNodeAdded, el), !el.skipAddingChildren)
                    for (var curChild = el.firstChild; curChild;) {
                        var nextSibling = curChild.nextSibling,
                            key = callHook(getNodeKey, curChild);
                        if (key) {
                            var unmatchedFromEl = fromNodesLookup[key];
                            unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl) && (curChild.parentNode.replaceChild(unmatchedFromEl, curChild), morphEl(unmatchedFromEl, curChild), curChild = unmatchedFromEl)
                        }
                        handleNodeAdded(curChild), curChild = nextSibling
                    }
            }

            function morphEl(fromEl, toEl, childrenOnly) {
                var toElKey = callHook(getNodeKey, toEl);
                if (toElKey && delete fromNodesLookup[toElKey], !childrenOnly) {
                    if (!1 === callHook(onBeforeElUpdated, fromEl, toEl)) return;
                    if (fromEl.skipElUpdatingButStillUpdateChildren || morphAttrs(fromEl, toEl), callHook(onElUpdated, fromEl), !1 === callHook(onBeforeElChildrenUpdated, fromEl, toEl)) return
                }
                "TEXTAREA" !== fromEl.nodeName ? function(fromEl, toEl) {
                    var curToNodeKey, curFromNodeKey, fromNextSibling, toNextSibling, matchingFromEl, curToNodeChild = toEl.firstChild,
                        curFromNodeChild = fromEl.firstChild;
                    outer: for (; curToNodeChild;) {
                        for (toNextSibling = curToNodeChild.nextSibling, curToNodeKey = callHook(getNodeKey, curToNodeChild); curFromNodeChild;) {
                            if (fromNextSibling = curFromNodeChild.nextSibling, curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                                curToNodeChild = toNextSibling, curFromNodeChild = fromNextSibling;
                                continue outer
                            }
                            curFromNodeKey = callHook(getNodeKey, curFromNodeChild);
                            var curFromNodeType = curFromNodeChild.nodeType,
                                isCompatible = void 0;
                            if (curFromNodeType === curToNodeChild.nodeType && (curFromNodeType === ELEMENT_NODE ? (curToNodeKey ? curToNodeKey !== curFromNodeKey && ((matchingFromEl = fromNodesLookup[curToNodeKey]) ? fromNextSibling === matchingFromEl ? isCompatible = !1 : (fromEl.insertBefore(matchingFromEl, curFromNodeChild), curFromNodeKey ? addKeyedRemoval(curFromNodeKey) : removeNode(curFromNodeChild, fromEl, !0), curFromNodeChild = matchingFromEl) : isCompatible = !1) : curFromNodeKey && (isCompatible = !1), (isCompatible = !1 !== isCompatible && compareNodeNames(curFromNodeChild, curToNodeChild)) && (!curToNodeChild.isEqualNode(curFromNodeChild) && curToNodeChild.nextElementSibling && curToNodeChild.nextElementSibling.isEqualNode(curFromNodeChild) ? isCompatible = !1 : morphEl(curFromNodeChild, curToNodeChild))) : curFromNodeType !== TEXT_NODE && curFromNodeType != COMMENT_NODE || (isCompatible = !0, curFromNodeChild.nodeValue !== curToNodeChild.nodeValue && (curFromNodeChild.nodeValue = curToNodeChild.nodeValue))), isCompatible) {
                                curToNodeChild = toNextSibling, curFromNodeChild = fromNextSibling;
                                continue outer
                            }
                            if (curToNodeChild.nextElementSibling && curToNodeChild.nextElementSibling.isEqualNode(curFromNodeChild)) {
                                var nodeToBeAdded = curToNodeChild.cloneNode(!0);
                                fromEl.insertBefore(nodeToBeAdded, curFromNodeChild), handleNodeAdded(nodeToBeAdded), curToNodeChild = curToNodeChild.nextElementSibling.nextSibling, curFromNodeChild = fromNextSibling;
                                continue outer
                            }
                            curFromNodeKey ? addKeyedRemoval(curFromNodeKey) : removeNode(curFromNodeChild, fromEl, !0), curFromNodeChild = fromNextSibling
                        }
                        if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) fromEl.appendChild(matchingFromEl), morphEl(matchingFromEl, curToNodeChild);
                        else {
                            var onBeforeNodeAddedResult = callHook(onBeforeNodeAdded, curToNodeChild);
                            !1 !== onBeforeNodeAddedResult && (onBeforeNodeAddedResult && (curToNodeChild = onBeforeNodeAddedResult), curToNodeChild.actualize && (curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc)), fromEl.appendChild(curToNodeChild), handleNodeAdded(curToNodeChild))
                        }
                        curToNodeChild = toNextSibling, curFromNodeChild = fromNextSibling
                    }! function(fromEl, curFromNodeChild, curFromNodeKey) {
                        for (; curFromNodeChild;) {
                            var fromNextSibling = curFromNodeChild.nextSibling;
                            (curFromNodeKey = callHook(getNodeKey, curFromNodeChild)) ? addKeyedRemoval(curFromNodeKey): removeNode(curFromNodeChild, fromEl, !0), curFromNodeChild = fromNextSibling
                        }
                    }(fromEl, curFromNodeChild, curFromNodeKey);
                    var specialElHandler = specialElHandlers[fromEl.nodeName];
                    specialElHandler && !fromEl.isLivewireModel && specialElHandler(fromEl, toEl)
                }(fromEl, toEl) : fromEl.innerHTML != toEl.innerHTML && specialElHandlers.TEXTAREA(fromEl, toEl)
            }! function indexTree(node) {
                if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE)
                    for (var curChild = node.firstChild; curChild;) {
                        var key = callHook(getNodeKey, curChild);
                        key && (fromNodesLookup[key] = curChild), indexTree(curChild), curChild = curChild.nextSibling
                    }
            }(fromNode);
            var morphedNode = fromNode,
                morphedNodeType = morphedNode.nodeType,
                toNodeType = toNode.nodeType;
            if (!childrenOnly)
                if (morphedNodeType === ELEMENT_NODE) toNodeType === ELEMENT_NODE ? compareNodeNames(fromNode, toNode) || (callHook(onNodeDiscarded, fromNode), morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI))) : morphedNode = toNode;
                else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
                if (toNodeType === morphedNodeType) return morphedNode.nodeValue !== toNode.nodeValue && (morphedNode.nodeValue = toNode.nodeValue), morphedNode;
                morphedNode = toNode
            }
            if (morphedNode === toNode) callHook(onNodeDiscarded, fromNode);
            else {
                if (toNode.isSameNode && toNode.isSameNode(morphedNode)) return;
                if (morphEl(morphedNode, toNode, childrenOnly), keyedRemovalList)
                    for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
                        var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                        elToRemove && removeNode(elToRemove, elToRemove.parentNode, !1)
                    }
            }
            return !childrenOnly && morphedNode !== fromNode && fromNode.parentNode && (morphedNode.actualize && (morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc)), fromNode.parentNode.replaceChild(morphedNode, fromNode)), morphedNode
        }
    }
    var morphdom = morphdomFactory(morphAttrs),
        _default$6 = function(_Action) {
            _inherits(_default, _Action);
            var _super = _createSuper(_default);

            function _default(name, value, el) {
                var _this;
                return _classCallCheck(this, _default), (_this = _super.call(this, el)).type = "syncInput", _this.payload = {
                    name: name,
                    value: value
                }, _this
            }
            return _default
        }(_default),
        _default$7 = function(_Action) {
            _inherits(_default, _Action);
            var _super = _createSuper(_default);

            function _default(method, params, el) {
                var _this;
                return _classCallCheck(this, _default), (_this = _super.call(this, el)).type = "callMethod", _this.payload = {
                    method: method,
                    params: params
                }, _this
            }
            return _default
        }(_default),
        nodeInitializer = {
            initialize: function initialize(el, component) {
                var _this = this;
                if (store$2.initialRenderIsFinished && "script" === el.rawNode().tagName.toLowerCase()) return eval(el.rawNode().innerHTML), !1;
                el.directives.all().forEach((function(directive) {
                    switch (directive.type) {
                        case "init":
                            _this.fireActionRightAway(el, directive, component);
                            break;
                        case "model":
                            el.setInputValueFromModel(component), _this.attachModelListener(el, directive, component);
                            break;
                        default:
                            store$2.directives.has(directive.type) && store$2.directives.call(directive.type, el.el, directive, component), _this.attachDomListener(el, directive, component)
                    }
                })), store$2.callHook("elementInitialized", el, component)
            },
            fireActionRightAway: function(el, directive, component) {
                var method = directive.value ? directive.method : "$refresh";
                component.addAction(new _default$7(method, directive.params, el))
            },
            attachModelListener: function(el, directive, component) {
                el.el.isLivewireModel = !0;
                var isLazy = directive.modifiers.includes("lazy"),
                    debounceIf = function(condition, callback, time) {
                        return condition ? component.modelSyncDebounce(callback, time) : callback
                    },
                    hasDebounceModifier = directive.modifiers.includes("debounce");
                if (store$2.callHook("interceptWireModelAttachListener", el, directive, component, debounceIf), "input" !== el.rawNode().tagName.toLowerCase() || "file" !== el.rawNode().type) {
                    var event = "select" === el.rawNode().tagName.toLowerCase() || ["checkbox", "radio"].includes(el.rawNode().type) || directive.modifiers.includes("lazy") ? "change" : "input",
                        handler = debounceIf(hasDebounceModifier || el.isTextInput() && !isLazy, (function(e) {
                            var model = directive.value,
                                el = new DOMElement(e.target),
                                value = e instanceof CustomEvent && void 0 !== e.detail && void 0 === window.document.documentMode ? e.detail : el.valueFromInput(component);
                            component.addAction(new _default$6(model, value, el))
                        }), directive.durationOr(150));
                    el.addEventListener(event, handler), component.addListenerForTeardown((function() {
                        el.removeEventListener(event, handler)
                    }))
                }
            },
            attachDomListener: function(el, directive, component) {
                switch (directive.type) {
                    case "keydown":
                    case "keyup":
                        this.attachListener(el, directive, component, (function(e) {
                            var selectedSystemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((function(key) {
                                return directive.modifiers.includes(key)
                            }));
                            if (selectedSystemKeyModifiers.length > 0 && selectedSystemKeyModifiers.filter((function(key) {
                                    return "cmd" !== key && "super" !== key || (key = "meta"), !e["".concat(key, "Key")]
                                })).length > 0) return !1;
                            var modifiers = directive.modifiers.filter((function(modifier) {
                                return !modifier.match(/^debounce$/) && !modifier.match(/^[0-9]+m?s$/)
                            }));
                            return 0 === modifiers.length || modifiers.includes(kebabCase(e.key))
                        }));
                        break;
                    case "click":
                        this.attachListener(el, directive, component, (function(e) {
                            if (directive.modifiers.includes("self")) return el.isSameNode(e.target)
                        }));
                        break;
                    default:
                        this.attachListener(el, directive, component)
                }
            },
            attachListener: function(el, directive, component, callback) {
                var _this2 = this;
                directive.modifiers.includes("prefetch") && el.addEventListener("mouseenter", (function() {
                    component.addPrefetchAction(new _default$7(directive.method, directive.params, el))
                }));
                var event = directive.type,
                    debouncedHandler = function(condition, callback, time) {
                        return condition ? debounce(callback, time) : callback
                    }(directive.modifiers.includes("debounce"), (function(e) {
                        callback && !1 === callback(e) || component.callAfterModelDebounce((function() {
                            var el = new DOMElement(e.target);
                            directive.setEventContext(e), _this2.preventAndStop(e, directive.modifiers);
                            var _component$scopedList, method = directive.method,
                                params = directive.params;
                            if (0 === params.length && e instanceof CustomEvent && e.detail && params.push(e.detail), "$emit" === method) return (_component$scopedList = component.scopedListeners).call.apply(_component$scopedList, _toConsumableArray(params)), void store$2.emit.apply(store$2, _toConsumableArray(params));
                            "$emitUp" !== method ? "$emitSelf" !== method ? "$emitTo" !== method ? directive.value && component.addAction(new _default$7(method, params, el)) : store$2.emitTo.apply(store$2, _toConsumableArray(params)) : store$2.emitSelf.apply(store$2, [component.id].concat(_toConsumableArray(params))) : store$2.emitUp.apply(store$2, [el].concat(_toConsumableArray(params)))
                        }))
                    }), directive.durationOr(150));
                el.addEventListener(event, debouncedHandler), component.addListenerForTeardown((function() {
                    el.removeEventListener(event, debouncedHandler)
                }))
            },
            preventAndStop: function(event, modifiers) {
                modifiers.includes("prevent") && event.preventDefault(), modifiers.includes("stop") && event.stopPropagation()
            }
        },
        PrefetchManager = function() {
            function PrefetchManager(component) {
                _classCallCheck(this, PrefetchManager), this.component = component, this.prefetchMessagesByActionId = {}
            }
            return _createClass(PrefetchManager, [{
                key: "addMessage",
                value: function(message) {
                    this.prefetchMessagesByActionId[message.prefetchId] = message
                }
            }, {
                key: "storeResponseInMessageForPayload",
                value: function(payload) {
                    var message = this.prefetchMessagesByActionId[payload.fromPrefetch];
                    message && message.storeResponse(payload)
                }
            }, {
                key: "actionHasPrefetch",
                value: function(action) {
                    return Object.keys(this.prefetchMessagesByActionId).includes(action.toId())
                }
            }, {
                key: "actionPrefetchResponseHasBeenReceived",
                value: function(action) {
                    return !!this.getPrefetchMessageByAction(action).response
                }
            }, {
                key: "getPrefetchMessageByAction",
                value: function(action) {
                    return this.prefetchMessagesByActionId[action.toId()]
                }
            }, {
                key: "clearPrefetches",
                value: function() {
                    this.prefetchMessagesByActionId = {}
                }
            }]), PrefetchManager
        }(),
        EchoManager = function() {
            function EchoManager(component) {
                _classCallCheck(this, EchoManager), this.component = component
            }
            return _createClass(EchoManager, [{
                key: "registerListeners",
                value: function() {
                    Array.isArray(this.component.events) && this.component.events.forEach((function(event) {
                        if (event.startsWith("echo")) {
                            if ("undefined" == typeof Echo) return void console.warn("Laravel Echo cannot be found");
                            var event_parts = event.split(/(echo:|echo-)|:|,/);
                            "echo:" == event_parts[1] && event_parts.splice(2, 0, "channel", void 0), "notification" == event_parts[2] && event_parts.push(void 0, void 0);
                            var _event_parts = _slicedToArray(event_parts, 7),
                                channel_type = (_event_parts[0], _event_parts[1], _event_parts[2]),
                                channel = (_event_parts[3], _event_parts[4]),
                                event_name = (_event_parts[5], _event_parts[6]);
                            ["channel", "private"].includes(channel_type) ? Echo[channel_type](channel).listen(event_name, (function(e) {
                                store$2.emit(event, e)
                            })) : "presence" == channel_type ? Echo.join(channel)[event_name]((function(e) {
                                store$2.emit(event, e)
                            })) : "notification" == channel_type ? Echo.private(channel).notification((function(notification) {
                                store$2.emit(event, notification)
                            })) : console.warn("Echo channel type not yet supported")
                        }
                    }))
                }
            }]), EchoManager
        }();

    function LoadingStates() {
        store$2.registerHook("componentInitialized", (function(component) {
            component.targetedLoadingElsByAction = {}, component.genericLoadingEls = [], component.currentlyActiveLoadingEls = [], component.currentlyActiveUploadLoadingEls = []
        })), store$2.registerHook("elementInitialized", (function(el, component) {
            el.directives.missing("loading") || el.directives.directives.filter((function(i) {
                return "loading" === i.type
            })).forEach((function(directive) {
                processLoadingDirective(component, el, directive)
            }))
        })), store$2.registerHook("messageSent", (function(component, message) {
            var actions = message.actionQueue.filter((function(action) {
                    return "callMethod" === action.type
                })).map((function(action) {
                    return action.payload.method
                })),
                models = message.actionQueue.filter((function(action) {
                    return "syncInput" === action.type
                })).map((function(action) {
                    return action.payload.name
                }));
            setLoading(component, actions.concat(models))
        })), store$2.registerHook("messageFailed", (function(component) {
            unsetLoading(component)
        })), store$2.registerHook("responseReceived", (function(component) {
            unsetLoading(component)
        })), store$2.registerHook("elementRemoved", (function(el, component) {
            removeLoadingEl(component, el)
        }))
    }

    function processLoadingDirective(component, el, directive) {
        var actionNames = !1;
        if (el.directives.get("target")) actionNames = el.directives.get("target").value.split(",").map((function(s) {
            return s.trim()
        }));
        else {
            var nonActionOrModelLivewireDirectives = ["init", "dirty", "offline", "target", "loading", "poll", "ignore", "key", "id"];
            (actionNames = el.directives.all().filter((function(i) {
                return !nonActionOrModelLivewireDirectives.includes(i.type)
            })).map((function(i) {
                return i.method
            }))).length < 1 && (actionNames = !1)
        }
        addLoadingEl(component, el, directive, actionNames)
    }

    function addLoadingEl(component, el, directive, actionsNames) {
        actionsNames ? actionsNames.forEach((function(actionsName) {
            component.targetedLoadingElsByAction[actionsName] ? component.targetedLoadingElsByAction[actionsName].push({
                el: el,
                directive: directive
            }) : component.targetedLoadingElsByAction[actionsName] = [{
                el: el,
                directive: directive
            }]
        })) : component.genericLoadingEls.push({
            el: el,
            directive: directive
        })
    }

    function removeLoadingEl(component, el) {
        component.genericLoadingEls.forEach((function(element, index) {
            element.el.isSameNode(el) && component.genericLoadingEls.splice(index, 1)
        })), Object.keys(component.targetedLoadingElsByAction).forEach((function(key) {
            component.targetedLoadingElsByAction[key] = component.targetedLoadingElsByAction[key].filter((function(element) {
                return !element.el.isSameNode(el)
            }))
        }))
    }

    function setLoading(component, actions) {
        var actionTargetedEls = actions.map((function(action) {
                return component.targetedLoadingElsByAction[action]
            })).filter((function(el) {
                return el
            })).flat(),
            allEls = component.genericLoadingEls.concat(actionTargetedEls);
        startLoading(allEls), component.currentlyActiveLoadingEls = allEls
    }

    function setUploadLoading(component, modelName) {
        var actionTargetedEls = component.targetedLoadingElsByAction[modelName] || [],
            allEls = component.genericLoadingEls.concat(actionTargetedEls);
        startLoading(allEls), component.currentlyActiveUploadLoadingEls = allEls
    }

    function unsetUploadLoading(component) {
        endLoading(component.currentlyActiveUploadLoadingEls), component.currentlyActiveUploadLoadingEls = []
    }

    function unsetLoading(component) {
        endLoading(component.currentlyActiveLoadingEls), component.currentlyActiveLoadingEls = []
    }

    function startLoading(els) {
        els.forEach((function(_ref) {
            var el = _ref.el,
                directive = _ref.directive;
            if (el = el.el, directive.modifiers.includes("class")) {
                var _el$classList, _el$classList2, classes = directive.value.split(" ").filter(Boolean);
                if (directive.modifiers.includes("remove"))(_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray(classes));
                else(_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(classes))
            } else directive.modifiers.includes("attr") ? directive.modifiers.includes("remove") ? el.removeAttribute(directive.value) : el.setAttribute(directive.value, !0) : directive.modifiers.includes("remove") ? el.style.display = "none" : el.style.display = "inline-block"
        }))
    }

    function endLoading(els) {
        els.forEach((function(_ref2) {
            var el = _ref2.el,
                directive = _ref2.directive;
            if (el = el.el, directive.modifiers.includes("class")) {
                var _el$classList3, _el$classList4, classes = directive.value.split(" ").filter(Boolean);
                if (directive.modifiers.includes("remove"))(_el$classList3 = el.classList).add.apply(_el$classList3, _toConsumableArray(classes));
                else(_el$classList4 = el.classList).remove.apply(_el$classList4, _toConsumableArray(classes))
            } else directive.modifiers.includes("attr") ? directive.modifiers.includes("remove") ? el.setAttribute(directive.value, !0) : el.removeAttribute(directive.value) : el.style.display = "none"
        }))
    }
    var MessageBag = function() {
            function MessageBag() {
                _classCallCheck(this, MessageBag), this.bag = {}
            }
            return _createClass(MessageBag, [{
                key: "add",
                value: function(name, thing) {
                    this.bag[name] || (this.bag[name] = []), this.bag[name].push(thing)
                }
            }, {
                key: "push",
                value: function(name, thing) {
                    this.add(name, thing)
                }
            }, {
                key: "first",
                value: function(name) {
                    return this.bag[name] ? this.bag[name][0] : null
                }
            }, {
                key: "last",
                value: function(name) {
                    return this.bag[name].slice(-1)[0]
                }
            }, {
                key: "get",
                value: function(name) {
                    return this.bag[name]
                }
            }, {
                key: "shift",
                value: function(name) {
                    return this.bag[name].shift()
                }
            }, {
                key: "call",
                value: function(name) {
                    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                    (this.listeners[name] || []).forEach((function(callback) {
                        callback.apply(void 0, params)
                    }))
                }
            }, {
                key: "has",
                value: function(name) {
                    return Object.keys(this.listeners).includes(name)
                }
            }]), MessageBag
        }(),
        UploadManager = function() {
            function UploadManager(component) {
                _classCallCheck(this, UploadManager), this.component = component, this.uploadBag = new MessageBag, this.removeBag = new MessageBag
            }
            return _createClass(UploadManager, [{
                key: "registerListeners",
                value: function() {
                    var _this = this;
                    this.component.on("upload:generatedSignedUrl", (function(name, url) {
                        setUploadLoading(_this.component, name), _this.handleSignedUrl(name, url)
                    })), this.component.on("upload:generatedSignedUrlForS3", (function(name, payload) {
                        setUploadLoading(_this.component, name), _this.handleS3PreSignedUrl(name, payload)
                    })), this.component.on("upload:finished", (function(name, tmpFilenames) {
                        return _this.markUploadFinished(name, tmpFilenames)
                    })), this.component.on("upload:errored", (function(name) {
                        return _this.markUploadErrored(name)
                    })), this.component.on("upload:removed", (function(name, tmpFilename) {
                        return _this.removeBag.shift(name).finishCallback(tmpFilename)
                    }))
                }
            }, {
                key: "upload",
                value: function(name, file, finishCallback, errorCallback, progressCallback) {
                    this.setUpload(name, {
                        files: [file],
                        multiple: !1,
                        finishCallback: finishCallback,
                        errorCallback: errorCallback,
                        progressCallback: progressCallback
                    })
                }
            }, {
                key: "uploadMultiple",
                value: function(name, files, finishCallback, errorCallback, progressCallback) {
                    this.setUpload(name, {
                        files: Array.from(files),
                        multiple: !0,
                        finishCallback: finishCallback,
                        errorCallback: errorCallback,
                        progressCallback: progressCallback
                    })
                }
            }, {
                key: "removeUpload",
                value: function(name, tmpFilename, finishCallback) {
                    this.removeBag.push(name, {
                        tmpFilename: tmpFilename,
                        finishCallback: finishCallback
                    }), this.component.call("removeUpload", name, tmpFilename)
                }
            }, {
                key: "setUpload",
                value: function(name, uploadObject) {
                    this.uploadBag.add(name, uploadObject), 1 === this.uploadBag.get(name).length && this.startUpload(name, uploadObject)
                }
            }, {
                key: "handleSignedUrl",
                value: function(name, url) {
                    var formData = new FormData;
                    Array.from(this.uploadBag.first(name).files).forEach((function(file) {
                        return formData.append("files[]", file)
                    }));
                    var headers = {
                        "X-CSRF-TOKEN": getCsrfToken(),
                        Accept: "application/json"
                    };
                    this.makeRequest(name, formData, "post", url, headers, (function(response) {
                        return response.paths
                    }))
                }
            }, {
                key: "handleS3PreSignedUrl",
                value: function(name, payload) {
                    var formData = this.uploadBag.first(name).files[0],
                        headers = payload.headers;
                    "Host" in headers && delete headers.Host;
                    var url = payload.url;
                    this.makeRequest(name, formData, "put", url, headers, (function(response) {
                        return [payload.path]
                    }))
                }
            }, {
                key: "makeRequest",
                value: function(name, formData, method, url, headers, retrievePaths) {
                    var _this2 = this,
                        request = new XMLHttpRequest;
                    request.open(method, url), Object.entries(headers).forEach((function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            value = _ref2[1];
                        request.setRequestHeader(key, value)
                    })), request.upload.addEventListener("progress", (function(e) {
                        e.detail = {}, e.detail.progress = Math.round(100 * e.loaded / e.total), _this2.uploadBag.first(name).progressCallback(e)
                    })), request.addEventListener("load", (function() {
                        if ("2" !== (request.status + "")[0]) {
                            var errors = null;
                            422 === request.status && (errors = request.response), _this2.component.call("uploadErrored", name, errors, _this2.uploadBag.first(name).multiple)
                        } else {
                            var paths = retrievePaths(request.response && JSON.parse(request.response));
                            _this2.component.call("finishUpload", name, paths, _this2.uploadBag.first(name).multiple)
                        }
                    })), request.send(formData)
                }
            }, {
                key: "startUpload",
                value: function(name, uploadObject) {
                    var fileInfos = uploadObject.files.map((function(file) {
                        return {
                            name: file.name,
                            size: file.size,
                            type: file.type
                        }
                    }));
                    this.component.call("startUpload", name, fileInfos, uploadObject.multiple), setUploadLoading(this.component, name)
                }
            }, {
                key: "markUploadFinished",
                value: function(name, tmpFilenames) {
                    unsetUploadLoading(this.component);
                    var uploadObject = this.uploadBag.shift(name);
                    uploadObject.finishCallback(uploadObject.multiple ? tmpFilenames : tmpFilenames[0]), this.uploadBag.get(name).length > 0 && this.startUpload(name, this.uploadBag.last(name))
                }
            }, {
                key: "markUploadErrored",
                value: function(name) {
                    unsetUploadLoading(this.component), this.uploadBag.shift(name).errorCallback(), this.uploadBag.get(name).length > 0 && this.startUpload(name, this.uploadBag.last(name))
                }
            }]), UploadManager
        }(),
        Component = function() {
            function Component(el, connection) {
                _classCallCheck(this, Component), el.rawNode().__livewire = this, this.id = el.getAttribute("id");
                var initialData = JSON.parse(this.extractLivewireAttribute("initial-data"));
                this.data = initialData.data || {}, this.events = initialData.events || [], this.children = initialData.children || {}, this.checksum = initialData.checksum || "", this.locale = initialData.locale || null, this.name = initialData.name || "", this.errorBag = initialData.errorBag || {}, this.redirectTo = initialData.redirectTo || !1, this.scopedListeners = new MessageBus, this.connection = connection, this.actionQueue = [], this.messageInTransit = null, this.modelTimeout = null, this.tearDownCallbacks = [], this.prefetchManager = new PrefetchManager(this), this.echoManager = new EchoManager(this), this.uploadManager = new UploadManager(this), store$2.callHook("componentInitialized", this), this.initialize(), this.echoManager.registerListeners(), this.uploadManager.registerListeners(), this.redirectTo && this.redirect(this.redirectTo)
            }
            return _createClass(Component, [{
                key: "extractLivewireAttribute",
                value: function(name) {
                    var value = this.el.getAttribute(name);
                    return this.el.removeAttribute(name), value
                }
            }, {
                key: "initialize",
                value: function() {
                    var _this = this;
                    this.walk((function(el) {
                        nodeInitializer.initialize(el, _this)
                    }), (function(el) {
                        store$2.addComponent(new Component(el, _this.connection))
                    }))
                }
            }, {
                key: "get",
                value: function(name) {
                    return name.split(".").reduce((function(carry, dotSeperatedSegment) {
                        return carry[dotSeperatedSegment]
                    }), this.data)
                }
            }, {
                key: "set",
                value: function(name, value) {
                    this.addAction(new _default$6(name, value, this.el))
                }
            }, {
                key: "call",
                value: function(method) {
                    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                    this.addAction(new _default$7(method, params, this.el))
                }
            }, {
                key: "on",
                value: function(event, callback) {
                    this.scopedListeners.register(event, callback)
                }
            }, {
                key: "addAction",
                value: function(action) {
                    if (this.prefetchManager.actionHasPrefetch(action) && this.prefetchManager.actionPrefetchResponseHasBeenReceived(action)) {
                        var message = this.prefetchManager.getPrefetchMessageByAction(action);
                        return this.handleResponse(message.response), void this.prefetchManager.clearPrefetches()
                    }
                    this.actionQueue.push(action), debounce(this.fireMessage, 5).apply(this), this.prefetchManager.clearPrefetches()
                }
            }, {
                key: "fireMessage",
                value: function() {
                    this.messageInTransit || (this.messageInTransit = new _default$4(this, this.actionQueue), this.connection.sendMessage(this.messageInTransit), store$2.callHook("messageSent", this, this.messageInTransit), this.actionQueue = [])
                }
            }, {
                key: "messageSendFailed",
                value: function() {
                    store$2.callHook("messageFailed", this), this.messageInTransit = null
                }
            }, {
                key: "receiveMessage",
                value: function(payload) {
                    var response = this.messageInTransit.storeResponse(payload);
                    this.handleResponse(response), this.actionQueue.length > 0 && this.fireMessage()
                }
            }, {
                key: "handleResponse",
                value: function(response) {
                    var _this2 = this;
                    this.data = response.data, this.checksum = response.checksum, this.children = response.children, this.errorBag = response.errorBag, store$2.callHook("responseReceived", this, response), response.redirectTo ? this.redirect(response.redirectTo) : (this.replaceDom(response.dom, response.dirtyInputs), this.forceRefreshDataBoundElementsMarkedAsDirty(response.dirtyInputs), this.messageInTransit = null, response.eventQueue && response.eventQueue.length > 0 && response.eventQueue.forEach((function(event) {
                        var _this2$scopedListener;
                        (_this2$scopedListener = _this2.scopedListeners).call.apply(_this2$scopedListener, [event.event].concat(_toConsumableArray(event.params))), event.selfOnly ? store$2.emitSelf.apply(store$2, [_this2.id, event.event].concat(_toConsumableArray(event.params))) : event.to ? store$2.emitTo.apply(store$2, [event.to, event.event].concat(_toConsumableArray(event.params))) : event.ancestorsOnly ? store$2.emitUp.apply(store$2, [_this2.el, event.event].concat(_toConsumableArray(event.params))) : store$2.emit.apply(store$2, [event.event].concat(_toConsumableArray(event.params)))
                    })), response.dispatchQueue && response.dispatchQueue.length > 0 && response.dispatchQueue.forEach((function(event) {
                        var data = event.data ? event.data : {},
                            e = new CustomEvent(event.event, {
                                bubbles: !0,
                                detail: data
                            });
                        _this2.el.el.dispatchEvent(e)
                    })))
                }
            }, {
                key: "redirect",
                value: function(url) {
                    window.Turbolinks && window.Turbolinks.supported ? window.Turbolinks.visit(url) : window.location.href = url
                }
            }, {
                key: "forceRefreshDataBoundElementsMarkedAsDirty",
                value: function(dirtyInputs) {
                    var _this3 = this;
                    this.walk((function(el) {
                        if (!el.directives.missing("model")) {
                            var modelValue = el.directives.get("model").value;
                            el.isFocused() && !dirtyInputs.includes(modelValue) || el.setInputValueFromModel(_this3)
                        }
                    }))
                }
            }, {
                key: "replaceDom",
                value: function(rawDom) {
                    var objectContainingRawDomToFakePassingByReferenceToBeAbleToMutateFromWithinAHook = {
                        html: rawDom
                    };
                    store$2.callHook("beforeDomUpdate", this, objectContainingRawDomToFakePassingByReferenceToBeAbleToMutateFromWithinAHook), this.handleMorph(objectContainingRawDomToFakePassingByReferenceToBeAbleToMutateFromWithinAHook.html.trim()), store$2.callHook("afterDomUpdate", this)
                }
            }, {
                key: "addPrefetchAction",
                value: function(action) {
                    if (!this.prefetchManager.actionHasPrefetch(action)) {
                        var message = new _default$5(this, action);
                        this.prefetchManager.addMessage(message), this.connection.sendMessage(message)
                    }
                }
            }, {
                key: "receivePrefetchMessage",
                value: function(payload) {
                    this.prefetchManager.storeResponseInMessageForPayload(payload)
                }
            }, {
                key: "handleMorph",
                value: function(dom) {
                    var _this4 = this;
                    this.morphChanges = {
                        changed: [],
                        added: [],
                        removed: []
                    }, morphdom(this.el.rawNode(), dom, {
                        childrenOnly: !1,
                        getNodeKey: function(node) {
                            return node.hasAttribute("wire:key") ? node.getAttribute("wire:key") : node.hasAttribute("wire:id") ? node.getAttribute("wire:id") : node.id
                        },
                        onBeforeNodeAdded: function(node) {},
                        onBeforeNodeDiscarded: function(node) {},
                        onNodeDiscarded: function(node) {
                            var el = new DOMElement(node);
                            store$2.callHook("elementRemoved", el, _this4), node.__livewire && store$2.removeComponent(node.__livewire), _this4.morphChanges.removed.push(node)
                        },
                        onBeforeElChildrenUpdated: function(node) {},
                        onBeforeElUpdated: function(from, to) {
                            if (from.isEqualNode(to)) return !1;
                            store$2.callHook("beforeElementUpdate", from, to, _this4);
                            var fromEl = new DOMElement(from);
                            if (fromEl.hasAttribute("model") && "SELECT" === fromEl.rawNode().tagName.toUpperCase() && (to.selectedIndex = -1), fromEl.directives.has("ignore") || !0 === from.__livewire_ignore || !0 === from.__livewire_ignore_self) {
                                if (!(fromEl.directives.has("ignore") && fromEl.directives.get("ignore").modifiers.includes("self") || !0 === from.__livewire_ignore_self)) return !1;
                                from.skipElUpdatingButStillUpdateChildren = !0
                            }
                            if (fromEl.isComponentRootEl() && fromEl.getAttribute("id") !== _this4.id) return !1;
                            from.__x && window.Alpine.clone(from.__x, to)
                        },
                        onElUpdated: function(node) {
                            _this4.morphChanges.changed.push(node), store$2.callHook("afterElementUpdate", node, _this4)
                        },
                        onNodeAdded: function(node) {
                            var el = new DOMElement(node);
                            if (el.closestRoot().getAttribute("id") === _this4.id) {
                                if (!1 === nodeInitializer.initialize(el, _this4)) return !1
                            } else el.isComponentRootEl() && (store$2.addComponent(new Component(el, _this4.connection)), node.skipAddingChildren = !0);
                            _this4.morphChanges.added.push(node)
                        }
                    })
                }
            }, {
                key: "walk",
                value: function(callback) {
                    var _this5 = this,
                        callbackWhenNewComponentIsEncountered = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(el) {};
                    walk(this.el.rawNode(), (function(node) {
                        var el = new DOMElement(node);
                        if (!el.isSameNode(_this5.el)) return el.isComponentRootEl() ? (callbackWhenNewComponentIsEncountered(el), !1) : !1 !== callback(el) && void 0;
                        callback(el)
                    }))
                }
            }, {
                key: "modelSyncDebounce",
                value: function(callback, time) {
                    this.modelDebounceCallbacks || (this.modelDebounceCallbacks = []);
                    var timeout, callbackRegister = {
                        callback: function() {}
                    };
                    return this.modelDebounceCallbacks.push(callbackRegister),
                        function(e) {
                            clearTimeout(timeout), timeout = setTimeout((function() {
                                callback(e), timeout = void 0, callbackRegister.callback = function() {}
                            }), time), callbackRegister.callback = function() {
                                clearTimeout(timeout), callback(e)
                            }
                        }
                }
            }, {
                key: "callAfterModelDebounce",
                value: function(callback) {
                    this.modelDebounceCallbacks && this.modelDebounceCallbacks.forEach((function(callbackRegister) {
                        callbackRegister.callback(), callbackRegister = function() {}
                    })), callback()
                }
            }, {
                key: "addListenerForTeardown",
                value: function(teardownCallback) {
                    this.tearDownCallbacks.push(teardownCallback)
                }
            }, {
                key: "tearDown",
                value: function() {
                    this.tearDownCallbacks.forEach((function(callback) {
                        return callback()
                    }))
                }
            }, {
                key: "upload",
                value: function(name, file) {
                    var finishCallback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        errorCallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                        progressCallback = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
                    this.uploadManager.upload(name, file, finishCallback, errorCallback, progressCallback)
                }
            }, {
                key: "uploadMultiple",
                value: function(name, files) {
                    var finishCallback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        errorCallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                        progressCallback = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
                    this.uploadManager.uploadMultiple(name, files, finishCallback, errorCallback, progressCallback)
                }
            }, {
                key: "removeUpload",
                value: function(name, tmpFilename) {
                    var finishCallback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        errorCallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                    this.uploadManager.removeUpload(name, tmpFilename, finishCallback, errorCallback)
                }
            }, {
                key: "el",
                get: function() {
                    return DOM.getByAttributeAndValue("id", this.id)
                }
            }, {
                key: "root",
                get: function() {
                    return this.el
                }
            }]), Component
        }(),
        Connection = function() {
            function Connection(driver) {
                var _this = this;
                _classCallCheck(this, Connection), this.driver = driver, this.driver.onMessage = function(payload) {
                    _this.onMessage(payload)
                }, this.driver.onError = function(payload, status) {
                    return _this.onError(payload, status)
                }, this.driver.init()
            }
            return _createClass(Connection, [{
                key: "onMessage",
                value: function(payload) {
                    if (payload.fromPrefetch) store$2.findComponent(payload.id).receivePrefetchMessage(payload);
                    else {
                        var component = store$2.findComponent(payload.id);
                        if (!component) return void console.warn("Livewire: Component [".concat(payload.name, "] triggered an update, but not found on page."));
                        component.receiveMessage(payload), dispatch("livewire:update")
                    }
                }
            }, {
                key: "onError",
                value: function(payloadThatFailedSending, status) {
                    return store$2.findComponent(payloadThatFailedSending.id).messageSendFailed(), store$2.onErrorCallback(status)
                }
            }, {
                key: "sendMessage",
                value: function(message) {
                    this.driver.sendMessage(message.payload())
                }
            }]), Connection
        }(),
        http = {
            onError: null,
            onMessage: null,
            init: function() {},
            sendMessage: function(payload) {
                var _this = this;
                fetch("".concat(window.livewire_app_url, "/livewire/message/").concat(payload.name).concat(window.location.search), {
                    method: "POST",
                    body: JSON.stringify(payload),
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "text/html, application/xhtml+xml",
                        "X-CSRF-TOKEN": getCsrfToken(),
                        "X-Socket-ID": this.getSocketId(),
                        "X-Livewire": !0
                    }
                }).then((function(response) {
                    if (response.ok) response.text().then((function(response) {
                        _this.isOutputFromDump(response) ? (_this.onError(payload), _this.showHtmlModal(response)) : _this.onMessage.call(_this, JSON.parse(response))
                    }));
                    else {
                        if (!1 === _this.onError(payload, response.status)) return;
                        if (419 === response.status) {
                            if (store$2.sessionHasExpired) return;
                            store$2.sessionHasExpired = !0, confirm("This page has expired due to inactivity.\nWould you like to refresh the page?") && window.location.reload()
                        } else response.text().then((function(response) {
                            _this.showHtmlModal(response)
                        }))
                    }
                })).catch((function() {
                    _this.onError(payload)
                }))
            },
            isOutputFromDump: function(output) {
                return !!output.match(/<script>Sfdump\(".+"\)<\/script>/)
            },
            getSocketId: function() {
                if ("undefined" != typeof Echo) return Echo.socketId()
            },
            showHtmlModal: function(html) {
                var _this2 = this,
                    page = document.createElement("html");
                page.innerHTML = html, page.querySelectorAll("a").forEach((function(a) {
                    return a.setAttribute("target", "_top")
                }));
                var modal = document.getElementById("burst-error");
                void 0 !== modal && null != modal ? modal.innerHTML = "" : ((modal = document.createElement("div")).id = "burst-error", modal.style.position = "fixed", modal.style.width = "100vw", modal.style.height = "100vh", modal.style.padding = "50px", modal.style.backgroundColor = "rgba(0, 0, 0, .6)", modal.style.zIndex = 2e5);
                var iframe = document.createElement("iframe");
                iframe.style.backgroundColor = "#17161A", iframe.style.borderRadius = "5px", iframe.style.width = "100%", iframe.style.height = "100%", modal.appendChild(iframe), document.body.prepend(modal), document.body.style.overflow = "hidden", iframe.contentWindow.document.open(), iframe.contentWindow.document.write(page.outerHTML), iframe.contentWindow.document.close(), modal.addEventListener("click", (function() {
                    return _this2.hideHtmlModal(modal)
                })), modal.setAttribute("tabindex", 0), modal.addEventListener("keydown", (function(e) {
                    "Escape" === e.key && _this2.hideHtmlModal(modal)
                })), modal.focus()
            },
            hideHtmlModal: function(modal) {
                modal.outerHTML = "", document.body.style.overflow = "visible"
            }
        },
        drivers = {
            http: http
        };

    function FileUploads() {
        store$2.registerHook("interceptWireModelAttachListener", (function(el, directive, component) {
            if ("input" === el.rawNode().tagName.toLowerCase() && "file" === el.rawNode().type) {
                var finish = function() {
                        return el.rawNode().dispatchEvent(new CustomEvent("livewire-upload-finish", {
                            bubbles: !0
                        }))
                    },
                    error = function() {
                        return el.rawNode().dispatchEvent(new CustomEvent("livewire-upload-error", {
                            bubbles: !0
                        }))
                    },
                    progress = function(progressEvent) {
                        var percentCompleted = Math.round(100 * progressEvent.loaded / progressEvent.total);
                        el.rawNode().dispatchEvent(new CustomEvent("livewire-upload-progress", {
                            bubbles: !0,
                            detail: {
                                progress: percentCompleted
                            }
                        }))
                    },
                    eventHandler = function(e) {
                        0 !== e.target.files.length && (el.rawNode().dispatchEvent(new CustomEvent("livewire-upload-start", {
                            bubbles: !0
                        })), e.target.multiple ? component.uploadMultiple(directive.value, e.target.files, finish, error, progress) : component.upload(directive.value, e.target.files[0], finish, error, progress))
                    };
                el.addEventListener("change", eventHandler), component.addListenerForTeardown((function() {
                    el.removeEventListener("change", eventHandler)
                }))
            }
        }))
    }

    function DisableForms() {
        var cleanupStackByComponentId = {};
        store$2.registerHook("elementInitialized", (function(el, component) {
            el.directives.missing("submit") || el.el.addEventListener("submit", (function() {
                cleanupStackByComponentId[component.id] = [], component.walk((function(elem) {
                    var node = elem.el;
                    if (el.el.contains(node)) return !elem.hasAttribute("ignore") && void("button" === node.tagName.toLowerCase() && "submit" === node.type || "select" === node.tagName.toLowerCase() || "input" === node.tagName.toLowerCase() && ("checkbox" === node.type || "radio" === node.type) ? (node.disabled || cleanupStackByComponentId[component.id].push((function() {
                        return node.disabled = !1
                    })), node.disabled = !0) : "input" !== node.tagName.toLowerCase() && "textarea" !== node.tagName.toLowerCase() || (node.readOnly || cleanupStackByComponentId[component.id].push((function() {
                        return node.readOnly = !1
                    })), node.readOnly = !0))
                }))
            }))
        })), store$2.registerHook("messageFailed", (function(component, message) {
            if (cleanupStackByComponentId[component.id])
                for (; cleanupStackByComponentId[component.id].length > 0;) cleanupStackByComponentId[component.id].shift()()
        }))
    }

    function DirtyStates() {
        store$2.registerHook("componentInitialized", (function(component) {
            component.targetedDirtyElsByProperty = {}, component.genericDirtyEls = [], registerListener(component)
        })), store$2.registerHook("elementInitialized", (function(el, component) {
            if (!el.directives.missing("dirty")) {
                var propertyNames = el.directives.has("target") && el.directives.get("target").value.split(",").map((function(s) {
                    return s.trim()
                }));
                addDirtyEls(component, el, propertyNames)
            }
        })), store$2.registerHook("elementRemoved", (function(el, component) {
            Object.keys(component.targetedDirtyElsByProperty).forEach((function(key) {
                component.targetedDirtyElsByProperty[key] = component.targetedDirtyElsByProperty[key].filter((function(element) {
                    return !element.isSameNode(el)
                }))
            })), component.genericDirtyEls.forEach((function(element, index) {
                element.isSameNode(el) && component.genericDirtyEls.splice(index, 1)
            }))
        }))
    }

    function addDirtyEls(component, el, targetProperties) {
        targetProperties ? targetProperties.forEach((function(targetProperty) {
            component.targetedDirtyElsByProperty[targetProperty] ? component.targetedDirtyElsByProperty[targetProperty].push(el) : component.targetedDirtyElsByProperty[targetProperty] = [el]
        })) : component.genericDirtyEls.push(el)
    }

    function registerListener(component) {
        component.el.addEventListener("input", (function(e) {
            var el = new DOMElement(e.target),
                allEls = [];
            if (el.directives.has("model") && component.targetedDirtyElsByProperty[el.directives.get("model").value] && allEls.push.apply(allEls, _toConsumableArray(component.targetedDirtyElsByProperty[el.directives.get("model").value])), el.directives.has("dirty") && allEls.push.apply(allEls, _toConsumableArray(component.genericDirtyEls.filter((function(dirtyEl) {
                    return dirtyEl.directives.get("model").value === el.directives.get("model").value
                })))), !(allEls.length < 1)) {
                el.directives.missing("model") && console.warn("`wire:model` must be present on any element that uses `wire:dirty` or is a `wire:dirty` target.");
                var isDirty = el.valueFromInput(component) != component.data[el.directives.get("model").value];
                allEls.forEach((function(el) {
                    setDirtyState(el, isDirty)
                }))
            }
        }))
    }

    function setDirtyState(el, isDirty) {
        var directive = el.directives.get("dirty");
        if (directive.modifiers.includes("class")) {
            var _el$classList, _el$classList2, classes = directive.value.split(" ");
            if (directive.modifiers.includes("remove") !== isDirty)(_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
            else(_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classes))
        } else directive.modifiers.includes("attr") ? directive.modifiers.includes("remove") !== isDirty ? el.setAttribute(directive.value, !0) : el.removeAttrsibute(directive.value) : el.directives.get("model") || (el.el.style.display = isDirty ? "inline-block" : "none")
    }
    var offlineEls = [];

    function OfflineStates() {
        store$2.registerHook("elementInitialized", (function(el) {
            el.directives.missing("offline") || offlineEls.push(el)
        })), window.addEventListener("offline", (function() {
            store$2.livewireIsOffline = !0, offlineEls.forEach((function(el) {
                toggleOffline(el, !0)
            }))
        })), window.addEventListener("online", (function() {
            store$2.livewireIsOffline = !1, offlineEls.forEach((function(el) {
                toggleOffline(el, !1)
            }))
        })), store$2.registerHook("elementRemoved", (function(el) {
            offlineEls = offlineEls.filter((function(el) {
                return !el.isSameNode(el)
            }))
        }))
    }

    function toggleOffline(el, isOffline) {
        var directive = el.directives.get("offline");
        if (directive.modifiers.includes("class")) {
            var _el$rawNode$classList, _el$rawNode$classList2, classes = directive.value.split(" ");
            if (directive.modifiers.includes("remove") !== isOffline)(_el$rawNode$classList = el.rawNode().classList).add.apply(_el$rawNode$classList, _toConsumableArray(classes));
            else(_el$rawNode$classList2 = el.rawNode().classList).remove.apply(_el$rawNode$classList2, _toConsumableArray(classes))
        } else directive.modifiers.includes("attr") ? directive.modifiers.includes("remove") !== isOffline ? el.rawNode().setAttribute(directive.value, !0) : el.rawNode().removeAttribute(directive.value) : el.directives.get("model") || (el.rawNode().style.display = isOffline ? "inline-block" : "none")
    }

    function Polling() {
        store$2.registerHook("elementInitialized", (function(el, component) {
            if (!el.directives.missing("poll")) {
                var intervalId = fireActionOnInterval(el.el, component);
                component.addListenerForTeardown((function() {
                    clearInterval(intervalId)
                })), el.el.__livewire_polling_interval = intervalId
            }
        })), store$2.registerHook("beforeElementUpdate", (function(from, to, component) {
            if (void 0 === from.__livewire_polling_interval) {
                var fromEl = new DOMElement(from),
                    toEl = new DOMElement(to);
                fromEl.directives.missing("poll") && toEl.directives.has("poll") && setTimeout((function() {
                    var intervalId = fireActionOnInterval(fromEl.el, component);
                    component.addListenerForTeardown((function() {
                        clearInterval(intervalId)
                    })), from.__livewire_polling_interval = intervalId
                }), 0)
            }
        }))
    }

    function fireActionOnInterval(node, component) {
        var interval = new DOMElement(node).directives.get("poll").durationOr(2e3);
        return setInterval((function() {
            if (!1 !== node.isConnected) {
                var el = new DOMElement(node);
                if (!el.directives.missing("poll")) {
                    var directive = el.directives.get("poll"),
                        method = directive.method || "$refresh";
                    store$2.livewireIsInBackground && Math.random() < .95 || store$2.livewireIsOffline || component.addAction(new _default$7(method, directive.params, el))
                }
            }
        }), interval)
    }
    var _Object$prototype = Object.prototype,
        toString$1 = _Object$prototype.toString,
        hasOwnProperty$1 = _Object$prototype.hasOwnProperty,
        OBJECT_TYPE = "[object Object]",
        ARRAY_TYPE = "[object Array]",
        queryString = {
            join: function(path, key) {
                return null != path ? path + "[" + key + "]" : key
            },
            flatten: function(obj, path, result) {
                var type = toString$1.call(obj);
                if (void 0 === result)
                    if (type === OBJECT_TYPE) result = {};
                    else {
                        if (type !== ARRAY_TYPE) return;
                        result = []
                    }
                for (var key in obj)
                    if (hasOwnProperty$1.call(obj, key)) {
                        var val = obj[key];
                        if (null != val) switch (toString$1.call(val)) {
                            case ARRAY_TYPE:
                            case OBJECT_TYPE:
                                this.flatten(val, this.join(path, key), result);
                                break;
                            default:
                                result[this.join(path, key)] = val
                        }
                    }
                return result
            },
            stringify: function(obj) {
                var parts = this.flatten(obj);
                return Object.keys(parts).map((function(key) {
                    return "".concat(key, "=").concat(parts[key])
                })).join("&")
            },
            parse: function(query) {
                var obj = {};
                return "?" === query.slice(0, 1) && (query = query.slice(1)), (query = query.split("&")).map((function(part) {
                    var parts = part.split("="),
                        key = parts[0],
                        value = parts[1];
                    if ((parts = (parts = key.split("[")).map((function(part) {
                            return part.replace("]", "")
                        }))).length > 1) {
                        var endValue = value;
                        value = {}, parts.forEach((function(part, index) {
                            index > 1 && (parts.length == index + 1 ? value[part] = endValue : value[part] = {})
                        }))
                    }
                    obj[parts[0]] = value
                })), obj
            }
        };

    function UpdateQueryString() {
        store$2.registerHook("responseReceived", (function(component, response) {
            if (void 0 !== response.updatesQueryString) {
                var excepts = [],
                    dataDestinedForQueryString = {};
                Array.isArray(response.updatesQueryString) ? response.updatesQueryString.forEach((function(i) {
                    return dataDestinedForQueryString[i] = component.data[i]
                })) : Object.keys(response.updatesQueryString).forEach((function(key) {
                    if (isNaN(key)) dataDestinedForQueryString[key] = component.data[key], void 0 !== response.updatesQueryString[key].except && excepts.push({
                        key: key,
                        value: response.updatesQueryString[key].except
                    });
                    else {
                        var dataKey = response.updatesQueryString[key];
                        dataDestinedForQueryString[dataKey] = component.data[dataKey]
                    }
                }));
                var queryData = _objectSpread2(_objectSpread2({}, queryString.parse(window.location.search)), dataDestinedForQueryString);
                excepts.forEach((function(_ref) {
                    var key = _ref.key,
                        value = _ref.value;
                    queryData[key] == value && delete queryData[key]
                }));
                var stringifiedQueryString = queryString.stringify(queryData);
                history.replaceState({
                    turbolinks: {}
                }, "", [window.location.pathname, stringifiedQueryString].filter(Boolean).join("?") + window.location.hash)
            }
        }))
    }
    var Livewire = function() {
        function Livewire() {
            var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, Livewire);
            var defaults = {
                    driver: "http"
                },
                driver = "object" === _typeof((options = Object.assign({}, defaults, options)).driver) ? options.driver : drivers[options.driver];
            this.connection = new Connection(driver), this.components = store$2, this.onLoadCallback = function() {}
        }
        return _createClass(Livewire, [{
            key: "find",
            value: function(componentId) {
                return this.components.componentsById[componentId]
            }
        }, {
            key: "directive",
            value: function(name, callback) {
                this.components.registerDirective(name, callback)
            }
        }, {
            key: "hook",
            value: function(name, callback) {
                this.components.registerHook(name, callback)
            }
        }, {
            key: "onLoad",
            value: function(callback) {
                this.onLoadCallback = callback
            }
        }, {
            key: "onError",
            value: function(callback) {
                this.components.onErrorCallback = callback
            }
        }, {
            key: "emit",
            value: function(event) {
                for (var _this$components, _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
                (_this$components = this.components).emit.apply(_this$components, [event].concat(params))
            }
        }, {
            key: "emitTo",
            value: function(name, event) {
                for (var _this$components2, _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) params[_key2 - 2] = arguments[_key2];
                (_this$components2 = this.components).emitTo.apply(_this$components2, [name, event].concat(params))
            }
        }, {
            key: "on",
            value: function(event, callback) {
                this.components.on(event, callback)
            }
        }, {
            key: "restart",
            value: function() {
                this.stop(), this.start()
            }
        }, {
            key: "stop",
            value: function() {
                this.components.tearDownComponents()
            }
        }, {
            key: "start",
            value: function() {
                var _this = this;
                DOM.rootComponentElementsWithNoParents().forEach((function(el) {
                    _this.components.addComponent(new Component(el, _this.connection))
                })), this.onLoadCallback(), dispatch("livewire:load"), document.addEventListener("visibilitychange", (function() {
                    _this.components.livewireIsInBackground = document.hidden
                }), !1), this.components.initialRenderIsFinished = !0
            }
        }, {
            key: "rescan",
            value: function() {
                var _this2 = this;
                DOM.rootComponentElementsWithNoParents().forEach((function(el) {
                    var componentId = el.getAttribute("id");
                    _this2.components.hasComponent(componentId) || _this2.components.addComponent(new Component(el, _this2.connection))
                }))
            }
        }, {
            key: "plugin",
            value: function(callable) {
                callable(this)
            }
        }]), Livewire
    }();
    return window.Livewire || (window.Livewire = Livewire), UpdateQueryString(), OfflineStates(), LoadingStates(), DisableForms(), FileUploads(), DirtyStates(), Polling(), dispatch("livewire:available"), Livewire
}));
//# sourceMappingURL=livewire.js.map