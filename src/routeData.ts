import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  // Get the URL of the Open Graph image to use.
  const ogImageUrl = new URL("https://designingtheweb.dev/_astro/course-banner.ZxgimIni_1USpeK.webp", context.site);

  // Get the array of all tags to include in the `<head>` of the current page.
  const { head } = context.locals.starlightRoute;

  // Add the `<meta/>` tags for the Open Graph images.
  head.push(
	{
    	tag: "meta",
    	attrs: { property: "og:image", content: ogImageUrl.href },
  	},{
    	tag: "meta",
    	attrs: { name: "twitter:image", content: ogImageUrl.href },
  	}
  );

});