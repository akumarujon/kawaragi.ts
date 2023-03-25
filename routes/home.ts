import { app } from "../app/mod.ts";
import html from "../layouts/layout.ts";
import posts from "../utils/posts.ts";

app.get("/", async (req, res) => {
  const css_path: string = await Deno.readTextFile(
    Deno.cwd() + "/static/style.css",
  );
  const css_link: string =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";

  const body: string = `<h1>Posts so far!</h1>
  <div>
${await posts()}
  </div>`;

  const favicon_link: string =
    "https://raw.githubusercontent.com/triistam/website/main/static/favicon.ico";

  const html_text = html(
    "Kawaragi | Blog",
    css_link,
    css_path,
    body,
    favicon_link,
  );

  res.send(html_text);
});

export { app };
