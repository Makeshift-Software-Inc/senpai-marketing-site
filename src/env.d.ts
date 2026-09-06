/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Minimum supported iOS version shown on /download. Defaults to "14" if unset. */
  readonly IOS_MIN_VERSION?: string;
}
