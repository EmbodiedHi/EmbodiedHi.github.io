import { cp, rm } from "node:fs/promises";

for (const path of ["assets", "images"]) {
  await rm(new URL(`../${path}`, import.meta.url), { recursive: true, force: true });
}
await cp(new URL("../dist/", import.meta.url), new URL("../", import.meta.url), { recursive: true, force: true });
