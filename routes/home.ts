import { app } from "../app/mod.ts";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export { app };
