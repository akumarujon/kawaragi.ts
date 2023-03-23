import { showdown } from "../deps.ts";

export async function MarkDownToHTML(filename: string): Promise<string> {
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
  return converter.makeHtml(markdown);
}
