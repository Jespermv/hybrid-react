declare module '*.css';

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_MEDIA_API: string;
  readonly VITE_AUTH_API: string;
  readonly VITE_UPLOAD_API: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
