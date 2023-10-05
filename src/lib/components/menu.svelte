<p>Navigate and refresh the page:</p>

<ul>
  <li><a href="/">/ (no ISR)</a></li>
</ul>

<ul>
  <li><a href="/working">/working (ISR) ✅</a></li>
  <li><a href="/working/foo">/working/[...path] (ISR) ✅</a></li>
</ul>

<ul>
  <li><a href="/not-working">/not-working (ISR) ❌</a></li>
  <li><a href="/not-working/foo">/not-working/[...path] (ISR) ✅</a></li>
</ul>
