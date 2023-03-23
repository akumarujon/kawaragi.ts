import { app } from "./app/mod.ts";
import "./routes/mod.ts";

app.listen(3000, () => {
  console.log("Run: http://localhost:3000");
});
