import{_ as e,o as s,c as i,d as n}from"./app-2b088454.js";const t={},r=n(`<h1 id="how-our-tests-work" tabindex="-1"><a class="header-anchor" href="#how-our-tests-work" aria-hidden="true">#</a> How Our Tests Work</h1><p>For each test run, you will be informed if your site passed or failed for each issue that we looked for in that specific test suite.</p><ul><li>A <strong>“pass”</strong> is defined as code DID match the expected pattern/assertion defined in the test.</li><li>A <strong>“failure”</strong> is defined as code DID NOT match the expected pattern/assertion defined in the test.</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found <span class="token number">0</span> accessibility issues

Full Test Results were output to /example/folder/testing-sdk-output.html

::: END AudioEye SDK CLI :::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When a failure is returned, we will provide you the following information:</p><ul><li><strong>Unique issue identifier</strong> – Can be used to track the issue in project management tools.</li><li><strong>WCAG success criterion (name + number)</strong> – What WCAG criteria was being tested</li><li><strong>Issue name</strong> – Description of the issue.</li><li><strong>Issue type</strong> – Can be used to help evaluate your priority to fixing the issue. Two values expected are “Error” or “Warning”</li><li><strong>Issue location</strong> – Where the issue occurred.</li><li><strong>Fix advice (plain text)</strong> - Explanation of the issue discovered.</li><li><strong>Fix (code snippet)</strong> - Code example on how to fix the issue.</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found <span class="token number">3</span> accessibility issues
   imgTextAlt - count: <span class="token number">3</span>

Full Test Results were output to /example/folder/testing-sdk-output.html

::: END AudioEye SDK CLI :::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Issue Type</strong> is AudioEye’s confidence level on whether revision is needed. We will return two values:</p><ul><li><strong>Error</strong> = high confidence our test detected code that requires revision</li><li><strong>Warning</strong> = code did not match expected pattern but need closer review to determine if Error</li></ul>`,9),o=[r];function l(a,d){return s(),i("div",null,o)}const c=e(t,[["render",l],["__file","how-our-tests-work.html.vue"]]);export{c as default};
