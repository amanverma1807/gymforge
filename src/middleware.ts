import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  
  // Check if the hostname is www.gymforge.online
  if (url.hostname === "www.gymforge.online") {
    const newUrl = new URL(url.href);
    newUrl.hostname = "gymforge.online";
    
    // Perform a 301 Redirect
    return context.redirect(newUrl.href, 301);
  }
  
  return next();
});
