globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/std-env/dist/index.mjs';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, sendError, createError, getQuery, readBody, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/h3/dist/index.mjs';
import { createRenderer } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/vue/server-renderer/index.mjs';
import { withoutBase, parseURL, withQuery, joinURL } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/ufo/dist/index.mjs';
import destr from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/scule/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/hookable/dist/index.mjs';
import { hash } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/ohash/dist/index.mjs';
import { createStorage } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/unstorage/dist/drivers/fs.mjs';
import defu from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/radix3/dist/index.mjs';
import cache from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/memory-cache/index.js';
import { performance } from 'perf_hooks';
import { FilterXSS } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/xss/lib/index.js';
import { defineCorsEventHandler } from 'file:///Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/node_modules/@nozomuikuta/h3-cors/dist/index.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/**":{"headers":{"Cross-Origin-Resource-Policy":"same-origin","Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp","Content-Security-Policy":"base-uri 'self'; font-src 'self' https: data:; form-action 'self'; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests","Origin-Agent-Cluster":"?1","Referrer-Policy":"no-referrer","Strict-Transport-Security":"max-age=15552000; includeSubDomains","X-Content-Type-Options":"nosniff","X-DNS-Prefetch-Control":"off","X-Download-Options":"noopen","X-Frame-Options":"SAMEORIGIN","X-Permitted-Cross-Domain-Policies":"none","X-XSS-Protection":"0"}}}},"public":{},"security":{"headers":{"crossOriginResourcePolicy":{"value":"same-origin","route":"/**"},"crossOriginOpenerPolicy":{"value":"same-origin","route":"/**"},"crossOriginEmbedderPolicy":{"value":"require-corp","route":"/**"},"contentSecurityPolicy":{"value":{"base-uri":["'self'"],"font-src":["'self'","https:","data:"],"form-action":["'self'"],"frame-ancestors":["'self'"],"img-src":["'self'","data:"],"object-src":["'none'"],"script-src-attr":["'none'"],"style-src":["'self'","https:","'unsafe-inline'"],"upgrade-insecure-requests":true},"route":"/**"},"originAgentCluster":{"value":"?1","route":"/**"},"referrerPolicy":{"value":"no-referrer","route":"/**"},"strictTransportSecurity":{"value":{"maxAge":15552000,"includeSubdomains":true},"route":"/**"},"xContentTypeOptions":{"value":"nosniff","route":"/**"},"xDNSPrefetchControl":{"value":"off","route":"/**"},"xDownloadOptions":{"value":"noopen","route":"/**"},"xFrameOptions":{"value":"SAMEORIGIN","route":"/**"},"xPermittedCrossDomainPolicies":{"value":"none","route":"/**"},"xXSSProtection":{"value":"0","route":"/**"}},"requestSizeLimiter":{"value":{"maxRequestSizeInBytes":2000000,"maxUploadFileRequestInBytes":8000000},"route":"","throwError":true},"rateLimiter":{"value":{"tokensPerInterval":150,"interval":"hour","fireImmediately":true},"route":"","throwError":true},"xssValidator":{"value":{},"route":"","throwError":true},"corsHandler":{"value":{"origin":"*","methods":["GET","HEAD","PUT","PATCH","POST","DELETE"],"preflight":{"statusCode":204}},"route":"","throwError":true},"allowedMethodsRestricter":{"value":"*","route":"","throwError":true},"hidePoweredBy":false,"basicAuth":false,"enabled":true}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const serverAssets = [{"baseName":"server","dir":"assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/halmarbergman/Documents/Persoonlijk/Website/personal-website","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      if (response.statusCode) {
        event.node.res.statusCode = response.statusCode;
      }
      if (response.statusMessage) {
        event.node.res.statusMessage = response.statusMessage;
      }
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

let serverRunning = false;
function server$1() {
  if (serverRunning) {
    return;
  }
  console.log("Starting server");
  serverRunning = true;
}

const publicRoutes = ["/api/env"];
const _vVKxEc = defineEventHandler((event) => {
  var _a;
  console.log("New request: " + event.path);
  const headers = getRequestHeaders(event);
  server$1();
  if ((_a = event.path) == null ? void 0 : _a.startsWith("/api/")) {
    if (publicRoutes.includes(event.path)) {
      console.log("Public route, no authorization required");
      return eventHandler((event2) => ({ url: event2.path }));
    }
    if (headers["x-api-key"] === process.env.API_KEY) {
      console.log("API key provided");
      return eventHandler((event2) => ({ url: event2.path }));
    }
    return sendError(event, createError({ statusCode: 401, statusMessage: "Unauthorized" }));
  }
});

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const securityConfig$3 = useRuntimeConfig().security;
const FILE_UPLOAD_HEADER = "multipart/form-data";
const _NRYA6P = defineEventHandler(async (event) => {
  if (["POST", "PUT", "DELETE"].includes(event.node.req.method)) {
    const contentLengthValue = getRequestHeader(event, "content-length");
    const contentTypeValue = getRequestHeader(event, "content-type");
    const isFileUpload = contentTypeValue?.includes(FILE_UPLOAD_HEADER);
    const requestLimit = isFileUpload ? securityConfig$3.requestSizeLimiter.value.maxUploadFileRequestInBytes : securityConfig$3.requestSizeLimiter.value.maxRequestSizeInBytes;
    if (parseInt(contentLengthValue) >= requestLimit) {
      if (securityConfig$3.requestSizeLimiter.throwError) {
        throw createError({ statusCode: 413, statusMessage: "Payload Too Large" });
      } else {
        return { statusCode: 413, statusMessage: "Payload Too Large" };
      }
    }
  }
});

function hrtime(previousTimestamp) {
  const clocktime = performance.now() * 1e-3;
  let seconds = Math.floor(clocktime);
  let nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp != void 0) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
function getMilliseconds() {
  const [seconds, nanoseconds] = hrtime();
  return seconds * 1e3 + Math.floor(nanoseconds / 1e6);
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class TokenBucket {
  constructor({ bucketSize, tokensPerInterval, interval, parentBucket }) {
    this.bucketSize = bucketSize;
    this.tokensPerInterval = tokensPerInterval;
    if (typeof interval === "string") {
      switch (interval) {
        case "sec":
        case "second":
          this.interval = 1e3;
          break;
        case "min":
        case "minute":
          this.interval = 1e3 * 60;
          break;
        case "hr":
        case "hour":
          this.interval = 1e3 * 60 * 60;
          break;
        case "day":
          this.interval = 1e3 * 60 * 60 * 24;
          break;
        default:
          throw new Error("Invalid interval " + interval);
      }
    } else {
      this.interval = interval;
    }
    this.parentBucket = parentBucket;
    this.content = 0;
    this.lastDrip = getMilliseconds();
  }
  /**
   * Remove the requested number of tokens. If the bucket (and any parent
   * buckets) contains enough tokens this will happen immediately. Otherwise,
   * the removal will happen when enough tokens become available.
   * @param count The number of tokens to remove.
   * @returns A promise for the remainingTokens count.
   */
  async removeTokens(count) {
    if (this.bucketSize === 0) {
      return Number.POSITIVE_INFINITY;
    }
    if (count > this.bucketSize) {
      throw new Error(`Requested tokens ${count} exceeds bucket size ${this.bucketSize}`);
    }
    this.drip();
    const comeBackLater = async () => {
      const waitMs = Math.ceil((count - this.content) * (this.interval / this.tokensPerInterval));
      await wait(waitMs);
      return this.removeTokens(count);
    };
    if (count > this.content)
      return comeBackLater();
    if (this.parentBucket != void 0) {
      const remainingTokens = await this.parentBucket.removeTokens(count);
      if (count > this.content)
        return comeBackLater();
      this.content -= count;
      return Math.min(remainingTokens, this.content);
    } else {
      this.content -= count;
      return this.content;
    }
  }
  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens this will
   * return true, otherwise false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens(count) {
    if (!this.bucketSize)
      return true;
    if (count > this.bucketSize)
      return false;
    this.drip();
    if (count > this.content)
      return false;
    if (this.parentBucket && !this.parentBucket.tryRemoveTokens(count))
      return false;
    this.content -= count;
    return true;
  }
  /**
   * Add any new tokens to the bucket since the last drip.
   * @returns {Boolean} True if new tokens were added, otherwise false.
   */
  drip() {
    if (this.tokensPerInterval === 0) {
      const prevContent2 = this.content;
      this.content = this.bucketSize;
      return this.content > prevContent2;
    }
    const now = getMilliseconds();
    const deltaMS = Math.max(now - this.lastDrip, 0);
    this.lastDrip = now;
    const dripAmount = deltaMS * (this.tokensPerInterval / this.interval);
    const prevContent = this.content;
    this.content = Math.min(this.content + dripAmount, this.bucketSize);
    return Math.floor(this.content) > Math.floor(prevContent);
  }
}

class RateLimiter {
  constructor({ tokensPerInterval, interval, fireImmediately }) {
    this.tokenBucket = new TokenBucket({
      bucketSize: tokensPerInterval,
      tokensPerInterval,
      interval
    });
    this.tokenBucket.content = tokensPerInterval;
    this.curIntervalStart = getMilliseconds();
    this.tokensThisInterval = 0;
    this.fireImmediately = fireImmediately !== null && fireImmediately !== void 0 ? fireImmediately : false;
  }
  /**
   * Remove the requested number of tokens. If the rate limiter contains enough
   * tokens and we haven't spent too many tokens in this interval already, this
   * will happen immediately. Otherwise, the removal will happen when enough
   * tokens become available.
   * @param count The number of tokens to remove.
   * @returns A promise for the remainingTokens count.
   */
  async removeTokens(count) {
    if (count > this.tokenBucket.bucketSize) {
      throw new Error(`Requested tokens ${count} exceeds maximum tokens per interval ${this.tokenBucket.bucketSize}`);
    }
    const now = getMilliseconds();
    if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    }
    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
      if (this.fireImmediately) {
        return -1;
      } else {
        const waitMs = Math.ceil(this.curIntervalStart + this.tokenBucket.interval - now);
        await wait(waitMs);
        const remainingTokens2 = await this.tokenBucket.removeTokens(count);
        this.tokensThisInterval += count;
        return remainingTokens2;
      }
    }
    const remainingTokens = await this.tokenBucket.removeTokens(count);
    this.tokensThisInterval += count;
    return remainingTokens;
  }
  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens and we
   * haven't spent too many tokens in this interval already, this will return
   * true. Otherwise, false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens(count) {
    if (count > this.tokenBucket.bucketSize)
      return false;
    const now = getMilliseconds();
    if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    }
    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval)
      return false;
    const removed = this.tokenBucket.tryRemoveTokens(count);
    if (removed) {
      this.tokensThisInterval += count;
    }
    return removed;
  }
  /**
   * Returns the number of tokens remaining in the TokenBucket.
   * @returns {Number} The number of tokens remaining.
   */
  getTokensRemaining() {
    this.tokenBucket.drip();
    return this.tokenBucket.content;
  }
}

const securityConfig$2 = useRuntimeConfig().security;
const _HaPsjl = defineEventHandler(async (event) => {
  const ip = getRequestHeader(event, "x-forwarded-for");
  if (!cache.get(ip)) {
    const cachedLimiter = new RateLimiter(securityConfig$2.rateLimiter.value);
    cache.put(ip, cachedLimiter, 1e4);
  } else {
    const cachedLimiter = cache.get(ip);
    if (cachedLimiter.getTokensRemaining() > 1) {
      await cachedLimiter.removeTokens(1);
      cache.put(ip, cachedLimiter, 1e4);
    } else {
      if (securityConfig$2.rateLimiter.throwError) {
        throw createError({ statusCode: 429, statusMessage: "Too Many Requests" });
      } else {
        return { statusCode: 429, statusMessage: "Too Many Requests" };
      }
    }
  }
});

const securityConfig$1 = useRuntimeConfig().security;
const xssValidator = new FilterXSS(securityConfig$1.xssValidator.value);
const _A2hy0p = defineEventHandler(async (event) => {
  if (["POST", "GET"].includes(event.node.req.method)) {
    const valueToFilter = event.node.req.method === "GET" ? getQuery(event) : readBody(event);
    const stringifiedValue = JSON.stringify(valueToFilter);
    const processedValue = xssValidator.process(JSON.stringify(valueToFilter));
    if (processedValue !== stringifiedValue) {
      if (securityConfig$1.requestSizeLimiter.throwError) {
        throw createError({ statusCode: 400, statusMessage: "Bad Request" });
      } else {
        return { statusCode: 400, statusMessage: "Bad Request" };
      }
    }
  }
});

const securityConfig = useRuntimeConfig().security;
const _KCPZN1 = defineEventHandler(defineCorsEventHandler(securityConfig.corsHandler.value));

const _lazy_GPrCER = () => Promise.resolve().then(function () { return env_get$1; });
const _lazy_eNic9f = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _vVKxEc, lazy: false, middleware: true, method: undefined },
  { route: '/api/env', handler: _lazy_GPrCER, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_eNic9f, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _NRYA6P, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _HaPsjl, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _A2hy0p, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _KCPZN1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_eNic9f, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});

const env_get = defineEventHandler(() => {
  if (process.env.ENVIRONMENT === "production") {
    return "production";
  }
  if (process.env.ENVIRONMENT === "test") {
    return "test";
  }
  return "development";
});

const env_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: env_get
});

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('/Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('/Users/halmarbergman/Documents/Persoonlijk/Website/personal-website/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.node.req.headers["x-nuxt-no-ssr"] || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
