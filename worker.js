export default {
    async fetch(request, env, ctx) {
      return new Response("Static site assets are served automatically.", {
        headers: { "content-type": "text/plain" },
      });
    },
  };
  