import { app } from "./app/mod.ts";
import "./routes/mod.ts";

app.listen(5000, () => {
  console.log("Run: http://localhost:5000");
});
