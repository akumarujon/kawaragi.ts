import { app } from "../app/mod.ts";
import { MarkDownToHTML } from "../utils/mod.ts";

app.get("/:post", async (req, res) => {
  console.log(await MarkDownToHTML(req.params.post))
  await res.send(await MarkDownToHTML(req.params.post)).end();
});

export { app };
