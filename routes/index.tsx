


import { asset } from "$fresh/runtime.ts";

import { Handlers } from "$fresh/server.ts";


// ok I got it just created handler for automaticli load translated page


export const handler = {
  GET(_req: Request, _ctx: Handlers) {
    const url = new URL(_req.url);
    url.pathname = "./test.html";
    return Response.redirect(url.toString(), 302);
  },
};
