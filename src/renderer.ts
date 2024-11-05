import {Post} from './wp';

export class Renderer {

  static generatePost(post: Post): string {
    const {title, content, excerpt, date, link, slug} = post;

    // Generate HTML template - should be nextjs serverside component
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title.rendered}</title>

  <!-- SEO Meta Tags -->
  <meta name="description" content="${excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}">
  <link rel="canonical" href="${link}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title.rendered}">
  <meta property="og:description" content="${excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}">
  <meta property="og:url" content="${link}">
  <meta property="og:site_name" content="Your Site Name">
  <meta property="article:published_time" content="${new Date(date).toISOString()}">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title.rendered}">
  <meta name="twitter:description" content="${excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}">

  <!-- Additional SEO Keywords (optional) -->
  <meta name="keywords" content="Your, Keywords, Here">

  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .post-title { font-size: 2em; font-weight: bold; margin-bottom: 0.5em; }
    .post-date { color: gray; font-size: 0.9em; margin-bottom: 1em; }
    .post-content { line-height: 1.6; }
  </style>
</head>
<body>
  <article>
    <header>
      <h1 class="post-title">${title.rendered}</h1>
      <time class="post-date" datetime="${new Date(date).toISOString()}">${new Date(date).toLocaleDateString()}</time>
    </header>
    <section class="post-content">
      ${content.rendered}
    </section>
  </article>
</body>
</html>
  `;
  }



}
