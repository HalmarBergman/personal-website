import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["security"]?: typeof import("nuxt-security").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", NuxtConfig["pinia"]] | ["nuxt-security", NuxtConfig["security"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   security: {
      headers: {
         crossOriginResourcePolicy: {
            value: string,

            route: string,
         },

         crossOriginOpenerPolicy: {
            value: string,

            route: string,
         },

         crossOriginEmbedderPolicy: {
            value: string,

            route: string,
         },

         contentSecurityPolicy: {
            value: {
               "base-uri": Array<string>,

               "font-src": Array<string>,

               "form-action": Array<string>,

               "frame-ancestors": Array<string>,

               "img-src": Array<string>,

               "object-src": Array<string>,

               "script-src-attr": Array<string>,

               "style-src": Array<string>,

               "upgrade-insecure-requests": boolean,
            },

            route: string,
         },

         originAgentCluster: {
            value: string,

            route: string,
         },

         referrerPolicy: {
            value: string,

            route: string,
         },

         strictTransportSecurity: {
            value: {
               maxAge: number,

               includeSubdomains: boolean,
            },

            route: string,
         },

         xContentTypeOptions: {
            value: string,

            route: string,
         },

         xDNSPrefetchControl: {
            value: string,

            route: string,
         },

         xDownloadOptions: {
            value: string,

            route: string,
         },

         xFrameOptions: {
            value: string,

            route: string,
         },

         xPermittedCrossDomainPolicies: {
            value: string,

            route: string,
         },

         xXSSProtection: {
            value: string,

            route: string,
         },
      },

      requestSizeLimiter: {
         value: {
            maxRequestSizeInBytes: number,

            maxUploadFileRequestInBytes: number,
         },

         route: string,

         throwError: boolean,
      },

      rateLimiter: {
         value: {
            tokensPerInterval: number,

            interval: string,

            fireImmediately: boolean,
         },

         route: string,

         throwError: boolean,
      },

      xssValidator: {
         value: any,

         route: string,

         throwError: boolean,
      },

      corsHandler: {
         value: {
            origin: string,

            methods: Array<string>,

            preflight: {
               statusCode: number,
            },
         },

         route: string,

         throwError: boolean,
      },

      allowedMethodsRestricter: {
         value: string,

         route: string,

         throwError: boolean,
      },

      hidePoweredBy: boolean,

      basicAuth: boolean,

      enabled: boolean,
   },
  }
  interface PublicRuntimeConfig {

  }
}