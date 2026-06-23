<script lang="ts">
  import { onMount } from "svelte";
  import { getApiKubernetesNodes } from "$lib/api/generated";

  let nodes = $state<string[]>([]);
  let loading = $state(true);

  onMount(async () => {
    nodes = await getApiKubernetesNodes();
    loading = false;
  });
</script>

<div class="flex flex-col gap-4">
  {#if loading}
    <p>Loading nodes...</p>
  {:else if nodes.length}
    <ul>
      {#each nodes as node}
        <li>{node}</li>
      {/each}
    </ul>
  {/if}
</div>
