<script lang="ts">
  import Page from './[...path]/+page.svelte';

  export let data;
</script>

<div style="background:papayawhip;padding:10px">
  <p>This is an unnecessary extra page, sibling to [...path]</p>
  <p>It's just importing and rendering the Page component from ./[...path]/+page.svelte</p>
  <p><em>Without this page, ISR doesn't work</em></p>
</div>

<Page {data} />
