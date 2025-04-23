addEventListener("fetch", event => {
    let url = new URL(event.request.url)
    let path = url.pathname
  
    // If path is a directory (i.e., it ends with a slash), serve index.html
    if (path === "/") {
      path = "/index.html"
    } else if (path === "/privacy-policy") {
      path = "/privacy-policy.html"
    } else if (path === "/terms-of-service") {
      path = "/terms-of-service.html"
    } else if (path === "/data-deletion") {
      path = "/data-deletion.html"
    } else {
      path = path + ".html" // Append .html for other pages
    }
  
    event.respondWith(
      fetch(new Request(path, event.request))
        .catch(() => new Response("File not found", { status: 404 }))
    )
  })