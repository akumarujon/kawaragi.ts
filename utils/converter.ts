import { showdown } from "../deps.ts";
import to_html from "../layouts/layout.ts";

export async function MarkDownToHTML(filename: string): Promise<string> {
  const css_path: string = await Deno.readTextFile(
    Deno.cwd() + "/static/style.css",
  );
  const css_link: string =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
  let title: string = filename.replace("-", " ");
  const markdown = await Deno.readTextFile(
    Deno.cwd() + `/posts/${filename}.md`,
  );

  const favicon_link: string =
    "https://raw.githubusercontent.com/triistam/website/main/static/favicon.ico";
  // await Deno.cwd() + '/static/favicon.ico'
  // "https://raw.githubusercontent.com/triistam/website/main/static/favicon.ico";

  const converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    openLinksInNewWindow: true,
    ghMentions: true,
    tables: true,
  });

  title = title.charAt(0).toUpperCase() + title.slice(1);
  await showdown.setFlavor("github");
  return to_html(
    title,
    css_link,
    css_path,
    converter.makeHtml(markdown),
    favicon_link,
  ).replaceAll("language-", "language ");
}
