<script lang="ts">
  import { mode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button";
  import { toggleMode } from "mode-watcher";
</script>

<nav class="flex flex-col gap-4 border w-minp-5 bg-card dark:bg-card-dark">
  <div class="flex gap-4 justify-between items-center">
    <h1 class="font-bold">Kubernetes Visualiser</h1>

    <Button variant="default" onclick={toggleMode}>
      {#if mode.current === "dark"}
        Light
      {:else}
        Dark
      {/if}
    </Button>
  </div>
</nav>
