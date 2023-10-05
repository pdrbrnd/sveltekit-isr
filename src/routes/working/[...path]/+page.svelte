<script lang="ts">
  import Revalidate from '$lib/components/revalidate.svelte';

  export let data;
</script>

<h1>[...path]/+page.svelte</h1>
<p>Random number: {data.number}</p>
<Revalidate />
