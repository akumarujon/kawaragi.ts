import { app } from "../app/mod.ts";
import { MarkDownToHTML } from "../utils/mod.ts";

app.get("/:post", async (req, res) => {
  await res.send(await MarkDownToHTML(req.params.post)).end();
});

export { app };
