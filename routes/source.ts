import { app } from "../app/mod.ts";

app.get("/source", (req, res) => {
  res.redirect("https://github.com/triistam/kawaragi.ts");
});

export { app };
