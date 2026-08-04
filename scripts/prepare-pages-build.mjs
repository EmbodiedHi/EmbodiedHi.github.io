import { copyFile, mkdir } from "node:fs/promises";

for (const route of ["index.html", "research/index.html", "team/index.html", "publications/index.html", "news/index.html"]) {
  const target = new URL(`../${route}`, import.meta.url);
  await mkdir(new URL("./", target), { recursive: true });
  await copyFile(new URL(`../source-pages/${route}`, import.meta.url), target);
}
