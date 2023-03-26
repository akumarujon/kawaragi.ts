export default function (
  title: string,
  link: string,
  style: string,
  body: string,
  favicon: string,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="${favicon}">
    <title>${title}</title>
    <style>${style}</style>
    <link rel="stylesheet" href="${link}">
</head>
<body>
<div class="header">
  <div class="min-header">
    <h1>Kawaragi<h1>

    <a href="https://kawaragi.deno.dev">Home</a>
    <a href="https://github.com/triistam/kawaragi.ts">Source</a>
  </div>
</div>

<div class="container">
 ${body}
 </div>
</body>
</html>`;
}
