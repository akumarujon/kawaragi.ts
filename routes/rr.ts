import { app } from "../app/mod.ts";

import { rr } from "https://gist.githubusercontent.com/akumarujon/296b8c2978f8869edc4bd53c4ad9687c/raw/9e9e64cc2af9f9cea2ca4864406252eb0b950b6c/rr.ts";
app.get("/rr", rr);
