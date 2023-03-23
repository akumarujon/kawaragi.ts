import { app } from "../app/mod.ts";

import { rr } from "https://gist.githubusercontent.com/triistam/296b8c2978f8869edc4bd53c4ad9687c/raw/4b59e841c8941873b11a42733bb9a9108731543d/rr.ts";
app.get("/rr", rr);
