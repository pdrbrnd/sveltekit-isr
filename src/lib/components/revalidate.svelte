<script lang="ts">
  import { page } from '$app/stores';

  let loading = false;
  let success = false;
  let error = false;

  const revalidate = () => {
    loading = true;
    success = false;
    error = false;

    fetch(`/revalidate?path=${encodeURIComponent($page.url.pathname)}`)
      .then(() => {
        success = true;
      })
      .catch(() => {
        error = true;
      })
      .finally(() => {
        loading = false;
      });
  };
</script>

<button on:click={revalidate}>
  {#if loading}
    Revalidating...
  {:else if success}
    Revalidated!
  {:else if error}
    Error!
  {:else}
    Revalidate
  {/if}
</button>
