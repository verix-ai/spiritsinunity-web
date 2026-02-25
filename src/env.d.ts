/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly STRIPE_PUBLISHABLE_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
