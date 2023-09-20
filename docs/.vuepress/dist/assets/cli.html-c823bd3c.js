import{_ as e,o as t,c as n,d as a}from"./app-2b088454.js";const s={},i=a(`<h1 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h1><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><h3 id="scanning-a-page" tabindex="-1"><a class="header-anchor" href="#scanning-a-page" aria-hidden="true">#</a> Scanning a page</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>aetest scan <span class="token operator">&lt;</span> example_inputs.document.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">Command</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">-c <br> ‑‑component</td><td style="text-align:left;">Run in component mode. This will create an empty HTML document and inject HTML into the</td></tr><tr><td style="text-align:left;">-p <br> ‑‑print‑test‑list</td><td style="text-align:left;">This prints a list of tests that will be run</td></tr></tbody></table><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found <span class="token number">3</span> accessibility issues
   imgTextAlt - count: <span class="token number">3</span>

Full Test Results were output to /example/folder/testing-sdk-output.html

::: END AudioEye SDK CLI :::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[i];function l(r,c){return t(),n("div",null,d)}const u=e(s,[["render",l],["__file","cli.html.vue"]]);export{u as default};
