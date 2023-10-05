<script lang="ts">
  import Menu from '$lib/components/menu.svelte';
  import Params from '$lib/components/params.svelte';

  export let data;
</script>

<Menu />
<Params />

<p>Random number: {data.number}</p>
