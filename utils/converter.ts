import { showdown } from "../deps.ts";
import to_html from "../layouts/layout.ts";


export async function MarkDownToHTML(filename: string): Promise<string> {
  const css_path: string = await Deno.readTextFile(Deno.cwd() + "/static/style.css");
  const title:string = "Post"
  const markdown = await Deno.readTextFile(
    Deno.cwd() + `/posts/${filename}.md`,
  );

  const converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    openLinksInNewWindow: true,
    ghMentions: true,
    tables: true,
  });

  await showdown.setFlavor("github");
  return to_html(title, css_path, converter.makeHtml(markdown))
}
