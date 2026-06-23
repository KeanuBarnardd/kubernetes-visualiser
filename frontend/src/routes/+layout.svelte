<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import Button from "$lib/components/ui/button/button.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import { ModeWatcher } from "mode-watcher";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex gap-5 min-h-screen bg-background p-5">
  <ModeWatcher />
  <Navbar />
  <main class="flex-1">
    {@render children()}
  </main>
</div>
