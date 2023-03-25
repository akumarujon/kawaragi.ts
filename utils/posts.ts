export default async function (): Promise<string> {
  let files: string[] = [];

  for await (const element of Deno.readDir(Deno.cwd() + "/posts")) {
    let filename: string = element.name.split(".md")[0];
    let title: string = filename.replace("-", " ");
    await files.push(
      `<li><a href="/${filename}" class="link">${title}</a></li>`,
    );
  }

  return `<ul>
${files.join("\n")}    
</ul>`;
}
