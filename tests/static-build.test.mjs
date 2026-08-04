import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const routes=["index.html","research/index.html","team/index.html","publications/index.html","news/index.html","404.html"];
test("build contains every static route and metadata file",async()=>{for(const route of routes)await access(new URL(`../dist/${route}`,import.meta.url));for(const file of ["robots.txt","sitemap.xml","favicon.svg"])await access(new URL(`../dist/${file}`,import.meta.url));});
test("production assets use root-safe URLs and no server services",async()=>{const html=await readFile(new URL("../dist/index.html",import.meta.url),"utf8");assert.match(html,/\/assets\//);assert.doesNotMatch(html,/openai\.site|localhost|cloudflare|chatgpt-auth/i);});
