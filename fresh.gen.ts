// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $index from "./routes/index.tsx";
import * as $about from "./islands/about.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/about.tsx": $about,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
