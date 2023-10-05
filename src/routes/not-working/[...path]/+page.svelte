<script lang="ts">
  import Menu from '$lib/components/menu.svelte';
  import Params from '$lib/components/params.svelte';
  import Revalidate from '$lib/components/revalidate.svelte';

  export let data;
</script>

<Menu />
<Params />

<p>Random number: {data.number}</p>

<Revalidate />
