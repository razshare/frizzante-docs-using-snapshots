const module={exports:{}};
		const globalThis={crypto:{subtle:{digest:hash_256_627f0c8d3f2158f776f550ab47b35de9}}};
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// .gen/empty.ts
var empty_exports = {};
__export(empty_exports, {
  default: () => empty_default
});
var empty_default;
var init_empty = __esm({
  ".gen/empty.ts"() {
    empty_default = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  render: () => render
});
module.exports = __toCommonJS(stdin_exports);

// app/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// app/node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   * @param {any} [value] - The value that failed to be serialized
   * @param {any} [root] - The root value being serialized
   */
  constructor(message, keys, value, root) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
    this.value = value;
    this.root = root;
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getPrototypeOf(proto) === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key) {
  return is_identifier.test(key) ? "." + key : "[" + JSON.stringify(key) + "]";
}
function is_valid_array_index(s) {
  if (s.length === 0) return false;
  if (s.length > 1 && s.charCodeAt(0) === 48) return false;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c < 48 || c > 57) return false;
  }
  const n = +s;
  if (n >= 2 ** 32 - 1) return false;
  if (n < 0) return false;
  return true;
}
function valid_array_indices(array) {
  const keys = Object.keys(array);
  for (var i = keys.length - 1; i >= 0; i--) {
    if (is_valid_array_index(keys[i])) {
      break;
    }
  }
  keys.length = i + 1;
  return keys;
}

// app/node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing, (value2) => uneval(value2, replacer));
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      if (typeof thing === "function") {
        throw new DevalueError(`Cannot stringify a function`, keys, thing, value);
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key) ? stringify_primitive(key) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          walk(thing.buffer);
          return;
        case "ArrayBuffer":
          return;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys,
              thing,
              value
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys,
              thing,
              value
            );
          }
          for (const key of Object.keys(thing)) {
            if (key === "__proto__") {
              throw new DevalueError(
                `Cannot stringify objects with __proto__ keys`,
                keys,
                thing,
                value
              );
            }
            keys.push(stringify_key(key));
            walk(thing[key]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(thing.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(thing.toString())})`;
      case "Array": {
        let has_holes = false;
        let result = "[";
        for (let i = 0; i < thing.length; i += 1) {
          if (i > 0) result += ",";
          if (Object.hasOwn(thing, i)) {
            result += stringify2(thing[i]);
          } else if (!has_holes) {
            const populated_keys = valid_array_indices(
              /** @type {any[]} */
              thing
            );
            const population = populated_keys.length;
            const d = String(thing.length).length;
            const hole_cost = thing.length + 2;
            const sparse_cost = 25 + d + population * (d + 2);
            if (hole_cost > sparse_cost) {
              const entries = populated_keys.map((k) => `${k}:${stringify2(thing[k])}`).join(",");
              return `Object.assign(Array(${thing.length}),{${entries}})`;
            }
            has_holes = true;
            i -= 1;
          }
        }
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return result + tail + "]";
      }
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        let str2 = `new ${type}`;
        if (counts.get(thing.buffer) === 1) {
          const array = new thing.constructor(thing.buffer);
          str2 += `([${array}])`;
        } else {
          str2 += `([${stringify2(thing.buffer)}])`;
        }
        const a = thing.byteOffset;
        const b = a + thing.byteLength;
        if (a > 0 || b !== thing.buffer.byteLength) {
          const m = +/(\d+)/.exec(type)[1] / 8;
          str2 += `.subarray(${a / m},${b / m})`;
        }
        return str2;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${type}.from(${stringify_string(thing.toString())})`;
      default:
        const keys2 = Object.keys(thing);
        const obj = keys2.map((key) => `${safe_key(key)}:${stringify2(thing[key])}`).join(",");
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return keys2.length > 0 ? `{${obj},__proto__:null}` : `{__proto__:null}`;
        }
        return `{${obj}}`;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        case "ArrayBuffer":
          values.push(
            `new Uint8Array([${new Uint8Array(thing).join(",")}]).buffer`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key) => {
            statements.push(
              `${name}${safe_prop(key)}=${stringify2(thing[key])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escape_unsafe_chars(JSON.stringify(key));
}
function safe_prop(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escape_unsafe_chars(JSON.stringify(key))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}

// app/node_modules/@mdi/js/mdi.js
var mdiAlertRhombusOutline = "M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12M11 7V13H13V7M11 15V17H13V15Z";
var mdiApplication = "M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 7H3V4H21V7Z";
var mdiArrowLeft = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
var mdiArrowRight = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
var mdiCloudRefresh = "M12 18.5C12 19 12.07 19.5 12.18 20H6.5C5 20 3.69 19.5 2.61 18.43C1.54 17.38 1 16.09 1 14.58C1 13.28 1.39 12.12 2.17 11.1S4 9.43 5.25 9.15C5.67 7.62 6.5 6.38 7.75 5.43S10.42 4 12 4C13.95 4 15.6 4.68 16.96 6.04C18.32 7.4 19 9.05 19 11C20.15 11.13 21.1 11.63 21.86 12.5C22.1 12.76 22.29 13.05 22.46 13.36C21.36 12.5 20 12 18.5 12C14.91 12 12 14.91 12 18.5M18 14.5C15.79 14.5 14 16.29 14 18.5S15.79 22.5 18 22.5C19.68 22.5 21.12 21.47 21.71 20H20C19.54 20.61 18.82 21 18 21C16.62 21 15.5 19.88 15.5 18.5S16.62 16 18 16C18.69 16 19.32 16.28 19.77 16.73L18 18.5H22V14.5L20.83 15.67C20.11 14.95 19.11 14.5 18 14.5Z";
var mdiCodeBraces = "M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";
var mdiFile = "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z";
var mdiFolder = "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z";
var mdiFunction = "M15.6,5.29C14.5,5.19 13.53,6 13.43,7.11L13.18,10H16V12H13L12.56,17.07C12.37,19.27 10.43,20.9 8.23,20.7C6.92,20.59 5.82,19.86 5.17,18.83L6.67,17.33C6.91,18.07 7.57,18.64 8.4,18.71C9.5,18.81 10.47,18 10.57,16.89L11,12H8V10H11.17L11.44,6.93C11.63,4.73 13.57,3.1 15.77,3.3C17.08,3.41 18.18,4.14 18.83,5.17L17.33,6.67C17.09,5.93 16.43,5.36 15.6,5.29Z";
var mdiGithub = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z";
var mdiInformationOutline = "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";
var mdiLightbulbGroupOutline = "M7 19A2.93 2.93 0 0 0 7.17 20H6A1 1 0 0 1 5 19V18H7M10 19A1 1 0 0 0 11 20H13A1 1 0 0 0 14 19V18H10M4 16A1 1 0 0 0 5 17H7V14.88A6.92 6.92 0 0 1 5 10A6.79 6.79 0 0 1 5.68 7A4 4 0 0 0 4 14.45M17 19A2.93 2.93 0 0 1 16.83 20H18A1 1 0 0 0 19 19V18H17M17 10A5 5 0 0 1 15 14V16A1 1 0 0 1 14 17H10A1 1 0 0 1 9 16V14A5 5 0 1 1 17 10M15 10A3 3 0 1 0 11 12.82V15H13V12.82A3 3 0 0 0 15 10M18.32 7A6.79 6.79 0 0 1 19 10A6.92 6.92 0 0 1 17 14.88V17H19A1 1 0 0 0 20 16V14.45A4 4 0 0 0 18.32 7Z";
var mdiPackage = "M5.12,5H18.87L17.93,4H5.93L5.12,5M20.54,5.23C20.83,5.57 21,6 21,6.5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V6.5C3,6 3.17,5.57 3.46,5.23L4.84,3.55C5.12,3.21 5.53,3 6,3H18C18.47,3 18.88,3.21 19.15,3.55L20.54,5.23M6,18H12V15H6V18Z";
var mdiPound = "M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z";
var mdiTextSearch = "M19.31 18.9L22.39 22L21 23.39L17.88 20.32C17.19 20.75 16.37 21 15.5 21C13 21 11 19 11 16.5C11 14 13 12 15.5 12C18 12 20 14 20 16.5C20 17.38 19.75 18.21 19.31 18.9M15.5 19C16.88 19 18 17.88 18 16.5C18 15.12 16.88 14 15.5 14C14.12 14 13 15.12 13 16.5C13 17.88 14.12 19 15.5 19M21 4V6H3V4H21M3 16V14H9V16H3M3 11V9H21V11H18.97C17.96 10.37 16.77 10 15.5 10C14.23 10 13.04 10.37 12.03 11H3Z";

// app/node_modules/fuse.js/dist/fuse.mjs
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
var INFINITY = 1 / 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
var hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
var MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
var BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
var FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
var AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};
var SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
var FuseIndex = class {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item2, keyId) {
    return item2[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item2, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item2
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
};
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
var MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location: location2 = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location2, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
var stripDiacritics = String.prototype.normalize ? ((str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((str) => str);
var BitapSearch = class {
  constructor(pattern, {
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location: location2,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location: location2,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location2 + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
};
var BaseMatch = class {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
};
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
var ExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InverseExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var PrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InversePrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var SuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
};
var InverseSuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var FuzzyMatch = class extends BaseMatch {
  constructor(pattern, {
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location: location2,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
};
var IncludeMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location2 = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location2)) > -1) {
      location2 = index + patternLen;
      indices.push([index, location2 - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
};
var searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
var searchersLen = searchers.length;
var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
var OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item2) => {
    let query = item2.trim().split(SPACE_RE).filter((item3) => item3 && !!item3.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
var ExtendedSearch = class {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location: location2,
      threshold,
      distance
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const { isMatch, indices, score } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
};
var registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
var LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
var KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
var isPath = (query) => !!query[KeyType.PATH];
var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
var convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item2) => {
          node.children.push(next(item2));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
var Fuse = class {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };
    if (this.options.useExtendedSearch && false) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text, i: idx, n: norm2 }) => {
      if (!isDefined(text)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item2, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item2, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [
            {
              idx,
              item: item2,
              matches
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item2, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item2, i: idx }) => {
      if (isDefined(item2)) {
        let expResults = evaluate(expression, item2, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item: item2, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item2, i: idx }) => {
      if (!isDefined(item2)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item2[keyIndex],
            searcher
          })
        );
      });
      if (matches.length) {
        results.push({
          idx,
          item: item2,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({ score, key, value: text, norm: norm2, indices });
      }
    }
    return matches;
  }
};
Fuse.version = "7.1.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}

// <stdin>
var HYDRATION_START = "[";
var HYDRATION_START_FAILED = "[?";
var HYDRATION_END = "]";
var ELEMENT_IS_NAMESPACED = 1;
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var ELEMENT_IS_INPUT = 1 << 2;
var UNINITIALIZED = Symbol();
var ATTR_REGEX = /[&"<]/g;
var CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
var has_own_property = Object.prototype.hasOwnProperty;
var noop = () => {
};
var replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (name === "hidden" && value !== "until-found") {
    is_boolean = true;
  }
  if (value == null || !value && is_boolean) return "";
  const normalized = has_own_property.call(replacements, name) && replacements[name].get(value) || value;
  const assignment = is_boolean ? `=""` : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash) {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key of Object.keys(directives)) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function append_styles(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key of Object.keys(styles)) {
    var value = styles[key];
    if (value != null && value !== "") {
      css += " " + key + ": " + value + separator;
    }
  }
  return css;
}
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i = 0; i < len; i++) {
        var c = value[i];
        if (in_comment) {
          if (c === "/" && value[i - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c) {
            in_str = false;
          }
        } else if (c === "/" && value[i + 1] === "*") {
          in_comment = true;
        } else if (c === '"' || c === "'") {
          in_str = c;
        } else if (c === "(") {
          in_apo++;
        } else if (c === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c === ":" && name_index === -1) {
            name_index = i;
          } else if (c === ";" || i === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c !== ";") {
                  i++;
                }
                var property = value.substring(start_index, i).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}
var STALE_REACTION = new class StaleReactionError extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
var BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
var BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
var EMPTY_COMMENT = `<!---->`;
var DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
function is_boolean_attribute(name) {
  return DOM_BOOLEAN_ATTRIBUTES.includes(name);
}
var controller = null;
function abort() {
  controller?.abort(STALE_REACTION);
  controller = null;
}
function await_invalid() {
  const error = new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);
  error.name = "Svelte error";
  throw error;
}
function invalid_csp() {
  const error = new Error(`invalid_csp
\`csp.nonce\` was set while \`csp.hash\` was \`true\`. These options cannot be used simultaneously.
https://svelte.dev/e/invalid_csp`);
  error.name = "Svelte error";
  throw error;
}
function server_context_required() {
  const error = new Error(`server_context_required
Could not resolve \`render\` context.
https://svelte.dev/e/server_context_required`);
  error.name = "Svelte error";
  throw error;
}
var ssr_context = null;
function set_ssr_context(v) {
  ssr_context = v;
}
function getContext(key) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  get_or_init_context_map().set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (ssr_context === null) {
    lifecycle_outside_component();
  }
  return ssr_context.c ??= new Map(get_parent_context(ssr_context) || void 0);
}
function push(fn) {
  ssr_context = { p: ssr_context, c: null, r: null };
}
function pop() {
  ssr_context = /** @type {SSRContext} */
  ssr_context.p;
}
function get_parent_context(ssr_context2) {
  let parent = ssr_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function unresolved_hydratable(key, stack) {
  {
    console.warn(`https://svelte.dev/e/unresolved_hydratable`);
  }
}
function get_render_context() {
  const store = als?.getStore();
  {
    server_context_required();
  }
  return store;
}
var als = null;
var text_encoder;
var crypto;
async function sha256(data) {
  text_encoder ??= new TextEncoder();
  crypto ??= globalThis.crypto?.subtle?.digest ? globalThis.crypto : (
    // @ts-ignore - we don't install node types in the prod build
    // don't use import('node:crypto') directly because static analysers will think we rely on node when we don't
    (await Promise.resolve().then(() => (init_empty(), empty_exports))).webcrypto
  );
  const hash_buffer = await crypto.subtle.digest("SHA-256", text_encoder.encode(data));
  return base64_encode(hash_buffer);
}
function base64_encode(bytes) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(bytes).toString("base64");
  }
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
var Renderer = class _Renderer {
  /**
   * The contents of the renderer.
   * @type {RendererItem[]}
   */
  #out = [];
  /**
   * Any `onDestroy` callbacks registered during execution of this renderer.
   * @type {(() => void)[] | undefined}
   */
  #on_destroy = void 0;
  /**
   * Whether this renderer is a component body.
   * @type {boolean}
   */
  #is_component_body = false;
  /**
   * If set, this renderer is an error boundary. When async collection
   * of the children fails, the failed snippet is rendered instead.
   * @type {{
   * 	failed: (renderer: Renderer, error: unknown, reset: () => void) => void;
   * 	transformError: (error: unknown) => unknown;
   * 	context: SSRContext | null;
   * } | null}
   */
  #boundary = null;
  /**
   * The type of string content that this renderer is accumulating.
   * @type {RendererType}
   */
  type;
  /** @type {Renderer | undefined} */
  #parent;
  /**
   * Asynchronous work associated with this renderer
   * @type {Promise<void> | undefined}
   */
  promise = void 0;
  /**
   * State which is associated with the content tree as a whole.
   * It will be re-exposed, uncopied, on all children.
   * @type {SSRState}
   * @readonly
   */
  global;
  /**
   * State that is local to the branch it is declared in.
   * It will be shallow-copied to all children.
   *
   * @type {{ select_value: string | undefined }}
   */
  local;
  /**
   * @param {SSRState} global
   * @param {Renderer | undefined} [parent]
   */
  constructor(global, parent) {
    this.#parent = parent;
    this.global = global;
    this.local = parent ? { ...parent.local } : { select_value: void 0 };
    this.type = parent ? parent.type : "body";
  }
  /**
   * @param {(renderer: Renderer) => void} fn
   */
  head(fn) {
    const head2 = new _Renderer(this.global, this);
    head2.type = "head";
    this.#out.push(head2);
    head2.child(fn);
  }
  /**
   * @param {Array<Promise<void>>} blockers
   * @param {(renderer: Renderer) => void} fn
   */
  async_block(blockers, fn) {
    this.#out.push(BLOCK_OPEN);
    this.async(blockers, fn);
    this.#out.push(BLOCK_CLOSE);
  }
  /**
   * @param {Array<Promise<void>>} blockers
   * @param {(renderer: Renderer) => void} fn
   */
  async(blockers, fn) {
    let callback = fn;
    if (blockers.length > 0) {
      const context = ssr_context;
      callback = (renderer) => {
        return Promise.all(blockers).then(() => {
          const previous_context = ssr_context;
          try {
            set_ssr_context(context);
            return fn(renderer);
          } finally {
            set_ssr_context(previous_context);
          }
        });
      };
    }
    this.child(callback);
  }
  /**
   * @param {Array<() => void>} thunks
   */
  run(thunks) {
    const context = ssr_context;
    let promise = Promise.resolve(thunks[0]());
    const promises = [promise];
    for (const fn of thunks.slice(1)) {
      promise = promise.then(() => {
        const previous_context = ssr_context;
        set_ssr_context(context);
        try {
          return fn();
        } finally {
          set_ssr_context(previous_context);
        }
      });
      promises.push(promise);
    }
    promise.catch(noop);
    this.promise = promise;
    return promises;
  }
  /**
   * @param {(renderer: Renderer) => MaybePromise<void>} fn
   */
  child_block(fn) {
    this.#out.push(BLOCK_OPEN);
    this.child(fn);
    this.#out.push(BLOCK_CLOSE);
  }
  /**
   * Create a child renderer. The child renderer inherits the state from the parent,
   * but has its own content.
   * @param {(renderer: Renderer) => MaybePromise<void>} fn
   */
  child(fn) {
    const child = new _Renderer(this.global, this);
    this.#out.push(child);
    const parent = ssr_context;
    set_ssr_context({
      ...ssr_context,
      p: parent,
      c: null,
      r: child
    });
    const result = fn(child);
    set_ssr_context(parent);
    if (result instanceof Promise) {
      result.catch(noop);
      result.finally(() => set_ssr_context(null)).catch(noop);
      if (child.global.mode === "sync") {
        await_invalid();
      }
      child.promise = result;
    }
    return child;
  }
  /**
   * Render children inside an error boundary. If the children throw and the API-level
   * `transformError` transform handles the error (doesn't re-throw), the `failed` snippet is
   * rendered instead. Otherwise the error propagates.
   *
   * @param {{ failed?: (renderer: Renderer, error: unknown, reset: () => void) => void }} props
   * @param {(renderer: Renderer) => MaybePromise<void>} children_fn
   */
  boundary(props, children_fn) {
    const child = new _Renderer(this.global, this);
    this.#out.push(child);
    const parent_context = ssr_context;
    if (props.failed) {
      child.#boundary = {
        failed: props.failed,
        transformError: this.global.transformError,
        context: parent_context
      };
    }
    set_ssr_context({
      ...ssr_context,
      p: parent_context,
      c: null,
      r: child
    });
    try {
      const result = children_fn(child);
      set_ssr_context(parent_context);
      if (result instanceof Promise) {
        if (child.global.mode === "sync") {
          await_invalid();
        }
        result.catch(noop);
        child.promise = result;
      }
    } catch (error) {
      set_ssr_context(parent_context);
      const failed_snippet = props.failed;
      if (!failed_snippet) throw error;
      const result = this.global.transformError(error);
      child.#out.length = 0;
      child.#boundary = null;
      if (result instanceof Promise) {
        if (this.global.mode === "sync") {
          await_invalid();
        }
        child.promise = /** @type {Promise<unknown>} */
        result.then((transformed) => {
          set_ssr_context(parent_context);
          child.#out.push(_Renderer.#serialize_failed_boundary(transformed));
          failed_snippet(child, transformed, noop);
          child.#out.push(BLOCK_CLOSE);
        });
        child.promise.catch(noop);
      } else {
        child.#out.push(_Renderer.#serialize_failed_boundary(result));
        failed_snippet(child, result, noop);
        child.#out.push(BLOCK_CLOSE);
      }
    }
  }
  /**
   * Create a component renderer. The component renderer inherits the state from the parent,
   * but has its own content. It is treated as an ordering boundary for ondestroy callbacks.
   * @param {(renderer: Renderer) => MaybePromise<void>} fn
   * @param {Function} [component_fn]
   * @returns {void}
   */
  component(fn, component_fn) {
    push();
    const child = this.child(fn);
    child.#is_component_body = true;
    pop();
  }
  /**
   * @param {Record<string, any>} attrs
   * @param {(renderer: Renderer) => void} fn
   * @param {string | undefined} [css_hash]
   * @param {Record<string, boolean> | undefined} [classes]
   * @param {Record<string, string> | undefined} [styles]
   * @param {number | undefined} [flags]
   * @param {boolean | undefined} [is_rich]
   * @returns {void}
   */
  select(attrs, fn, css_hash, classes, styles, flags, is_rich) {
    const { value, ...select_attrs } = attrs;
    this.push(`<select${attributes(select_attrs, css_hash, classes, styles, flags)}>`);
    this.child((renderer) => {
      renderer.local.select_value = value;
      fn(renderer);
    });
    this.push(`${is_rich ? "<!>" : ""}</select>`);
  }
  /**
   * @param {Record<string, any>} attrs
   * @param {string | number | boolean | ((renderer: Renderer) => void)} body
   * @param {string | undefined} [css_hash]
   * @param {Record<string, boolean> | undefined} [classes]
   * @param {Record<string, string> | undefined} [styles]
   * @param {number | undefined} [flags]
   * @param {boolean | undefined} [is_rich]
   */
  option(attrs, body, css_hash, classes, styles, flags, is_rich) {
    this.#out.push(`<option${attributes(attrs, css_hash, classes, styles, flags)}`);
    const close = (renderer, value, { head: head2, body: body2 }) => {
      if (has_own_property.call(attrs, "value")) {
        value = attrs.value;
      }
      if (value === this.local.select_value) {
        renderer.#out.push(' selected=""');
      }
      renderer.#out.push(`>${body2}${is_rich ? "<!>" : ""}</option>`);
      if (head2) {
        renderer.head((child) => child.push(head2));
      }
    };
    if (typeof body === "function") {
      this.child((renderer) => {
        const r2 = new _Renderer(this.global, this);
        body(r2);
        if (this.global.mode === "async") {
          return r2.#collect_content_async().then((content) => {
            close(renderer, content.body.replaceAll("<!---->", ""), content);
          });
        } else {
          const content = r2.#collect_content();
          close(renderer, content.body.replaceAll("<!---->", ""), content);
        }
      });
    } else {
      close(this, body, { body: escape_html(body) });
    }
  }
  /**
   * @param {(renderer: Renderer) => void} fn
   */
  title(fn) {
    const path = this.get_path();
    const close = (head2) => {
      this.global.set_title(head2, path);
    };
    this.child((renderer) => {
      const r2 = new _Renderer(renderer.global, renderer);
      fn(r2);
      if (renderer.global.mode === "async") {
        return r2.#collect_content_async().then((content) => {
          close(content.head);
        });
      } else {
        const content = r2.#collect_content();
        close(content.head);
      }
    });
  }
  /**
   * @param {string | (() => Promise<string>)} content
   */
  push(content) {
    if (typeof content === "function") {
      this.child(async (renderer) => renderer.push(await content()));
    } else {
      this.#out.push(content);
    }
  }
  /**
   * @param {() => void} fn
   */
  on_destroy(fn) {
    (this.#on_destroy ??= []).push(fn);
  }
  /**
   * @returns {number[]}
   */
  get_path() {
    return this.#parent ? [...this.#parent.get_path(), this.#parent.#out.indexOf(this)] : [];
  }
  /**
   * @deprecated this is needed for legacy component bindings
   */
  copy() {
    const copy = new _Renderer(this.global, this.#parent);
    copy.#out = this.#out.map((item2) => item2 instanceof _Renderer ? item2.copy() : item2);
    copy.promise = this.promise;
    return copy;
  }
  /**
   * @param {Renderer} other
   * @deprecated this is needed for legacy component bindings
   */
  subsume(other) {
    if (this.global.mode !== other.global.mode) {
      throw new Error(
        "invariant: A renderer cannot switch modes. If you're seeing this, there's a compiler bug. File an issue!"
      );
    }
    this.local = other.local;
    this.#out = other.#out.map((item2) => {
      if (item2 instanceof _Renderer) {
        item2.subsume(item2);
      }
      return item2;
    });
    this.promise = other.promise;
    this.type = other.type;
  }
  get length() {
    return this.#out.length;
  }
  /**
   * Creates the hydration comment that marks the start of a failed boundary.
   * The error is JSON-serialized and embedded inside an HTML comment for the client
   * to parse during hydration. The JSON is escaped to prevent `-->` or `<!--` sequences
   * from breaking out of the comment (XSS). Uses unicode escapes which `JSON.parse()`
   * handles transparently.
   * @param {unknown} error
   * @returns {string}
   */
  static #serialize_failed_boundary(error) {
    var json = JSON.stringify(error);
    var escaped2 = json.replace(/>/g, "\\u003e").replace(/</g, "\\u003c");
    return `<!--${HYDRATION_START_FAILED}${escaped2}-->`;
  }
  /**
   * Only available on the server and when compiling with the `server` option.
   * Takes a component and returns an object with `body` and `head` properties on it, which you can use to populate the HTML when server-rendering your app.
   * @template {Record<string, any>} Props
   * @param {Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string; csp?: Csp }} [options]
   * @returns {RenderOutput}
   */
  static render(component, options = {}) {
    let sync;
    const result = (
      /** @type {RenderOutput} */
      {}
    );
    Object.defineProperties(result, {
      html: {
        get: () => {
          return (sync ??= _Renderer.#render(component, options)).body;
        }
      },
      head: {
        get: () => {
          return (sync ??= _Renderer.#render(component, options)).head;
        }
      },
      body: {
        get: () => {
          return (sync ??= _Renderer.#render(component, options)).body;
        }
      },
      hashes: {
        value: {
          script: ""
        }
      },
      then: {
        value: (
          /**
           * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
           *
           * @template TResult1
           * @template [TResult2=never]
           * @param { (value: SyncRenderOutput) => TResult1 } onfulfilled
           * @param { (reason: unknown) => TResult2 } onrejected
           */
          ((onfulfilled, onrejected) => {
            {
              const result2 = sync ??= _Renderer.#render(component, options);
              const user_result = onfulfilled({
                head: result2.head,
                body: result2.body,
                html: result2.body,
                hashes: { script: [] }
              });
              return Promise.resolve(user_result);
            }
          })
        )
      }
    });
    return result;
  }
  /**
   * Collect all of the `onDestroy` callbacks registered during rendering. In an async context, this is only safe to call
   * after awaiting `collect_async`.
   *
   * Child renderers are "porous" and don't affect execution order, but component body renderers
   * create ordering boundaries. Within a renderer, callbacks run in order until hitting a component boundary.
   * @returns {Iterable<() => void>}
   */
  *#collect_on_destroy() {
    for (const component of this.#traverse_components()) {
      yield* component.#collect_ondestroy();
    }
  }
  /**
   * Performs a depth-first search of renderers, yielding the deepest components first, then additional components as we backtrack up the tree.
   * @returns {Iterable<Renderer>}
   */
  *#traverse_components() {
    for (const child of this.#out) {
      if (typeof child !== "string") {
        yield* child.#traverse_components();
      }
    }
    if (this.#is_component_body) {
      yield this;
    }
  }
  /**
   * @returns {Iterable<() => void>}
   */
  *#collect_ondestroy() {
    if (this.#on_destroy) {
      for (const fn of this.#on_destroy) {
        yield fn;
      }
    }
    for (const child of this.#out) {
      if (child instanceof _Renderer && !child.#is_component_body) {
        yield* child.#collect_ondestroy();
      }
    }
  }
  /**
   * Render a component. Throws if any of the children are performing asynchronous work.
   *
   * @template {Record<string, any>} Props
   * @param {Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} options
   * @returns {AccumulatedContent}
   */
  static #render(component, options) {
    var previous_context = ssr_context;
    try {
      const renderer = _Renderer.#open_render("sync", component, options);
      const content = renderer.#collect_content();
      return _Renderer.#close_render(content, renderer);
    } finally {
      abort();
      set_ssr_context(previous_context);
    }
  }
  /**
   * Render a component.
   *
   * @template {Record<string, any>} Props
   * @param {Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string; csp?: Csp }} options
   * @returns {Promise<AccumulatedContent & { hashes: { script: Sha256Source[] } }>}
   */
  static async #render_async(component, options) {
    const previous_context = ssr_context;
    try {
      const renderer = _Renderer.#open_render("async", component, options);
      const content = await renderer.#collect_content_async();
      const hydratables = await renderer.#collect_hydratables();
      if (hydratables !== null) {
        content.head = hydratables + content.head;
      }
      return _Renderer.#close_render(content, renderer);
    } finally {
      set_ssr_context(previous_context);
      abort();
    }
  }
  /**
   * Collect all of the code from the `out` array and return it as a string, or a promise resolving to a string.
   * @param {AccumulatedContent} content
   * @returns {AccumulatedContent}
   */
  #collect_content(content = { head: "", body: "" }) {
    for (const item2 of this.#out) {
      if (typeof item2 === "string") {
        content[this.type] += item2;
      } else if (item2 instanceof _Renderer) {
        item2.#collect_content(content);
      }
    }
    return content;
  }
  /**
   * Collect all of the code from the `out` array and return it as a string.
   * @param {AccumulatedContent} content
   * @returns {Promise<AccumulatedContent>}
   */
  async #collect_content_async(content = { head: "", body: "" }) {
    await this.promise;
    for (const item2 of this.#out) {
      if (typeof item2 === "string") {
        content[this.type] += item2;
      } else if (item2 instanceof _Renderer) {
        if (item2.#boundary) {
          const boundary_content = { head: "", body: "" };
          try {
            await item2.#collect_content_async(boundary_content);
            content.head += boundary_content.head;
            content.body += boundary_content.body;
          } catch (error) {
            const { context, failed, transformError } = item2.#boundary;
            set_ssr_context(context);
            let transformed = await transformError(error);
            const failed_renderer = new _Renderer(item2.global, item2);
            failed_renderer.type = item2.type;
            failed_renderer.#out.push(_Renderer.#serialize_failed_boundary(transformed));
            failed(failed_renderer, transformed, noop);
            failed_renderer.#out.push(BLOCK_CLOSE);
            await failed_renderer.#collect_content_async(content);
          }
        } else {
          await item2.#collect_content_async(content);
        }
      }
    }
    return content;
  }
  async #collect_hydratables() {
    const ctx = get_render_context().hydratable;
    for (const [_, key] of ctx.unresolved_promises) {
      unresolved_hydratable(key, ctx.lookup.get(key)?.stack ?? "<missing stack trace>");
    }
    for (const comparison of ctx.comparisons) {
      await comparison;
    }
    return await this.#hydratable_block(ctx);
  }
  /**
   * @template {Record<string, any>} Props
   * @param {'sync' | 'async'} mode
   * @param {import('svelte').Component<Props>} component
   * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string; csp?: Csp; transformError?: (error: unknown) => unknown }} options
   * @returns {Renderer}
   */
  static #open_render(mode, component, options) {
    var previous_context = ssr_context;
    try {
      const renderer = new _Renderer(
        new SSRState(
          mode,
          options.idPrefix ? options.idPrefix + "-" : "",
          options.csp,
          options.transformError
        )
      );
      const context = { p: null, c: options.context ?? null, r: renderer };
      set_ssr_context(context);
      renderer.push(BLOCK_OPEN);
      component(renderer, options.props ?? {});
      renderer.push(BLOCK_CLOSE);
      return renderer;
    } finally {
      set_ssr_context(previous_context);
    }
  }
  /**
   * @param {AccumulatedContent} content
   * @param {Renderer} renderer
   * @returns {AccumulatedContent & { hashes: { script: Sha256Source[] } }}
   */
  static #close_render(content, renderer) {
    for (const cleanup of renderer.#collect_on_destroy()) {
      cleanup();
    }
    let head2 = content.head + renderer.global.get_title();
    let body = content.body;
    for (const { hash, code } of renderer.global.css) {
      head2 += `<style id="${hash}">${code}</style>`;
    }
    return {
      head: head2,
      body,
      hashes: {
        script: renderer.global.csp.script_hashes
      }
    };
  }
  /**
   * @param {HydratableContext} ctx
   */
  async #hydratable_block(ctx) {
    if (ctx.lookup.size === 0) {
      return null;
    }
    let entries = [];
    let has_promises = false;
    for (const [k, v] of ctx.lookup) {
      if (v.promises) {
        has_promises = true;
        for (const p of v.promises) await p;
      }
      entries.push(`[${uneval(k)},${v.serialized}]`);
    }
    let prelude = `const h = (window.__svelte ??= {}).h ??= new Map();`;
    if (has_promises) {
      prelude = `const r = (v) => Promise.resolve(v);
				${prelude}`;
    }
    const body = `
			{
				${prelude}

				for (const [k, v] of [
					${entries.join(",\n					")}
				]) {
					h.set(k, v);
				}
			}
		`;
    let csp_attr = "";
    if (this.global.csp.nonce) {
      csp_attr = ` nonce="${this.global.csp.nonce}"`;
    } else if (this.global.csp.hash) {
      const hash = await sha256(body);
      this.global.csp.script_hashes.push(`sha256-${hash}`);
    }
    return `
		<script${csp_attr}>${body}<\/script>`;
  }
};
var SSRState = class {
  /** @readonly @type {Csp & { script_hashes: Sha256Source[] }} */
  csp;
  /** @readonly @type {'sync' | 'async'} */
  mode;
  /** @readonly @type {() => string} */
  uid;
  /** @readonly @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  /**
   * `transformError` passed to `render`. Called when an error boundary catches an error.
   * Throws by default if unset in `render`.
   * @type {(error: unknown) => unknown}
   */
  transformError;
  /** @type {{ path: number[], value: string }} */
  #title = { path: [], value: "" };
  /**
   * @param {'sync' | 'async'} mode
   * @param {string} id_prefix
   * @param {Csp} csp
   * @param {((error: unknown) => unknown) | undefined} [transformError]
   */
  constructor(mode, id_prefix = "", csp = { hash: false }, transformError) {
    this.mode = mode;
    this.csp = { ...csp, script_hashes: [] };
    this.transformError = transformError ?? ((error) => {
      throw error;
    });
    let uid = 1;
    this.uid = () => `${id_prefix}s${uid++}`;
  }
  get_title() {
    return this.#title.value;
  }
  /**
   * Performs a depth-first (lexicographic) comparison using the path. Rejects sets
   * from earlier than or equal to the current value.
   * @param {string} value
   * @param {number[]} path
   */
  set_title(value, path) {
    const current = this.#title.path;
    let i = 0;
    let l = Math.min(path.length, current.length);
    while (i < l && path[i] === current[i]) i += 1;
    if (path[i] === void 0) return;
    if (current[i] === void 0 || path[i] > current[i]) {
      this.#title.path = path;
      this.#title.value = value;
    }
  }
};
var INVALID_ATTR_NAME_CHAR_REGEX = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function render$1(component, options = {}) {
  if (options.csp?.hash && options.csp.nonce) {
    invalid_csp();
  }
  return Renderer.render(
    /** @type {Component<Props>} */
    component,
    options
  );
}
function head(hash, renderer, fn) {
  renderer.head((renderer2) => {
    renderer2.push(`<!--${hash}-->`);
    renderer2.child(fn);
    renderer2.push(EMPTY_COMMENT);
  });
}
function attributes(attrs, css_hash, classes, styles, flags = 0) {
  if (styles) {
    attrs.style = to_style(attrs.style, styles);
  }
  if (attrs.class) {
    attrs.class = clsx2(attrs.class);
  }
  if (css_hash || classes) {
    attrs.class = to_class(attrs.class, css_hash, classes);
  }
  let attr_str = "";
  let name;
  const is_html = (flags & ELEMENT_IS_NAMESPACED) === 0;
  const lowercase = (flags & ELEMENT_PRESERVE_ATTRIBUTE_CASE) === 0;
  const is_input = (flags & ELEMENT_IS_INPUT) !== 0;
  for (name of Object.keys(attrs)) {
    if (typeof attrs[name] === "function") continue;
    if (name[0] === "$" && name[1] === "$") continue;
    if (INVALID_ATTR_NAME_CHAR_REGEX.test(name)) continue;
    var value = attrs[name];
    var lower = name.toLowerCase();
    if (lowercase) name = lower;
    if (lower.length > 2 && lower.startsWith("on")) continue;
    if (is_input) {
      if (name === "defaultvalue" || name === "defaultchecked") {
        name = name === "defaultvalue" ? "value" : "checked";
        if (attrs[name]) continue;
      }
    }
    attr_str += attr(name, value, is_html && is_boolean_attribute(name));
  }
  return attr_str;
}
function spread_props(props) {
  const merged_props = {};
  let key;
  for (let i = 0; i < props.length; i++) {
    const obj = props[i];
    if (obj == null) continue;
    for (key of Object.keys(obj)) {
      const desc = Object.getOwnPropertyDescriptor(obj, key);
      if (desc) {
        Object.defineProperty(merged_props, key, desc);
      } else {
        merged_props[key] = obj[key];
      }
    }
  }
  return merged_props;
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash, directives) {
  var result = to_class(value, hash, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function attr_style(value, directives) {
  var result = to_style(value, directives);
  return result ? ` style="${escape_html(result, true)}"` : "";
}
function bind_props(props_parent, props_now) {
  for (const key of Object.keys(props_now)) {
    const initial_value = props_parent[key];
    const value = props_now[key];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key)?.set) {
      props_parent[key] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
function once(get_value) {
  let value = (
    /** @type {V} */
    UNINITIALIZED
  );
  return () => {
    if (value === UNINITIALIZED) {
      value = get_value();
    }
    return value;
  };
}
function derived(fn) {
  const get_value = ssr_context === null ? fn : once(fn);
  let updated_value;
  return function(new_value) {
    if (arguments.length === 0) {
      return updated_value ?? get_value();
    }
    updated_value = new_value;
    return updated_value;
  };
}
var $$css$n = {
  hash: "svelte-1g9256p",
  code: "svg.svelte-1g9256p {--size: 1rem;width:var(--size);height:var(--size);}"
};
function Icon($$renderer, $$props) {
  $$renderer.global.css.add($$css$n);
  let { path, size = "1rem", fill = "currentColor", stroke = "none" } = $$props;
  $$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg"${attr_style(`--size:${stringify(size)}`)} viewBox="0 0 24 24"${attr("stroke", stroke)}${attr("fill", fill)} class="svelte-1g9256p"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"${attr("d", path)}></path></svg>`);
}
var $$css$m = {
  hash: "svelte-d4anki",
  code: ':root {--caution-background: #40200d;--caution-text: #fcc192;--caution-title: #fcc192;--caution-icon: #fcc192;--caution-padding: 0.7rem;--caution-roundness: 1rem;--caution-margin: 0.5rem;}.caution.svelte-d4anki {display:grid;grid-template-columns:auto 1fr;grid-template-areas:"caution-icon caution-title"\n            "caution-empty caution-empty"\n            "caution-content caution-content";background-color:var(--caution-background);color:var(--caution-text);padding:var(--caution-padding);border-radius:var(--caution-roundness);margin-top:var(--caution-margin);margin-bottom:var(--caution-margin);}.caution-icon.svelte-d4anki {grid-area:caution-icon;color:var(--caution-title);}.caution-title.svelte-d4anki {grid-area:caution-title;color:var(--caution-title);padding-left:var(--caution-padding);}.caution-content.svelte-d4anki {grid-area:caution-content;}'
};
function Caution($$renderer, $$props) {
  $$renderer.global.css.add($$css$m);
  let { children } = $$props;
  $$renderer.push(`<div class="caution svelte-d4anki"><div class="caution-icon svelte-d4anki">`);
  Icon($$renderer, { path: mdiAlertRhombusOutline, size: "1.5rem" });
  $$renderer.push(`<!----></div> <div class="caution-title svelte-d4anki">Caution</div> <div class="caution-content svelte-d4anki">`);
  children($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
var $$css$l = {
  hash: "svelte-1ltxu9w",
  code: ":root {--code-background: #121212;--code-text: #cecdc3;--code-margin: 1rem;--code-padding: 1rem;--code-roundness: 1rem;}.code.svelte-1ltxu9w {margin-top:var(--code-margin);margin-bottom:var(--code-margin);overflow:auto;border-radius:var(--code-roundness);background-color:var(--code-background);}.code.svelte-1ltxu9w > .text:where(.svelte-1ltxu9w) {color:var(--code-text);padding:var(--code-padding);z-index:1;}"
};
function Code($$renderer, $$props) {
  $$renderer.global.css.add($$css$l);
  $$renderer.component(($$renderer2) => {
    let { source, lang = "sh" } = $$props;
    function align(text) {
      const lines = [];
      let firstMeaningfulLine = "";
      for (const line of text.split("\n")) {
        const lineIsEmpty = line.trim() === "";
        if (firstMeaningfulLine === "") {
          firstMeaningfulLine = line;
        }
        if (lineIsEmpty && firstMeaningfulLine === "") {
          continue;
        }
        let lineLocal = line;
        const matches = firstMeaningfulLine.match(/^(\s+)/g) ?? [];
        if (matches.length !== 0) {
          lineLocal = lineLocal.replace(matches[0] ?? "", "");
        }
        lines.push(lineLocal);
      }
      return lines.join("\n").trim();
    }
    $$renderer2.push(`<div class="code svelte-1ltxu9w">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<pre class="text svelte-1ltxu9w">${escape_html(align(source))}</pre>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
var IS_BROWSER = typeof document !== "undefined";
var lastUrl = false;
async function swap(target, view) {
  if (lastUrl === false) {
    lastUrl = location.toString();
  }
  let requestUrl;
  let response;
  let method = "GET";
  const body = {};
  if (target.nodeName === "A") {
    const anchor = target;
    const parts = anchor.href.split("#", 2);
    requestUrl = parts[0];
    if (view.type === "snapshot") {
      requestUrl = requestUrl.replace(/\/+$/, "") + "/data.json";
    } else if (parts.length >= 2) {
      requestUrl += `#${parts[1]}`;
    }
    response = await fetch(requestUrl, {
      headers: {
        Accept: "application/json"
      }
    });
  } else if (target.nodeName === "FORM") {
    const form = target;
    const data = new FormData(form);
    const params = new URLSearchParams();
    requestUrl = form.action.split("?")[0] ?? "";
    if (view.type === "snapshot") {
      requestUrl = requestUrl.replace(/\/+$/, "") + "/data.json";
    }
    form.reset();
    data.forEach(function each(value, key) {
      if (value instanceof File) {
        return;
      }
      body[key] = `${value}`;
      params.append(key, `${value}`);
    });
    method = form.method.toUpperCase();
    if (method === "GET") {
      const query = `?${params.toString()}`;
      response = await fetch(`${requestUrl}${query}`, {
        headers: {
          Accept: "application/json"
        }
      });
    } else {
      requestUrl = form.action;
      if (view.type === "snapshot") {
        requestUrl += "/data.json";
      }
      response = await fetch(requestUrl, {
        method,
        body: data,
        headers: {
          Accept: "application/json"
        }
      });
    }
  } else {
    return function push2() {
    };
  }
  const text = await response.text();
  if (text === "") {
    return function push2() {
    };
  }
  const remote = JSON.parse(text);
  await view.pin();
  view.name = remote.name;
  view.align = remote.align;
  view.render = remote.render;
  if (view.align === 1) {
    if (typeof view.props !== "object") {
      console.warn("view alignment intends to merge props, but local view props is not an object");
    } else if (typeof remote.props !== "object") {
      console.warn("view alignment intends to merge props, but remote props is not an object");
    } else {
      view.props = {
        ...view.props,
        ...remote.props
      };
    }
  } else {
    view.props = remote.props;
  }
  let fixedResponseUrl = response.url;
  if (view.type === "snapshot") {
    fixedResponseUrl = fixedResponseUrl.replace(/\/data\.json$/, "");
  }
  const hash = requestUrl.split("#", 2)[1] ?? "";
  const stationary = lastUrl === fixedResponseUrl;
  lastUrl = fixedResponseUrl;
  return function push2() {
    if (stationary) {
      return;
    }
    const entry = {
      nodeName: target.nodeName,
      method,
      url: fixedResponseUrl,
      body
    };
    if (hash !== "") {
      window.history.pushState(JSON.stringify(entry), "", `${fixedResponseUrl}#${hash}`);
    } else {
      window.history.pushState(JSON.stringify(entry), "", fixedResponseUrl);
    }
  };
}
var started = false;
function route(view) {
  if (!IS_BROWSER || started) {
    return;
  }
  const form = document.createElement("form");
  const anchor = document.createElement("a");
  const listener = async function pop2(e) {
    const serialized = e.state ?? "";
    if (serialized !== "") {
      e.preventDefault();
      const entry = JSON.parse(serialized);
      if (entry.method === "GET") {
        anchor.href = entry.url;
        await swap(anchor, view);
      }
      form.innerHTML = "";
      for (const key in entry.body) {
        const value = entry.body[key];
        const input = document.createElement("input");
        input.value = value;
        form.appendChild(input);
      }
      await swap(form, view);
      return;
    }
    anchor.href = `${window.location}`;
    await swap(anchor, view);
  };
  window.addEventListener("popstate", listener);
  started = true;
}
function href(path = "") {
  if (!IS_BROWSER) {
    return {
      href: path,
      async onclick() {
        return true;
      }
    };
  }
  const anchor = document.createElement("a");
  anchor.href = path;
  const view = getContext("view");
  route(view);
  return {
    href: path,
    async onclick(event) {
      event.preventDefault();
      try {
        const record = await swap(anchor, view);
        record();
      } catch (error) {
        console.error("swapping failed", error);
      }
      return false;
    }
  };
}
var $$css$k = {
  hash: "svelte-1bfzcah",
  code: "a.svelte-1bfzcah {position:relative;width:100%;}"
};
function Link($$renderer, $$props) {
  $$renderer.global.css.add($$css$k);
  $$renderer.component(($$renderer2) => {
    let { href: path, children, class: cls, style } = $$props;
    let pending = false;
    let error = false;
    let options = derived(function run() {
      const out = href(path);
      return {
        href: out.href,
        onclick(event) {
          pending = true;
          out.onclick(event).then(function run2() {
            pending = false;
          }).catch(function run2(errorLocal) {
            error = errorLocal;
          });
        }
      };
    });
    $$renderer2.push(`<a${attributes({ ...options(), class: clsx2(cls), style }, "svelte-1bfzcah")}>`);
    children($$renderer2, { pending, error });
    $$renderer2.push(`<!----></a>`);
  });
}
var $$css$j = {
  hash: "svelte-1jfone2",
  code: ':root {--footer-padding: 1rem;--footer-previous-padding: 1rem;--footer-next-padding: 1rem;--footer-line-color: #cecdc3;--footer-line-thickness: 1px;}.footer.svelte-1jfone2 {padding-top:var(--footer-padding);padding-bottom:20rem;}.footer-line.svelte-1jfone2 {grid-area:footer-line;position:relative;height:var(--footer-line-thickness);background-color:var(--footer-line-color);opacity:0.3;}.footer-content.svelte-1jfone2 {display:flex;flex-wrap:wrap;}.footer-content-previous.svelte-1jfone2 {padding:var(--footer-previous-padding);font-size:1.3rem;flex-grow:1;text-align:start;}.footer-content-previous-hint.svelte-1jfone2 {opacity:0.5;display:grid;grid-template-columns:auto 1fr;grid-template-areas:"footer-content-previous-hint-icon footer-content-previous-hint-text";}.footer-content-previous-hint-icon.svelte-1jfone2 {top:0.1rem;position:relative;grid-area:footer-content-previous-hint-icon;}.footer-content-previous-hint-text.svelte-1jfone2 {grid-area:footer-content-previous-hint-text;}.footer-content-next.svelte-1jfone2 {padding:var(--footer-next-padding);font-size:1.3rem;flex-grow:1;text-align:end;}.footer-content-next-hint.svelte-1jfone2 {opacity:0.5;display:grid;grid-template-columns:1fr auto;grid-template-areas:"footer-content-next-hint-text footer-content-next-hint-icon";}.footer-content-next-hint-icon.svelte-1jfone2 {top:0.1rem;position:relative;grid-area:footer-content-next-hint-icon;}.footer-content-next-hint-text.svelte-1jfone2 {grid-area:footer-content-next-hint-text;}\n    @media screen and (max-width: 980px) {.footer-content-previous.svelte-1jfone2 {text-align:center;}.footer-content-next.svelte-1jfone2 {text-align:center;}\n    }'
};
function Footer($$renderer, $$props) {
  $$renderer.global.css.add($$css$j);
  $$renderer.component(($$renderer2) => {
    let { previous, next } = $$props;
    $$renderer2.push(`<div class="footer svelte-1jfone2"><div class="footer-line svelte-1jfone2"></div> <div class="footer-content svelte-1jfone2"><div class="footer-content-previous svelte-1jfone2">`);
    if (previous) {
      $$renderer2.push("<!--[0-->");
      {
        let children = function($$renderer3, { pending }) {
          $$renderer3.push(`<div class="footer-content-previous-hint svelte-1jfone2"><span class="footer-content-previous-hint-text svelte-1jfone2">Previous</span> <div class="footer-content-previous-hint-icon svelte-1jfone2">`);
          if (pending) {
            $$renderer3.push("<!--[0-->");
            Icon($$renderer3, { path: mdiCloudRefresh, size: "1.3rem" });
          } else {
            $$renderer3.push("<!--[-1-->");
            Icon($$renderer3, { path: mdiArrowLeft, size: "1.3rem" });
          }
          $$renderer3.push(`<!--]--></div></div> <div class="footer-content-previous-title"><span>${escape_html(previous.label)}</span></div>`);
        };
        Link($$renderer2, { href: previous.href, children });
      }
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="footer-content-next svelte-1jfone2">`);
    if (next) {
      $$renderer2.push("<!--[0-->");
      {
        let children = function($$renderer3, { pending }) {
          $$renderer3.push(`<div class="footer-content-next-hint svelte-1jfone2"><span class="footer-content-next-hint-text svelte-1jfone2">Next</span> <div class="footer-content-next-hint-icon svelte-1jfone2">`);
          if (pending) {
            $$renderer3.push("<!--[0-->");
            Icon($$renderer3, { path: mdiCloudRefresh, size: "1.3rem" });
          } else {
            $$renderer3.push("<!--[-1-->");
            Icon($$renderer3, { path: mdiArrowRight, size: "1.3rem" });
          }
          $$renderer3.push(`<!--]--></div></div> <div class="footer-content-next-title"><span>${escape_html(next.label)}</span></div>`);
        };
        Link($$renderer2, { href: next.href, children });
      }
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
var $$css$i = {
  hash: "svelte-nf47ks",
  code: ":root {--inline-code-background: rgba(30, 119, 148, 0.1);--inline-code-text: rgba(255, 255, 255, 0.7);--inline-code-top: 0.1.3rem;--inline-code-padding: 0.3rem;--inline-code-roundness: 0.3rem;}.inline-code.svelte-nf47ks {position:relative;display:inline-flex;align-items:center;top:var(--inline-code-top);}.inline-code.svelte-nf47ks > .text:where(.svelte-nf47ks) {color:var(--inline-code-text);padding-left:var(--inline-code-padding);padding-right:var(--inline-code-padding);z-index:1;}.inline-code.svelte-nf47ks > .background:where(.svelte-nf47ks) {left:1px;right:1px;top:1px;bottom:1px;z-index:0;position:absolute;pointer-events:none;border-radius:var(--inline-code-roundness);background-color:var(--inline-code-background);}"
};
function Inline_code($$renderer, $$props) {
  $$renderer.global.css.add($$css$i);
  let { source } = $$props;
  $$renderer.push(`<span class="inline-code svelte-nf47ks"><span class="text svelte-nf47ks">${escape_html(source)}</span> <span class="background svelte-nf47ks"></span></span>`);
}
var $$css$h = {
  hash: "svelte-162z5t7",
  code: ':root {--note-background: #12253b;--note-text: #90b1c4;--note-icon: #90b1c4;--note-title: #90b1c4;--note-padding: 0.7rem;--note-roundness: 1rem;--note-margin: 0.5rem;}.note.svelte-162z5t7 {display:grid;overflow:auto;grid-template-columns:auto 1fr;grid-template-areas:"note-icon note-title"\n            "empty empty"\n            "note-content note-content";background-color:var(--note-background);color:var(--note-text);padding:var(--note-padding);border-radius:var(--note-roundness);margin-top:var(--note-margin);margin-bottom:var(--note-margin);}.note-icon.svelte-162z5t7 {grid-area:note-icon;color:var(--note-icon);}.note-title.svelte-162z5t7 {grid-area:note-title;color:var(--note-title);padding-left:var(--note-padding);}.note-content.svelte-162z5t7 {grid-area:note-content;}'
};
function Note($$renderer, $$props) {
  $$renderer.global.css.add($$css$h);
  let { children } = $$props;
  $$renderer.push(`<div class="note svelte-162z5t7"><div class="note-icon svelte-162z5t7">`);
  Icon($$renderer, { path: mdiInformationOutline, size: "1.5rem" });
  $$renderer.push(`<!----></div> <div class="note-title svelte-162z5t7">Note</div> <div class="note-content svelte-162z5t7">`);
  children($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
var $$css$g = {
  hash: "svelte-w3wuk5",
  code: ':root {--layout-padding: 1rem;--layout-navbar-background: rgba(0, 0, 0, 0.3);}.layout.svelte-w3wuk5 {display:grid;position:fixed;top:0;left:0;right:0;bottom:0;grid-template-columns:15rem auto 15rem;grid-template-rows:auto 1fr auto;grid-template-areas:"layout-navbar layout-navbar layout-navbar"\n            "layout-left-sidebar layout-body layout-right-sidebar";}\n    @media screen and (max-width: 980px) {.layout.svelte-w3wuk5 {grid-template-columns:15rem auto 1rem;}.layout-right-sidebar.svelte-w3wuk5 {display:none;}\n    }\n    @media screen and (max-width: 640px) {.layout.svelte-w3wuk5 {grid-template-columns:1rem auto 1rem;}.layout-left-sidebar.svelte-w3wuk5 {display:none;}.layout-right-sidebar.svelte-w3wuk5 {display:none;}\n    }.layout-navbar.svelte-w3wuk5 {grid-area:layout-navbar;padding:var(--layout-padding);background-color:var(--layout-navbar-background);z-index:1;}.layout-left-sidebar.svelte-w3wuk5 {grid-area:layout-left-sidebar;padding:var(--layout-padding);overflow:auto;z-index:0;}.layout-right-sidebar.svelte-w3wuk5 {grid-area:layout-right-sidebar;padding:var(--layout-padding);overflow:auto;z-index:0;}.layout-body.svelte-w3wuk5 {grid-area:layout-body;overflow:auto;z-index:0;}.layout-body-content.svelte-w3wuk5 {z-index:0;}.layout-body-footer.svelte-w3wuk5 {z-index:0;}'
};
function Layout($$renderer, $$props) {
  $$renderer.global.css.add($$css$g);
  let { title, navbar, leftSidebar, rightSidebar, content, footer } = $$props;
  head("w3wuk5", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(title)}</title>`);
    });
    $$renderer2.push(`<meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>`);
  });
  $$renderer.push(`<div class="layout svelte-w3wuk5"><div class="layout-left-sidebar svelte-w3wuk5">`);
  leftSidebar($$renderer);
  $$renderer.push(`<!----></div> <div class="layout-right-sidebar svelte-w3wuk5">`);
  rightSidebar($$renderer);
  $$renderer.push(`<!----></div> <div class="layout-body svelte-w3wuk5"><div class="layout-body-content svelte-w3wuk5">`);
  content($$renderer);
  $$renderer.push(`<!----></div> <div class="layout-body-footer svelte-w3wuk5">`);
  footer($$renderer);
  $$renderer.push(`<!----></div></div> <div class="layout-navbar svelte-w3wuk5">`);
  navbar($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
var $$css$f = {
  hash: "svelte-nodelc",
  code: ":root {--menu-item-gap: 1rem;}.shift.svelte-nodelc {--shift: 0;padding-left:calc(1rem * var(--shift));}"
};
function Menu_item($$renderer, $$props) {
  $$renderer.global.css.add($$css$f);
  let { children, shift = 0 } = $$props;
  $$renderer.push(`<div class="menu-item"><div class="shift svelte-nodelc"${attr_style("", { "--shift": shift })}>`);
  children($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
var prefix = "/frizzante-docs-using-snapshots";
function base(path, options) {
  if (options.dev) {
    return path;
  }
  const suffix = path.replace(/^\/+/, "");
  return `${prefix}/${suffix}`.replace(/^\/+/, "/");
}
var $$css$e = {
  hash: "svelte-bveh4d",
  code: ':root {--left-sidebar-padding: 1rem;--left-sidebar-item-padding: 0.5rem;--left-sidebar-item-roundness: 1rem;--left-sidebar-item-hover-background: rgba(162, 222, 206, 0.1);}.left-sidebar.svelte-bveh4d {padding:var(--left-sidebar-padding);}.left-sidebar-item.svelte-bveh4d {display:grid;grid-template-columns:auto 1fr;padding:var(--left-sidebar-item-padding);border-radius:var(--left-sidebar-item-roundness);grid-template-areas:"left-sidebar-hint left-sidebar-text";}.left-sidebar-item.svelte-bveh4d:hover {background-color:var(--left-sidebar-item-hover-background);}.left-sidebar-hint.svelte-bveh4d {grid-area:left-sidebar-hint;}.left-sidebar-text.svelte-bveh4d {grid-area:left-sidebar-text;}.icon.svelte-bveh4d {padding-right:0.1rem;top:0.1rem;}'
};
function Left_sidebar($$renderer, $$props) {
  $$renderer.global.css.add($$css$e);
  $$renderer.component(($$renderer2) => {
    const view = getContext("view");
    let { dev } = $$props;
    function item2($$renderer3, item3) {
      {
        let children = function($$renderer4, { pending }) {
          $$renderer4.push(`<div class="left-sidebar-item svelte-bveh4d"><div class="left-sidebar-hint svelte-bveh4d">`);
          if (pending) {
            $$renderer4.push("<!--[0-->");
            $$renderer4.push(`<div class="icon svelte-bveh4d">`);
            Icon($$renderer4, { path: mdiCloudRefresh });
            $$renderer4.push(`<!----></div>`);
          } else if (view.name === item3.viewName) {
            $$renderer4.push("<!--[1-->");
            $$renderer4.push(`<div class="icon svelte-bveh4d">`);
            Icon($$renderer4, { path: mdiArrowRight });
            $$renderer4.push(`<!----></div>`);
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]--></div> <div class="left-sidebar-text svelte-bveh4d">`);
          Menu_item($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(item3.text)}`);
            }
          });
          $$renderer4.push(`<!----></div></div>`);
        };
        Link($$renderer3, { href: item3.href, children });
      }
    }
    $$renderer2.push(`<div class="left-sidebar svelte-bveh4d">`);
    item2($$renderer2, {
      text: "Get Started",
      viewName: "GetStarted",
      href: base("/get_started", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Basics",
      viewName: "Basics",
      href: base("/basics", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Web Sockets",
      viewName: "WebSockets",
      href: base("/web_sockets", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Server Sent Events",
      viewName: "ServerSentEvents",
      href: base("/server_sent_events", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Guards",
      viewName: "Guards",
      href: base("/guards", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Views",
      viewName: "Views",
      href: base("/views", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Web Standards",
      viewName: "WebStandards",
      href: base("/web_standards", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, { text: "Cli", viewName: "Cli", href: base("/cli", { dev }) });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Type Definitions",
      viewName: "TypeDefinitions",
      href: base("/type_definitions", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Snapshots",
      viewName: "Snapshots",
      href: base("/snapshots", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Todos Example",
      viewName: "TodosExample",
      href: base("/todos_example", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Docker",
      viewName: "Docker",
      href: base("/docker", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Issues",
      viewName: "Issues",
      href: base("/issues", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, {
      text: "Contributing",
      viewName: "Contributing",
      href: base("/contributing", { dev })
    });
    $$renderer2.push(`<!----> `);
    item2($$renderer2, { text: "Faq", viewName: "Faq", href: base("/faq", { dev }) });
    $$renderer2.push(`<!----></div>`);
  });
}
var $$css$d = {
  hash: "svelte-1em4s66",
  code: ":root {--image-roundness: 1rem;}.image.svelte-1em4s66 {--width: auto;--height: auto;border-radius:var(--image-roundness);width:var(--width);height:var(--height);max-width:100%;max-height:100%;}"
};
function Image($$renderer, $$props) {
  $$renderer.global.css.add($$css$d);
  let { src, alt = "", width = "auto", height = "auto" } = $$props;
  $$renderer.push(`<img class="image svelte-1em4s66"${attr("src", src)}${attr("alt", alt)} loading="lazy" decoding="async" fetchpriority="auto"${attr("width", width)}${attr("height", height)}${attr_style("", { "--width": width, "--height": height })}/>`);
}
var $$css$c = {
  hash: "svelte-hpp9hf",
  code: ':root {--suggestion-padding: 1rem;--suggestion-roundness: 1rem;--suggestion-text: #c0c0c0;--suggestion-hover-background: rgba(162, 222, 206, 0.1);}.suggestion.svelte-hpp9hf {border:0;width:100%;position:relative;text-align:start;background-color:transparent;color:var(--suggestion-text);padding:var(--suggestion-padding);border-radius:var(--suggestion-roundness);grid-template-columns:1fr 10fr 2fr;grid-template-rows:1fr auto 1fr;grid-template-areas:"title title title"\n            "content content content"\n            "separator separator separator";}.suggestion.svelte-hpp9hf:hover:not(.active) {background-color:var(--suggestion-hover-background);cursor:pointer;}.title.svelte-hpp9hf {grid-area:title;}.content.svelte-hpp9hf {grid-area:content;min-height:1rem;}.page.svelte-hpp9hf {font-weight:bold;font-size:1.2rem;}.section.svelte-hpp9hf {opacity:0.5;font-size:1.2rem;font-style:italic;}.description.svelte-hpp9hf {opacity:0.5;}.no-description.svelte-hpp9hf {opacity:0.5;font-style:italic;}'
};
function Suggestion($$renderer, $$props) {
  $$renderer.global.css.add($$css$c);
  $$renderer.component(($$renderer2) => {
    let { description, page, section, href: createSuggestionHref, dev } = $$props;
    $$renderer2.push(`<button class="suggestion svelte-hpp9hf"><div class="title svelte-hpp9hf"><span class="page svelte-hpp9hf">${escape_html(page)}</span> <span class="section svelte-hpp9hf">#${escape_html(section)}</span></div> <div class="content svelte-hpp9hf">`);
    if (description.trim() !== "") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="description svelte-hpp9hf">${escape_html(description)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="no-description svelte-hpp9hf">&lt;No description></span>`);
    }
    $$renderer2.push(`<!--]--></div></button>`);
  });
}
var $$css$b = {
  hash: "svelte-17fcft7",
  code: ":root {--searchbar-results-text: #c0c0c0;--searchbar-results-gap: 1rem;--searchbar-results-border: 1px solid #c0c0c0;}.searchbar-results.svelte-17fcft7 {display:grid;justify-items:start;}.suggestion.svelte-17fcft7 {width:100%;position:relative;padding-bottom:0.1rem;}"
};
function Searchbar_results($$renderer, $$props) {
  $$renderer.global.css.add($$css$b);
  let { suggestions: suggestions2 = [], dev } = $$props;
  $$renderer.push(`<div class="searchbar-results svelte-17fcft7">`);
  const each_array = ensure_array_like(suggestions2);
  if (each_array.length !== 0) {
    $$renderer.push("<!--[-->");
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let suggestion = each_array[index];
      $$renderer.push(`<div class="suggestion svelte-17fcft7">`);
      Suggestion($$renderer, spread_props([suggestion, { dev }]));
      $$renderer.push(`<!----></div>`);
    }
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<span>No results found.</span>`);
  }
  $$renderer.push(`<!--]--></div>`);
}
function textToAnchor(text) {
  return text.replaceAll(/&+/g, "and").replaceAll(/[_\s,.;:!"£$%/()=?^'']+/g, "-").replace(/-$/, "").replace(/^-/, "").toLowerCase();
}
var suggestions = [
  // Get Started.
  {
    page: "Get Started",
    section: "Install frizzante",
    description: "Install frizzante and get started",
    href(dev) {
      return base(`/get_started#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Get Started",
    section: "Create project",
    description: "Create a new frizzante project using the cli",
    href(dev) {
      return base(`/get_started#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Get Started",
    section: "Configure project",
    description: "Configure the project after creating it",
    href(dev) {
      return base(`/get_started#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Get Started",
    section: "Start development",
    description: "Start development watcher",
    href(dev) {
      return base(`/get_started#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Get Started",
    section: "Build",
    description: "Build the project to a standalone binary",
    href(dev) {
      return base(`/get_started#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Basics.
  {
    page: "Basics",
    section: "Basics",
    description: "Basic concepts of frizzante",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Server",
    description: "Create a new server",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Routes",
    description: "Manage server routes",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Path Fields",
    description: "Define variable path fields and retrieve them in your route handler",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Messages",
    description: "Send and receives messages",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Headers",
    description: "Send and receive header fields",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Status",
    description: "Send status code to the client",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Order of Operations",
    description: "The order in which data is sent to the client is important",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Queries",
    description: "Receive query strings from the client",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Forms",
    description: "Receive and unmarshal form payloads from the client",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Json",
    description: "Receive and unmarshal json payloads from the client",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Cookies",
    description: "Send and receive cookies",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Session Id",
    description: "Receive (and initialize) a client's session id",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Session",
    description: "Receive (and initialize) a client's session",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Redirect",
    description: "Redirect the client to a different page",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Basics",
    section: "Navigate",
    description: "Redirect the client to a different page using status code 302",
    href(dev) {
      return base(`/basics#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Web Sockets.
  {
    page: "Web Sockets",
    section: "Web Sockets",
    description: "Upgrade the connection to web sockets",
    href(dev) {
      return base(`/web_sockets#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Serve Sent Events.
  {
    page: "Server Sent Events",
    section: "Server Sent Events",
    description: "Upgrade the connection to server sent events",
    href(dev) {
      return base(`/server_sent_events#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Guards.
  {
    page: "Guards",
    section: "Guards",
    description: "Protect your routes using custom rules",
    href(dev) {
      return base(`/guards#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Guards",
    section: "Composition",
    description: "Compose guards to create advances rules",
    href(dev) {
      return base(`/guards#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Views
  {
    page: "Views",
    section: "Views",
    description: "Manage views",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "Server Exports",
    description: "Views that are meant to be rendered on the server",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "Client Exports",
    description: "Views that are meant to be rendered on the client",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "Send Views",
    description: "Send views from a route handler",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "Default View",
    description: 'How to setup a "default" view',
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "View Properties",
    description: "Pass properties to views",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "Render Modes",
    description: "Switch between render modes at runtime",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "RenderModeFull",
    description: "The view is rendered on both the server and the client",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "RenderModeServer",
    description: "The view is rendered only on the server",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "RenderModeClient",
    description: "The view is rendered only on the client",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Views",
    section: "Disabling server-side JavaScript runtime",
    description: "Disable the server-side JavaScript runtime in order to reduce memory footprint and binary size",
    href(dev) {
      return base(`/views#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Web Standards.
  {
    page: "Web Standards",
    section: "Web Standards",
    description: "",
    href(dev) {
      return base(`/web_standards#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Web Standards",
    section: "Adaptive Hyperlinks",
    description: "",
    href(dev) {
      return base(`/web_standards#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Web Standards",
    section: "Adaptive Forms",
    description: "",
    href(dev) {
      return base(`/web_standards#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Web Standards",
    section: "Link Component",
    description: "",
    href(dev) {
      return base(`/web_standards#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Web Standards",
    section: "Form Component",
    description: "",
    href(dev) {
      return base(`/web_standards#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Type Definitions.
  {
    page: "Type Definitions",
    section: "Type Definitions",
    description: "",
    href(dev) {
      return base(`/type_definitions#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Todos Example.
  {
    page: "Todos Example",
    section: "Todos Example",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "Main",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "Fallback",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "Welcome View",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "Todos View",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "List Todos",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "Remove Todos",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "Toggle Todos",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "Add Todos",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Todos Example",
    section: "More Examples",
    description: "",
    href(dev) {
      return base(`/todos_example#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Cli.
  {
    page: "Cli",
    section: "Cli",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Create Project",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Generate",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Configure",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Configure",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Plugins",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Update",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Package",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Package Watch",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Build",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Check",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Touch",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Clean Project",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Reset",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Strict",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Version",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Help",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Cli",
    section: "Interactive Mode",
    description: "",
    href(dev) {
      return base(`/cli#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Snapshots.
  {
    page: "Snapshots",
    section: "Snapshots",
    description: "",
    href(dev) {
      return base(`/snapshots#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Docker.
  {
    page: "Docker",
    section: "Docker",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Create a new container",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Start the container",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Attach to this container with your IDE or directly with a shell",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Configure project",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Start development",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Build",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Build and run production binary inside container",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Build production Docker image",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Docker",
    section: "Use Docker Compose for production",
    description: "",
    href(dev) {
      return base(`/docker#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Issues.
  {
    page: "Issues",
    section: "Reporting a Bug",
    description: "",
    href(dev) {
      return base(`/issues#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Issues",
    section: "Requesting a Feature",
    description: "",
    href(dev) {
      return base(`/issues#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Contributing.
  {
    page: "Contributing",
    section: "Contributing",
    description: "",
    href(dev) {
      return base(`/contributing#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Contributing",
    section: "Clone Repository",
    description: "",
    href(dev) {
      return base(`/contributing#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Contributing",
    section: "Create Branch",
    description: "",
    href(dev) {
      return base(`/contributing#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Contributing",
    section: "Coding Standards",
    description: "",
    href(dev) {
      return base(`/contributing#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Contributing",
    section: "Export Everything",
    description: "",
    href(dev) {
      return base(`/contributing#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Contributing",
    section: "Data & Logic",
    description: "",
    href(dev) {
      return base(`/contributing#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Contributing",
    section: "Pull Requests",
    description: "",
    href(dev) {
      return base(`/contributing#${textToAnchor(this.section)}`, { dev });
    }
  },
  // Faq.
  {
    page: "Faq",
    section: "Why doesn't frizzante have middleware?",
    description: "",
    href(dev) {
      return base(`/faq#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Faq",
    section: "Middleware Implementation",
    description: "",
    href(dev) {
      return base(`/faq#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Faq",
    section: "Middleware Usage",
    description: "",
    href(dev) {
      return base(`/faq#${textToAnchor(this.section)}`, { dev });
    }
  },
  {
    page: "Faq",
    section: "Can I use Frizzante with other frontend frameworks?",
    description: "",
    href(dev) {
      return base(`/faq#${textToAnchor(this.section)}`, { dev });
    }
  }
];
var fuse = new Fuse(suggestions, {
  keys: ["page", "section", "description"]
});
function find(query) {
  const results = fuse.search(query);
  const suggestions2 = [];
  for (const result of results) {
    suggestions2.push(result.item);
  }
  return suggestions2;
}
var $$css$a = {
  hash: "svelte-1kbyz96",
  code: ':root {--searchbar-text: #5f5e5a;--searchbar-text-focused: #c0c0c0;--searchbar-gap: 1rem;--searchbar-border: 1px solid #5f5e5a;--searchbar-border-focused: 1px solid #c0c0c0;--searchbar-roundness: 1rem;--searchbar-padding: 0.5rem;--searchbar-results-background: #0b0a0a;--searchbar-results-roundness: 1rem;--searchbar-results-padding: 1rem;}.searchbar.svelte-1kbyz96 {position:relative;}.button.svelte-1kbyz96 {color:var(--searchbar-text);border-radius:var(--searchbar-roundness);border:var(--searchbar-border);gap:var(--searchbar-gap);padding:var(--searchbar-padding);width:100%;display:grid;position:relative;justify-items:start;align-items:center;background-color:transparent;grid-template-columns:auto 1fr auto;grid-template-areas:"icon text shortcut";}.button.focused.svelte-1kbyz96 {border:var(--searchbar-border-focused);}.icon.svelte-1kbyz96 {grid-area:icon;display:grid;pointer-events:none;align-items:center;left:var(--searchbar-padding);}.text.svelte-1kbyz96 {grid-area:text;display:grid;align-items:center;background-color:transparent;padding:var(--searchbar-padding);border:0;outline:none;color:inherit;width:100%;}.text.focused.svelte-1kbyz96 {color:var(--searchbar-text-focused);}.shortcut.svelte-1kbyz96 {grid-area:shortcut;pointer-events:none;display:grid;align-items:center;padding-right:var(--searchbar-padding);}.results.svelte-1kbyz96 {position:absolute;background:var(--searchbar-results-background);border-radius:var(--searchbar-results-roundness);padding:var(--searchbar-results-padding);left:0;right:0;top:5rem;height:20rem;overflow:hidden;}\n    @media screen and (max-width: 640px) {.results.svelte-1kbyz96 {position:fixed;border-radius:0;height:auto;bottom:0;}\n    }.searchbar-results.svelte-1kbyz96 {border-radius:var(--searchbar-results-roundness);position:relative;width:100%;height:100%;overflow-y:auto;}'
};
function Searchbar($$renderer, $$props) {
  $$renderer.global.css.add($$css$a);
  $$renderer.component(($$renderer2) => {
    let { query = "", focused = false, placeholder = "", dev } = $$props;
    let suggestions2 = derived(() => find(query));
    $$renderer2.push(`<div class="searchbar svelte-1kbyz96"><button${attr_class("button svelte-1kbyz96", void 0, { "focused": focused })}><div class="icon svelte-1kbyz96">`);
    Icon($$renderer2, { path: mdiTextSearch, size: "1.5rem" });
    $$renderer2.push(`<!----></div> <input${attr_class("text svelte-1kbyz96", void 0, { "focused": focused })} type="text"${attr("value", query)}${attr("placeholder", placeholder)}/> <div class="shortcut svelte-1kbyz96">Ctrl K</div></button> `);
    if (query !== "") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="results svelte-1kbyz96"><div class="searchbar-results svelte-1kbyz96">`);
      Searchbar_results($$renderer2, { suggestions: suggestions2(), dev });
      $$renderer2.push(`<!----></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { query, focused });
  });
}
var logo = "/frizzante-docs-using-snapshots/assets/logo.webp";
var $$css$9 = {
  hash: "svelte-1ha2mkh",
  code: ':root {--navbar-title-text: #a2dece;--navbar-gap: 1rem;}.navbar.svelte-1ha2mkh {display:grid;gap:var(--navbar-gap);align-items:center;grid-template-columns:auto 1fr 3fr 1fr auto 0;grid-template-areas:"navbar-logo navbar-title navbar-searchbar empty navbar-links navbar-menu-link";}.navbar-menu-link.svelte-1ha2mkh {grid-area:navbar-menu-link;color:var(--navbar-title-text);display:none;}.navbar-logo.svelte-1ha2mkh {grid-area:navbar-logo;}.navbar-title.svelte-1ha2mkh {grid-area:navbar-title;color:var(--navbar-title-text);}.navbar-searchbar.svelte-1ha2mkh {grid-area:navbar-searchbar;}.navbar-links.svelte-1ha2mkh {grid-area:navbar-links;text-align:end;}\n    @media screen and (max-width: 980px) {.navbar.svelte-1ha2mkh {grid-template-columns:auto 0 1fr 0 auto 0;}.navbar-title.svelte-1ha2mkh {display:none;}\n    }\n    @media screen and (max-width: 640px) {.navbar.svelte-1ha2mkh {gap:0;grid-template-columns:0 0 1fr 0 0 auto;}.navbar-menu-link.svelte-1ha2mkh:not(.hidden) {display:block;padding-left:1rem;position:relative;top:0.15rem;}.navbar-logo.svelte-1ha2mkh {display:none;}.navbar-title.svelte-1ha2mkh {display:none;}.navbar-links.svelte-1ha2mkh {display:none;}\n    }'
};
function Navbar($$renderer, $$props) {
  $$renderer.global.css.add($$css$9);
  $$renderer.component(($$renderer2) => {
    let { search: search2 = "", focused = false, noMenuLink = false, dev } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="navbar svelte-1ha2mkh"><div${attr_class("navbar-menu-link svelte-1ha2mkh", void 0, { "hidden": noMenuLink })}><a${attributes({ ...href(base("/full-screen-menu", { dev })) }, "svelte-1ha2mkh")}>`);
      Icon($$renderer3, { path: mdiFunction, size: "2rem" });
      $$renderer3.push(`<!----></a></div> <div class="navbar-logo svelte-1ha2mkh">`);
      Image($$renderer3, { src: logo, width: "32px", height: "32px", alt: "logo" });
      $$renderer3.push(`<!----></div> <div class="navbar-title svelte-1ha2mkh">Frizzante Docs</div> <div class="navbar-searchbar svelte-1ha2mkh">`);
      if (IS_BROWSER) {
        $$renderer3.push("<!--[0-->");
        Searchbar($$renderer3, {
          placeholder: "Search",
          dev,
          get query() {
            return search2;
          },
          set query($$value) {
            search2 = $$value;
            $$settled = false;
          },
          get focused() {
            return focused;
          },
          set focused($$value) {
            focused = $$value;
            $$settled = false;
          }
        });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="navbar-links svelte-1ha2mkh"><a target="_blank" href="https://github.com/razshare/frizzante">`);
      Icon($$renderer3, { size: "2rem", path: mdiGithub });
      $$renderer3.push(`<!----></a></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { search: search2, focused });
  });
}
function Page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      title,
      children,
      rightSidebar: sidebar,
      footer: pageFooter,
      dev
    } = $$props;
    let searchQuery = "";
    let searchFocused = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let navbar = function($$renderer4) {
          Navbar($$renderer4, {
            dev,
            get search() {
              return searchQuery;
            },
            set search($$value) {
              searchQuery = $$value;
              $$settled = false;
            },
            get focused() {
              return searchFocused;
            },
            set focused($$value) {
              searchFocused = $$value;
              $$settled = false;
            }
          });
        }, content = function($$renderer4) {
          children($$renderer4);
          $$renderer4.push(`<!---->`);
        }, footer = function($$renderer4) {
          pageFooter($$renderer4);
          $$renderer4.push(`<!---->`);
        }, leftSidebar = function($$renderer4) {
          Left_sidebar($$renderer4, { dev });
        }, rightSidebar = function($$renderer4) {
          sidebar($$renderer4);
          $$renderer4.push(`<!---->`);
        };
        Layout($$renderer3, {
          title,
          navbar,
          content,
          footer,
          leftSidebar,
          rightSidebar
        });
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function item($$renderer, item2) {
  const id = textToAnchor(item2.text);
  $$renderer.push(`<a${attr("href", `#${stringify(id)}`)} class="right-sidebar-item svelte-rcrj4u"${attr_style("", { "--right-sidebar-item-shift": item2.shift })}><div class="right-sidebar-hint svelte-rcrj4u"><div class="icon svelte-rcrj4u">`);
  Icon($$renderer, { path: mdiPound });
  $$renderer.push(`<!----></div></div> <div class="right-sidebar-text svelte-rcrj4u">`);
  Menu_item($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->${escape_html(item2.text)}`);
    }
  });
  $$renderer.push(`<!----></div></a>`);
}
var $$css$8 = {
  hash: "svelte-rcrj4u",
  code: ':root {--right-sidebar-item-shift: 0;--right-sidebar-item-padding: 0.5rem;--right-sidebar-item-left-padding: 0.5rem;--right-sidebar-item-roundness: 1rem;--right-sidebar-item-hover-background: rgba(162, 222, 206, 0.1);}.right-sidebar.svelte-rcrj4u {display:grid;}.right-sidebar-item.svelte-rcrj4u {display:grid;grid-template-columns:auto 1fr;padding-left:calc(var(--right-sidebar-item-left-padding) * var(--right-sidebar-item-shift));border-radius:var(--right-sidebar-item-roundness);grid-template-areas:"right-sidebar-hint right-sidebar-text";}.right-sidebar-item.svelte-rcrj4u:hover {background-color:var(--right-sidebar-item-hover-background);}.right-sidebar-hint.svelte-rcrj4u {padding-left:var(--right-sidebar-item-padding);padding-top:var(--right-sidebar-item-padding);padding-bottom:var(--right-sidebar-item-padding);grid-area:right-sidebar-hint;}.right-sidebar-text.svelte-rcrj4u {padding-right:var(--right-sidebar-item-padding);padding-top:var(--right-sidebar-item-padding);padding-bottom:var(--right-sidebar-item-padding);grid-area:right-sidebar-text;}.icon.svelte-rcrj4u {padding-right:0.1rem;top:0.1rem;}'
};
function Right_sidebar($$renderer, $$props) {
  $$renderer.global.css.add($$css$8);
  $$renderer.component(($$renderer2) => {
    let { items } = $$props;
    $$renderer2.push(`<div class="right-sidebar svelte-rcrj4u"><!--[-->`);
    const each_array = ensure_array_like(items);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let value = each_array[index];
      item($$renderer2, value);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
var $$css$7 = {
  hash: "svelte-d2tr0e",
  code: ':root {--tip-background: #261c39;--tip-text: #a193bd;--tip-icon: #a193bd;--tip-title: #a193bd;--tip-padding: 0.7rem;--tip-roundness: 1rem;--tip-margin: 0.5rem;}.tip.svelte-d2tr0e {display:grid;grid-template-columns:auto 1fr;grid-template-areas:"note-icon note-title"\n            "empty empty"\n            "note-content note-content";background-color:var(--tip-background);color:var(--tip-text);padding:var(--tip-padding);border-radius:var(--tip-roundness);margin-top:var(--tip-margin);margin-bottom:var(--tip-margin);}.note-icon.svelte-d2tr0e {grid-area:note-icon;color:var(--danger-icon);}.note-title.svelte-d2tr0e {grid-area:note-title;color:var(--tip-title);padding-left:var(--tip-padding);}.note-content.svelte-d2tr0e {grid-area:note-content;}'
};
function Tip($$renderer, $$props) {
  $$renderer.global.css.add($$css$7);
  let { children } = $$props;
  $$renderer.push(`<div class="tip svelte-d2tr0e"><div class="note-icon svelte-d2tr0e">`);
  Icon($$renderer, { path: mdiLightbulbGroupOutline, size: "1.5rem" });
  $$renderer.push(`<!----></div> <div class="note-title svelte-d2tr0e">Tip</div> <div class="note-content svelte-d2tr0e">`);
  children($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
var $$css$6 = {
  hash: "svelte-8abqkx",
  code: "h1.svelte-8abqkx {font-size:2.5rem;}h2.svelte-8abqkx {font-size:2.2rem;}h3.svelte-8abqkx {font-size:2rem;}h4.svelte-8abqkx {font-size:1.7rem;}h5.svelte-8abqkx {font-size:1.5rem;}h6.svelte-8abqkx {font-size:1rem;}.no-margin.svelte-8abqkx {margin:0;}"
};
function Title($$renderer, $$props) {
  $$renderer.global.css.add($$css$6);
  $$renderer.component(($$renderer2) => {
    let { text, type: tag = "h1", noMargin = false } = $$props;
    let id = derived(() => textToAnchor(text));
    $$renderer2.push(`<a${attr("href", `#${stringify(id())}`)}>`);
    if (tag === "h1") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<h1${attr("id", id())}${attr_class("svelte-8abqkx", void 0, { "no-margin": noMargin })}><span>#</span> <span>${escape_html(text)}</span></h1>`);
    } else if (tag === "h2") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<h2${attr("id", id())}${attr_class("svelte-8abqkx", void 0, { "no-margin": noMargin })}><span>#</span> <span>${escape_html(text)}</span></h2>`);
    } else if (tag === "h3") {
      $$renderer2.push("<!--[2-->");
      $$renderer2.push(`<h3${attr("id", id())}${attr_class("svelte-8abqkx", void 0, { "no-margin": noMargin })}><span>#</span> <span>${escape_html(text)}</span></h3>`);
    } else if (tag === "h4") {
      $$renderer2.push("<!--[3-->");
      $$renderer2.push(`<h4${attr("id", id())}${attr_class("svelte-8abqkx", void 0, { "no-margin": noMargin })}><span>#</span> <span>${escape_html(text)}</span></h4>`);
    } else if (tag === "h5") {
      $$renderer2.push("<!--[4-->");
      $$renderer2.push(`<h5${attr("id", id())}${attr_class("svelte-8abqkx", void 0, { "no-margin": noMargin })}><span>#</span> <span>${escape_html(text)}</span></h5>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<h6${attr("id", id())}${attr_class("svelte-8abqkx", void 0, { "no-margin": noMargin })}><span>#</span> <span>${escape_html(text)}</span></h6>`);
    }
    $$renderer2.push(`<!--]--></a>`);
  });
}
function Basics($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Basics" },
            { shift: 0, text: "Server" },
            { shift: 0, text: "Routes" },
            { shift: 0, text: "Path Fields" },
            { shift: 0, text: "Messages" },
            { shift: 0, text: "Headers" },
            { shift: 0, text: "Status" },
            { shift: 0, text: "Order of Operations" },
            { shift: 0, text: "Queries" },
            { shift: 0, text: "Forms" },
            { shift: 0, text: "Json" },
            { shift: 0, text: "Cookies" },
            { shift: 0, text: "Session Id" },
            { shift: 0, text: "Session" },
            { shift: 0, text: "Redirect" },
            { shift: 0, text: "Navigate" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Get Started", href: base("/get_started", { dev }) },
          next: { label: "Web Sockets", href: base("/web_sockets", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Basics",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Basics" });
          $$renderer3.push(`<!----> <span>All internals of the framework are exposed intentionally.</span> <br/> <br/> <span>For example the frizzante <a href="#server">server</a> is a wrapper around `);
          Inline_code($$renderer3, { source: "net/http.Server" });
          $$renderer3.push(`<!----> and a frizzante <a href="#messages">client</a> is a wrapper around `);
          Inline_code($$renderer3, { source: "net/http.Request" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "net/http.ResponseWriter" });
          $$renderer3.push(`<!---->.</span> <br/> <br/> <span>You can interact with these internals and you are, in fact, intended to do so whenever the framework is
        insufficient, you're hitting a performance wall, a bug and so on.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Please `);
              Link($$renderer4, {
                href: base("/issues", { dev }),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->report`);
                }
              });
              $$renderer4.push(`<!----> such incidents if you can.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Server" });
          $$renderer3.push(`<!----> <span>Create a new server with `);
          Inline_code($$renderer3, { source: "servers.New()" });
          $$renderer3.push(`<!---->, then followup with servers.Start() in order to
        start a server.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package main

            import "main/lib/core/servers"

            var server = servers.New()      // Creates server.

            func main() {
                defer servers.Start(server) // Starts server.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Routes" });
          $$renderer3.push(`<!----> <span>Each server exposes a slice of Routes which you can freely modify.</span> <br/> <span>You can add a new route by appending to or overwriting `);
          Inline_code($$renderer3, { source: "server.Routes" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package main

            import (
                "main/lib/core/servers"
                "main/lib/routes/welcome"
            )

            var server = servers.New()                         // Creates server.

            func main() {
                defer servers.Start(server)                    // Starts server.
                server.Routes = []routes.Route{                // Overwrites routes.
                    {Pattern: "GET /", Handler: welcome.View}, // Adds route.
                }
            }
        `
          });
          $$renderer3.push(`<!----> <span>Where `);
          Inline_code($$renderer3, { source: "welcome.View" });
          $$renderer3.push(`<!----> is a function pointer.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import "main/lib/core/clients"

            func View(client *clients.Client) {}
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Path Fields" });
          $$renderer3.push(`<!----> <span>Route patterns can define dynamic path fields using `);
          Inline_code($$renderer3, { source: "{}" });
          $$renderer3.push(`<!----> syntax.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `routes.Route{Pattern: "GET /{name}", Handler: welcome.View}`
          });
          $$renderer3.push(`<!----> <span>Path fields can then be retrieved with `);
          Inline_code($$renderer3, { source: "receive.Path()" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Path(client, "name") // Retrieves field "name".
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Messages" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.Message()" });
          $$renderer3.push(`<!----> to retrieve messages sent by the client.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Message(client) // Retrieves message.
            }
        `
          });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.Message()" });
          $$renderer3.push(`<!----> to send a message to the client.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Headers" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.Header()" });
          $$renderer3.push(`<!----> to retrieve header fields sent by the client.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.Header(client, "Accept") // Retrieves field "Accept".
            }
        `
          });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.Header()" });
          $$renderer3.push(`<!----> to send header fields to the client.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                accept := receive.Header(client, "Accept")  // Retrieves field "Accept".
                send.Header(client, "Content-Type", accept) // Sends it back.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Status" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.Status()" });
          $$renderer3.push(`<!----> to send the status of the response to the client.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Status(client, 404)           // Sends status 404.
                send.Message(client, "Not found.") // Sends message.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Caution($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Sending header fields or status after sending out content is not allowed.</span> <br/> <span>Read <a href="#order-of-oprations">below</a>.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Order of Operations" });
          $$renderer3.push(`<!----> <span>Order of operations matters when sending data to the client.</span> <br/> <span>For example, sending the status code with `);
          Inline_code($$renderer3, { source: "send.Status()" });
          $$renderer3.push(`<!----> after you\u2019ve already sent content with `);
          Inline_code($$renderer3, { source: "send.Message()" });
          $$renderer3.push(`<!----> is not allowed.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Message(client, "Hello.") // Sends message (Succeeds).
                send.Status(client, 404)       // Sends status (Fails).
            }
        `
          });
          $$renderer3.push(`<!----> <span>`);
          Inline_code($$renderer3, { source: "send.Status(client, 404)" });
          $$renderer3.push(`<!----> will fail and the client will receive status 200 instead of 404.</span> `);
          Code($$renderer3, {
            lang: "http",
            source: `
            HTTP/1.1 200 OK
            Date: Sun, 25 May 2025 02:00:37 GMT
            Content-Length: 6
            Content-Type: text/plain; charset=utf-8

            Hello.
        `
          });
          $$renderer3.push(`<!----> <span>The failure is logged to the server\u2019s error logger.</span> <br/> <span>Assuming you\u2019re using the default error logger, you\u2019ll see an error of sorts in your <strong>console</strong></span> `);
          Code($$renderer3, {
            lang: "log",
            source: `
            listening for requests at http://127.0.0.1:8080
            status is locked
        `
          });
          $$renderer3.push(`<!----> <span>`);
          Inline_code($$renderer3, { source: "status is locked" });
          $$renderer3.push(`<!---->, meaning the status code has already been sent to the client and
        there\u2019s nothing you can do about it.</span> `);
          Title($$renderer3, { text: "Queries" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.Query()" });
          $$renderer3.push(`<!----> to retrieve query fields.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                name := receive.Query(client, "name") // Retrieves field "name".
                send.Message(client, "Hello " + name) // Sends message.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Forms" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.Form()" });
          $$renderer3.push(`<!----> to parse incoming content as multipart form or url encoded form when using `);
          Inline_code($$renderer3, { source: "POST" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "GET" });
          $$renderer3.push(`<!----> http verbs.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "GET /", Handler: welcome.View}
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            type Form struct {                             // Defines a struct in which to
                Name string \`form:"name"\`                  // store the form content.
            }

            func View(client *clients.Client) {
                var form Form
                receive.Form(client, &form)                // Retrieves form.
                send.Message(client, "Hello " + form.Name) // Sends message.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Tip($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>You can also use a `);
              Inline_code($$renderer4, { source: "json" });
              $$renderer4.push(`<!----> tag, it will match the field correctly as if it were a `);
              Inline_code($$renderer4, { source: "form" });
              $$renderer4.push(`<!----> tag.</span> <br/> <span>This is so that you can integrate your structs more easily with other libraries that only take into account `);
              Inline_code($$renderer4, { source: "json" });
              $$renderer4.push(`<!----> formats.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Tip($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Form structs can define slices and files.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                type Form struct {
                    Name     string               \`form:"name"\`
                    Comments []string             \`form:"comments"\` // slice of strings
                    File     multipart.FileHeader \`form:"file"\`     // file handler
                }
            `
              });
              $$renderer4.push(`<!----> <span>You can open and read the file.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                src, _ := form.File.Open()
                dst, _ := os.Create("my-file.txt")
                io.Copy(src, dst)
            `
              });
              $$renderer4.push(`<!----> <span>Remember to close your files.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                defer src.Close()
                defer dst.Close()
            `
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Json" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.Json()" });
          $$renderer3.push(`<!----> to parse incoming content as json when using POST and PUT http verbs and `);
          Inline_code($$renderer3, { source: "send.Json()" });
          $$renderer3.push(`<!----> to send json content.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            routes.Route{Pattern: "POST /", Handler: welcome.View}
            // or
            routes.Route{Pattern: "PUT /", Handler: welcome.View}
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            type GreetingDetails struct {      // Defines a struct in which to
                Name string \`json:"name"\`      // store the json content.
            }

            func View(client *clients.Client) {
                var details GreetingDetails    // Creates a zero value.
                receive.Json(client, &details) // Unmarshals the content into details.
                send.Json(client, details)     // Sends content back as json.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Cookies" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.Cookie()" });
          $$renderer3.push(`<!----> to retrieve cookies and `);
          Inline_code($$renderer3, { source: "send.Cookie()" });
          $$renderer3.push(`<!----> to send
        them.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                nickname := receive.Cookie(client, "nickname") // Retrieves cookie.
                send.Cookie(client, "nickname", nickname)      // Sends it back.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Session Id" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.SessionId()" });
          $$renderer3.push(`<!----> to retrieve the client\u2019s session id.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                _ = receive.SessionId(client) // Retrieves session id.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>The session id is retrieved from the client\u2019s session-id cookie.</span> <span>If the client doesn\u2019t provide such cookie, `);
              Inline_code($$renderer4, { source: "receive.SessionId()" });
              $$renderer4.push(`<!----> creates a new session id and sends the cookie to the client.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Caution($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Since `);
              Inline_code($$renderer4, { source: "receive.SessionId()" });
              $$renderer4.push(`<!----> might send a cookie to the client, it is important to remember
            that order of operations matters.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Session" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "receive.Session()" });
          $$renderer3.push(`<!----> to retrieve the client\u2019s session.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->The session is retrieved using `);
              Inline_code($$renderer4, { source: "receive.SessionId()" });
              $$renderer4.push(`<!---->.`);
            }
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
            )

            func View(client *clients.Client) {
                var session *sessions.Session         // Creates a zero value.
                _ = receive.Session(client, &session) // Unmarshals the content into session.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Redirect" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.Redirect()" });
          $$renderer3.push(`<!----> to redirect to a different location.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Redirect(client, "/login", 307) // Redirects to /login.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Navigate" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.Navigate()" });
          $$renderer3.push(`<!----> to redirect to a different location with status 302.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
            )

            func View(client *clients.Client) {
                send.Navigate(client, "/login") // Redirects to /login with status 302.
            }
        `
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
var $$css$5 = {
  hash: "svelte-1sduol8",
  code: ':root {--file-tree-directory-gap: 0.1rem;--file-tree-directory-text-hover: #a2dece;--file-tree-directory-link-background: #878580;--file-tree-directory-link-width: 0.1rem;}.file-tree-directory.svelte-1sduol8 {display:grid;gap:var(--file-tree-directory-gap);grid-template-columns:auto auto 1fr;grid-template-rows:auto auto auto;grid-template-areas:"directory-icon directory-name"\n            "directory-link directory-content";}.icon.svelte-1sduol8 {grid-area:directory-icon;top:0.2rem;}.icon.svelte-1sduol8:hover {color:var(--file-tree-directory-text-hover);}.name.svelte-1sduol8 {grid-area:directory-name;}.name.svelte-1sduol8:hover {color:var(--file-tree-directory-text-hover);}.content.svelte-1sduol8 {grid-area:directory-content;}.link.svelte-1sduol8 {display:grid;position:relative;grid-area:directory-link;justify-items:center;align-items:center;}.link.svelte-1sduol8 > .bar:where(.svelte-1sduol8) {position:absolute;top:0;bottom:0;width:var(--file-tree-directory-link-width);border-radius:var(--file-tree-directory-link-width);background:var(--file-tree-directory-link-background);}.link.hidden.svelte-1sduol8 {display:none;}button.svelte-1sduol8 {cursor:pointer;background:transparent;color:inherit;text-align:start;border:0;font-family:inherit;font-size:inherit;font-weight:inherit;}'
};
function File_tree_directory($$renderer, $$props) {
  $$renderer.global.css.add($$css$5);
  $$renderer.component(($$renderer2) => {
    let { name, icon = mdiFolder, children, expanded = false } = $$props;
    $$renderer2.push(`<div class="file-tree-directory svelte-1sduol8"><button class="name svelte-1sduol8">${escape_html(name)}</button> <button class="icon svelte-1sduol8">`);
    Icon($$renderer2, { path: icon });
    $$renderer2.push(`<!----></button> <div class="content svelte-1sduol8">`);
    if (expanded && children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div${attr_class("link svelte-1sduol8", void 0, { "hidden": !children })}><div class="bar svelte-1sduol8"></div></div></div>`);
    bind_props($$props, { expanded });
  });
}
var $$css$4 = {
  hash: "svelte-163ita5",
  code: ':root {--file-tree-file-gap: 0.1rem;}.file-tree-file.svelte-163ita5 {display:grid;gap:var(--file-tree-file-gap);grid-template-columns:auto 1fr;grid-template-areas:"file-icon file-name";}.file-icon.svelte-163ita5 {grid-area:file-icon;position:relative;top:0.3rem;left:0.3rem;padding-right:0.3rem;}.file-name.svelte-163ita5 {grid-area:file-name;}button.svelte-163ita5 {cursor:default;background:transparent;color:inherit;text-align:start;border:0;font-family:inherit;font-size:inherit;font-weight:inherit;}'
};
function File_tree_file($$renderer, $$props) {
  $$renderer.global.css.add($$css$4);
  let { name, icon = mdiFile } = $$props;
  $$renderer.push(`<div class="file-tree-file svelte-163ita5"><button class="file-name svelte-163ita5">${escape_html(name)}</button> <div class="file-icon svelte-163ita5">`);
  Icon($$renderer, { path: icon });
  $$renderer.push(`<!----></div></div>`);
}
var $$css$3 = {
  hash: "svelte-1y0g68o",
  code: ":root {--file-tree-margin: 1rem;--file-tree-padding: 1rem;--file-tree-roundness: 1rem;--file-tree-background: #1c1b1a;--file-tree-text: #878580;}.tree.svelte-1y0g68o {color:var(--file-tree-text);background-color:var(--file-tree-background);padding:var(--file-tree-padding);margin-top:var(--file-tree-margin);border-radius:var(--file-tree-roundness);}"
};
function File_tree($$renderer, $$props) {
  $$renderer.global.css.add($$css$3);
  let { children } = $$props;
  $$renderer.push(`<div class="tree svelte-1y0g68o">`);
  children($$renderer, { Directory: File_tree_directory, File: File_tree_file });
  $$renderer.push(`<!----></div>`);
}
function Cli($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Cli" },
            { shift: 0, text: "Create Project" },
            { shift: 0, text: "Generate" },
            { shift: 1, text: "Plugins" },
            { shift: 0, text: "Configure" },
            { shift: 0, text: "Install" },
            { shift: 0, text: "Update" },
            { shift: 0, text: "Package" },
            { shift: 0, text: "Package Watch" },
            { shift: 0, text: "Build" },
            { shift: 0, text: "Check" },
            { shift: 0, text: "Touch" },
            { shift: 0, text: "Clean Project" },
            { shift: 0, text: "Reset" },
            { shift: 0, text: "Strict" },
            { shift: 0, text: "Version" },
            { shift: 0, text: "Help" },
            { shift: 0, text: "Interactive Mode" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: {
            label: "Web Standards",
            href: base("/web_standards", { dev })
          },
          next: {
            label: "Type Definitions",
            href: base("/type_definitions", { dev })
          }
        });
      };
      Page($$renderer2, {
        title: "Cli",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Cli" });
          $$renderer3.push(`<!----> <span>The cli provides various commands to manage your project lifecycle, from creation to deployment.</span> `);
          Title($$renderer3, { text: "Create Project" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante c my_project
            # or
            frizzante create my_project
        `
          });
          $$renderer3.push(`<!----> <span>Creates a new project in a new directory using the given name.</span> `);
          {
            let children = function($$renderer4, { Directory, File: File2 }) {
              if (Directory) {
                $$renderer4.push("<!--[-->");
                Directory($$renderer4, {
                  name: "MyProject",
                  icon: mdiFolder,
                  expanded: true,
                  children: ($$renderer5) => {
                    if (Directory) {
                      $$renderer5.push("<!--[-->");
                      Directory($$renderer5, {
                        name: "app",
                        icon: mdiFolder,
                        expanded: true,
                        children: ($$renderer6) => {
                          if (File2) {
                            $$renderer6.push("<!--[-->");
                            File2($$renderer6, { name: "index.html", icon: mdiCodeBraces });
                            $$renderer6.push("<!--]-->");
                          } else {
                            $$renderer6.push("<!--[!-->");
                            $$renderer6.push("<!--]-->");
                          }
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                    $$renderer5.push(` `);
                    if (File2) {
                      $$renderer5.push("<!--[-->");
                      File2($$renderer5, { name: "main.go", icon: mdiCodeBraces });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            };
            File_tree($$renderer3, { children });
          }
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Generate" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante g
            # or
            frizzante generate
        `
          });
          $$renderer3.push(`<!----> <span>This command generates code and/or resources.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Many of frizzante\u2019s functionalities come as code and resource generations, not as packages.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Tip($$renderer3, {
            children: ($$renderer4) => {
              Title($$renderer4, { text: "Plugins", type: "h5", noMargin: true });
              $$renderer4.push(`<!----> <span>It is possible, but not required, to create generation plugins for you cli.</span> <br/> <br/> <span>All you need to do is create a directory `);
              Inline_code($$renderer4, { source: "plugins/generate/[plugin name]" });
              $$renderer4.push(`<!----> directory in your project.</span> <br/> <span>This directory must be a Go `);
              Inline_code($$renderer4, { source: "main" });
              $$renderer4.push(`<!----> package.</span> `);
              {
                let children = function($$renderer5, { Directory, File: File2 }) {
                  if (Directory) {
                    $$renderer5.push("<!--[-->");
                    Directory($$renderer5, {
                      name: "plugins",
                      expanded: true,
                      children: ($$renderer6) => {
                        if (Directory) {
                          $$renderer6.push("<!--[-->");
                          Directory($$renderer6, {
                            name: "generate",
                            expanded: true,
                            children: ($$renderer7) => {
                              if (Directory) {
                                $$renderer7.push("<!--[-->");
                                Directory($$renderer7, {
                                  name: "my-awesome-plugin",
                                  expanded: true,
                                  children: ($$renderer8) => {
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "main.go" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                  },
                                  $$slots: { default: true }
                                });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push("<!--]-->");
                        } else {
                          $$renderer6.push("<!--[!-->");
                          $$renderer6.push("<!--]-->");
                        }
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                };
                File_tree($$renderer4, { children });
              }
              $$renderer4.push(`<!----> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                package main

                func main() {
                    println("hello, this is my generation plugin")
                }
            `
              });
              $$renderer4.push(`<!----> <span>You will then be able to invoke this plugin using the frizzante cli.</span> `);
              Code($$renderer4, { lang: "go", source: "frizzante generate my-awesome-plugin" });
              $$renderer4.push(`<!----> `);
              Note($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>Environment variables, cli flags and additional cli positional parameters will be passed down to your
                plugin program.</span> <br/> <span>For example, given this plugin program</span> `);
                  Code($$renderer5, {
                    lang: "go",
                    source: `
                    package main

                    import (
                        "fmt"
                        "os"
                        "strings"
                    )

                    func main() {
                        fmt.Printf("args: %s\\n", strings.Join(os.Args, " "))
                    }
                `
                  });
                  $$renderer5.push(`<!----> <span>The following script</span> `);
                  Code($$renderer5, {
                    lang: "go",
                    source: "frizzante --strict generate my-awesome-plugin world"
                  });
                  $$renderer5.push(`<!----> <span>Will output to the console something like this</span> `);
                  Code($$renderer5, {
                    lang: "bash",
                    source: `
                    args: /tmp/go-build2815184765/b001/exe/types --strict --bun=".gen/bun/bun" --go="go" --air=".gen/air/air" --sqlc=".gen/sqlc/sqlc" world 
                `
                  });
                  $$renderer5.push(`<!----> <span>There are no implicit flags, frizzante will resolve the default flags automatically and pass them down
                to your plugin program explicitly.</span>`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Configure" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, { lang: "sh", source: "frizzante configure" });
          $$renderer3.push(`<!----> <span>Runs</span> <ol><li>`);
          Inline_code($$renderer3, { source: "frizzante generate air,bun" });
          $$renderer3.push(`<!----></li> <li>`);
          Inline_code($$renderer3, { source: "frizzante install" });
          $$renderer3.push(`<!----></li> <li>`);
          Inline_code($$renderer3, { source: "frizzante package" });
          $$renderer3.push(`<!----></li></ol> <span>This will generate Air and Bun binaries in `);
          Inline_code($$renderer3, { source: ".gen/{air,bun}" });
          $$renderer3.push(`<!---->.</span> `);
          {
            let children = function($$renderer4, { Directory, File: File2 }) {
              if (Directory) {
                $$renderer4.push("<!--[-->");
                Directory($$renderer4, {
                  name: ".gen",
                  icon: mdiFolder,
                  expanded: true,
                  children: ($$renderer5) => {
                    if (Directory) {
                      $$renderer5.push("<!--[-->");
                      Directory($$renderer5, {
                        name: "air",
                        icon: mdiFolder,
                        expanded: true,
                        children: ($$renderer6) => {
                          if (File2) {
                            $$renderer6.push("<!--[-->");
                            File2($$renderer6, { name: "air", icon: mdiCodeBraces });
                            $$renderer6.push("<!--]-->");
                          } else {
                            $$renderer6.push("<!--[!-->");
                            $$renderer6.push("<!--]-->");
                          }
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                    $$renderer5.push(` `);
                    if (Directory) {
                      $$renderer5.push("<!--[-->");
                      Directory($$renderer5, {
                        name: "bun",
                        icon: mdiFolder,
                        expanded: true,
                        children: ($$renderer6) => {
                          if (File2) {
                            $$renderer6.push("<!--[-->");
                            File2($$renderer6, { name: "bun", icon: mdiCodeBraces });
                            $$renderer6.push("<!--]-->");
                          } else {
                            $$renderer6.push("<!--[!-->");
                            $$renderer6.push("<!--]-->");
                          }
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            };
            File_tree($$renderer3, { children });
          }
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Install" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante i
            # or
            frizzante install
        `
          });
          $$renderer3.push(`<!----> <span>Installs Go and JavaScript packages from `);
          Inline_code($$renderer3, { source: "go.mod" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "app/package.json" });
          $$renderer3.push(`<!---->.</span> `);
          {
            let children = function($$renderer4, { Directory, File: File2 }) {
              if (Directory) {
                $$renderer4.push("<!--[-->");
                Directory($$renderer4, {
                  name: "app",
                  expanded: true,
                  children: ($$renderer5) => {
                    if (File2) {
                      $$renderer5.push("<!--[-->");
                      File2($$renderer5, { name: "package.json", icon: mdiCodeBraces });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
              $$renderer4.push(` `);
              if (File2) {
                $$renderer4.push("<!--[-->");
                File2($$renderer4, { name: "go.mod" });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            };
            File_tree($$renderer3, { children });
          }
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>JavaScript packages are installed using `);
              Inline_code($$renderer4, { source: ".gen/bun/bun" });
              $$renderer4.push(`<!----> by default. You can point to a custom
            Bun binary of your choice by setting `);
              Inline_code($$renderer4, { source: "--bun" });
              $$renderer4.push(`<!---->.</span> <span>For example, the following will install JavaScript packages using a `);
              Inline_code($$renderer4, { source: "~/.bun/bun binary" });
              $$renderer4.push(`<!----></span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=~/.bun/bun install" });
              $$renderer4.push(`<!----> <span>Alternatively you can also use a global binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=bun install" });
              $$renderer4.push(`<!----> <span>This will force the cli to use the binary present in your path.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Update" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante u
            # or
            frizzante update
        `
          });
          $$renderer3.push(`<!----> <span>Updates Go and JavaScript packages from `);
          Inline_code($$renderer3, { source: "go.mod" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "app/package.json" });
          $$renderer3.push(`<!---->.</span> `);
          {
            let children = function($$renderer4, { Directory, File: File2 }) {
              if (File2) {
                $$renderer4.push("<!--[-->");
                File2($$renderer4, { name: "go.mod" });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
              $$renderer4.push(` `);
              if (Directory) {
                $$renderer4.push("<!--[-->");
                Directory($$renderer4, {
                  name: "app",
                  expanded: true,
                  children: ($$renderer5) => {
                    if (File2) {
                      $$renderer5.push("<!--[-->");
                      File2($$renderer5, { name: "package.json", icon: mdiCodeBraces });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            };
            File_tree($$renderer3, { children });
          }
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>JavaScript packages are updated using `);
              Inline_code($$renderer4, { source: ".gen/bun/bun" });
              $$renderer4.push(`<!----> by default. You can point to a custom
            Bun binary of your choice by setting `);
              Inline_code($$renderer4, { source: "--bun" });
              $$renderer4.push(`<!----></span> <span>For example, the following will update JavaScript packages using a `);
              Inline_code($$renderer4, { source: "~/.bun/bun binary" });
              $$renderer4.push(`<!----></span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=~/.bun/bun update" });
              $$renderer4.push(`<!----> <span>Alternatively you can also use a global binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=bun update" });
              $$renderer4.push(`<!----> <span>This will force the cli to use the binary present in your path.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Package" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante p
            # or
            frizzante package
        `
          });
          $$renderer3.push(`<!----> <span>Runs `);
          Inline_code($$renderer3, { source: "vite build" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "vite build --ssr" });
          $$renderer3.push(`<!----> in order to package the the `);
          Inline_code($$renderer3, { source: "app" });
          $$renderer3.push(`<!----> directory into `);
          Inline_code($$renderer3, { source: "app/dist" });
          $$renderer3.push(`<!---->.</span> `);
          {
            let children = function($$renderer4, { Directory, File: File2 }) {
              if (Directory) {
                $$renderer4.push("<!--[-->");
                Directory($$renderer4, {
                  name: "app",
                  expanded: true,
                  children: ($$renderer5) => {
                    if (Directory) {
                      $$renderer5.push("<!--[-->");
                      Directory($$renderer5, {
                        name: "dist",
                        expanded: true,
                        children: ($$renderer6) => {
                          if (Directory) {
                            $$renderer6.push("<!--[-->");
                            Directory($$renderer6, {
                              name: "client",
                              expanded: true,
                              children: ($$renderer7) => {
                                if (Directory) {
                                  $$renderer7.push("<!--[-->");
                                  Directory($$renderer7, {
                                    name: "assets",
                                    expanded: true,
                                    children: ($$renderer8) => {
                                      if (File2) {
                                        $$renderer8.push("<!--[-->");
                                        File2($$renderer8, { name: "index-{hash}.css", icon: mdiCodeBraces });
                                        $$renderer8.push("<!--]-->");
                                      } else {
                                        $$renderer8.push("<!--[!-->");
                                        $$renderer8.push("<!--]-->");
                                      }
                                      $$renderer8.push(` `);
                                      if (File2) {
                                        $$renderer8.push("<!--[-->");
                                        File2($$renderer8, { name: "index-{hash}.js", icon: mdiCodeBraces });
                                        $$renderer8.push("<!--]-->");
                                      } else {
                                        $$renderer8.push("<!--[!-->");
                                        $$renderer8.push("<!--]-->");
                                      }
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$renderer7.push("<!--]-->");
                                } else {
                                  $$renderer7.push("<!--[!-->");
                                  $$renderer7.push("<!--]-->");
                                }
                                $$renderer7.push(` `);
                                if (File2) {
                                  $$renderer7.push("<!--[-->");
                                  File2($$renderer7, { name: "index.html", icon: mdiCodeBraces });
                                  $$renderer7.push("<!--]-->");
                                } else {
                                  $$renderer7.push("<!--[!-->");
                                  $$renderer7.push("<!--]-->");
                                }
                              },
                              $$slots: { default: true }
                            });
                            $$renderer6.push("<!--]-->");
                          } else {
                            $$renderer6.push("<!--[!-->");
                            $$renderer6.push("<!--]-->");
                          }
                          $$renderer6.push(` `);
                          if (File2) {
                            $$renderer6.push("<!--[-->");
                            File2($$renderer6, { name: "app.server.js", icon: mdiCodeBraces });
                            $$renderer6.push("<!--]-->");
                          } else {
                            $$renderer6.push("<!--[!-->");
                            $$renderer6.push("<!--]-->");
                          }
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            };
            File_tree($$renderer3, { children });
          }
          $$renderer3.push(`<!----> <span>The output contains a `);
          Inline_code($$renderer3, { source: "client" });
          $$renderer3.push(`<!----> directory which can be simply served as is to the client and
        a `);
          Inline_code($$renderer3, { source: "app.server.js" });
          $$renderer3.push(`<!----> file that can be executed on the server in order to render the contents of the application in advanced.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Your app directory is packaged using `);
              Inline_code($$renderer4, { source: ".gen/bun/bun" });
              $$renderer4.push(`<!----> by default. You can point to a custom
            Bun binary of your choice by setting `);
              Inline_code($$renderer4, { source: "--bun" });
              $$renderer4.push(`<!---->.</span> <br/> <br/> <span>For example, the following will package your app using a `);
              Inline_code($$renderer4, { source: "~/.bun/bun binary" });
              $$renderer4.push(`<!----></span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=~/.bun/bun package" });
              $$renderer4.push(`<!----> <span>Alternatively you can also use a global binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=bun package" });
              $$renderer4.push(`<!----> <span>This will force the cli to use the binary present in your path.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Package Watch" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, { lang: "sh", source: "frizzante package-watch" });
          $$renderer3.push(`<!----> <span>Runs `);
          Inline_code($$renderer3, { source: "frizzante package" });
          $$renderer3.push(`<!----> in watch mode.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->This will detect changes made only in the `);
              Inline_code($$renderer4, { source: "app" });
              $$renderer4.push(`<!----> directory.`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Dev" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante d
            # or
            frizzante dev
        `
          });
          $$renderer3.push(`<!----> <span>Runs <a target="_blank" href="https://github.com/air-verse/air">Air</a> and `);
          Inline_code($$renderer3, { source: "frizzante package-watch" });
          $$renderer3.push(`<!----> in parallel.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>The cli uses `);
              Inline_code($$renderer4, { source: ".gen/air/air" });
              $$renderer4.push(`<!----> by default. You can point to a custom Air binary of your choice
            by setting `);
              Inline_code($$renderer4, { source: "--air" });
              $$renderer4.push(`<!---->.</span> <br/> <br/> <span>For example, the following will run air using a `);
              Inline_code($$renderer4, { source: "~/.air/air" });
              $$renderer4.push(`<!----> binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --air=~/.air/air dev" });
              $$renderer4.push(`<!----> <span>You can also use a global binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --air=air dev" });
              $$renderer4.push(`<!----> <span>Or even use custom paths for both Air and Bun.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --air=air --bun=bun dev" });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Build" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante b
            # or
            frizzante build
        `
          });
          $$renderer3.push(`<!----> <span>Runs `);
          Inline_code($$renderer3, { source: "frizzante package" });
          $$renderer3.push(`<!----> and then builds the Go program in `);
          Inline_code($$renderer3, { source: ".gen/bin/app" });
          $$renderer3.push(`<!---->.</span> `);
          {
            let children = function($$renderer4, { Directory, File: File2 }) {
              if (Directory) {
                $$renderer4.push("<!--[-->");
                Directory($$renderer4, {
                  name: ".gen",
                  expanded: true,
                  children: ($$renderer5) => {
                    if (Directory) {
                      $$renderer5.push("<!--[-->");
                      Directory($$renderer5, {
                        name: "bin",
                        expanded: true,
                        children: ($$renderer6) => {
                          if (File2) {
                            $$renderer6.push("<!--[-->");
                            File2($$renderer6, { name: "app", icon: mdiApplication });
                            $$renderer6.push("<!--]-->");
                          } else {
                            $$renderer6.push("<!--[!-->");
                            $$renderer6.push("<!--]-->");
                          }
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            };
            File_tree($$renderer3, { children });
          }
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Check" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, { lang: "sh", source: "frizzante --check" });
          $$renderer3.push(`<!----> <span>Runs `);
          Inline_code($$renderer3, { source: "eslint" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "svelte-check" });
          $$renderer3.push(`<!----> in your `);
          Inline_code($$renderer3, { source: "app" });
          $$renderer3.push(`<!----> directory in order to detect code syntax and style errors.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Checks are run using `);
              Inline_code($$renderer4, { source: ".gen/bun/bun" });
              $$renderer4.push(`<!----> by default. You can point to a custom Bun binary of
            your choice by setting `);
              Inline_code($$renderer4, { source: "--bun" });
              $$renderer4.push(`<!---->.</span> <span>For example, the following will check your app using a `);
              Inline_code($$renderer4, { source: "~/.bun/bun" });
              $$renderer4.push(`<!----> binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=~/.bun/bun --check" });
              $$renderer4.push(`<!----> <span>Alternatively you can also use a global binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=bun --check" });
              $$renderer4.push(`<!----> <span>This will force the cli to use the binary present in your path.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Format" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante f
            # or
            frizzante format
        `
          });
          $$renderer3.push(`<!----> <span>This will run `);
          Inline_code($$renderer3, { source: "go fmt ./..." });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "prettier --write ." });
          $$renderer3.push(`<!----> in your `);
          Inline_code($$renderer3, { source: "app" });
          $$renderer3.push(`<!----> directory.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Prettier is run using `);
              Inline_code($$renderer4, { source: ".gen/bun/bun" });
              $$renderer4.push(`<!----> by default. You can point to a custom Bun binary of
            your choice by setting `);
              Inline_code($$renderer4, { source: "--bun" });
              $$renderer4.push(`<!---->.</span> <span>For example, the following will format your app using a `);
              Inline_code($$renderer4, { source: "~/.bun/bun" });
              $$renderer4.push(`<!----> binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=~/.bun/bun format" });
              $$renderer4.push(`<!----> <span>Alternatively you can also use a global binary.</span> `);
              Code($$renderer4, { lang: "sh", source: "frizzante --bun=bun format" });
              $$renderer4.push(`<!----> <span>This will force the cli to use the binary present in your path.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Clean Project" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, { lang: "sh", source: "frizzante clean-project" });
          $$renderer3.push(`<!----> <span>Removes directories `);
          Inline_code($$renderer3, { source: ".gen" });
          $$renderer3.push(`<!---->, `);
          Inline_code($$renderer3, { source: "app/dist" });
          $$renderer3.push(`<!---->, `);
          Inline_code($$renderer3, { source: "app/.vite" });
          $$renderer3.push(`<!---->, `);
          Inline_code($$renderer3, { source: "app/node_modules" });
          $$renderer3.push(`<!---->, `);
          Inline_code($$renderer3, { source: "cover.html" });
          $$renderer3.push(`<!---->, `);
          Inline_code($$renderer3, { source: "cover.out" });
          $$renderer3.push(`<!----></span> `);
          Title($$renderer3, { text: "Reset" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, { lang: "sh", source: "frizzante reset" });
          $$renderer3.push(`<!----> <span>Deletes frizzante\u2019s global cache.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>The global cache is located at `);
              Inline_code($$renderer4, { source: "~/.frizzante" });
              $$renderer4.push(`<!----> by default.</span> `);
              Tip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>You can configure this location by setting `);
                  Inline_code($$renderer5, { source: "FRIZZANTE_HOME" });
                  $$renderer5.push(`<!----> to whatever path you want in your environment variables.</span>`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Strict" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante -s
            # or
            frizzante --strict
        `
          });
          $$renderer3.push(`<!----> <span>Normally `);
          Inline_code($$renderer3, { source: "frizzante" });
          $$renderer3.push(`<!----> will prompt the user for required parameters whenever they're being passed
        in, the `);
          Inline_code($$renderer3, { source: "--strict" });
          $$renderer3.push(`<!----> flag disables this behavior and instead defaults to stopping the program whenever a required parameter is missing.</span> `);
          Tip($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>This is useful for ci/cd pipelines, automated scripts, batch operations and so on.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Version" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante v
            # or
            frizzante version
        `
          });
          $$renderer3.push(`<!----> <span>Displays the version of the binary.</span> `);
          Title($$renderer3, { text: "Help" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "sh",
            source: `
            frizzante h
            # or
            frizzante help
        `
          });
          $$renderer3.push(`<!----> <span>Shows the complete list of available commands.</span> `);
          Title($$renderer3, { text: "Interactive Mode" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, { lang: "sh", source: "frizzante" });
          $$renderer3.push(`<!----> <span>Running `);
          Inline_code($$renderer3, { source: "frizzante" });
          $$renderer3.push(`<!----> without any flags starts an interactive menu where you can select commands
        using arrow keys.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>This is useful if</span> <ul><li>you\u2019re learning the available commands</li> <li>you\u2019re not sure which command to use</li> <li>you prefer a guided interface</li></ul>`);
            }
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
function Contributing($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Contributing" },
            { shift: 0, text: "Clone Repository" },
            { shift: 0, text: "Create Branch" },
            { shift: 0, text: "Coding Standards" },
            { shift: 1, text: "Export Everything" },
            { shift: 1, text: "Data & Logic" },
            { shift: 0, text: "Pull Requests" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Issues", href: base("/issues", { dev }) },
          next: { label: "Faq", href: base("/faq", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Contributing",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Contributing" });
          $$renderer3.push(`<!----> <span>This document describes the full process of setting up a fully working local development environment and
        submitting your first contribution.</span> `);
          Title($$renderer3, { text: "Clone Repository" });
          $$renderer3.push(`<!----> <span>Clone the frizzante repository from GitHub.</span> `);
          Code($$renderer3, { source: "git clone https://github.com/razshare/frizzante" });
          $$renderer3.push(`<!----> `);
          Tip($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>If you don\u2019t have direct access to it you will need to fork your own frizzante repository.</span> <br/> <span>Then when you\u2019re done with your changes you will need to submit a pull request.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Create Branch" });
          $$renderer3.push(`<!----> <span>Create a new branch and give it a name that describes your changes.</span> `);
          Code($$renderer3, { source: "git checkout -b feature/some-feature" });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Coding Standards" });
          $$renderer3.push(`<!----> <span>Submitted code must follow a few rules.</span> `);
          Title($$renderer3, { type: "h3", text: "Export Everything" });
          $$renderer3.push(`<!----> <span>Export Everything</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            type MyStruct struct {
                Field1 string
                Field2 int
                Field3 bool
                Field4 any
            }
            func MyFunction(){}
            const Planet = "Earth"
            var Name = "World"
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { type: "h3", text: "Data & Logic" });
          $$renderer3.push(`<!----> <span>Data and logic must be separated, don\u2019t define receiver functions unless you\u2019re forced to by some third party
        package.</span> <br/> <span>This type of code should be avoided</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            type MyStruct struct {
                field1 string
            }
            func (str *MyStruct) MyFunction(){
                str.field1 = "Hello!"
            }
        `
          });
          $$renderer3.push(`<!----> <span>and be instead converted into</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            type MyStruct struct {
                Field1 string
            }
            func MyFunction(str *MyStruct){
                str.Field1 = "Hello!"
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Pull Requests" });
          $$renderer3.push(`<!----> <span>When you\u2019re done with your changes you can submit a pull request in order to implement them into frizzante.</span>`);
        }
      });
    }
  });
}
var $$css$2 = {
  hash: "svelte-1g4xjg9",
  code: ':root {--indexed-section-circle-size: 1rem;--indexed-section-circle-background: rgba(0, 0, 0, 0.3);--indexed-section-link-background: rgba(0, 0, 0, 0.3);--indexed-section-link-width: 0.3rem;--indexed-section-gap: 0.3rem;}.keyed-section.svelte-1g4xjg9 {display:grid;gap:var(--indexed-section-gap);grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;grid-template-areas:"badge content"\n            "link content"\n            "empty empty";}.badge.svelte-1g4xjg9 {grid-area:badge;position:relative;justify-self:center;align-self:center;}.badge.svelte-1g4xjg9 > .key:where(.svelte-1g4xjg9) {display:grid;justify-items:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0;}.badge.svelte-1g4xjg9 > .circle:where(.svelte-1g4xjg9) {position:relative;background:var(--indexed-section-circle-background);border-radius:50%;padding:var(--indexed-section-circle-size);}.content.svelte-1g4xjg9 {grid-area:content;padding-top:0.3rem; /* A small padding because OCD. */overflow:auto;}.link.svelte-1g4xjg9 {grid-area:link;position:relative;display:grid;justify-items:center;align-items:center;}.link.svelte-1g4xjg9 > .bar:where(.svelte-1g4xjg9) {position:absolute;top:0;bottom:0;width:var(--indexed-section-link-width);border-radius:var(--indexed-section-link-width);background:var(--indexed-section-link-background);}.link.hidden.svelte-1g4xjg9 {display:none;}'
};
function Keyed_section($$renderer, $$props) {
  $$renderer.global.css.add($$css$2);
  $$renderer.component(($$renderer2) => {
    let { key, description, children, noLink = false } = $$props;
    $$renderer2.push(`<div class="keyed-section svelte-1g4xjg9"><div class="badge svelte-1g4xjg9"><span class="key svelte-1g4xjg9">${escape_html(key[0])}</span> <div class="circle svelte-1g4xjg9"></div></div> <div class="content svelte-1g4xjg9">`);
    Title($$renderer2, { type: "h6", text: description, noMargin: true });
    $$renderer2.push(`<!----> `);
    children($$renderer2);
    $$renderer2.push(`<!----></div> <div${attr_class("link svelte-1g4xjg9", void 0, { "hidden": noLink })}><div class="bar svelte-1g4xjg9"></div></div></div>`);
  });
}
function Docker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Docker" },
            { shift: 0, text: "Get Started" },
            { shift: 1, text: "Create a new container" },
            { shift: 1, text: "Start the container" },
            {
              shift: 1,
              text: "Attach to this container with your IDE or directly with a shell"
            },
            { shift: 1, text: "Configure project" },
            { shift: 1, text: "Start development" },
            { shift: 1, text: "Build" },
            { shift: 0, text: "Production with Docker" },
            {
              shift: 1,
              text: "Build and run production binary inside container"
            },
            { shift: 1, text: "Build production Docker image" },
            { shift: 1, text: "Use Docker Compose for production" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: {
            label: "Todos Example",
            href: base("/todos_example", { dev })
          },
          next: { label: "Issues", href: base("/issues", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Docker",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Docker" });
          $$renderer3.push(`<!----> <span>A Docker solution is available for both development and production deployment.</span> `);
          Title($$renderer3, { type: "h3", text: "Get Started" });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "1",
            description: "Create a new container.",
            children: ($$renderer4) => {
              Code($$renderer4, {
                lang: "sh",
                source: `
                git clone git@github.com:cmjoseph07/frizzante-docker.git
                cd frizzante-docker
                docker compose build --pull --no-cache
            `
              });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "2",
            description: "Start the container.",
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "sh", source: "docker compose up" });
              $$renderer4.push(`<!----> `);
              Note($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>First launch might take a minute or two because the project needs to configure itself installing Air,
                Bun and code dependencies.</span>`);
                }
              });
              $$renderer4.push(`<!----> `);
              Tip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>You can send the container in the background with</span> `);
                  Code($$renderer5, { lang: "sh", source: "docker compose up -d" });
                  $$renderer5.push(`<!----> <span>and you can stop it with</span> `);
                  Code($$renderer5, { lang: "sh", source: "docker compose down --remove-orphans" });
                  $$renderer5.push(`<!---->`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "3",
            description: "Attach to this container with your IDE or directly with a shell.",
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "sh", source: "docker exec -it frizzante-start sh" });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "4",
            description: "Configure project.",
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "sh", source: "docker exec -it frizzante-start sh" });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "5",
            description: "Start development.",
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "sh", source: "docker exec -it frizzante-start sh" });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "6",
            description: "Build.",
            noLink: true,
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "sh", source: "frizzante --build" });
              $$renderer4.push(`<!----> <span>This will create a `);
              Inline_code($$renderer4, { source: ".gen/bin/app" });
              $$renderer4.push(`<!----> standalone executable.</span> `);
              {
                let children = function($$renderer5, { Directory, File: File2 }) {
                  if (Directory) {
                    $$renderer5.push("<!--[-->");
                    Directory($$renderer5, {
                      name: ".gen",
                      children: ($$renderer6) => {
                        if (Directory) {
                          $$renderer6.push("<!--[-->");
                          Directory($$renderer6, {
                            name: "bin",
                            children: ($$renderer7) => {
                              if (File2) {
                                $$renderer7.push("<!--[-->");
                                File2($$renderer7, { name: "app", icon: mdiApplication });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push("<!--]-->");
                        } else {
                          $$renderer6.push("<!--[!-->");
                          $$renderer6.push("<!--]-->");
                        }
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                };
                File_tree($$renderer4, { children });
              }
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Production with Docker" });
          $$renderer3.push(`<!----> <span>You have different options for deploying to the production environment using docker.</span> <br/> <br/> `);
          Keyed_section($$renderer3, {
            key: "A",
            description: "Build and run production binary inside container.",
            children: ($$renderer4) => {
              Code($$renderer4, {
                source: `
                # Inside the container
                frizzante --build
                ./.gen/bin/app
            `
              });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "B",
            description: "Build production Docker image.",
            children: ($$renderer4) => {
              Code($$renderer4, {
                source: `
                docker build --target frizzante_prod -t my-app:prod .
                docker run -p 8080:8080 my-app:prod
            `
              });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "C",
            description: "Use Docker Compose for production.",
            noLink: true,
            children: ($$renderer4) => {
              Code($$renderer4, {
                source: "docker compose -f compose.yaml -f compose.prod.yaml up -d --build"
              });
            }
          });
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>For more details see the official <a target="_blank" href="https://github.com/cmjoseph07/frizzante-docker">Frizzante Docker</a> made by <a target="_blank" href="https://github.com/cmjoseph07">@cmjoseph07</a>.</span>`);
            }
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
function Faq($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Faq" },
            { shift: 0, text: "Why doesn\u2019t Frizzante have middleware?" },
            { shift: 1, text: "Middleware Implementation" },
            { shift: 1, text: "Middleware Usage" },
            {
              shift: 0,
              text: "Can I use Frizzante with other frontend frameworks?"
            }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Contributing", href: base("/contributing", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Faq",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Faq" });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { type: "h3", text: "Why doesn\u2019t Frizzante have middleware?" });
          $$renderer3.push(`<!----> <span>Frizzante intentionally uses guards instead of middleware.</span> <br/> <span>Middleware have some limitations.</span> <br/> <ul><li>All middleware handles must be invoked for each request</li> <li>Some middleware may contain path-checking logic while others may not, which introduces ambiguity and more
            details to remember as a developer</li> <li>Managing middleware execution order across different routes is complex</li></ul> <br/> <span>While guards have some advantages.</span> <br/> <ul><li><strong>Efficient</strong> <span>-</span> <span>each route has a defined slice of guards and only those guards will execute each time the route is
                matched</span></li> <li><strong>Explicit</strong> <span>-</span> <span>since each route explicitly defines its guards, you can see exactly which guards execute for any route
                just by looking at the slice</span></li> <li><strong>Composable</strong> <span>-</span> <span>in order to add a new guard you can just add a guard to the route\u2019s guards slice</span></li> <li><strong>Easy to order</strong> <span>-</span> <span>it\u2019s easy to define the order in which guards execute, you can simply move them around in the route\u2019s
                guards slice</span></li></ul> <span>For more details see the <a${attr("href", base("/guards", { dev }))}>guards page</a>.</span> `);
          Title($$renderer3, { type: "h5", text: "Middleware Implementation" });
          $$renderer3.push(`<!----> <span>If you really want middleware-like behavior, you can easily implement it in your own project.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package middlewares

            import "main/lib/core/clients"

            type Hook func(client *clients.Client, next func()) // Defines a hook function type which will be used by the middleware.

            type Middleware struct {                            // Defines a structure holding multiple hooks.
                Hooks []Hook                                    // Defines the actual hooks slice.
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package middlewares

            import (
                "main/lib/core/clients"
                "main/lib/core/routes"
            )

            func Apply(middleware *Middleware, routes []routes.Route) {
                for _, route := range routes {                               // For each route...
                    handler := r.Handler                                     // ...saves the route handler for later use.
                    route.Handler = func(client *clients.Client) {           // Assigns a new wrapper route handler.
                        var quit bool                                        // Creates flag used to interrupt the chain.
                        for _, hook := range middleware.Hooks {              // Iterate over hooks.
                            quit = true                                      // Prepares to quit.
                            if hook(client, func() { quit = false }); quit { // Invokes hook and checks if route should quit.
                                return                                       // Quits.
                            }
                        }
                        handler(client)                                      // Invokes the actual route handler.
                    }
                }
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Your implementation may vary.</span> <br/> <span>This implementation doesn\u2019t directly invoke the next hook, instead it sets a flag.</span> <br/> <span>This should keep your stack size smaller and thus more readable.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { type: "h5", text: "Middleware Usage" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package main

            import (
                "embed"
                "main/lib/core/clients"
                "main/lib/core/routes"
                "main/lib/core/servers"
                "main/lib/core/view/ssr"
                "main/lib/middlewares"
                "main/lib/routes/fallback"
                "main/lib/routes/todos"
                "main/lib/routes/welcome"
                "os"
            )

            //go:embed app/dist
            var efs embed.FS
            var server = servers.New()

            var middleware = &middlewares.Middleware{
                Hooks: []middleware.Hook{
                    func(client *clients.Client, next func()) {
                        // Hook logic goes here.
                    },
                },
            }

            func main() {
                defer servers.Start(server)
                defer middlewares.Apply(middleware, server.Routes) // Applies middleware to server routes.
                                                                   // Remember that deferred functions are executed in reverse,
                                                                   // so this line will execute before the server starts.
                server.Efs = efs                                   // Sets embedded file system.
                server.Routes = []routes.Route{
                    {Pattern: "GET /", Handler: fallback.View},
                    {Pattern: "GET /welcome", Handler: welcome.View},
                    {Pattern: "GET /todos", Handler: todos.View},
                    {Pattern: "GET /check", Handler: todos.Check},
                    {Pattern: "GET /uncheck", Handler: todos.Uncheck},
                    {Pattern: "GET /add", Handler: todos.Add},
                    {Pattern: "GET /remove", Handler: todos.Remove},
                }
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, {
            type: "h3",
            text: "Can I use Frizzante with other frontend frameworks?"
          });
          $$renderer3.push(`<!----> <span>Yes you can, as long as Vite supports your framework.</span> <br/> <span>All you need to do is configure your `);
          Inline_code($$renderer3, { source: "app/app.client.ts" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "app/app.server.ts" });
          $$renderer3.push(`<!----> to render your framework.</span> <br/> <span>You can find a Vue3 example <a target="_blank" href="https://github.com/razshare/frizzante-example-vue3">here</a>.</span>`);
        }
      });
    }
  });
}
var $$css$1 = {
  hash: "svelte-13vzno7",
  code: ':root {--full-screen-menu-padding: 1rem;--full-screen-menu-content-padding: 1rem;}.full-screen-menu.svelte-13vzno7 {position:fixed;left:0;top:0;right:0;bottom:0;overflow:hidden;display:grid;padding:var(--full-screen-menu-padding);grid-template-rows:auto 1fr;grid-template-areas:"full-screen-menu-navbar"\n            "full-screen-menu-content";}.full-screen-menu-navbar.svelte-13vzno7 {grid-area:full-screen-menu-navbar;}.full-screen-menu-content.svelte-13vzno7 {grid-area:full-screen-menu-content;padding:var(--full-screen-menu-content-padding);overflow:auto;}'
};
function Full_screen_menu($$renderer, $$props) {
  $$renderer.global.css.add($$css$1);
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    let searchQuery = "";
    let searchFocused = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="full-screen-menu svelte-13vzno7"><div class="full-screen-menu-content svelte-13vzno7">`);
      Left_sidebar($$renderer3, { dev });
      $$renderer3.push(`<!----></div> <div class="full-screen-menu-navbar svelte-13vzno7">`);
      Navbar($$renderer3, {
        noMenuLink: true,
        dev,
        get search() {
          return searchQuery;
        },
        set search($$value) {
          searchQuery = $$value;
          $$settled = false;
        },
        get focused() {
          return searchFocused;
        },
        set focused($$value) {
          searchFocused = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Get_started($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    console.log({ dev });
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Get Started" },
            { shift: 1, text: "Install frizzante" },
            { shift: 1, text: "Create project" },
            { shift: 1, text: "Configure project" },
            { shift: 1, text: "Start development" },
            { shift: 1, text: "Build" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, { next: { label: "Basics", href: base("/basics", { dev }) } });
      };
      Page($$renderer2, {
        title: "Get Started",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Get Started" });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "1",
            description: "Install frizzante.",
            children: ($$renderer4) => {
              Code($$renderer4, {
                lang: "bash",
                source: "go install github.com/razshare/frizzante@latest"
              });
              $$renderer4.push(`<!----> `);
              Note($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>Remember to add Go binaries to your path.</span> `);
                  Code($$renderer5, {
                    lang: "bash",
                    source: ["export GOPATH=$HOME/go", "export PATH=$PATH:$GOPATH/bin"].join("\n")
                  });
                  $$renderer5.push(`<!---->`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "2",
            description: "Create project.",
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "bash", source: "frizzante create my_project" });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "3",
            description: "Configure project.",
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "bash", source: "frizzante configure" });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "4",
            description: "Start development.",
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "bash", source: "frizzante dev" });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "5",
            description: "Build.",
            noLink: true,
            children: ($$renderer4) => {
              Code($$renderer4, { lang: "bash", source: "frizzante build" });
              $$renderer4.push(`<!----> <span>This will create a</span> `);
              Inline_code($$renderer4, { source: ".gen/bin/app" });
              $$renderer4.push(`<!----> <span>standalone executable.</span> <br/> <br/> `);
              {
                let children = function($$renderer5, { Directory, File: File2 }) {
                  if (Directory) {
                    $$renderer5.push("<!--[-->");
                    Directory($$renderer5, {
                      name: ".gen",
                      expanded: true,
                      children: ($$renderer6) => {
                        if (Directory) {
                          $$renderer6.push("<!--[-->");
                          Directory($$renderer6, {
                            name: "bin",
                            expanded: true,
                            children: ($$renderer7) => {
                              if (File2) {
                                $$renderer7.push("<!--[-->");
                                File2($$renderer7, { name: "app", icon: mdiPackage });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push("<!--]-->");
                        } else {
                          $$renderer6.push("<!--[!-->");
                          $$renderer6.push("<!--]-->");
                        }
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                };
                File_tree($$renderer4, { children });
              }
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
var diagram1$1 = "/frizzante-docs-using-snapshots/assets/guards_diagram_1.svg";
var diagram2 = "/frizzante-docs-using-snapshots/assets/guards_diagram_2.svg";
function Guards($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Guards" },
            { shift: 0, text: "Composition" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: {
            label: "Server Sent Events",
            href: base("/server_sent_events", { dev })
          },
          next: { label: "Views", href: base("/views", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Guards",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Guards" });
          $$renderer3.push(`<!----> <span>A guard is an object that is composed of an optional name and a required handler.</span> <br/> <span>You can add guards to your routes in order to protect them.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            server.Routes = []routes.Route{
                {
                    Pattern: "GET /api/xml/data",
                    Handler: data.Get,
                    Guards: []guards.Guards{
                        {Name: "jsonless", Handler: func(client *clients.Client, allow func()) {
                            if receive.ContentType(client) == "application/json" {
                                return
                            }
                            allow()
                        }},
                    },
                },
            }
        `
          });
          $$renderer3.push(`<!----> <span>Guards will block all incoming requests by default, you must call `);
          Inline_code($$renderer3, { source: "allow()" });
          $$renderer3.push(`<!----> to explicitly allow the request through.</span> <br/> <span>In this example, `);
          Inline_code($$renderer3, { source: "GET /api/xml/data" });
          $$renderer3.push(`<!----> the route will decline requests with content type `);
          Inline_code($$renderer3, { source: "application/json" });
          $$renderer3.push(`<!----></span> `);
          Image($$renderer3, { src: diagram1$1, width: "100%" });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Composition" });
          $$renderer3.push(`<!----> <span>You can compose multiple guards in order to create more advanced restrictions.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            var authenticate = guards.Guard{Name: "authenticate", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.Verified && time.Since(session.LastActivity) <= 30*time.Minute {
                    allow()
                    return
                }
                send.Status(client, 401)
                send.Message(client, "not authenticated")
            }}
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            var authorize = guards.Guard{Name: "authorize", Handler: func(client *clients.Client, allow func()) {
                session := sessions.Start(receive.SessionId(client))
                if session.UserId == receive.path("user_id") {
                    allow()
                    return
                }
                send.Status(client, 403)
                send.Message(client, "missing permissions")
            }}
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            server.Routes = []routes.Route{
                {Pattern: "GET /public", Handler: public.Get},
                {Pattern: "GET /dashboard", Handler: dashboard.Get, Guards: []guards.Guard{authenticate}},
                {Pattern: "GET /user/{user_id}/settings", Handler: settings.Get, Guards: []guards.Guard{authenticate, authorize}},
                {Pattern: "DELETE /user/{user_id}", Handler: user.Delete, Guards: []guards.Guard{authenticate, authorize}},
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Image($$renderer3, { src: diagram2, width: "100%" });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
function Issues($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Issues" },
            { shift: 0, text: "Reporting a Bug" },
            { shift: 0, text: "Requesting a Feature" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Docker", href: base("/docker", { dev }) },
          next: { label: "Contributing", href: base("/contributing", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Issues",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Issues" });
          $$renderer3.push(`<!----> <span>This document is a guide on how to submit bug reports and feature requests.</span> `);
          Title($$renderer3, { text: "Reporting a Bug" });
          $$renderer3.push(`<!----> <span>Make sure to read the <a${attr("href", base("/get_started", { dev }))}>documentation</a> before submitting a bug report.</span> <br/> <span>Bug reports can be submitted using the <a target="_blank" href="https://github.com/razshare/frizzante/issues/new?template=bug_report.md">GitHub issue tracker</a>.</span> <br/> <span>When reporting a bug, make sure to include a link to a repository isolating the issue and the steps to reproduce
        said issue.</span> `);
          Title($$renderer3, { text: "Requesting a Feature" });
          $$renderer3.push(`<!----> <span>Make sure to read the <a${attr("href", base("/get_started", { dev }))}>documentation</a> before submitting a feature request.</span> <br/> <span>Feature requests can be submitted using the <a target="_blank" href="https://github.com/razshare/frizzante/issues/new?template=feature_request.md"><span>GitHub issue tracker</span></a>.</span>`);
        }
      });
    }
  });
}
function Server_sent_events($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, { items: [{ shift: 0, text: "Server Sent Events" }] });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Web Sockets", href: base("/web_sockets", { dev }) },
          next: { label: "Guards", href: base("/guards", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Server Sent Events",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Server Sent Events" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.SseUpgrade()" });
          $$renderer3.push(`<!----> to upgrade the connection to server sent events.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `routes.Route{Pattern: "GET /sse", Handler: welcome.View}`
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
                "time"
            )

            func View(client *clients.Client) {
                alive := receive.IsAlive(client)    // Tracks request status.
                event := send.SseUpgrade(client)    // Sends sse upgrade.
                for *alive {                        // Loops until cancellation.
                    event("channel-1")              // Switches to "channel-1".
                    send.Message(client, "Hello 1") // Sends message.
                    event("channel-2")              // Switches to "channel-2".
                    send.Message(client, "Hello 2") // Sends message.
                    time.Sleep(time.Second)         // Sleeps for 1 second.
                }
            }
        `
          });
          $$renderer3.push(`<!----> <span>Then consume the stream on the client.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
        ${"<"}script lang="ts">
            const messages: string[] = $state([]) // Creates reactive list of messages.
            const socket = new WebSocket("/ws")   // Connects to handler.
            socket.addEventListener("message", function listen(event:MessageEvent) {
                messages.push(event.data)         // Appends incoming messages to the 
                                                  // reactive list of messages for later use.
            })
            socket.send("Hello")                  // Sends message.
        <\/script>

        <Title  text="Messages"/>
        {#each messages as message, id (id)}      <!-- Iterates the list of messages. -->
            <div>{message}</div>                  <!-- Renders message. -->
        {/each}
    `
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
function Snapshots($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, { items: [{ shift: 0, text: "Snapshots" }] });
        $$renderer3.push(`<!----> `);
        Right_sidebar($$renderer3, { items: [{ shift: 1, text: "List statics" }] });
        $$renderer3.push(`<!----> `);
        Right_sidebar($$renderer3, { items: [{ shift: 1, text: "Start the application" }] });
        $$renderer3.push(`<!----> `);
        Right_sidebar($$renderer3, { items: [{ shift: 2, text: "Start development server" }] });
        $$renderer3.push(`<!----> `);
        Right_sidebar($$renderer3, { items: [{ shift: 2, text: "Start production server" }] });
        $$renderer3.push(`<!----> `);
        Right_sidebar($$renderer3, {
          items: [
            { shift: 2, text: "Start development server using makefile" }
          ]
        });
        $$renderer3.push(`<!----> `);
        Right_sidebar($$renderer3, { items: [{ shift: 1, text: "Snapshot" }] });
        $$renderer3.push(`<!---->`);
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: {
            label: "Type Definitions",
            href: base("/type_definitions", { dev })
          },
          next: {
            label: "Todos Example",
            href: base("/todos_example", { dev })
          }
        });
      };
      Page($$renderer2, {
        title: "Snapshots",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Snapshots" });
          $$renderer3.push(`<!----> <span>You can take a snapshot of a server using the cli and statically generate your website.</span> <br/> <span>This technique is also known as <a target="_blank" href="https://en.wikipedia.org/wiki/Static_site_generator"><span>SSG, Static Site Generation</span></a>.</span> <br/> <br/> `);
          Keyed_section($$renderer3, {
            key: "1",
            description: "List statics",
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Before taking a snapshot of your server, you need to list the static routes you would like to snapshot using
            a server route.</span> <br/> <span>You can do this by hand</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                package main

                import (
                    "embed"
                    "log"

                    "main/lib/core/clients"
                    "main/lib/core/routes"
                    "main/lib/core/send"
                    "main/lib/core/servers"
                    "main/lib/core/ssr"
                    "main/lib/routes/fallback"
                    "main/lib/routes/about"
                    "main/lib/routes/projects"
                )

                //go:generate frizzante clean
                //go:generate frizzante configure
                //go:generate frizzante generate types
                //go:generate frizzante package
                //go:embed app/dist
                var efs embed.FS
                var server = servers.New()

                func main() {
                    server.Efs = efs
                    server.Render = ssr.New(1)
                    server.Routes = []routes.Route{
                        {Pattern: "GET /", Handler: fallback.View},
                        {Pattern: "GET /about", Handler: about.View},
                        {Pattern: "GET /projects", Handler: projects.View},
                        {Pattern: "GET /@statics", Handler: func(client *clients.Client) {
                            send.Json(client, []string{ // <======= Manually listing all routes.
                                "/",
                                "/about",
                                "/projects",
                            })
                        }},
                    }
                    if err := servers.Start(server); err != nil {
                        log.Fatal(err)
                    }
                }
            `
              });
              $$renderer4.push(`<!----> <span>or you can use `);
              Inline_code($$renderer4, { source: "statics.New()" });
              $$renderer4.push(`<!---->.</span> <br/> <span>It will generate a route using the given `);
              Inline_code($$renderer4, { source: "pattern" });
              $$renderer4.push(`<!---->; the resulting route will list all
            available GET routes for the given `);
              Inline_code($$renderer4, { source: "server" });
              $$renderer4.push(`<!----> as `);
              Inline_code($$renderer4, { source: "application/json" });
              $$renderer4.push(`<!---->.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                package main

                import (
                    "embed"
                    "log"

                    "main/lib/core/routes"
                    "main/lib/core/routes/statics"
                    "main/lib/core/servers"
                    "main/lib/core/ssr"
                    "main/lib/routes/about"
                    "main/lib/routes/fallback"
                    "main/lib/routes/projects"
                )

                //go:generate frizzante clean
                //go:generate frizzante configure
                //go:generate frizzante generate types
                //go:generate frizzante package
                //go:embed app/dist
                var efs embed.FS
                var server = servers.New()

                func main() {
                    server.Efs = efs
                    server.Render = ssr.New(1)
                    server.Routes = []routes.Route{
                        {Pattern: "GET /", Handler: fallback.View},
                        {Pattern: "GET /about", Handler: about.View},
                        {Pattern: "GET /projects", Handler: projects.View},
                        statics.New("GET /@statics", server), // <========== This will automatically generate a route that 
                                                              //             lists all static routes of the a given server.
                    }
                    if err := servers.Start(server); err != nil {
                        log.Fatal(err)
                    }
                }

            `
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "2",
            description: "Start the application",
            children: ($$renderer4) => {
              $$renderer4.push(`<span>It doesn't matter how you start the application, you can do it in development mode, in production mode or
            whatever other mode you're using.</span> <br/> <span>All that matters is that `);
              Inline_code($$renderer4, { source: "GET /@statics" });
              $$renderer4.push(`<!----> is reachable.</span> <br/> <br/> `);
              Keyed_section($$renderer4, {
                key: "A",
                description: "Start development server",
                children: ($$renderer5) => {
                  Code($$renderer5, { lang: "bash", source: "frizzante dev" });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Keyed_section($$renderer4, {
                key: "B",
                description: "Start production server",
                children: ($$renderer5) => {
                  Code($$renderer5, { lang: "bash", source: "frizzante build && ./gen/bin/app" });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Keyed_section($$renderer4, {
                key: "C",
                description: "Start development server using makefile",
                noLink: true,
                children: ($$renderer5) => {
                  Code($$renderer5, { lang: "bash", source: "make dev" });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "3",
            description: "Snapshot",
            noLink: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Run the frizzante cli, point it to the `);
              Inline_code($$renderer4, { source: "GET /@statics" });
              $$renderer4.push(`<!----> route and give it an output directory.</span> `);
              Code($$renderer4, {
                lang: "bash",
                source: "frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot"
              });
              $$renderer4.push(`<!----> <span>This will retrieve the list of static routes from `);
              Inline_code($$renderer4, { source: "http://127.0.0.1:8080/@statics" });
              $$renderer4.push(`<!----> and generate the output in `);
              Inline_code($$renderer4, { source: "./.gen/snapshot" });
              $$renderer4.push(`<!---->.</span> `);
              Tip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>The default frizzante project comes with a `);
                  Inline_code($$renderer5, { source: "makefile" });
                  $$renderer5.push(`<!----> which already defines a shortcut `);
                  Code($$renderer5, {
                    lang: "makefile",
                    source: `
                        snapshot:
                            frizzante generate snapshot http://127.0.0.1:8080/@statics .gen/snapshot
                    `
                  });
                  $$renderer5.push(`<!----> so you could also run `);
                  Code($$renderer5, { source: "make snapshot" });
                  $$renderer5.push(`<!----></span>`);
                }
              });
              $$renderer4.push(`<!----> `);
              {
                let children = function($$renderer5, { Directory, File: File2 }) {
                  if (Directory) {
                    $$renderer5.push("<!--[-->");
                    Directory($$renderer5, {
                      name: ".gen",
                      expanded: true,
                      children: ($$renderer6) => {
                        if (Directory) {
                          $$renderer6.push("<!--[-->");
                          Directory($$renderer6, {
                            name: "snapshot",
                            expanded: true,
                            children: ($$renderer7) => {
                              if (Directory) {
                                $$renderer7.push("<!--[-->");
                                Directory($$renderer7, {
                                  name: "about",
                                  expanded: true,
                                  children: ($$renderer8) => {
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "index.html" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "data.json" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                  },
                                  $$slots: { default: true }
                                });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                              $$renderer7.push(` `);
                              if (Directory) {
                                $$renderer7.push("<!--[-->");
                                Directory($$renderer7, {
                                  name: "assets",
                                  expanded: true,
                                  children: ($$renderer8) => {
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "index-[hash].css" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "index-[hash].js" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "projects-[hash].css" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "projects-[hash].js" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "about-[hash].css" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "about-[hash].js" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "[other scripts and assets...]" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                  },
                                  $$slots: { default: true }
                                });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                              $$renderer7.push(` `);
                              if (Directory) {
                                $$renderer7.push("<!--[-->");
                                Directory($$renderer7, {
                                  name: "projects",
                                  expanded: true,
                                  children: ($$renderer8) => {
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "index.html" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                    $$renderer8.push(` `);
                                    if (File2) {
                                      $$renderer8.push("<!--[-->");
                                      File2($$renderer8, { name: "data.json" });
                                      $$renderer8.push("<!--]-->");
                                    } else {
                                      $$renderer8.push("<!--[!-->");
                                      $$renderer8.push("<!--]-->");
                                    }
                                  },
                                  $$slots: { default: true }
                                });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                              $$renderer7.push(` `);
                              if (File2) {
                                $$renderer7.push("<!--[-->");
                                File2($$renderer7, { name: "index.html" });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                              $$renderer7.push(` `);
                              if (File2) {
                                $$renderer7.push("<!--[-->");
                                File2($$renderer7, { name: "data.json" });
                                $$renderer7.push("<!--]-->");
                              } else {
                                $$renderer7.push("<!--[!-->");
                                $$renderer7.push("<!--]-->");
                              }
                            },
                            $$slots: { default: true }
                          });
                          $$renderer6.push("<!--]-->");
                        } else {
                          $$renderer6.push("<!--[!-->");
                          $$renderer6.push("<!--]-->");
                        }
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                };
                File_tree($$renderer4, { children });
              }
              $$renderer4.push(`<!----> <br/> <span>You can publish the `);
              Inline_code($$renderer4, { source: ".gen/snapshot" });
              $$renderer4.push(`<!----> directory to a CDN or any other web file server like <a target="_blank" href="https://docs.github.com/en/pages">GitHub Pages</a>, <a target="_blank" href="https://docs.gitlab.com/user/project/pages">GitLab Pages</a>, <a target="_blank" href="https://neocities.org">Neocities</a> and your website should render statically.</span>`);
            }
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
var gif1 = "/frizzante-docs-using-snapshots/assets/todos_example_gif_1.gif";
var diagram1 = "/frizzante-docs-using-snapshots/assets/todos_example_diagram_1.svg";
var $$css = {
  hash: "svelte-1bjcj9u",
  code: ":root {--hyper-table-padding: 1rem;--hyper-border-color: rgba(255, 255, 255, 0.3);}.hyper-table.svelte-1bjcj9u {overflow:auto;max-width:100%;max-height:100%;}.hyper-table.svelte-1bjcj9u > table:where(.svelte-1bjcj9u) {text-align:start;border-collapse:collapse;}.hyper-table.svelte-1bjcj9u > table:where(.svelte-1bjcj9u) > thead:where(.svelte-1bjcj9u) > tr:where(.svelte-1bjcj9u) > th:where(.svelte-1bjcj9u) {text-align:start;padding:var(--hyper-table-padding);font-weight:bold;}.hyper-table.svelte-1bjcj9u > table:where(.svelte-1bjcj9u) > tbody:where(.svelte-1bjcj9u) > tr:where(.svelte-1bjcj9u) > td:where(.svelte-1bjcj9u) {border-top:1px var(--hyper-border-color) solid;padding:var(--hyper-table-padding);}"
};
function Hyper_table($$renderer, $$props) {
  $$renderer.global.css.add($$css);
  $$renderer.component(($$renderer2) => {
    let { hyperlinks } = $$props;
    $$renderer2.push(`<div class="hyper-table svelte-1bjcj9u"><table class="svelte-1bjcj9u"><thead class="svelte-1bjcj9u"><tr class="svelte-1bjcj9u"><th class="svelte-1bjcj9u">Description</th><th class="svelte-1bjcj9u">Hyperlink</th></tr></thead><tbody class="svelte-1bjcj9u"><!--[-->`);
    const each_array = ensure_array_like(Object.keys(hyperlinks));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let key = each_array[$$index];
      const value = hyperlinks[key];
      $$renderer2.push(`<tr class="svelte-1bjcj9u"><td class="svelte-1bjcj9u"><span>${escape_html(key)}</span></td><td class="svelte-1bjcj9u"><a target="_blank"${attr("href", value)}><span>${escape_html(value)}</span></a></td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div>`);
  });
}
function Todos_example($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Todos Example" },
            { shift: 0, text: "Main" },
            { shift: 0, text: "Fallback" },
            { shift: 0, text: "Welcome View" },
            { shift: 0, text: "Todos View" },
            { shift: 0, text: "List Todos" },
            { shift: 0, text: "Remove Todos" },
            { shift: 0, text: "Toggle Todos" },
            { shift: 0, text: "Add Todos" },
            { shift: 0, text: "More Examples" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Snapshots", href: base("/snapshots", { dev }) },
          next: { label: "Docker", href: base("/docker", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Todos Example",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Todos Example" });
          $$renderer3.push(`<!----> <span>The starter template comes with a todos application.</span> <br/> <br/> `);
          Image($$renderer3, { src: gif1, width: "500px" });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Main" });
          $$renderer3.push(`<!----> <span>The server defines a few routes.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            func main() {
                defer servers.Start(server)
                server.Efs = efs
                server.Routes = []routes.Route{
                    {Pattern: "GET /", Handler: fallback.View},
                    {Pattern: "GET /welcome", Handler: welcome.View},
                    {Pattern: "GET /todos", Handler: todos.View},
                    {Pattern: "POST /toggle", Handler: todos.Toggle},
                    {Pattern: "POST /add", Handler: todos.Add},
                    {Pattern: "POST /remove", Handler: todos.Remove},
                }
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Fallback" });
          $$renderer3.push(`<!----> <span>The `);
          Inline_code($$renderer3, { source: "GET /" });
          $$renderer3.push(`<!----> pattern acts as a fallback.</span> `);
          Image($$renderer3, { src: diagram1, width: "100%" });
          $$renderer3.push(`<!----> <span>With that in mind, the fallback handler tries to send back a matching file using `);
          Inline_code($$renderer3, { source: "send.RequestedFile()" });
          $$renderer3.push(`<!----> or, if it doesn\u2019t exist, the `);
          Inline_code($$renderer3, { source: "Welcome" });
          $$renderer3.push(`<!----> view using `);
          Inline_code($$renderer3, { source: "welcome.View()" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            func View(client *clients.Client) {
                if !send.RequestedFile(client) {
                    welcome.View(client)
                }
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Welcome View" });
          $$renderer3.push(`<!----> <span>The `);
          Inline_code($$renderer3, { source: "Welcome" });
          $$renderer3.push(`<!----> view, among other things, renders a hyperlink pointing to "GET /todos".</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            func View(client *clients.Client) {
                send.View(client, views.View{Name: "Welcome"})
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            <Layout title="Welcome">
                <Logo />
                {@render Description()}
                <div class="pt-6"></div>
                <div class="flex justify-center gap-2 relative">
                    {@render BackgroundEffect()}
                    {@render TodosButton()}
                    {@render DocumentationButton()}
                </div>
            </Layout>
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            {#snippet TodosButton()}
                <a class="btn btn-primary btn-lg" {...href("/todos")}>
                    <span>Show Todos</span>
                    <Icon path={mdiArrowRight} size="18" />
                </a>
            {/snippet}
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Todos View" });
          $$renderer3.push(`<!----> <span>The `);
          Inline_code($$renderer3, { source: "GET /todos" });
          $$renderer3.push(`<!----> pattern is then captured by a Go handler function, which sends back the "Todos"
        view along with a list of items retrieved from the user\u2019s session.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            func View(client *clients.Client) {
                session := sessions.NewDefault()
                receive.Session(client, &session)
                defer func() { session.Error = "" }()
                send.View(client, views.View{Name: "todos", Props: Props{
                    Error: session.Error,
                    Items: session.Todos,
                }})
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>The user session is initialized with a few items.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                func NewDefault() *Session {
                    return &Session{
                        Todos: []Todo{
                            {Checked: false, Description: "Pet the cat."},
                            {Checked: false, Description: "Do laundry"},
                            {Checked: false, Description: "Pet the cat."},
                            {Checked: false, Description: "Cook"},
                            {Checked: false, Description: "Pet the cat."},
                        },
                    }
                }
            `
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> <span>The `);
          Inline_code($$renderer3, { source: "Todos" });
          $$renderer3.push(`<!----> view is a <a target="_blank" href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> web ui.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            ${"<"}script lang="ts">
                //...
                import type { Props, Todo } from "$gen/types/main/lib/routes/todos/Props"
                let { todos = [], error }: Props = $props()
                //...
            <\/script>
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            <Layout title="Todos">
                <div class="w-full min-w-[450px] max-w-2xl">
                    <div class="text-center">
                        {@render Description()}
                    </div>
                    <div class="card-body relative p-6">
                        {@render AddTodoForm()}
                        <div class="divider"></div>
                        {@render ShowTodosList(todos)}
                        {@render BackButton()}
                    </div>
                </div>
            </Layout>
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "List Todos" });
          $$renderer3.push(`<!----> <span>Items are listed by iterating over `);
          Inline_code($$renderer3, { source: "todos" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            {#snippet ShowTodosList(todos: sessions.Todo[])}
                {#if todos.length > 0}
                    {#each todos as todo, index (index)}
                        <div in:slide out:slide class="flex w-full text-base-content/80">
                            {@render ToggleTodoButton(todo, index)}
                            {@render RemoveTodoButton(index)}
                        </div>
                    {/each}
                    {@render CountUncheckedTodos()}
                {:else}
                    {@render NoTodosFound()}
                {/if}
            {/snippet}
        `
          });
          $$renderer3.push(`<!----> <span>Each item has remove and toggle buttons.</span> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Type `);
              Inline_code($$renderer4, { source: "sessions.Todo" });
              $$renderer4.push(`<!----> is an autogenerated type definition.</span> <span>See <a${attr("href", base("/type_definitions", { dev }))}>type definitions</a>.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Remove Todos" });
          $$renderer3.push(`<!----> <span>Items are removed by submitting a form to `);
          Inline_code($$renderer3, { source: "POST /remove" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            {#snippet RemoveTodoButton(index: number)}
                <form method="POST" {...action("/remove")}>
                    <input type="hidden" name="index" value={index} />
                    <button
                        type="submit"
                        class="btn btn-ghost btn-sm btn-square hover:text-error hover:bg-error/20 transition-colors"
                        aria-label="Delete"
                    >
                        <Icon path={mdiClose} size="18" />
                    </button>
                </form>
            {/snippet}
        `
          });
          $$renderer3.push(`<!----> `);
          Tip($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>If you need more control over errors and pending states see <a${attr("href", base("/web_standards#form-component", { dev }))}>Form Component</a>.</span>`);
            }
          });
          $$renderer3.push(`<!----> <span>The form is then captured by the `);
          Inline_code($$renderer3, { source: "Remove" });
          $$renderer3.push(`<!----> handler, which does some basic validation, error handling and then finally removes the item from the session.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            type RemoveForm struct {
                Index int \`form:"index"\`
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            func Remove(client *clients.Client) {
                session := sessions.NewDefault()
                receive.Session(client, &session)

                var form RemoveForm
                if !receive.Form(client, &form) {
                    session.Error = "could not parse form"
                    send.Navigate(client, "/todos")
                    return
                }

                if count := len(session.Todos); form.Index >= count || form.Index < 0 {
                    session.Error = "index out of bounds"
                    send.Navigate(client, "/todos")
                    return
                }

                session.Todos = append(
                    session.Todos[:form.Index],
                    session.Todos[form.Index+1:]...,
                )

                send.Navigate(client, "/todos")
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Toggle Todos" });
          $$renderer3.push(`<!----> <span>Items are toggled by submitting a form to `);
          Inline_code($$renderer3, { source: "POST /toggle" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            {#snippet ToggleTodoButton(todo: Todo, index: number)}
                {@const aria = todo.checked ? "Uncheck" : "Check"}
                {@const value = todo.checked ? "0" : "1"}
                {@const icon = todo.checked ? mdiCheckCircleOutline : mdiCircleOutline}
                <form method="POST" {...action("/toggle")} class="grow content-center">
                    <input type="hidden" name="index" value={index} />
                    <input type="hidden" name="value" {value} />
                    <button
                        type="submit"
                        class="w-full flex cursor-pointer"
                        class:line-through={todo.checked}
                        class:text-base-content={todo.checked}
                        class:opacity-50={todo.checked}
                        aria-label={aria}
                    >
                        <Icon path={icon} />
                        <div class="pr-4"></div>
                        <span>{todo.description}</span>
                    </button>
                </form>
            {/snippet}
        `
          });
          $$renderer3.push(`<!----> <span>The form is then captured by the `);
          Inline_code($$renderer3, { source: "Toggle" });
          $$renderer3.push(`<!----> handler.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            type ToggleForm struct {
                Index int \`form:"index"\`
                Value int \`form:"value"\`
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            func Toggle(client *clients.Client) {
                session := sessions.NewDefault()
                receive.Session(client, &session)

                var form ToggleForm
                if !receive.Form(client, &form) {
                    session.Error = "could not parse form"
                    send.Navigate(client, "/todos")
                }

                if count := len(session.Todos); form.Index >= count || form.Index < 0 {
                    session.Error = "index out of bounds"
                    send.Navigate(client, "/todos")
                    return
                }

                session.Todos[form.Index].Checked = form.Value > 0

                send.Navigate(client, "/todos")
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Add Todos" });
          $$renderer3.push(`<!----> <span>Items are added by submitting a form to `);
          Inline_code($$renderer3, { source: "POST /add" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            {#snippet AddTodoForm()}
                <form method="POST" {...action("/add")} class="flex">
                    <input
                        type="text"
                        name="description"
                        placeholder="Add a new task..."
                        class="input bg-base-100/ text-lg w-full"
                    />
                    <div class="pt-4"></div>
                    <button type="submit" class="btn btn-ghost text-lg">
                        <Icon path={mdiPlus} size="20" />
                        <span>Add</span>
                    </button>
                </form>

                {#if error}
                    <div class="pt-4"></div>
                    <div in:slide out:slide class="alert alert-error">
                        <span>{error}</span>
                    </div>
                {/if}
            {/snippet}
        `
          });
          $$renderer3.push(`<!----> <span>The form is then captured by the `);
          Inline_code($$renderer3, { source: "Add" });
          $$renderer3.push(`<!----> handler.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            type AddForm struct {
                Description string \`form:"description"\`
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            func Add(client *clients.Client) {
                session := sessions.NewDefault()
                receive.Session(client, &session)

                var form AddForm
                if !receive.Form(client, &form) {
                    session.Error = "could not parse form"
                    send.Navigate(client, "/todos")
                    return
                }

                if form.Description == "" {
                    session.Error = "description cannot be empty"
                    send.Navigate(client, "/todos")
                    return
                }

                session.Todos = append(session.Todos, sessions.Todo{
                    Checked:     false,
                    Description: form.Description,
                })

                send.Navigate(client, "/todos")
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "More Examples" });
          $$renderer3.push(`<!----> `);
          Hyper_table($$renderer3, {
            hyperlinks: {
              "A live chat application": "https://github.com/razshare/frizzante-example-chat",
              "A blog application with login and registration forms": "https://github.com/razshare/frizzante-example-blog"
            }
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
function Type_definitions($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Type Definitions" },
            { shift: 1, text: "Define your Go types" },
            { shift: 1, text: "Call types.Generate[T]()" },
            { shift: 1, text: "Generate types" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Cli", href: base("/cli", { dev }) },
          next: { label: "Snapshots", href: base("/snapshots", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Type Definitions",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Type Definitions" });
          $$renderer3.push(`<!----> <span>It is possible, but not required, to generate TypeScript type definitions from Go structs using <a${attributes({ ...href(base("/cli#plugins", { dev })) })}>cli plugins</a> and `);
          Inline_code($$renderer3, { source: "types.Generate[T]()" });
          $$renderer3.push(`<!---->, where T is the type you wish to generate.</span> <br/> <br/> `);
          Keyed_section($$renderer3, {
            key: "1",
            description: "Define your Go types.",
            children: ($$renderer4) => {
              Code($$renderer4, {
                lang: "go",
                source: `
                package welcome

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `
              });
              $$renderer4.push(`<!----> `);
              Note($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>All `);
                  Inline_code($$renderer5, { source: "json" });
                  $$renderer5.push(`<!----> tags are optional.</span>`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "2",
            description: "Call types.Generate[T]().",
            children: ($$renderer4) => {
              Code($$renderer4, {
                lang: "go",
                source: `
                package welcome

                func init() {
                    _ = types.Generate[Props]()
                }

                type Props struct {
                    Message string \`json:"message"\`
                    Error   string \`json:"error"\`
                }
            `
              });
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "3",
            description: "Generate types.",
            noLink: true,
            children: ($$renderer4) => {
              Code($$renderer4, {
                lang: "shell",
                source: `
                frizzante g types
            `
              });
              $$renderer4.push(`<!----> <span>This will generate your type definitions in `);
              Inline_code($$renderer4, { source: ".gen/types" });
              $$renderer4.push(`<!---->.</span> `);
              Code($$renderer4, {
                lang: "ts",
                source: `
                export type Props = welcome.Props
                export declare namespace welcome {
                    export type Props = {
                        message: string
                        error: string
                    }
                }
            `
              });
              $$renderer4.push(`<!----> `);
              Tip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>You can use the default `);
                  Inline_code($$renderer5, { source: "$gen" });
                  $$renderer5.push(`<!----> alias to access the `);
                  Inline_code($$renderer5, { source: ".gen" });
                  $$renderer5.push(`<!----> directory.</span> `);
                  Code($$renderer5, {
                    lang: "ts",
                    source: `
                    ${"<"}script lang="ts">
                        import type { Props } from "$gen/types/main/lib/routes/welcome/Props"
                        let { message, error }:Props = $props()
                    <\/script>
                `
                  });
                  $$renderer5.push(`<!---->`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
function Views($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Views" },
            { shift: 0, text: "Server Exports" },
            { shift: 0, text: "Client Exports" },
            { shift: 0, text: "Send Views" },
            { shift: 0, text: "Default View" },
            { shift: 0, text: "View Properties" },
            { shift: 0, text: "Render Modes" },
            { shift: 1, text: "RenderModeFull" },
            { shift: 1, text: "RenderModeServer" },
            { shift: 1, text: "RenderModeClient" },
            {
              shift: 0,
              text: "Disabling the server-side JavaScript runtime"
            }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Guards", href: base("/guards", { dev }) },
          next: {
            label: "Web Standards",
            href: base("/web_standards", { dev })
          }
        });
      };
      Page($$renderer2, {
        title: "Views",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Views" });
          $$renderer3.push(`<!----> <span>Views are svelte components exported by `);
          Inline_code($$renderer3, { source: "app/exports.server.ts" });
          $$renderer3.push(`<!----> and/or `);
          Inline_code($$renderer3, { source: "app/exports.client.ts" });
          $$renderer3.push(`<!---->.</span> `);
          {
            let children = function($$renderer4, { Directory, File: File2 }) {
              if (Directory) {
                $$renderer4.push("<!--[-->");
                Directory($$renderer4, {
                  name: "app",
                  expanded: true,
                  children: ($$renderer5) => {
                    if (File2) {
                      $$renderer5.push("<!--[-->");
                      File2($$renderer5, { name: "exports.client.ts", icon: mdiCodeBraces });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                    $$renderer5.push(` `);
                    if (File2) {
                      $$renderer5.push("<!--[-->");
                      File2($$renderer5, { name: "exports.server.ts", icon: mdiCodeBraces });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            };
            File_tree($$renderer3, { children });
          }
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Server Exports" });
          $$renderer3.push(`<!----> <span>Views that are meant to be rendered on the server should be exported by `);
          Inline_code($$renderer3, { source: "app/exports.server.ts" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            import Welcome from '$lib/views/welcome.svelte'
            import Profile from '$lib/views/profile.svelte'
            export const views = {
                "Welcome": Welcome,
                "Profile": Profile,
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Client Exports" });
          $$renderer3.push(`<!----> <span>Views that are meant to be rendered on the client should be exported by `);
          Inline_code($$renderer3, { source: "app/exports.client.ts" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            export const views = {
                "Welcome": () => import('$lib/views/welcome.svelte'),
                "Profile": () => import('$lib/views/profile.svelte'),
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>These views are being imported asynchronously in order to split them in different bundles, however you can
            simply create fake promises in order to bundle them all together and eliminate network latency when
            transitioning between views.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
                import Welcome from '$lib/views/welcome.svelte'
                import Profile from '$lib/views/profile.svelte'
                export const views = {
                    "Welcome": () => Promise.resolve(Welcome),
                    "Profile": () => Promise.resolve(Profile),
                }
            `
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Keys in `);
              Inline_code($$renderer4, { source: "app/exports.server.ts" });
              $$renderer4.push(`<!----> and `);
              Inline_code($$renderer4, { source: "app/exports.client.ts" });
              $$renderer4.push(`<!----> are not mutually exclusive.</span> <br/> <span>You can render the same component on both the server and the client at the same time.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Send Views" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.View()" });
          $$renderer3.push(`<!----> to send a view.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{Name: "Welcome"}) // Sends view "Welcome".
            }
        `
          });
          $$renderer3.push(`<!----> <span>The Name of the view will be used to lookup the view component exported by `);
          Inline_code($$renderer3, { source: "app/exports.server.ts" });
          $$renderer3.push(`<!----> and/or `);
          Inline_code($$renderer3, { source: "app/exports.client.ts" });
          $$renderer3.push(`<!---->.</span> `);
          Title($$renderer3, { text: "Default View" });
          $$renderer3.push(`<!----> <span>There is no way to specify a "<strong>default view</strong>\u201D.</span> <span>However, you can use `);
          Inline_code($$renderer3, { source: "send.RequestedFile()" });
          $$renderer3.push(`<!----> in order to send the requested file or run custom logic if it doesn\u2019t exist.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome
            
            import (
                "os"

                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
                "main/lib/routes/welcome"
            )

            func View(client *clients.Client) {
                if !send.RequestedFile(client) { // Tries to send the requested file, or else...
                    welcome.View(client)         // ...sends the welcome view.
                }
            }
        `
          });
          $$renderer3.push(`<!----> <span>Usually you would map this handler to the default `);
          Inline_code($$renderer3, { source: "GET /" });
          $$renderer3.push(`<!----> pattern, which automatically captures all unmatched requests.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package main

            import (
                "embed"
                "main/lib/core/clients"
                "main/lib/core/servers"
                "main/lib/routes/welcome"
            )

            //go:embed app/dist
            var efs embed.FS
            var server = servers.New()                              // Creates server.

            func main() {
                defer servers.Start(server)                         // Starts server.
                server.Efs = efs                                    // Sets embedded file system.
                server.Routes = append(server.Routes, routes.Route{ // Adds route to the server.
                    Pattern: "GET /",
                    Handler: welcome.View,
                })
            }
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "View Properties" });
          $$renderer3.push(`<!----> <span>Optionally, you can specify properties for your View with the Props field.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome
            
            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{ // Sends view.
                    Name: "Welcome",          // Sets view name.
                    Props: map[string]string{ // Sets view props, which will be injected into the svelte component.
                        "name": "world",      // Adds property "name" with value "world".
                    },
                })
            }
        `
          });
          $$renderer3.push(`<!----> <span>These properties are passed down to your view component.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            ${"<"}script lang="ts">
                type Props = { name: string }
                let {name}:Props = $props() // Retrieves view props.
            <\/script>

            <Title  text="Hello {name}"/>
        `
          });
          $$renderer3.push(`<!----> `);
          Note($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<span>View properties are initialized with <a target="_blank" href="https://svelte.dev/docs/svelte/$state">$state()</a> and thus are reactive by default.</span>`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Render Modes" });
          $$renderer3.push(`<!----> <span>You can choose how to render views by setting one of 3 values for the `);
          Inline_code($$renderer3, { source: "RenderMode" });
          $$renderer3.push(`<!----> field in your `);
          Inline_code($$renderer3, { source: "View" });
          $$renderer3.push(`<!---->.</span> <br/> <br/> `);
          Keyed_section($$renderer3, {
            key: "1",
            description: "RenderModeFull",
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Using `);
              Inline_code($$renderer4, { source: "RenderModeFull" });
              $$renderer4.push(`<!---->, the view is rendered on both the server and the client.</span> <br/> <span>This is the <strong>default</strong> mode.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{        // Sends view.
                    Name: "Welcome",                 // Sets view name.
                    RenderMode: view.RenderModeFull, // Renders view on server and client.
                })
            }
        `
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "2",
            description: "RenderModeServer",
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Using `);
              Inline_code($$renderer4, { source: "RenderModeServer" });
              $$renderer4.push(`<!---->, the view is rendered only on the server.</span> <br/> <span>You\u2019ll have to deal away with apis such as <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a>; your new best friend is <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form"><span>form</span></a>.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets view name.
                    RenderMode: view.RenderModeServer, // Renders view only on server.
                })
            }
        `
              });
              $$renderer4.push(`<!----> `);
              Tip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->While using `);
                  Inline_code($$renderer5, { source: "RenderModeServer" });
                  $$renderer5.push(`<!----> the view won\u2019t serve a JavaScript bundle, but you can still
            use the `);
                  Inline_code($$renderer5, { source: "<svelte:head>" });
                  $$renderer5.push(`<!----> special tag in order to load scripts dynamically.`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Keyed_section($$renderer3, {
            key: "3",
            description: "RenderModeClient",
            noLink: true,
            children: ($$renderer4) => {
              $$renderer4.push(`<span>Using `);
              Inline_code($$renderer4, { source: "RenderModeClient" });
              $$renderer4.push(`<!---->, the view is rendered only on the client by loading a
            JavaScript bundle asynchronously.</span> `);
              Code($$renderer4, {
                lang: "go",
                source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client) {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets view name.
                    RenderMode: view.RenderModeClient, // Renders view only on client.
                })
            }
        `
              });
              $$renderer4.push(`<!----> `);
              Tip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<span>You can combine any of these render modes with adaptive hyperlinks and forms.</span> <br/> <span>Read more about `);
                  Link($$renderer5, {
                    href: base("/web_standards", { dev }),
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->web standards`);
                    }
                  });
                  $$renderer5.push(`<!---->.</span>`);
                }
              });
              $$renderer4.push(`<!----> `);
              Tip($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->When using `);
                  Inline_code($$renderer5, { source: "RenderModeFull" });
                  $$renderer5.push(`<!----> or `);
                  Inline_code($$renderer5, { source: "RenderModeServer" });
                  $$renderer5.push(`<!---->, You can
            configure how many JavaScript runtimes are executed in parallel by setting the `);
                  Inline_code($$renderer5, { source: "FRIZZANTE_JS_RUNTIME_LIMIT" });
                  $$renderer5.push(`<!----> environment variable. `);
                  Code($$renderer5, { lang: "shell", source: "FRIZZANTE_JS_RUNTIME_LIMIT=3 ./app" });
                  $$renderer5.push(`<!----> `);
                  Caution($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<span>Settings this limit too high could lead to large memory usage by your JavaScript runtimes.</span> <br/> <span>For most use cases a limit of 1 runtime (the default) is more than enough, after all, the Svelte
                    compiler is simply concatenating strings together when rendering pages on the server. Modify this
                    field based on actual performance measurements.</span>`);
                    }
                  });
                  $$renderer5.push(`<!---->`);
                }
              });
              $$renderer4.push(`<!---->`);
            }
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Disabling the server-side JavaScript runtime" });
          $$renderer3.push(`<!----> <span>You can add the `);
          Inline_code($$renderer3, { source: "no_js_runtime" });
          $$renderer3.push(`<!----> tag to your build process to completely disable the server-side
        JavaScript runtime.</span> `);
          Code($$renderer3, {
            lang: "shell",
            source: "frizzante --build --tags=no_js_runtime"
          });
          $$renderer3.push(`<!----> <span>This will reduce the minimum size of the final binary from 25MB to 10MB.</span>`);
        }
      });
    }
  });
}
function Web_sockets($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, { items: [{ shift: 0, text: "Web Sockets" }] });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Basics", href: base("/basics", { dev }) },
          next: {
            label: "Server Sent Events",
            href: base("/server_sent_events", { dev })
          }
        });
      };
      Page($$renderer2, {
        title: "Web Sockets",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Web Sockets" });
          $$renderer3.push(`<!----> <span>Use `);
          Inline_code($$renderer3, { source: "send.WsUpgrade()" });
          $$renderer3.push(`<!----> to upgrade the connection to web sockets.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `routes.Route{Pattern: "GET /ws", Handler: welcome.View}`
          });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
                "time"
            )

            func View(client *clients.Client) {
                alive := receive.IsAlive(client)          // Tracks request status.
                send.WsUpgrade(client)                    // Sends ws upgrade.
                for *alive {                              // Loops until cancellation.
                    name := receive.Message(client)       // Receives message.
                    send.Message(client, "Hello " + name) // Sends message.
                    time.Sleep(time.Second)               // Sleeps for 1 second.
                }
            }
        `
          });
          $$renderer3.push(`<!----> <span>Then consume the web socket on the client.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
        ${"<"}script lang="ts">
            const messages: string[] = $state([]) // Creates reactive list of messages.
            const socket = new WebSocket("/ws")   // Connects to handler.
            socket.addEventListener("message", function listen(event:MessageEvent) {
                messages.push(event.data)         // Appends incoming messages to the 
                                                  // reactive list of messages for later use.
            })
            socket.send("Hello")                  // Sends message.
        <\/script>

        <Title  text="Messages"/>
        {#each messages as message, id (id)}      <!-- Iterates the list of messages. -->
            <div>{message}</div>                  <!-- Renders message. -->
        {/each}

    `
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
function Web_standards($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { dev } = $$props;
    {
      let rightSidebar = function($$renderer3) {
        Right_sidebar($$renderer3, {
          items: [
            { shift: 0, text: "Web Standards" },
            { shift: 0, text: "Adaptive Hyperlinks" },
            { shift: 0, text: "Adaptive Forms" },
            { shift: 0, text: "Link Component" },
            { shift: 0, text: "Form Component" }
          ]
        });
      }, footer = function($$renderer3) {
        Footer($$renderer3, {
          previous: { label: "Views", href: base("/views", { dev }) },
          next: { label: "Cli", href: base("/cli", { dev }) }
        });
      };
      Page($$renderer2, {
        title: "Web Standards",
        dev,
        rightSidebar,
        footer,
        children: ($$renderer3) => {
          Title($$renderer3, { text: "Web Standards" });
          $$renderer3.push(`<!----> <span>You can use `);
          Inline_code($$renderer3, { source: "href()" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "action()" });
          $$renderer3.push(`<!----> in order to make your hyperlinks and forms adapt to the client\u2019s browser capabilities and/or the server\u2019s rendering
        configuration.</span> `);
          Title($$renderer3, { text: "Adaptive Hyperlinks" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            ${"<"}script lang="ts">
                import { href } from "$lib/scripts/core/href.ts"
            <\/script>

            <a {...href("/some-other-page")}> Go to some other page </a> <!-- Defines a link, which when triggered will either
                                                                              directly navigate to the given path, or do so using 
                                                                              fetch, depending on wether JavaScript is enabled or not. -->
        `
          });
          $$renderer3.push(`<!----> <span>When JavaScript is disabled, `);
          Inline_code($$renderer3, { source: "<a>" });
          $$renderer3.push(`<!----> will render as a traditional anchor, which by default will navigate the client away to `);
          Inline_code($$renderer3, { source: "/some-other-page" });
          $$renderer3.push(`<!---->.</span> <br/> <span>On the other hand, when JavaScript is enabled, `);
          Inline_code($$renderer3, { source: "<a>" });
          $$renderer3.push(`<!----> will render to an anchor that overrides the default behavior of the browser. Instead of navigating away immediately, <a${attr("href", base("/some-other-page", { dev }))}>fetch</a> is used to retrieve the contents of `);
          Inline_code($$renderer3, { source: "/some-other-page" });
          $$renderer3.push(`<!----> and update the current state and view based on the server\u2019s response.</span> <br/> <span>For example, given the following handler using `);
          Inline_code($$renderer3, { source: "view.RenderModeServer" });
          $$renderer3.push(`<!----></span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome
            
            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client)  {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets name of the view.
                    RenderMode: view.RenderModeServer, // Renders view only on the server.
                })
            }
        `
          });
          $$renderer3.push(`<!----> <span>The view will ultimately render the following in the client\u2019s browser.</span> `);
          Code($$renderer3, {
            lang: "html",
            source: `
            <a href="/some-other-page"> Go to some other page </a>
        `
          });
          $$renderer3.push(`<!----> <span>But using `);
          Inline_code($$renderer3, { source: "view.RenderModeFull" });
          $$renderer3.push(`<!----> will instead render</span> `);
          Code($$renderer3, {
            lang: "html",
            source: `
            <a href="/some-other-page" onclick="onclick(event)"> Go to some other page </a>
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Adaptive Forms" });
          $$renderer3.push(`<!----> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            ${"<"}script lang="ts">
                import { action } from "$lib/scripts/core/action.ts"
            <\/script>

            <form {...action("/process")}>            <!-- Defines a form. -->
                <input type="text" name="name" />     <!-- Defines a text field. -->
                <button type="submit">Submit</button> <!-- Defines a button, which when triggered will either
                                                           directly submit the form, or do so using fetch(),
                                                           depending on wether JavaScript is enabled or not. -->
            </form>
        `
          });
          $$renderer3.push(`<!----> <span>When JavaScript is disabled, `);
          Inline_code($$renderer3, { source: "<form>" });
          $$renderer3.push(`<!----> will render as a traditional form, which by default will submit to `);
          Inline_code($$renderer3, { source: "/process" });
          $$renderer3.push(`<!----> and navigate the client away.</span> <br/> <span>On the other hand, when JavaScript is enabled, `);
          Inline_code($$renderer3, { source: "<form>" });
          $$renderer3.push(`<!----> will render to a form that overrides
        the default behavior of the browser. Instead of navigating away immediately, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a> is used to submit the form to `);
          Inline_code($$renderer3, { source: "/process" });
          $$renderer3.push(`<!----> and update the current state and view based on the server\u2019s response.</span> <br/> <span>For example, given the following handler using `);
          Inline_code($$renderer3, { source: "view.RenderModeServer" });
          $$renderer3.push(`<!---->.</span> `);
          Code($$renderer3, {
            lang: "go",
            source: `
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client)  {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets name of the view.
                    RenderMode: view.RenderModeServer, // Renders view only on the server.
                })
            }
        `
          });
          $$renderer3.push(`<!----> <span>The view will ultimately render the following in the client\u2019s browser.</span> `);
          Code($$renderer3, {
            lang: "html",
            source: `
            <form action="/process">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `
          });
          $$renderer3.push(`<!----> <span>But using `);
          Inline_code($$renderer3, { source: "view.RenderModeFull" });
          $$renderer3.push(`<!----> will instead render.</span> `);
          Code($$renderer3, {
            lang: "html",
            source: `
            <form action="/process" onsubmit="onsubmit(event)">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `
          });
          $$renderer3.push(`<!----> <span>Where `);
          Inline_code($$renderer3, { source: "onsubmit(event)" });
          $$renderer3.push(`<!----> takes care of submitting the form and fetching the new state and view
        from `);
          Inline_code($$renderer3, { source: "/process" });
          $$renderer3.push(`<!---->.</span> `);
          Title($$renderer3, { text: "Link Component" });
          $$renderer3.push(`<!----> <span>Frizzante provides a `);
          Inline_code($$renderer3, { source: "<Link>" });
          $$renderer3.push(`<!----> component that captures pending and error states while navigating hyperlinks.</span> <br/> <span>It is a replacement for your `);
          Inline_code($$renderer3, { source: "<a>" });
          $$renderer3.push(`<!----> elements.</span> <br/> <span>In your project root directory, run the following</span> `);
          Code($$renderer3, { lang: "shell", source: "frizzante g links" });
          $$renderer3.push(`<!----> <span>This will add the `);
          Inline_code($$renderer3, { source: "<Link>" });
          $$renderer3.push(`<!----> component to your project.</span> <br/> <span>This component passes down `);
          Inline_code($$renderer3, { source: "pending" });
          $$renderer3.push(`<!----> and `);
          Inline_code($$renderer3, { source: "error" });
          $$renderer3.push(`<!----> states through the `);
          Inline_code($$renderer3, { source: "children" });
          $$renderer3.push(`<!----> snippet.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            ${"<"}script lang="ts">
                import Link from "$lib/components/links/link.svelte"
            <\/script>

            <Link href="/some-path">                               <!-- Defines a link. -->
                {#snippet children({pending, error})}              <!-- Captures the link's pending and error states. -->
                    {#if pending}                                  <!-- If the underlying http request is pending... -->
                        <span>Loading...</span>                    <!-- ...renders a loading hint. -->
                    {:else if error}                               <!-- If there's been some sort of error... -->
                        <span>Something went wrong: {error}</span> <!-- ...renders the error. -->
                    {:else}                                        <!-- If the link is idle... -->
                        <span>Click me</span>                      <!-- ...renders the link's idle content. -->
                    {/if}
                {/snippet}
            </Link>
        `
          });
          $$renderer3.push(`<!----> `);
          Title($$renderer3, { text: "Form Component" });
          $$renderer3.push(`<!----> <span>Frizzante provides a `);
          Inline_code($$renderer3, { source: "<Form>" });
          $$renderer3.push(`<!----> component that captures pending and error states while submitting forms.</span> <br/> <span>It is a replacement for your `);
          Inline_code($$renderer3, { source: "<form>" });
          $$renderer3.push(`<!----> elements.</span> <br/> <span>In your project root directory, run the following</span> `);
          Code($$renderer3, {
            lang: "shell",
            source: `
            frizzante g forms
        `
          });
          $$renderer3.push(`<!----> <span>This will add the `);
          Inline_code($$renderer3, { source: "<Form>" });
          $$renderer3.push(`<!----> component to your project.</span> <br/> <span>This component passes down pending and error states through the `);
          Inline_code($$renderer3, { source: "children" });
          $$renderer3.push(`<!----> snippet.</span> `);
          Code($$renderer3, {
            lang: "svelte",
            source: `
            ${"<"}script lang="ts">
                import Form from "$lib/components/forms/form.svelte"
            <\/script>

            <Form method="POST" action="/login">                            <!-- Defines a form. -->
                {#snippet children({pending, error})}                       <!-- Captures the forms's pending and error states. -->
                    <input type="email" name="email">                       <!-- Defines an email field. -->
                    <input type="password" name="password">                 <!-- Defines an password field. -->
                    <button disabled={pending} type="submit">Login</button> <!-- Defines a button, which is disabled when the form request is pending. -->

                    {#if error}                                             <!-- If there's been some sort of error... -->
                        <span>Something went wrong: {error}</span>          <!-- ...renders the error. -->
                    {/if}
                {/snippet}
            </Form>
        `
          });
          $$renderer3.push(`<!---->`);
        }
      });
    }
  });
}
var views = {
  GetStarted: Get_started,
  Basics,
  WebSockets: Web_sockets,
  ServerSentEvents: Server_sent_events,
  Guards,
  Views,
  WebStandards: Web_standards,
  TypeDefinitions: Type_definitions,
  TodosExample: Todos_example,
  Cli,
  Docker,
  Issues,
  Contributing,
  Faq,
  Snapshots,
  FullScreenMenu: Full_screen_menu
};
function Server_router($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { name, props, render: render2, align, type } = $$props;
    const components = views;
    const viewStateValue = { name, props, render: render2, align, type, async pin() {
    } };
    const view = viewStateValue;
    setContext("view", view);
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(Object.keys(components));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let key = each_array[$$index];
      if (key === view.name) {
        $$renderer2.push("<!--[0-->");
        const Component = components[key];
        if (Component) {
          $$renderer2.push("<!--[-->");
          Component($$renderer2, spread_props([view.props]));
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
async function render(args) {
  return render$1(Server_router, { props: args });
}

frizzante_set_render(render)